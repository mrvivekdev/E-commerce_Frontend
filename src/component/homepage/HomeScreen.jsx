import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import './HomePage.css' 
import Add from '../../assets/Addimage.webp' 

import { PageLoader } from '../assetsComponent/Loader';
import { ManageContext } from '../../ContextStateManagement';
import TopNavBar from "./TopNavBar"
import HomeBanner from './Banner';
import ProducType from './ProductType'
import Category from './CategoryBar';
import AddImage from './AddImage';
import Fotter from './Fotter'


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
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', postData);
            setHomepageData(responce.data);
            // https://e-commerce-backend-seven-ashy.vercel.app/
        }   

        ApiCall();
        cookieCheck();
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType && homepageData.SecondProductFind){
            setFirstProductType(homepageData.FirstProductType);
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
                <AddImage img={Add}/>
                <ProducType 
                    propsProduct={secondProductType}
                    typeName={"Beauty"}
                />
                <Fotter />
            </div>
        </>    
    )
}