import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Saga: will be fire on "ADD_PET" actions
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

//GET:id Saga: will fire on "FETCH_PET_DETAILS"
function* fetchAPet(action) {
    try {
        //get pet id from action object
        const id = action.payload;
        //axios get for specific pet by id
        const petDetails = yield axios.get(`/api/pets/${id}`);
        //when data comes back it will be an array, so grab object out of the array
        const singlePet = petDetails.data[0];
        //make sure the data looks correct
        console.log('get single pet:', singlePet);
        //send the data to the single pet reducer
        yield put({type: 'SET_A_PET', payload: singlePet});
    } catch (error) {
        console.log('Error with single pet fetch: ', error);
    }
} 

function* petsSaga() {
    yield takeEvery('ADD_PET', createPet);
    yield takeEvery('FETCH_PET_DETAILS', fetchAPet);
}

export default petsSaga;