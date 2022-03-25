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
          <Route path='/' element={<LandingPage />} />
          {/* Dashboard Routes */}
          <Route path='dashboard/*' element={<Dashboard />} />
          <Route path='edit/:id' element={<ManagePostsTab />} />
          <Route path='users/:id' element={<UsersLiked />} />
          <Route path='favorites/:id' element={<FavoriteRecipeView />} />
          {/* User Routes */}
          < Route path='users/*' element={<ViewAllUsers />} />
          <Route path=':id' element={<DetailUser />} />
          <Route path='edit/:id' element={<EditUser />} />
          {/* Recipe Routes */}
          < Route path='recipes/*' element={<Main />} />
          <Route path=':category' element={<CategoryViewAll />} />
          <Route path='new' element={<Create />} />
          <Route path=':id' element={<Detail />} />
          <Route path='edit/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* </ToggleColorMode> */}
    </div>
  );
};
