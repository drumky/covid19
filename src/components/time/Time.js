import React, { useState } from "react";

const Time = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  const currentTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setInterval(currentTime, 1000);

  return (
    <div className="time" style={{ color: "rgb(160, 160, 160)" }}>
      <h1>{time}</h1>
    </div>
  );
};

export default Time;
