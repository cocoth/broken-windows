import React from 'react'
import "@/styles/style.css"
import iconMenu from './icon-navbar'

const {itemsNotificationMenu} = iconMenu()

const NotificationMenu = () => {
    return (
        <div className='z-20 '>
            <div className='min-h-[calc(100vh-2.5rem)] min-w-[35%] flex flex-col justify-between blury-navbar'>
                <section className='mx-3 min-h-[50%] text-white font-semibold'>
                    <div className='flex justify-center items-center'>
                        Notif area
                    </div>
                </section>
                <section className='min-h-[50%] text-white'>
                    <div className="grid grid-cols-4 gap-1 mx-3">
                        {itemsNotificationMenu.map((item, i)=>(
                            <div key={i} className='rounded bg-gray-800 flex flex-col justify-between h-20 w-20'>
                                <div className='mx-1 mt-1'>
                                    {item.icon}
                                </div>
                                <div className='text-[12px] mx-1 mb-1'>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NotificationMenu