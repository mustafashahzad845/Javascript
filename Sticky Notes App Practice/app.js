var parent = document.getElementById("parent")
var input = document.getElementById("input")
var h5InputElem = document.createElement("input")
function addCard() {
    // console.log("Add Card");
    // console.log(input.value);
    

if(input.value.trim() < 3){
    alert("Input FIeld Must Contain 3 letters")
    return;
}

var card = `<div class="card" style="width: 18rem;margin-bottom : 20px">
  <img src="./mountain-img.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${input.value}</h5>
    <button class="btn btn-success" onclick="editdata(this)">Edit</button>
    <button class="btn btn-danger" onclick="deleteIndv(this)">Delete</button>
    <button class="btn btn-warning" onclick="saveData(this)">Save</button>
    
  </div>
</div>
`


parent.innerHTML += card




input.value = ""
}


function delAll() {
    parent.innerHTML = ""
}


function deleteIndv(btn) {
// console.log(btn);

// console.log(btn.parentNode.parentNode)
var  cardelem = btn.parentNode.parentNode
cardelem.remove()
}

function editdata(element) {
// console.log(element.previousElementSibling);
var h5Elem = element.previousElementSibling
// console.log(h5Elem.innerHTML)
// var h5InputElem = document.createElement("input")
// var replaceElem =  h5Elem.replaceWith("h5InputElem")
// console.log(replaceElem);

h5Elem.replaceWith(h5InputElem)
h5InputElem.value = h5Elem.innerHTML
h5InputElem.style.width = "100%"
h5InputElem.style.margin = "10px 0 20px"

h5InputElem.style.borderRadius = "8px"
h5InputElem.style.outline = "none"
h5InputElem.style.border = "1px solid #d3d3d3"
}

function saveData(element) {
// console.log(element);
var h5Elem = element.previousElementSibling.previousElementSibling.previousElementSibling
// console.log(h5Elem);
var finalElem = document.createElement("h5")
 h5Elem.replaceWith(finalElem)

finalElem.innerHTML = h5Elem.value

finalElem.style.margin = "10px 0 20px"

}