import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './3dimage.css'
function ThreeModelViewer({ glbSrc, cameraPosition, backButtonUrl }) {
  const containerRef = useRef(null);
  const modelRef = useRef(null);
  const isInteracting = useRef(false);
  const rotateTimer = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 2);
    scene.add(pointLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 2);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(glbSrc, (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(1, 1, 1);
      modelRef.current = model;
      scene.add(model);

      model.traverse((child) => {
        if (child.isMesh) {
          // child.material.color.setHex(0xffffff, 1);
        }
      });
    }, undefined, (error) => {
      console.error('Error loading the .glb file:', error);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.enablePan = true;
    camera.position.set(...cameraPosition);

    let autoRotate = true;
    const rotationSpeed = 0.001;
    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        if (autoRotate) {
          modelRef.current.rotation.y += rotationSpeed;
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
  }, [glbSrc, cameraPosition]);

  return (
    <div>
      <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
      <button
        id="backButton"
        className="back-button"
        onClick={() => (window.location.href = backButtonUrl)}
      >
        X
      </button>
    </div>
  );
}

export default ThreeModelViewer;