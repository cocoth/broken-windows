import { BsBatteryFull } from "react-icons/bs"
import "@/styles/style.css"

const BattreyMenu = () => {

    return (
        <div className="relative ">
            <div className='flex z-20 justify-end items-end blury-navbar rounded '>
                <section className='flex font-semibold text-white'>
                    <BsBatteryFull className='text-3xl'/>
                    <h1 className="font-normal text-3xl">100%</h1>
                </section>       
            </div>
        </div>
    )
}

export default BattreyMenu