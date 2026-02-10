//1. What is the difference between == and === operators? Give an example.
//== comparing the values
//=== comparing both values and type also
console.log(5==5)
console.log(5==="5")


//2 function
//it is a reusable block of code that perform the specific task
//i declaration
function greet(){
    console.log("hello")
}
greet()

//ii expresion
var greet=function(){
    console.log("hello")
}
console.log(greet())

//iii return
function add(a,b){
    return a+b;
}
console.log(add(3,5))



//3. What is the purpose of break and continue statements?
//break is used to exit a loop or switch
//continue skip the current iteration


//4. How can you prevent modification of an object in JavaScript?
const obj = {name:"john"};
Object.freeze(obj)
obj.name="david";
console.log(obj.name)


//5. What is the output of the following code and why?
console.log(typeof null);   // 'object' (historical bug in JS)
console.log(typeof []); 	// 'object' (arrays are special objects)
console.log(typeof {}); 	// 'object'



//1. Use the spread operator to merge two arrays: [1,2,3] and [4,5,6].
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const merg = [...arr1,...arr2]
console.log(merg)


//2. Use array destructuring to extract the first two values from an array.
const numbers = [10,20,30,40];
const [first,second]= numbers
console.log(first,second)


//3. Create an object 'car' and use object destructuring.
const car = {brand: "Toyota", model: "Camry", price: 25000};
const {brand,model,price}= car
console.log(brand,model,price)


//4. Write a program that prints only odd numbers from 1 to 20 using continue.
for (i=1; i<=20; i++){
    if(i%2==0)
        continue;
    console.log(i)
}


//5. Write a function calculateGrade(marks).
function g_marks(marks){
    if(marks>=90)
        return "A"
    else if (marks>=75)
        return "B"
    else if (marks>=60)
        return "C"
    else if (marks>=40)
        return "D"
    else
        return "F"

}
console.log(g_marks(85))


//6. Write a program using template literals to print student details.
const name = "Naveen";
const age = 99;
const course = "Computer Science";
console.log(`Student name: ${name}, Age:${age}, course:${course}`)



//7. Write a program using switch to print the day of the week.
let day = 3;
 switch(day){
 	case 1: console.log("Monday"); break;
 	case 2: console.log("Tuesday"); break;
 	case 3: console.log("Wednesday"); break;
 	case 4: console.log("Thursday"); break;
 	case 5: console.log("Friday"); break;
 	case 6: console.log("Saturday"); break;
 	case 7: console.log("Sunday"); break;
 	default: console.log("Invalid day");
 }


//8. Write a program that uses array methods like p
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift();
console.log(fruits);



 let arr = ['a','b','c','d'];
 arr.splice(1,2,'x','y');
 console.log(arr);

