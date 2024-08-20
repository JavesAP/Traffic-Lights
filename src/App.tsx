import "./App.css";

import { TrafficLightColors } from "./information/light-colors";

import { ClassTrafficLight } from "./components/ClassTrafficLight";
import { FunctionalTrafficLight } from "./components/FunctionalTrafficLight";

function App() {
  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight colors={ TrafficLightColors }/>
          </div>
          <div className="right">
            <ClassTrafficLight colors={ TrafficLightColors }/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
