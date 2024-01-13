import './App.css';
import {InsideClimate} from "./components/insideClimate";
import {Weather} from "./components/weather";
import {Calendar} from "./components/calendar";
import {Trains} from "./components/trains";

function App() {
  return (
    <div className="App">
      <div id="container">
          <InsideClimate id="inside"/>
          <Weather id="weather"/>
          <Trains id="trains"/>
          <Calendar id="calendar"/>
      </div>
    </div>
  );
}

export default App;
