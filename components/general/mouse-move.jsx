"use client";
import React, { useRef, useState } from 'react';

const MouseMove = () => {
    const [showLabel, setShowLabel] = useState(null)
    const hoverTimeout = useRef(null)

    const HoverLabel=({label, position})=>(
        <div className={`absolute ${position} font-normal z-30 mb-6 text-black rounded bg-white shadow`}>
            <div className="mx-1 text-sm">
                {label}
            </div>
        </div>
    )

    const handleMouseEnter = (i)=>{
        hoverTimeout.current=setTimeout(()=>{
            setShowLabel(i);
            setTimeout(()=>{
                setShowLabel(null)
            }, 5000)
        }, 1000)
    }
    const handleMouseLeave = ()=>{
        clearTimeout(hoverTimeout.current);
        setShowLabel(null)
    }
    return {
        showLabel,
        HoverLabel,
        handleMouseEnter, 
        handleMouseLeave
    }
}

export default MouseMove