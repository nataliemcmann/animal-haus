import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import TopNav from '../Nav/TopNav';
import BottomNav from '../Nav/BottomNav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../Login/LoginPage';
import RegisterPage from '../Register/RegisterPage';
import HouseholdLoginPage from '../HouseholdComponents/HouseholdLoginPage';
import PetForm from '../Pet Components/PetForm';
import PetProfile from '../Pet Components/PetProfile';
import EditPetForm from '../Pet Components/EditPetForm';
import EditTaskForm from '../Task Components/EditTaskForm';
import PetSummary from '../Pet Components/PetSummary';
import TaskSummary from '../Task Components/TaskSummary';
import Footer from '../Footer/Footer';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <TopNav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows addPetPage else shows LoginPage
            exact
            path="/addPet"
          >
            <PetForm />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows addPetPage else shows LoginPage
            exact
            path="/petSummary"
          >
            <PetSummary />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows pet profile page else shows LoginPage
            exact
            path="/pet/:id"
            children={<PetProfile />}
          >
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows pet profile page else shows LoginPage
            exact
            path="/pet/edit/:id"
            children={<EditPetForm />}
          >
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows pet profile page else shows LoginPage
            exact
            path="/task/edit/:id"
            children={<EditTaskForm />}
          >
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows addPetPage else shows LoginPage
            exact
            path="/taskSummary"
          >
            <TaskSummary />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows addPetPage else shows LoginPage
            exact
            path="/household_login"
          >
            <HouseholdLoginPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
