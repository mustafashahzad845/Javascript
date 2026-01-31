function getNumber(number) {
    var input = document.getElementById("input")

    input.value += number
}

function calc() {
    var input = document.getElementById("input")


    input.value = eval(input.value)

}

function AC() {
    var input = document.getElementById("input")
    input.value = ""
}

function del() {
    var input = document.getElementById("input")

    var inputArr = input.value.split("")
    console.log(inputArr);

    var newArr = inputArr.slice(0 , -1)
    console.log(newArr);

    var newStr = newArr.join("")

    input.value = newStr
    
    
}

function percentage() {
    var input = document.getElementById("input")
     if(input.value === "NaN"){
 input.value = "Wrong Equation"
    }
    input.value = input.value / 100
}