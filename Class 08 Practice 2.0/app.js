/// for(var i = 1 ; i<= 10 ; i++){
//     console.log(i);

// }

// for(var i = 2 ; i<= 100 ; i = i + 2){
//     console.log(i);

// }

// document.writeln("2 x 1 = 2" , "<br/>")
// document.writeln("2 x 2 = 4" , "<br/>")
// document.writeln("2 x 3 = 6" , "<br/>")
// document.writeln("2 x 4 = 8" , "<br/>")
// document.writeln("2 x 5 = 10" , "<br/>")
// document.writeln("2 x 6 = 12" , "<br/>")
// document.writeln("2 x 7 = 14" , "<br/>")
// document.writeln("2 x 8 = 16" , "<br/>")
// document.writeln("2 x 9 = 18" , "<br/>")
// document.writeln("2 x 10 = 20" , "<br/>")
// document.writeln("2 x 11 = 22" , "<br/>")
// document.writeln("2 x 12 = 24" , "<br/>")


// for(var i = 1 ; i <= 15 ; ++i){
//     console.log("25 x" , i , "=" , i*25 );

// } 



// var tableNumber = +prompt("Enter table number")
// var tableStartingNumber = +prompt("Enter table Starting Number")
// var tableEndingNumber = +prompt("Enter table Ending Number")

// for(var i = tableStartingNumber ; i <= tableEndingNumber ; i++){
//     console.log(tableNumber + " x " + i + " = " + i*tableNumber);

// } 

// var physics = +prompt("Enter Physics Marks")
// var chemistry = +prompt("Enter Chemistry Marks")
// var sindhi = +prompt("Enter Sindhi Marks")
// var p_ST = +prompt("Enter P.ST Marks")
// var english = +prompt("Enter Engllish Marks")
// var maths = +prompt("Enter Maths Marks")
// var computer = +prompt("Enter Computer Marks")

// var obtainedMarks = physics + chemistry + sindhi + p_ST + english + maths + computer
// var totalMarks = 700
// var percentage = (obtainedMarks / totalMarks) * 100









// document.writeln("<style>")
// document.writeln("ul{list-style-type : none}; .subject-marks{ margin: 0 0 16px 0 }")
// document.writeln("h4{ margin : 0 0 10px 0  ; font-size : 18px}")

// document.writeln("body{ background: #0000 }")
// document.writeln("</style>")



// document.writeln("<ul>")
// document.writeln("<li class=subject-marks>", "<h4>", "Subject Marks", " </h4>", "</li>")
// document.writeln("<li>", "Physics:", physics, "</li>")
// document.writeln("<li>", "Chemistry:", chemistry, "</li>")
// document.writeln("<li>", "Sindhi:", sindhi, "</li>")
// document.writeln("<li>", "P.ST:", p_ST, "</li>")
// document.writeln("<li>", "English:", english, "</li>")
// document.writeln("<li>", "Maths:", maths, "</li>")
// document.writeln("<li>", "Computer:", computer, "</li>")
// document.writeln("</ul>")

// document.writeln("<ul>")
// document.writeln("<li>", "Obatined Marks: ", obtainedMarks, "</li>")
// document.writeln("<li>", "Total Marks: ", totalMarks, "</li>")
// document.writeln("<li>", "Percentage: ", percentage, "%", "</li>")


// if (percentage >= 80 && percentage <= 100) {
//     document.writeln("<li>", "Grade: A+", "</li>")
// } else if (percentage < 80 && percentage >= 70) {
//     document.writeln("<li>", "Grade: A", "</li>")

// } else if (percentage < 70 && percentage >= 60) {
//     document.writeln("<li>", "Grade: B", "</li>")

// } else if (percentage < 60 && percentage >= 50) {
//     document.writeln("<li>", "Grade: C", "</li>")

// } else if (percentage < 50 && percentage >= 40) {
//     document.writeln("<li>", "Grade: D", "</li>")

// } else if (percentage < 40) {
//     document.writeln("<li>", "Grade: F", "</li>")

// } else {
//     document.writeln("<li>", "Invalid Percentage", "</li>")

// }




// var email = prompt("Enter your Email Address")
// var password = prompt("Enter your ")

// if(email === "mustafa@gmail.com" && password === "mustafa123"){
// console.log("Login..");

// }else{
//     console.log();

// }







// var users = ["Faheem", "Nasir", "Hammad", "Hamza", "Abdullah", "Ali", "Rizwan", "Ahmed", "Bilal", "Usman", "Ayaan", "Saad", "Zain", "Huzaifa", "Talha", "Danish", "Areeb", "Sameer", "Fahad", "Ibrahim"]



// for (var i = 0 ; i < users.length ; i++) {
// document.writeln("Student " , i , " ", users[i] , "<br />" )
// }


// var studentShift = prompt("Enter your Student Shift").trim()
// var age = +prompt("Enter your age")
// var gender = prompt("Enter your gender").trim()
// var attendance = +prompt("Enter your attendance")
// var grade = prompt("Enter your grade").trim()

// if((studentShift === "Morning" && age >= 16 && age <= 25 && gender === "Male" && attendance >= 80 && grade === "A") || (studentShift === "Evening" && (gender === "Female" || gender === "Male") && attendance >= 60 && (grade === "A" || grade === "B") )){
// console.log("allow");

// }else{
//     console.log("not allow");
    
// }


// var email = prompt("Enter Your Email")
// var password = prompt("Enter Your Password")
// var mobileNumber = +prompt("Enter Your Mobile Number")
// var CNIC = +prompt("Enter Your CNIC Number")
// var otp = +prompt("Enter Your One Time Password")

// if(email === "mustafa@gmail.com"){
//  console.log("Email Verified");
    
// if(password === "mustafa123"){
//    console.log("Password Verified");
    
// if(mobileNumber === 923213880304){
//     console.log("Mobile Number Verified");
    
// if(CNIC === 4220168089278){
//     console.log("CNIC Number Verified");
    
// if(otp === 123456){
//     console.log("Login Successfully");
    
// }else{
//     console.log("Invalid OTP");
    
// }

// }else{
//     console.log("Invalid CNIC Number");
    
// }


// }else{
//     console.log("Invalid Mobile Number");
    
// }

// }else{
//     console.log("Invalid Password");
    
// }

// }else{
//     console.log("Invalid Email");
    
// }



var users = ["Faheem", "Nasir", "Hammad", "Hamza", "Abdullah", "Ali", "Rizwan", "Ahmed", "Bilal", "Usman", "Ayaan", "Saad", "Zain", "Huzaifa", "Talha", "Danish", "Areeb", "Sameer", "Fahad", "Ibrahim"]

//=== Pop ===
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// users.pop()


// === Push ===

// users.push("Mustafa" , "Jaffar")

// === Shift ===
// users.shift()
// users.shift()
// users.shift()
// users.shift()

// === Unshift ===
// users.unshift("Mustafa" , "Shahzad")
// users.unshift()

// === Slice ===
// var newarr = users.slice(14 , -1)
// console.log(users);
// console.log(newarr);



// === Splice ===

// users.splice(1 ,3 , "Mustafa")
// users.splice(15 , 0 , "Mustafa")
// console.log(users);
