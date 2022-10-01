import React, { useState } from "react";

type List2Props = {
  // TODO
  handleappend:Function;
  initalValues:Array<number>;
  clear:Function;
  Reset:Function;
  popStart:Function;
  label:string;
};
const List2 = (props: List2Props) => {
  const {initalValues}=props
  const [valapp,setVal]=useState(0)
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const{value}=e.target;
    setVal(Number(value))
  
  }
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}{props.label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{/* Each element in a list */}{initalValues?.map((el:number)=><div>{el}</div>)}</div>

      <input onChange={handleChange} data-testid="list2-input" type="number"/>
      <button onClick={():React.MouseEvent=>props.handleappend(valapp)} data-testid="list2-btn-append-end">
        {/* Button to append new number to the end of the list */}
        Append to End
      </button>
      <button onClick={():React.MouseEvent=>props.popStart()}  data-testid="list2-btn-pop-start">
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button onClick={():React.MouseEvent=>props.clear()} data-testid="list2-btn-clear">
        {/* Button to  clear the list */}
        Clear
      </button>
      <button onClick={():React.MouseEvent=>props.Reset()}  data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
