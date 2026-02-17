function getData() {
var myTable = document.getElementById("myTable") 
var formContainer = document.getElementById("formContainer")
var nameInput = formContainer.firstElementChild.nextElementSibling
// console.log(nameInput);
var emailInput = formContainer.firstElementChild.nextElementSibling.nextElementSibling
// console.log(emailInput);
var skillsInput = formContainer.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(skillsInput);
var addressInput = formContainer.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(addressInput);

// console.log(nameInput.value);
// console.log(emailInput.value);
// // console.log(skillsInput.value);
// console.log(addressInput.value);


if(addressInput.value == addressInput.firstElementChild.value || skillsInput.value == skillsInput.firstElementChild.value){
    alert("Please fill all fields properly")
    return
}
if(nameInput.value.trim().length < 4 || emailInput.value.trim().length < 6  || addressInput.value.trim() <4){
    alert("Please fill all fields properly")
return
}


var userDataObj = {
    name : nameInput.value ,
    email : emailInput.value,
    skills : skillsInput.value,
    address : addressInput.value  
}
// console.log(userDataObj , "userDataObj");

var tableRow = `<tr>
<td> ${userDataObj.name} </td>
<td> ${userDataObj.email} </td>
<td> ${userDataObj.skills} </td>
<td> ${userDataObj.address} </td>
</tr>`

myTable.innerHTML += tableRow

nameInput.value = ""
emailInput.value = ""
skillsInput.value = skillsInput.firstElementChild.value
addressInput.value = addressInput.firstElementChild.value

// console.log(skillsInput);
return tableRow
}



