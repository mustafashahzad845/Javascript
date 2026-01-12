// var text = 'My name is "Mustafa" '
// console.log(text);

// var para = "He is Mustafa. He is 15  years old."

// for (var i = 0 ; i < para.length ; i++){
//     // console.log(para.slice(i , i + 7));
    
//     if (para.slice( i , i + 7) === "Mustafa") {
//         console.log(i);
        
//         var part1 = para.slice(0 , i)
//         console.log(part1);
//          var  part2 = para.slice(i + 7)
//          console.log(part2);
//          var finalPara = part1 + "Son of Mr.Shahzad"+part2
//          console.log(finalPara);
         
//     }
// }


// console.log(para);

// for(var i = 0 ; i < para.length ; i++){
//     // console.log(para.slice(i , i+7));

//     if(para.slice(i , i+7) === "Mustafa"){
// console.log(i);
// break
//     }
// }


// var newPara = "JavaScript is a programming language and core technology of the Web, alongside HTML and CSS. It was created by Brendan Eich in 1995. As of 2025, the overwhelming majority of websites uses JavaScript for client side webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code."



// for (var index = 0; index < newPara.length; index++) {
//     // console.log(newPara.slice(index, index + 4));

//     if (newPara.slice(index, index + 4) === "1995") {
//         // console.log(index);
//       var para1 = newPara.slice( 0 , index)  
//     //   console.log(para1);
//       var para2 = newPara.slice(index+4)
//         // console.log(para2);
        
//       var finalPara = para1 + "Nineteen Ninety Five" +para2
//       console.log(finalPara);
      
//     }
    
// }



// var text = "Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise."

// for(var i = 0 ; i < text.length ; i++){
//     // console.log(text.slice(a , a+4));
 
//     if(text.slice( i , i+4) === "Java"){
//         // console.log(i);
        
//         var part1 = text.slice(0 , i)
//         // console.log(part1);

//         var part2 = text.slice(i+4)
//             // console.log(part2);
            
//         text = part1 + "Jv" + part2
//                     console.log(text);

        
//         break
//     }
// }


// var text = "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."

// var indexNumber = text.indexOf("document")
// indexNumber = indexNumber + 8
// console.log(indexNumber);
// console.log( text.slice(0 , indexNumber));


// if(text.slice(0 , indexNumber) == "document"){
//     console.log(text.slice(0));
    
//     var finalPara = text.slice(0 , indexNumber )+ "file" + text.slice(indexNumber)
//     console.log(finalPara);
    
// }


// var text = "CSS is the language we use to style an HTML document. document CSS describes how HTML elements should document be displayed."

// var finalPara = (text.replaceAll("document", "file"));
// console.log(finalPara);


// var str = "Saylani Mass IT Training"
// // console.log(str.lastIndexOf("a"));

// for(var i = 0 ; i < str.length ; i++){
//     // console.log(str.slice(i , i + 4));
    
//     if (str.slice(i , i+4) === "Mass") {
//         console.log(i);
        
//     }
// }

// console.log(str[7]);



var text = "Mustafa Shahzad"
// console.log(text.charAt(8));
// console.log(text[8]);

for(var i = 0 ; i < text.length ; i++) {
    console.log(text.charAt(i), "CharAt");
    console.log(text[i] , "Index");
    
}


// console.log(85.5);

var num1 = 85.49
var numRound = Math.round(num1)
console.log(numRound);


var num2 = 85.54433
var numFloor = Math.floor(num2)
console.log(numFloor);


var num3 = 60.0091
var numCeil = Math.ceil(num3)
console.log(numCeil);


var cities = ["Karachi" , "Hyderabad" , "Multan"]
var isMatch = cities.indexOf("Multans")

if(isMatch != -1){
    alert("Correct")
}else{
    alert("Not correct")
}
