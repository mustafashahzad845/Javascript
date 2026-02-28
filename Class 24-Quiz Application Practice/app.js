var quizQuestions = [
    {
        id: 1,
        question: "What is the full form of HTML?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Programming Language",
            "Hyper Text Styling Language",
            "Hyper Text Scripting Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which tag is used to add a link in an HTML page?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        answer: "a"
    },
    {
        id: 3,
        question: "Which property changes the color of text in CSS?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: "color"
    },
    {
        id: 4,
        question: "Which CSS property sets the text size?",
        options: [
            "text-style",
            "font-size",
            "text-size",
            "font-style"
        ],
        answer: "font-size"
    },
    {
        id: 5,
        question: "In which element is JavaScript code written?",
        options: [
            "javascript",
            "js",
            "script",
            "code"
        ],
        answer: "script"
    },
    {
        id: 6,
        question: "How do we write a single-line comment in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
        ],
        answer: "//"
    },
    {
        id: 7,
        question: "Which keyword is used to create a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "declare"
        ],
        answer: "var"
    },
    {
        id: 8,
        question: "Which rule is used in CSS for responsive design?",
        options: [
            "flex",
            "media-query",
            "@media",
            "responsive"
        ],
        answer: "@media"
    },
    {
        id: 9,
        question: "Which JavaScript method selects an element using its ID?",
        options: [
            "getElementByClass()",
            "getElementById()",
            "querySelectorAll()",
            "selectById()"
        ],
        answer: "getElementById()"
    },
    {
        id: 10,
        question: "Which attribute allows inline CSS styling in HTML?",
        options: [
            "class",
            "styles",
            "style",
            "font"
        ],
        answer: "style"
    }
];


// console.log(quizQuestions);


var questionElement = document.getElementById("questionElement")





var quizCounter = 0;



var question = quizQuestions[quizCounter].question
var options = quizQuestions[quizCounter].options
console.log(quizQuestions[quizCounter].options);


var optionElement = document.getElementById("optionElement")




function startQuiz() {
   console.log("startQuiz");
 

   


       console.log(quizQuestions[quizCounter].question);


questionElement.innerHTML = question



for(var i = 0 ; i < options.length ; i++){
    var li = `<li>${options[i]}</li>`

    optionElement.innerHTML += li
}


}




function nextBtn() {





if(quizCounter == quizQuestions.length){
    return
}



    quizCounter++

    
       console.log(quizQuestions[quizCounter].question);

    console.log(quizCounter);

    startQuiz()

}