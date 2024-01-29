'use client'
import {
  BsBrowserFirefox,
  BsBrowserChrome,
  BsBrowserEdge,
  BsQuestion,
} from "react-icons/bs";
import { FaSafari } from "react-icons/fa";
import { useEffect, useState } from "react";



const BrowserName = () => {
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent.toLowerCase()
    }
    try {
      const browser = (
        ua.includes('firefox') ? (<BsBrowserFirefox />) :
          ua.includes('chrome') ? (<BsBrowserChrome />) :
            // ua.includes('chrome') ? ( <img src={chromeIcon} alt="Chrome Icon" width={1000} height={1000} 
            // className='w-7 h-auto' />):
            ua.includes('edg') ? (<BsBrowserEdge />) :
              ua.includes('safari') ? (<FaSafari />) :
                (<BsQuestion />)
      )
      setIcon(browser)
    } catch (error) {
      throw (error)
    }
  }, [])
  return icon
}

export default BrowserName