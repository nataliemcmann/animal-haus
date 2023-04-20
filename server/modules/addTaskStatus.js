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
        if (task.frequency === 'Daily') {
            setStatusIfDaily(task, currentDate, sqlDate)
        }
         else if (task.frequnecy === 'Weekly') {
            setStatusIfWeekly(task, currentDate, sqlDate);
        }
    }
    return taskArray;
}

//helper function for daily frequency
function setStatusIfDaily(task, currentDate, sqlDate) {
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

//helper function for weekly frequency
function setStatusIfWeekly(task, currentDate, sqlDate) {
    //conditional to see if current date is in same month as sqlDate
    if (matchYearMonth(currentDate, sqlDate)) {
        //if matchYearMonth returns true
        // then currentDate and sqlDate don't match
        task.status = 'false'; //add status property of false
    } else {
        //if false, the year and month match
        if (determineWeek) {
            task.status = 'true';
        } else {
            task.status = 'false';
        }
    }
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

//helper function to match year and month
function matchYearMonth(currentDate, sqlDate) {
    let arrayMatch = [];
    //iterate through currentDate to get year and month
    for (let i = 0; i < 7; i++) {
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
    //don't match and matchYearMonth will be true
    return arrayMatch.includes(false);
}

//helper function to determine if sqlDate is within a week of
//currentDate
function determineWeek(currentDate, sqlDate) {
    let today = captureDateNumber(currentDate);
    let taskDay = captureDateNumber(sqlDate);
    let diff = today - taskDay; 
    if (diff <= 7 || diff >= -7) {
        return true; //task date is within a week of today
    } else {
        return false; //task date is not within the week
    }
}

//helper function to retrieve just the date number from a string
function captureDateNumber(date) {
    let dateNumber = '';
    for (let i = 8; i < 10; i++) {
        dateNumber += i;
    }
    return Number(dateNumber);
}

//test array
// let test1 = [
//     {
//     id: 7,
//     taskDesc: 'Feed 7 AM',
//     frequency: 'Daily',
//     petID: 1,
//     timeCompleted: "2023-02-16T06:00:00.000Z",
//     name: 'Bennett'
//     },
//     {
//     id: 8,
//     taskDesc: 'Walk',
//     frequency: 'Daily',
//     petID: 1,
//     timeCompleted: "2023-02-16T06:00:00.000Z",
//     name: 'Bennett'
//     }
// ]

// console.log(addTaskStatus(test1))

module.exports = addTaskStatus;