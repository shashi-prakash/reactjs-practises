import React, { useState,useEffect } from 'react'

export default function ConditionOperator() {
  const [getValue, setValue] = useState('');
  const [data, setData] = useState('')

    const a = 10;

    const getInputValue = (e) =>{
     setValue(e.target.value);
    }
    
    useEffect(()=>{
      setData(getValue)
    })
  return (
    <>
    <input type="text" onChange={((e)=>getInputValue(e))}/>
    {
      data == 10 ? <span style={{color:"green"}}>i'm 10</span> : (data> 10) ? <span  style={{color:"yellow"}}>i'm greater than 10</span> : <span  style={{color:"red"}}>i'm less than 10</span>
    }
    
    </>
  )
}
