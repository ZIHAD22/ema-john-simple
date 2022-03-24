import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./AddToCartIcon.css";

const AddToCartIcon = () => {
  return (
    <div className="position-relative">
      <div className="add-to-cart bg-dark text-light">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
};

export default AddToCartIcon;
