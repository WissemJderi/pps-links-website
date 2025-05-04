import React from "react";
import Product from "./Product";
import products from "../data/products";

const OurProducts = () => {
  const productList = products.map((product) => {
    return (
      <Product
        productName={product.productName}
        image={product.image}
        dimensions={product.dimensions}
        material={product.material}
        color={product.color}
      />
    );
  });
  return (
    <div className="products">
      <h1>Nos Produits</h1>
      <h3>Emballages Alimentaires pour Livraison</h3>
      <div className="products-container">{productList}</div>
    </div>
  );
};

export default OurProducts;
