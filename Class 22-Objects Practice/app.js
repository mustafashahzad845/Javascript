// var  std = {
//     name : "Mustafa",
//     lastName : "Shahzad",
//     age : 15 , 
//     email : "mustafashahzad845@gmail.com"
// }

// console.log(std);

// var myTable = document.getElementById("myTable")
// console.log(myTable , "myTable");

// var stdObj = {

// courses : ["html" , "css" , "js" , "react" , "bootstrap" , "nodeJs"],
// scores : {
//     html : 80,
//     css : 96,
//     js : 95,
// react : 65,
// bootstrap : 53,
// nodeJs : 99
// } 
// }

// var totalNumber = 0;

// for(var i = 0 ; i < stdObj.courses.length ; i++){
// // console.log(stdObj.courses[i] + stdObj.scores[stdObj.courses[i]]);

// var subjectsNames = stdObj.courses[i]
// // console.log(subjectsNames , "subjectNames");
// var subjectScores = stdObj.scores[subjectsNames]
// // console.log(subjectScores);
// // console.log(`${subjectsNames} = ${subjectScores}`);
//  totalNumber += subjectScores
 
// var tableRow = `<tr> 
// <td> ${subjectsNames} </td>
// <td> ${subjectScores} </td>
// </tr>`


// myTable.innerHTML += tableRow
// }

// console.log(totalNumber);
// var lastRow = `<tr> 
// <td>Total</td>
// <td> ${totalNumber} </td>
// </tr>`


// myTable.innerHTML += lastRow


var parent = document.getElementById("parent")
var users = [
     {
      name : "Mustafa",
      email : "mustafa@gmail.com",
      age : 15

    }
,

    {
     name : "Shafay",
      email : "shafay@gmail.com",
      age : 17   
    }
,
 {
     name : "Mahad",
      email : "mahad@gmail.com",
      age : 10   
    }
] 



// for(var i = 0 ; i < users.length ; i++){
//     console.log(users[i]);


//     for(var key of users){
//         console.log(key , "key");
        
//     }
    
// }


// for(var i = 0 ; i < users.length ; i++){
// var card = `<div style="border : 1px solid black;">
// <h1> Name: ${users[i].name} </h1>
// <p> Email:  ${users[i].email}  </p>
// <p> Age: ${users[i].age}  </p>
// </div>`


// parent.innerHTML = parent.innerHTML + card
// }




var user = {
    name : "Mustafa",
    lastName : "Shahzad",

    fullName : function() {
console.log(`fullName : ${this.name} ${this.lastName}`);
var fullName = this.name + this.lastName
return fullName
    }
}


var fl =  user.fullName()
console.log(fl);
