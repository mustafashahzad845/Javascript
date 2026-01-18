// var randomNumber = Math.floor(Math.random()*10+1)
// console.log(randomNumber);

// var randomNumber = Math.random() * (Max-Number - Min-Number + 1) + Min-Number

// var randomNumber = Math.floor(Math.random() * (20 - 5 + 1) + 5)
// console.log(randomNumber);

// var userNumber = +prompt("Enter one number between 1-6")
// var randomNumber = Math.floor(Math.random()*6 + 1)

// if (userNumber === randomNumber) {

//     console.log("Win");

// }else{
//     console.log("Lose");

// }



// console.log(randomNumber);



// var toss = prompt("Enter heads or tails").toLocaleLowerCase()
// var randomNumber = Math.floor(Math.random() * 2 + 1)
// // console.log(randomNumber);



// if (randomNumber === 1) {

//     console.log("Heads");


// }else if(randomNumber === 2){
//     console.log("Tails");

// }

// if(toss === "heads" &&  randomNumber === 1 || toss === "tails" && randomNumber === 2){
//     console.log("You Win");

// }else if(toss !== "heads" && toss !== "tails"){

// alert("Enter only heads or tails")

// }else{
//     console.log("You Loss");

// }



// // console.log(toss);
// console.log(randomNumber);



// var myName = alert("Mustafa Shahzad")
// var num = alert(7)

// variable banake alert
// var nationality = "Pakistani"
// console.log(alert(nationality));
// var age = 16
// console.log(alert(age));
// direct alert
// var meName = alert("Mustafa")  // isme variable ka naam is lie meName rakha ke name vs code ka pehle se naam hai
// console.log(meName);

// without variable alert
// console.log(alert("Mustafa"));

// Agar alert() main aik se ziada values donga tou kam nhi krega



// var age = 16 ; 
// var ageToAdd = 5 ;
// var futureAge = age + ageToAdd
// alert(futureAge);
// document.writeln(alert(futureAge))


// var a = 5
// var b = a++ // 6
// var c= ++a //

// console.log(a);
// console.log(b);
// console.log(c);


// var x = 5;
// var y = x++ + ++x - x-- + --x;
// //       5  +  7  - 7   +   5
// //       5               +   5
// //       y =   10
// // x = 5
// console.log("x = ",x);
// console.log("y = ",y);


// var a = 2; // 3/4/3/2
// var b = ++a + a++ + --a + a-- + a;
// //      3    +  3  + 3  + 3 + 2
// //          6   + 6 + 2
// //      b =     14
// // a = 2
// console.log("a = " , a);
// console.log("b = " , b);


// var num = 8;// 7/6/7/8
// var final = num-- - --num + ++num + num++ - num;
// //           8    -   6   + 7    +   7    - 8
// //           8    -   6         + 14    - 8
// //                 8 + 14 - 6  - 8
// //                 22 - 14
// //              final =     8 
// //                num = 8


// console.log("num" , num);
// console.log("final" , final);


// var a = 5; //6/7/6/5/6/7/6/5/6/5/6/7/6
// var result = a++ + ++a - --a + a-- - a++ + ++a + a + a-- - --a + ++a - a-- + a++ - a + a++ + --a;

// //           5   + 7  -   6 + 6  -  5    + 7    + 7  + 7  - 5  +   6  - 6  + 5   - 6 + 6  + 6
// //            + 7       + 7    + 7  + 7     + 6
// //            14   + 14    + 6
// //           28  + 6
// //         result =  34



// // a = 6
// console.log("a" , a);
// console.log("result" , result);


// var result1 = 10 + 5 * 2;
// //            10 + 10 = 20
// console.log("result1" , result1);


// var result2 = 20 / 4 * 2 + 5;
// //            20 / 4 * 2 + 5
// //            5* 2 + 5
// //            10 + 5
// //            15 Ans
// console.log("result2" , result2);


// var result3 = (10 + 5) * 2;
//            (10 + 5) * 2
//            15 * 2
//            30 Ans
// console.log("result3" , result3);


// var result5 = 15 % 4 + 2 * 3;
// //            3 + 2 * 3
// //            3 + 6
// //            9 Ans
// console.log("result5" , result5);
// // alert(result5)


// var task1 = 10 * 2 + (50 - 10) / 5 + 2 - 1;
// //          10 * 2 + (50 - 10) / 5 + 2 - 1
// //          10 * 2 + 40 / 5 + 2 - 1
// //          10 * 2 + 8 + 2 - 1
// //         20 + 8 + 2 - 1
// //         30 - 1
// //         29 Ans

// console.log("task1" , task1);



// var task2 = 100 - 5 * (10 / 2) + 20 / (2 + 3) * 4 ;
//          //  100 - 5 * 5 + 20 / (2 + 3) * 4            
//          //  100 - 5 * 5 + 20 / 5 * 4            
//          //  100 - 5 * 5 + 4  * 4            
//          //  100 - 25 + 16           
//          // 116 - 25          

// console.log("task2 = " , task2);


// var task3 = 50 - 4 * (3 - 2) / 2 + (10 + 10) / 5 - 2 * 3 + 15 % 4;
// //          50 - 4 * (1) / 2 + (20) / 5 - 2 * 3 + 15 % 4
// //          50 - 4 * 1 / 2 + 20 / 5 - 2 * 3 + 15 % 4
// //          50 - 4 * 0.5 + 20 / 5 - 2 * 3 + 15 % 4
// //          50 - 4 * 0.5 + 4 - 2 * 3 + 15 % 4
// //          50 - 4 * 0.5 + 4 - 2 * 3 + 3
// //          50 - 2 + 4 - 2 * 3 + 3
// //          50 - 2 + 4 - 6 + 3
// //          50 - 2 + 4 - 6 + 3
// //          57 - 8
// //          49


// console.log("task3", task3);


// Javascript Chap 8

// var a = "Java";
// var b = "Script";
// var c = a + b;
// a = "Java"
// b = "Script"
// c = a + b = Java + Script = "JavaScript" Ans

// console.log("c = " , c);


// var myName = "Mustafa";
// alert("Hello" + myName);

// "Hello" + myName , myname = "Mustafa"
// so "Hello" + "Mustafa" = "HelloMustafa" Ans


// var result1 = 10 + 20 + "30";
// console.log(result1);

// var result2 = "10" + 20 + 30;
// console.log(result2);

// var result3 = 5 + 5 + "5" + 5 + 5;
// console.log(result3);


// var a = "Mustafa";
// var b = "Shahzad";
// var c = 16;
// var final = a + " " + b + " " + "is" + " " + c;
// console.log(final);


// var result5 = "The total is: " + (10 + 20);
// console.log(result5);


// var userAge =Number(prompt("Enter your age"))
// var additionalAge = 10
// var futureAge = userAge + additionalAge
// console.log(userAge);
// console.log(typeof userAge);

// alert("After 10 years you will be" ,futureAge, "years old" )




// var userAge = +prompt("Enter your age")
// var additionalAge = 10 ; 
// var futureAge = userAge + additionalAge;
// console.log(futureAge + "years");

// alert("After 10 years you will be " + futureAge + " years old.")


// Task Reminder:
// 1. Pehla number prompt se lo (+)
// 2. Doosra number prompt se lo (+)
// 3. Unhe multiply karo
// 4. Alert mein dikhao: "The multiplication of " + num1 + " and " + num2 + " is " + result

// var num1 = Number(prompt("Enter number1"))
// var num2 = Number(prompt("Enter number2"))
// var multiplication = num1 * num2
// alert("The multiplication of " + num1 + " and " +num2 + " is " + multiplication)

// If Statement

// var age = prompt("Enter your age")

// if (age >= 18) {
//     console.log("Welcome man");

// }else{
//     console.log("nikal jao");

// }


// var password = "mustafa123"
// var userPassword = prompt("Enter your password")

// if(password === userPassword){

//     alert("Correct Password")
// }else{
//     alert("Invalid Password")
// }

// var signalColor = prompt("Signal color kia hai   red , yellow , green")

// if(signalColor === "red"){
//     alert("Must Stop!")
// }else if(signalColor === "yellow") {
// alert("Ready to move")
// }else if(signalColor === "green"){
//     alert("go now")
// }else{
//     alert("Enter only signal color red , blue ,green")
// }



// var eggPrice = +prompt("Enter how many eggs you buy");
// eggPrice = eggPrice * 20 // ke aik anda 20 ka hia user ke andoon ko is se multiply krenge
// var breadSlice = +prompt("How many slice you buy");
// breadSlice = breadSlice * 15 // ke 15 ka aik slice hai
// var biscuits = +prompt("How many biscuits you buy");
// biscuits = biscuits * 10 // 10 ka aik biscuit hai

// var userPaid = parseInt(prompt("Please pay the money"))
// var totalBill = eggPrice + breadSlice + biscuits
// var  memberCheck = prompt("Are you a member? (yes/no)")

// if(memberCheck === "yes") {

//     totalBill = totalBill - ((totalBill / 100)*10) 


//     if (userPaid >= totalBill) {
// alert(userPaid - totalBill+ "is your remaining change")



// if(totalBill > 2000){
//     alert("Thanak's for your shopping you get free drink")
// }else if(totalBill >= 1000 && totalBill <= 2000){
//  alert("Thanak's for your shopping you get free chocolate")
// }else{
//     alert("Thanks for your shopping")
// }
// }else if (userPaid < totalBill) {
// alert("Please give" + (totalBill - userPaid)+ " remaining")
// }

// }else{

// if (userPaid >= totalBill) {
// alert(userPaid - totalBill+ "is your remaining change")



// if(totalBill > 2000){
//     alert("Thanak's for your shopping you get free drink")
// }else if(totalBill >= 1000 && totalBill <= 2000){
//  alert("Thanak's for your shopping you get free chocolate")
// }else{
//     alert("Thanks for your shopping")
// }
// }else if (userPaid < totalBill) {
// alert("Please give" + (totalBill - userPaid)+ " remaining")
// }
// }







// var html = +prompt("Enter html marks")
// var css = +prompt("Enter css marks")
// var js = +prompt("Enter js marks")

// var obatinedMarks = html + css + js
// console.log(obatinedMarks);

// var percent_10 = (obatinedMarks / 100)*10
// console.log(percent_10);



// var ride = prompt("Which ride you want to take").toLowerCase()
// var age = +prompt("Enter your age")
// var studentCard = prompt("Enter you have student card (yes / no)").toLocaleLowerCase()


// if(ride === "coffeecup"){
//     alert("Ride available")

//     if(age <= 5){
//         alert("You are younger for this ride")
//     }else if(age > 5){

//         alert("You're eligible for this ride")


//         if(studentCard === "yes"){

//             alert("Ticket Price 500")
//         }else{
//             alert("Ticket Price 800")

//         }
//     }    


// }else{
//     alert("Ride not available")
// }


// var CNIC = prompt("Can you have a CNIC Card? (yes / no)").toLowerCase()


// // var voucher = prompt("Can you have a voucher   (yes / no)")

// if(CNIC === "yes"){

//     alert("Welcome Sir")

// var hotelType = prompt("Which type of hotel you want?  ( luxury / standard ) " , "luxury").toLowerCase()
// var hotelLivingDuration = +prompt("How many nights you want to live in our hotel")
//     if (hotelType === "standard") {

//         if (hotelLivingDuration < 5) {

//             alert("Hotel Charges = " +(hotelLivingDuration * 5000))
//         }else if(hotelLivingDuration >= 5){

//             alert("You got 10% discount" + "Was" +(  hotelLivingDuration * 5000 )+ "Now" +(hotelLivingDuration * 5000 -      (((hotelLivingDuration  * 5000) / 100) * 10))) 
//         }

//     }else if(hotelType === "luxury"){
//         if(hotelLivingDuration < 5){    
//         alert("Hotel Charges = " + ( hotelLivingDuration * 10000))
//         }else if(hotelLivingDuration >= 5){
//             alert("You got 10% discount" + "Was" + (hotelLivingDuration * 10000) + "Now" + (hotelLivingDuration * 10000 - (((hotelLivingDuration * 10000) / 100)*10)))
//         }

//     }


// }else{
//     console.log("Sorry sir no entry without CNIC card");

// }

// var city = prompt("Enter your city").toLocaleLowerCase()


// if (city === "karachi") {

//     alert("Karachi main admissions hain")

//     var education = prompt("Enter your education     school , college , couniversity").toLocaleLowerCase()

//     if (education ==="school") {

//         var age = +prompt("Enter your age")

//         if (age >= 5 && age <= 15) {
//          alert("Admission Open For School")   
//         }else{
//             alert("Not eligible for school student")
//         }
//     }else if(education === "college"){

//         var percentage = +prompt("Enter your %")

//         if (percentage >= 60) {
//             alert("College wale bache aajao")
//         }else{
//             alert("Aap eligible nhii ho")
//         }
//     }else if(education === "university") {

//         var entryTestScore = +prompt("Enter your Entry Test Score")

//         if (entryTestScore > 70) {
//            alert("University ke bache aajao")  
//         }else{
//             alert("University ke bache jao")
//         }
//     }

// } else {

//     alert("Admissions sirf Karachi ke campuses ke lie hain")
// }


// var mobileBrand = ["Apple" , "Samsung" , "Oppo" , "Infinix" , "Readme"]
// var enterNumber = prompt("Enter number to see the brand of mobile")

// if (enterNumber <= 4) {

//    alert(mobileBrand[enterNumber]);
// }else {
//     alert("Enter only number between 0 - 4")
// }


// var stock = ["shirt", "pant", "jacket"]
// var prices = [800, 1500, 2000]

// var userQ = prompt("What do you want to buy").toLocaleLowerCase()

// if (userQ === stock[0]) {
//     alert(userQ + " Stock main hai")
//     var quantity = +prompt("How many " + userQ + " you wnat")
//     var amount = quantity * prices[0]

//     alert(amount)
//     var cash = prompt("Please pay cash")

//     if (cash >= amount) {
//         alert((cash - amount) + " is your change")
//     } else if (cash < amount) {
// alert("Please pay " +(amount-cash)+" your remaining amount")
//     }

// } else if (userQ === stock[1]) {
//     alert(userQ + " Stock main hai")
//     var quantity = +prompt("How many " + userQ + " you wnat")
//     var amount = quantity * prices[1]
//     alert(amount)

//     var cash = prompt("Please pay cash")

//  if (cash >= amount) {
//         alert((cash - amount) + " is your change")
//     } else if (cash < amount) {
// alert("Please pay " +(amount-cash)+" your remaining amount")
//     }

// } else if (userQ === stock[2]) {
//     alert(userQ + " Stock main hai")
//     var quantity = +prompt("How many " + userQ + " you wnat")
//     var amount = quantity * prices[2]

//     alert(amount)

//     var cash = prompt("Please pay cash")

//      if (cash >= amount) {
//         alert((cash - amount) + " is your change")
//     } else if (cash < amount) {
// alert("Please pay " +(amount-cash)+" your remaining amount")
//     }

// } else {
//     alert("Bhai apko jo item chaiye wo hamare stock main nhi hia sorry")
// }

// var gadgets = ["mobile" , "AC" , "laptop"]

// console.log(gadgets.indexOf("AC"));





// var fruits = ["apple" , "orange" , "mango" , "peach"]

// fruits.push("banana")

// fruits.pop()

// fruits.shift()
// fruits.shift()
// fruits.shift()
// fruits.shift()

// fruits.unshift("apple")
// fruits.push("lemon" , "grapes")

// console.log(fruits);

// var newArr =  fruits.slice(0 , -4)

// console.log(newArr);




// var str = "Mustafa"
// console.log(str.slice(0));
// console.log(fruits);

// fruits.splice(0 , 1 , "banana" , "papaya")

// console.log(fruits);


// for (var i = 2 ; i <= 10 ; i++) {
// console.log(i);

// }


// console.log("2 x 1 = 2");
// console.log("2 x 2 = 4");
// console.log("2 x 3 = 6");
// console.log("2 x 4 = 8");
// console.log("2 x 5 = 10");
// console.log("2 x 6 = 12");
// console.log("2 x 7 = 14");
// console.log("2 x 8 = 16");
// console.log("2 x 9 = 18");
// console.log("2 x 10 = 20");



// for(var i = 1 ; i <= 10 ; i++){
//     console.log("2 x " , i , "=" , i * 2);

// }



// var startingNumber = +prompt("Enter Starting Number")
// var endingNumber = +prompt("Enter ending number")
// var tableNumber = +prompt("Enter enter table number")


// for (var i = startingNumber ; i <= endingNumber ; i++) {

//     document.writeln(tableNumber, " x " , i , " = " , i * tableNumber , "<br />" )

// }


// var student = ["Ahmed", "Ali", "Hassan", "Hussain", "Usman", "Umar", "Bilal", "Hamza", "Abdullah", "Saad", "Ammar", "Zaid", "Talha", "Ayaan", "Fahad", "Ibrahim", "Yasir", "Salman", "Shahzaib", "Mustafa"];

// for (var i = 0 ; i < student.length ; i++) {
// document.writeln(i,"(indexnumber)" , student[i] , i+1 , "<br />")
// }


// var startingNumber = +prompt("Enter start number")
// var endingNumber = +prompt("Enter ending number")
// var tableNumber = +prompt("Enter Table number")


// for (var i = startingNumber  ; i <= endingNumber ; i++ ) {

//     document.writeln(tableNumber , "x" , i , "=" , i*tableNumber)
// }



// var startingNumber = +prompt("Enter starting number")
// var endingNumber = +prompt("Enter ending number")
// var even_odd = prompt("Which type of number you want  (even / odd)").toLocaleLowerCase()

// for(i = startingNumber ;i <= endingNumber ; i++) {
// if (even_odd === "even") {
    
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }else if(even_odd === "odd") {

//     if(i % 2 !== 0){
// console.log(i);

//     }
// }
// }


// for(var i = 0 ; i <= 1000 ; i++) {

//     var numbers = []
//     if(i === 1000) {
// break
//     }
//     numbers[i] = i + 1
//     console.log(numbers[i])
// }



// var users  = ["Mustafa" , "Shahzad" , "Jaffar" ,"Aman" , "Ali"]
// var isMatch = false
// var userNameCheck = prompt("Enter your name")
// userNameCheck = userNameCheck.slice(0 , 1).toLocaleUpperCase() + userNameCheck.slice(1).toLowerCase()

// for (var i = 0; i < users.length; i++) {
    
//     if(users[i] === userNameCheck){
        
//         alert("Welcome " + userNameCheck)
//         isMatch = true
//     }

// }

// console.log(users);


// if(isMatch === false){

// alert("Username not exist")

// }

// var cities = ["karachi" , "multan" , "islamabad"]
// var check = cities.indexOf("lahore")

// if(check !== -1){
//     alert("Welcome")
// }else{
//     alert("Not welcome")
// }





// var users = ["Mustafa" , "Shahzad" , "Ali" , "Raza"]
// var check = users.indexOf(prompt("Enter your name"))


// if(check !== -1){
//     alert("Welcome")
// }else{
//     alert("Not Welcome")
// }


// for(var i = 100 ;i >= -100 ; i--){
// console.log(i);

// }
// var startingNumber = +prompt("Enter Starting Number")
// var endingNumber = +prompt("Enter Ending Number")
// var forward_backward = prompt("Enter  (forward / backward)").toLowerCase()
// var even_odd_normal = prompt("Which counting you want (even / odd / normal)").toLocaleLowerCase()

// if (forward_backward === "forward") {
    

// for(var i = startingNumber ; i <= endingNumber ; i++){
// if(even_odd_normal === "even"){

//     if(i % 2 === 0){
//         document.writeln("Forward Counting (Even Number)" , i, "<br />")
//     }
// }else if(even_odd_normal === "odd"){
//     if(i % 2 !== 0){
//                 document.writeln("Forward Counting (Odd Number)" , i, "<br />")

//     }
// }else if(even_odd_normal === "normal"){
//                 document.writeln("Forward Counting" , i, "<br />")


// }
// }

// } else if(forward_backward === "backward") {
    
// for(var i = startingNumber ; i >= endingNumber ; i--){
    

//     if(even_odd_normal === "even"){

//     if(i % 2 === 0){
//         document.writeln("Backward Counting (Even Number)" , i, "<br />")
//     }
// }else if(even_odd_normal === "odd"){
//     if(i % 2 !== 0){
//                 document.writeln("Backward Counting (Odd Number)" , i, "<br />")

//     }
// }else if(even_odd_normal === "normal"){
//                 document.writeln("Backward Counting" , i , "<br />")


// }

// }

// }


// var text = "Mustafa".toLowerCase()
// console.log(text);
// text = "Mustafa".toUpperCase()
// console.log(text);
// text = text.slice(0 , 1).toUpperCase() + text.slice(1).toLowerCase()
// console.log(text);



// var cities = ["Karachi" , "Lahore" , "Multan"]

// for (var i = 0 ; i < cities.length ;i++) {
// // cities = cities[i].toLowerCase()
// console.log(cities[i].toLowerCase());


// }

// var text = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically type-checked and garbage-collected."

// console.log(text);


// for(var i = 0 ; i < text.length ; i++){

//     if(text.slice(i , i + 12) === "type-checked"){
//       console.log(i);
      
//       text = text.slice(0 , i) + "type check krta hai" + text.slice(i + 12)
//     }
// }

//  console.log(text);


// var text = "Python is a high-level,  type-checked general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically type-checked and garbage-collected."

// var indexNumber = text.indexOf("type-checked")
// console.log(indexNumber);


// text = text.replaceAll("type-checked", "type check krta hai")
// console.log(text);


// var a = 80.0001
// var roundingNumber = Math.round(a)
// console.log(roundingNumber);
//  a = Math.floor(a)
//  console.log(a);
 
// a = Math.ceil(a)
// console.log(a);



// var a = +"80"
// console.log(typeof a);

// a = parseInt("80")
// console.log(typeof a);


// a = Number("80")
// console.log(typeof a);



// var a = (80).toLocaleString() 
// console.log(typeof a);

// var a = String(80)
// console.log(typeof a);

// var a = 80
// a = a.toString()
// console.log(typeof a);


// var a = 80
// a = a.toFixed(3)
// console.log(a , typeof a);

// var a = "10.5"

// console.log(Number(a));
// console.log(+a);
// console.log(parseInt(a));
 
// var randomNumber = Math.floor(Math.random() * 10 + 1)

// var randomNumberRange = 15 se 20
//var randomNumberRange = Math.floor(Math.random() * (20 - 5 + 1)+ 5)
//console.log(randomNumberRange);


// var randomNumber = Math.floor(Math.random() * 6 + 1)
// var userNumber = +prompt("Enter random number between 1 - 6")

// console.log(randomNumber);


// if(randomNumber === userNumber){
//     console.log("Win");
    
// }else if (randomNumber > 6 && randomNumber < 1){
//     alert("Enter only number 1 -6")
// }

// else{
//     console.log("Loss");
    
// }



// var text = "My name is Mustafa Shahzad"

// var textArr = text.split(" ")
// console.log(textArr);


// var fruits = ["apple" , "banana" , "orange"]
// var fruitsArr = fruits.join(",")
// console.log(fruitsArr);



var text = "My name is Mustafa Shahzad"
var textArr = text.split(" ")
console.log(textArr);
var arr = []

for(var i =0 ; i < text.length ; i++){

    var textArr[i]
}
