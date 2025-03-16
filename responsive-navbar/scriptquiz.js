//Question bank
var questionBank= [
    {
        question : 'What is a correct syntax to output "Hello World" in Java?',
        option : ['System.out.println("Hello Word");','println("Hello Word");','Console.WriteLine("Hello Word");','echo("Hello Word");i'],
        answer : 'System.out.println("Hello Word");'
    },
    {
        question : 'Java is short for "JavaScript".',
        option : ['False','True','Maybe','None of the above'],
        answer : 'False'
    },
    {
        question : 'How do you insert COMMENTS in Java code?',
        option : ['// This is a comment','/ This is a comment','/* This is a comment','/? This is a comment'],
        answer : '// This is a comment'
    },
    {
        question : 'Which data type is used to create a variable that should store text?',
        option : ['string','Txt','myString','String'],
        answer : 'String'
    },
    {
        question : 'How do you create a variable with the numeric value 5?',
        option : ['Float x = 5;','x = 5;','int x = 5;','num x = 5;'],
        answer : 'int x = 5;'
    },
    {
        question : 'How do you create a variable with the floating number 2.8?',
        option : ['x = 2.8f;','byte x = 2.8f','float x = 2.8f;','int x = 2.8f;'],
        answer : 'float x = 2.8f;'
    },
    {
        question : 'Which method can be used to find the length of a string?',
        option : ['getLength()','length()','getSize()','len()'],
        answer : 'length()'
    },
    {
        question : 'Which operator is used to add together two values?',
        option : ['The + sign','The & sign','The * sign','The - sign'],
        answer : 'The + sign'
    },
    {
        question : 'The value of a string variable can be surrounded by single quotes.',
        option : ['True','False','Maybe','Not Sure'],
        answer : 'False'
    },
    {
        question : 'Which method can be used to return a string in upper case letters?',
        option : ['toUpperCase()','touppercase()','tuc()','upperCase()'],
        answer : 'toUpperCase()'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();