// Creating a Date Object
var date = new Date(2026, 1, 12, 7, 24, 34); // (Year, MonthIndex[0–11], Day, Hour, Minute, Second)

// Printing Date in Readable Format
console.log(" Full Date and Time:", date.toString());  // Use () after toString

// Local Date and Time
console.log(" Local Date:", date.toLocaleDateString());  
console.log(" Local Time:", date.toLocaleTimeString());


//  Using the Get Methods 
console.log("\n Using Get Methods");

console.log("1 Full Year:", date.getFullYear());  // 2026
console.log("2 Month (0-based, so 1=February):", date.getMonth());  // 1
console.log("3 Date (Day of Month):", date.getDate());  // 12
console.log("4 Day of Week (0=Sunday, 6=Saturday):", date.getDay());  // Example: 4 for Thursday
console.log("5 Hours:", date.getHours());  // 7
console.log("6 Minutes:", date.getMinutes());  // 24
console.log("7 Seconds:", date.getSeconds());  // 34
console.log("8 Milliseconds:", date.getMilliseconds());  // 0
console.log("9 Time (milliseconds since Jan 1, 1970):", date.getTime());


//  Using the Set Methods 
console.log("\n Using Set Methods");

// 1
date.setFullYear(2028);
console.log(" Updated Year:", date.toString());

// 2
date.setMonth(7); // August (0 = Jan)
console.log(" Updated Month:", date.toLocaleDateString());

// 3
date.setDate(4);
console.log(" Updated Date:", date.toString());

// 4
date.setHours(17);
console.log(" Updated Hours:", date.toString());

// 5
date.setMinutes(13);
console.log(" Updated Minutes:", date.toString());

// 6
date.setSeconds(58);
console.log(" Updated Seconds:", date.toString());

// 7
date.setMilliseconds(677);
console.log(" Updated Milliseconds:", date.toString());

// 8
date.setTime(0);
console.log(" Reset Time (Epoch):", date.toString());
