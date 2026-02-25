var quizQuestions = [
    {
        id: 1,
        question: "Which HTML tag is used to define a table row?",
        options: [
            "tr",
            "td",
            "table-row",
            "row"
        ],
        answer: "tr"
    },
    {
        id: 2,
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Computer Style Sheets",
            "Colorful Style Syntax"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        id: 3,
        question: "Which HTML tag is used for inserting an image?",
        options: [
            "img",
            "image",
            "src",
            "picture"
        ],
        answer: "img"
    },
    {
        id: 4,
        question: "Which CSS property is used to change the background color?",
        options: [
            "background-color",
            "color",
            "bgcolor",
            "background-style"
        ],
        answer: "background-color"
    },
    {
        id: 5,
        question: "Which JavaScript function is used to print messages to the console?",
        options: [
            "console.print()",
            "console.log()",
            "print()",
            "log.console()"
        ],
        answer: "console.log()"
    },
    {
        id: 6,
        question: "Which HTML tag is used to create a dropdown list?",
        options: [
            "select",
            "dropdown",
            "option",
            "list"
        ],
        answer: "select"
    },
    {
        id: 7,
        question: "Which CSS property controls the spacing between letters?",
        options: [
            "letter-spacing",
            "text-spacing",
            "word-spacing",
            "spacing"
        ],
        answer: "letter-spacing"
    },
  {
          id: 8,
        question: "HTML is a",
        options: [
            "Programming Language",
            "Markup Language",
            "Scripting Language",
            "Interpreter Language"
        ],
        answer: "Markup Language"
    } ,
    {
        id: 9,
        question: "Which HTML element is used for the largest heading?",
        options: [
            "h1",
            "h6",
            "heading",
            "head"
        ],
        answer: "h1"
    },
    {
        id: 10,
        question: "Which CSS property is used to hide an element without removing it from the layout?",
        options: [
            "visibility: hidden",
            "display: none",
            "opacity: 0",
            "hidden: true"
        ],
        answer: "visibility: hidden"
    }
];
var counter = 0;
var counterDisplay = document.getElementById("counterDisplay")
var nextButton = document.getElementById("nextButton")

function startQuiz() {
 console.log(quizQuestions);

 
 var questionElement = document.getElementById("questionElement")
 var optionElement = document.getElementById("optionElement")
 console.log(questionElement);
 console.log(optionElement);


 var question = quizQuestions[counter].question
 questionElement.innerHTML = question
var options = quizQuestions[counter].options

optionElement.innerHTML = ""
 for(var i = 0 ; i < options.length ; i++){
// console.log(i);
var li = `<li onclick=checkAns(this) id=li>${options[i]}</li>`
optionElement.innerHTML += li 
console.log(li);



nextButton.disabled = false


}
return question
}

var scoreCardParent = document.getElementById("scoreCardParent")

function nextBtn() {


    
    counter++
    console.log(counter);
  
var QuizContainer = document.getElementById("QuizContainer")

    if(counterDisplay.innerHTML == "10/10"){
QuizContainer.remove()
var scoreCard = `<div class="scoreCard">
    <h3>Name : Mustafa Shahzad</h1>
    <p>Score : 7/10</p>
    <p>Percentage : 50%</p>
</div>`

scoreCardParent.innerHTML = scoreCard
        return
    }
            counterDisplay.innerHTML = `${counter + 1}/10`


    startQuiz()
}


console.log(counter);


var score = 0;

function checkAns(liElement) {

var liAll = document.getElementsByTagName("li")
console.log(liAll);

for(var i = 0 ; i< liAll.length ; i++){
   
        liAll[i].onclick = null
    

    }

// if(liAll == quizQuestions[counter].answer || liAll !== quizQuestions[counter].answer){
//     liAll.disabled = true
// }







console.log(liElement.innerHTML);
if(liElement.innerHTML == quizQuestions[counter].answer){
    score++
    console.log("Sahi Jawab");
    liElement.style.backgroundColor = "#4ade80"
         liElement.style.color = "#fff"
        liElement.style.transition = "0.3s"
}else{
    console.log("Galata jawab");
        liElement.style.backgroundColor = "#dc2626"
        liElement.style.color = "#fff"
        liElement.style.transition = "0.3s"

}
console.log("Final Answer" , score ,"/ 10");


}