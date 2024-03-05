import React from 'react'
import {useState} from 'react'

const test = () => {
    const [a,setA]=useState("")
    const handle=(e)=>{
        setA(e.target.value);

    }
  return (
    <>
   <input
   type="text"
   onChange={(e)=>handle(e)}
   
   >
   </input>
   <div>{a}</div>
   </>
  )
}

export default test