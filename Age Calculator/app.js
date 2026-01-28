function ageDetailCalculator() {
    // console.log("ageDetailCalculator");

    var name = document.getElementById("name")
    var rollNo = document.getElementById("rollNo")
    var userAge = document.getElementById("userAge")


if (isNaN(userAge.value) || userAge.value === "") {
            alert("Invalid Age")

    
} else {


console.log("Name: " ,  name.value);
    console.log("Roll no: " ,  rollNo.value);
    console.log("User Age: " ,  userAge.value);

    // userAge = new Date(userAge.value).getTime()
    var userAgeMonths = userAge.value * 12
    var userAgeDays = userAge.value * 365
    console.log("This is equal to ");
    console.log(userAgeDays + " days");
    console.log(userAgeMonths + " months");

    alert("Name: " + name.value + " , Roll No: " + rollNo.value + " , User Age: " + userAge.value + " years. " + " This is equal to " + userAgeDays + " Days and " + userAgeMonths + " Months")
}


    

}