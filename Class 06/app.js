// var loginEmail =  "mustafa@gmail.com"
// var loginPassword = "mustafa123"
// var loginEmail = prompt("Enter your login email")
// var loginPassword = prompt("Enter your login password")
// if(loginEmail === "mustafa@gmail.com" || loginPassword === "mustafa123"){
//     console.log("Login..");
// }else{
//     console.log("Your email address and password are incorrect");

// }
// if(loginEmail === "mustafa@gmail.com"){
//     console.log("Your email is correct");

//     if(loginPassword === "mustafa123"){
//         console.log("Login..");
//     }else{
//         console.log("Your password is incorrect");

//     }
// }else{
//     console.log("Your email is not found");

// }

// var age = prompt("Enter your age")
// var gender = prompt("Enter your gender")

// if(age >=18 && age<=60 && gender === "male"){
//     console.log("allow");
// }else{
//     console.log("not allow");

// }
// if(age >=18 && age<=60 && gender === "male"){
//     console.log("allow");
// }else if(gender === "female" && age >= 50 && age <=60){
//     console.log("allow");

// }else{
//     console.log("not allow");

// }


// var fruit1 = "apple"
// var fruit2 = "mango"
// var fruit3 = "banana"
// var fruit4 = "orange"
// var fruit5 = "grapes"


// var fruits = ["apple", "mango", "banana", "orange", "grapes"]
// console.log(fruits);

// // console.log("My favorite fruit is", fruits[2]);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);


// var userAge = prompt("Enter your age")//50
// var userGender = prompt("Enter your gender")//female
// //      true       &&    true
// if(userAge >=18 && (userAge<=60 || userGender === "male")){
//     console.log("allow");
    
// }




// var studentAge = +prompt("Enter your age")
// var studentGender = prompt("Enter your gender")

// if(studentAge>=18 && studentAge<=80 && studentGender=== "male" ||(studentGender === "female" && studentAge>=50 && studentAge<=60)){
//     console.log("allow");
// }else{
//     console.log("not allow");
    
// }







// var html = +prompt("Enter HTML Marks")
// var css = +prompt("Enter CSS Marks")
// var js = +prompt("Enter JS Marks")
// var react = +prompt("Enter REACT Marks")
// var nodejs = +prompt("Enter NODEJS Marks")
// var obtainedMarks = html + css + js + react + nodejs
// var totalMarks = 500
// var percentage = (obtainedMarks / totalMarks) * 100
// console.log("Obtained Marks:", obtainedMarks);
// console.log("Total Marks:", totalMarks);
// console.log("Percentage:", percentage + "%");
// if (percentage >= 80 && percentage <= 100) {
//     console.log("Grade A+");

// } else if (percentage < 80 && percentage >= 70) {
//     console.log("Grade A");

// } else if (percentage < 70 && percentage >= 60) {
//     console.log("Grade B");

// } else if (percentage < 60 && percentage >= 50){
//     console.log("Grade C");
// }else if(percentage<50 && percentage>=40){
//     console.log("Grade D");
// }else if(percentage<40){
//     console.log("Grade F");
// }else{
//     console.log("invalid percentage");
// }


// Nested Conditions
// var userName = prompt("Enter your username")
// var PIN = +prompt("Enter your PIN code")

// if(userName === "mustafashahzad845"){
// console.log("Username verified");

// if(PIN === 123456){
// console.log("Access granted");
// }else{
// console.log("Invalid Pin");

// }

// }else{
//     console.log("Invalid username");
// }

// // Nested Condition # 2
// var loginEmail = prompt("Enter your login email")
// var loginPassword = prompt("Enter your login Password")
// var otp = +prompt("Enter your One Time Password")

// if(loginEmail === "mustafashahzad845@gmail.com"){
//     console.log("Email verified");
   
//     if(loginPassword === "mustafa123"){
// console.log("Password verified");

// if(otp === 123456){
// console.log("Login Successfully");

// }else{
// console.log("Invalid OTP");

// }

//     }else{
// console.log("Invalid Password");

//     }

// }else{
//     console.log("invalid Email");
    
// }

// Nested Condition # 3 
// var mobileNumber = +prompt("Enter your mobile number")
// var password = prompt("Enter your password")
// var securityQuestion = prompt("Security Queastion: What is your favorite place?")

// if(mobileNumber === 923213880304){
//     // console.log("Mobile number verified");
    
//     if(password === "mustafa123"){
// // console.log("Password Verified");

// if(securityQuestion === "Madina"){
//     console.log("Login Successfully");
    
// }else{
//     console.log("Invalid Answer");
    
// }

//     }else{
//         console.log("Invalid Password");
        
//     }

// }else{
//     console.log("Invalid Mobile Number");
    
// }


// Nested Condition # 4
var studentIdNumber = +prompt("Enter your id card number")
var studentFingerPrint = prompt("Enter your finger print")
var securityPin  = +prompt("Enter your security PIN")
var securityQuestion = prompt("Enter your favorite place")
var clearancecode = +prompt("Enter your clearance code")

if(studentIdNumber === 845){
    console.log("ID verified");
    


if(studentFingerPrint === "finger-lines"){
    console.log("finger print verified");
    


if(securityPin === 123456){
    console.log("PIN Verified");
    

if(securityQuestion === "Madina"){
    console.log("Answer Verified");
    
if(clearancecode === 1234){
    console.log("Access Granted");
    


    
}else{
    console.log("Final clearance failed");
    
}

}else{
    console.log("Invalid Answer");
    
}

}else{
    console.log("Invaid PIN");
    
}

}else{
console.log("Finger Print Not Match");

}

}else{
    console.log("Invalid ID Card");
}