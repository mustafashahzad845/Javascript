// function Assignment_Checker(num1 , num2) {
    

    
//     var userName = prompt("Enter your name")
//     var RollNo = +prompt("Enter your Roll no")


//     document.writeln("<style>" , "h1{margin-bottom : 12px}","h2{margin-top : 12px}" , "ul{list-style-type : none ; margin:0 ; padding : 0}", "li{margin-bottom : 20px ; font-size : 20px}","</style>")
//     document.writeln("<h1>" , "Output" , "</h1>")
//     document.writeln("<ul>")

//     document.writeln("Username: " , userName , "<br />")
//     document.writeln("Rollno: " , RollNo, "<br />")
//     document.writeln("</ul>")
    
//     return num1 + num2

    
// }




// var finalAnswer =  Assignment_Checker(10, 20)
// document.writeln("<h2>","Sum is: ", finalAnswer,"</h2>")

function Check_Rsult() {

    var marks = [80 , 60 , 50 , 35 , 25]
var students = ["Ali" , "Ayan" , "Jaffar" ,"Usman" , "Mustafa"]
var check = prompt("Enter your name")
var isMatch = false

for(var i = 0 ; i < students.length ;i++){

// students = students[i].slice(0,1).toUpperCase() + students[i].slice(1).toLowerCase()

    if(students[i] === check){
isMatch = true

if(marks[i] >= 40){
    alert("Mubarak ho bhai ap pass hogae ho" + "aur apke marks " + marks[i] + " hain")
}else{
    alert("Ap fail ho aur mehnat kro"  + "aur apke marks " + marks[i] + " hain")
}

// if(students[i] === marks[i])
    
// }
}

} 


if(isMatch === false){
    alert("Ye bacha hamari academy ka nahi hai.")
}
}
