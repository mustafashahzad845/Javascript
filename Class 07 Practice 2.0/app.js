// var fruits = []                                       
                                                                                    
// fruits[0] = "Apple"                                                              
// fruits[1] = "Banana"
// fruits[2] = "Peach"
// fruits[3] = "Pine apple"
// fruits[4] = "Cherry"

// console.log(fruits);

// // fruits.pop()
// // fruits.pop()
// // fruits.pop()
// // fruits.pop()
// // fruits.push("Orange" , "Papaya")

// // fruits.shift()
// // fruits.shift()

// // fruits.unshift("My fruits" , "start")

// var newArr = fruits.slice(-4 , -1)
// console.log(newArr);

// var email = prompt("Enter Your Email address").trim()
// var password = prompt("Enter Your Password").trim()
// var mobileNumber = +prompt("Enter Your Mobile Number").trim()
// var securityQuestion = prompt("Which is Your favorite place?").trim()
// var otp = +prompt("Enter Your One Time Password").trim()

// if (email === "mustafa@gmail.com") {

//     console.log("Email Verified");

//     if (password === "mustafa123") {
//         console.log("Password Verified");


//         if (mobileNumber === 923213880304) {
//             console.log("Mobile Number Verified");


//             if (securityQuestion === "Madina") {
//                 console.log("Security Answer Verified");

//                 if (otp === 123456) {
//                     console.log("Access Granted");

//                 } else {
//                     console.log("Invalid OTP");

//                 }

//             } else {
//                 console.log("Invalid Answer");

//             }

//         } else {
//             console.log("Invalid Mobile Number");

//         }


//     } else {
//         console.log("Invalid Password");
//     }

// } else {
//     console.log("Invalid Email address");

// }
// var physics = +prompt("Enter Physics Marks")
// var chemistry = +prompt("Enter Chemistry Marks")
// var urdu = +prompt("Enter Urdu Marks")
// var islamiat = +prompt("Enter Islamiat Marks")
// var maths = +prompt("Enter Maths Marks")
// var obtainedMarks = physics + chemistry + urdu + islamiat + maths
// var totalMarks = 500
// var percentage = (obtainedMarks / totalMarks) * 100

// console.log("Subject Marks");
// console.log("Physics", physics);
// console.log("Chemistry", chemistry);
// console.log("Urdu", urdu);
// console.log("Islamiat", islamiat);
// console.log("Maths", maths);
// console.log("Obtained Marks", obtainedMarks);
// console.log("Total Marks", totalMarks);
// console.log("Percentage", percentage+"%");

// if (percentage >= 80 && percentage <= 100) {
//     console.log("Grade: A+");

// } else if (percentage < 80 && percentage >= 70){
//     console.log("Grade: A");

// }else if(percentage < 70 && percentage >= 60){
//     console.log("Garde: B");

// }else if(percentage<60 && percentage>=50){
//     console.log("Grade: C");

// }else if(percentage < 50 && percentage>=40){
//     console.log("Grade D");

// }else if(percentage < 40){
//     console.log("Grade F");

// }else{
//     console.log("Invalid Percentage");

// }


// var gender = prompt("Enter your gender").trim()
// var age = +prompt("Enter your age").trim()

// if((gender === "male" && age >= 18 && age <= 60) || (gender === "female" && age >= 60)){
//     console.log("allow");

// }else{
//     console.log("not allow");

// }


// var a = 10 //11/12/11/10/11/11/12/11/10
// var res = a++ + ++a - --a + --a - ++a + a - ++a + a-- - --a
//         // 10 +  12  - 11 + 10 - 11  + 11 - 12 + 12 - 10
//         // 10 +  12  - 11 
//         //    22 - 11
//         //      11   Answer
//         console.log(res);


// var num1 = +prompt("Enter num1")
// var num2 = +prompt("Enter num2")
// var opt = prompt("Enter your operator Note: Operator must be + , - , * , /").trim()

// if (opt === "+") {
//     console.log("Add", num1 + num2);
// } else if (opt === "-") {
//     console.log("Sub",num1 - num2);

// } else if (opt === "*") {
//     console.log("Mul",num1 * num2);
// } else if (opt === "/") {
//     console.log("Div",num1 / num2);

// } else {
//     console.log("Invalid Operator");
// }


// console.log(8 - 9 + 3 * 6 / 3);
// //          8 - 9 + 3 *   2                
// //          8 - 9 +   6                
// //           8 -  15              
// //              -7              

// console.log(9 - 8 + 8 * (3*9/ 6));
// //         (9 - 8 + 8 * (3*1.5));
// //         (9 - 8 + 8 * (4.5));
// //         (9 - 8 + 8 * 4.5);
// //         (9 - 8 + 36);
// //         (45 - 8);
// //         37   Answer



var countries = ["Pakistan" , "India" , "Bangladesh" , "Srilanka" , "Africa"]
console.log(countries);
countries.indexOf()
