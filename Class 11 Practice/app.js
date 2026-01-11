// var userName = ["Mustafa" , "Shahzad" , "ALi" , "rAZa"]
// console.log(userName);

// for (var i = 0 ; i< userName.length ; i++){
//    console.log("Lower Case" , userName[i].toLocaleLowerCase());
//    console.log("Upper Case" , userName[i].toUpperCase());


// }

// var str = prompt("Enter Some text")
// // console.log("Original str: " , str);

// // console.log(str[0].toUpperCase() + str.slice(1).toLocaleLowerCase());


// for (var i = 0; i < str.length; i++) {

//     if (str.slice(i, i + 2) == "  ") {
//         alert("Double space not allow")
//                break

//     }
// console.log(str.slice( i , i+2));



// }


// var str = prompt("Enter Some Text")

// for (var i = 0; i < str.length; i++) {


//     if (str.slice(i, i + 2) == "  ") {
//         alert("Double spce not allow")
//         break
//     }
//     console.log(str.slice(i, i + 2));

// }


// Case Changer Program

// var str = prompt("Enter Some text")
// var text_case = prompt("Which type of case do you want?   lowercase , uppercase,capitalize").toLowerCase()

// if(text_case === "lowercase"){
// console.log(str.toLocaleLowerCase());

// }else if(text_case === "uppercase"){
//     console.log(str.toUpperCase());

// }else if(text_case === "capitalize"){
//     console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());

// }else{
//     console.log("Invalid Case");

// }




// var str = "My name   is Mustafa"
// // var str = prompt("Enter some text")

// for (var i = 0; i < str.length; i++) {

//     console.log(str.slice(i, i + 2));

//     if (str.slice(i, i + 2) == "  ") {
//        alert("Double space not allow")
//        break
//     }
// }

// var str = "sAylAnI"
var str = prompt("Enter some text")
console.log(str[0].toLocaleUpperCase() + str.slice(1).toLocaleLowerCase());

