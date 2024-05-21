const text = document.getElementById("textbox");
const faren = document.getElementById("tofarenheit");
const cels = document.getElementById("tocelsius");
const para = document.getElementById("para");
let temp =0;
function convert(){
    if(faren.checked){
        temp = parseFloat(text.value);
        temp = (temp * 9/5) + 32;
        para.textContent = `the farenheit is ${temp.toFixed(1)}f`;
    }
    else if(cels.checked){
        temp = parseFloat(text.value);
        temp = (temp - 32) * (5/9);
        para.textContent = `the Celsius is ${temp.toFixed(1)}c`;
    }
    else{
        para.textContent = `Select a unit`;
    }
}