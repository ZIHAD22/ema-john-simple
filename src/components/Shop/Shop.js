import React, { useEffect, useState } from 'react'
import { addToDb, getStorageCart } from '../../utilities/fakedb'
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

  useEffect(() => {
    const storedCart = getStorageCart()
    let saveCard = []
    Object.keys(storedCart).map((id) => {
      const addedProducts = products.find((product) => product.id === id)
      if (addedProducts) {
        addedProducts.quantity = storedCart[id]
        saveCard.push(addedProducts)
      }
    })
    setCarts(saveCard)
  }, [products])

  const handleAddToCard = (productInfo) => {
    let newCart = []
    const exists = carts.find((cart) => cart.id === productInfo.id)
    if (!exists) {
      productInfo['quantity'] = 1
      newCart = [...carts, productInfo]
    } else {
      const rest = carts.filter((cart) => cart.id !== productInfo.id)
      exists.quantity = ++exists.quantity
      newCart = [...rest, exists]
    }
    console.log(newCart, 'new')
    setCarts(newCart)
    addToDb(productInfo.id)
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
