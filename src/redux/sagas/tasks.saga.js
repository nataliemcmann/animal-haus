import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//POST Task Saga: will fire on "ADD_TASK" actions
function* createTask(action) {
    try {
        const newTask = action.payload;
        // yield console.log('New task to post to database: ', newTask);
        yield axios ({
            method: "POST",
            url: "/api/tasks",
            data: newTask
        });
        //yield put to render task list
        yield put({ type: 'FETCH_PET_TASKS', payload: newTask.petID })
    } catch (error) {
        // console.log('Error in createTask: ', error);
    }
}

//PUT task saga: will fire on "EDIT_THIS_TASK"
function* editTask(action) {
    try {
        const editedTask = action.payload;
        let idToEdit = editedTask.id
        // yield console.log('Task to edit: ', editedTask);
        yield axios ({
            method: "PUT",
            url: `/api/tasks/${idToEdit}`,
            data: editedTask
        });
        yield put({ type: 'FETCH_PET_TASKS', payload: editedTask.petID })
        yield put({ type: 'FETCH_TASKS' })
        yield put({ type: 'FETCH_USER_TASKS' })
    } catch (error) {
        // console.log('Error in editTask: ', error);
    }
}

//DELETE Task Saga: will fire on "DELETE_THIS_TASK"
function* deleteTask(action) {
    try {
        const taskObject = action.payload;
        let idToDelete = taskObject.idToDelete
        // yield console.log('Delete tasks with id: ', idToDelete);
        yield axios ({
            method: "DELETE",
            url: `/api/tasks/${idToDelete}`
        });
        yield put({ type: 'FETCH_PET_TASKS', payload: taskObject.petID })
        yield put({ type: 'FETCH_ALL_TASKS' })
        yield put({ type: 'FETCH_USER_TASKS' })
    } catch (error) {
        // console.log('Error in deleteTask', error);
    }
}

//GET a task saga: will fire on "FETCH_A_TASK"
function* fetchATask(action) {
    try {
        const taskID = action.payload;
        const singleTask = yield axios.get(`api/tasks/${taskID}`)
        // console.log('get a single task', singleTask);
        yield put({type: 'SET_TASK', payload: singleTask.data[0]})
    } catch (error) {
        // console.log('Error in fetchATask', error);
    }
}

//GET by petID Saga: will fire on "FETCH_PET_TASKS"
function* fetchPetTasks(action) {
    try {
        //get id from action object
        const petID = action.payload;
        //axios get for tasks by petID
        const petTasks = yield axios.get(`api/tasks/pet/${petID}`);
        //make sure data looks correct
        // console.log('get a pets taks', petTasks);
        //send data to pet task reducer
        yield put({type: 'SET_PET_TASKS', payload: petTasks.data});
    } catch (error) {
        // console.log('Error in fetchPetTasks: ', error);
    }
}

//GET by userID Saga: will fire on "FETCH_USER_TASKS"
function* fetchUserTasks() {
    try {
        //axios get for tasks by petID
        const userTasks = yield axios.get(`api/tasks/user`);
        //make sure data looks correct
        // console.log('get a pets task', userTasks);
        //send data to pet task reducer
        yield put({type: 'SET_USER_TASKS', payload: userTasks.data});
    } catch (error) {
        // console.log('Error in fetchUserTasks: ', error);
    }
}

//GET all tasks: will fire on "FETCH_ALL_TASKS"
function* fetchTasks(action) {
    try {
        //axios get for tasks by petID
        const allTasks = yield axios.get(`api/tasks/household/${action.payload}`);
        //make sure data looks correct
        // console.log('get all tasks');
        //send data to pet task reducer
        yield put({type: 'SET_TASKS', payload: allTasks.data});
    } catch (error) {
        // console.log('Error in fetchPetTasks: ', error);
    }
}

function* tasksSaga() {
    yield takeEvery('ADD_TASK', createTask);
    yield takeEvery('FETCH_PET_TASKS', fetchPetTasks);
    yield takeEvery('DELETE_THIS_TASK', deleteTask);
    yield takeEvery('FETCH_A_TASK', fetchATask);
    yield takeEvery('EDIT_THIS_TASK', editTask);
    yield takeEvery('FETCH_ALL_TASKS', fetchTasks);
    yield takeEvery('FETCH_USER_TASKS', fetchUserTasks);
}

export default tasksSaga;