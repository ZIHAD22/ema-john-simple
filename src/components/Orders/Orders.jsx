import React from "react";
import { Link } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [carts, setCarts] = useCarts(products);

  const handleRemoveOrderedPd = (id) => {
    const rest = carts.filter((pd) => pd._id !== id);
    setCarts(rest);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {carts.map((product) => (
          <ReviewItem
            key={product._id}
            handleRemoveOrderedPd={handleRemoveOrderedPd}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container px-5 py-2">
        <Cart carts={carts}>
          <Link to="/inventory">
            <Button
              color={"warning text-light w-100"}
              btnValue={"Proceed Checkout"}
            />
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
