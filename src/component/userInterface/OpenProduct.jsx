import { useLocation } from 'react-router-dom';

import './OpenProduct.css'
import { PageLoader } from '../assetsComponent/Loader';
import TopNavBar from "../homepage/TopNavBar"

export default function OpenProduct(){

    const location = useLocation();
    const {imageUrl, productTital, productSummary, productPrice} = location.state
    console.log('imageUrl:', imageUrl);
    console.log('productTital:', productTital); 
    console.log('productSummary:', productSummary);
    console.log('productPrice:', productPrice);

    // if(!imageUrl || !productTital || !productSummary || !productPrice){ 
    //     return (<PageLoader />)
    // }
    
    return <>
        <TopNavBar />

        <div className="OpenProductMainDiv">
            <div className="SecondMainDivOpen">
                <div className="OpenImageDiv">
                    <img src={imageUrl} alt="ProductImage" className="ProductImage" />
                </div>
                <div className="OpenRightDiv">
                    <div className="OpenInfoDiv">
                        <b className="OpenProductTital">{productTital}</b>
                        <span className="OpenProductSummary">
                            {productSummary}
                        </span>
                        <b className="OpenProductTital">₹ {productPrice}</b>
                        <div className="OpenColorBox">
                            info adding is coming soon!
                        </div>
                    </div>
                    <div className="OpenOrderDiv">
                        <b className='OrderInfoB'>No cost EMI starting from ₹11,667/month</b>
                        <b className='OrderInfoB'>Net banking & Credit/ Debit/ ATM card</b>
                        <b className='OrderInfoB'>Cash on Delivery</b>
                        <b className='OrderInfoB'>7 Days Service Center Replacement/Repair</b>
                        <b className='OrderInfoB'>GST invoice available</b>

                        <button className="AddToCartBtn">Add To Cart</button>
                        <button className="AddToCartBtn">Order</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}