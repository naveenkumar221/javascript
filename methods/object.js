//1
var student = {name:"uppi",age:23,course:"CSE",marks:"8.2 CGPA"}
console.log(student)

//2
student.grade="A+"
console.log(student)
student.marks=9.0
console.log(student)

//3
console.log(Object.keys(student))
console.log(Object.values(student))

//4
console.log(Object.entries(student))

//5
var extra = {city:"hyd",roll:21}
var both = Object.assign(student,extra)
console.log(both)

//6
var student = {name:"uppi",age:23,course:"CSE",marks:"8.2 CGPA"}
console.log(Object.hasOwnProperty("uppi"))

//7
var student = {name:"uppi",age:23,course:"CSE",marks:"8.2 CGPA"}
Object.freeze(student)
student.color="red"
console.log(student)
student.course="CSM"
console.log(student)

//8
var student = {name:"uppi",age:23,course:"CSE",marks:"8.2 CGPA"}
Object.seal(student)
student.color="red"
console.log(student)
student.course="CSM"
console.log(student)


//9
var student =Object.create ({fool:1})
console.log(student.fool)
