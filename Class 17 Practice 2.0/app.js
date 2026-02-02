// function getValue(number) {
//     var input = document.getElementById("input")

//     input.value += number
// }

// function calc() {
//          var input = document.getElementById("input")
//          input.value = eval(input.value)

// }

// function AC() {
//              var input = document.getElementById("input")
// input.value = ""
// }

// function del() {
//                  var input = document.getElementById("input")
// var inputCopy = input.value.slice(0 , -1)
// input.value = inputCopy
// }

// function percentage() {
//                      var input = document.getElementById("input")
// input.value =input.value / 100
// }


// function carImgHandle() {
//     var image =document.getElementById("image")
//     console.log(image);
//        var btn = document.getElementById("btn")

//     if(image.src.includes("carimage2.png")){
//         image.src = "carimage1.gif"
//         image.width = 300
//         image.height = 300
      
// btn.innerHTML = "OFF"
//     }else{
//                 image.src = "carimage2.png"
//    image.width = 300
//         image.height = 300
//         btn.innerHTML = "ON"

//     }
    
// }






function carImgHandle() {
    var image =document.getElementById("image")
    console.log(image);
       var btn = document.getElementById("btn")

       console.log(image.src.indexOf("carimage1.gif"));
       

    if(image.src.indexOf( "carimage2.png") != -1 ){
image.src = "./carimage2.png"
        image.width = 300
        image.height = 300
      
// btn.innerHTML = "OFF"
    }else{
image.src = "./carimage1.gif" ;
  image.width = 300
        image.height = 300
        // btn.innerHTML = "ON"

    }
    
}