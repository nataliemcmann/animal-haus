import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Saga: will fire on "ADD_PET" actions
function* createPet(action) {
    try{
        const newPet = action.payload;
        yield console.log('New pet to post to database: ', newPet);
        const response = yield axios({
            method: "POST",
            url: "/api/pets",
            data: newPet
        });
        //once get route/sagas is written, yield put to get all pets
        yield put({ type: 'FETCH_PETS' });
    } catch (error) {
        console.log('Error in createPet: ', error);
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
        console.log('Error in fetchAPet: ', error);
    }
} 

//Get all Saga: will fire on "FETCH_PETS"
function* fetchPets(action) {
    try {
        //ask for pet data
        const pets = yield axios.get(`/api/pets/household/${action.payload}`);
        console.log('all pet data', pets);
        //once data received, send to petsReducer 
        yield put({ type: 'SET_PETS', payload: pets.data })
    } catch (error) {
        console.log('Error in fetchPets', error);
    }
}

//PUT: id Saga: will fire on "EDIT_THIS_PET"
function* editAPet(action) {
    try {
        const editedPet = action.payload;
        // yield console.log('Pet data to update: ', editedPet);
        yield axios({
            method: "PUT",
            url: `/api/pets/${editedPet.id}`,
            data: editedPet
        })
        yield put({ type: 'FETCH_PET_DETAILS', payload: editedPet.id})
    } catch (error) {
        // console.log('Error in editAPet: ', error);
    }
}

//DELETE:id Saga: will fire on "DELETE_THIS_PET"
function* deleteAPet(action) {
    try {
        //get pet id from action object
        const id = action.payload;
        //axios delete by pet id
        yield axios.delete(`/api/pets/${id}`);
        // console.log('delete this pet:', id);
        //yield put to get all pets
        yield put ({ type: 'FETCH_PETS'});
    } catch (error) {
        // console.log('Error in deleteAPet: ', error);
    }
}

function* petsSaga() {
    yield takeEvery('ADD_PET', createPet);
    yield takeEvery('FETCH_PET_DETAILS', fetchAPet);
    yield takeEvery('DELETE_THIS_PET', deleteAPet);
    yield takeEvery('EDIT_THIS_PET', editAPet);
    yield takeEvery('FETCH_PETS', fetchPets);
}

export default petsSaga;