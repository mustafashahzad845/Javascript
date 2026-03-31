var userTurn = 0;
var alltdElem = document.getElementsByTagName("td")
var tr1 = document.getElementById("tr1")
var tr2 = document.getElementById("tr2")
var tr3 = document.getElementById("tr3")


function allClickAttributeRemove(){
    tr1.children[0].removeAttribute("onclick")
tr1.children[1].removeAttribute("onclick")
tr1.children[2].removeAttribute("onclick")
tr2.children[0].removeAttribute("onclick")
tr2.children[1].removeAttribute("onclick")
tr2.children[2].removeAttribute("onclick")
tr3.children[0].removeAttribute("onclick")
tr3.children[1].removeAttribute("onclick")
tr3.children[2].removeAttribute("onclick")
}

function clickFun(td) {
    userTurn++

if(userTurn % 2 !== 0){
    td.innerText = "X"
    td.style.color = "red"


// --- 1st Pattern ---

    if((alltdElem[0].innerHTML === "X" && alltdElem[1].innerHTML === "X" && alltdElem[2].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerText = "0"
    td.style.color = "blue"

    if(  (alltdElem[0].innerHTML === "0" && alltdElem[1].innerHTML === "0" && alltdElem[2].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}




//  --- 2nd Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[3].innerHTML === "X" && alltdElem[4].innerHTML === "X" && alltdElem[5].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[3].innerHTML === "0" && alltdElem[4].innerHTML === "0" && alltdElem[5].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}








//  --- 3rd Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[6].innerHTML === "X" && alltdElem[7].innerHTML === "X" && alltdElem[8].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[6].innerHTML === "0" && alltdElem[7].innerHTML === "0" && alltdElem[8].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}


//  --- 4th Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[0].innerHTML === "X" && alltdElem[3].innerHTML === "X" && alltdElem[6].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[0].innerHTML === "0" && alltdElem[3].innerHTML === "0" && alltdElem[6].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}





//  --- 5th Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[1].innerHTML === "X" && alltdElem[4].innerHTML === "X" && alltdElem[7].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[1].innerHTML === "0" && alltdElem[4].innerHTML === "0" && alltdElem[7].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}



//  --- 6th Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[2].innerHTML === "X" && alltdElem[5].innerHTML === "X" && alltdElem[8].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[2].innerHTML === "0" && alltdElem[5].innerHTML === "0" && alltdElem[8].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}



//  --- 7th Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[0].innerHTML === "X" && alltdElem[4].innerHTML === "X" && alltdElem[8].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[0].innerHTML === "0" && alltdElem[4].innerHTML === "0" && alltdElem[8].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}




//  --- 8th Pattern ---



if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if((alltdElem[2].innerHTML === "X" && alltdElem[4].innerHTML === "X" && alltdElem[6].innerHTML === "X")){
        
        // console.log(alltdElem.parentNode)
alert("You Win")
allClickAttributeRemove()
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"

    if(  (alltdElem[2].innerHTML === "0" && alltdElem[4].innerHTML === "0" && alltdElem[6].innerHTML === "0")){
alert("You Win")
allClickAttributeRemove()

    }

}

    // console.log("clickFun" , td);

td.removeAttribute("onclick")


return td

}



