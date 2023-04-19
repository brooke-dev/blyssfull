import React from "react";

export default function TimeDisplay({ timestamp }) {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isAM = hours < 12;

  hours = hours % 12 || 12; // Convert 0 to 12 for AM, and 12 to 12 for PM

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="text-bold text-xl">
      {formatTime(hours)}:{formatTime(minutes)} {isAM ? "AM" : "PM"}
    </div>
  );
}
