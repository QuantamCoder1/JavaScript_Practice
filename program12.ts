/**: Employee Interface
- Create an interface Employee.
- Properties: empId, empName, department, salary.
- Create an array of employees.
- Display employees earning more than ₹50,000. */

interface Employee {
    empId: number,
    empName: string,
    department: string,
    salary: number

}

const employees: Employee[] = [
    { empId: 1, empName: "Sameer", department: "RMG", salary: 100000 },
    { empId: 2, empName: "Rohit", department: "QA", salary: 66000 },
    { empId: 3, empName: "Raj", department: "HR", salary: 16000 },
    { empId: 4, empName: "Jai", department: "Dev", salary: 86000 },

]
function display(list: Employee[]): void {

    let found = false;         // initially: no data found
    for (let i = 0; i < list.length; i++) {
        if (employees[i].salary > 50000) {
            console.log(employees[i].empName + "-" + employees[i].salary);
            found = true;     //when we find some data then : True 
        }

    }
    if (!found) {            //after the loop : still no data is found
        console.log("no data found");
    }

}
display(employees);