"usr client"
import React,{useState} from 'react';
import "@/styles/style.css";
import { IoIosPower } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";
import ShutdownMenu from './shutdown-menu';


const StartMenu = () => {
    const [shutdownButton, setShutdownButton] = useState(false)
    const shutdownWindow =()=>{
        setShutdownButton(!shutdownButton)
    }
  return (
    <div className='z-20 '>
        <div className='blury-navbar rounded text-white transform'>
            <aside className='max-w-[14%]'>
                <div className='text-xl w-max darker-navbar'>
                    <div className='group hover-items'>
                        <div className='p-3 group-hover:ring-1 ring-white ring-offset-white'>
                            <IoDocumentOutline />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-3 group-hover:ring-1 ring-white ring-offset-white '>
                            <SlPicture />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-3 group-hover:ring-1 ring-white ring-offset-white '>
                            <GoGear />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-3 group-hover:ring-1 ring-white ring-offset-white '
                         onClick={()=>shutdownWindow()}>
                            <IoIosPower/>
                        </div>
                    </div>
                </div>
            </aside>
        </div>

    </div>
  )
}

export default StartMenu