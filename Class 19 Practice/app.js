// alert("Hello World!");

// function greet() {
//     alert("Hello World!");

// }

var str = prompt("Enter your name")
console.log(str);

var strArr = str.split(" ")
var arr = []
console.log(strArr);

for(var i = 0 ; i < strArr.length ; i++){
    console.log(str.slice(i , i + 2));
 if(str.includes("  ")){
alert("Double space not allow")
break 
}else{
var word = strArr[i].slice(0 , 1).toUpperCase() + strArr[i].slice(1).toLowerCase()

arr.push(word)
}   





}

var capitializeWord = arr.join(" ")
console.log(capitializeWord);

