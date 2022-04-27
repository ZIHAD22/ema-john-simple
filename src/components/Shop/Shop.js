import axios from 'axios'
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
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useCarts(products)
  const [isShowCart, setShowCart] = useState(false)
  const [productLength, setproductLength] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product?page=${page}&size=${pageSize}`)
      .then((res) => setProducts(res.data))
  }, [page, pageSize])

  useEffect(() => {
    axios.get('http://localhost:5000/productCount').then((res) => {
      const {
        data: { count },
      } = res

      setproductLength(count)
    })
  }, [])

  useEffect(() => {
    const pages = Math.ceil(productLength / pageSize)
    setPageCount(pages)
    setPage(0)
  }, [pageSize, productLength])

  const handleAddToCard = (productInfo) => {
    let newCart = []
    const exists = carts.find((cart) => cart._id === productInfo._id)
    if (!exists) {
      productInfo['quantity'] = 1
      newCart = [...carts, productInfo]
    } else {
      const rest = carts.filter((cart) => cart._id !== productInfo._id)
      exists.quantity = ++exists.quantity
      newCart = [...rest, exists]
    }
    setCarts(newCart)
    addToDb(productInfo._id)
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
              key={product._id}
              product={product}
            />
          ))}
          <div className="add-cart-position position-fixed top-50">
            <AddToCartIcon
              isShowingCart={isShowingCart}
              totalQuantity={totalQuantity}
            />
          </div>
          <div className="text-center">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                className={
                  page === number
                    ? 'btn btn-warning m-2'
                    : 'btn btn-success m-2'
                }
              >
                {number + 1}
              </button>
            ))}

            <select
              onChange={(e) => setPageSize(e.target.value)}
              className="border-3 p-2 ms-4"
              name=""
              id=""
            >
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
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
