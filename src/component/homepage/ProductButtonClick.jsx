import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import './ProductButtonClick.css'
import { ProductLoader } from '../assetsComponent/Loader';

export default function ProducType(props){
    const {product} = props;

    const navigate = useNavigate();

    const [id, setId] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [discount, setDiscount] = useState();
    const [price, setPrice] = useState();
    const [type, setType] = useState();
    const [productSummery, setProductSummery] = useState();
    const [ChangeImage, setChangeImage] = useState();

    useEffect(()=>{
        if(product){
            setId(product._id),
            setImage(product.Images),
            setName(product.ProductName),
            setDiscount(product.Discount),
            setPrice(product.Price),
            setType(product.Type),
            setProductSummery(product.ProductSummery)
        }
    
    }, [product])

    useEffect(()=>{
        if(image){
            const envServerIp = import.meta.env.VITE_SERVER_IP;
            const envServerPort = import.meta.env.VITE_SERVER_PORT;
            const MergeServerConfig = `${envServerIp}${envServerPort}`

            const SpliteImage = image.split("http://localhost:9090")[1];
            const margeImage = `${MergeServerConfig}${SpliteImage}`;
            setChangeImage(margeImage)
        }

    }, [image])

    if (!product || product.length === 0) {
        return <ProductLoader />
    }

    if (!id || !image || !name || !discount || !price || !type || !productSummery) {
        return <div className='Loarder'>Loading...</div>
    }

    console.log(ChangeImage);

    function handleClick(){
        navigate("/openproduct", { 
            state: { 
                imageUrl: ChangeImage, 
                productTital: name, 
                productSummary: productSummery, 
                productPrice: price 
            }
        })
    }

    return(
        <>
            <button className='MainProductButton' onClick={handleClick}>
                <img src={ChangeImage} alt="" className='ButtonImage'/>
                <h3>{name}</h3>
                <h5>{productSummery}</h5>

                <div className='PriceDiv'>
                     <h3 className='DiscountClass'>{discount}% Discount</h3>
                     <h2 className='PriceShow'>₹{price}</h2>
                </div>
                
                <p className='hide'>{type}</p>
                <p className='hide'>{id}</p>
            </button>
        </>
    )
}