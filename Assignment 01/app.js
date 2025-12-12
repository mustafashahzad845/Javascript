// // alert("Mustafa Shahzad");

// var firstName = "Mustafa";

// console.log(firstName);

// // console.log(lastName);
// firstName = "Mustafa Shahzad"
// console.log(firstName);

// var weight = 60;
// weight = weight + 40 + "kg";
// console.log(weight);

// // var num1 = 10;
// // var num2 = 30;
// // var num3 = "20";

// // console.log(num1 + num2 + num3);

// // var num1 = 10;
// // num1 = num1 + 1
// // console.log(num1);

// // console.log(num1 % 3 )

// var a = 20 //21/22
// // var result = a++ + a++
// //           20  + 21
// console.log(result);

// var b = 15 //16/17/18+19
// var result1 = b++ + b++ + ++b + ++b;
// //            15  + 16  + 18  + 19;
// //                31    +     37  ;
// //                      68    Answer
// console.log(result1);


// var a = 14//15/16/15/14/15/14/13/12
// var result_2 = a++ + a++ + --a - --a + ++a - --a - a-- + a + --a - a;
// //              14 + 15 +   15 -  14 + 15 -  14   - 14  + 13 + 12 - 12;
// //                                                           cancel
// //               14 + 15 +   15 -  14 + 15 -  14   - 14  + 13
// //                   29   +   30    - 14 - 14 - 14 + 13
// //                      59          - 14 - 14 - 14  + 13
// //                      72 - 42
// //                        30     Answer

// console.log(result_2)








// TASK 1
a = 11 //12/13/12/13/12/13

var result = ++a + ++a - --a + a - a++ + a-- + ++a ;
//            12 +  13 - 12 + 12 - 12 +  13  +  13
//                 13 + 13 + 13
//                   26 + 13
//                      39   Answer


console.log(result);



// Task 2
//      a = 13/14/13/12/13
result = a++ + a + --a  + --a + a++ + a ;
//        13 + 14 + 13  + 12  + 12   + 13;
//           77  Answer
console.log(result);
 

//Task 3
//       a = 13/14/15/14/13/12/13
result = ++a + a++ - --a  - --a + a-- + a++ ;
//        14 + 14 -  14  -   13  + 13 + 12  ;
//         14 + 12
//         26
console.log(result);


