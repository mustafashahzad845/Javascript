// function bulbOnImg() {
//     var bulbImg= document.getElementById("bulbImg")
//     console.log(bulbImg);

//     bulbImg.src = "./bulbon.png"
    
// }

// function bulbOffImg() {
//     var bulbImg= document.getElementById("bulbImg")
//     console.log(bulbImg);

//     bulbImg.src = "./bulboff.png"
    
// }


// function bulbImgHandle() {
//     var bulbImg = document.getElementById("bulbImg")

//     console.log(bulbImg);

//     if(bulbImg.src.includes("bulboff.png") ){
//         bulbImg.src = "./bulbon.png"
//         bulbImg.width = 275
//         bulbImg.height = 275
//     }else{
//                 bulbImg.src = "./bulboff.png"
//   bulbImg.width = 300
//         bulbImg.height = 300
//     }
    
// }


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
// return

}


function AC() {
        var input = document.getElementById("input")
input.value = ""

        // input.value = input.value - number
        // console.log("del");

        // input.value = input.value - input.value
        

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

