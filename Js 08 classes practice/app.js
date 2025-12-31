// var html = +prompt("Enter HTML marks")
// var css = +prompt("Enter CSS marks")
// var bootstrap = +prompt("Enter BOOTSTRAP marks")
// var nodeJs = +prompt("Enter NODEJS marks")
// var react = +prompt("Enter REACT marks")

// var obtainedMarks = html + css + bootstrap + nodeJs + react
// var totalMarks = 500
// var percentage = (obtainedMarks / totalMarks) * 100

// console.log("Subject Marks");
// console.log("HTML",html);
// console.log("CSS",css);
// console.log("BOOTSTRAP",bootstrap);
// console.log("NODEJS" , nodeJs);
// console.log("REACT" , react);

// console.log("Obatined Marks" , obtainedMarks);
// console.log("Total Marks" , totalMarks);
// console.log("peracentage" , percentage + "%");

// if(percentage >= 80 && percentage<=100){
//     console.log("Grade A+");
// }else if(percentage < 80 && percentage >=70){
// console.log("Grade A");
// }else if(percentage < 70 && percentage >=60){
//     console.log("Grade B");
// }else if(percentage < 60 && percentage >=50){
//     console.log("Grade C");
// }else if(percentage < 50 && percentage >= 40){
//     console.log("Grade D");

// }else if(percentage < 40){
//     console.log("Grade F");

// }else{
//     console.log("Invalid Percentage");

// }

// var studentShift = prompt("Enter Your Study Shift").trim()
// var age = +prompt("Enter Your Age")
// var attendance = +prompt("Enter Your Attendance")
// var grade = prompt("Enter Your Grade").trim()

// if ((studentShift === "Morning" && age >= 16 & age <= 25 && attendance >= 80 && grade === "A") || (studentShift === "Evening" && attendance >= 60 && (grade === "A" ||            grade === "B"))) {

//     console.log("Allow");
    

// } else {
//     console.log("Not allow");

// }


// var email = prompt("Enter your Email").trim()
// var  password = prompt("Enter your Password").trim()
// if(email === "mustafa@gmail.com" && password === "mustafa123"){
//     console.log("Login..");
// }else{
//     console.log("Invalid Eamil or Password");
    
// }



// var email = prompt("Enter Your Eamil Address")
// var password = prompt("Enter Your Password")
// var mobileNumber = +prompt("Enter Your Mobile Number")
// var SecurityAnswer = prompt("Which is Your Favorite Place?")
// var otp = +prompt("Enter Your One Time Password")


// if(email === "mustafa@gmail.com"){
//     console.log("Email Verified");
    
// if(password === "mustafa123"){
// console.log("Password Verified");

// if(mobileNumber === 923213880304){
//     console.log("Mobile Number Verified");
    

// if(SecurityAnswer === "Madina"){
//     console.log("Security Answer Verified");
    
// if(otp === 123456){
//     console.log("Access Granted");
    
// }else{
//     console.log("OTP Not Match");
    
// }
    
// }else{
//     console.log("Invalid Answer");
    
// }



// }else{
//         console.log("Invalid Mobile Number");

// }

// }else{
// console.log("Invalid Password");

// }

// }else{
//         console.log("Invalid Email");

// }


// for(var i = 1 ; i<= 10 ; i++){
//     console.log(i);
    
// }

// for(var i = 1 ; i<=12 ; i++){
//     console.log("2 x" , i , "=" , i*2 );
    
// }

// for(i = 1 ; i <= 200 ; i = i + 2){
//     console.log(i);
    
// }


var tableNumber = +prompt("Enter Table Number")
var tableStartingNumber = +prompt("Enter table starting Number")
var tableEndingNumber = +prompt("Enter table ending Number")

for(var i = tableStartingNumber ; i<= tableEndingNumber ; i++){
    document.writeln(tableNumber ,"x" , i , "=" , i*tableNumber , "<br />");
    
}