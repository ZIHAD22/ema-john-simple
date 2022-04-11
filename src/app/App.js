import Header from '../components/Header/Header'
import Shop from '../components/Shop/Shop'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Orders from '../components/Orders/Orders'
import SignUp from '../components/SignUp/SignUp'
import Login from '../components/Login/Login'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import Profile from '../components/Profile/Profile'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  )
}

export default App
