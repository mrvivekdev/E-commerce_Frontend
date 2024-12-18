import './OpenProduct.css'

import TopNavBar from "../homepage/TopNavBar"

export default function OpenProduct(){
    return <>
        <TopNavBar />

        <div className="OpenProductMainDiv">
            <div className="SecondMainDivOpen">
                <div className="OpenImageDiv">
                    <img src="" alt="ProductImage" className="ProductImage" />
                </div>
                <div className="OpenRightDiv">
                    <div className="OpenInfoDiv">
                        <b className="OpenProductTital">Google Pixel 8 Pro (Bay, 128 GB)  (12 GB RAM)#JustHere</b>
                        <span className="OpenProductSummary">
                            12 GB RAM | 128 GB ROM
                            17.02 cm (6.7 inch) Full HD+ AMOLED Display
                            50MP + 48MP + 48MP | 10.5MP Front Camera
                            5050 mAh Battery
                            Tensor G3 Processor
                        </span>
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