import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import './LoginPage.css';
import OtpPage from './OtpPage';

export default function LoginPage(){

    const [responceData, setResponceData] = useState({});
    const [dataForm, setDataForm] = useState({
        email: '',
        password: '',
    });

    function dataStore(e){
        const {name, value} = e.target;
        setDataForm((pre)=>({
            ...pre, [name]: value
        }))
    }

    async function HandelApiCall(){
        try {
            const responce = await axios.post('/api/user/login', dataForm);
            setResponceData(responce.data);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            console.log('api error'); 
        }
    }       

    if (responceData.transport === "OtpPage") {
        // console.log(responceData)
        Cookies.set('uid', responceData.cookie);  
        return <OtpPage /> 
    }

    return(
        <>
            <div className='LoginMainDivAll'>

                <div className='LoginMainDiv'>
                    <div className='LoginpDiv'>
                        <h2>Login</h2>
                        {/* <h1 className={`ConformPassword ${displayNone}`} >Confrom Password Is Wrong!</h1> */}

                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Email' 
                            className='SignupInput' 
                            value={dataForm.email}  
                            onChange={dataStore}
                            required
                        />

                        <input 
                            type="password" 
                            name='password' 
                            placeholder='Password' 
                            className='SignupInput' 
                            value={dataForm.password}  
                            onChange={dataStore}
                            required
                        />
                        <button onClick={HandelApiCall}>Login</button>

                    </div>
                </div>
            </div>
        </>
    )
}