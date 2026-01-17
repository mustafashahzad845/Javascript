// var randomNumber = Math.floor(Math.random()*10+1)
// console.log(randomNumber);

// var randomNumber = Math.random() * (Max-Number - Min-Number + 1) + Min-Number

// var randomNumber = Math.floor(Math.random() * (20 - 5 + 1) + 5)
// console.log(randomNumber);

// var userNumber = +prompt("Enter one number between 1-6")
// var randomNumber = Math.floor(Math.random()*6 + 1)

// if (userNumber === randomNumber) {

//     console.log("Win");

// }else{
//     console.log("Lose");

// }



// console.log(randomNumber);



// var toss = prompt("Enter heads or tails").toLocaleLowerCase()
// var randomNumber = Math.floor(Math.random() * 2 + 1)
// // console.log(randomNumber);



// if (randomNumber === 1) {

//     console.log("Heads");


// }else if(randomNumber === 2){
//     console.log("Tails");

// }

// if(toss === "heads" &&  randomNumber === 1 || toss === "tails" && randomNumber === 2){
//     console.log("You Win");

// }else if(toss !== "heads" && toss !== "tails"){

// alert("Enter only heads or tails")

// }else{
//     console.log("You Loss");

// }



// // console.log(toss);
// console.log(randomNumber);



// var myName = alert("Mustafa Shahzad")
// var num = alert(7)

// variable banake alert
// var nationality = "Pakistani"
// console.log(alert(nationality));
// var age = 16
// console.log(alert(age));
// direct alert
// var meName = alert("Mustafa")  // isme variable ka naam is lie meName rakha ke name vs code ka pehle se naam hai
// console.log(meName);

// without variable alert
// console.log(alert("Mustafa"));

// Agar alert() main aik se ziada values donga tou kam nhi krega



// var age = 16 ; 
// var ageToAdd = 5 ;
// var futureAge = age + ageToAdd
// alert(futureAge);
// document.writeln(alert(futureAge))


// var a = 5
// var b = a++ // 6
// var c= ++a //

// console.log(a);
// console.log(b);
// console.log(c);


// var x = 5;
// var y = x++ + ++x - x-- + --x;
// //       5  +  7  - 7   +   5
// //       5               +   5
// //       y =   10
// // x = 5
// console.log("x = ",x);
// console.log("y = ",y);


// var a = 2; // 3/4/3/2
// var b = ++a + a++ + --a + a-- + a;
// //      3    +  3  + 3  + 3 + 2
// //          6   + 6 + 2
// //      b =     14
// // a = 2
// console.log("a = " , a);
// console.log("b = " , b);


// var num = 8;// 7/6/7/8
// var final = num-- - --num + ++num + num++ - num;
// //           8    -   6   + 7    +   7    - 8
// //           8    -   6         + 14    - 8
// //                 8 + 14 - 6  - 8
// //                 22 - 14
// //              final =     8 
// //                num = 8


// console.log("num" , num);
// console.log("final" , final);


// var a = 5; //6/7/6/5/6/7/6/5/6/5/6/7/6
// var result = a++ + ++a - --a + a-- - a++ + ++a + a + a-- - --a + ++a - a-- + a++ - a + a++ + --a;

// //           5   + 7  -   6 + 6  -  5    + 7    + 7  + 7  - 5  +   6  - 6  + 5   - 6 + 6  + 6
// //            + 7       + 7    + 7  + 7     + 6
// //            14   + 14    + 6
// //           28  + 6
// //         result =  34



// // a = 6
// console.log("a" , a);
// console.log("result" , result);


// var result1 = 10 + 5 * 2;
// //            10 + 10 = 20
// console.log("result1" , result1);


// var result2 = 20 / 4 * 2 + 5;
// //            20 / 4 * 2 + 5
// //            5* 2 + 5
// //            10 + 5
// //            15 Ans
// console.log("result2" , result2);


// var result3 = (10 + 5) * 2;
//            (10 + 5) * 2
//            15 * 2
//            30 Ans
// console.log("result3" , result3);


// var result5 = 15 % 4 + 2 * 3;
// //            3 + 2 * 3
// //            3 + 6
// //            9 Ans
// console.log("result5" , result5);
// // alert(result5)


// var task1 = 10 * 2 + (50 - 10) / 5 + 2 - 1;
// //          10 * 2 + (50 - 10) / 5 + 2 - 1
// //          10 * 2 + 40 / 5 + 2 - 1
// //          10 * 2 + 8 + 2 - 1
// //         20 + 8 + 2 - 1
// //         30 - 1
// //         29 Ans

// console.log("task1" , task1);



// var task2 = 100 - 5 * (10 / 2) + 20 / (2 + 3) * 4 ;
//          //  100 - 5 * 5 + 20 / (2 + 3) * 4            
//          //  100 - 5 * 5 + 20 / 5 * 4            
//          //  100 - 5 * 5 + 4  * 4            
//          //  100 - 25 + 16           
//          // 116 - 25          

// console.log("task2 = " , task2);


// var task3 = 50 - 4 * (3 - 2) / 2 + (10 + 10) / 5 - 2 * 3 + 15 % 4;
// //          50 - 4 * (1) / 2 + (20) / 5 - 2 * 3 + 15 % 4
// //          50 - 4 * 1 / 2 + 20 / 5 - 2 * 3 + 15 % 4
// //          50 - 4 * 0.5 + 20 / 5 - 2 * 3 + 15 % 4
// //          50 - 4 * 0.5 + 4 - 2 * 3 + 15 % 4
// //          50 - 4 * 0.5 + 4 - 2 * 3 + 3
// //          50 - 2 + 4 - 2 * 3 + 3
// //          50 - 2 + 4 - 6 + 3
// //          50 - 2 + 4 - 6 + 3
// //          57 - 8
// //          49
 

// console.log("task3", task3);


// Javascript Chap 8

// var a = "Java";
// var b = "Script";
// var c = a + b;
// a = "Java"
// b = "Script"
// c = a + b = Java + Script = "JavaScript" Ans

// console.log("c = " , c);


// var myName = "Mustafa";
// alert("Hello" + myName);

// "Hello" + myName , myname = "Mustafa"
// so "Hello" + "Mustafa" = "HelloMustafa" Ans


// var result1 = 10 + 20 + "30";
// console.log(result1);

// var result2 = "10" + 20 + 30;
// console.log(result2);

// var result3 = 5 + 5 + "5" + 5 + 5;
// console.log(result3);


// var a = "Mustafa";
// var b = "Shahzad";
// var c = 16;
// var final = a + " " + b + " " + "is" + " " + c;
// console.log(final);


// var result5 = "The total is: " + (10 + 20);
// console.log(result5);


// var userAge =Number(prompt("Enter your age"))
// var additionalAge = 10
// var futureAge = userAge + additionalAge
// console.log(userAge);
// console.log(typeof userAge);

// alert("After 10 years you will be" ,futureAge, "years old" )




// var userAge = +prompt("Enter your age")
// var additionalAge = 10 ; 
// var futureAge = userAge + additionalAge;
// console.log(futureAge + "years");

// alert("After 10 years you will be " + futureAge + " years old.")


// Task Reminder:
// 1. Pehla number prompt se lo (+)
// 2. Doosra number prompt se lo (+)
// 3. Unhe multiply karo
// 4. Alert mein dikhao: "The multiplication of " + num1 + " and " + num2 + " is " + result

// var num1 = Number(prompt("Enter number1"))
// var num2 = Number(prompt("Enter number2"))
// var multiplication = num1 * num2
// alert("The multiplication of " + num1 + " and " +num2 + " is " + multiplication)

// If Statement

// var age = prompt("Enter your age")

// if (age >= 18) {
//     console.log("Welcome man");
    
// }else{
//     console.log("nikal jao");
    
// }


// var password = "mustafa123"
// var userPassword = prompt("Enter your password")

// if(password === userPassword){

//     alert("Correct Password")
// }else{
//     alert("Invalid Password")
// }

var signalColor = prompt("Signal color kia hai   red , yellow , green")

if(signalColor === "red"){
    alert("Must Stop!")
}else if(signalColor === "yellow") {
alert("Ready to move")
}else if(signalColor === "green"){
    alert("go now")
}else{
    alert("Enter only signal color red , blue ,green")
}