import { combineReducers } from 'redux';

//specify tasks for a single pet reducer
const taskPetReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PET_TASKS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({taskPetReducer});