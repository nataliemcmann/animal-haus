import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//create household: will fire on CREATE_HOUSEHOLD actions
function* createHousehold(action) {
    try {
        //send new household post request to server
        yield axios.post('api/households/register', action.payload);

    } catch (error) {
        console.log('Error in createHousehold: ', error);
    }
}

//listening Saga function
function* householdSaga() {
    yield takeLatest('CREATE_HOUSEHOLD', createHousehold);
}

export default householdSaga;