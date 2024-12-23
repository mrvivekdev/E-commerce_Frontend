import './SearchProducts.css'
import TopNavBar from "../homepage/TopNavBar"
import SearchBoxs from './SearchBoxs'
import { useLocation } from 'react-router-dom';

export default function SearchProducts(){

    const location = useLocation();
    const {Results} = location.state;
    console.log("Results", Results);

    return <>
        <TopNavBar />

        <div className='SearchMainDiv'>
        {Results.map((product) => (
                    <SearchBoxs
                        key={product._id} // Add a unique key for each child component
                        ShowImage={product.Images}
                        ShowTitel={product.ProductName}
                        ShowSummary={product.ProductSummery}
                        ShowPrice={product.Price}
                        ShowDiscount={product.Discount}
                        Productid={product._id}
                    />
                ))}
        </div>
    </>
}