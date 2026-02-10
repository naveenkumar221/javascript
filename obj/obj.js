/* var car = {
    name:"nano",
    color:"red",
    siting:5,
    car1: {
        
    }   

}

car.car1.name="naveen"



console.log(car)
car.wheel=4
car.price=300000
console.log(car)
*/



var obj={
    id:124,
    name:"sai",
    age:16
}

console.log(obj)
var obj2={...obj}

console.log(obj2)



// var obj1 = {a:1,b:2}
// var obj2 = {b:3,c:4}

// var both={...obj1,...obj2}
// console.log(both)

// var obj1 = { name:"naveen",age:22,place:"hyd"}
// console.log(obj1)
// var obj2 ={obj1}
// console.log(obj2)


var obj1 = {a:1,b:2,c:3,d:4}
var obj2 = {e:5,f:6,g:7,h:8}

var obj3 = {obj1,obj2}
console.log(obj3)

var obj3 = {...obj1,...obj2}
console.log(obj3)




