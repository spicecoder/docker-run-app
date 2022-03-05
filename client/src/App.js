import "./App.css";
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import NavBar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/screen1" component={Screen1} />
          <Route exact path="/screen2" component={Screen2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
