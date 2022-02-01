/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Login and Registration Imports
import Login from './components/LoginReg/Login';
import Register from './components/LoginReg/Register';
import LogAndRegView from './views/LogAndRegView';

import Success from './components/Success';
// import { Test } from './components/Test';

// Dashboard Imports
import ManagePostsTab from './components/Dashboard/ManagePostsTab';
import UsersLiked from './components/Dashboard/UsersLiked';
import FavoriteRecipes from './components/Dashboard/FavoriteRecipes';
import SubscriptionPage from './components/Subscriptions/SubscriptionPage';
import SubscriptionCheckout from './components/Subscriptions/SubscriptionCheckout';

// Recipe Imports
import CategoryViewAll from './views/RecipeCRUD/CategoryViewAll';
import Create from './views/RecipeCRUD/Create';
import Detail from './views/RecipeCRUD/Detail';
import Update from './views/RecipeCRUD/Update';

<<<<<<< HEAD
// Views Imports
import LandingPage from './views/LandingPage';
import Main from './views/Main';
import Dashboard from './views/Dashboard';
import ViewAllUsers from './views/UserCRUD/ViewAllUsers';
import DetailUser from './views/UserCRUD/DetailUser';
import EditUser from './views/UserCRUD/EditUser';

// Styling Imports
=======
// Styling Imports

import Dashboard from './views/Dashboard';

import ViewAllUsers from './views/UserCRUD/ViewAllUsers';
import DetailUser from './views/UserCRUD/DetailUser';
import EditUser from './views/UserCRUD/EditUser';
import Main from './views/Main';
import LandingPage from './views/LandingPage';
>>>>>>> aadf6ef79dbe36e3361c6836e15b00ff54d71144
import ToggleColorMode from './components/Themes/ToggleDarkMode';
import './App.css';

export default () => {
  return (
    <div className="App">
      <ToggleColorMode>
        <BrowserRouter>
          <Switch>
            {/* Login & Registration Routes */}
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/login'>
              <LogAndRegView>
                <Login />
              </LogAndRegView>
            </Route>
            <Route exact path='/register'>
              <LogAndRegView>
                <Register />
              </LogAndRegView>
            </Route>
            <Route exact path='/checkout'>
              <SubscriptionCheckout />
            </Route>
            <Route exact path='/success'>
              <Success />
            </Route>
            {/* Dashboard Routes */}
            <Route exact path='/dashboard/:id'>
              <Dashboard />
            </Route>
            <Route exact path='/dashboard/edit/:id'>

<<<<<<< HEAD
              <ManagePostsTab />
            </Route>
            <Route exact path='/dashboard/users/:id'>
              <UsersLiked />
            </Route>
            <Route exact path='/dashboard/favorites/:id'>
              <FavoriteRecipes />
            </Route>
            <Route exact path='/subscriptions/:id'>
              <SubscriptionPage />
            </Route>
            {/* User Routes */}
            <Route exact path='/users'>
              <ViewAllUsers />
            </Route>
            <Route exact path='/user/:id'>
              <DetailUser />
            </Route>
            <Route exact path='/user/edit/:id'>
              <EditUser />
            </Route>
            {/* Recipe Routes */}
            <Route exact path='/recipes'>
              <Main />
            </Route>
            <Route exact path='/:category/recipes'>
              <CategoryViewAll />
            </Route>
            <Route exact path='/recipe/new'>
              <Create />
            </Route>
            <Route exact path='/recipe/:id'>
              <Detail />
            </Route>
            <Route exact path='/recipe/edit/:id'>
              <Update />
            </Route>
          </Switch>
        </BrowserRouter>
=======

      <BrowserRouter>
        <Switch>
          {/* Login & Registration Routes */}
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/login'>
            <LogAndRegView>
              <Login />
            </LogAndRegView>
          </Route>
          <Route exact path='/register'>
            <LogAndRegView>
              <Register />
            </LogAndRegView>
          </Route>
          
          {/* Dashboard Routes */}
          <Route exact path='/dashboard/:id'>
            <Dashboard/>
          </Route>
          <Route exact path='/dashboard/edit/:id'>
            
            <ManagePostsTab/>
          </Route>
          <Route exact path='/dashboard/users/:id'>
            <UsersLiked/>
          </Route>
          <Route exact path='/dashboard/favorites/:id'>
            <FavoriteRecipes/>
          </Route>
          
          {/* User Routes */}
          <Route exact path='/users'>
           <ViewAllUsers/>
          </Route>
          <Route exact path='/user/:id'>
            <DetailUser/>
          </Route>
          <Route exact path='/user/edit/:id'>
            <EditUser/>
          </Route>
          {/* Recipe Routes */}
          <Route exact path='/recipes'>
            <Main/>
          </Route>
          <Route exact path='/:category/recipes'>
            <CategoryViewAll />
          </Route>
          <Route exact path='/recipe/new'>
            <Create />
          </Route>
          <Route exact path='/recipe/:id'>
            <Detail />
          </Route>
          <Route exact path='/recipe/edit/:id'>
            <Update />
          </Route>

        </Switch>
      </BrowserRouter>
      
>>>>>>> aadf6ef79dbe36e3361c6836e15b00ff54d71144
      </ToggleColorMode>
    </div>
  );
};
