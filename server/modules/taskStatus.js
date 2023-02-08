//function to add task status
//based on taskCompleted date and current date
function addTaskStatus(taskArray){
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
    return taskArray;
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


module.exports = addTaskStatus;

// *** Function tests below here *** //

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