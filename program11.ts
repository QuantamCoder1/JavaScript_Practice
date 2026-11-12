/**Student Interface
- Create an interface Student.
- Properties: id, name, course, marks.
- Create three student objects.
- Display student details. */


    interface Student {
    id :number,
    name :string,
    course: string,
    marks :number
}

const s1: Student={id:1, name: "Manglam", course:"Java", marks:90}
const s2: Student={id:2, name: "Suraj", course:"JavaScript", marks:90}
const s3: Student={id:3, name: "Ram", course:"TypeScript", marks:90}


function studentDetails(student:Student){
    console.log("Student Id :"+ student.id);
        console.log("Student name :"+student.name);
        console.log("Student course :"+student.course);
        console.log("Student marks :"+student.marks);

    
}
studentDetails(s1)
studentDetails(s2)
studentDetails(s3)
