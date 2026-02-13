    var parent = document.getElementById("parent")


function cardFunction() {
    var input = document.getElementById("input")
    var image = document.getElementById("image")
console.log(parent);
var card = `<div class="card" style="width: 18rem;">
 <!---  <img src="..." class="card-img-top" alt="..."> ---->
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="Javascript:void(0)" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

// parent.innerHTML += card

console.log(input.value);
console.log(image.type );
console.log(image.files);

// image.src = URL.createObjectURL(image.files[0])

// // parent.innerHTML += image.src
// var imageElem = document.createElement("img")
// imageElem.style.width = "300px"
// imageElem.style.height = "300px"
// imageElem.src = image.src
// console.log(imageElem);


// parent.append(imageElem) 


}