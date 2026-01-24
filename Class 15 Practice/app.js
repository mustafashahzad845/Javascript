// function my_function() {

//     console.log("Helllo World 1");
//     console.log("Helllo World 2");

// }


// my_function()


//   function calc() {


// var num1 = +prompt("Enter num1")
// var opt = prompt("Enter opt")
// var num2 = +prompt("Enter num2")

// if(opt ==="+"){
// console.log(num1 + num2);

// }else if(opt === "-"){
//     console.log(num1 - num2);

// }else if(opt === "*"){
// console.log(num1 * num2);

// }else if(opt === "/"){
//     console.log(num1 / num2);

// }else{
//     console.log("Invalid opt");

// }


//   }



// function add(num1 = 0 , num2 = 0) {
// console.log(num1 + num2);


// }

// add(100 , 300)
// add(300 , 800)


// function greet(userName) {

//     console.log("Welcome " + userName);
// return "Welcome " + userName
// }

// var res =  greet("Mustafa", )
// console.log(res);

// greet("Shahzad")
// greet("Ali")
// greet("Jaffar")
// greet("Arsalan")
// greet("Raza")
// greet("Ayan")
// greet("Sarfaraz")


// function time_show(){

// var hours = new Date().getHours().toString()
// console.log(hours);
// var minutes = new Date().getMinutes().toString()
// console.log(minutes);

// var finalTime = hours +":"+ minutes
// alert(finalTime)
// }

// var numbers = []

// for (var i = 0 ; i < 10 ; i++){

//    var numerPush =  numbers.push(i + 1)
// }

// console.log(numerPush);


// console.log(numbers);


// var randomNumbers = Math.floor(Math.random() * (20 - 5 + 1)+5)
// console.log(randomNumbers);


//DOB Function

// function Age_Calculator() {

// var  userName = prompt("Enter your name")
// var userDOB = prompt("Enter your DOB" , "1 Jan 2026")
// console.log(userDOB);

// userDOB = new Date(userDOB).getTime()
// console.log(userDOB , "milliseconds");


// var currentDate = new Date().getTime()
// var userAge = currentDate - userDOB
// userAge = Math.floor(userAge / (1000 * 60 * 60 * 24 * 365))
// var userLuckyNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1)

// alert(userName + " bhai ap " + userAge + " saal ke hogae ho aur apka lucky number " + userLuckyNumber + " hai" );

// }



function Currency_Convertor() {

    
var Amount = +prompt("How many Amount you want to convert Dirham into PKR")
var DirhamPKRRateToday = 75.5
var DirhamToPKR = Amount * DirhamPKRRateToday

alert(Amount + "UAE Dirhams = " + DirhamToPKR + " PKR")


}
