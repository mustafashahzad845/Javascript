function gymSystem(){
    var nameInput = document.getElementById("nameInput")
    var nameCaseCheckPara = document.getElementById("nameCaseCheckPara")

    nameCaseCheckPara.style.color = "#000"

    // var inputArr = nameCaseCheckPara.value.split(" ")
    // console.log(inputArr);
    
    var nameInputArr = nameInput.value.split(" ")
    console.log(nameInputArr);
    var arr = []

var str = "Mustafa"

    for(var i = 0 ; i < nameInput.value.length ; i++){

var nameInputArr2 = nameInputArr.slice(i , i+2)
console.log(nameInput.value.slice(i , i + 2));

var word = nameInputArr.slice(0 , 1).toUpperCase() + nameInputArr.slice(1).toLowerCase()
arr.push(word)

if(nameInput.value.slice(i , i + 2) === "  "){
    console.log(i);


    alert("Double space not allow")
return
}


    }



        nameCaseCheckPara.innerHTML = "Original userName: "  + nameInput.value

        var capitializePara = arr.join(" ")
        nameCaseCheckPara.innerHTML = "username: " + nameInput.value
}
