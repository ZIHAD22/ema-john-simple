import React from "react";

import "./ShoppingCard.css";

const ShoppingCard = ({
  product: { id, img, name, seller, price, ratings },
  handleAddToCard,
}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={img} className="card-img-top p-2" alt="" />
        <div className="card-body">
          <h5 className="card-title" aria-label="Open To Read Title">
            {name.length > 30 ? name.slice(0, 25) + " ..." : name}
          </h5>
          <p className="card-text">Price: {price}</p>
          <div className="">
            <small>Manufacturer : {seller}</small>
            <small className="d-block">Rating : {ratings} start</small>
          </div>
        </div>
        <div
          onClick={() => handleAddToCard({ id, price })}
          className="card-footer text-center"
        >
          <small className="">Add to Cart</small>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
