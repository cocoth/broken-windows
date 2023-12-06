import React from 'react'
import "@/styles/loader.css"

const LoaderWindows10 = () => {
    return (
        <div>
            <div className="loader">
                <div className="bg"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <div className="flex mt-20 text-center mx-auto text-xl text-white font-semibold ">
                Please wait...
            </div>
        </div>
    )
}

export default LoaderWindows10