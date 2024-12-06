import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import './TopNavBar.css';
import searchLogo from '../../assets/searchLogo.png';
import MobileMenu from '../../assets/MobileViewMenu.png'

export default function TopNavBar(){

    const [mainUser, setMainUser] = useState(null);
    const [displayNoneUser, setDisplayNoneUser] = useState('DisplayFlex');
    const [display, setDisplay] = useState('DisplayNone'); 
    const [mobileMenu, setMobileMenu] = useState('DisplayNone');
    const [cookieCheck, setCookieCheck] = useState(null);

    useEffect(()=>{
        const CheckCookies = Cookies.get('uid');
        
        if(CheckCookies){
            setDisplay('DisplayFlex')
            setDisplayNoneUser('DisplayNone')
        } else{
            setDisplay('DisplayNone')
            setDisplayNoneUser('DisplayFlex')
        }

    });

    function mobileMenuSatter(){
        if(mobileMenu==='DisplayNone'){
            setMobileMenu('DisplayFlex')
        } else{
            setMobileMenu('DisplayNone')
        }
    }

    function removeCookie(){
        Cookies.remove('uid');
        window.location.reload();
    }

    return (
        <>
        <div className='MainNavBarDiv'>

            <div className='LogoMenuDiv'>
                <button className='LogoButton'>
                    <h1 className='Logo'>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">ShoppersStop</Link>
                    </h1>    
                </button>

                <div className='MobileViewMenuControl'>
                    <button className='MenuButton' onClick={mobileMenuSatter}>
                        <img src={MobileMenu} alt="menuButton" className='MenuImg' />
                    </button>
                </div>
            </div>
           
            <div className='SearchDiv'>
                <input type="search" placeholder='Search' className='SearchBar' />
                <button className='SearchBtn'>
                    <img src={searchLogo} alt="search button" className='SearchLogo'/>
                </button>
            </div>

            <div className='ControlDiv'>
                <button className={` ControlBtn ${display}`}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
                </button>
                <button className={`CartBtn ControlBtn ${display}`}>Cart</button>
                <button className={`ReturnBtn ControlBtn ${display}`}>Return</button>
                <button className={`OrderBtn ControlBtn ${display}`}>Orders</button>
                <button className={`AccountBtn ControlBtn ${display}`} >
                    <Link style={{ textDecoration: 'none', color: 'black'}} to="/accountsetting">Account</Link>
                </button>
                <button className={`SaleBtn ControlBtn ${display}`} >
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/accountsetting">Add A Product</Link>
                </button>
                <button className={`AccountBtn ControlBtn ${display}`} onClick={removeCookie} >Logout</button>
                <button className={`ControlBtn ${displayNoneUser}`} >
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/singup">Singup</Link>
                </button>
                <button className={`ControlBtn ${displayNoneUser}`} >
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</Link>
                </button>
            </div> 
        </div>

        <div className={`MobileMenu ${mobileMenu}`}>
            <button className={`MenuInsideBtn ${displayNoneUser}`} >
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">Login</Link>
            </button>
            <button className={`MenuInsideBtn ${displayNoneUser}`} >
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/singup">Singup</Link>
            </button>
            <button className={`MenuInsideBtn ${display}`}>Cart</button>
            <button className={`MenuInsideBtn ${display}`}>Return</button>
            <button className={`MenuInsideBtn ${display}`}>Orders</button>
            <button className={`MenuInsideBtn ${display}`} >Logout</button>
            <button className={`MenuInsideBtn ${display}`} >
                <Link style={{ textDecoration: 'none', color: 'black'}} to="/accoutn">Account</Link>
            </button>
        </div>

      
        </> 
    )
}

