// function passCheck() {

//     var password = document.getElementById("password")
//     var re_Write_Password = document.getElementById("re-write-password")

// password = password.value
// re_Write_Password = re_Write_Password.value

//     console.log("Password" , password);
//     console.log("Confirm Password" ,re_Write_Password);
    
//     if(password === "" || re_Write_Password === "") {
//         alert("Please fill the input field")
//     }else{
//          if (password === re_Write_Password) {
//         alert("Password Match")
//     }else{
//         alert("Invalid Password")
//     }
//     }

   
// }



// function showPass() {

//     var password = document.getElementById("password")
// console.log(password.value);

// var btn = document.getElementById("btn")
// console.log(btn);


// if(password.type === "password"){
// password.type = "text"
// btn.innerText = "Hide Password"
// }else{
//     password.type = "password"
// btn.innerText = "Show Password"

// }

// }

// function getValue() {
//     var firstName = document.getElementById("firstName")
//     var lastName = document.getElementById("lastName")

//     console.log("firstName" , firstName.value);
//     console.log("lastName" , lastName.value);

//     alert("Welcome " + firstName.value + " " + lastName.value)

    
// }

// function setValue() {
//       var firstName = document.getElementById("firstName")
//     var lastName = document.getElementById("lastName")

//     firstName.value = prompt("Enter Your First Name")
//     lastName.value = prompt("Enter Your Last Name")
// }


function DOBCalc() {

var name = document.getElementById("name")
var rollNo = document.getElementById("rollNo")
var DOB = document.getElementById("DOB")


console.log("name" , name.value);
console.log("rollNo" , rollNo.value);
console.log("DOB" , DOB.value);


var currentDate = new Date().getTime()
var userAge = new Date(DOB.value).getTime()
userAge = currentDate - userAge
userAge = Math.floor(userAge / (1000 * 60 * 60 * 24 * 365))
console.log(userAge + " years");


var age_Detail = document.getElementById("Age-detail")
age_Detail.innerHTML = "Name: " + name.value + " , RollNo: " + rollNo.value + " , userAge = " + userAge  + " years"
}