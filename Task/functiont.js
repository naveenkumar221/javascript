function greetUser(name,times){

    if(times<1){
        console.log("Warning: times must be at least 1.")
        return
    }

    console.log(`Hello,${name}!,time${times}`)
    

}
greetUser("naveen",4)




// Rectangle Area & Perimeter Function
function calcRectangle(width,height){
    if(width<=0 || height<=0){
        return "an error value/message."
    }
  let area = width * height;
  let perimeter = 2 * (width + height);
  return { area, perimeter };
}
console.log(calcRectangle(3,5))