import { useEffect, useState } from 'react'

import './ProductType.css'
import ProductButtonClick from './ProductButtonClick';
import { ProductLoader } from '../assetsComponent/Loader';

export default function ProducType(props){
    const {propsProduct, typeName} = props

    const [dataSaveOne, setDataSaveOne] = useState({})
    const [dataSaveTwo, setDataSaveTwo] = useState({})
    const [dataSaveThree, setDataSaveThree] = useState({})
    const [dataSaveFour, setDataSaveFour] = useState({})
    const [dataSaveFive, setDataSaveFive] = useState({})
    const [dataSaveSix, setDataSaveSix] = useState({})
    const [dataSaveSeven, setDataSaveSeven] = useState({})
    const [dataSaveEight, setDataSaveEight] = useState({})
    const [dataSaveNine, setDataSaveNine] = useState({})
    const [dataSaveTen, setDataSaveTen] = useState({})  
    
    useEffect(()=>{
        setDataSaveOne(propsProduct[0])
        setDataSaveTwo(propsProduct[1])
        setDataSaveThree(propsProduct[2])
        setDataSaveFour(propsProduct[3])
        setDataSaveFive(propsProduct[4])
        setDataSaveSix(propsProduct[5])
        setDataSaveSeven(propsProduct[6])
        setDataSaveEight(propsProduct[7])
        setDataSaveNine(propsProduct[8])
        setDataSaveTen(propsProduct[9])

    }, [propsProduct])

    if (!propsProduct || propsProduct.length === 0 && !dataSaveOne) {
        return <ProductLoader />
    }

    return(
        <>
            <h2>{typeName}</h2>
            <div className='MainProductDiv'>    
                <div className="SecondDiv">
                    <ProductButtonClick product={dataSaveOne}/>
                    <ProductButtonClick product={dataSaveTwo}/>
                    <ProductButtonClick product={dataSaveThree}/>
                    <ProductButtonClick product={dataSaveFour}/>
                    <ProductButtonClick product={dataSaveFive}/>
                    <ProductButtonClick product={dataSaveSix}/>
                    <ProductButtonClick product={dataSaveSeven}/>
                    <ProductButtonClick product={dataSaveEight}/>
                    <ProductButtonClick product={dataSaveNine}/>
                    <ProductButtonClick product={dataSaveTen}/>
                </div>
            </div>
        </>
    )
}