import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SignnupPage.css';
import LoginPage from './LoginPage';

export default function SignupPage(){

    const [responceData, setResponceData] = useState({});
    const [displayNone, setDisplayNone] = useState('DisplayNone')
    const [dataForm, setDataForm] = useState({
        fullname: '',
        email: '',
        password: '',
        conformpassword: '',
        phonenumber: ''
    });

    function checkConformPassword(){
        if(dataForm.conformpassword !== dataForm.password){
            setDisplayNone('DisplayFlex')
        } else{
            setDisplayNone('DisplayNone')
        }
    }

    function dataStore(e){
        const {name, value} = e.target;
        setDataForm((pre)=>({
            ...pre, [name]: value
        }))
        checkConformPassword();
    }

    async function HandelApiCall(){
        if(displayNone === 'DisplayNone'){
            try {
                const responce = await axios.post('/api/user/singup', dataForm);
                setResponceData(responce.data);
 
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                console.log('api error'); 
            }

        } else{
            checkConformPassword();
        }
    };

    if(responceData.transport==="LoginPage"){
        return <LoginPage />
    } else{
        console.log('something wrong with server!')
    }

    return(
        <>
            <div className='MainDivAll'>

                <div className='SignupMainDiv'>
                    <div className='SingupDiv'>
                        <h2>Signup</h2>
                        <h1 className={`ConformPassword ${displayNone}`} >Confrom Password Is Wrong!</h1>

                        <input 
                            type="text" 
                            name='fullname' 
                            placeholder='Fullname' 
                            className='SignupInput' 
                            value={dataForm.fullname} 
                            onChange={dataStore}
                            required
                        />

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

                        <input 
                            type="password" 
                            name='conformpassword' 
                            placeholder='Conform Password' 
                            className='SignupInput' 
                            value={dataForm.conformpassword} 
                            onChange={dataStore}
                            required
                        />

                        <input 
                            type="number" 
                            name='phonenumber'
                            placeholder='Phone Number' 
                            className='SignupInput' 
                            value={dataForm.phonenumber}  
                            onChange={dataStore}
                            required
                        />
                        <button onClick={HandelApiCall}>Signup</button>
                        <p className="AlreadyAccount">Already have an Account? <Link className='AlreadyAccountLink' style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}