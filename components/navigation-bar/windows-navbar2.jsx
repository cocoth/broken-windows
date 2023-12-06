"use client";
import "@/styles/style.css";
import { BsFillChatSquareTextFill, BsWindows } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import DateTimeComponent from '../general/date-time';
import { Hooker } from './windows-components/windows-props';
import MouseMove from "../general/mouse-move";
import BrowserName from "../general/browser-name";
import iconMenu from "./windows-components/icon-navbar";
import CloseMenu from "./windows-components/close-menu";
import StartMenu from "./windows-components/start-menu";
import NotificationMenu from "./windows-components/notification-menu";

const WindowsNavbar2 = () => {
    const {itemsNavMenu} = iconMenu()

    const {
        timeNow, 
        monthLongFormat, 
        monthNumberFormat 
    } = DateTimeComponent()

    const {
        showLabel, HoverLabel, 
        handleMouseEnter, handleMouseLeave
    } = MouseMove()
    // const [value, setValue] = Hooker(false)

    const [showComponentStartMenu, setShowComponentStartMenu] = useState(false)
    const toggleComponentStartMenu =()=>{
        setShowComponentStartMenu(!showComponentStartMenu)
    }
    const [showComponentNotificationMenu, setShowComponentNotificationMenu] = useState(false)
    const toggleComponentNotificationMenu =()=>{
        setShowComponentNotificationMenu(!showComponentNotificationMenu)
    }
    const menuBar = [showComponentStartMenu, showComponentNotificationMenu]

    useEffect(()=>{
        console.log("start menu:", showComponentStartMenu);
        console.log("notif menu:", showComponentNotificationMenu);
    },[showComponentStartMenu, showComponentNotificationMenu])

    return (
        <div>
            <section className="">
                <section className={`${menuBar&&'justify-between'}`}>
                    <div className="flex justify-start items-start">
                        {showComponentStartMenu&&(
                        <CloseMenu onClose={toggleComponentStartMenu} position="min-h-[50%] min-w-[25%]">
                            <StartMenu/>
                        </CloseMenu>
                        )}
                    </div>
                    <div className="flex justify-end items-end">
                        {/* <NotificationMenu/> */}
                        {showComponentNotificationMenu&&(
                            <CloseMenu onClose={toggleComponentNotificationMenu} position="min-h-[calc(100vh-2.5rem)] max-w-[35%]">
                                <NotificationMenu/>
                            </CloseMenu>
                        )}
                    </div>
                </section>

                <section className="flex justify-between items-center mx-2">
                    <div className="flex items-center">
                        {showLabel === 100 && <HoverLabel label="start" />}
                        {/* {<HoverLabel label="start" />} */}
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="flex items-center">
                            {itemsNavMenu.map((item,i)=>(
                                <div key={i} className="flex">
                                    {/* {showLabel === i && <HoverLabel label={item.label} position={`right-${6+i} -translate-y-6`}/>} */}
                                    {showLabel === i && i=== 0 && <HoverLabel label={item.label} position={`flex right-32 -translate-y-6`}/>}
                                    {showLabel === i && i=== 1 && <HoverLabel label={item.label} position={`flex right-28 -translate-y-6`}/>}
                                    {showLabel === i && i=== 2 && <HoverLabel label={item.label} position={`flex right-28 -translate-y-6`}/>}
                                    {showLabel === i && i=== 3 && <HoverLabel label={item.label} position={`flex right-20 -translate-y-6`}/>}
                                </div>
                            ))}
                        </div>
                        {showLabel=== 98 && <HoverLabel label={monthLongFormat.split('/').join(' ')} position="right-3"/>}
                        {showLabel=== 99 && <HoverLabel label="notification" position="right-1"/>}
                    </div>
                    
                </section>
            </section>


            <section className=' h-10 w-screen blury-navbar'>
                <div className="flex justify-between items-center text-white font-semibold">
                    <div className="flex items-center">
                        <div className="group hover-items"
                        onMouseEnter={()=>handleMouseEnter(100)}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleComponentStartMenu}>
                            <div className="py-3 px-4">
                                <BsWindows className="group-hover:text-blue-500"/>
                            </div>
                        </div>
                        <div className="mx-2 flex items-center">
                            <div className="text-2xl hover-items">
                                <div className="p-2 text-white">
                                    <BrowserName/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="flex items-center">
                            {itemsNavMenu.map((item,i)=>(
                                <div key={i} className="group hover-items">
                                    <div key={i} className="py-3 px-1"
                                    onMouseEnter={()=>handleMouseEnter(i)}
                                    onMouseLeave={handleMouseLeave}>
                                        {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ml-2 justify-center font-light hover-items cursor-default max-h-10 max-w-max text-sm text-center"
                        onMouseEnter={()=>handleMouseEnter(98)}
                        onMouseLeave={handleMouseLeave}>
                            <div>{timeNow}</div>
                            <div>{monthNumberFormat}</div>
                        </div>
                        <div className="space-x-2 hover-items"
                        onMouseEnter={()=>handleMouseEnter(99)}
                        onMouseLeave={handleMouseLeave}
                        onClick={toggleComponentNotificationMenu}>
                            <div className="p-3">
                                <BsFillChatSquareTextFill/>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default WindowsNavbar2