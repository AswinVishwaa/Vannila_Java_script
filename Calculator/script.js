const display = document.getElementById("display");
function append(input){
    display.value += input;
}
function calculate(){
    try{
    display.value = eval(display.value);
    }catch(error){
        display.value="Syntax Error";
    }
}
function val(){
    display.value="";
}