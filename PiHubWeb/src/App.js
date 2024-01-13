import './App.css';
import {InsideClimate} from "./components/insideClimate";
import {Weather} from "./components/weather";
import {Calendar} from "./components/calendar";
import {Trains} from "./components/trains";

function App() {
  return (
    <div className="App">
      <div id="container">
          <InsideClimate className="widget"/>
          <Weather className="widget"/>
          <Calendar className="widget"/>
          <Trains className="widget"/>
      </div>
    </div>
  );
}

export default App;
