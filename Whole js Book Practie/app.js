// const user = `Mustafa`;
// const greet = "Hello"
// alert(`${greet} ${user}`);

// const  a = alert("Hello World")
// console.log(a , typeof a);

// alert(`Hello`)



// var a = 15;
// console.log(a);


// const b = 6
// console.log(b);

// var a= 87
// var a = 84
// console.log(a);

// console.log(alert("Hello World"));

// const a = "Mustafa"
// console.log(a);


// const user = prompt("Enter your name" , "Ali" , "Mustafa")              
// console.log(user);

// function num() {
// if(1 == 1) {
// alert("Hello")  
// alert("Hello 2")

// }
// }

// num()

// if(1 !== 1){
// alert("Hi")
// }


// const cities = ["Karachi" , "Lahore" , "Hyderabad" , "Quetta" , "Multan" , "Rawalpindi"]
// cities.push("Multan")
// cities.shift()
// cities.unshift("Islamabad")
// const newArray =  cities.slice(0 , 2)
// const newArray = cities.slice(-4 , -1)
// cities.splice(1 , 2 , "Murree" , "Sawat")
// console.log(cities);
// console.log(newArray , `newArr`);

// console.log(cities);

// cities.pop()
// console.log(cities);

// console.log(cities.at(2));

// const findCities = cities.find(city=>{
// console.log(city);
// if(city == "Hyderabad"){
// return 65
// }
// })

// console.log(findCities);




//     const tableNumber = +prompt("Enter your table number")
// for(var i = 1 ; i <= 12 ; i++){
// console.log(`${tableNumber} x ${i} = ${i*tableNumber}`);

// }


// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
// }


// const randomNum = Math.floor(Math.random() * (20 - 5 + 1) + 5) 
// console.log(randomNum);

// const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio voluptas aliquid placeat, obcaecati quia consequuntur? Veniam ea fugit sint perspiciatis inventore aut unde consequatur veritatis deserunt praesentium, quisquam, omnis voluptates corrupti repudiandae quidem assumenda fugiat voluptatum dolorem. Nemo, quaerat!`
// const arr = []
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// function  capitializeCase() {
    // for(var i = 0 ; i < str.length ; i++){
//  console.log(str.slice(i , i+2))
//  if(str.slice(i , i+2) == "  "){
// alert("Double space not allow")
// return 
// }
// }
// const newArr = str.split(" ")
// console.log(newArr);

// for( word of newArr){
// console.log(word);
// const separateWord = word.slice(0 , 1).toUpperCase() + word.slice(1).toLowerCase()
// console.log(separateWord , `separateWord`);
// arr.push(separateWord)
// }

// }

// capitializeCase()

// console.log(arr);

// const capitializeWord = arr.join(" ")
// console.log(capitializeWord);

// function sum(num1 , num2) {
// return num1 + num2
// }


// alert(sum(3, 2))



// function foo(num1 = 100 , num2 = 200) {
// console.log(num1 + num2);

// }

// foo(300 , 400)
// var a;
// function foo() {
// a =700
// }

// foo()
// console.log(a);


// const day = prompt("aaj kia din hai")
// if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"){
// alert(console.log("Work day"))
// }else if(day === "Friday"){
// alert("Short day")
// }else if(day === "Saturday" || day === "Sunday"){
// alert("WOW")
// }else{
//     alert("Please write correct day")
// }


// switch(day){
// case "Monday" : console.log("Work day")
// break
// case "Tuesday" : console.log("Work day")
// break
// case "Wednesday" :console.log("Work day")
// break 
// case "Thursday" :console.log("Work day")
// break 
// case "Friday" :console.log("Short day")
// break 
// case "Saturday" : console.log("Wow")
// break
// case "Sunday" : console.log("Wow")
// break
// default : console.log("Invalid Day");

// }