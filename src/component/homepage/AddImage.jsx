import './Addimage.css'

export default function AddImage({img}){
    return (
        <>
            <div className="MainAddImageDiv">
                <img src={img} alt="addImage" />
            </div>
        </>
    )
}