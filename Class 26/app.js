// // console.log(1);
// // console.log(2);
// // console.log(3);



// console.log("start");






// // setTimeout(function(){
// // // console.log("2 sec wait");



// // } , 3000)



// // setTimeout(function(){
// // for(var i = 1 ; i <= 10 ; i++){
// //     console.log(i);
    
// // }
// // } , 2000)
// // console.log("End");




// // var interval =  setInterval(function() {
// // console.log("Interval");
// // for(var i = 0 ; i <= 5 ; i++){
// //     console.log(i);
    
// // }
// // } , 1000)



// // setTimeout(function(){
// //     clearInterval(interval)
// // } , 5000)



// // var cardParent = document.getElementsByClassName("cardParent")
// // console.log(cardParent[0]);


// // console.log("start");

// // fetch("https://fakestoreapi.com/products/")

// // .then(
// //     function(response) {
// // console.log(response , "response");
// // return response.json()
// //     }
// // )


// // .then(
// //     function(success){
// //         console.log(success , "success");
// // renderCards(success)
        
// //         function renderCards() {
// // for(var i = 0 ; i < success.length ; i++){
// // console.log(i);

// // // success[i].image.style.width = "100px";
// // var card = `<div class="card" style="width: 18rem;">
// // <p style="text-align : center;">ID : ${success[i].id}</p>
// //   <img src="${success[i].image}" class="card-img-top" alt="...">
// //   <div class="card-body">
// //     <h5 class="card-title">${success[i].title}</h5>
// //     <p class="card-text">${success[i].description}</p>
// //     <a href="#" class="btn btn-primary">Price: ${success[i].price}$</a>
// //   </div>
// // </div>`


// // cardParent[0].innerHTML += card
// // }
// //         }

// //         return success
// //     }
// // )


// // .catch(
// //     function(error){
// // console.log(error , "error");

// //     }
// // )


// // console.log("End");



// // // setTimeout(
// // //     function renderCards(data) {
// // //     console.log("renderCards");
    
// // // for(var i = 0 ; i < success.length ; i++){
// // // console.log(i);
// // // }
// // // } , 2000
// // // )







// // Github API

// fetch("https://api.github.com/repos/octocat/Spoon-Knife/issues")

// .then(
//     function(response){
//         console.log(response , "response");
//         return response.json()
//     }

    
// )


// .then(
//     function(success){
//         console.log(success , "success");
        
//     }
// )