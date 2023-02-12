import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import UserTasksList from '../Task Components/UserTasksList';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_TASKS' })
  })

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <UserTasksList id={user.id}/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
