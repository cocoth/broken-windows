"use client"
import React, { useState } from 'react'

function anything(i){
  const takeValue={
    0: "nol",
    1: "Satu",
    2: "Dua", 
    3: "Tiga"
  }
  return takeValue[i] || "Done!"
}



const HomePagePortfolio = () => {
  const [variable,  setVariable] = useState(0);
  const plus = ()=>{
    setVariable(variable +1)
  }
  const min = ()=>{
    setVariable(variable -1)
  }
  return (
    <div className='flex min-h-screen justify-center items-center gap-3 '>
      {anything(variable)}
      <button type='button' onClick={plus}
      className='bg-gray-800 rounded '
      >
        +
      </button>
      <button type='button' onClick={min}
      className='bg-gray-800 rounded '
      >
        -
      </button>
      {variable<0||variable>3&&<button type='button' onClick={setVariable(0)}
      className='bg-red-500 rounded '
      >
        Reset
      </button>}

    </div>
  )
}

export default HomePagePortfolio