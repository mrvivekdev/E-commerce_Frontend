import './SearchProducts.css'
import TopNavBar from "../homepage/TopNavBar"
import SearchBoxs from './SearchBoxs'

export default function SearchProducts(){
    return <>
        <TopNavBar />
        
        <div className='SearchMainDiv'>
            <SearchBoxs />
        </div>
    </>
}