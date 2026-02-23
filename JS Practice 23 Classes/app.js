// function StdObj(stdName , email , age , status) {
// //    var std1 = new this.StdObj(name, email, age)
// this.name = stdName;
// this.email = email;
// this.age = age
// this.status = status

// }

// var object = [
//     new StdObj("Mustafa" , "mustafashahzad845@gmail.com" , 15),
//     new StdObj("Shafay" , "shafay@gmail.com" , 17 , "Active")
// ]

// console.log(object);



// var students = {
//     name : "Mustafa" , 
//     age : 15 ,
//     country : "Pakistan",
//     religion : "Islam",
//     email : "mustafashahzad845@gmail.com"
// }


// console.log(students);




// for(var keys in students){
// // console.log(students[keys]);
// console.log(`${keys} : ${students[keys]},`);

// }


// var table = document.getElementById("table")
// console.log(table);


// var Obj = {
//     courses : ["html" , "css" , "javascript" , "bootstrap" , "github"],
//     scores : {
//         html : 70,
//         css : 90 ,  
//         javascript : 84,
//         bootstrap : 69 , 
//         github : 98
//     }
// }

// var loopLength =  Obj.courses.length
// var totalScore  = 0;
// console.log(totalScore);

// for(var i = 0 ; i  <  loopLength; i++){
// // console.log(i);
// // console.log(Obj.courses[i]);

// var courses = Obj.courses[i]
// var scores = Obj.scores[courses]

// totalScore += scores

// console.log(`${courses} : ${scores}`);

// var tableRow = `<tr>
// <td>${courses}</td>
// <td>${scores}</td>
// </tr>`


// table.innerHTML += tableRow


// var lastRow = `<tr>
// <td>Total</td>
// <td>${totalScore}</td>
// </tr>`


// }
// table.innerHTML += lastRow


// console.log(Obj);





// var stdObj = {
//  name : "Mustafa" , 
//  age : 15,
//  country : "Pakistan" , 
//  email : "mustafashahzad845@gmail.com"
// }

// stdObj.religion = "Islam"


// delete stdObj.email 


// console.log("age" in stdObj);


// console.log(stdObj);




var userObj = {
    name : "Mustafa",
    email : "mustafashahzad845@gmail.com",
    rehaish : {
        city : "Karachi",
        country : "Pakistan" 
    }

,
    address : function() {
        
    }
}