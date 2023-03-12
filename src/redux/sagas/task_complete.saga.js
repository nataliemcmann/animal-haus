import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST task-complete saga: will fire on "ADD_COMPLETE"
function* createTaskComplete(action){
    try {
        const taskID = action.payload.taskID;
        yield axios ({
            method: "POST",
            url: '/api/task_complete',
            data: { taskID }
        })
        yield put({ 
            type: 'FETCH_USER_TASKS',
            payload: action.payload.userID
        })
        yield put({type: 'FETCH_ALL_TASKS'})
    } catch (error) {
        // console.log('Error in createTaskComplete: ', error);
    }
}

function* taskCompleteSaga() {
    yield takeEvery('ADD_COMPLETE', createTaskComplete);
}

export default taskCompleteSaga;
