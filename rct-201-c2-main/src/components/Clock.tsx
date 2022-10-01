import React from "react";


type Props = {
  //  TODO
  hours:number;
  min:number;
  sec:number;
  lable:string;

};

const Clock = (props: Props) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        {props.lable}
        
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {props.hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {props.min}
        
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {props.sec}
        </span>
    </div>
  );
};

export default Clock;
