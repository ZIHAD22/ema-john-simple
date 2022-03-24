import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./AddToCartIcon.css";

const AddToCartIcon = ({ isShowingCart, totalQuantity }) => {
  return (
    <div className="position-relative" onClick={isShowingCart}>
      <div className="add-to-cart bg-dark text-light ">
        <div className="product-count d-flex">
          <small>{totalQuantity()}</small>
        </div>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
};

export default AddToCartIcon;
