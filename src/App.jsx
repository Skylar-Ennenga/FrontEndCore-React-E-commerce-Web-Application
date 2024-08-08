import React from 'react'
import { Routes, Route } from "react-router-dom"
import  Home  from "./Pages/HomePage"
import  Products  from './Pages/ProductsPage'
import  Accounts  from './Pages/AccountPage'
// import  ProductDetails  from './Pages/ProductDetails'
import ChangeProduct from './components/Products/PutProducts'
import Customers from './Pages/CustomerPage'
import Orders from './Pages/OrderPage'
import ChangeCustomer from './components/Customer/PutCustomers'
import ChangeCustomerAccount from './components/Accounts/PutAccounts'
import ChangeOrder from './components/Orders/PutOrders'
import NotFound from './components/MainCom/NotFound'


function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/products' element={<Products/>} />
        <Route path='/product-edit/:id' element={<ChangeProduct/>} />
        <Route path='/customers' element={<Customers/>} />
        <Route path='/customer-edit/:id' element={<ChangeCustomer/>} />
        <Route path='/accounts' element={<Accounts/>} />
        <Route path='/account-edit/:id' element={<ChangeCustomerAccount/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/order-edit/:id' element={<ChangeOrder/>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
    
  )
}

export default App
