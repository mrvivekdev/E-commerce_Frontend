import './Banner.css'

import { ProductLoader } from '../assetsComponent/Loader';
import { useState, useEffect } from 'react';
import urlCreater from '../../function/urlChanger';

export default function HomeBanner(props){
    const {banner} = props;

    const [bannerImage, setBannerImage] = useState(); 

    if (!banner) {
        return <ProductLoader />
    }

    useEffect(()=>{
        setBannerImage(urlCreater(banner));
    }, [banner])

    return(
        <>
            <h2>All New Prouduct</h2>
            <div className="BannerMainDiv">
                <div className="BannerDiv">
                    <button className='BannerBtn'>
                        <img src={bannerImage} alt="ProductBannerNotRender" />
                    </button>
                </div>
            </div>  
        </>
    )
}