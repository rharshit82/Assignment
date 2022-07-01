import React from "react";
import "./Quote.css";
const Quote = () => {
  return (
    <div className="quote">
      <div style={{ height: "40%" }}>
        <div
          style={{
            marginTop: "20%",
            marginLeft: "10%",
            display: "flex",
          }}
        >
          <img
            style={{
              height: "4vh",
              width: "3vw",
            }}
            src="images/logo.png"
          />
          <h2 style={{ color: "white" }}>Oasis</h2>
        </div>
      </div>
    </div>
  );
};

export default Quote;
