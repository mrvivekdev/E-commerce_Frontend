import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import './HomePage.css'

import Category from './CategoryBar'
import TopNavBar from "./TopNavBar"
import LoginPage from '../login_and_signup/LoginPage';
import SignupPage from '../login_and_signup/SignupPage';
import HomeBanner from './Banner';
import ProductForm from '../userInterface/SallerAdd';
import ProducType from './ProductType'
import AccountSetting from '../userInterface/AccountSetting';

export default function HomePage(props){
    // const {HomepageRender} = props;

    const [User, setUser] = useState(null)
    const [homepageData, setHomepageData] = useState({});
    const [firstProductType, setFirstProductType] = useState([]);
    const [secondProductType, setSecondProductType] = useState({});
    const [cookieSee, setCookieSee] = useState(null);

    const postData = {
        firstType: "Elactronic",
        secondType: "Beauty",
    } 

    useEffect(()=>{
        async function ApiCall(){
            const responce = await axios.post('/api/homepage/serve', postData);
            setHomepageData(responce.data);
        } 
        ApiCall();
        cookieCheck();
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            setFirstProductType(homepageData.FirstProductType);
        }
        if(homepageData && homepageData.SecondProductFind){
            setSecondProductType(homepageData.SecondProductFind)
        }

    }, [homepageData])

    function cookieCheck(){
        const cookie = Cookies.get('uid');
        if(cookie){
            setCookieSee(cookie);
        }

        if(cookie !== null){
            if(homepageData){
                setUser(homepageData.user);
            }
        }
    }

    return(
        <>
            <div className="MainHomeDiv">
                <TopNavBar user={User} />

                <HomeBanner 
                    banner={homepageData.bannerimg}
                />  
                <Category />
                <ProducType 
                    propsProduct={firstProductType} 
                    typeName={"Elactronic"} 
                />
                {/* <ProducType secondProduct={secondProductType} /> */}
            </div>
        
        </>    
    )
}