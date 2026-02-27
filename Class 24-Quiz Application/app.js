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


    ,

    
];
var counter = 0;
var counterDisplay = document.getElementById("counterDisplay")
var nextButton = document.getElementById("nextButton")

var QuizContainer = document.getElementById("QuizContainer")

counterDisplay.innerHTML = `${counter + 1} / ${quizQuestions.length}`

 var questionElement = document.getElementById("questionElement")
 var optionElement = document.getElementById("optionElement")

var scoreCardParent = document.getElementById("scoreCardParent")
var scoreCardElement = document.getElementById("scoreCard")
scoreCardElement.className = "scoreCardElement"

var backToQuizBtn = document.getElementById("backToQuizBtn")


function startQuiz() {
 console.log(quizQuestions);

 

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






}


return question
}


function nextBtn() {

var percentage = (score / quizQuestions.length) * 100
    
    counter++
    console.log(counter);
  
var grade;

if(percentage >= 80 && percentage <= 100){
    grade = "A+"
}else if(percentage < 80 && percentage >= 70){
    grade = "A"
}else if(percentage < 70 && percentage >= 60){
    grade = "B"
}else if(percentage < 60 && percentage >= 50){
    grade = "C"
}else if(percentage < 50 && percentage >= 40){
    grade = "D"
}else if(percentage < 40){
    grade = "F"
}


 var scoreCard = `
    
    <p class=reportParaElement style="margin : 10px 0 ; font-size : 20px"> Correct Answer : ${score} </p>
    <p class=reportParaElement style="margin : 10px 0 ; font-size : 20px">Wrong Answer : ${quizQuestions.length - score}</p>
    <p class=reportParaElement style="margin : 10px 0 ; font-size : 20px">Total Answers : ${quizQuestions.length}</p>
    <p class=reportParaElement style="margin : 10px 0 ; font-size : 20px">percentage : ${percentage}%</p>
    <p class=reportParaElement style="margin : 10px 0 ; font-size : 20px">Grade :  ${grade} </p>
`
scoreCard.className = "scoreCard"
scoreCardElement.innerHTML = scoreCard


    if(counterDisplay.innerHTML == `${quizQuestions.length}/${quizQuestions.length}`){
QuizContainer.style.display = "none"
scoreCardParent.innerHTML = scoreCard
scoreCardParent.style.display = "block"

scoreCardParent.style.width = "max-content"
scoreCardParent.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px"
scoreCardParent.style.padding = "40px 50px"
scoreCardParent.style.margin = "70px auto 30px"
scoreCardParent.style.borderRadius = "12px"


var reportAllPara = document.getElementsByClassName("reportParaElement")


for(var value of reportAllPara){
// reportAllPara[value].style.margin = "10px 0"
console.log(value);


backToQuizBtn.style.display = "block"
console.log(backToQuizBtn);






}

        return
    }


   

scoreCardParent.innerHTML = scoreCardElement


                        nextButton.disabled = true
                        nextButton.style.opacity = 0.7

            counterDisplay.innerHTML = `${counter + 1}/${quizQuestions.length}`


    startQuiz()




}


console.log(counter);


var score = 0;


    nextButton.setAttribute("disabled", true)




function checkAns(liElement) {

var liAll = document.getElementsByTagName("li")
console.log(liAll);

for(var i = 0 ; i< liAll.length ; i++){
   
        liAll[i].removeAttribute("onclick")
    

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


        for(var i = 0 ; i < liAll.length ; i++){
            console.log(i);

            if(liAll[i].innerHTML === quizQuestions[counter].answer){
            liAll[i].style.background = "#4ade80"    
            liAll[i].style.color = "#fff" 
                    liElement.style.transition = "0.3s"
   
            }
       
        }

        
//  nextButton.style.opacity = 1;
//         nextButton.style.pointerEvents = "visible";
        

       


}

scoreCardParent.style.display = "none"

     nextButton.removeAttribute("disabled")
            nextButton.style.opacity = 1

            nextButton.disabled = false

console.log("Final Answer" , score ,"/ 10");



}


function backToQuiz() {
    QuizContainer.style.display = "block"
    scoreCardParent.style.display = "none"
    backToQuizBtn.style.display = "none"

counter = 0
score = 0

nextButton.disabled  = true
nextButton.style.opacity = 0.7

counterDisplay.innerHTML = `${counter+1} / ${quizQuestions.length}`
    startQuiz()

    
}