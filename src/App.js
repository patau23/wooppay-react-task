import React, { useEffect } from "react";
// 
import "./App.scss";
// 


export default function App() {

  useEffect(() => {
    console.log(123)
  }, []);

  return (
    <>
      <div className="pulse">Pulse</div>;
    </>
  );
}
