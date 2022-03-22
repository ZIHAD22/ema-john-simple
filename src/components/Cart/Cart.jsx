import React from "react";
import Button from "../Button/Button";

const Cart = ({ carts, clearAllCarts }) => {
  const totalPriceAndCharge = (name, quantity) => {
    let total = 0;
    carts.forEach((cart) => {
      if (quantity) {
        // total = 1;
        total += cart[name] * cart.quantity;
      } else {
        total += cart[name];
      }
    });
    return total;
  };
  const tax = (totalPriceAndCharge("price", true) * 0.1).toFixed(2);
  const grandTotal =
    totalPriceAndCharge("price", true) +
    totalPriceAndCharge("shipping", true) +
    parseFloat(tax);

  return (
    <div>
      <h3 className="text-center">Order Summary</h3>
      <div className="pt-5">
        <h6 className="py-2">
          selected Items: {totalPriceAndCharge("quantity")}
        </h6>
        <h6 className="py-2">
          Total Price: ${totalPriceAndCharge("price", true)}
        </h6>
        <h6 className="py-2">
          Total Shipping Charge: ${totalPriceAndCharge("shipping", true)}
        </h6>
        <h6 className="py-2">Tax: ${tax}</h6>
        <h6 className="py-2">Grand Total: ${grandTotal} </h6>
        <Button
          clearAllCarts={clearAllCarts}
          color={"danger my-4 w-100"}
          btnValue={"Clear Cart"}
          icon="delete"
        />
        <Button
          color={"warning text-light w-100"}
          btnValue={"Review Order"}
          clearAllCarts={clearAllCarts}
        />
      </div>
    </div>
  );
};

export default Cart;
