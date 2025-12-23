// var fruits = ["apple" , "mango", "orange", "banana","pineapple","peach","blueberry","cherry","appricot"]
// console.log(fruits);

// // var fruits = ["apple", "mango", "banana", "orange", "grapes"]
// // console.log(fruits);
// console.log(fruits[2]);

// var email = prompt("Enter your email")
// var password = prompt("Enter your Password")
// var otp = +prompt("Enter your One Time Password")

// if(email === "mustafa@gmail.com"){
//     console.log("Email Verified");

// if(password === "mustafa123"){
//     console.log("Password Vaerified");

// if(otp === 123456 ){
// console.log("Access Granted");

// }else{
// console.log("Invalid OTP");

// }

// }else{
//     console.log("invalid passowrd");

// }

// }else{
//     console.log("Invalid Email");
// }
// var age = +prompt("Enter your age")
// var gender = prompt("Enter your gender")
// var grade = prompt("Enter your grade")



//Condition
// For  Male:
//   Age 18 se 60 ke darmiyan ho aur grage A+ ho aur gender male ho tabhi male allow warna not allow

// For Female
//  females ke lie age matter nhi krti aur agar grade A+ ya A dono ho aur gender female ho tou chale ga

// Condition Short for male
// Age | 18 - 60   
// gender | male
//  grade | A+  

//Condition Short for male
// Age | Kuch bhi ho
// gender | female 
// grade | A+ ya A dono chale ga


// if(age >= 18 && age <=60  && gender === "male"&& grade === "A+" || (gender=== "female" && (grade === "A" || grade === "A+" ))){
//     console.log("allow");
// }else{
//     console.log("not allow");
// }











//Program#2
// Condition
// For Student (Morning Shift):
//   Age 16 se 25 ke darmiyan ho
//   Attendance 80% ya us se zyada ho
//   Grade A ho
//   Shift morning ho tabhi allow warna not allow

// For Student (Evening Shift):
//   Age matter nahi karti
//   Attendance 60% ya us se zyada ho
//   Grade A ya B dono chale ga
//   Shift evening ho

// Condition Short for Morning
// Age | 16 - 25
// Attendance | >= 80%
// Grade | A
// Shift | morning

// Condition Short for Evening
// Age | Kuch bhi ho
// Attendance | >= 60%
// Grade | A ya B
// Shift | evening



var studentShift = prompt("Enter your study shift")
var age = +prompt("Enter  your Age")
var attendance = +prompt("Enter your Attendance in %")
var grade = prompt("Enter your grade")

if ((studentShift === "Morning" && age >=16 && age<=25 && attendance >= 80  && grade === "A") ||        (studentShift === "Evening" && attendance >= 60  && (grade === "A"  || grade === "B"))) {
    console.log("allow");
} else {
    console.log("not allow");
}