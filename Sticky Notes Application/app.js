var input = document.getElementById("input")
var cardParent = document.getElementById("cardParent")

function addCard() {

if(input.value.trim().length < 3){
    alert("Input Field Must contain 3 letters")
    return
}

    var card = `<div class="card" style="width: 18rem;">
  <img src="https://javascript-lsor.vercel.app/mountain-img.png" class="card-img-top" alt="Card Image">
  <div class="card-body">
    <h5 class="card-title">${input.value}</h5>
    <div id="buttonParent" class=" d-flex mt-2" style="gap: 8px">
<button class="btn btn-primary" onclick=editCard()>Edit</button>
<button class="btn btn-danger" onclick=deleteCard(this)>Delete</button>
<button class="btn btn-warning">Save</button>
    </div>

  </div>
</div>`

cardParent.innerHTML += card

input.value = ""

}


function delAll() {

    console.log("delAll");
    
    cardParent.innerHTML = ""

   
}


function deleteCard(delBtn) {
console.log(delBtn.parentElement.parentElement.parentElement);
var thisCard = delBtn.parentElement.parentElement.parentElement
thisCard.remove()
}