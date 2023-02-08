import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Task Saga: will fire on "ADD_TASK" actions
function* createTask(action) {
    try {
        const newTask = action.payload;
        yield console.log('New task to post to database: ', newTask);
        yield axios ({
            method: "POST",
            url: "/api/tasks",
            data: newTask
        });
        //yield put to render task list
    } catch (error) {
        console.log('Error in createTask: ', error);
    }
}

//POST Task-User-Claim Saga: will fire on "ADD_TASK_USER" actions
function* createTaskUserClaim(action) {
    try {
        const taskObject = action.payload;
        yield axios ({
            method: "POST",
            url: "/api/tasks/user",
            data: taskObject
        })
        yield put({ type: 'FETCH_PET_TASK', payload: taskObject.petID })
    } catch (error) {
        console.log('Error in createTaskUserClaim: ', error);
    }
}

//GET by petID Saga: will fire on "FETCH_PET_TASKS"
function* fetchPetTasks(action) {
    try {
        //get id from action object
        const petID = action.payload;
        //axios get for tasks by petID
        const petTasks = yield axios.get(`api/tasks/${petID}`);
        //make sure data looks correct
        console.log('get a pets taks', petTasks);
        //send data to pet task reducer
        yield put({type: 'SET_PET_TASKS', payload: petTasks.data});
    } catch (error) {
        console.log('Error in fetchPetTasks: ', error);
    }
}

function* tasksSaga() {
    yield takeEvery('ADD_TASK', createTask);
    yield takeEvery('FETCH_PET_TASKS', fetchPetTasks);
    yield takeEvery('ADD_TASK_USER', createTaskUserClaim);
}

export default tasksSaga;