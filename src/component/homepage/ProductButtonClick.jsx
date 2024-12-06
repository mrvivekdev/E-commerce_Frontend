import { useEffect, useState } from 'react'
import './ProductButtonClick.css'

export default function ProducType(props){
    const {product} = props;

    if (!product || product.length === 0) {
        return <div className='Loarder'>Loading...</div>
    }

    const [id, setId] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [discount, setDiscount] = useState();
    const [price, setPrice] = useState();
    const [type, setType] = useState();
    const [productSummery, setProductSummery] = useState();

    useEffect(()=>{
        setId(product._id),
        setImage(product.Images),
        setName(product.ProductName),
        setDiscount(product.Discount),
        setPrice(product.Price),
        setType(product.Type),
        setProductSummery(product.ProductSummery)
    
    }, [product])

    if (!id || !image || !name || !discount || !price || !type || !productSummery) {
        return <div className='Loarder'>Loading...</div>
    }

    return(
        <>
            <button className='MainProductButton'>
                <img src={image} alt="" className='ButtonImage'/>
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