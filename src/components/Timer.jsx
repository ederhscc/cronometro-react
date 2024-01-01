import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";

import "./Timer.css";

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  const formatTime = () => {
    const minutes = ("0" + (Math.floor(milliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(milliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + (Math.floor(milliseconds / 10) % 100)).slice(
      -2
    );

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (
    <div className="timer-container">
      <TimerDisplay timer={formatTime()} />
      <TimerControls />
      <LapList />
    </div>
  );
};

export default Timer;
