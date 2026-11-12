"use strict";
/**5: Promise Chaining*
- Create a function to fetch employee details.
- Pass employee ID to another function to fetch salary.
- Pass salary to another function to calculate annual bonus.
- Use Promise chaining to display the final result. */
function employeeDetails(ID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ID === 1) {
                resolve(ID);
            }
            else {
                reject("Employee not found");
            }
        }, 1000);
    });
}
function getSalary(empId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const empsalary = 29000;
            resolve(empsalary);
        }, 1000);
    });
}
function annualBonus(salary) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bonus = salary * 12 * 0.1;
            resolve(bonus);
        }, 1000);
    });
}
employeeDetails(1)
    .then((ID) => {
    console.log("Employee UserID: " + ID);
    return getSalary(ID);
})
    .then((salary) => {
    console.log("Employee salary :" + salary);
    return annualBonus(salary);
})
    .then((bonus) => {
    console.log("Employee annual bonus :" + bonus);
})
    .catch((error) => { console.log(error); });
