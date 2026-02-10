//1
var colors =["red","yellow","green","pink","blue"]
console.log(colors[1],colors[3])

//2
var num = [38,10,19,11,28,29,13,14]
num[0]=100
console.log(num)

//3
var arr = ["naveen",22,true];
for (var i=0; i<arr.length;i++){
    console.log(arr[i])
}

//4
var nested = [["red", 
               "green", 
               "blue"],
            [
                "circle",
                "square", 
                "triangle"
            ]];
console.log(nested[0][1]); 
console.log(nested[1][1]);

//5
var arr = new Array();
arr.push("naveen");
arr.push(22);
arr.push(true);
console.log(arr.length); 

//6
var fruits = ["apple","banana","guva","grapes"]
fruits.push("tomato")
console.log(fruits)

//7
var fruits = ["apple","banana","guva","grapes"]
fruits.pop()
console.log(fruits)

//8
var fruits = ["apple","banana","guva","grapes"]
fruits.unshift("kiwi","pineapple")
console.log(fruits)

//9
var fruits = [ 'kiwi', 'pineapple', 'apple', 'banana', 'guva', 'grapes' ]
fruits.shift()
console.log(fruits)

//10
var arr = ["apple", "banana", "cherry", "mango"];
arr.push("Orange")
arr.pop()
arr.pop()
console.log(arr)
console.log(arr.length)

//11
var array =  [10, 20, 30, 40, 50] 
console.log(array.slice(1,3))


//12
var array =  [10, 20, 30, 40, 50] 
console.log(array.splice(2,1,35))
console.log(array)

//13
var array =  [10, 20, 30, 40, 50] 
array.splice(2,0,25)
console.log(array)

//14

var array =  [10, 20, 30, 40, 50] 
array.splice(3,2)
console.log(array)

//15
var array =  [10, 20, 30, 40, 50]
var n = array.slice(0,3)
console.log(n)


//16
var arr1=[10,20,30]
var arr2=[40,50,60]
console.log(arr1.concat(arr2))


//17
var arr = ["naveen","sai","kumar","chinna","hari"]
console.log(arr.join(","))


//18
var arr = ["naveen","sai","kumar","chinna","hari"]
console.log(arr.toString())


//19
var arr1=[10,20,30]
var arr2=[40,50,60]
var arr3=[70,80,90]
var n=arr1.concat(arr2,arr3)
console.log(n.length)


//20
var city = ["vizag","Aruku","Hyd","Rjy"]
console.log(city.join("-"))


//21
var fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
var firstIndex = fruits.indexOf('banana');
console.log(firstIndex); 

//22
var fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
var firstIndex = fruits.lastIndexOf('banana');
console.log(firstIndex); 

//23
var fruits = ['apple', 'banana', 'orange', 'banana', 'grape']
console.log(fruits.includes('mango'))
console.log(fruits.includes('orange'))


//24







