import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

import ProductCard from "../Components/ProductCard/ProductCard";

import './Product.css';

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("http://3.25.210.151/api/Admin/Product")
        .then((res) => setProduct(res.data.products));
    };
    getProduct();
  }, []);

  return (
    <div className="product">
      <h2>Product</h2>
      <div className="product__nav">
        <button className="product__add">Add Product</button>
        <div className="product__search">
          <input placeholder="Search" />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="product__main">
        {
          // console.log(product)
            product.map((product) => {
                return (
                    <ProductCard image={"https://via.placeholder.com/150"} 
                    desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    price={product.price} />
                )
            })
        }
      </div>
    </div>
  );
}

export default Product;