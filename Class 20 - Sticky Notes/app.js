
// var firstName = "Mustafa"
// var lastName = "Shahzad"
// var blackTick = `userName: ${firstName} ${lastName} `
// document.writeln(blackTick)
// var parent = document.getElementById("parent")
// for(var i = 1 ;i <= 10 ; i++){

    // var parentDiv = document.createElement("div")
    // parentDiv.className = "card"
    // parentDiv.style.width = "18rem"

    // // card-body
    // var cardBody = document.createElement()
    // cardBody.className = "card-body"


// var 
// }
// var parent = document.getElementById("parent")
// function cardFunction() {

//     var card = `<div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
// parent.innerHTML += card
// parent.style.display = "flex"
// parent.style.flexWrap = "wrap"
// parent.style.gap = "20px"


// }

var input = document.getElementById("input")
var parent = document.getElementById("parent")
var mainContainer = document.getElementById("mainContainer")
function AddCard() {
    console.log("AddCard");
     

     if(input.value.trim().length < 5){
        alert("Input field Must Contain 5 character")
        return
     }
         console.log(input.value);


         var card = `<div class="card" style="width: 18rem;">
         <div class="img-wrapper">
  <img src="./mountainimage.png" class="card-img-top" alt="...">
  </div>
  <div class="card-body">
    <h5 class="card-title"> ${input.value} </h5>
   
<button class="btn btn-primary mt-3" onclick="edit(this)">Edit</button>
<button class="btn btn-danger mt-3" onclick="del(this)">Delete</button>

 </div>`

parent.innerHTML = parent.innerHTML + card








input.value = ""
}

function DeleteAll() {
    console.log("DeleteAll");
    
// console.log(parent.children) 

// console.log(arrCopy);
parent.innerHTML = ""
}
function del(delBtn) {
    console.log("del");

    
    // console.log(delBtn.parentNode.parentNode);
    delBtn.parentNode.parentNode.remove()
    
}

function edit(editBtn) {
    var parent = editBtn.parentNode;

    // 1️⃣ check if save button already exists
    var existingSave = parent.querySelector(".save-btn");
    if (existingSave) {
        // save button already hai → sirf input replace karenge
        var inputEdit = parent.querySelector(".InputEdit");
        if (!inputEdit) {
            // agar input nahi hai, h5 replace karo
            var h5 = parent.querySelector("h5");
            inputEdit = document.createElement("input");
            inputEdit.className = "InputEdit";
            inputEdit.value = h5.innerText;
            h5.replaceWith(inputEdit);
            inputEdit.focus();
        }
        return; // button already hai, exit
    }

    // 2️⃣ create input field
    var h5 = editBtn.previousElementSibling;
    var inputEdit = document.createElement("input");
    inputEdit.className = "InputEdit";
    inputEdit.value = h5.innerHTML;
    h5.replaceWith(inputEdit);
    inputEdit.focus();

    // 3️⃣ create save button
    var saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.className = "save-btn btn btn-success mt-3";
    parent.append(saveButton);

    // 4️⃣ save logic
    saveButton.onclick = function () {
        var editFinal = document.createElement("h5");
        editFinal.innerHTML = inputEdit.value;
        inputEdit.replaceWith(editFinal);
        // save ke baad button delete karna optional hai
        saveButton.remove();
    };
}





