import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src="../../public/Group 5.svg" alt="" />
        <div className="nav-links">
          <p>Acceuil</p>
          <p>Produits</p>
          <p>Pourquoi nous?</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="sub-nav">
        <p>
          <span>Email :</span>jawher@mutcan.com
        </p>
        <p>
          <span>Téléphone & WhatsApp :</span> 50505050
        </p>
        <p>
          <span>Adresse :</span>123 Rue de Commerce, Tunis, Tunisie
        </p>
      </div>
    </>
  );
};

export default Navbar;
