function ageCalculator() {
console.log("AgeCalculator");



var name = document.getElementById("name")
var rollNo = document.getElementById("rollNo")
var userAge = document.getElementById("userAge")

if (isNaN(userAge.value) || userAge === "") {
    alert("Invalid Age , only type age in numbers")
}else{
console.log("Name: " , name.value);
console.log("RollNo: " ,rollNo.value);
console.log( "UserAge: " ,userAge.value);


var userAgeDays = +userAge.value * 365
console.log("This is equal to:");
 
console.log(userAgeDays , " Days");
var userAgeMonths = +userAge.value * 12
console.log(userAgeMonths , " Months");

alert("Name: " + name.value + " , RollNo: " + rollNo.value + " , userAge: " + userAge.value + " years. This is equal to : " + userAgeDays + " Days and " +userAgeMonths + " Months."  )
}




}