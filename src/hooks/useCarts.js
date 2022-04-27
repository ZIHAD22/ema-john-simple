import { useEffect, useState } from 'react'
import { getStorageCart } from '../utilities/fakedb'

const useCarts = (products) => {
  const [carts, setCarts] = useState([])

  useEffect(() => {
    const storedCart = getStorageCart()
    let saveCard = []
    Object.keys(storedCart).forEach((id) => {
      const addedProducts = products.find((product) => product._id === id)
      if (addedProducts) {
        addedProducts.quantity = storedCart[id]
        saveCard.push(addedProducts)
      }
    })
    setCarts(saveCard)
  }, [products])

  return [carts, setCarts]
}

export default useCarts
