function Add() {
    var input = document.getElementById("input")
    console.log(input.value);

if(input.value === ""){
    alert("Please fill the empty input field")

    return
}

    var listElement = document.createElement("div")
    console.log(listElement);
    var listContainer = document.getElementById("listContainer")

    listContainer.appendChild(listElement)

    var listPara = document.createElement("p")
    listElement.appendChild(listPara)



    listPara.innerHTML = input.value
listPara.className = "listPara"

input.value = ""

    var delButton = document.createElement("button")
    delButton.innerHTML = "Delete"

    delButton.onclick = function() {
        listElement.style.display = "none"
    }

    listElement.className = "listElement"

    delButton.className = "delButton"

    listElement.appendChild(delButton)


   
  


}