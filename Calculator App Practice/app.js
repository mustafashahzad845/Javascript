// Calculator
var input = document.getElementById("input")
var zerobtn = document.getElementById("zerobtn")
// if(input.value == ""){
// zerobtn.removeAttribute("onclick")
// }



function addNumber(number) {
    input.value += number
}
function calculate() {
    console.log(input.value);
    input.value = eval(input.value)
}
function AC() {
    input.value = ""
}
function percentage() {
    input.value = input.value / 100
}
function del() {
    input.value = input.value.slice(0, -1)
}
// if(input.value !== ""){
// zerobtn.onclick = addNumber(0)
// }
