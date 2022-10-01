import { useEffect, useRef, useState } from "react";

const useClock = () => {
  const [hours,setHours]=useState<number>(0)
  const [sec,setSec]=useState<number>(0)
  const [min,setMin]=useState<number>(0)
  const ref=useRef<any>()
 
  useEffect(()=>{
   ref.current= setInterval(()=>{
      const tim=new Date()
     
      setHours(tim.getHours())
      setSec(tim.getSeconds())
      setMin(tim.getMinutes())
    },1000)
    return()=>clearInterval(ref.current)
  },[])
  // TODO
  // refer readme.md for what to return
 return{hours,min,sec}
};

export default useClock;
