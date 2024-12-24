import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import './HomePage.css'

import { PageLoader } from '../assetsComponent/Loader';
import { ManageContext } from '../../ContextStateManagement';
import TopNavBar from "./TopNavBar"
import HomeBanner from './Banner';
import ProducType from './ProductType'
import Category from './CategoryBar';


export default function HomePage(){

    const {stateCookie, setStateCookie, setUserData} = useContext(ManageContext);

    const [User, setUser] = useState(null)
    const [homepageData, setHomepageData] = useState({});
    const [firstProductType, setFirstProductType] = useState([]);
    const [secondProductType, setSecondProductType] = useState({});
    const [cookieSee, setCookieSee] = useState(null);

    const postData = {
        firstType: "SmartPhone",
        secondType: "Beauty",
    } 

    useEffect(()=>{
        async function ApiCall(){
            const responce = await axios.post('/api/homepage/serve', postData);
            setHomepageData(responce.data);
            // https://e-commerce-backend-seven-ashy.vercel.app/
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

        setUserData(homepageData.user)
    }, [homepageData])

    function cookieCheck(){
        const cookie = Cookies.get('uid');
        if(cookie){
            setCookieSee(cookie);
            setStateCookie(cookie);
        }

        if(cookie !== null){
            if(homepageData){
                setUser(homepageData.user);
            }
        }
    }
    
    if(JSON.stringify(homepageData) === '{}'){
        return <>
            <PageLoader />
        </>
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
                    typeName={"Smart Phone"} 
                />
                {/* <ProducType secondProduct={secondProductType} /> */}
            </div>
        </>    
    )
}