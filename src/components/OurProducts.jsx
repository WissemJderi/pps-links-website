import React from "react";
import Product from "./Product";

const OurProducts = () => {
  return (
    <div className="products">
      <h1>Nos Produits</h1>
      <h3>Emballages Alimentaires pour Livraison</h3>
      <div className="products-container">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default OurProducts;
