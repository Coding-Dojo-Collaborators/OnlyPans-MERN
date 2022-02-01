import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

// Login and Registration Imports
import Login from "./components/LoginReg/Login";
import LogAndRegView from "./views/LogAndRegView"
import Register from "./components/LoginReg/Register";
import SubscriptionCheckout from "./components/subscriptions/SubscriptionCheckout";

import Success from "./components/Success";
import { Test } from "./components/Test";

// Recipe Imports
import LandingPage from './views/RecipeViews/LandingPage';
import Create from "./views/RecipeViews/Create";
import ViewAll from "./views/RecipeViews/ViewAll";
import Detail from "./views/RecipeViews/Detail";
import Update from "./views/RecipeViews/Update";

// Styling Imports
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
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
            <ViewAll />
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
