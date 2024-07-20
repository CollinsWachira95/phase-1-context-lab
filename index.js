/* Your Code Here */



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
}

function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);
}

// Function to find an employee by their first name
function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
}

// Sample usage
const employeeRecords = createEmployeeRecords([
    ["Gray", "Worm", "Security", 1],
    ["Moe", "Sizlak", "Barkeep", 2],
    ["Bartholomew", "Simpson", "Scamp", 3]
]);

createTimeInEvent.call(employeeRecords[0], "2024-07-01 0900");
createTimeOutEvent.call(employeeRecords[0], "2024-07-01 1700");

console.log(allWagesFor.call(employeeRecords[0])); // Should log the total wages for Gray Worm
console.log(calculatePayroll(employeeRecords)); // Should log the total payroll for all employees

