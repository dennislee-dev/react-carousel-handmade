import React from "react";
import "../App.css";

const Item = ({ image, name, price }) => {
  return (
    <div className="carousel__item">
      <div>
        <img src={image} className="item__image" alt={name} />
        <p className="item__name">{name}</p>
        <p className="item__price">{price}</p>
      </div>
    </div>
  );
};

export default Item;
