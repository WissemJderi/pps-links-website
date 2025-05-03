import React from "react";
import Product from "./Product";

const OurProducts = () => {
  return (
    <div className="products">
      <h1>Nos Produits</h1>
      <h3>Emballages Alimentaires pour Livraison</h3>
      <p>
        Des barquettes et contenants pratiques pour les restaurants et services
        de livraison. Résistants, hygiéniques et prêts à l’emploi.
        <Product />
        <Product />
      </p>
    </div>
  );
};

export default OurProducts;
