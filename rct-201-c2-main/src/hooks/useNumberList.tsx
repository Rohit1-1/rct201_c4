import { useRef, useState } from "react";

const useNumberList = (initialArray: number[]) => {
  const initial=useRef(initialArray)
  const [initialval,setInitalVal]=useState(initialArray)
  // TODO
  // refer readme.md for what to return
  const appendEnd=(val:number):void=>{
    let newval=[...initialval]
    newval.push(val);
    setInitalVal(newval)
  }
  const appendStart=(val:number):void=>{
    let newval=[...initialval]
    newval.unshift(val);
    setInitalVal(newval)
  }
  const  popEnd=():void=>{
     let newval=[...initialval]
     newval.pop();
     setInitalVal(newval)
  }
  const  popStart=():void=>{
     let newval=[...initialval]
     newval.shift();
     setInitalVal(newval)
  }
  const clear=()=>{
    setInitalVal([])
  }
  const Reset=()=>{
    setInitalVal(initial.current)
  }
  return{appendEnd,initialval,popEnd,clear,Reset,popStart,appendStart}
};

export default useNumberList;
