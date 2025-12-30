var fruits = ["apple", "mango", "banana", "peach", "orange", 0, 4, 43, 2, 5, 3, 23, 32, 12]

// === Array Methods === 

// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()
// fruits.pop()

// fruits.push("cherry" , "my fruits")


// fruits.shift()
// fruits.shift()
// fruits.shift()


// fruits.unshift("my fruits")
// fruits.unshift("start")



// var newArr;





// newArr = fruits.slice(-5 , 13)
// console.log("Fruits Length" , fruits.length);



// console.log(newArr, "new arr");

// fruits.splice(3 , 3)
// fruits.splice(5 , 3)

// fruits.splice(3 , 1 , "my numbers")

// fruits.splice(4 , 4)
// console.log(fruits);






// === For Loop === //

// document.writeln("2 x 1 = 2" , "<br/>")
// document.writeln("2 x 2 = 4" , "<br/>")
// document.writeln("2 x 3 = 6" , "<br/>")
// document.writeln("2 x 4 = 8" , "<br/>")
// document.writeln("2 x 5 = 10" , "<br/>")
// document.writeln("2 x 6 = 12" , "<br/>")
// document.writeln("2 x 7 = 14" , "<br/>")
// document.writeln("2 x 8 = 16" , "<br/>")
// document.writeln("2 x 9 = 18" , "<br/>")
// document.writeln("2 x 10 = 20" , "<br/>")

// for(var i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

// for(var i = 1 ; i <= 200 ; i = i + 2){
//     console.log(i);
    
// }


// for(var i = 1; i <= 15 ; i++){
//     document.writeln("2 x " + i + " = " + i*2 + "<br />");
    
// }

// var tableNumber = +prompt("Enter table Number")
// for(var i = 1 ; i<= 12 ; i++){
//     document.writeln(tableNumber ,"x" , i , "=" , i*tableNumber , "<br />")
// }

























var tableNumber = +prompt("Enter table number")
var tableStartingNumber = +prompt("Enter table starting number")
var tableEndingNumber = +prompt("Enter table ending number")

for(var i = tableStartingNumber ; i<=tableEndingNumber ; i++){
    document.writeln(tableNumber + " x " + i + " = " + i * tableNumber + "<br />");
    
}