// function focusFunction(element){
// console.log("focusFunction" , "typing.." , element);

// element.style.background = "blue"
// element.style.outline = "none"
// element.style.border = "none"
// element.type = "text"


// }

// function blurFunction(element){
// console.log("blurFunction" , "online" , element);
// element.style.background =  #fff"
// element.style.outline = "none"
// element.style.border = "1px solid grey"
// element.style.color = "black"
// element.type = "password"
// }







// var element = document.getElementsByTagName("p")


// element[0].innerHTML = "Para1"
// element[1].style.margin = 0
// element[2].style.margin = 0

// element[0].style.margin = 0
// element[2].style.color = "red"
// element[1].style.color = "green"
// element[0].style.color = "blue"
// element[1].innerHTML = "Para2"
// element[2].innerHTML = "Para3"

// console.log(element);









// var parent = document.getElementsByTagName("div")
// console.log("child" , parent);
// // child.inner

// var child = document.getElementsByTagName("p")
// console.log(child);



function passwordImgHandler(element) {
    // var passwordImg = document.getElementById(z)
    console.log(element);
    var inputPass = document.getElementById("inputPass")
    if(element.src.includes("eye-image-close.png")){
        element.src = "./eye-image-open.png"
        inputPass.type = "text"
    }else{
        element.src = "eye-image-close.png"
               
        inputPass.type = "password"

    }

}


function Register() {
    console.log("Register");

    var userNameInput = document.getElementById("userNameInput")

    // console.log(userNameInput.value);
     var usernameInvalidPara = document.getElementById("usernameInvalidPara")


    if(userNameInput.value.length >= 3){
        usernameInvalidPara.style.display = "none"

    }else{
       
usernameInvalidPara.innerHTML = "Username must be longer than 2 characters"
usernameInvalidPara.style.color = "red"
usernameInvalidPara.style.margin = "0 0 10px 0"
    }

    var emailInput = document.getElementById("emailInput")
    console.log(emailInput.value);
    var invalidEmailPara = document.getElementById("invalidEmailPara")

    if(emailInput.value.includes("@gmail.com") || emailInput.value.includes("@yahoo.com") ||
     emailInput.value.includes("@outlook.com") || emailInput.value.includes("@hotmail.com") ||
    emailInput.value.includes("@mail.com")){
        
        invalidEmailPara.style.display = "none"
     
    }else if(emailInput.value == ""){
 invalidEmailPara.innerHTML = "Please Fill Email Address"
        invalidEmailPara.style.color = "red"
        invalidEmailPara.style.margin = "0 0 12px 0"

    }else{
        invalidEmailPara.innerHTML = "Invalid Email Address"
        invalidEmailPara.style.color = "red"
        invalidEmailPara.style.margin = "0 0 12px 0"
     }

var inputPass = document.getElementById("inputPass")
var confirmPasswordInput = document.getElementById("confirmPasswordInput")
console.log(inputPass.value);
console.log(confirmPasswordInput.value);

     var notMatchPassword = document.getElementById("notMatchPassword")

if(inputPass.value === confirmPasswordInput.value){
     var notMatchPassword = document.getElementById("notMatchPassword")
notMatchPassword.style.display = "none"
}else{
        var notMatchPassword = document.getElementById("notMatchPassword")
    notMatchPassword.innerHTML = "Password Not Match"
    notMatchPassword.style.margin = "0px 0 15px 0"
    notMatchPassword.style.color = "red"
}

if(userNameInput.value.length >=3 && (emailInput.value.includes("@gmail.com") || emailInput.value.includes("@yahoo.com") ||emailInput.value.includes("@outlook.com") || emailInput.value.includes("@hotmail.com") ||emailInput.value.includes("@mail.com")) && inputPass.value == confirmPasswordInput.value){


    var loginSucessfullyPara = document.getElementById("loginSucessfullyPara")
    loginSucessfullyPara.innerHTML = "Account created successfully!"
    loginSucessfullyPara.style.color = "green"
    loginSucessfullyPara.style.margin = "0px 0 15px 0"
    loginSucessfullyPara.style.textAlign = "left" 
    
}else{
       var loginSucessfullyPara = document.getElementById("loginSucessfullyPara")
 loginSucessfullyPara.style.display = "none"

}


}