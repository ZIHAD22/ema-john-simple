import React, { useEffect, useState } from 'react'
import {
  addToDb,
  deleteShoppingCart,
  getStorageCart,
} from '../../utilities/fakedb'
import AddToCartIcon from '../AddToCartIcon/AddToCartIcon'
import Cart from '../Cart/Cart'
import ShoppingCard from '../ShoppingCard/ShoppingCard'

import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [isShowCart, setShowCart] = useState(false)

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    const storedCart = getStorageCart()
    let saveCard = []
    Object.keys(storedCart).forEach((id) => {
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
    setCarts(newCart)
    addToDb(productInfo.id)
  }
  const clearAllCarts = () => {
    setCarts([])
    deleteShoppingCart()
  }
  const isShowingCart = () => {
    const currentCart = isShowCart
    setShowCart(!currentCart)
    console.log('click')
  }

  return (
    <div className="shop-container ">
      <div className="products-container">
        <div className="row g-4">
          {products.map((product) => (
            <ShoppingCard
              handleAddToCard={handleAddToCard}
              key={product.id}
              product={product}
            />
          ))}
          <div className={'add-cart-position position-fixed top-50'}>
            <AddToCartIcon isShowingCart={isShowingCart} />
          </div>
        </div>
      </div>
      <div
        className={
          isShowCart === true
            ? 'cart-container px-5 py-2 d-block'
            : 'cart-container px-5 py-2'
        }
      >
        <Cart carts={carts} clearAllCarts={clearAllCarts} />
      </div>
    </div>
  )
}

export default Shop
