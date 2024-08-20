import { useState } from "react";

type FunctionalTLProps = {
  colors: { 
    black: string; 
    red: string; 
    yellow: string; 
    green: string;
  }
}

export const FunctionalTrafficLight = ({colors : {black, red, yellow, green}} :FunctionalTLProps ) => {
  const [number, numberSetter] = useState(0)

  function nextNumber () {
    if (number >= 2) {
        numberSetter(number - 2)
    } else {
        numberSetter(number + 1)
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${number === 0 ? red : black}`}></div>
        <div className={`circle ${number === 2 ? yellow : black}`}></div>
        <div className={`circle ${number === 1 ? green : black}`}></div>
      </div>
      <button className="next-state-button" onClick={() => {
        nextNumber()
      }}>Next State</button>
    </div>
  );
};