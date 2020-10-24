// variables
let quizCover = document.querySelector("#quizCover");
let startButton = document.querySelector("#startButton");
let timer = document.querySelector("#timer")
let buttonA = document.querySelector("#buttonA");
let buttonB = document.querySelector("#buttonB");
let buttonC = document.querySelector("#buttonC");
let buttonD = document.querySelector("#buttonD");

let buttonA1 = document.querySelector("#buttonA1");
let buttonB1 = document.querySelector("#buttonB1");
let buttonC1 = document.querySelector("#buttonC1");
let buttonD1 = document.querySelector("#buttonD1");

let buttonA2 = document.querySelector("#buttonA2");
let buttonB2 = document.querySelector("#buttonB2");
let buttonC2 = document.querySelector("#buttonC2");
let buttonD2 = document.querySelector("#buttonD2");

let buttonA3 = document.querySelector("#buttonA3");
let buttonB3 = document.querySelector("#buttonB3");
let buttonC3 = document.querySelector("#buttonC3");
let buttonD3 = document.querySelector("#buttonD3");

let buttonA4 = document.querySelector("#buttonA4");
let buttonB4 = document.querySelector("#buttonB4");
let buttonC4 = document.querySelector("#buttonC4");
let buttonD4 = document.querySelector("#buttonD4");

let questionOne = document.querySelector("#questionOne");
let questionTwo = document.querySelector("#questionTwo");
let questionThree = document.querySelector("#questionThree");
let questionFour = document.querySelector("#questionFour");
let questionFive = document.querySelector("#questionFive");
let intialTime = 90;

//hide the questions
document.addEventListener("DOMContentLoaded", function(){
questionOne.style.display = "none";
questionTwo.style.display = "none";
questionThree.style.display = "none";
questionFour.style.display = "none";
questionFive.style.display = "none";

});

// Start the quiz
startButton.addEventListener("click", function (){
        quizCover.style.display = "none";
        timer.append("Timer: ", intialTime);
        questionOne.style.display = "unset";
        one();
        two();
        three();
        four();
        five(); 
    });



//questions
    function one (){
        buttonD.addEventListener("click", function(){
            alert("correct");
            questionOne.style.display = "none";
            questionTwo.style.display = "unset";
        });
        buttonA.addEventListener("click", function(){
            alert("wrong");
        });
        buttonB.addEventListener("click", function(){
            alert("wrong");
        });
        buttonC.addEventListener("click", function(){
            alert("wrong");
        });
    }

    function two (){
        buttonA1.addEventListener("click", function(){
            alert("correct");
            questionTwo.style.display = "none";
            questionThree.style.display = "unset";
        });
        buttonD1.addEventListener("click", function(){
            alert("wrong");
        });
        buttonB1.addEventListener("click", function(){
            alert("wrong");
        });
        buttonC1.addEventListener("click", function(){
            alert("wrong");
        });
    }

    function three (){
        buttonC2.addEventListener("click", function(){
            alert("correct");
            questionThree.style.display = "none";
            questionFour.style.display = "unset";
        });
        buttonA2.addEventListener("click", function(){
            alert("wrong");
        });
        buttonB2.addEventListener("click", function(){
            alert("wrong");
        });
        buttonD2.addEventListener("click", function(){
            alert("wrong");
        });
    }

    function four (){
        buttonB3.addEventListener("click", function(){
            alert("correct");
            questionFour.style.display = "none";
            questionFive.style.display = "unset";
        });
        buttonA3.addEventListener("click", function(){
            alert("wrong");
        });
        buttonD3.addEventListener("click", function(){
            alert("wrong");
        });
        buttonC3.addEventListener("click", function(){
            alert("wrong");
        });
    }

    function five (){
        buttonA4.addEventListener("click", function(){
            alert("correct");
            questionFive.style.display = "none";
            //questionTwo.style.display = "unset";
        });
        buttonD4.addEventListener("click", function(){
            alert("wrong");
        });
        buttonB4.addEventListener("click", function(){
            alert("wrong");
        });
        buttonC4.addEventListener("click", function(){
            alert("wrong");
        });
    }

// will make the cover disapear 
//document.getElementById("quizCover").style.display = "none";