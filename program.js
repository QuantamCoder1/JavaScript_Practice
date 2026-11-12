"use strict";
/**5: Promise Chaining*
- Create a function to fetch employee details.
- Pass employee ID to another function to fetch salary.
- Pass salary to another function to calculate annual bonus.
- Use Promise chaining to display the final result. */
function employeeDetails(ID) {
    return ID;
    function salary(salary) {
        return salary;
        function annualBonus(bonus) {
            const total = salary + bonus;
            console.log(total);
        }
    }
}
