// console.log("Hello World 1");
// console.log("Hello World 2");

// function calc() {

//     var num1 = +prompt("Enter num1")
//     var opt = prompt("Enter opt")
//     var num2 = +prompt("Enter num2")

//    if (opt === "+") {
//     console.log(num1  + num2);

//    } else if(opt === "-") {
//     console.log(num1 - num2);

//    }else if(opt === "*"){
// console.log(num1 * num2);

//    }else if(opt === "/") {
// console.log(num1 / num2);

//    }else{
//     console.log("Invalid opt");

//    }

// }











// Assignment Description:

// Is assignment me aap ko students ke marks par based ek simple result system banana hai.
// Program students ke marks check karega aur batayega ke kaun Pass hai aur kaun Fail hai. Ye
// program HTML page par ek button ke zariye run hoga. Jab user button par click karega, tab result
// screen par show hoga. Har student ka result screen par show hoga aur akhir me total Pass
// students aur Fail students ki tadaad bhi show hogi. Passing marks 40 hain. 40 ya us se zyada
// marks walay students Pass honge aur 40 se kam marks walay students Fail honge.

// Student Marks Data
// var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];






// function student_Result_Check() {

    
// var Pass = [];
// var Fail = [];

// var marks = [85, 72, 66, 90, 55, 40, 35, 28, 20, 10];

// for (var i = 0; i < marks.length; i++) {

//     if (marks[i] >= 40) {
//         document.writeln("Marks: ", marks[i], " - Grade: PASS", "<br />")
// Pass.push(marks[i])


//     } else {
//         document.writeln("Marks: ", marks[i], " - Grade: FAIL", "<br />")
//         Fail.push(marks[i])

//     }
// }



// document.writeln("<style>")
// document.writeln(".mg-b{margin-bottom : 0px}")
// document.writeln(".mg-t{margin-top : 10px}")
// document.writeln("</style>")

// document.writeln("<h4 class=mg-b>" ,"Pass Students" , Pass.length , "<br />" , "</h4>")
// document.writeln("<h4 class=mg-t>" ,"Fail Students" , Fail.length , "<br />" , "</h4>")


// }


// function greet(userName , country , city) {
//     console.log("Welcome " + userName);
//     console.log("Country" , country);
//     console.log("city" , city);
    
// }

// greet("Mustafa" , "Karachi" , "Pakistan")

// greet("Mustafa")
// greet("Ibrahim")
// greet("Usman")


// function add(num1= 0   , num2 = 0) {
// var ans = num1  +  num2;
// console.log(ans);

// return ans
// }

// var res =   add(100 , 600)
// console.log(res);




var str = prompt("Enter some text")
var userCase = prompt("Which type of case you want?   lowercase , uppercase , capitializecase").toLowerCase()


if(userCase === "lowercase") {
var lowercase = str.toLowerCase()
console.log("lowercase" , lowercase);

}else if(userCase === "uppercase") {
var uppercase =  str.toUpperCase()
console.log(uppercase);

}else if(userCase === "capitializecase" || userCase === "capitalizecase"){
    
    var strArr = str.split(" ")
    console.log(strArr);
    var arr = []

    for(var i = 0 ; i < strArr.length ; i++) {

        var word = strArr[i]
        word = word.slice(0 , 1).toUpperCase() + word.slice(1).toLowerCase()
        
        arr.push(word)

    }
    
    // console.log(arr);
    var capitalizepara = arr.join(" ")
    console.log(capitalizepara);
    
    
}

