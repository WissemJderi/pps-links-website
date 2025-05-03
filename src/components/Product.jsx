import React from "react";

const Product = () => {
  return (
    <div
      style={{ backgroundColor: "white" }}
      className="product-box
    "
    >
      <img
        src="https://mutcanpack.com/wp-content/uploads/2024/07/tekgozlu-taban.jpg"
        alt=""
      />
      <div className="product-text">
        <p>Plateau 240×205 H42 - Plateau 1</p>
        <p>
          <span>Matériau :</span>PP (Polypropylene)
        </p>
        <p>
          <span>Description :</span>Idéal pour les petites portions, parfait
          pour la livraison de repas rapides.
        </p>
        <p>Boîte à Emporter 3 Compartiments</p>
        <p>
          <span>Dimensions :</span> L x W x H in cm
        </p>
      </div>
    </div>
  );
};

export default Product;
