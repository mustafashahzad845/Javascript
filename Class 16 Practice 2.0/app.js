
// var a = 20;

// function foo() {
//      a = 10
// } 

// foo()
// console.log(a);


// var check = false
// console.log(check);


// if (true) {
    
//     var check = true
// }

// console.log(check);


//  === Case Changer ===

// function caseChanger() {
//     console.log("case changer");
    
//     var fullName = document.getElementById("fullName").value
//     console.log(fullName.toLowerCase());
//     console.log(fullName.toUpperCase());


// var fullNameArr = fullName.split(" ")
// console.log(fullName);
// var finalWord = []

//     for (var i = 0 ; i < fullNameArr.length ; i++) {

//         if (fullNameArr.slice(i , i+2) === " ") {
            
//             var word = fullNameArr[i].slice(0 , 1).toUpperCase() + fullNameArr[i].toLowerCase()
// finalWord.push(word)

// var Capitialize = finalWord.join(" ")
//         }
//     }
//     console.log(Capitialize);

// }






// var text = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be  displayed in a web browser.It defines the content and structure ..."

// for(var i = 0 ; i < text.length ; i++) {
// // if(text[i] === "markup"){
// // console.log(i);

// // }


// if (text.slice(i , i + 6) === "markup") {
//     console.log(i);
 
//     var part1 = text.slice(0 , i)
//     // console.log(part1);
//     var part2 = text.slice(i + 6)
//     // console.log(part2);
    
// // var finalPara = 
// text = part1 + "Tag base lang"+ part2
// }
// }

// console.log(text);



// var text = "Hypertext Markup Language (World War II) is the standard markup language for documents designed to be displayed in a web (World War II) browser. It defines the content and structure ..."


// var indexNumber = text.indexOf("markup") 
// console.log(indexNumber);

//  var newPara  =  text.replace(/World War II/g, "the Second World War");
// console.log(newPara);



// generating Random Numbers

// var randomNumbers = Math.floor(Math.random()* 10 + 1)
// console.log(randomNumbers);


// random number range formula

// var randomNumbers = Math.floor(Math.random() * (20 - 5 + 1)+5)
// console.log(randomNumbers);


// function foo(num1 , num2){
//     var  res = num1 + num2;

// return res
// }
 
// var ans =  foo(100 , 200)
// var ans2 =  foo(300 , 400)
// console.log(ans);
// console.log(ans2);



function caseChanger() {

    var fullName = document.getElementById("fullName").value

    console.log("orignal " , fullName);

    console.log("Lower Case " , fullName.toLowerCase());
    console.log("Upper Case " ,fullName.toUpperCase());
    

}

