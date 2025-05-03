import React from "react";

const Advantages = () => {
  return (
    <div className="advantages">
      <h1>Pourquoi nous choisir ?</h1>
      <ul>
        <li>
          Produits de qualité <br />
          Nos contenants sont fabriqués à partir de matériaux sûrs, solides et
          adaptés à l’usage alimentaire.
        </li>
        <li>
          Livraison rapide en Tunisie Nous livrons vos commandes rapidement dans
          toutes les régions du pays.
        </li>
        <li>
          {" "}
          Prix compétitifs Des tarifs adaptés aux professionnels, avec un
          excellent rapport qualité-prix.
        </li>
        <li>
          {" "}
          Service client réactif Nous sommes disponibles pour répondre à vos
          questions et vous accompagner dans vos commandes.
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
