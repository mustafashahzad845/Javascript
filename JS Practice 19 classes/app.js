// Chap1: Alert
// alert("Hello World");
// var greet = alert("Hello World" + " Mustafa");
// // console.log(greet);


// Chap2:Variable for String
// var name = "Mustafa"
// var fatherName = "Shahzad"

// console.log(name);
// console.log(fatherName);

// var fullName = name +" " +fatherName
// console.log("fullname: " , fullName);



// var comma = "mustafa's"
// console.log(comma);



// Chap3:Variable for Number
// var a = 10;
// var b = 20
// var ans = a + b
// console.log(ans , "ans");

// var weightBefore = Number(prompt("Enter your weight 20 days before"))
// var weightAfter = Number(prompt("Enter your current weight"))
// var weightIncrease = weightAfter - weightBefore
// console.log("Bhai apka 20 days main itna weight barh gaya hai " , weightIncrease , "kg");



//Chap4:Variable Names Legal and Illegal
// var name1 = "mustafa"
// console.log(name1);


// Chp5:Math expressions Familiar operators
// Chp:6
// BODMAS RULE
// Chp:7
//post/pre increment,decrement
// Chp:8
// var a = "100"
// var b = "100"
// console.log(+a +  +b);


// Chp:9 Prompt
// var question = prompt("Species" + "Human" + " / Animal")

// Chp:10 if-statement
/* if(condition){

 } */


// Chp:11 Comparison operators
// > , < , >=   , <=  , = , == , === , != , !==

// Chp:12 if-else  else if()
/* if(condition){

}else if(){

}else{
    
} */

// Chp:13   AND Gate , OR Gate

// Chp:14  Nestef if

// Chp:15 Array
// Array is a group of collection of same data type

// var cities = ["karachi" , "lahore" , "hyderabad"  , "quetta"]
// console.log(cities);
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);
// console.log(cities[3]);

// cities.pop()
// cities.pop()
// cities.push("hyderabad")
// cities.push("quetta")

// cities.shift()
// cities.shift()
// cities.unshift("lahore")
// cities.unshift("karachi")

// var arrCopy = cities.slice(-3)


// cities.splice(1 , 2 , "islamabad" , "multan")



// console.log(cities);

// console.log(arrCopy);


// var numbers = [0 , 2 , 1 , 3]
// console.log(numbers);

// // var a =  numbers.toSpliced(0, 1)
// var a = numbers.toSpliced(0, 1)
// console.log(a);

// console.log(numbers);


// Chp:16 , 17    Array Methods
// Pop , Push
// Shift , Unshift
// Slice , Splice
//sort  , reverse

// Chp:18 For-Loop
// var startingNumber = +prompt("Enter starting Number")
// var endingNumber = +prompt("Enter starting Number")
// var tableNumber = +prompt("Enter table Number")
// for (var i = startingNumber; i <= endingNumber; i++) {
//     console.log(tableNumber + "x" + i + "=" + i * tableNumber);

// }

// Chap : 19  for loops: Flags, Booleans, array length, and loopus interruptus

// Flag
// var users = ["mustafa" , "shahzad" , "ali" , "jaffar"]
// var isMatch = false
// var userName = prompt("Enter your name").toLowerCase().trim()
// for(var i = 0 ; i < users.length ; i++){
// users = users[i].toLowerCase()

// if(users.includes(userName) ){
// isMatch = true
// alert(userName + " bhai Mubarak apka naam list me hai 😊")
// }

// }

// if(isMatch === false){
//     alert("Bhai apka naam list main nhi hai")
// }

// console.log();



// Contine and break keyword
//  for(var i = 0 ; i <= 50 ; i++){
//     //  if(i % 2 !== 0){
//     //     continue

//     //  }
//     //        
//         console.log(i);

//     if(i === 10) {
//         break
//     }

//  }


// Chap 21 Changing Case
// var userInput = prompt("Enter some string")
// console.log(userInput);
// document.writeln(userInput)

// var lowerCase = userInput.toLowerCase()
// console.log(lowerCase , "lowercase");

// var upperCase = userInput.toUpperCase()
// console.log(upperCase , "uppercase");

// Capitialize Case
// Smajh nhi aaya sahi se


 // Chp : 23 Finding Segements
// var str = "Well organized and easy to understand Web building tutorials with lots of examples of how CSS  to use HTML, CSS, JavaScript, SQL, Python, PHP, CSS , Bootstrap, Java, ..."

// for(var i = 0 ; i < str.length; i++){
//     // console.log(str.slice(i , i + 3));
//     if(str.slice(i , i + 3) === "CSS"){
//         console.log(i);

//         var part1 = str.slice(0 , i)
//         console.log(part1);
//         var part2 = str.slice(i + 3)
//         console.log(part2);

//         str = part1 + "Cascading Style Sheets" + part2
//     }
// }

// console.log(str);


// str =  str.replaceAll("CSS", "Cascading Style Sheets")
// console.log(str);

// var indexNumber =  str.indexOf("CSS")
// console.log(indexNumber);


// console.log(str[103]);
// console.log(str[104]);
// console.log(str[105]);



// Chap 26 : Rounding Numbers
// var roundingNumbers = Math.floor(Math.random() * (10 - 5 + 1)+5)
// console.log(roundingNumbers);

function changeColor() {
    // console.log("changeColor");
    var main = document.getElementById("main")
    main.style.width = "100%"
    main.style.height = "100vh"

    var randomNumbers = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    console.log(randomNumbers);
    

    if(randomNumbers === 1){
        main.style.backgroundColor = "red"
    }else if(randomNumbers === 2){
                main.style.backgroundColor = "blue"

    }else if(randomNumbers === 3){
                main.style.backgroundColor = "green"

    }else if(randomNumbers === 4){
                main.style.backgroundColor = "orange"

    }else if(randomNumbers === 5){
                main.style.backgroundColor = "pink"

    }else if(randomNumbers === 6){
                main.style.backgroundColor = "grey"

    }else if(randomNumbers === 7){
                main.style.backgroundColor = "black"

    }else if(randomNumbers === 8){
                main.style.backgroundColor = "yellow"

    }else if(randomNumbers === 9){
                main.style.backgroundColor = "lightblue"

    }else if(randomNumbers === 10){
                        main.style.backgroundColor = "purple"

    }

}

// Chap 28 : Converting strings to integers and decimals

// var num_Plus = +("100.574")
// var num_Number = Number("100.574")
// var num_ParseInt = parseInt("100.574")
// console.log(num_Plus);
// console.log(num_Number);
// console.log(num_ParseInt);


// chap 29 : Converting strings to numbers, numbers to strings

// var str =  String(100)
// console.log(str.toString() , typeof str.toString());
// var str = 100.894777444
// console.log(str.toFixed(2) , typeof str.toFixed(2));
