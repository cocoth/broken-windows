import { 
    BsWifi,
    BsBatteryFull,
   } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoIosArrowUp, IoIosPower } from "react-icons/io";
import { GoGear, GoLocation, GoMoon } from "react-icons/go";
import { SlPicture } from "react-icons/sl";
import { IoAirplaneOutline, IoDocumentOutline, IoLeafOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleUser, FaRegShareFromSquare, FaTowerBroadcast } from "react-icons/fa6";
import { FaBluetoothB } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { TbDevices2 } from "react-icons/tb";
import { MdDevices, MdOutlineVpnKey } from "react-icons/md";
import { RiScreenshotFill } from "react-icons/ri";


export default function iconMenu (){

  const itemsNavMenu = [
      {icon: <IoIosArrowUp/>, label: "show hidden icons" },
      {icon: <BsBatteryFull/>, label: "100% remaining" },
      {icon: <BsWifi className='-rotate-45'/>, label: "jhon wifi"},
      {icon: <RxSpeakerLoud/>, label: "speaker 70%"}
    ]
  
  const itemsStartMenu = [
    {icon: <RxHamburgerMenu />},
    {icon: <FaRegCircleUser />},
    {icon: <IoDocumentOutline />},
    {icon: <SlPicture />},
    {icon: <GoGear />},
    {icon: <IoIosPower/>}
  ]
  
  const itemsNotificationMenu = [
    {icon: <GoLocation />, label: "Location"},
    {icon: <IoLeafOutline className="rotate-45"/>, label: "Battery saver"},
    {icon: <FaBluetoothB />, label: "Bluetooh"},
    {icon: <LuSunMoon />, label: "Night light"},
  
    {icon: <FaTowerBroadcast />, label: "Mobile hotspot"},
    {icon: <IoAirplaneOutline />, label: "Airplane mode"},
    {icon: <FaRegShareFromSquare />, label: "Nearby sharing"},
    {icon: <GoGear />, label: "All settings"},
  
    {icon: <BsWifi/>, label: "Network"},
    {icon: <TbDevices2 />, label: "Connect"},
    {icon: <MdDevices />, label: "Project"},
    {icon: <MdOutlineVpnKey />, label: "VPN"},
    
    {icon: <GoMoon />, label: "Focus assist"},
    {icon: <RiScreenshotFill />, label: "Screen snip"},
  
  ]
  
  return{
    itemsNavMenu,
    itemsStartMenu,
    itemsNotificationMenu
  }
}
