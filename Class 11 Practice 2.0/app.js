// var user = "mUsTaFA"
// console.log(user.toLocaleLowerCase());
// console.log(user.toLocaleUpperCase());


// console.log("Capitialize" , user[0].toUpperCase() + user.slice(1).toLocaleLowerCase());

// var  str = "My   name is    Mustafa"

// for(var i= 0 ; i < str.length ; i++){

    
//     if(str.slice(i , i  + 2) == "  "){
//         alert("DOuble space not allow")
//         break
//     }

//     console.log(str.slice( i , i + 2));

    
// }

// var users = ["Mustafa" , "Shahzad" , "Ali" , "Raza"]
// var isMatch = false
// var userInput = prompt("Enter your name")
// var userFianl = userInput[0].toLocaleUpperCase() + userInput.slice(1).toLowerCase()
// console.log(userFianl);

// for(var i = 0 ; i < users.length ; i++){

//     if(users[i] === userFianl){
//         document.writeln("Welcome" + userFianl);
//         isMatch = true

//         break
//     }
// }

// if(isMatch == false) {
// alert("Not Welcome")
// }


var str = "sAylANi"

var firstLetter = str[0].toLocaleUpperCase()
console.log("First Letter" , firstLetter);

var remainingWords = str.slice(1).toLowerCase()
console.log("Remaining Words" , remainingWords);


var finalWord = firstLetter + remainingWords
console.log(finalWord);

