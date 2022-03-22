import React from "react";


const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>selected Items : {cart.length}</h5>
      <h5>Total Price :12</h5>
    </div>
  );
};

export default Cart;
