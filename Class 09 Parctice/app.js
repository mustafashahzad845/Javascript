// for ( var i = 100 ; i >= -100 ; i--){
//     console.log(i);

// }

// var startingNumber = +prompt("Enter Starting Number")
// var endingNumber = +prompt("Enter Ending Number")
// var forward_backward = prompt("Which type of counting you want?  Forward or Backward").trim()


// if(forward_backward === "Forward" || forward_backward === "forward"){

//     for(var i = startingNumber ; i <= endingNumber ; i++) {
// document.writeln("Forward Counting " ,i , "<br />")
//     }
// }else if (forward_backward === "Backward" || forward_backward === "backward") {

//     for(var i = startingNumber ; i >= endingNumber ; i--) {
//         document.writeln("Backward Counting " , i , "<br />")
//     }
// }







































// var startingNumber = +prompt("Enter starting Number")
// var endingNumber = +prompt("Enter ending Number")
// var forward_backward = prompt("Which type of counting you want?   Forward or Backward")


// if (forward_backward === "Forward" || forward_backward === "forward") {

//     for (var i = startingNumber; i <= endingNumber; i++) {
//         document.writeln("Forward Coutning ", i, "<br />")
//     }


// } else if (forward_backward === "Backward" || forward_backward === "backward"){

// for ( var i = startingNumber ; i >= endingNumber; i-- ) {
//         document.writeln("Backward Coutning ", i, "<br />")

// }

// }










// var startingNumber = +prompt("Enter starting number")
// var endingNumber = +prompt("Enter ending number")
// var forward_backward = prompt("Which type of counting you want? Forward or Backward").trim()
// var even_odd_normal = prompt("Which type of number you want? Even , Odd , Normal").trim()

// if(forward_backward ===  "Forward" || forward_backward === "forward"){

//     for(var i = startingNumber ; i <= endingNumber ; i++){

//         if(even_odd_normal === "Even" || even_odd_normal === "even"){

//             if(i % 2 === 0){
//                 document.writeln("Forward Counting(Even Nubmer) " , i , "<br />")
//             }
//         }else if(even_odd_normal === "Odd" || even_odd_normal === "odd"){

//             if(i % 2 === 1){
//                 document.writeln("Forward Counting(Odd Number) " , i , "<br />")
//             }
//         }else if(even_odd_normal === "Normal" || even_odd_normal === "normal"){
//             document.writeln("Forward Counting" , i , "<br />")
//         } 
//     }
// }else if(forward_backward === "Backward" || forward_backward === "backward"){

//     for(var i = startingNumber ; i>= endingNumber ; i--) {

//        if(even_odd_normal === "Even" || even_odd_normal === "even"){

//         if(i % 2 === 0){
//            document.writeln("Backward Counting(Even Number) " , i , "<br />")
//         }
//        }else if(even_odd_normal === "Odd" || even_odd_normal === "odd"){

//          if(i % 2 === 1){
//             document.writeln("Backward Counting(Odd Number)" , i , "<br />")
//          }

//        }else if (even_odd_normal === "Normal" || even_odd_normal === "normal" ){
//         document.writeln("Backward Counting" , i , "<br />")
//        }

//     }
// }












// var startingNumber = prompt("Enter starting number")
// var endingNumber = prompt("Enter ending number")
// var forward_backward = prompt("Which type of counting you want?  Forward or Backward").trim()
// var even_odd_normal = prompt("Which type of numbers you want?   Even , Odd , Normal").trim()

// if (forward_backward === "Forward" || forward_backward === "forward") {

//     for (var i = startingNumber; i <= endingNumber; i++) {

//         if (even_odd_normal === "Even" || even_odd_normal === "even") {

//             if (i % 2 === 0) {
//                 document.writeln("Forward Counting", "(Even Number)", i , "<br />")
//             }
//         } else if (even_odd_normal === "Odd" || even_odd_normal === "odd") {

//             if (i % 2 === 1) {
//                 document.writeln("Forward Counting", "(Odd Number)", i , "<br />")
//             }
//         } else if (even_odd_normal === "Normal" || even_odd_normal === "normal") {

//             document.writeln("Forward Counting", i , "<br />")
//         }
//     }
// } else if (forward_backward === "Backward" || forward_backward === "backward") {

//     for (var i = startingNumber ; i >= endingNumber ; i--) {

//         if(even_odd_normal === "Even" || even_odd_normal === "even"){

//             if(i % 2 === 0){
//                 document.writeln("Backwrad Counting" , "(Even Number)" , i , "<br />")
//             }
//         }else if (even_odd_normal === "odd" || even_odd_normal === "odd"){

//             if(i % 2 !== 0){
//                 document.writeln("Backward Counting" , "(Odd Number)" , i , "<br />")
//             }
//         }else if (even_odd_normal === "Noraml" || even_odd_normal === "normal"){
//             document.writeln("Backward Counting" , i , "<br />")
//         }
//     } 
// }














// var users = ["Mustafa" , "Shahzad" , "Jaffar" , "Aman" , "Bilal"]
// var nameCheck = prompt("Enter Username")
// var isMatch = "value not found"
// for (var i = 0 ; i < users.length ; i++){
    
//     if(nameCheck === users[i]){
//         alert("Welcome😊")
//         // console.log("Value Found");
//         isMatch = "Value found"
//     }
// }

// if(isMatch === "value not found"){
//     alert("not welcome")
// }

// console.log(isMatch);




// var startingReading = +prompt("Enter Starting Reading")
// var endingReading = +prompt("Enter Ending Reading")
// var mode = prompt("Enter Reading Mode     Normal , High, Low")


// for (var i = startingReading ; i <= endingReading ; i++){

//     if(mode === "Normal" || mode === "normal"){
//         document.writeln("Normal Reading" , i , "<br />")
//     }else if(mode=== "High" || mode === "high"){
        
//         if(i > 10 && i % 2 === 0) {
//          document.writeln("High Reading" , i , "<br />")
//         }
//     }else if(mode === "Low" || mode === "low" ){

//         if(i < 10 && i % 2 !== 0){
//             document.writeln("Low Reading" , i , "<br />")
//         }
//     }
// }























// for(var i = startingReading ; i <= endingReading; i++){

//     if(mode === "Normal" || mode === "normal"){
//         document.writeln("NormalReading",i)
//     }else if(mode === "High" || mode === "high"){

//         if(i % 2 === 0 & i>10){
//                     document.writeln("HighReading",i)

//         }
//     }else if(mode === "Low" || mode === "low"){
       
//         if(i % 2 !== 0 && i < 10){
//             document.writeln("LowReading" , i)
//         }
//     }
// }





// for (var i = 1 ; i <= 10 ; i++){
    
//     console.log(i);

//     if (i === 5) {
//         break
//     }
    
// }



// for(var i = 1 ; i <= 40 ; i++){

//     if (i === 5 || i == 10 || i== 15  || i== 20 || i==25 || i==30 || i== 35 || i==40 || i== 45 || i==50 ) {
         
//         continue
        
        
//     }

//     console.log(i);
    
// }



// for (var i = 100 ; i >= 1 ; i--){
//     console.log(i);
    
// }