import "./App.css";
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import NavBar from "./components/navbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  var dataStorage = {
    DS: [
      {
        d: [
          "Docker Image",
          {
            FS: [
              {
                f: [
                  "Docker Run",
                  {
                    ES: [
                      {
                        command: "Docker run docker_demo",
                      },
                    ],
                  },
                ],
              },
              {
                f: [
                  "Runtime parameters",
                  {
                    ES: [],
                  },
                ],
              },
              {
                f: [
                  "Environment variables",
                  {
                    ES: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  var setDataStorage = (value) => {
    dataStorage = value;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/screen1" component={Screen1} />
          <Route
            exact
            path="/screen2"
            render={() => (
              <Screen2
                setDataStorage={setDataStorage}
                dataStorage={dataStorage}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
