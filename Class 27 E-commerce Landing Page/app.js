let input = document.getElementById("input")
// console.log(input);
let cardRenderParent = document.getElementById("cardRenderParent")

function searchProduct() {
    console.log(input.value);
    if(input.value.trim() === ""){
alert("Please type which item you want")
return
    }

    

}

fetch("https://fakestoreapi.com/products")
.then(function(response){
return response.json()
})

.then(
    function (data) {
        console.log(data);
        
    }
)

.catch(
    function (error) {
console.log(error);

    }
)