import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//create household: will fire on CREATE_HOUSEHOLD actions
function* createHousehold(action) {
    try {
        //send new household post request to server
        yield axios.post('api/households/register', action.payload);
        //re-fetch user info
        yield put({type: 'FETCH_USER'});
        //set current household reducer
        yield put({type: 'SET_CURRENT_HOUSEHOLD, payload: action.payload'});
    } catch (error) {
        console.log('Error in createHousehold: ', error);
    }
}

//add user to household: will fire on ADD_TO_HOUSEHOLD
function* addUserToHousehold(action) {
    try {
        //sends household info to server
        yield axios.post('api/households/newMember', action.payload);
        //re-fetch user info
        yield put({type: 'FETCH_USER'});
    } catch (error) {
        console.log('Error in addUserToHousehold: ', error);
    }
}

//listening Saga function
function* householdSaga() {
    yield takeLatest('CREATE_HOUSEHOLD', createHousehold);
    yield takeLatest('ADD_TO_HOUSEHOLD', addUserToHousehold);
}

export default householdSaga;