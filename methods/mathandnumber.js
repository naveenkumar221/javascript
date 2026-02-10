//Math Methods

//1 math.abs()
console.log(Math.abs(-10));  // 10


//2 math.ceil()
console.log(Math.ceil(4.2));  // 5


//3 math.floor()
console.log(Math.floor(4.7));   // 4

//4 math.round()
console.log(Math.round(4.5));    // 5
console.log(Math.round(4.4));    // 4

//5 math.trunc()
console.log(Math.trunc(4.9));   // 4

//6 math.max() & math.min()
console.log(Math.max(1, 2, 3, 10));     // 10
console.log(Math.min(1, 2, 3, 10));    // 1


//7 math.pow()
console.log(Math.pow(2,3))        //8


//8  math.sqrt()
console.log(Math.sqrt(25))       //5


//9. Math.random()
console.log(Math.random()) 
console.log(Math.floor(Math.random() * 100) + 1);  // 1-100




//Using the Number Methods

//1. toFixed()
let num = 123.45678;
console.log(num.toFixed(2));    // "123.46" - rounds to 2 decimal places
console.log(num.toFixed(3));    // "123.457" - rounds to 3 decimal places
console.log(num.toFixed(0));    // "123" - rounds to nearest integer


//2. parseInt()
console.log(parseInt("123abc"));     // 123
console.log(parseInt("   456  "));   // 456
console.log(parseInt("3.14"));       // 3 - fractional part truncated



//3. parseFloat()
console.log(parseFloat("123.45abc"));     // 123.45
console.log(parseFloat("1e4"));          // 10000


//4. isNaN()
console.log(isNaN("hello"));    // true
console.log(isNaN(37));        // false
console.log(isNaN("37"));      // false, string converted to number


//5. Number()
console.log(Number("123"));       // 123
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number("123abc"));   // NaN
