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
import BattreyMenu from "./windows-components/battrey-menu";
import TooltipWindow from "./windows-components/utils/tooltip-window";

const WindowsNavbar2 = () => {
    const { itemsNavMenu } = iconMenu()

    const {
        timeNow,
        monthLongFormat,
        monthNumberFormat
    } = DateTimeComponent()

    const {
        showLabel, HoverLabel,
        handleMouseEnter, handleMouseLeave
    } = MouseMove()

    const [showComponentStartMenu, setShowComponentStartMenu] = useState(false)
    const toggleComponentStartMenu = () => {
        setShowComponentStartMenu(!showComponentStartMenu)
    }
    const [showComponentNotificationMenu, setShowComponentNotificationMenu] = useState(false)
    const toggleComponentNotificationMenu = () => {
        setShowComponentNotificationMenu(!showComponentNotificationMenu)
    }
    const menuBar = [showComponentStartMenu, showComponentNotificationMenu]

    const [iconMapClick, setIconMapClick] = useState(null)
    const iconMapping = () => {
        setIconMapClick(!iconMapClick)
    }
    function iconClick(i) {
        const handlerIconClick = {
            0: <div className=""></div>,
            1: <BattreyMenu />,
            2: <div className=""></div>,
            3: <div className=""></div>
        }
        setIconMapClick(handlerIconClick[i] || <h1>N/A</h1>)
        return handlerIconClick[i]
    }
    useEffect(() => {
        console.log("start menu:", showComponentStartMenu);
        console.log("notif menu:", showComponentNotificationMenu);
    }, [showComponentStartMenu, showComponentNotificationMenu])

    return (
        <div>
            <section className="">
                <section className={`${menuBar && 'justify-between'}`}>
                    <div className="flex justify-start items-start">
                        {showComponentStartMenu && (
                            <CloseMenu onClose={toggleComponentStartMenu} position="min-h-[50%] min-w-[25%]">
                                <StartMenu />
                            </CloseMenu>
                        )}
                    </div>
                    <div className="flex justify-end items-end">
                        {/* <NotificationMenu/> */}
                        {showComponentNotificationMenu && (
                            <CloseMenu onClose={toggleComponentNotificationMenu} position="min-h-[calc(100vh-2.5rem)] w-[29%]">
                                <NotificationMenu />
                            </CloseMenu>
                        )}
                    </div>
                    <div className="flex justify-end">
                        {iconMapClick && (
                            <CloseMenu onClose={iconMapping}>
                                {iconMapClick}
                            </CloseMenu>
                        )}
                    </div>
                </section>


            </section>


            <section className=' h-10 w-screen blury-navbar'>
                {showLabel === 100 && (
                    <div className="flex ml-6 ">
                        <TooltipWindow text="start" />
                    </div>
                )}
                <div className="flex justify-between items-center text-white font-semibold">
                    <div className="flex items-center">
                        <div className="group hover-items"
                            onMouseEnter={() => handleMouseEnter(100)}
                            onMouseLeave={handleMouseLeave}
                            onClick={toggleComponentStartMenu}>
                            <div className="py-3 px-4">
                                <BsWindows className="group-hover:text-blue-500" />
                            </div>
                        </div>
                        <div className="mx-2 flex items-center">
                            <div className="text-2xl hover-items">
                                <div className="p-2 text-white">
                                    <BrowserName />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="flex items-center">
                            {itemsNavMenu.map((item, i) => (
                                <div key={i} className="group hover-items">
                                    {showLabel === i && (
                                        <TooltipWindow text={item.label} />
                                    )}
                                    <div key={i} className="py-3 px-1"
                                        onMouseEnter={() => handleMouseEnter(i)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => iconClick(i)}>
                                        {item.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ml-2 justify-center hover-items cursor-default max-h-10 max-w-max text-sm text-center"
                            onMouseEnter={() => handleMouseEnter(98)}
                            onMouseLeave={handleMouseLeave}>
                            {showLabel === 98 && <TooltipWindow text={monthLongFormat.split('/').join(' ')} />}
                            <div className="font-light">{timeNow}</div>
                            <div className="font-light">{monthNumberFormat}</div>
                        </div>
                        <div className="mx-2 hover-items"
                            onMouseEnter={() => handleMouseEnter(99)}
                            onMouseLeave={handleMouseLeave}
                            onClick={toggleComponentNotificationMenu}>
                            {showLabel === 99 && <TooltipWindow text="notification" />}
                            <div className="p-3">
                                <BsFillChatSquareTextFill />
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default WindowsNavbar2