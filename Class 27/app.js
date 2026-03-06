// console.log("start");


// setTimeout(
//     function() {
// for(var i = 0 ; i <  100 ;i++){
//     console.log(i);
    
// }

//     } , 1000
// )

// console.log("end");




fetch("https://fakestoreapi.com/products")
.then(
    function(jawab) {
var returnAPI  = jawab.json()

return returnAPI
    }
)


.then(
    function (sahi) {
console.log(sahi , "sahi");

var parent =  document.getElementById("parent")
for(var products of sahi){
console.log(products);


parent.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${products.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products.title}</h5>
    <p class="card-text">${products.description}</p>
    <a href="#" class="btn btn-primary">${products.price}</a>
    <p class=align-center> ${products.id} </p>
  </div>
</div>`
}


    }
)

.catch(
    function(galat){
console.log(galat , "galat");

    }
)





