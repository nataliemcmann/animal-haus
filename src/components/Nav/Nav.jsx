import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
//mui import
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//action imports
import UserIcon from './LinkedIcons/UserIcon';
import PetsPage from './LinkedIcons/PetsPage';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <BottomNavigation>
              <BottomNavigationAction label="Home" icon={<UserIcon />}/>
              <BottomNavigationAction label="Pet Summary" icon={<PetsPage />}/>


            <Link className="navLink" to="/info">
              Task Summary
            </Link>

            <Link className="navLink" to="/addPet">
              Pet Summary
            </Link>

            <LogOutButton className="navLink" />
            </BottomNavigation>
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
