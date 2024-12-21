import './Banner.css'

import { ProductLoader } from '../assetsComponent/Loader';
import { useState, useEffect } from 'react';

export default function HomeBanner(props){
    const {banner} = props;

    const [bannerImage, setBannerImage] = useState(); 

    if (!banner) {
        return <ProductLoader />
    }

    useEffect(()=>{
        if(banner){
            const envServerIp = import.meta.env.VITE_SERVER_IP;
            const envServerPort = import.meta.env.VITE_SERVER_PORT;
            const MergeServerConfig = `${envServerIp}${envServerPort}`

            const SpliteImage = banner.split("http://localhost:9090")[1];
            const margeImage = `${MergeServerConfig}${SpliteImage}`;
            setBannerImage(margeImage)
        }

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