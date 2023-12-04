"use client"
import React, { useState, useEffect, useRef } from 'react'
import { 
  BsBrowserFirefox,
  BsBrowserChrome,
  BsBrowserEdge,
  BsQuestion,
  BsWindows,
  BsWifi,
  BsBatteryFull,
  BsFillChatSquareTextFill
 } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { FaSafari } from "react-icons/fa";
import "@/styles/style.css"
import StartMenu from './windows-components/start-menu';
import CloseMenu from './windows-components/close-menu';
import NotificationMenu from './windows-components/notification-menu';



const chromeIcon= "/img/chrome-icon.png"



const BrowserName = ()=>{
  const ua = navigator.userAgent.toLowerCase()
  const browser = (
    ua.includes('firefox') ? (<BsBrowserFirefox/>):
    ua.includes('chrome') ? (<BsBrowserChrome/>):
    // ua.includes('chrome') ? ( <img src={chromeIcon} alt="Chrome Icon" width={1000} height={1000} 
    // className='w-7 h-auto' />):
    ua.includes('edg') ? (<BsBrowserEdge/>):
    ua.includes('safari') ? (<FaSafari />):
    (<BsQuestion/>) 
    )  
  return browser
}
function Calendar(){
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return()=> clearInterval(intervalId)
  },[])
  const monthLongFormat = new Intl.DateTimeFormat('id', {
    weekday:'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(currentTime)
  const monthNumberFormat = new Intl.DateTimeFormat('id', {month:'numeric'}).format(currentTime)
  const Time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }).format(currentTime)
  const DateCalendar = new Intl.DateTimeFormat('id',{
    weekday:'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }).format(currentTime)
  return {
    Time, monthLongFormat, monthNumberFormat , DateCalendar
  }
}



const WindowsNavbar = () => {
  const {Time, monthLongFormat, monthNumberFormat ,DateCalendar} = Calendar()
  const [showInfo, setShowInfo] = useState(null)
  const hoverTimeout = useRef(null)
  
  const HoverInfo = ({label, position}) =>{
    return(
      <div className={`absolute transition-all ease-in-out delay-200 duration-300 ${showInfo?'-translate-y-1 ':'-translate-y-0'} font-normal z-30 mb-6 ml-2 ${position} text-black rounded ease-in-out duration-200 bg-white shadow `}>
        <div className='mx-2 text-sm'>
          {label}
        </div>
      </div>
    )
  }

  
  useEffect(()=>{
    console.log('showInfo Value: ',showInfo);
  },[showInfo])

  useEffect(()=>{
    return(
      clearTimeout(hoverTimeout.current)
    )
  },[])
  const handleMouseEnter = (i)=>{
    hoverTimeout.current=setTimeout(()=>{
      setShowInfo(i);
      setTimeout(()=>{
        setShowInfo(null)
      },5000)
    },1500)
  };
  const handleMouseLeave = ()=>{
    clearTimeout(hoverTimeout.current);
    setShowInfo(null);
  }

  
  const itemsTogleMenu = [
    {icon: <IoIosArrowUp/>, label: "show hidden icons" },
    {icon: <BsBatteryFull/>, label: "100% remaining" },
    {icon: <BsWifi className='-rotate-45'/>, label: "jhon wifi"},
    {icon: <RxSpeakerLoud/>, label: "speaker 70%"}
  ]
  const [showComponent, setShowComponent] = useState(false)
  const toggleComponents=()=>{
    setShowComponent(!showComponent)
  }
  useEffect(()=>{
    console.log('show component Value: ',showComponent);
  },[showComponent])
  
  
  return (
    // <div className='fixed bottom-0 left-0'>
    <div className=''>
      <div className='max-h-[50%] max-w-[25%]' >
        {showComponent&&(
          <CloseMenu onClose={toggleComponents}>
            <StartMenu/>
          </CloseMenu>)}
      </div>
      <section className='flex justify-between items-center mx-3 '>
        <div className="flex items-center">
          {showInfo===100 && <HoverInfo label="start"/>}
        </div>

        <div className="flex items-center gap-1">
          <div className="flex flex-row items-center mr-24">
            {itemsTogleMenu.map((item,i)=>(
              <div key={i} className='flex flex-row'>
                {/* {showInfo=== i && <HoverInfo label={itemsTogleMenu[i].label} position={`-translate-y-6 `}/>} */}
                <HoverInfo label={itemsTogleMenu[i].label} position={`-translate-y-6 `}/>
              </div>
            ))}
            {/* {console.log("label: ", handleMouseEnter)} */}
          </div>
          {showInfo=== 98 && <HoverInfo label={monthLongFormat.split('/').join(' ')} position="right-3" />}
          {showInfo=== 99 && <HoverInfo label="notification" position="right-0"/>}
        </div>

      </section>


      <div className=' h-10 w-screen blury-navbar'>
        <section className='flex justify-between items-center mr-3 text-white opacity-100 font-semibold'>
          <div className='flex items-center'>
            <div className={`group hover-items`}
            onMouseEnter={()=>handleMouseEnter(100)}
            onMouseLeave={handleMouseLeave}
            onClick={toggleComponents}
            >
              <div className={`py-3 px-4`}>
                <BsWindows className='group-hover:text-blue-500'/>
              </div>
            </div>
            <div className='mx-3 flex items-center'>
              <div className='text-2xl hover-items'>
                <div className='p-2 text-white hover:opacity-100 '>
                  <BrowserName/>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center gap-1'>
            <div className='flex items-center'>
              {itemsTogleMenu.map((item,i)=>(
                <div key={i} className='group hover-items'>
                  <div key={i} className='py-3 px-1'
                  onMouseEnter={()=>handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                  >
                    {item.icon}
                  </div>
                </div>
              ))}
              {/* {console.log("items: ", handleMouseEnter)} */}
            </div>
            <div className='ml-2 justify-center font-light hover-items cursor-default max-h-10 max-w-max text-sm text-center '
              onMouseEnter={()=>handleMouseEnter(98)}
              onMouseLeave={handleMouseLeave}>
              <div>{Time}</div>
              <div>{DateCalendar.slice(DateCalendar.indexOf(',')+2)}</div>
            </div>
            <div className='space-x-2 hover-items'
              onMouseEnter={()=>handleMouseEnter(99)}
              onMouseLeave={handleMouseLeave}>
              <div className='p-3'>
                <BsFillChatSquareTextFill/>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  )
}

export default WindowsNavbar