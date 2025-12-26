// var loginEmail= prompt("Enter Your Email")
// var loginPassword= prompt("Enter Your Password")

// if(loginEmail === "mustafa@gmail.com" && loginPassword === "mustafa123"){
//     document.writeln("Login..")
// }else{
//     document.writeln("Invalid Email or Password")
// }












var html = +prompt("Enter  your html marks")
var css = +prompt("Enter  your css marks")
var bootstrap = +prompt("Enter  your bootstrap marks")
var react = +prompt("Enter  your react marks")
var nodejs = +prompt("Enter  your nodejs marks")

var obtainedMarks = html + css + bootstrap + react + nodejs
var totalMarks = 500
var percentage = (obtainedMarks / totalMarks) * 100


document.writeln("<style>")
document.writeln("*{ background: #000; color: #fff }")
document.writeln(".my-ul{ list-style-type: none ; margin: 0 }")
document.writeln(".my-ul li{ margin-bottom: 12px ;font-size:20px ; font-weight : 200; text-align: center}")
document.writeln(".subject-marks-heading{ text-align:center ; font-size: 28px ;  }")

document.writeln(".my-ul-2{ text-align:center ; list-style-type: none ;   margin : 24px 0 0 0;}")
document.writeln(".my-ul-2 li{font-size : 22px ; margin : 0px 0 10px 0; font-weight: 200} ")
document.writeln("</style>")

document.writeln("<h4 class=subject-marks-heading>Subject Marks</h4>")
document.writeln("<ul class = my-ul>")
document.writeln("<li>","HTML: " , html , "</li>")
document.writeln("<li>" , "CSS: " , css , "</li>")
document.writeln("<li>" ,"BOOTSTRAP: " , bootstrap , "</li>")
document.writeln("<li>", "REACT: " , react ,"</li>")
document.writeln("<li>" ,"NODEJS: " , nodejs , "</li>")
document.writeln("</ul>")

document.writeln("<ul  class=my-ul-2>")
document.writeln("<li>" ,"OBTAINED MARKS: " , obtainedMarks , "</li>")
document.writeln("<li>" ,"TOTAL MARKS: " , totalMarks , "</li>")
document.writeln("<li>" ,"PERCENTAGE: " , percentage ,"%" ,"</li>")

if(percentage >= 80 && percentage <= 100){
    document.writeln("<li>", "Grade: A+" ,"</li>")
}else if(percentage < 80 && percentage >=70){
        document.writeln("<li>", "Grade: A" ,"</li>")
}else if(percentage < 70 && percentage >= 60){
            document.writeln("<li>", "Grade: B" ,"</li>")
}else if(percentage < 60 && percentage >= 50){
                document.writeln("<li>", "Grade: C" ,"</li>")
}else if(percentage<50 && percentage >= 40){
                    document.writeln("<li>", "Grade: D" ,"</li>")
}else if(percentage < 40){
                        document.writeln("<li>", "Grade: F" ,"</li>")

}



document.writeln("</ul>")





