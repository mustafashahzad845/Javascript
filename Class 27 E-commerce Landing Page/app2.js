var cardRenderParent = document.getElementById("cardRenderParent")
var input = document.getElementById("input")
var userRequest;
var flag = false
function searchProduct() {

if(input.value){
  userRequest = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase()
}else{
    userRequest = ""
}