var userTurn = 0;
function clickFun(td) {
    userTurn++

if(userTurn % 2 !== 0){
    td.innerHTML = "X"
    td.style.color = "red"
}else{
    td.innerHTML = "0"
    td.style.color = "blue"
}

    console.log("clickFun" , td);


}