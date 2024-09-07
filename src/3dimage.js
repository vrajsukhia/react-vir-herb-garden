import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';
import JSZip from 'jszip';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import lavenderZip from './lavender.zip';

function ModelViewer() {
  const containerRef = useRef(null);
  const [modelUrl, setModelUrl] = useState(null);
  const [textures, setTextures] = useState({});
  const modelRef = useRef(null);
  const isInteracting = useRef(false);
  const rotateTimer = useRef(null);

  useEffect(() => {
    const loadZip = async () => {
      const response = await fetch(lavenderZip);
      const blob = await response.blob();
      const zip = await JSZip.loadAsync(blob);
      const fileNames = Object.keys(zip.files);
      const daeFile = fileNames.find(name => name.endsWith('.dae'));
      const textureFiles = fileNames.filter(name => name.startsWith('model/') && (name.endsWith('.jpg') || name.endsWith('.png')));

      if (daeFile) {
        const daeBlob = await zip.file(daeFile).async('blob');
        setModelUrl(URL.createObjectURL(daeBlob));
      }

      const texturesObj = {};
      for (const textureFile of textureFiles) {
        const textureBlob = await zip.file(textureFile).async('blob');
        const textureUrl = URL.createObjectURL(textureBlob);
        texturesObj[textureFile] = textureUrl;
      }
      setTextures(texturesObj);
    };
    loadZip();
  }, []);

  useEffect(() => {
    if (!modelUrl || Object.keys(textures).length === 0) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.enablePan = true;

    const loader = new ColladaLoader();
    loader.load(modelUrl, (collada) => {
      const model = collada.scene;
      model.scale.set(0.25, 0.25, 0.25);
      model.position.set(0, -2, 0);
      modelRef.current = model;

      model.traverse((child) => {
        if (child.isMesh) {
          child.material.map = null;
          child.material.needsUpdate = true;

          for (const textureFile in textures) {
            const textureUrl = textures[textureFile];
            const texture = new THREE.TextureLoader().load(textureUrl);
            child.material.map = texture;
            child.material.needsUpdate = true;
          }
        }
      });

      scene.add(model);
      camera.position.z = 10;

      let autoRotate = true;
      const rotationSpeed = 0.001;

      const animate = () => {
        requestAnimationFrame(animate);
        if (modelRef.current) {
          if (autoRotate) {
            modelRef.current.rotation.z += rotationSpeed;
          }
        }
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const onInteractionStart = () => {
        isInteracting.current = true;
        if (rotateTimer.current) {
          clearTimeout(rotateTimer.current);
        }
        autoRotate = false;
      };

      const onInteractionEnd = () => {
        isInteracting.current = false;
        rotateTimer.current = setTimeout(() => {
          autoRotate = true;
        }, 2000);
      };

      controls.addEventListener('start', onInteractionStart);
      controls.addEventListener('end', onInteractionEnd);

      return () => {
        window.removeEventListener('resize', () => {});
        controls.removeEventListener('start', onInteractionStart);
        controls.removeEventListener('end', onInteractionEnd);
        clearTimeout(rotateTimer.current);
        renderer.dispose();
        scene.dispose();
      };
    }, (error) => {
      console.error('Error loading the .dae file:', error);
    });
  }, [modelUrl, textures]);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default ModelViewer;