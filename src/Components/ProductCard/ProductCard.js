import React, { useState, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./ProductCard.css";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useDetectOutsideClick } from "../../useDetectOutsideClick";

const DropdownProduct = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <div className="product-container">
      <button onClick={handleClick} className="product-trigger">
      <BsThreeDotsVertical />
      </button>
      <nav ref={dropdownRef} className={`dropdownProduct ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><Link to="#">Edit</Link></li>
          <li><Link to="#">Delete</Link></li>
        </ul>
      </nav>
    </div>
  )
}

function ProductCard({ image, desc, price, key }) {
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="product__card">
      <img className="product__cardImg" src={image} alt={desc} />
      <DropdownProduct/>
      <p className="product__cardDesc">{desc}</p>
      <p className="product__cardPrice">${price}</p>
      {/* {modal && (
        <Modal isOpen={true} onRequestClose={closeModal}>
            <button className="close__modal" onClick={closeModal}>x</button>
              <div className="">
                
              </div>
        </Modal>
      )} */}
    </div>
  );
}

export default ProductCard;
