"use client";
import React, { useEffect, useState } from 'react';


const DateTimeComponent = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);
        return()=>clearInterval(intervalId)
    },[])
    const timeNow = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        hour12: false
        }).format(currentTime)
    const monthLongFormat = new Intl.DateTimeFormat('id', {
        weekday:'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(currentTime)
    const monthNumberFormat = new Intl.DateTimeFormat('id', {
        day: '2-digit',
        month: 'numeric',
        year: 'numeric',
        }).format(currentTime)
        return {
        timeNow, monthLongFormat, monthNumberFormat
        }
}

export default DateTimeComponent