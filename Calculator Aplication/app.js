function valueGet(number) {
    var input = document.getElementById("input")

    console.log(input);
    
    input.value = input.value +  number

    
}


function calc() {
        var input = document.getElementById("input")
var ans = eval(input.value)
console.log(ans);
input.value = ans

}


function AC() {
        var input = document.getElementById("input")
input.value = ""


        

}

function percentage() {
        var input = document.getElementById("input")
        input.value = input.value / 100
}

function del() {
            var input = document.getElementById("input")
var  inputArr = input.value.split("")
console.log(inputArr);

var arrCopy = inputArr.slice(0 , -1)
var newStr = arrCopy.join("")

input.value = newStr


}

