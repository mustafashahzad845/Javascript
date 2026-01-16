// var text = " ions: the Allies and the Axis powers. Nearly all of the world's countries participated, with many nations mobilising World War II their resources in pursuit of total war. Tanks and aircraft played major roles, enabling the strategic bombing of cities and delivery of the first and only nuclear weapons ever used in war. World War II is the deadliest conflict in history, causing the death of over 60 million people. Millions died in genocides, including the Holocaust, and by massacres, starvation, World War II and disease. After the Allied victory, Germany, Austria, Japan, World War II and Korea were occupied, and German and Japanese leaders were put on trial for war crimes."

// // console.log(text);


// // for (var i = 0; i < text.length; i++) {
// //     if (text.slice(i, i + 12) === "World War II") {
// //         console.log(i);

// //         var part1 = text.slice(0, i)
// //         var part2 = text.slice(i + 12)

// //         text = part1 + "Second World War" +part2
// // console.log(text);

// //     }
// // }

// // console.log(text.indexOf("World War II"));


// // for(var i = 0 ; i < text.length ; i++) {


// // }


// // console.log(text.replaceAll("World War II", "Second World War"));


// var a = 65.49999999933333333334
// // console.log(Math.round(a));


// // console.log(Math.floor(a));

// console.log(Math.ceil(a));

// var text = "Saylani Mass IT Training"

// // // console.log(text.lastIndexOf("a"));


// // for(var i = 0 ; i < text.length ; i++){
// //     if(text.slice(i ,i +3) === "ass"){
// //         console.log(i);

// //         break

// //     }
// // }



// // console.log(text.length);


// console.log(text[2]);
// console.log(text.charAt(2));





// var html = +prompt("Enter HTML Marks")
// var css = +prompt("Enter css Marks")
// var js = +prompt("Enter js Marks")
// var bootstrap = +prompt("Enter bootstrap Marks")
// var github = +prompt("Enter github Marks")

// html = Math.floor(html)
// css = Math.floor(css)
// js = Math.floor(js)
// bootstrap = Math.floor(bootstrap)
// github = Math.floor(github)

// var obtainedMarks = html + css + js + bootstrap + github
// var totalMarks = 500
// var percentage = (obtainedMarks / totalMarks) * 100



// document.writeln("Subject Marks", "<br />")
// document.writeln("HTML: ", html , "<br />")
// document.writeln("css: ", css , "<br />")
// document.writeln("js: ", js , "<br />")
// document.writeln("bootstrap: ", bootstrap , "<br />")
// document.writeln("github: ", github , "<br />")
// document.writeln("Obtained Marks: ", obtainedMarks , "<br />")
// document.writeln("Total Marks: ", totalMarks , "<br />")
// document.writeln("Percentage: ", Math.round(percentage) + "%" , "<br />")

// if (percentage >= 80 && percentage <= 100) {
//     document.writeln("Grade A+")
// } else if (percentage < 80 && percentage >= 70) {
//     document.writeln("Grade A")

// } else if (percentage < 70 && percentage >= 60) {
//     document.writeln("Grade B")

// }else if(percentage < 60 && percentage >= 50){
//         document.writeln("Grade C")

// }else if(percentage < 50 && percentage >= 40){
//         document.writeln("Grade D")

// }else if(percentage < 40){
//     document.writeln("Grade F")

// }else{
//         document.writeln("Invalid Percentage")

// }





// var text = "saYlAni"

// console.log("Lower Case" , text.toLocaleLowerCase());
// console.log("Upper Case" , text.toLocaleUpperCase());


// var capitialize = text.slice(0 , 1).toLocaleUpperCase() + text.slice(1).toLowerCase()
// console.log("Capitialize Case" , capitialize);


// var text = prompt("Enter your Name")
// var userCase  = prompt("Which case you want?   lowercase , uppercase , capitialize").toLocaleLowerCase()

// if(userCase === "lowercase"){
//     console.log(text.toLocaleLowerCase());
    
// }else if(userCase === "uppercase"){
//     console.log(text.toLocaleUpperCase());
    
// }else if (userCase === "capitialize" || userCase === "capitializecase") {

//     console.log(text[0].toLocaleUpperCase() + text.slice(1).toLocaleLowerCase());
    
// }else{
//     console.log("Invalid Case");
    
// }



// var text = prompt("Enter some text")

// for(var i = 0 ; i < text.length ; i++){
// console.log(text.slice(i , i+2));
//     if(text.slice(i , i+2) === "  ") {
// alert("Double Space not allow")
// break
//     }
// }