import React, { useEffect, useState } from 'react'
import ShoppingCard from '../ShoppingCard/ShoppingCard'

import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  const handleAddToCard = (productInfo) => {
    setCart([...cart, productInfo])
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        <div className="row g-4">
          {products.map((product) => (
            <ShoppingCard
              handleAddToCard={handleAddToCard}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
      <div className="cart-container px-3">
        <h3>Order Summary</h3>
        <h5>selected Items : {cart.length}</h5>
        <h5>Total Price :12</h5>
      </div>
    </div>
  )
}

export default Shop
