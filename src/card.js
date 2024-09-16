import React, { useState } from "react";
import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import cards from "./db";
import ReactDOMServer from 'react-dom/server';

const CardModal = ({ isOpen, closeModal, card }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>X</button>
        <img src={card.image} alt={card.title} className="modal-image" />
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <button className="view-3d-button" onClick={() => window.location.href = card.link}>3D View</button>
      </div>
    </div>
  );
};
const Ce = ({ card, onCardClick }) => {
  const descriptionString = ReactDOMServer.renderToString(card.description);
  const lines = descriptionString.split('<br/>');

  return (
    <div className="ce" onClick={() => onCardClick(card)}>
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p className="description">
        {lines.slice(5).map((line, index) => (
          <span key={index}>
            {line.includes('<strong>') && (
              <span dangerouslySetInnerHTML={{ __html: line }} />
            )}
          </span>
        ))}
      </p>
    </div>
  );
};

const Ap = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCards, setVisibleCards] = useState(3);


  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };
    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setVisibleCards(3);
  };
    const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
    const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) => Math.min(prevVisibleCards + 3, filteredCards.length));
  };

  const handleSeeLess = () => {
    setVisibleCards((prevVisibleCards) => Math.max(prevVisibleCards - 3, 3));
  };


  return (
<div className="ap">
  <div className="search-bar-container flex">
    <input type="text" id="search-box" placeholder="Search..." className="px-3 py-2 rounded-l-lg border-none outline-none text-black w-96" value={searchQuery} onChange={handleSearchChange} />
    <button type="submit" id="search-button" className="bg-gray-300 rounded-r-lg p-2 flex items-center justify-center hover:bg-gray-400">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
    </button>
    </div>
      <div className="card-container">
         {filteredCards.slice(0, visibleCards).map((card, index) => (
          <Ce key={index} card={card} onCardClick={openModal} />
        ))}
      </div>
      <div className="button-container">
        {visibleCards < filteredCards.length && (
          <button className="see-more-button" onClick={handleSeeMore}>See More</button>
        )}
        {visibleCards > 3 && (
          <button className="see-less-button" onClick={handleSeeLess}>See Less</button>
        )}
      </div>
      <CardModal isOpen={isModalOpen} closeModal={closeModal} card={selectedCard} />
    </div>
  );
};

export default Ap;