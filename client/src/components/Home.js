import React from "react";
import Quote from "./Quote/Quote";
import RegisterScreen from "./RegisterScreen/RegisterScreen";
const Home = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Quote></Quote>
      <RegisterScreen></RegisterScreen>
    </div>
  );
};

export default Home;
