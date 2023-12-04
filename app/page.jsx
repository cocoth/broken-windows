"use client"
import Image from 'next/image'
import BackgroundParticles from '@/components/landing-page/particle-background'
import MainPage from '@/components/landing-page/main-page'
import '@/styles/style.css'
import StarsBackground from '@/components/landing-page/stars-background'
import WindowsNavbar from '@/components/navigation-bar/windows-navbar'
import WindowsNavbar2 from '@/components/navigation-bar/windows-navbar2'
import ShutdownMenu from '@/components/navigation-bar/windows-components/shutdown-menu'
import shutdownToggleClick from '@/components/navigation-bar/windows-components/windows-props'


// function routingPages(){
//   const pagesRoute={
//     shutdown: ShutdownMenu
//   }
//   const {startShutdown} = shutdownToggleClick()
//   const pageRender = pagesRoute[startShutdown]
//   return{
//   pageRender
//   }
// }


export default function Home() {
  // const {pageRender} = routingPages()
  return (
    <main>
      {/* {pageRender&&<pageRender/>} */}
      <div className='min-h-screen flex justify-center items-center'>
      {/* <div className='flex flex-col min-h-screen justify-between items-center'> */}
        <StarsBackground/>
        <section className=''>
          <div className='flex justify-center items-center text-center'>
            <h1 contentEditable className='text-white neon uppercase font-ktp text-5xl font-bold inline-block'>
              broken website
            </h1>
          </div>
          <div className='text-white'>
            <MainPage/>
          </div>
        </section>
        <nav className='fixed left-0 bottom-0'>
          <WindowsNavbar2/>
          {/* <h1 className='text-2xl text-white'>
            asdfas
          </h1> */}
        </nav>
      </div>
    </main>    
  )
}
