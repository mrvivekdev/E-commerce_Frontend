import { useEffect, useState } from "react";
import axios from "axios";

import "./AccountSetting.css"
import TopNavBar from "../homepage/TopNavBar"

export default function AccountSetting(props){
    const {user} = props;

    const [email, setEmail] = useState();
    const [fullname, setFullname] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [updateFullname, setUpdateFullname] = useState();
    const [updatePhonenumber, setUpdatePhonenumber] = useState();
    const [serverData, setServerData] = useState({});

    useEffect(()=>{
        if(user){
            setEmail(user.email)
            setFullname(user.fullname)
            setPhonenumber(user.phonenumber)       
        }
    }, [user])

    function nameChange(event){
        setUpdateFullname(event.target.value);
    }
    function phoneNumber(event){
        setUpdatePhonenumber(event.target.value);
    }

    async function HandelInfoUpdate(){
        try {
            const response = await axios.post("/api/user/update", {
                fullname: updateFullname,
                phonenumber: updatePhonenumber
            })
            setServerData(response.data);

        } catch(error) {
            console.log('Axios error', error);
        }
    }
    console.log(serverData);

    return(
        <>
            <TopNavBar />
            <h2>Basic Information</h2>
            <div className="BasicInfo">

                <p className="InfoP" >Email:- {email || "No email found"}</p>
                <p className="InfoStar">*email cannot be change if you want to change you email than delete this account and creat new one.</p>
               
                <p className="InfoP" >Fullname:- {fullname || "No name found"}</p>
                <p className="InfoStar SpaceInfo">*your name can be change but your resent perchat gonna have your old name.</p>
                <input 
                    className="InputChange"
                    onChange={function(event){
                        nameChange(event)
                    }}
                    type="text" 
                    placeholder="New Fullname"
                />

                <p className="InfoP" >PhoneNumber:- {phonenumber || "No number found"}</p>
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

                <p className="InfoP" >Delivery Address: {"Not Found!"}</p>
                <input className="InputChange" type="text" placeholder="Add Address"/>

                <p className="InfoP" >Address Pincode Number:- {"Not Found!"}</p>
                <input className="InputChange" type="text" placeholder="Add Pincode"/>

                <p className="InfoP" >City:- {"Not Found!"}</p>
                <input className="InputChange" type="text" placeholder="City"/>
                <p className="InfoP" >Street:- {"Not Found!"}</p>
                <input className="InputChange" type="text" placeholder="Street"/>
                <p className="InfoP" >House Number:- {"Not Found!"}</p>
                <input className="InputChange" type="text" placeholder="House Number"/>

                <p className="InfoP" >Landmark:- {"Not Found!"}</p>
                <p className="InfoStar SpaceInfo">*This not compalcase to add.</p>
                <input className="InputChange" type="text" placeholder="Landmark"/>

                <button className="ChangeBtn" >Submit</button>
            </div>

            <h2>Payment Information</h2>
            <div className="PaymentInfo">

                <p>Payment Methods is in testing!!!</p>
            </div>
            
        </>
    )
}   