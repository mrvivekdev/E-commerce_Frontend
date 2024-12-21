import './SearchBoxs.css'

export default function SearchBoxs(props){

    const {ShowTitel, ShowSummary,ShowPrice,ShowDiscount} = props;

    return <>
        <div className='SearchProductShowBox'>
            <div className="ImageDiv">
                <img src="" alt="" className="ImageShowBox" />
            </div>
            <div className="ShowBoxInfoDiv">
                <h3 className='ShowTitel'>Google Pixel 9 Pro XL (Porcelain, 256 GB) (16 GB RAM)</h3>
                <h5 className='ShowSummary'>Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif Google Pixel 9 Pro XL (Porcelain, 256 GB) (16 GB RAM)</h5>

                <div className='ShowPriceDiv'>
                     <h3 className='ShowDiscountClass'>10% Discount</h3>
                     <h2 className='ShowPriceShow'>₹ 15000</h2>
                </div>
            </div>
        </div>
    </>
}

