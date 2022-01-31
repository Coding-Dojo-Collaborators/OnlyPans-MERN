
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
import SubscriptionCheckout from "./components/subscriptions/SubscriptionCheckout";

import Success from "./components/Success";

// recipe imports
import Main from "./views/RecipeViews/Main";
import Detail from "./views/RecipeViews/Detail";
import Update from "./views/RecipeViews/Update";
import Create from "./views/RecipeViews/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Test />
          </Route>
          <Route exact path="/login">
            <LogAndRegView>
              <Login />
            </LogAndRegView>
          </Route>
          <Route exact path="/register">
            <LogAndRegView>
              <Register />
            </LogAndRegView>
          </Route>
          <Route exact path="/checkout">
            <SubscriptionCheckout />
          </Route>
          <Route exact path='/success'>
            <Success />
          </Route>

          {/* recipe routing */}
          <Route exact path="/home">
            <Main />
          </Route>
          <Route exact path='/recipe/new'>
            <Create />
          </Route>
          <Route exact path="/recipe/:id">
            <Detail />
          </Route>
          <Route exact path="/recipe/edit/:id">
            <Update />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
