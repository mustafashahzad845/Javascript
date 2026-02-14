// var firstName = `Mustafa`
// var lastName = `Shahzad`

// console.log(`Username: ${firstName} ${lastName}`);


// var parent = document.getElementById("parent")
// var h1Element = document.createElement("h1")
// console.log(h1Element);

// var childText = document.createTextNode(`Hello World`)
//  h1Element.append(childText)

// parent.append(h1Element)  



var parent = document.getElementById("parent")
var userInput = document.getElementById("userInput")

function addData(){
console.log(userInput.value);

if(userInput.value.trim().length <5){
    alert(`Input field must contain 5 characters`)
    return
}

var card = `<div class="card-container">
<div class="deleteBtn-EditBtnParent">

</div>
<div class="text-Container">

</div>
</div>`



parent.append(card)
}

