// var myTable = document.getElementById("myTable")
// var totalScore = 0;
// var std = {
//     name : "Mustafa",
//     fatherName : "Shahzad" , 
//  subjects : ["html" , "css" , "js" , "react" , "nodejs"],
//  scores : {
// html : 70,
// css :  85,  
// js : 65,
// react : 40,
// nodejs : 95
//  },

//  finalScore : function() {

//  }
// }


// var loopLength = std.subjects.length

// for(var i = 0 ; i < loopLength ; i++ ){
//     // console.log(std.subjects[i]);

//     var subjectsName = std.subjects[i];
//     var subjectScores = std.scores[subjectsName]
//     // console.log(subjectScores);
//     totalScore += std.scores[subjectsName]
// // console.log(totalScore);


// var tableRow = `<tr> 
// <td> ${subjectsName} </td>
// <td> ${subjectScores} </td>
// </tr>`

// myTable.innerHTML += tableRow




// }


// var tableLastRow = `<tr>
// <td>Total</td>
// <td> ${totalScore} </td>
// </tr>`

// myTable.innerHTML += tableLastRow

// console.log(totalScore);

// console.log(std);



// var user = {
//     name : "Mustafa",
//     lastName : "Shahzad",
//     fullName : function() {
//         console.log(`${user.name} ${user.lastName}`);
//         // return fullName

//         var fullName = `${user.name} ${user.lastName}`
//         return fullName
//     }
// }

// var finalName =  user.fullName()
// console.log(finalName);












// var users = [
//     {
// name : "Mustafa",
// email : "mustafa@gmail.com",
// address : {
//     city : "Karachi",
//     country : "Pakistan"
// },
// skill : ["html" , "css" , "bootstrap","github" , "js"]

// },

// {
// name : "Shahzad",
// email : "shahzad@gmail.com",
// address : {
//     city : "Karachi",
//     country : "Pakistan"
// },
// skill : ["html" , "css" , "nodejs","github" , "js"]
// } ,

// {
// name : "Mahad",
// email : "mahad@gmail.com",
// address : {
//     city : "Karachi",
//     country : "Pakistan"
// },
// skill : ["html" , "css" , "nodejs","github" , "js"]
// } ,

// {
// name : "Jaffar",
// email : "jaffar@gmail.com",
// address : {
//     city : "Karachi",
//     country : "Pakistan"
// },
// skill : ["html" , "css" , "nodejs","github" , "js"]
// }


// ]

// console.log(users[0],users[1]);


// var parent = document.getElementById("parent")

// for(var i = 0 ;  i < users.length ; i++){
//     var card = `<div style="border : 1px solid black ; margin : 20px 12px">
//     <h1>Name: ${users[i].name} </h1>
//     <p>Email: ${users[i].email} </p>
//     <p>Address: ${users[i].address["city"]} , ${users[i].address["country"]} </p>
//     <p>Skills: ${users[i].skill} </p>
//     </div>`

// parent.innerHTML += card 

// }






// console.log(user2);


// console.log(user.skill[2]);

// function getData() {
// var myTable = document.getElementById("myTable") 
// var formContainer = document.getElementById("formContainer")
// var nameInput = formContainer.firstElementChild.nextElementSibling
// console.log(nameInput);
// var emailInput = formContainer.firstElementChild.nextElementSibling.nextElementSibling
// console.log(emailInput);
// var skillsInput = formContainer.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(skillsInput);
// var addressInput = formContainer.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(addressInput);

// console.log(nameInput.value);
// console.log(emailInput.value);
// console.log(skillsInput.value);
// console.log(addressInput.value);


// if(addressInput.value == addressInput.firstElementChild.value || skillsInput.value == skillsInput.firstElementChild.value){
//     alert("Please fill all fields properly")
//     return
// }
// if(nameInput.value.trim().length < 4 || emailInput.value.trim().length < 6  || addressInput.value.trim() <4){
//     alert("Please fill all fields properly")
// return
// }


// var userDataObj = {
//     name : nameInput.value ,
//     email : emailInput.value,
//     skills : skillsInput.value,
//     address : addressInput.value  
// }
// console.log(userDataObj , "userDataObj");

// var tableRow = `<tr>
// <td> ${userDataObj.name} </td>
// <td> ${userDataObj.email} </td>
// <td> ${userDataObj.skills} </td>
// <td> ${userDataObj.address} </td>
// </tr>`

// myTable.innerHTML += tableRow

// nameInput.value = ""
// emailInput.value = ""
// skillsInput.value = skillsInput.firstElementChild.value
// addressInput.value = addressInput.firstElementChild.value

// // console.log(skillsInput);
// return tableRow
// }



// var car = {
//     color : "white",
//     model : 500 , 
//     weight : "850kg",
//     name : "Supra",
//     fullName : function() {
//         console.log(`${this.name} ${this.model}`);
        
//     }
// }


// car.fullName()


// console.log(car);
