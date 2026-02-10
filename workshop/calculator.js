function display(value){
        document.getElementById('result').value+=value
    }
    function clearscreen(){
        document.getElementById('result').value=" "
    }
    function Calculation(){
       var res =  document.getElementById('result').value
       var result = eval(res)
       document.getElementById('result').value = result
    }