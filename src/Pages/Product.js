import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";

import ProductCard from "../Components/ProductCard/ProductCard";

import "./Product.css";

Modal.setAppElement("body");

function Product() {
  const [product, setProduct] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("http://3.25.210.151/api/Admin/Product", {
          params: {
            limit: 8,
          },
        })
        .then((res) => setProduct(res.data.products));
    };
    getProduct();
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    const data = {
      "categoryID": id,
      "name": name,
      "description": description,
      "price": price,
    }
    axios.post('http://3.25.210.151/api/Admin/Product', data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err) )
  }
  return (
    <div className="product">
      <h2>Product</h2>
      <div className="product__nav">
        <button className="product__add" onClick={openModal}>
          Add Product
        </button>
        <div className="product__search">
          <input placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="product__main">
        {product.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.media.url}
              desc={product.description}
              price={product.price}
            />
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add product"
      >
        <button onClick={closeModal} className="exitButton">{<ImCross/>}</button>
        <form className="formAdd" onSubmit={handleAdd}>
          <div className="form__control">
            <label>Name: </label>
            <input
              className="form__input"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              name="name"
            />
          </div>
          <div class="form__control">
            <label>Id: </label>
            <input
              className="form__input"
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
              name="id"
            />
          </div>
          <div class="form__control">
            <label>Description: </label>
            <input
              className="form__input"
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              name="description"
            />
          </div>
          <div class="form__control">
            <label>Price: </label>
            <input
              className="form__input"
              type="text"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
              name="price"
            />
          </div>
          <button className="form__buttonAdd" type="submit">Add</button>
        </form>
      </Modal>
    </div>
  );
}

export default Product;
