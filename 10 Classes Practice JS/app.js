// var num1 = +prompt("Enter num1")
// var num2 = +prompt("Enter num2")
// var opt = prompt("Enter your opt  + , - , * , /")

// if(opt === "+"){
//     document.writeln("Add: " , num1 , opt, num2, "=" ,  num1 + num2)
// }else if(opt === "-"){
//     document.writeln("Sub: " ,num1 , opt, num2, "=" , num1 - num2)
// }else if(opt === "*"){
//     document.writeln("Mul: " , num1 , opt, num2, "=" ,num1 * num2)
// }else if(opt === "/"){
//     document.writeln("Div: " , num1 , opt, num2, "=" ,num1 / num2)
// }else{
//     document.writeln("Invalid Operator")
// }


// var subjects = [+prompt("Enter Physics marks") , +prompt("Enter Chemistry marks") , +prompt("Enter Computer marks") , +prompt("Enter English marks") , +prompt("Enter Maths marks")]
// var totalMarks =  500 ;
// var obtainedMarks = subjects[0] + subjects[1] + subjects[2] + subjects[3] + subjects[4]
// var percentage = (obtainedMarks / totalMarks) * 100

// document.writeln("Subjects" , "<br />")
// document.writeln ("Physics: " ,subjects[0] , "<br />")
// document.writeln("Chemistry: " , subjects[1], "<br />")
// document.writeln("Computer: " , subjects[2], "<br />")
// document.writeln("English: " , subjects[3], "<br />")
// document.writeln("Maths: " , subjects[4], "<br />")
// document.writeln("Obtained Marks: " , obtainedMarks , "<br />")
// document.writeln("Total Marks: " ,totalMarks , "<br />")
// document.writeln("Percentage: " + percentage + "%" + "<br />")

// if(percentage >= 80 && percentage <= 100){
//     document.writeln("Grade: A+")
// }else if(percentage < 80 && percentage >= 70){
//         document.writeln("Grade: A")

// }else if(percentage < 70 && percentage >=60){
//         document.writeln("Grade: B")

// }else if(percentage < 60 && percentage >=50){
//         document.writeln("Grade: C")

// }else if(percentage < 50 && percentage >= 40){
//         document.writeln("Grade: D")

// }else if(percentage < 40){
//     document.writeln("Grade: F")
// }

// else{
//         document.writeln("Invalid Percentage")

// }


//  var a = 10 //11/10/11/10/11/12/11
// var res = a++ - a-- + ++a - --a +a - a++ - ++a + --a
// //        10   - 11 + 11  - 10 + 10- 10  - 12  + 11
// //           -1 Ans
// console.log(res);

// console.log(10.5);


// var a = 5; // 6 /7/6/5
// var result = a++ + ++a - a-- + a + --a  ;
// //            5  +  7 - 7  + 6 + 5  + 6
// //            5  + 6 + 5 +
// //        16 Answer

// console.log(result);


// var a = 8;
// var result = --a + a++ - ++a + a-- - a;
// //           7  + 8   - 10  + 10 - 9
// //           7  + 8   - 9
// //           15   - 9
// //          6 Answer
// console.log(result);


// var a = 7;
// var result = a++ - ++a + a-- + --a + ++a - a;
// //            7   - 9  + 9   + 7  + 8 -  8
// //            7   + 7  
// //           14 Ans
// console.log(result);


// var a = 9;
// var result = a++ - ++a + a-- + --a + a++ - a++ + a-- - a;
// //            9   -  11 + 11  + 9  + 9  -  10  + 11 - 10
// //            9     + 9  + 9  -  10  + 11 - 10
// //           27  -  10  + 11 - 10
// //          38  -  10  - 10
// //          38 - 20
// //         18 Answer
// console.log(result);



// var result = 10 + 6 * 2 - 8 / 4;
// //           10 + 6 * 2 - 2
// //           10 + 12 - 2
// //           22 - 2
// //           20 Ans



// var result = (10 + 6) * 2 - 8 / 4;
// //           (10 + 6) * 2 - 8 / 4
// //           16 * 2 - 8 / 4
// //           16 * 2 - 2
// //          32 - 2
// //          30 Answer

// var result = 20 - 4 * (3 + 2) + 16 / 4;
//           20 - 4 * (5) + 16 / 4
//           20 - 4 * 5 + 16 / 4
//            20 - 4 * 5 + 4
//            20 - 20  + 4
//             24 - 20  
//             4 Answer  


// var result = 100 / (5 * 2) + 18 - 3 * 4;
//           100 / (5 * 2) + 18 - 3 * 4
//           100 / 10 + 18 - 3 * 4
//           10 + 18 - 3 * 4
//           10 + 18 - 12
//           28 - 12
//           16 Ans


// var result = 50 - (10 + 5) * 2 + 40 / (4 + 6);
// //           50 - 15 * 2 + 40 / (4 + 6);
// //           50 - 15 * 2 + 40 / 10;
// //           50 - 15 * 2 + 4;
// //           50 - 30 + 4;
// //               54  - 30
// //               24 Ans

// var result = (30 / 5 + 2) * (8 - 3) - 6;
// //           (30 / 5 + 2) * (8 - 3) - 6
// //           (6 + 2) * (8 - 3) - 6
// //           8 * (8 - 3) - 6
// //           8 * 5 - 6
// //           40 - 6
// //           34 Ans

// var result = 200 / (10 * (2 + 3)) + 7 * 2;
// //           200 / (10 * (5)) + 7 * 2;
// //           200 / (10 * 5) + 7 * 2;
// //           200 / 50 + 7 * 2;
// //           4 + 7 * 2;
// //           8 + 7
// //           15

// console.log(result);


// var result = 100 - (20 + 30 / (3 * 2)) * 2 + 8;
// //           100 - (20 + 30 / (3 * 2)) * 2 + 8;
// //           100 - (20 + 30 / 6) * 2 + 8;
// //           100 - (20 + 5) * 2 + 8;
// //           100 - 25 * 2 + 8;
// //           100 - 50 + 8;
// //           108 - 50;
// //           58 Ans
// console.log(result);


// var a ;
// a = 1
// console.log(a);




// Variables legal and illegal
// 1) Best pratcie for making variable in camel case
// 2) Variable name cannot be started with number
// 3) variable name only allow two speecial characters _ or $
// 4)variable name can't containe any space


//  var resultOfComputation = (2 * 4) * (4 + 2);
//  //                         8   *   6
//  //                        48
//  console.log(resultOfComputation);

// var age =  +prompt("Enter your age")
// if(age === 18){
//     console.log("allow");

// }else{
//     console.log("not allow");

// }

// var gender = prompt("Enter your gender").toLowerCase()
// var studentName = prompt("Enter your name")

// var age = +prompt("Enter your age")
// if(gender === "male" && age >= 16){
//     console.log(studentName , " ","Allow");

// }else if(gender === "female" || age >= 16){
//     console.log(studentName , " " , "Allow");

// }else{
//     console.log("Not allow");

// }


// var email = prompt("enter email address")
// var password = prompt("Enter password")
// var mobileNumber = +prompt("Enter mobile number")
// var SecurityQuestion = prompt("Which is your favorite place?")
// var otp = +prompt("Enter your one time password")

// if(email === "mustafa@gmail.com"){
//     console.log("Email Verified");


//     if(password === "mustafa123"){
//         console.log("Password Verified");

// if(mobileNumber === 923213880304){
//     console.log("Mobile Number Verified");


//     if(SecurityQuestion === "Madina"){
// console.log("Security Answer Verified");


// if(otp === 123456){
//     alert("Login Successfully")
//     console.log("Access Granted");

// }else{
//     console.log("Invalid Otp");

// }
//     }else{
// console.log("Invalid Security Answer");

//     }
// }else{
//     console.log("Invalid Mobile Number");

// }

//     }else{
//         console.log("Invalid Password");

//     }
// }else{
//     console.log("Invalid Email or Password");

// }

// var studentShift = prompt("Enter your study shift")
// var age = +prompt("Enter your age")
// var grade = prompt("Enter Your Grade")
// var attendance = +prompt("Enter your attendance")
// var gender = prompt("Enter your gender")


// // agar student shift morning ho tou age 16 se 25 ke darmiyan honi chaiye and grade A  hi hona chaiye and attendance 80 ya us se ziada honi chaiye gender male hona chaiye or agar student shift evening ho tou grade A or B dono chalega attendance 60 ya us se ziada honi chaiye and gender male or female dono chalega  is me age limt kuchbhi nahi hai

// if ((studentShift === "Morning" && age >= 16 && age <= 25 && grade === "A" && attendance >= 80 && gender === "Male") || (studentShift === "Evening" && (grade === "A" || grade === "B")&& (gender === "Male" || gender === "Female") )) {

//     console.log("Allow");

// } else {
//     console.log("not allow");

// }

var fruits = ["apple", "orange", "mango", "peach", "banana", 2, 3, 23, 3, 4, 4, 3]
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// fruits.pop()
// fruits.pop()

// fruits.push("cherry" , "appricot")

// fruits.shift()
// fruits.shift()
// fruits.shift()
// fruits.shift()

// fruits.unshift("apple" , "banana")
// fruits.unshift("orange")

// var newArr = fruits.slice(2 , 6)
// console.log(newArr);

// fruits.splice(4 , 0, "my-banana") 
// console.log(fruits);
// console.log(fruits)

// var newArr = fruits.toSpliced(2, 3 , "melon" , "watermelon" , "papaya")
// console.log(newArr);

// fruits.reverse()

// var newArr = fruits.toReversed()
// console.log(fruits);
// console.log(newArr);


// console.log(fruits);

// for(var i = 0 ; i <= 10 ; i++){
//     console.log(i);

// }


// document.writeln("2 x 1 = 2" , "<br />")
// document.writeln("2 x 2 = 4" , "<br />")
// document.writeln("2 x 3 = 6" , "<br />")
// document.writeln("2 x 4 = 8" , "<br />")
// document.writeln("2 x 5 = 10" , "<br />")
// document.writeln("2 x 6 = 12" , "<br />")
// document.writeln("2 x 7 = 14" , "<br />")
// document.writeln("2 x 8 = 16" , "<br />")
// document.writeln("2 x 9 = 18" , "<br />")
// document.writeln("2 x 10 = 20" , "<br />")

// for(var i = 1 ; i <= 12 ; i++){
//     console.log("5 x " , i , "= " , i*5 );

// }

// var startingNumber = +prompt("Enter Starting Number")
// var endingNumber = +prompt("Enter Ending Number")
// var tableNumber = +prompt("Enter table number")

// for (var i = startingNumber; i <= endingNumber; i++) {
//     document.writeln(tableNumber, "x", i , "=" , i*tableNumber , "<br />")
// }



// for(var i = 0 ; i <= 100 ; i++) {
// if(i % 2 !== 0){
//     document.writeln(i , "<br />");

// }
// }



// for (var i = 0 ; i <= 10 ; i++){
//             console.log(i);

//     if(i === 5){

//         break
//     }


// }

// for (var i = 1 ; i <= 10 ; i++){
//     if(i === 5 || i=== 8){
//         continue
//     }
//         console.log(i)


// }


// for (var i = 100 ; i >= -100 ; i--){
//     console.log(i);

// }

// var users = ["Ahmed", "Fatima", "Hassan", "Ayesha", "Omar", "Zainab", "Ali", "Maryam", "Abdullah", "Khadija", "Yusuf", "Sara", "Ibrahim", "Hafsa", "Usman", "Amina", "Bilal", "Sumaiya", "Suleiman", "Rashid"];
// console.log(users);

// for(var i = 0 ; i < users.length ; i++){
//     document.writeln("Student " , i ," ", users[i] , "<br />");

// }

// var startingNumber = +prompt("Enter Starting number")
// var endingNumber = +prompt("Enter Ending number")
// var backward_forward = prompt("Which type of counting you want?   backward or forward").toLowerCase()
// var even_odd_normal = prompt("Which type of numbers you want?  even , odd , normal").toLowerCase()

// if (backward_forward === "forward") {

//     for (var i = startingNumber; i <= endingNumber; i++) {
//         if (even_odd_normal === "even") {
//             if (i % 2 === 0) {
//                 document.writeln("Forward Counting(Even Number)", i , "<br />")
//             }
//         } else if (even_odd_normal === "odd") {
//             if (i % 2 !== 0) {
//                 document.writeln("Forward Counting(Odd Number)", i , "<br />")

//             }
//         } else if (even_odd_normal === "normal") {
//             document.writeln("Forward Counting", i , "<br />")
//         }

//     }

// } else if (backward_forward === "backward") {

//     for (var i = startingNumber; i >= endingNumber; i--) {

//         if (even_odd_normal === "even") {
//             if (i % 2 === 0) {

//                 document.writeln("Backward Counting(Even Number)", i , "<br />")
//             }
//         } else if (even_odd_normal === "odd") {
//             if (i % 2 !== 0) {
//                 document.writeln("Backward Counting(Odd Number)", i , "<br />")

//             }
//         }else if(even_odd_normal === "normal"){
//            document.writeln("Backward Counting" , i , "<br />")
//         }
//     }
// }


// var numbers = []

// for (var i = 0 ; i < 1000 ; i++){

//     numbers[i] = i+1
//     // console.log(numbers);

// }
// // console.log(numbers[453]);


// console.log(numbers);


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var found = false

// for(var i = 0 ; i < numbers.length ; i++){

//     if(numbers[i] === 5){
//         alert("Value mil gayi")
//         found = true
//         console.log(found);

//            break
        
//     }
// }

// if(found === false){
//     alert("Value nahi mili")
//     found = false
//     console.log(found);
    
// }


var startingReading = +prompt("Enter your starting reading")
var endingReading = +prompt("Enter your ending reading")
var mode = prompt("Enter reading mode   high , normal , low").toLowerCase()

for (var i = startingReading ; i <= endingReading ; i++){

    if(mode === "normal"){
        document.writeln("Normal Reading" , i , "<br/>")
    }else if(mode === "high"){

        if(i % 2 === 0 && i > 10){
                   document.writeln("High Reading" , i , "<br/>")

        }
    }else if(mode === "low"){
        if(i % 2 !== 0 && i < 10){
        document.writeln("Low Reading" , i , "<br/>")
        }
    }
}


