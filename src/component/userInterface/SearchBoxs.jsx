import './SearchBoxs.css'

export default function SearchBoxs(props){

    const {ShowImage, ShowTitel, ShowSummary, ShowPrice, ShowDiscount, Productid} = props;

    return <>
        <button className='SearchProductShowBox'>
            <div className="ImageDiv">
                <img src={ShowImage} alt="" className="ImageShowBox" />
            </div>
            <div className="ShowBoxInfoDiv">
                <h3 className='ShowTitel'>{ShowTitel}</h3>
                <h5 className='ShowSummary'>{ShowSummary}</h5>

                <div className='ShowPriceDiv'>
                     <h3 className='ShowDiscountClass'>{ShowDiscount}</h3>
                     <h2 className='ShowPriceShow'>{ShowPrice}</h2>
                </div>
                <div className="ProductId">{Productid}</div>
            </div>
        </button>
    </>
}

