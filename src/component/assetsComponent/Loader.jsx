import {Circles, Grid} from 'react-loader-spinner';

function PageLoader(){
    return <>
    <div className="MainLoader">
        <Circles
            height="80"
            width="80"
            color="#00000"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
    </>   
}

function ProductLoader(){
    return<>
        <Grid
            visible={true}
            height="45"
            width="45"
            color="#00000"
            ariaLabel="grid-loading"
            radius="10"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
        />
    </>
}

export {PageLoader, ProductLoader}