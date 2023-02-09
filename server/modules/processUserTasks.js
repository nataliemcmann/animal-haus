//function to add task status and sort to specific user
//based on taskCompleted date and current date
function processUserTasks(taskArray, userID){
    //get current date in format "YEAR-MM-DD"
    const currentDate = reformatDate(new Date());
    for (let task of taskArray){ //loop through task objects
        let sqlDate = '';
        //set sqlDate if not null
        if (task.timeCompleted !== null) {
            //get sqlDate in format "YEAR-MM-DD"
            sqlDate = reformatDate((task.timeCompleted));
        }
        //conditional to compare current date to sqlDate if not null
        if (matchDates(currentDate, sqlDate)) {
            //if matchDates returns true
            // then currentDate and sqlDate don't match
            task.status = 'false'; //add status property of false
        } else {
            //if false, the dates match
            task.status = 'true'; //add status property of true
        }
    }
    //retain only unique tasks IDs, only tasks claimed by user
    return retainFirstUniqueID(sortUserID(taskArray, userID));
}

//helper function to change sqlDate
function reformatDate(date) {
    let stringDate = date.toISOString();
    let newDate = '';
    //iterate through date string and truncate
    //to 10 characters 
    for (let i = 0; i < 10; i++){
        newDate += stringDate[i];
    } 
    return newDate //format "YEAR-MM-DD"
}

//make a function to match date strings exactly
function matchDates(currentDate, sqlDate) {
    let arrayMatch = [];
    //iterate through currentDate string
    for (let i = 0; i < currentDate.length; i++) {
        //compare character at specific index to each other
        //in each string
        if (currentDate[i] === sqlDate[i]) {
            arrayMatch.push(true) //if characters match
            //push true into the array
        } else {
            arrayMatch.push(false); //if characters don't match
            //push false into array
        }
    }
    //if arrayMatch contains false, then the two date strings
    //don't match and matchDates will be true
    return arrayMatch.includes(false);
} 

//function to retain one of each task id
function retainFirstUniqueID(taskArray) {
    let uniqueArray = [];
    for (let i = 0; i < taskArray.length; i++) {
        if (i === 0) {
            uniqueArray.push(taskArray[i]);
        } else if (taskArray[i].id !== taskArray[i-1].id) {
            uniqueArray.push(taskArray[i]);
        }
    }
    return uniqueArray
}

//function to aggregate userID
function sortUserID(taskArray, userID) {
    let userArray = [];
    for (let i = 0; i < taskArray.length; i++) {
        if (taskArray[i].userID === userID) {
            userArray.push(taskArray[i]);
        }
    }
    return userArray;
}


module.exports = { processUserTasks, retainFirstUniqueID };

// *** Function tests below here *** //

//test array
// let test1 =
//         [
//             {
//                 "id": 2,
//                 "taskDesc": "feed PM",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": "2023-02-08T06:00:00.000Z",
//                 "claimID": 3,
//                 "userID": 2
//             },
//             {
//                 "id": 2,
//                 "taskDesc": "feed PM",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": "2023-02-07T06:00:00.000Z",
//                 "claimID": 10,
//                 "userID": 4
//             },
//             {
//                 "id": 3,
//                 "taskDesc": "walk",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": "2023-02-08T06:00:00.000Z",
//                 "claimID": 16,
//                 "userID": 4
//             },
//             {
//                 "id": 3,
//                 "taskDesc": "walk",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": "2023-02-07T06:00:00.000Z",
//                 "claimID": 16,
//                 "userID": 4
//             },
//             {
//                 "id": 4,
//                 "taskDesc": "threshold training",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": null,
//                 "claimID": null,
//                 "userID": null
//             },
//             {
//                 "id": 5,
//                 "taskDesc": "brush teeth",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": null,
//                 "claimID": null,
//                 "userID": null
//             },
//             {
//                 "id": 6,
//                 "taskDesc": "fill water bowl",
//                 "frequency": "daily",
//                 "petID": 4,
//                 "timeCompleted": null,
//                 "claimID": null,
//                 "userID": null
//             }
//         ]

// console.log(retainFirstUniqueID(sortUserID(test1, 4))); //



// //test reformatDate
// let sqlDate = reformatDate("2023-02-07T06:00:00.000Z");

// // //test Javascript date
// let currentDate = new Date().toISOString();
// // console.log(currentDate);
// let newDate = reformatDate(currentDate);
// console.log(typeof newDate);

//logical operators don't work to compare date variables
// if (newDate === sqlDate) {
//     console.log('TRUE');
// } else {
//     console.log('FALSE');
// }

//but do work if they are strings
// if ("2023-02-07" === "2023-02-08") {
//     console.log('TRUE');
// } else {
//     console.log('FALSE');
// }

//test matchDates function
//expecting an array of 9 trues and one false
//['true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'true', 'false']
// console.log(matchDates(newDate, sqlDate));


// test of addTaskStatus
// console.log(addTaskStatus([ 
//         {
//         "id": 2,
//         "taskDesc": "feed PM",
//         "frequency": "daily",
//         "timeCompleted": "2023-02-08T06:00:00.000Z",
//         "userID": 4
//         },
//         {
//             "id": 3,
//             "taskDesc": "walk ",
//             "frequency": "daily",
//             "timeCompleted": "2023-02-07T06:00:00.000Z",
//             "userID": 4
//         },
//         {
//             "id": 1,
//             "taskDesc": "feed AM",
//             "frequency": "daily",
//             "timeCompleted": "2023-02-07T06:00:00.000Z",
//             "userID": null
//         }
//     ])
// )

