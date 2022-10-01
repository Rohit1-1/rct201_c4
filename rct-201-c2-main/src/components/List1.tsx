import React, { useState } from "react";

type List1Props = {
  // TODO
  handleappendStart:Function;
  initalValues:Array<number>;
  clear:Function;
  Reset:Function;
  popEnd:Function;
  label:string;
};
const List1 = (props: List1Props) => {
  const {initalValues}=props
  const [valapp,setVal]=useState(0)
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const{value}=e.target;
    setVal(Number(value))
    
   
   
  }
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */}{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      {<div data-testid="list1-element">{/* Each element in a list */}{initalValues?.map((el:number)=><div>{el}</div>)}</div>}
      

      
      <input onChange={handleChange} data-testid="list1-input" type="number"/>
      <button onClick={():React.MouseEvent=>props.handleappendStart(valapp)} data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}
        Append to start
      </button>
      <button onClick={():React.MouseEvent=>props.popEnd()} data-testid="list1-btn-pop-end">
        {/* po last element btn */}
        Pop End
      </button>
      <button onClick={():React.MouseEvent=>props.clear()} data-testid="list1-btn-clear">
        {/* clear list and set empty button */}
        Clear
      </button>
      <button onClick={():React.MouseEvent=>props.Reset()} data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
// function handleappend(): React.MouseEvent<Element, MouseEvent> {
//   throw new Error("Function not implemented.");
// }

