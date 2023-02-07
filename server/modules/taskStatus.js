//function to determine whether task is complete
//based on taskCompleted date and current date

function addTaskStatus(taskArray){
    let newTaskArray = [];
    const newDate = reformatDate(new Date().toISOString());
    for (let task of taskArray){
        let sqlDate = reformatDate(task.timeCompleted);
        if (newDate.localeCompare(sqlDate)) {
            task.status = 'true';
        } else {
            task.status = 'false';
        }
    }
    return newTaskArray;
}

//helper function to change sqlDate
function reformatDate(date) {
    let newDate = '';
    for (let i = 0; i < 10; i++){
        newDate += date[i];
    }
    return newDate
}

//test reformatDate
let sqlDate = console.log(reformatDate("2023-02-07T06:00:00.000Z"));

//test Javascript date
let currentDate = new Date().toISOString();
console.log(currentDate);
let newDate = reformatDate(currentDate);
console.log(newDate);

if (newDate.localeCompare(sqlDate)) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}
