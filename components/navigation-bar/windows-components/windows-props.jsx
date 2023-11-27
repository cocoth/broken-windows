import {useState, useEffect, useRef} from 'react';


const Hooker= ({initValue}) => {
  const [someValue, setSomeValue] = useState(initValue)
  const updateValue = (newValue)=>{
    setSomeValue(newValue)
  }
  return[someValue,updateValue]
}

export{ Hooker }