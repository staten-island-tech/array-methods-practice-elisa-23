const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
];

//  1. Log each student's name and grade.
students.forEach((student) => console.log(student.name + ";" + student.grade));

//  1. Filter students with grades above 80.
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);

//  2. Filter students who are 21 or younger.
const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

//  1. Log the names of students who scored above 80.
students
  .filter((student)=> student.grade > 80)
  .forEach((student)=> console.log(student.name));

//  2. Log the names of students 21 or younger.
students
  .filter((student)=> student.age <= 21)
  .forEach((student)=> console.log(student.name));

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
];

//  1. Display Project Details: Log the name and price of each product.
products.forEach((product)=> console.log(product.name + ";" + product.price));

//  2. Increase Price: Increase the price of each project by 10% and log the updated products.
products.forEach((product)=> console.log(product.name + ";" + (product.price * 1.1)));

//  3.