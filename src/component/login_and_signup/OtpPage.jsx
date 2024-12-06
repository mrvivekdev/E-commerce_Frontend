import { useState } from 'react';
import axios from 'axios';

import './OtpPage.css';
import HomePage from '../homepage/HomeScreen';

export default function LoginPage(){

    const [responceData, setResponceData] = useState({});
    const [dataForm, setDataForm] = useState({
        otp: '',
    });

    function dataStore(e){
        const {name, value} = e.target;
        setDataForm((pre)=>({
            ...pre, [name]: value
        }))
    }

    async function HandelApiCall(){
        try {
            const responce = await axios.post('/api/user/otp', {otp: dataForm.otp});
            setResponceData(responce.data);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            console.log('api error'); 
        }
    };

    if(responceData.transport === "HomePage"){
        // console.log(responceData)
        return <HomePage user={responceData.user}/>
    }
    
    return(
        <>
            <div className='OtpMainDivAll'>

                <div className='OtpMainDiv'>
                    <div className='OtpDiv'>
                        <h2>OTP</h2>
                        {/* <h1 className={`ConformPassword ${displayNone}`} >Confrom Password Is Wrong!</h1> */}

                        <input 
                            type="number" 
                            name='otp' 
                            placeholder='Otp' 
                            className='OtpInput' 
                            value={dataForm.otp}  
                            onChange={dataStore}
                            required
                        />
                        <button onClick={HandelApiCall}>Submit</button>

                    </div>
                </div>
            </div>
        </>
    )
}