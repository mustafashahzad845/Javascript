// console.log("kArachi".slice());
// var str = "sAYlANi"
// console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());

var cardRenderParent = document.getElementById("cardRenderParent")
// console.log(cardRenderParent);


var input = document.getElementById("input")
// console.log(input);

var userRequest;



var flag = false

function searchProduct() {

if(input.value){
  userRequest = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase()
}else{
    userRequest = ""
}


// console.log(userRequest);

    // console.log("searchProduct");
    // console.log(userRequest);

// console.log(input.value);


fetch("https://fakestoreapi.com/products")
.then(function(response){
return response.json()
})

.then(function(data){
console.log(data);

// console.log(data.indexOf("Cotton"));

// for(var key in data){
// console.log(key);

// }
// cardRenderParent.innerHTML = ""
for(var i = 0 ; i < data.length ; i++){
// console.log(i);


var card = `<div class="card">
    <p class="card-id">id : ${data[i].id}</p>
    <div class="Image-top">
<img src=${data[i].image} style=width : 200px>
    </div>

    <div class="card-body">
<h3 class="card-title">${data[i].title}</h3>

<div class="card-star">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
</div>

<p class="card-price">$${data[i].price}</p>

<div class="card-cart-icon">
    <i class="fa-solid fa-cart-shopping"></i>
</div>

    </div>

    
</div>`

// cardRenderParent.innerHTML += card


if(userRequest.trim() == ""){

    cardRenderParent.innerHTML += card
    

}else if(data[i].title.includes(userRequest)){
cardRenderParent.innerHTML += card
flag = true
}



for(var key in data[i]){
console.log(`${key} : ${data[i][key]}`);





// if(data[i].title.includes(userRequest)){
// alert("Mujood hai")

// flag = true

// cardRenderParent.innerHTML += card



// }

}

}



if(flag == false && userRequest !== ""){
    cardRenderParent.innerHTML = "Product Not Found"
}

})


.catch(function(error){
console.log(error);

})

}





























var cardRenderParent = document.getElementById("cardRenderParent")
var input = document.getElementById("input")
var userRequest;
var flag = false