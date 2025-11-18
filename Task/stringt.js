// Task 1: Character Finder
var str1="JavaScript"
console.log(str1.charAt(4))
console.log(str1.charCodeAt(2))
console.log(str1.at(-3))


//  Task 2: Combine & Search
var str2="Hello"
var str3="World"
var str4=str2.concat(str3)
// console.log(str2.concat(str3))
console.log(str4)
console.log(str2.includes("lo"))
console.log(str4.indexOf("l"))
console.log(str4.lastIndexOf("l"))


// Text Formatting
var str5="  JavaScript Methods    1     "
console.log(str5.trim())
console.log(str5.trimStart())
console.log(str5.trimEnd())
console.log(str5.toUpperCase())
console.log(str5.toLowerCase())
console.log(str5.toLocaleLowerCase())
console.log(str5.toLocaleUpperCase())
console.log(str5.toWellFormed())



// Extract Substrings
var str6='Learning JavaScript is fun!'
console.log(str6.slice(9,19))
console.log(str6.substring(0,8))
console.log(str6.substring(20,23))



// Padding Magic
var str7="50"
console.log(str7.padStart(5,"0"))
console.log(str7.padEnd(10,"*"))



// Replace & Compare
var str8= 'I love JavaScript, JavaScript is powerful!'
console.log(str8.replace("JavaScript","JS"))
console.log(str8.replaceAll("JavaScript","JS"))
var fruit1="apple"
var fruit2="banana"
console.log(fruit1.localeCompare(fruit2))




// Mixed Operations (Mini Project)
function analyzeString(a,b,c){
    console.log(a.length)
    console.log(b.length)
    console.log(a.charAt(1))
    console.log(b.at(-1))
    console.log(a.toUpperCase())
    console.log(b.toLowerCase())
    console.log(a.includes('u'))
    console.log(b.slice(0,5))
   console.log(c.trim())
}
analyzeString(a="kumar",b="naveen",c="    hello  ")
