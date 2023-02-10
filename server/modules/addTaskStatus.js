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
    //retain only unique tasks IDs, only tasks claimed by user
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