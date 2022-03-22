import React from "react";

const Cart = ({ carts }) => {
  const totalPriceAndCharge = (name) => {
    let totalPrice = 0;
    carts.map((cart) => (totalPrice += cart[name]));
    return totalPrice;
  };
  return (
    <div>
      <h3 className="text-center">Order Summary</h3>
      <div className="pt-5">
        <h6 className="py-2">selected Items : {carts.length}</h6>
        <h6 className="py-2">Total Price :${totalPriceAndCharge("price")}</h6>
        <h6 className="py-2">
          Total Shipping Charge: ${totalPriceAndCharge("shipping")}
        </h6>
      </div>
    </div>
  );
};

export default Cart;
