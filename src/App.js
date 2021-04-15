import { useState } from 'react';
import Seconds from './components/Seconds';
import './App.css';

const App=(props)=>{
  const [minutes,setMinutes]=useState(0);
  const increaseMinutes = () => {
    if (minutes < 5) setMinutes(minutes + 1);
  };
  const decreaseMinutes = () => {
    if (minutes > 0) setMinutes(minutes - 1);
  };
   return (
    <div className="container">
      <div className="controllers">
        <button className="button" onClick={decreaseMinutes}>-</button>
        
        <h1>{`${minutes}`} <span>Minute</span></h1>

        <button className="button" onClick={increaseMinutes}>+</button>
      </div>
      {minutes > 0 ? <Seconds minutes={minutes} setMinutes= {setMinutes}/>:null}
    </div>
   )
};
export default App;
