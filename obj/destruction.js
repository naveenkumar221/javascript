
/* descruction*/

/* arrya descruction */

/*
var weeks = ["sun","mon","tue","wed","thu","fri","sat"]

var [a,b,c,d,e,f,g] = weeks

console.log(a,b,c,d,e,f,g)

*/

/* obj descruction */

/*

var clg = {id:102,name:"naveen",roll:"21HQ1a4221",branch:"csm"}
// console.log(clg)
let {id,name,...details}=clg
console.log(id)
console.log(name)
console.log(details)

*/

//operations

//arthimetic operator
var a=10
var b=20
console.log(a+b,a-b,a*b,a/b,a%b)

//comparision operator
var a=40
var b=50
console.log(a<b,a>b,a==b,a!=b)

//ternary operator 
var age=22
var tr= (age>18?"eligble for vote ": "your not eligible ")
console.log(tr)



//functions

//name function

function raju(){
    console.log(2+4)
}
raju()


//parameters function

function fun1(a,b){
    console.log(a+b)
    return a+b
}
fun1(20,40)


//return function 

function fun2(a,b,c){
    console.log(a)
    console.log(b)
    return c
    console.log(c)

}
fun2(30,50,90)
