import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import ShoppingCard from '../ShoppingCard/ShoppingCard'

import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  const handleAddToCard = (productInfo) => {
    setCarts([...carts, productInfo])
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
      <div className="cart-container px-5 py-2">
        <Cart carts={carts} />
      </div>
    </div>
  )
}

export default Shop
