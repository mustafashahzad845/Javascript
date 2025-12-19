// ==== Email Password Check Program =====

// var signupEmail = prompt("Enter Your Signup Email");
// var signupPassword = prompt("Enter your  Signup Password");
// var loginEmail = prompt("Enter Your Login Email");
// var loginPassword = prompt("Enter Your Login Password");

// if (signupEmail === loginEmail && signupPassword === loginPassword) {
//     console.log("Login Successfully")
// } else {
//     console.log("Invalid User")
// }




// === Campus Gender-Wise =======

// var gender = prompt("Enter your gender")
// if(gender === "male"){
//     console.log("Zaitoon Ashraf IT Park, head office");

// }else if(gender ==='female') {
//     console.log("Aliabad,Numaish");

// }else if( gender === "Male") {
//     console.log("Zaitoon Ashraf IT Park, head office");
// }
// else if( gender === "Female") {
//     console.log("Aliabad,Numaish");
// }

// else{
//     console.log("not found");

// }



// === MarkSheet Program ===

// var Physics = +prompt("Enter your Physics marks")
// var Chemistry = +prompt("Enter your Chemistry marks")
// var English = +prompt("Enter your English marks")
// var Computer = +prompt("Enter your Computer marks")
// var Urdu = +prompt("Enter your Urdu marks")
// var Islamiat = +prompt("Enter your Islamiat marks")
// var Maths = +prompt("Enter your Maths marks")

// var obtainedMarks = Physics + Chemistry + English + Computer + Urdu + Islamiat + Maths
// var totalMarks = 700
// var percentage = (obtainedMarks / totalMarks) * 100
// console.log(obtainedMarks)
// console.log(percentage + "%")
// if (percentage >= 80 && percentage < 100) {
//     console.log("Grade: " + "A+");

// } else if (percentage < 80 && percentage >= 70) {
// console.log("Grade: " + "A");
// }else{
//     console.log( "Grade: "+"F");
    
// }



// === Calculator Program ===
var num1 = +prompt("Enter num1")
var num2 = +prompt("Enter num2")
var operator = prompt("Enter your operator")

if (operator === "+") {

    console.log("Add: ", num1 + num2);
    
} else if(operator === "-") {
    console.log("Sub: ",num1 - num2);
    
}else if(operator === "*"){
    console.log("Mul: ",num1 * num2);
    
}else if(operator === "/"){
    console.log("Div: ",num1 / num2);
    
}else if(operator === "%"){
    console.log("Mod: ",num1 % num2);
    
}else{
    console.log("could n't found the operator");
    
}