import React from "react";
import Button from "../Button/Button";
import "./Cart.css";

const Cart = ({ carts, clearAllCarts, children }) => {
  const totalOfEveryThing = (name, quantity) => {
    let total = 0;
    carts.forEach((cart) => {
      if (quantity) {
        total += cart[name] * cart.quantity;
      } else {
        total += cart[name];
      }
    });
    return total;
  };
  const tax = (totalOfEveryThing("price", true) * 0.1).toFixed(2);
  const grandTotal =
    totalOfEveryThing("price", true) +
    totalOfEveryThing("shipping", true) +
    parseFloat(tax);

  return (
    <div className="order-summary">
      <h3 className="text-center">Order Summary</h3>
      <div className="pt-5">
        <h6 className="py-2">
          selected Items: {totalOfEveryThing("quantity")}
        </h6>
        <h6 className="py-2">
          Total Price: ${totalOfEveryThing("price", true)}
        </h6>
        <h6 className="py-2">
          Total Shipping Charge: ${totalOfEveryThing("shipping", true)}
        </h6>
        <h6 className="py-2">Tax: ${tax}</h6>
        <h6 className="py-2">Grand Total: ${grandTotal} </h6>
        <Button
          clearAllCarts={clearAllCarts}
          color={"danger my-4 w-100"}
          btnValue={"Clear Cart"}
          icon="delete"
        />

        {children}
      </div>
    </div>
  );
};

export default Cart;
