import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./ProductCard.css";
import Modal from "react-modal";

function ProductCard({ image, desc, price, key }) {
  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const handleDropdown = () => setDropdown(!dropdown);
  return (
    <div className="product__card">
      <img className="product__cardImg" src={image} alt={desc} />
      <span className="product__cardDetail" onClick={handleDropdown}>
        <BsThreeDotsVertical />
      </span>
      <div
        className={
          dropdown
            ? "product__cardDropdownActive"
            : "product__cardDropdownHidden"
        }
      >
        <div className="product__cardDropdownElement" onClick={openModal}>Edit</div>
        <div className="product__cardDropdownElement">Delete</div>
      </div>
      <p className="product__cardDesc">{desc}</p>
      <p className="product__cardPrice">${price}</p>
      {modal && (
        <Modal isOpen={true} onRequestClose={closeModal}>
            <button className="close__modal" onClick={closeModal}>x</button>
              <div className="">
                
              </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductCard;
