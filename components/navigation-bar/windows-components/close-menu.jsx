"use client";
import React,{useState, useEffect, useRef} from 'react';


const CloseMenu = ({onClose, children}) => {
    const menuRef = useRef(null)
    const handleClick = (e)=>{
        if (menuRef.current && !menuRef.current.contains(e.target)){
            onClose()
        }
    }
    useEffect(()=>{
        document.addEventListener('click', handleClick)
        return()=>{
            document.removeEventListener('click', handleClick)
        }
    },[onClose])
    return (
        <div ref={menuRef}>
            {children}
        </div>
    )
}

export default CloseMenu