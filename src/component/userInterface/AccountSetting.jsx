import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "./AccountSetting.css"
import TopNavBar from "../homepage/TopNavBar"
import { ManageContext } from '../../ContextStateManagement';
import { PageLoader } from '../assetsComponent/Loader'


export default function AccountSetting(){

    const {userData, setStateCookie, setUserData} = useContext(ManageContext);

    const [address, setAddress] = useState();
    const [pincodeNumber, setPincodeNumber] = useState();
    const [city, setCity] = useState();
    const [street, setStreet] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [landmark, setLandmark] = useState();
    const [updateFullname, setUpdateFullname] = useState();
    const [updatePhonenumber, setUpdatePhonenumber] = useState();
    const [serverData, setServerData] = useState({});

    console.log(userData);
    if(!userData){
        return (<PageLoader />)
    }

    // Changing delivery information
    function addressChange(event){
        setAddress(event.target.value);
    }
    function pincodeNumberChange(event){
        setPincodeNumber(event.target.value);
    }
    function cityChange(event){
        setCity(event.target.value);
    }
    function streetChange(event){
        setStreet(event.target.value);
    }
    function houseNumberChange(event){
        setHouseNumber(event.target.value);
    }
    function landmarkChange(event){
        setLandmark(event.target.value);
    }

    // Changing basic infop
    function nameChange(event){
        setUpdateFullname(event.target.value);
    }
    function phoneNumber(event){
        setUpdatePhonenumber(event.target.value);
    }

    async function HandelInfoUpdate(){
        try {
            const response = await axios.post("https://e-commerce-backend-seven-ashy.vercel.app/api/user/update", {
                fullname: updateFullname,
                phonenumber: updatePhonenumber
            })
            setServerData(response.data);
            cookieCheck();

        } catch(error) {
            console.log('Axios error', error);
        }
    }

    async function HandelDeliveryInfoUpdate(){
        try {
            const response = await axios.post("/api/user/update", {
                address: address,
                pincodeNumber: pincodeNumber,
                city: city,
                street: street,
                houseNumber: houseNumber,
                landmark: landmark
            })
            setServerData(response.data);
            cookieCheck();

        } catch(error) {
            console.log('Axios error account update error', error);
        }
    }

    console.log("serverDataUpdate",serverData);

    if(serverData.cookie && serverData.user){
        Cookies.set('uid', serverData.cookie);  
        setUserData(serverData.user)
    }

    function cookieCheck(){
        const cookie = Cookies.get('uid');
        if(cookie){
            setStateCookie(cookie)
        }
    }

    return(
        <>
            <TopNavBar />
            <h2>Basic Information</h2>
            <div className="BasicInfo">

                <p className="InfoP" >Email:- {userData.email || "No email found"}</p>
                <p className="InfoStar">*email cannot be change if you want to change you email than delete this account and creat new one.</p>
               
                <p className="InfoP" >Fullname:- {userData.fullname || "No name found"}</p>
                <p className="InfoStar SpaceInfo">*your name can be change but your resent perchat gonna have your old name.</p>
                <input 
                    className="InputChange"
                    onChange={function(event){
                        nameChange(event)
                    }}
                    type="text" 
                    placeholder="New Fullname"
                />

                <p className="InfoP" >PhoneNumber:- {userData.phonenumber || "No number found"}</p>
                <p className="InfoStar SpaceInfo">*your phonenumber can be change but change after gatting all of the your ordered pkg.</p>
                <input 
                    className="InputChange" 
                    onChange={function(event){
                        phoneNumber(event)
                    }}
                    type="number" 
                    placeholder="New Number"
                />
                
                <button className="ChangeBtn" onClick={HandelInfoUpdate} >Submit</button>
            </div>

            <h2>Delivery Information</h2>
            <div className="DeliveryInfo">

                <p className="InfoP" >Delivery Address: {userData.address || "Not Found!"}</p>
                <input 
                    className="InputChange" 
                    type="text" 
                    placeholder="Add Address"
                    onChange={function(event){
                        addressChange(event)
                    }}
                />

                <p className="InfoP" >Address Pincode Number:- {userData.pincodeNumber || "Not Found!"}</p>
                <input 
                    className="InputChange" 
                    type="text" 
                    placeholder="Add Pincode"
                    onChange={function(event){
                        pincodeNumberChange(event)
                    }}
                />

                <p className="InfoP" >City:- {userData.city || "Not Found!"}</p>
                <input 
                    className="InputChange" 
                    type="text" 
                    placeholder="City"
                    onChange={function(event){
                        cityChange(event)
                    }}
                />

                <p className="InfoP" >Street:- {userData.street || "Not Found!"}</p>
                <input 
                    className="InputChange" 
                    type="text" 
                    placeholder="Street"
                    onChange={function(event){
                        streetChange(event)
                    }}
                />

                <p className="InfoP" >House Number:- {userData.houseNumber || "Not Found!"}</p>
                <input 
                    className="InputChange" 
                    type="text" 
                    placeholder="House Number"
                    onChange={function(event){
                        houseNumberChange(event)
                    }}
                />

                <p className="InfoP" >Landmark:- {userData.landmark || "Not Found!"}</p>
                <p className="InfoStar SpaceInfo">*This not compalcase to add.</p>
                <input 
                    className="InputChange" 
                    type="text" 
                    placeholder="Landmark"
                    onChange={function(event){
                        landmarkChange(event)
                    }}
                />

                <button className="ChangeBtn" onClick={HandelDeliveryInfoUpdate} >Submit</button>
            </div>

            <h2>Payment Information</h2>
            <div className="PaymentInfo">

                <p>Payment Methods is in testing!!!</p>
            </div> 
        </>
    )
}   