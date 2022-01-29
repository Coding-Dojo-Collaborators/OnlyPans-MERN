
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import Login from "./components/LoginReg/Login";
import LogAndRegView from "./views/LogAndRegView"
import Register from "./components/LoginReg/Register";
import { Test } from "./components/Test";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <Test/>
      </Route>
      <Route exact path="/login">
        <LogAndRegView>
        <Login/>
        </LogAndRegView>
      </Route>
      <Route exact path="/register">
        <LogAndRegView>
        <Register/>
        </LogAndRegView>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
