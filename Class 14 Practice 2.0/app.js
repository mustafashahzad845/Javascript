// var str = "my name is Mustafa"
// str = str.split(" ").reverse() ;
// str = str.join(" ")
// console.log(str);




// var para = "my name is mustafa"
// console.log("original para: " , para);

// var paraArr = para.split(" ")
// // console.log("paraArr" , paraArr);
// var arr = []


// for(var i = 0 ; i < paraArr.length ; i++) {

//     var word = paraArr[i]
//     // console.log(word);
    
//     //Capitialize
//     word = word.slice(0 , 1).toUpperCase() + word.slice(1).toLocaleLowerCase()
//     // console.log(word);
    
//     arr.push(word)
// }


// // console.log(arr);
// var Capitializepara = arr.join(" ")
// console.log("Capitializepara: " , Capitializepara);





















// H - 0 - 1
// T - 1 - 2
// M  - 2 - 3
//L  - 3 - 4














// var para = prompt("Enter some text" , "my name is mustafa")
// var paraArr = para.split(" ")
// console.log(paraArr);
// var arr = []


// for(var i = 0 ; i < paraArr.length ; i++) {

//     var word = paraArr[i]
//     // console.log(word);
    
//     word = word.slice(0 , 1).toUpperCase() + word.slice(1).toLowerCase()
    
//     arr.push(word)
// }

//     console.log(arr);
//     var Capitializepara = arr.join(" ")
//     console.log(Capitializepara);
    



// 



var str = prompt("Enter your text")
var userCase = prompt("Which type of case you want lowercase , uppercase, capitializecase").toLocaleLowerCase()

if (userCase === "lowercase") {
    
console.log(str.toLowerCase());


} else if(userCase === "uppercase") {
    console.log(str.toUpperCase());
    
}else if(userCase === "capitializecase" || userCase === "capitalizecase"){

    var strArr = str.split(" ")
    var arr = []

    for(var i = 0 ; i < strArr.length ; i++){

        // if(str.slice(i , i + 2) === "  "){
        //  alert("Double space not🚫")

        //  break
        // }

        console.log(str.slice(i , i + 2));
        

var word = strArr[i]
word = word.slice(0 , 1).toUpperCase() + word.slice(1).toLowerCase()

arr.push(word)
    }

    // console.log(arr);
    var capitalizecase = arr.join(" ")
    console.log(capitalizecase);
    
    
}













