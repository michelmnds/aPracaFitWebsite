/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useState, useEffect } from "react";
import moment from "moment";

const Countdown = () => {
  const targetDate = moment("2024-01-28 16:30:00");
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const now = moment();
    const diff = targetDate.diff(now, "milliseconds");
    return moment.duration(diff);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const days = remainingTime.days().toString().padStart(2, "0");
  const hours = remainingTime.hours().toString().padStart(2, "0");
  const minutes = remainingTime.minutes().toString().padStart(2, "0");
  const seconds = remainingTime.seconds().toString().padStart(2, "0");

  return (
    <div>
      <div className="countdown">
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      </div>
    </div>
  );
};

export default Countdown;
