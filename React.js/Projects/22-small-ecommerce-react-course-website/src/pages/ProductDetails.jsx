import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/product";
import { useCart } from "../context/CartContext";

export const ProductDetails = () => {
  const { id } = useParams();
  const [productsList, setProductList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findProducts = getProductById(id);

    if (!findProducts) {
      return navigate("/");
    }

    setProductList(findProducts);
  }, [id]);

  const {cartItems, addToCart} = useCart()
    const productsInCart = cartItems.find((item) => item.id === productsList?.id)
    const productLabel = productsInCart && `(${productsInCart.quantity})` 

  return (
    <div className="page">
      { productsList ? 
        <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={productsList.image} alt={productsList.name} />
          </div>
          <div className="product-detail-content">
            <h3 className="product-detail-name">{productsList.name}</h3>
            <p className="product-detail-price">${productsList.price}</p>
            <p className="product-detail-description">
              {productsList.description}
            </p>
            <button className="btn btn-primary" onClick={() => addToCart(productsList.id)}>Add to Cart {productLabel}</button>
          </div>
        </div>
      </div> : <h3>Loading...</h3>
      }
    </div>
  );
};
