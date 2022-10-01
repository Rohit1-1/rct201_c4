import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from "./hooks/useClock";
import useNumberList from "./hooks/useNumberList";
const arr:Array<number>=[1,2,3,4]
function App() {
  const {hours,min,sec}=useClock()
  const {appendEnd,initialval,clear,Reset,popEnd,popStart,appendStart}=useNumberList(arr)
  const handleappend=(num:number):void=>{
     appendEnd(num)
  }
  const handleappendStart=(num:number):void=>{
      appendStart(num)
  }
  return (
    <div className="App">
      {/* Clock */}
      <Clock hours={hours} min={min} sec={sec} lable={"24 Hour Live Coustom Component Clock"}/>
      {/* List 1  initialValues [1, 2, 3] */}
      <List1 label={"List-1"} clear={clear} Reset={Reset} popEnd={popEnd} initalValues={initialval}  handleappendStart={handleappendStart}/>
      {/* List 2  initialValues [4, 5] */}
      <List2 label={"List-2"} clear={clear} Reset={Reset} popStart={popStart} initalValues={initialval} handleappend={handleappend}/>
    </div>
  );
}

export default App;
