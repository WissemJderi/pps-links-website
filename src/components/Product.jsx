import React from "react";

const Product = ({ productName, image, dimensions, material, color }) => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="product-box
    "
    >
      <img src={image} alt="" />
      <div className="product-text">
        <p>{productName}</p>
        <p>
          <span>Couleur : </span>
          {color}
        </p>
        <p>
          <span>Matériau :</span>
          {material}
        </p>
        <p>
          <span>Description :</span>Idéal pour les petites portions, parfait
          pour la livraison de repas rapides.
        </p>
        <p>
          <span>Dimensions :</span> {dimensions}
        </p>
      </div>
    </div>
  );
};

export default Product;
