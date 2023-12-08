import { 
    BsBrowserFirefox,
    BsBrowserChrome,
    BsBrowserEdge,
    BsQuestion,
   } from "react-icons/bs";
import { FaSafari } from "react-icons/fa";



const BrowserName = () => {
  try { 
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
  } catch (error) {
    throw(error)
  }
}

export default BrowserName