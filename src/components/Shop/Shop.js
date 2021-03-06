import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCarts from '../../hooks/useCarts'
import useProducts from '../../hooks/useProducts'
import {
  addToDb,
  deleteShoppingCart,
  getStorageCart,
} from '../../utilities/fakedb'
import AddToCartIcon from '../AddToCartIcon/AddToCartIcon'
import Button from '../Button/Button'
import Cart from '../Cart/Cart'
import ShoppingCard from '../ShoppingCard/ShoppingCard'

import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useProducts()
  const [carts, setCarts] = useCarts(products)
  const [isShowCart, setShowCart] = useState(false)

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
  }

  const totalQuantity = () => {
    let total = 0
    carts.forEach((cart) => {
      total += cart.quantity
    })
    return total
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
          <div className="add-cart-position position-fixed top-50">
            <AddToCartIcon
              isShowingCart={isShowingCart}
              totalQuantity={totalQuantity}
            />
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
        <Cart carts={carts} clearAllCarts={clearAllCarts}>
          <Link to="/orders">
            <Button
              color={'warning text-light w-100'}
              btnValue={'Review Order'}
              clearAllCarts={clearAllCarts}
            />
          </Link>
        </Cart>
      </div>
    </div>
  )
}

export default Shop
