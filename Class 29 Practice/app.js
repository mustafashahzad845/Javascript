// alert("Hello World");




// var day = prompt("Enetr aj konsa din hai")
// switch (day) {
// case "Saturday" : 
// alert("WOW");
// break

// case "Sunday" :
//     alert("WOW");
// break

// case "Friday" :
//     alert("Short Time")
//  break

//  default :
//  alert("Normal Day")

// }













// var html = 70;
// var css = 90;
// var js = 76;

// var totalMarks = 300;
// var obtainedMarks = html + css + js
// var percentage = (obtainedMarks / totalMarks) * 100



// document.writeln(html, "html" , "<br>")
// document.writeln(css, "css" , "<br>")
// document.writeln(js, "js" , "<br>")


// document.writeln(totalMarks , "<br>")
// document.writeln(obtainedMarks , "<br>")
// document.writeln(percentage + "%" , "<br>")


// if (percentage >= 80 && percentage <= 100) {
//     document.writeln("Grade A+")
// } else if (percentage < 80 && percentage >= 70) {
//     document.writeln("Grade A")
// } else if (percentage < 70 && percentage >= 60) {
//     document.writeln("Grade B")
// } else if (percentage < 60 && percentage >= 50) {
//     document.writeln("Grade C")
// } else if (percentage < 50 && percentage >= 40) {
//     document.writeln("Grade D")
// } else if (percentage < 40) {
//     document.writeln("Grade F")
// } else {
//     document.writeln("Invalid Grade")
// }






// for(var i = 1 ; i<= 10 ; i++){
//     console.log(i , "--- Outer Loop ---");

//     for(var j = 3 ; j <= 8 ; j++){
// console.log(j , "Inner Loop");

//     }
// }



// var str = Number("12")
// console.log(str , typeof str);
// console.log(str , typeof str);



// var num = 1243;
// // num = String(num)

// num = num.toFixed(2)
// console.log(num, typeof num);








// var html = `Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java`
// console.log(html);
// console.log(html.indexOf("CSS"));


// for(var i = 0 ; i < html.length;i++){
// // console.log(html.slice(i , i+3));
// if(html.slice(i , i+3) === "CSS"){
// console.log(i);

// }
// }


// html = html.replace("CSS", "Cascading style sheet")


// console.log(html);




// for(var i = 0 ; i <= html.length ; i++){
// // console.log(html[i]);
// if(html.slice(i , i + 3) === "CSS"){
// console.log(i);
// var part1 = html.slice(0 , i)
// console.log(part1);

// var part2 = html.slice(i+3)
// console.log(part2);


// html = part1 + "CASCADING STYLE SHEETS" + part2

// }
// }




// console.log(html);




// function multipleCapitialize() {

// var str = prompt("Enter your text")
// var strArr = str.split(" ")

// for(var i = 0 ; i< str.length ; i++){
// if(str.slice(i , i + 2) == "  "){
// alert("Double Space Not Allow")
// return
// }

// }
// var arr = []


// for(var i = 0 ; i < strArr.length  ; i++){
// var word  =  strArr[i].slice(0 , 1).toUpperCase()  + strArr[i].slice(1).toLowerCase()
// // console.log(word);
// arr.push(word)
// }

// var capitializeWord =  arr.join(" ")
// console.log(str  ,"original");

// console.log(capitializeWord);

// }

// multipleCapitialize()





// var a;
// function foo() {
//     a = 20;
// }


// foo()

// console.log(a);





// var ParagraphParent = document.getElementById("ParagraphParent")
// ParagraphParent.firstElementChild.style.color = "red"
// ParagraphParent.firstElementChild.nextElementSibling.style.color = "rgb(0 , 255 , 0)"
// ParagraphParent.lastElementChild.style.color = "blue"


// ParagraphParent.lastElementChild.parentElement.style.border = "1px solid #000"


// var input = document.getElementById("input")
// input.setAttribute("placeholder", "Enter your Name")
// console.log(input.hasAttribute("placeholder"));
// console.log(input.getAttribute("placeholder"));

// input.className = "input"


// var paraElem = document.getElementsByTagName("p")
// paraElem[0].style.color = "orange"
// paraElem[1].style.color = "pink"
// paraElem[2].style.color = "#d3d3d3"



// function sum(num1=10 , num2 = 15) {
    // console.log(num1 + num2);
    
// }

// sum(100 , 300)


// function greet (wish) {
// alert(wish)

// }

// greet("Hi Mustafa")
// greet("Hi Shafay")









// Calculator
// var input = document.getElementById("input")

// function addNumber(number) {
//     input.value +=  number
// }
// function calculate() {
//     console.log(input.value);
//     input.value =  eval(input.value)
// }
// function AC() {
//     input.value = ""
// }
// function percentage() {
//     input.value = input.value / 100
// }
// function del() {
//     input.value = input.value.slice(0 , -1)
// }