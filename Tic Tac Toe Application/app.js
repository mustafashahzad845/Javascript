var userTurn = 0;
var alltdElem = document.getElementsByTagName("td")
function clickFun(td) {
    userTurn++

if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"

    if(alltdElem[0].innerHTML === "X" && alltdElem[1].innerHTML === "X" && alltdElem[2].innerHTML === "X" ){
// alert("You Win")
return
    }

}else{
    td.innerHTML = "0"
    td.style.color = "blue"
}

    console.log("clickFun" , td);


}