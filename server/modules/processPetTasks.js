const retainFirstUniqueID = require('./processUserTasks');

function processPetTasks(taskArray) {
    let sortedArray = [];
    for (let i=0; i < taskArray.length; i++) {
        if (taskArray[i].id === taskArray[i++].id) {
            if (taskArray[i].userID === taskArray[i++].userID) {
                sortedArray.push(taskArray[i]);
            }
        } else {
            sortedArray.push(taskArray[i]);
        }
    }
    return sortedArray;
}

let testArray = [
    {
        "id": 1,
        "taskDesc": "feed AM",
        "frequency": "daily",
        "petID": 4,
        "claimID": 3,
        "userID": 2
    },
    {
        "id": 1,
        "taskDesc": "feed AM",
        "frequency": "daily",
        "petID": 4,
        "claimID": 16,
        "userID": 4
    },
    {
        "id": 2,
        "taskDesc": "feed PM",
        "frequency": "daily",
        "petID": 4,
        "claimID": 17,
        "userID": 4
    },
    {
        "id": 3,
        "taskDesc": "walk ",
        "frequency": "daily",
        "petID": 4,
        "claimID": 29,
        "userID": 4
    },
    {
        "id": 3,
        "taskDesc": "walk ",
        "frequency": "daily",
        "petID": 4,
        "claimID": 29,
        "userID": 4
    },
    {
        "id": 4,
        "taskDesc": "threshold training",
        "frequency": "daily",
        "petID": 4,
        "claimID": null,
        "userID": null
    },
    {
        "id": 5,
        "taskDesc": "brush teeth",
        "frequency": "daily",
        "petID": 4,
        "claimID": null,
        "userID": null
    },
    {
        "id": 6,
        "taskDesc": "fill water bowl",
        "frequency": "daily",
        "petID": 4,
        "claimID": null,
        "userID": null
    }
]

console.log(processPetTasks(testArray));


module.exports = processPetTasks;