import './Banner.css'

export default function HomeBanner(props){
    const {banner} = props;

    if (!banner) {
        return <div className='Loarder'>Loading...</div>
    }

    return(
        <>
            <h2>All New Prouduct</h2>
            <div className="BannerMainDiv">
                <div className="BannerDiv">
                    <button className='BannerBtn'>
                        <img src={banner} alt="ProductBannerNotRender" />
                    </button>
                </div>
            </div>  
        </>
    )
}