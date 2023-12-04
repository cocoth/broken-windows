"use client"
import React, { useState } from 'react'
import CloseMenu from '@/components/navigation-bar/windows-components/close-menu'
import NotificationMenu from '@/components/navigation-bar/windows-components/notification-menu'

const HomePageProfile = () => {
    const [valueClick, setValueClick] = useState(false)
    const handleValueClick = ()=>{
        setValueClick(!valueClick)
    }
    return (
        <div>
            <button onClick={()=>handleValueClick()}>
                click Me!
            </button>
            {valueClick&&(
                <CloseMenu onClose={handleValueClick}>
                    <NotificationMenu/>
                </CloseMenu>
            )}
        </div>
    )
}

export default HomePageProfile