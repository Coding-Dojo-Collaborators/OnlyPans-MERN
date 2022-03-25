/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// Dashboard Imports
import ManagePostsTab from './components/Dashboard/ManagePostsTab';
import UsersLiked from './components/Dashboard/UsersLiked';


// Recipe Imports
import CategoryViewAll from './views/RecipeCRUD/CategoryViewAll';
import Create from './views/RecipeCRUD/Create';
import Detail from './views/RecipeCRUD/Detail';
import Update from './views/RecipeCRUD/Update';

// Views Imports
import LandingPage from './views/LandingPage';
import Main from './views/Main';
import Dashboard from './views/Dashboard';
import ViewAllUsers from './views/UserCRUD/ViewAllUsers';
import DetailUser from './views/UserCRUD/DetailUser';
import EditUser from './views/UserCRUD/EditUser';

// Styling Imports
// import ToggleColorMode from './components/Themes/ToggleDarkMode';
import './App.css';
import './style.scss';
import FavoriteRecipeView from './views/RecipeCRUD/FavoriteRecipeView';

export default () => {
  return (
    <div className="App">
      {/* <ToggleColorMode> */}
      <BrowserRouter>
        <Routes>
          {/* Login & Registration Routes */}
          <Route exact path='/' element={<LandingPage />} />
          {/* Dashboard Routes */}
          <Route exact path='/dashboard/:id' element={<Dashboard />} />
          <Route exact path='/dashboard/edit/:id' element={<ManagePostsTab />} />
          <Route exact path='/dashboard/users/:id' element={<UsersLiked />} />
          <Route exact path='/dashboard/favorites/:id' element={<FavoriteRecipeView />} />
          {/* User Routes */}
          < Route exact path='/users' element={<ViewAllUsers />} />
          <Route exact path='/user/:id' element={<DetailUser />} />
          <Route exact path='/user/edit/:id' element={<EditUser />} />
          {/* Recipe Routes */}
          < Route exact path='/recipes' element={<Main />} />
          <Route exact path='/:category/recipes' element={<CategoryViewAll />} />
          <Route exact path='/recipe/new' element={<Create />} />
          <Route exact path='/recipe/:id' element={<Detail />} />
          <Route exact path='/recipe/edit/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* </ToggleColorMode> */}
    </div>
  );
};
