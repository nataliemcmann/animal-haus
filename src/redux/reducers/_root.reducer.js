import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import pets from './pets.reducer';
import tasks from './tasks.reducer';
import households from './households.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an user details if someone is logged in
  pets, //delivers all pet info and specific pet info
  tasks, //delivers all task infor and specific task info
  households // delivers all households info and specific household info
});

export default rootReducer;
