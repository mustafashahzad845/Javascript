// for(var i = 100 ; i >= -100 ; i--){
//     console.log(i);

// }

// for(var i = 1 ; i<= 100 ; i++){
//     // console.log(i);
//     if(i % 2 === 0){
//         console.log("Even Number" , i);

//     }
// }


// for (var i = 1 ; i <= 100; i++){

//     if (i % 2 === 1) {
// console.log("Odd Number" , i);

//     }else if(i % 2 === 0){
//     console.log("Even Number" , i);

// }
// }


// for (var i = 1 ; i <= 10 ; i++) {

// console.log(i);
// if(i === 5){
//     break
// }
// }



// for ( var i = 1 ; i <= 50 ; i++){

//     if(i === 5 || i === 10 || i === 15 || i===20 || i === 25 || i=== 30 || i === 35|| i === 40 || i === 45 || i === 50) {
// continue
//     }

//         console.log(i);

// }

// var nameCheck = prompt("Enter your username")
// var isMatch = "not match"
// var users = ["Mustafa" , "Shahzad" , "Jaffar" ,"Usman" ,"Ibrahim"  , "Ahmed" , "Hammad"]
// console.log(users);

// for (var i = 0 ; i < users.length ; i++) {
// // console.log(users[i]);
// if(nameCheck === users[i]){
// alert("Welcome😊")  
// isMatch = "match successfully" 

// break
// }

// }

// if(isMatch === "not match"){
//     alert("Not Welcome")

// }

// console.log(isMatch);



// var username = prompt("Enter your username")
// var users = ["Mustafa" , "Shahzad" , "Jaffar" , "Aman" , "Ibrahim" , "Bilal" , "Sufiyan" , "Hanzala" , "Ali" , "Raza"]
// var nameCheck = prompt("Enter Your Username")
// var isMatch =  "Username not found"


// for(var i = 0 ; i < users.length ; i++) {

//     if(nameCheck === users[i]){
// alert("Welcome" + " " +nameCheck +" " +"😊")
// isMatch = "Username found"

// break
//     }
// }

// if(isMatch === "Username not found"){
//     alert("Not Welcome")

// }

// console.log(isMatch);





// var users = ["Mustafa" , "Shahzad" , "Jaffar" , "Aman" , "Ibrahim" , "Bilal" , "Sufiyan" , "Hanzala" , "Ali" , "Raza"]
// var nameCheck = prompt("Enter Your Username")
// var isMatch =  "Username not found"







var startingNumber = +prompt("Enter Starting Number")
var endingNumber = +prompt("Enter Ending Number")
var even_odd = prompt("Which type of number ou want?  Even or Odd")

for (var i = startingNumber; i <= endingNumber; i++) {

    if (even_odd === "Even" || even_odd === "even") {



        if (i % 2 === 0) {
            document.writeln("Even Number ", i, "<br />")
        }

    } else if (even_odd === "Odd" || even_odd === "odd") {


        if (i % 2 === 1){
           document.writeln("Odd Number ", i , "<br />")
    }

}

}