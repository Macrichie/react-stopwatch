import React, { useRef, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-regular-svg-icons'

// const element = <FontAwesomeIcon icon={faClock} />

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const startTimer = () =>
    (countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000));

  const handleStart = () => {
    // start button logic here
    setIsActive(true);
    setIsPaused(true);
    startTimer();
  };

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    // Resume button logic here
    setIsPaused(true);
    startTimer();
  };

  const handleReset = () => {
    // Reset button logic here
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formarTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className="stopwatch-card">
        <h1>{formarTime()}</h1> {/* here we will show timer */}
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart} className="start">Start</button>
          ) : isPaused ? (
            <button onClick={handlePause} className="pause">Pause</button>
          ) : (
            <button onClick={handleResume} className="resume">Resume</button>
          )}
          <button onClick={handleReset} className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}
