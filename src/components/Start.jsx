import React, { useRef } from "react";

export default function Start({ setUserName }) {
  const inputRef = useRef();
  const handleClock = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        placeholder="Enter your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClock}>
        Start
      </button>
    </div>
  );
}
