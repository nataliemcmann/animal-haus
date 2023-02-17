const addTaskStatus = require('./addTaskStatus');

//function to filter tasks for the user
function sortTasks(taskArray) {
    let newArray = addTaskStatus(taskArray);
    let filteredArray = retainOneOfEeachTask(newArray);
    return filteredArray;
}

//function to filter out multiple copies of a task
function retainOneOfEeachTask(taskArray) {
    let uniqueArray = [];
    let lastID = 0;
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].id !== lastID &&
            taskArray[i].status === 'false' || 
            taskArray[i].timeCompleted === null ||
            taskArray[i].status === 'true') {
            uniqueArray.push(taskArray[i]);
            lastID = taskArray[i].id;
        }
    }
    return uniqueArray;
}

module.exports = sortTasks;

// (taskArray[i].timeCompleted === null ||
//     taskArray[i].status === 'true') {
//     uniqueArray.push(taskArray[i]);
// } else if 

// let testArray = [
//     {
//         id: 1, 
//         taskDesc: 'feed 7 AM', 
//         frequency: 'daily', 
//         petID: 1, 
//         timeCompleted: '2023-02-13T06:00:00.000Z',
//         status: "false"
//     },
//     {
//         id: 1, 
//         taskDesc: 'feed 7 AM', 
//         frequency: 'daily', 
//         petID: 1, 
//         timeCompleted: '2023-02-11T06:00:00.000Z',
//         status: "false"
//     },
//     {
//         id: 3, 
//         taskDesc: 'walk', 
//         frequency: 'daily', 
//         petID: 1, 
//         timeCompleted: '2023-02-13T06:00:00.000Z',
//         status: "false"
//     },
//     {
//         id: 4, 
//         taskDesc: 'clip nails', 
//         frequency: 'daily', 
//         petID: 1, 
//         timeCompleted: '2023-02-13T06:00:00.000Z',
//         status: "false"
//     },
//     {
//         id: 6, 
//         taskDesc: 'feed PM', 
//         frequency: 'daily', 
//         petID: 2, 
//         timeCompleted: null, 
//         status: "false"
//     }
// ];

// console.log(retainOneOfEeachTask(testArray));

