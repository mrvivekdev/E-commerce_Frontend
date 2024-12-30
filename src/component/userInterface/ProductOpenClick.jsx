import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import {PageLoader} from '../assetsComponent/Loader'

export function SmartPhone(){
    const navigate = useNavigate();
    const [homepageData, setHomepageData] = useState(null);

    const postData = {
        firstType: "SmartPhone",
        secondType: "Beauty",
    }

    useEffect(()=>{
        async function ApiCall(data){
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', data);
            setHomepageData(responce.data);
        }
        ApiCall(postData);
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            navigate("/searchproducts", { 
                state: { 
                    Results: homepageData.FirstProductType
                }
            });
        }
    }, [homepageData]);

    if(homepageData == null){
        return <PageLoader/>
    }
}

export function Computer(){
    const navigate = useNavigate();
    const [homepageData, setHomepageData] = useState(null);

    const postData = {
        firstType: "Computer",
        secondType: "Beauty",
    }

    useEffect(()=>{
        async function ApiCall(data){
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', data);
            setHomepageData(responce.data);
        }
        ApiCall(postData);
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            navigate("/searchproducts", { 
                state: { 
                    Results: homepageData.FirstProductType
                }
            });
        }
    }, [homepageData]);

    if(homepageData == null){
        return <PageLoader/>
    }
}

export function Speaker(){
    const navigate = useNavigate();
    const [homepageData, setHomepageData] = useState(null);

    const postData = {
        firstType: "Speaker",
        secondType: "Beauty",
    }

    useEffect(()=>{
        async function ApiCall(data){
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', data);
            setHomepageData(responce.data);
        }
        ApiCall(postData);
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            navigate("/searchproducts", { 
                state: { 
                    Results: homepageData.FirstProductType
                }
            });
        }
    }, [homepageData]);

    if(homepageData == null){
        return <PageLoader/>
    }
}

export function SmartWatch(){
    const navigate = useNavigate();
    const [homepageData, setHomepageData] = useState(null);

    const postData = {
        firstType: "SmartWatch",
        secondType: "Beauty",
    }

    useEffect(()=>{
        async function ApiCall(data){
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', data);
            setHomepageData(responce.data);
        }
        ApiCall(postData);
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            navigate("/searchproducts", { 
                state: { 
                    Results: homepageData.FirstProductType
                }
            });
        }
    }, [homepageData]);

    if(homepageData == null){
        return <PageLoader/>
    }
}

export function Headphones(){
    const navigate = useNavigate();
    const [homepageData, setHomepageData] = useState(null);

    const postData = {
        firstType: "Headphones",
        secondType: "Beauty",
    }

    useEffect(()=>{
        async function ApiCall(data){
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', data);
            setHomepageData(responce.data);
        }
        ApiCall(postData);
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            navigate("/searchproducts", { 
                state: { 
                    Results: homepageData.FirstProductType
                }
            });
        }
    }, [homepageData]);

    if(homepageData == null){
        return <PageLoader/>
    }
}

export function Gaming(){
    const navigate = useNavigate();
    const [homepageData, setHomepageData] = useState(null);

    const postData = {
        firstType: "Gaming",
        secondType: "Beauty",
    }

    useEffect(()=>{
        async function ApiCall(data){
            const responce = await axios.post('https://e-commerce-backend-seven-ashy.vercel.app/api/homepage/serve', data);
            setHomepageData(responce.data);
        }
        ApiCall(postData);
    }, [])

    useEffect(()=>{
        if(homepageData && homepageData.FirstProductType){
            navigate("/searchproducts", { 
                state: { 
                    Results: homepageData.FirstProductType
                }
            });
        }
    }, [homepageData]);

    if(homepageData == null){
        return <PageLoader/>
    }
}