"use client";
import React,{useState, useEffect, useRef} from 'react';


const CloseMenu = ({onClose, children, position}) => {
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
    },[])
    return (
        <div ref={menuRef} className={position}>
            {children}
        </div>
    )
}

export default CloseMenu