import axios from 'axios'
import { useEffect, useState } from 'react'
import { getStorageCart } from '../utilities/fakedb'

const useCarts = () => {
  const [carts, setCarts] = useState([])

  useEffect(() => {
    const storedCart = getStorageCart()
    let saveCard = []
    const keys = Object.keys(storedCart)

    axios.post('http://localhost:5000/productsByKeys', keys).then((res) => {
      const products = res.data

      Object.keys(storedCart).forEach((id) => {
        const addedProducts = products.find((product) => product._id === id)
        if (addedProducts) {
          addedProducts.quantity = storedCart[id]
          saveCard.push(addedProducts)
        }
      })
      setCarts(saveCard)
    })
  }, [])

  return [carts, setCarts]
}

export default useCarts
