import React, { useEffect, useState } from 'react'
import "@/styles/style.css"
import iconMenu from './icon-navbar'

const {itemsNotificationMenu} = iconMenu()

const NotificationMenu = () => {
    const storedClickButtons = JSON.parse(localStorage.getItem('clickedButtonsNotification')) || Array(itemsNotificationMenu.length).fill(false)
    const [clickMenu, setClickMenu] = useState(storedClickButtons)
    const handleClickMenu = (i)=>{
        const updatedButtons= [...clickMenu]
        updatedButtons[i] = !updatedButtons[i]
        setClickMenu(updatedButtons)
    }
    useEffect(()=>{
        localStorage.setItem('clickedButtonsNotification', JSON.stringify(clickMenu))
    },[clickMenu])
    return (
        <div className='z-20 '>
            <div className='flex flex-col justify-between min-h-[calc(100vh-2.5rem)] min-w-[30%] blury-navbar'>
                <section className='flex justify-center items-center mx-3 text-white font-semibold'>
                    {/* <div className='flex justify-center items-center'> */}
                        Notif area
                    {/* </div> */}
                </section>
                <section className='h-1/2 text-white border-t'>
                    <div className="grid grid-cols-4 gap-1 mx-3 cursor-default">
                        {itemsNotificationMenu.map((item, i)=>(
                            <button 
                            type='button'
                            name={item.label}
                            key={i} 
                            onClick={()=>handleClickMenu(i)}
                            className={`flex flex-col justify-between h-20 p-1 rounded bg-gray-800 hover:border ${clickMenu[i] ? 'btn-items' : 'hover-items'}`}>
                                <div className='text-lg'  >
                                    {item.icon}
                                </div>
                                <div className='flex text-[11px]'>
                                    {item.label}
                                </div>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NotificationMenu