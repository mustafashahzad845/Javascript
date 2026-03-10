// // alert("Hello World")

// // var h1Elem =  document.getElementsByTagName("h1")


// // console.log(h1Elem);

// // h1Elem[0].style.color = "green"
// // h1Elem[1].style.color = "blue"
// // h1Elem[2].style.color = "red"



// function nextPage() {
//     location.href = "./about.html"
//     console.log(location.href);
    
//     // location.assign("./about.html") 
//     // location.replace("./about.html")
// }

// function BackPage() {
//     location.href = "./index.html"
// // location.assign("./index.html")
// // location.replace("./index.html")
// }

// // if(window.innerHeight < "600px"){
// // window.style.background = "black"
// // }


// // var btn = document.getElementById("btn")

// // function mouseEffect() {
// // // btn.disabled = false

// // if(btn.disabled == true){
// // btn.disabled = false
// // }else{
// //     btn.disabled = true
// // }

// // }


// function showProducts() {
// fetch("https://fakestoreapi.com/products/")
// .then(
//     function(response){
// return response.json()
//     }
// )


// .then(
//     function (data){
//         console.log(data);
        

// var cardParent = document.getElementById("cardParent")


// for(var products of data){
// // console.log(products);

// var card = `<div class="card" style="width: 18rem;">
//   <img src="${products.image}" style="width : 200px ; text-align : center ;" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${products.title}</h5>
//     <p class="card-text>${products.description}</p>
//     <a href="#" class="btn btn-primary">$${products.price}</a>
//   </div>
// </div>
// `
// cardParent.innerHTML += card
// }


//     }
// )

// .catch(
//     function (error) {
// console.log(error);

//     }
// )
// }


// console.log("start");


// setTimeout(
//     function () {
// console.log("Wait");

//     } , 3000
// ) 

// console.log("end");




// console.log("start");
// for(var i = 1 ; i <= 10000000 ; i++){
// // console.log(i);

// }
// console.log("end");



// setTimeout(
//     function () {
//         console.log("Exeute");
        
//     },2000
// )


// var sec = 0;

//   var  Interval =  setInterval(
//      function () {
// // console.log("Execute");
// sec++
// console.log(sec);

//     } , 1000 

// )

// console.log(sec);



// setTimeout(
//     function () {
// clearInterval(Interval)
//     } , 5000
// )



// function Obj(name , country , age) {
// this.name = name,
// this.country = country,
// this.age = age
// }

// var values = [
//     new Obj("Mustafa", "Pakistan", 16),
//     new Obj("Shafay", "China", 15),
//     new Obj("Mahad", "Bangladesh", 11),
// ]

// console.table(values)


