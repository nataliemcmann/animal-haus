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

const userTasksReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_USER_TASKS':
            return action.payload;
        default:
            return state;
    }
}

const allTasksReducer = (state= [], action) => {
    switch(action.type) {
        case 'SET_TASKS':
            return action.payload;
        default: 
            return state;
    }
}

const singleTaskReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_TASK':
            return action.payload;
        case 'SET_TASK_DESC':
            const newTaskDesc = action.payload;
            return {...state, taskDesc: newTaskDesc}
        case 'SET_FREQUENCY':
            const newFrequency = action.payload;
            return {...state, frequency: newFrequency}
        default: 
            return state;
    }
}

export default combineReducers({
    taskPetReducer, 
    singleTaskReducer, 
    allTasksReducer,
    userTasksReducer
});