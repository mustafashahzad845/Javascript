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


// function DOBCalc() {

// var name = document.getElementById("name")
// var rollNo = document.getElementById("rollNo")
// var DOB = document.getElementById("DOB")


// console.log("name" , name.value);
// console.log("rollNo" , rollNo.value);
// console.log("DOB" , DOB.value);


// var currentDate = new Date().getTime()
// var userAge = new Date(DOB.value).getTime()
// userAge = currentDate - userAge
// userAge = Math.floor(userAge / (1000 * 60 * 60 * 24 * 365))
// console.log(userAge + " years");


// var age_Detail = document.getElementById("Age-detail")
// age_Detail.innerHTML = "Name: " + name.value + " , RollNo: " + rollNo.value + " , userAge = " + userAge  + " years"
// }



function MarkSheetSystem() {

    var name = document.getElementById("name")
    var rollNo = document.getElementById("rollNo")
var marks = [document.getElementById("html") , document.getElementById("css") , document.getElementById("js") , document.getElementById("github") , document.getElementById("bootstrap")]
    console.log("Name: " , name.value);
    console.log("RollNo: " , rollNo.value);
    console.log("HTML" , +marks[0].value , typeof +marks[0].value);
    console.log("CSS", +marks[1].value);
    console.log("JS", +marks[2].value);
    console.log("GITHUB", +marks[3].value);
    console.log("BOOTSTRAP", +marks[4].value);
    var totalMarks = 500;
    var obtainedMarks = +marks[0].value + +marks[1].value + +marks[2].value + +marks[3].value + +marks[4].value
    console.log("Obatined Marks: " ,obtainedMarks);
    console.log("Total Marks: " , totalMarks);
    
    var percentage = Math.round((obtainedMarks / totalMarks) * 100)
    console.log("Percentage" , percentage + "%");
    
    var grade = "fail"

    if (percentage >= 80 && percentage <= 100) {
        // console.log("Grade A+");
        grade = "Grade A+"
        
    }else if(percentage < 80 && percentage >= 70 ){
        // console.log("Grade A");
        grade = "Grade A"



    }else if(percentage < 70 && percentage >= 60){
                // console.log("Grade B");
        grade = "Grade B"



    }else if(percentage < 60 && percentage >= 50){
                // console.log("Grade C");
        grade = "Grade C"


    }else if(percentage < 50 && percentage >= 40){
                // console.log("Grade D");

        grade = "Grade D"


    }else if(percentage < 40){
                // console.log("Grade F");

        grade = "Grade F"


    }else{
                // console.log("Invalid Percentage");
grade = "Invalid Percentage"

    }

 alert("Name: " + name.value + " , RollNo: " + rollNo.value + " , HTML : " + marks[0].value + " , CSS: " + marks[1].value + " , JS: " + marks[2].value + " , GITHUB: " + marks[3].value + " , BOOTSTRAP: " + marks[4].value+" , OBTAINED MARKS: " + obtainedMarks + " , TOTAL MARKS: " + totalMarks + " , PERCENTAGE: " + percentage + "%" + " , " + grade)
// var name_data = document.getElementById("name-data")
// var rollNo_data = document.getElementById("rollNo-data")
// var html_marks = document.getElementById("html-marks")
// var css_marks = document.getElementById("css-marks")
// var js_marks = document.getElementById("js-marks")
// var github_marks = document.getElementById("github-marks")
// var bootstrap_marks = document.getElementById("bootstrap-marks")
// var obtained_marks = document.getElementById("obtained-marks")
// var percentage_data = document.getElementById("percentage-data")
// var grade_data = document.getElementById("grade-data")


// name_data.innerHTML = name.value
// rollNo_data.innerHTML = rollNo.value
// html_marks.innerHTML = marks[0].value
// css_marks.innerHTML = marks[1].value
// js_marks.innerHTML = marks[2].value
// github_marks.innerHTML = marks[3].value
// bootstrap_marks.innerHTML = marks[4].value
// obtained_marks.innerHTML = obtainedMarks
// percentage_data.innerHTML = percentage 
// grade_data.innerHTML = grade


// var html_marks = document.getElementById("name-data")
// var html_marks = document.getElementById("name-data")

}
