import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LocomotiveScroll from "locomotive-scroll"

import HomePage from './component/homepage/HomeScreen'
import SignupPage from './component/login_and_signup/SignupPage'
import LoginPage from './component/login_and_signup/LoginPage'
import OtpPage from './component/login_and_signup/OtpPage';
import ProductForm from './component/userInterface/SallerAdd';
import AccountSetting from './component/userInterface/AccountSetting';
import TopNavBar from './component/homepage/TopNavBar';
import OpenProduct from './component/userInterface/OpenProduct'
import SearchProducts from './component/userInterface/SearchProducts';
import {SmartPhone, Computer, Speaker, SmartWatch, Headphones, Gaming} from './component/userInterface/ProductOpenClick';

function App() {

  useState(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      {/* <HomePage HomepageRender={homepagecameback}/> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      {/* <OtpPage /> */}
      {/* <ProductForm /> */}
      {/* <AccountSetting /> */}
      {/* <OpenProduct /> */}
      {/* <SearchProducts /> */}

      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Singup" element={<SignupPage />} />
        <Route path="/otppage" element={<OtpPage />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/accountsetting" element={<AccountSetting />} />
        <Route path="/openproduct" element={<OpenProduct />} />
        <Route path="/searchproducts" element={<SearchProducts />} />

        <Route path="/category/SmartPhones" element={<SmartPhone />} />
        <Route path="/category/Computer" element={<Computer />} />
        <Route path="/category/Laptop" element={<SearchProducts />} />
        <Route path="/category/Speaker" element={<Speaker />} />
        <Route path="/category/SmartWatch" element={<SmartWatch />} />
        <Route path="/category/Headphones" element={<Headphones />} />
        <Route path="/category/Gaming" element={<Gaming />} />
      </Routes>
    </>
  )
}

export default App
