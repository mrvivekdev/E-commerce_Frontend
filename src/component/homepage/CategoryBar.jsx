import { useNavigate } from "react-router-dom";

import './CategoryBar.css';

import PhoneIcon from '../../assets/smartphone.png';
import ComputerIcon from '../../assets/monitor.png'
import SmartWatchIcon from '../../assets/smart-watch.png'
import HeadphoneIcon from '../../assets/headphones.png'
import GameConsoleIcon from '../../assets/game-console.png'
import LaptopIcon from '../../assets/laptop.png'
import SpeakerIcon from '../../assets/speaker.png'

export default function Category(){
    const navigate = useNavigate();

    return(
        <div className="MainDiv">

                <h2>Browse By Category</h2>
                <div className="CategoryListDiv">
                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/SmartPhones');
                    }}>
                        <img src={PhoneIcon} alt="" className='CategoryListImg'/>
                        <h3>Smart Phones</h3>
                    </button>

                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/Computer');
                    }}>
                        <img src={ComputerIcon} alt="" className='CategoryListImg'/>
                        <h3>Computer</h3>
                    </button>

                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/Laptop');
                    }}>
                        <img src={LaptopIcon} alt="" className='CategoryListImg'/>
                        <h3>Laptops</h3>
                    </button>

                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/Speaker');
                    }}>
                        <img src={SpeakerIcon} alt="" className='CategoryListImg'/>
                        <h3>Speaker</h3>
                    </button>

                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/SmartWatch');
                    }}>
                        <img src={SmartWatchIcon} alt="" className='CategoryListImg'/>
                        <h3>Smart Watch</h3>
                    </button>

                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/Headphones');
                    }}>
                        <img src={HeadphoneIcon} alt="" className='CategoryListImg'/>
                        <h3>Headphones</h3>
                    </button>

                    <button className='CategoryListBtn' onClick={()=>{
                        navigate('/category/Gaming');
                    }}>
                        <img src={GameConsoleIcon} alt="" className='CategoryListImg'/>
                        <h3>Gaming</h3>
                    </button>
                </div>
            </div>
    )
}