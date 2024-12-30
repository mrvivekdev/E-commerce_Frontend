import './SearchProducts.css'
import TopNavBar from "../homepage/TopNavBar"
import SearchBoxs from './SearchBoxs'
import { useLocation } from 'react-router-dom';

export default function SearchProducts(props){

    const location = useLocation();
    const {Results} = location.state;

    return <>
        <TopNavBar />

        {Results.length === 0 && (
            <h1 className='NotFoundItem'>Not Found</h1>
        )}

        <div className='SearchMainDiv'>
        {Results.map((product) => (
            <SearchBoxs
                key={product._id}
                ShowImage={product.Images || props.image}
                ShowTitel={product.ProductName || props.titel}
                ShowSummary={product.ProductSummery || props.summary}
                ShowPrice={product.Price || props.price}
                ShowDiscount={product.Discount || props.discount}
                Productid={product._id || props._id}
            />
        ))}
        </div>
    </>
}