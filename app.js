const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];

//  1. Log each student's name and grade
students.forEach((student) => console.log(student.name + ";" + student.grade));

//  1. Filter students with grades above 80
const topStudents = students.filter((student) => student.grade > 80);

//  2. Filter students who are 21 or younger
const youngStudents = students.filter((student) => student.age <= 21);

//check work
console.log(topStudents + ";" + youngStudents);

