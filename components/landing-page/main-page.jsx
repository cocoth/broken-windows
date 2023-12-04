import Link from 'next/link'
import React from 'react'
import MainController from '../navigation-bar/controller-navbar'
import WindowsNavbar from '../navigation-bar/windows-navbar'
import LinuxNavbar from '../navigation-bar/linux-navbar'
import "@/styles/style.css"
const mainPageLinks=()=>{

}

const MainPage = () => {
  return (
    <div>
        <section className='flex justify-center'>
            <div className='space-x-2 my-5'>
                <Link href="/profile"
                className='hover-neon hover:scale-125 hover:font-semibold transition-all ease-in-out duration-300 '
                >
                    Profile
                </Link> |
                <Link href="/blogs"
                className='hover-neon hover:scale-125 hover:font-semibold transition-all ease-in-out duration-300 '
                >
                    Blogs
                </Link> |
                <Link href="/portfolio"
                className='hover-neon hover:scale-125 hover:font-semibold transition-all ease-in-out duration-300 '
                >
                    Portfolio
                </Link>
            </div>
        </section>
        <section >
            {/* <MainController/> */}
            {/* <WindowsNavbar/> */}
            {/* <LinuxNavbar/> */}
        </section>

    </div>
  )
}

export default MainPage