//Assignment 1: Practicing `forEach` and `filter` with Student Data
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
//Part 1: .forEach
// 1. Log each student’s name and grade
students.forEach((student) => console.log(student.name));
students.forEach((student) => console.log(student.grade));

//Part 2: .filter
//1. **Filter students with grades above 80**.
const topStudents = students.filter((student) => student.grade > 80);
console.log(topStudents);
//2. **Filter students who are 21 or younger**.
const youngStudents = students.filter((student) => student.age < 21);
console.log(youngStudents);

//Part 3: combine .filter and .forEach
//1. **Log the names of students who scored above 80**.
students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));

//2. **Log the names of students 21 or younger**.
students
  .filter((student) => student.age < 21)
  .forEach((student) => console.log(student.name));
