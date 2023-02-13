import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Task-User-Claim Saga: will fire on "ADD_TASK_USER" actions
function* createTaskUserClaim(action) {
    try {
        const taskObject = action.payload;
        yield axios ({
            method: "POST",
            url: "/api/tasks_user",
            data: taskObject
        })
        yield put({ type: 'FETCH_PET_TASKS', payload: taskObject.petID })
        yield put({ type: 'FETCH_USER_TASKS', payload: action.payload.userID })
        yield put({ type: 'FETCH_ALL_TASKS' })
    } catch (error) {
        console.log('Error in createTaskUserClaim: ', error);
    }
}

//DELETE Task-User-Claim Saga: will fire on "DELETE_TASK_USER" actions
function* deleteTaskUserClaim(action) {
    try {
        const taskObject = action.payload;
        yield axios ({
            method: "DELETE",
            url: "/api/tasks_user",
            data: taskObject
        })
        yield put({ type: 'FETCH_PET_TASKS', payload: taskObject.petID })
        yield put({ type: 'FETCH_USER_TASKS', payload: action.payload.userID })
        yield put({ type: 'FETCH_ALL_TASKS' })
    } catch (error) {
        console.log('Error in deleteTaskUserClaim: ', error);
    }
}

function* tasksUserSaga() {
    yield takeEvery('ADD_TASK_USER', createTaskUserClaim);
    yield takeEvery('DELETE_TASK_USER', deleteTaskUserClaim);
}

export default tasksUserSaga;