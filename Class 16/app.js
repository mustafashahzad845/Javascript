// var a = 10;

// function foo() {
//     //  a = 20;
//     console.log(a);
    
// }


// foo()
// console.log(a);



// function addNumbers(num1 , num2) {
// console.log(num1 + num2);

// return num1 + num2
// }

// var res = addNumbers(100, 200)

// console.log(res);




// function getValue() {
//     // console.log("getValue");

//     var firstName = document.getElementById("firstName")
//     var lastName = document.getElementById("lastName")
    

// alert("Welcome " + firstName.value + " "+ lastName.value)

    
// }


// function setValue() {

//       var firstName = document.getElementById("firstName")
//     var lastName = document.getElementById("lastName")


//    firstName.value = prompt("Enter first Name")
// lastName.value = prompt("Enter last Name")
// }

function showPassword() {

    // console.log("showPassword");

    var password = document.getElementById("password")
    console.log(password.value , password.type);
var btn = document.getElementById("btn")
    // password.type = "text"

    if(password.type === "password"){
        password.type = "text"
        btn.innerText = "Hide Password"
    }else{
        password.type = "password"
                btn.innerText = "Show Password"

    }
    
    
}


function hidePassword() {

        var password = document.getElementById("password")
        passwordtype = "password"
}




function imageChanger() {

    var image = document.getElementById("image")
    console.log(image);
    
}







