import React, { useState, useEffect } from 'react';
import { Clock, Pause, Play, RotateCcw, Bell } from 'lucide-react';

const SecondsCounter = ({ initialSeconds = 0, countDown = false }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [targetTime, setTargetTime] = useState(null);
  
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => {
          const newValue = countDown ? prev - 1 : prev + 1;
          if (targetTime && newValue >= targetTime) {
            alert(`Target time of ${targetTime} seconds reached!`);
            setIsRunning(false);
            return prev;
          }
          return newValue;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, countDown, targetTime]);

  const handleReset = () => {
    setSeconds(initialSeconds);
    setIsRunning(true);
    setTargetTime(null);
  };

  const handleTargetTimeSet = () => {
    const time = prompt('Enter target time in seconds:');
    if (time && !isNaN(time)) {
      setTargetTime(parseInt(time));
    }
  };

  const digits = String(Math.abs(seconds)).padStart(6, '0');
  const digitArray = digits.split('').map(Number);

  return (
    <div className="d-flex flex-column align-items-center bg-black p-4 rounded-4 shadow-lg">
      {/* Counter Display */}
      <div className="bg-black border border-2 border-white p-4 rounded-4 mb-4 d-flex align-items-center gap-3">
        <Clock className="text-white" size={40} strokeWidth={1.5} />
        {digitArray.map((digit, index) => (
          <div
            key={index}
            className="bg-white text-black fs-1 fw-bold d-flex align-items-center justify-content-center rounded-3"
            style={{ 
              width: '70px', 
              height: '90px', 
              fontFamily: 'monospace',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {digit}
          </div>
        ))}
      </div>
      
      {/* Controls */}
      <div className="d-flex gap-3">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2"
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
          <span className="fw-bold">{isRunning ? 'Pause' : 'Resume'}</span>
        </button>
        
        <button
          onClick={handleReset}
          className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2"
        >
          <RotateCcw size={20} />
          <span className="fw-bold">Reset</span>
        </button>
        
        <button
          onClick={handleTargetTimeSet}
          className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2"
        >
          <Bell size={20} />
          <span className="fw-bold">Set Alert</span>
        </button>
      </div>
    </div>
  );
};

export default SecondsCounter;