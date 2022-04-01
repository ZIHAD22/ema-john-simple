import Header from '../components/Header/Header'
import Shop from '../components/Shop/Shop'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Orders from '../components/Orders/Orders'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App
