import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/home/Home'
import AllProducts from './pages/allproducts/AllProducts'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Cart from './pages/cart/Cart'
import NoPage from './pages/nopage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './component/scrollTop/ScrollTop'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admine/AdminDashboard'
import AddProductPage from './pages/admine/AddProductPage'
import UpdateProductPage from './pages/admine/UpdateProductPage'

function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/allpro' element={<AllProducts/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/user-dashboard' element={<UserDashboard/>} />
          <Route path='/addproduct' element={<AddProductPage/>} />
          <Route path='/updateproduct' element={<UpdateProductPage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/productinfo' element={<ProductInfo/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
