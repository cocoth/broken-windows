"usr client"
import React,{useState} from 'react';
import "@/styles/style.css";
import { IoIosPower } from "react-icons/io";
import { GoGear } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import ShutdownMenu from './shutdown-menu';
import shutdownToggleClick from './windows-props';


const StartMenu = () => {
    // const {handleClickShutdown,updateValueShutdown} = shutdownToggleClick();

  return (
    <div className='mr-2'>
        <div className='flex blury-navbar overflow-hidden rounded-tr text-white'>
            <aside className='flex-col max-w-[15%]'>
                <div className='w-max darker-navbar'>
                    <div className='group mb-[215%] flex-grow hover-items'>
                        <div className='p-4 group-hover:ring-1 ring-white ring-offset-white'>
                            <RxHamburgerMenu />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-4 group-hover:ring-1 ring-white ring-offset-white'>
                            <FaRegCircleUser />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-4 group-hover:ring-1 ring-white ring-offset-white'>
                            <IoDocumentOutline />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-4 group-hover:ring-1 ring-white ring-offset-white '>
                            <SlPicture />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-4 group-hover:ring-1 ring-white ring-offset-white '>
                            <GoGear />
                        </div>
                    </div>
                    <div className='group hover-items'>
                        <div className='p-4 group-hover:ring-1 ring-white ring-offset-white '
                        //  onClick={()=>handleClickShutdown('shutdown')}
                        >
                            <IoIosPower/>
                        </div>
                    </div>
                </div>
            </aside>
            <section className='flex-1 ml-[20%] md:mx-3 relative inline-block overflow-hidden'>
                Calculator ceritanya
            </section>

        </div>

    </div>
  )
}

export default StartMenu