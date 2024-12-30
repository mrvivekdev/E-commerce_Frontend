import { useEffect, useState } from 'react';
import './SearchBoxs.css'
import CreataNewUrl from "../../function/urlChanger"

export default function SearchBoxs(props){

    const {ShowImage, ShowTitel, ShowSummary, ShowPrice, ShowDiscount, Productid} = props;
    const [newImageUrl, setNewImageUrl] = useState();

    useEffect(()=>{
        const newUrl = CreataNewUrl(ShowImage)
        setNewImageUrl(newUrl);

    }, [ShowImage])

    return <>
        <button className='SearchProductShowBox'>
            <div className="ImageDiv">
                <img src={newImageUrl} alt="" className="ImageShowBox" />
            </div>
            <div className="ShowBoxInfoDiv">
                <h3 className='ShowTitel'>{ShowTitel}</h3>
                <div className="SummaryDiv">
                        <h5 className='ShowSummary'>{ShowSummary}</h5>
                </div>
                
                <div className='ShowPriceDiv'>
                     <h3 className='ShowDiscountClass'>{ShowDiscount}%Discount</h3>
                     <h2 className='ShowPriceShow'>₹{ShowPrice}</h2>
                </div>
                <div className="ProductId">{Productid}</div>
            </div>
        </button>
    </>
}

