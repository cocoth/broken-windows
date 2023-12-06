import React from 'react'
import "@/styles/style.css"
import iconMenu from './icon-navbar'

const {itemsNotificationMenu} = iconMenu()

const NotificationMenu = () => {
    return (
        <div className='z-20 '>
            <div className='flex flex-col justify-between min-h-[calc(100vh-2.5rem)] min-w-[35%] blury-navbar'>
                <section className='flex justify-center items-center mx-3 text-white font-semibold'>
                    {/* <div className='flex justify-center items-center'> */}
                        Notif area
                    {/* </div> */}
                </section>
                <section className='min-h-[50%] text-white'>
                    <div className="grid grid-cols-4 gap-1 mx-3 cursor-default">
                        {itemsNotificationMenu.map((item, i)=>(
                            <div key={i} className='rounded bg-gray-800 flex flex-col justify-between h-20 hover-items'>
                                <div className='mx-1 mt-1 text-lg'>
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