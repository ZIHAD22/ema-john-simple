import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const Button = ({ color, btnValue, icon, clearAllCarts }) => {
  return (
    <div>
      <button onClick={() => clearAllCarts()} className={"btn btn-" + color}>
        {btnValue + " "}
        {icon === "delete" ? (
          <FontAwesomeIcon icon={faDeleteLeft} />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} />
        )}
      </button>
    </div>
  );
};

export default Button;
