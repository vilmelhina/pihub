import './App.css';
import {InsideClimate} from "./components/insideClimate";
import {Weather} from "./components/weather";
import {Calendar} from "./components/calendar";
import {Trains} from "./components/trains";
import {Widget} from "./components/widget";

function App() {
    const widgets = [
        {title: "Inomhus", id:"inside", component: <InsideClimate/>},
        {title: "Utomhus", id:"weather", component: <Weather/>},
        {title: "Avgångar", id:"trains", component: <Trains/>},
        {title: "Kalender", id:"calendar", component: <Calendar/>}
    ]

    return (
    <div className="App">
      <div id="container">
          {widgets.map(widget =>
              <Widget title={widget.title} id={widget.id} key={widget.id}>
                  {widget.component}
              </Widget>
          )}
      </div>
    </div>
    );
}

export default App;
