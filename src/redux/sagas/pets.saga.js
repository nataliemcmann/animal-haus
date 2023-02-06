import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Saga: will be fired on "ADD_PET" actions
function* createPet(action) {
    try{
        const newPet = action.payload;
        yield console.log('New pet to post to database: ', newPet);
        yield axios({
            method: "POST",
            url: "/api/pets",
            data: newPet
        });
        //once get route/sagas is written, yield put to get pets
    } catch (error) {
        console.log('Error with pet creation: ', error);
    }
}

function* petsSaga() {
    yield takeEvery('ADD_PET', createPet);
}

export default petsSaga;