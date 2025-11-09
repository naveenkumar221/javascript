 //  Live Clock

    function updateClock() {
      let now = new Date();
      let hours = String(now.getHours())
      let minutes = String(now.getMinutes())
      let seconds = String(now.getSeconds())
      let ampm = "AM";

if (hours >= 12) {
    ampm = "PM";
  }
  hours = hours % 12;
  if (hours === 0) {
    hours = 12; 
  }

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

   document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();


const output = document.getElementById("output");

//  Math Methods

function showMath() {
output.innerHTML = `
<span class="highlight">Math Methods</span>

1 Math.abs(-10): ${Math.abs(-10)}
2 Math.ceil(4.2): ${Math.ceil(4.2)}
3 Math.floor(4.7): ${Math.floor(4.7)}
4 Math.round(4.5): ${Math.round(4.5)}
5 Math.trunc(4.9): ${Math.trunc(4.9)}
6 Math.max(1,2,3,10): ${Math.max(1,2,3,10)}
7 Math.min(1,2,3,10): ${Math.min(1,2,3,10)}
8 Math.pow(2,3): ${Math.pow(2,3)}
9 Math.sqrt(25): ${Math.sqrt(25)}
 Random(1-100): ${Math.floor(Math.random() * 100) + 1}
`;
    }

//  Number Methods

function showNumber() {
let num = 123.45678;
output.innerHTML = `
<span class="highlight">Number Methods</span>

1 num.toFixed(2): ${num.toFixed(2)}
2 parseInt("123abc"): ${parseInt("123abc")}
3 parseFloat("123.45abc"): ${parseFloat("123.45abc")}
4 isNaN("hello"): ${isNaN("hello")}
5 Number(true): ${Number(true)}
6 Number(false): ${Number(false)}
7 Number("123abc"): ${Number("123abc")}
`;
    }

    //  String Methods

function showString() {
let pla = "Good afternoon";
let padStr = "45";
let greet = "Hi Naveen, Hi Developer!";
output.innerHTML = `
<span class="highlight">String Methods</span>

1 pla.split(''): ${pla.split("")}
2 pla.startsWith('G'): ${pla.startsWith("G")}
3 pla.charAt(3): ${pla.charAt(3)}
4 pla.indexOf('o'): ${pla.indexOf("o")}
5 padStr.padStart(5, '0'): ${padStr.padStart(5, "0")}
6 pla.toUpperCase(): ${pla.toUpperCase()}
7 greet.replaceAll('Hi','Hey'): ${greet.replaceAll("Hi","Hey")}
8 pla.concat(' Everyone!'): ${pla.concat(" Everyone!")}
9 pla.repeat(2): ${pla.repeat(2)}
`;
    }

//  Clear Output

function clearOutput() {
output.innerHTML = " Output cleared! Click a button again to display results.";
}