import { combineReducers } from "redux";

//not sure if this reducer is necessary...
const currentHousehold = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_HOUSEHOLD':
            return action.payload;
        default: 
            return state;
    }
};

const allHouseholds = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_HOUSEHOLDS':
            return action.payload;
        default:
            return state;
    }
}

const householdsReducer = combineReducers({ currentHousehold, allHouseholds })

export default householdsReducer;