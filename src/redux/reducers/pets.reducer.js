import { combineReducers } from 'redux';

//specific pet reducer
const singlePetReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_A_PET':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({singlePetReducer});