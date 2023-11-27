"use client"
import React from 'react'
import WindowsNavbar from './windows-navbar';
import LinuxNavbar from './linux-navbar';
import MacNavbar from './mac-navbar';
import DefaultNavbar from './default-navbar';

const userAgentMap = {
  "Windows" : WindowsNavbar,
  "Linux" : LinuxNavbar,
  "Macintosh" : MacNavbar  
};
const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
const platform = /(Windows|Linux|Macintosh)/.exec(userAgent)?.[0];
const selectedFunction = userAgentMap[platform];

const MainController = () => {

  return (
    <div>
      {selectedFunction ? (selectedFunction()) : (DefaultNavbar())}
    </div>
  )
}

export default MainController