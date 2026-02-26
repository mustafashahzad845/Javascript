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


var questionElement = document.getElementById("questionElement")
console.log(questionElement);

var optionElement = document.getElementById("optionElement")

var counter = 0 ;
 
  console.log(option);
  
// console.log(question);
function startQuiz() {
    // var question = quizQuestions[i].question

     var question = quizQuestions[counter].question
  var option = quizQuestions[counter].options
    console.log("startQuiz");

     
optionElement.innerHTML = ""

    for(var i = 0 ; i < option.length; i++){
        // console.log(i);
    //    console.log(quizQuestions[i].question);
       

console.log(i);
var li = `<li>${option[i]}</li>`

optionElement.innerHTML += li
    //    questionElement.innerHTML+=



}
    questionElement.innerHTML = question
    
}




function nextBtn() {
    counter++
    
console.log(counter);
console.log(quizQuestions[counter]);


startQuiz()

}