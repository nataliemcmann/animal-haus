import { combineReducers } from 'redux';

//specific pet reducer
const singlePetReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_A_PET':
            return action.payload;
        case 'SET_PET_NAME':
        const newPetName = action.payload
            return {...state, name: newPetName};
        case 'SET_PET_AGE':
            const newPetAge = action.payload
                return {...state, age: newPetAge};
        case 'SET_PET_FOOD_DESC':
            const newFoodDesc = action.payload
                return {...state, foodDesc: newFoodDesc};
        case 'SET_PET_FOOD_AMOUNT':
            const newFoodAmount = action.payload
                return {...state, cupsPerFeed: newFoodAmount};
        case 'SET_PET_EXERCISE_DESC':
            const newExerciseDesc = action.payload
                return {...state, exerciseDesc: newExerciseDesc};
        case 'SET_PET_EXERCISE_TIME':
            const newExerciseTime = action.payload
                return {...state, exerciseMin: newExerciseTime};
        default:
            return state;
    }
};

//all pets reducer
const petsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({singlePetReducer, petsReducer});