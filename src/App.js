import "./App.css";
import Jam3yatList from "./components/Jam3yatList";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/details/:jam3yaSlug">
          <Detail />
        </Route>
        <Route exact path="/">
          <Jam3yatList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
