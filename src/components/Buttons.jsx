import React from "react";

const Buttons = ({ day, setDay, shake, setShake }) => {
  return (
    <>
      <button
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          width: "90px",
          height: "30px",
          borderRadius: "20px",
          background: "red",
          zIndex: 100,
          color: "white",
          border: "none",
          backgroundImage: "linear-gradient(30deg,red,blue)",
          cursor: "pointer",
        }}
        onClick={() => setDay(!day)}
      >
        {day ? "Day view" : "Night view"}
      </button>
      <button
        style={{
          position: "absolute",
          top: 15,
          left: 125,
          width: "70px",
          height: "30px",
          borderRadius: "20px",
          background: "red",
          zIndex: 101,
          color: "white",
          border: "none",
          backgroundImage: "linear-gradient(30deg,red,blue)",
          cursor: "pointer",
        }}
        onClick={() => setShake(!shake)}
      >
        {shake ? "Shake" : "Move Around"}
      </button>
    </>
  );
};

export default Buttons;
