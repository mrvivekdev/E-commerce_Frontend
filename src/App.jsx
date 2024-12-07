import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './component/homepage/HomeScreen'
import SignupPage from './component/login_and_signup/SignupPage'
import LoginPage from './component/login_and_signup/LoginPage'
import OtpPage from './component/login_and_signup/OtpPage';
import ProductForm from './component/userInterface/SallerAdd';
import AccountSetting from './component/userInterface/AccountSetting';
import TopNavBar from './component/homepage/TopNavBar';

function App() {

  return (
    <>
      {/* <HomePage HomepageRender={homepagecameback}/> */}
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      {/* <OtpPage /> */}
      {/* <ProductForm /> */}
      {/* <AccountSetting /> */}

      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Singup" element={<SignupPage />} />
        <Route path="/otppage" element={<OtpPage />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/accountsetting" element={<AccountSetting />} />
      </Routes>
    </>
  )
}

export default App
