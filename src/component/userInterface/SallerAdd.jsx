import { useEffect, useState } from "react";
import axios from "axios"; 

import './SallerAdd.css'
import TopNavBar from '../homepage/TopNavBar'
import HomePage from "../homepage/HomeScreen";

export default function ProductForm(props){
    const User = props.User;

    const [formdata, setFormdata] = useState({
        Productname: "",
        Summery: "",
        DiscountPre: 5,
        ProductPrice: "",
        ProductType: "",
    });
    
    const [imageFile, setImageFile] = useState();   
    const [discount, setDiscount] = useState(5);
    const [submitTrue, setSubmitTrue] = useState(false);
    const [selectedOption, setSelectedOption] = useState('')
    const [responce, setResponce] = useState()

    function submitingForm(event){
        const {name, value, type, files} = event.target

        setSelectedOption(event.target.value);

        if(type === 'file'){
            setImageFile(files[0]);

        } else if (type === 'range') {
            setDiscount(event.target.value);

        } else {
            setFormdata((prev)=>({
                ...prev,
                [name]: value
            }))
        }
        
        if (name === 'ProductType') {
            setSelectedOption(value);
        }
    }

    async function submitFormApi(){
        const data = new FormData();
        data.append("productData", JSON.stringify(formdata));
        if(imageFile){
            data.append("ProductImage", imageFile);
        }

        console.log('reaponce data: ',data)
        try {
            const formSubmit = await axios.post('/api/product/add', data)
            setResponce(formSubmit.data)

        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            console.log('api error'); 
        }
        setSubmitTrue(true);
    }

    if(submitTrue == true){
        return(
            <HomePage />
        ) 
    }
    console.log("responce came: ", responce)

    return(
        <>
            <div className="MainProductAddDiv">
                <TopNavBar user={User} />

                <div className="CenterDiv">
                    <div className="LeftDiv">

                        <div className="RightDiv">
                            <input 
                                type="text" 
                                placeholder="Product Name"
                                className="InputFild"
                                name='Productname'
                                onChange={submitingForm}
                                required
                            />
                            <p>* Proudct Name You Should Have To Place And Name Should Be The Easy to Understant For User. </p>

                            <textarea
                                type="text" 
                                placeholder="Summery"
                                className="InputFild Summery"
                                name='Summery'
                                onChange={submitingForm}
                                required
                            >
                            </textarea>
                            <p>* Please provide a concise summary of the product. The name should be easy to understand and relevant to the product features. Avoid using jargon to ensure clarity for users. </p>

                            <h3>Discount In Percentage: {discount}%</h3>
                            <input 
                                type="range" 
                                placeholder="Discount In Percentage"
                                className="InputFild Range"
                                min={5}
                                max={100}
                                value={discount}
                                onChange={submitingForm}
                                name='DiscountPre'
                                required
                            />
                            
                            <input 
                                type="number" 
                                placeholder="Price ₹"
                                className="InputFild"
                                name='ProductPrice'
                                onChange={submitingForm}
                                required
                            />
                            <p>* Proudct Price Should Place After Dicouunt Range </p>

                            <h3>Product Type</h3>
                            <select
                                    id="productSelect"
                                    className="InputField Dropdown"
                                    value={selectedOption}
                                    onChange={submitingForm}
                                    name='ProductType'
                                    required
                                >
                                    <option value="Fashion">Fashion</option>
                                    <option value="Elactronic">Elactronic</option>
                                    <option value="Beauty">Beauty</option>
                            </select>

                            <h3>Choose A Image: {imageFile ? imageFile.name : 'No File Choosen'}</h3>
                            <input 
                                 type="file" 
                                 className="InputFild"
                                 onChange={submitingForm}
                                 name="ProductImage"
                                 required
                            />
                            
                            <div className="SubmitDiv">
                                <p>* After Submiting A Product Thare Are No Option To Delete The Product - Adding Product Is In Testing... </p>
                                <button onClick={submitFormApi}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}
