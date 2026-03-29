// alert("Hello World");
// console.log(window.location);


// function changePage() {
// window.location.href = "./about.html"
// window.location.assign("./about.html")
// window.location.replace("./about.html")
// }

// for(var i = 1 ; i <= 3 ; i ++){
// console.log(i , "Outer Loop");

// for(var j = 21 ; j <= 40 ; j++){
// console.log(j , "Inner Loop");

// }

// }



//  var fbWind;
// function  newWindow() {
//    fbWind =  window.open("https://www.facebook.com/mustafa.shahzad.7547/"  , "facebook Window" , "width=600,height=600")
// console.log(fbWind);

// // fbWind.style.margin = "0 auto"

// }




// for(var i = 1 ; i <= 3 ; i++){

// console.log("Outer Loop");


//     for(var j = 1 ; j <= 2 ; j++){
// console.log("Inner Loop");

//     }
// }



// Switch Statement
// var age = 19;

// switch (age) {

//     case 10:
//         console.log("Allow 10");
//         break

//     case 18:
//         console.log("Allow 18");
//         break
//     case 20:
//         console.log("Allow 20");
//         break

//     default:
//         console.log("not allow");
//         break

// }





// var dayOfWeek = prompt("Which day of the week is today?")

// switch (dayOfWeek) {
//     case "Saturday":
//         alert("Wah")
//         break
//     case "Sunday":
//         alert("Wah")
//         break

//     case "Friday":
//         alert("Chalo Short time hoga")
//         break

//     default:
//         alert("Phas gae")
// }






// var i = 1;

// while (i <= 10) {

// console.log(i);

// i++
// }



// for(var i = 1  ;i <= 10 ;i++){
//  console.log(i , "For Loop");

// }

// console.log(" --- Separate ---");



// var i = 1
// while (i <= 10) {
// console.log(i , "While loop");
// i++
// }



// var i = 1

// do{
// console.log(i);
// i++
// }while(i <= 0)





// var cities = {
//     Sindh : ["Karchi" , "Hyderabad"],
//     Punjab : ["Lahore" , "Multan"],
//     K_P_K : ["Peshawar" , "Azad Kashmir"] , 
//     Quetta : ["Blochistan" , "Murree"] , 
//     GilgitBaltistan : ["Sawat" , "Naran"]

// }


// console.log(cities);





// 2D Array

// var numbers = [[1 , 2] , [3 , 4]  , [5 , 6]]
// console.log(numbers);
// console.log(numbers[0][1]);




// function Std(name , age , city , email) {
//     this.name = name,
//     this.age = age,
//     this.city = city,
//     this.email = email
// }


// var students = [
//     new Std("Muhammad Shafay", 17, "Karachi" , "muhammadshafayshahzad@gmail.com"),
//     new Std("Ghulam Mustafa", 16, "Karachi" , "ghulammustafashahzadattari@gmail.com"),
//     new Std("Muhammad Mahad", 11, "Karachi"),
//     new Std("Muhammad Ahmad", 8, "Karachi")
// ]


// console.log(students);






var parent = document.getElementById("parent")


var stds = [
    {
        name: "Ghulam Mustafa",
        age: 16,
        city: "Karachi",
email : "ghulammustafa@gmail.com"
    }, {
        name: "Muhammad Shafay",
        age: 17,
        city: "Karachi",
        email: "muhammadshafayshahzad@gmail.com"

    }, {
        name: "Muhammad Mahad",
        age: 11,
        city: "Karachi",
        email: undefined
    }
]

// console.log(stds[0].name);






// for (var i = 0; i < stds.length; i++) {
//     var card = ` <div style="border: 1px solid black;">
//  <p>Name : ${stds[i].name}</p>
//  <p>Email : ${stds[i].email}</p>
//  <p>age : ${stds[i].age}</p>
//  <p>city : ${stds[i].city}</p>
//  </div>`

// parent.innerHTML += card


// }


var cardParent = document.getElementById("cardParent")

fetch("https://fakestoreapi.com/products")
.then(
    function (response) {
return response.json()
    }
)


.then(
    function (succeess) {
console.log(succeess);


for(var i = 0 ; i < succeess.length ; i++){
console.log(i);


var card = `<div class="card" style="width: 18rem;">
  <img src=${succeess[i].image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${succeess[i].title}</h5>
    <p class="card-text">${succeess[i].description}</p>
    <a href="#" class="btn btn-primary">$${succeess[i].price}</a>
  </div>
</div>
`

cardParent.innerHTML += card

}



    }
)


.catch(
    function (error) {
console.log(error);

    }
)