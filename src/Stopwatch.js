import React, {useState, useEffect} from 'react'

function Stopwatch() {
const [totalSeconds, setTotalSeconds] = useState(0);
const [tick, setTick] = useState(null);

// useEffect(()=>{
//     setTotalSeconds((previousState)=>{
//             return previousState < 10 ? 0 + previousState : previousState;
//     })
//     // leadingZero
// }, [])

// const leadingZero = (num)=> {
//     return num < 10 ? '0' + num : num;
//   }

const incrementCount = () => {
    setTotalSeconds((previousState)=>{         
        return previousState + 1 ;
    })    
  }

  const getHours = ()=>{
    return parseInt(totalSeconds / 60 / 60 ) % 24;
  }

  const getMinutes = ()=>{
    return parseInt(totalSeconds / 60) % 60;
  }

  const getSeconds = ()=>{
    return totalSeconds % 60;
     
  }

  const startCounter = () => {
    clearInterval(tick);
    setTick(setInterval(() => incrementCount(), 1000))
    
  }

  const stopCounter = () => {
    clearInterval(tick);
    setTick(null)    
  }

  const resetCounter = () => {
    clearInterval(tick);
    setTotalSeconds(0);
    setTick(null);    
  }

  const resumeCounter = () => {
    clearInterval(tick);
    setTick(setInterval(() => incrementCount(), 1000))
  }
  const leadingZero = (num)=>{
    return num < 10 ? '0' + num : num;
  }
  return (
    
    <>
    <h1>Stopwatch</h1>
    <div className="btn-group my-5" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary">{leadingZero(getHours())}</button>
        <button type="button" className="btn btn-outline-primary">{leadingZero(getMinutes())}</button>
        <button type="button" className="btn btn-outline-primary">{leadingZero(getSeconds())}</button>
    </div>

    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger" onClick={()=>{startCounter()}}>Start</button>
        <button type="button" className="btn btn-warning" onClick={()=>{stopCounter()}}>Stop</button>
        <button type="button" className="btn btn-secondary" onClick={()=>{resumeCounter()}}>Resume</button>
        <button type="button" className="btn btn-success" onClick={()=>{resetCounter()}}>Reset</button>
    </div>

    </>
  )
}

export default Stopwatch