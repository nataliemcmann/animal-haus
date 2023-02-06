import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Saga: will be fired on "ADD_PET" actions
function* createPet(action) {
    try{
        
    } catch (error) {
        console.log('Error with pet creation: ', error);
    }
}

function* petsSaga() {
    yield takeEvery('ADD_Pet', createPet);
}

export default petsSaga;