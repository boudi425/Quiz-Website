import { useState, useEffect } from 'react';

export const QuizTimer = ({ minutes = 20, Shown, onTimeUp}: { minutes: number; Shown: boolean; onTimeUp: () => void, Data?: string[] }) => {
  // 1. Set the target "End Time" once when the component mounts
  const [endTime] = useState(() => Date.now() + minutes * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const difference = Math.ceil((endTime - now) / 1000);

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
        onTimeUp(); // Trigger quiz submission
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, [endTime, onTimeUp]);

  // Format seconds into MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  return <div className={`quiz-timer ${Shown ? 'block' : 'hidden'}`}>Time Left: {formatTime(timeLeft)}</div>;
};