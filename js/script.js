let countQustion = null;
let scoreQustion = null;


let Qustion = [];
let falseArry = []
let addFalse = null;
let falseSubmit = null;
let i = 0;
let userQuestion = null;
let userAnswer = null;
let submit = null;
let id = 0;
let score = 0; // userTest Score 
let userTest = null;
let number = 0;
let trueTest = 0;
let falseTest = 0;

//get Button
let testButton = document.getElementById("testStart")
let resetButton = document.getElementById("resetTest")
let qustionsShow = document.getElementById("showQustion")
let falseQustion = document.getElementById("falseQustion")
let showScoreBu = document.getElementById("showScore")


// Get Qustions //
function getUserQustion (){
    console.clear();
    score = 0;
    countQustion = +prompt("Your test will have a few questions?")
    scoreQustion = +prompt("How many points do your questions have?")

    if(!countQustion || !scoreQustion){
        alert("Please enter the correct values.. !")
    } else { 
        // Get Qustion User
        while (i < countQustion){
            userQuestion = prompt("Enter The Qustion: " + (i + 1))
            userAnswer = prompt("Enter The Answer Qustion: " + (i + 1))
            id++;
            submit = {
                id: id,
                title: userQuestion,
                answer: userAnswer
            }
            Qustion.push(submit)
            i++
        }
        if(Qustion.length > 1){
            testButton.style.display = "block";
            resetButton.style.display = "block"
        } else {
            alert("You have few questions to start the test")
        }
    }
}



// START TEST //
function startQustion(){
    let startTest = prompt("Do you want to start the test (enter Yes to start)","Yes");
    startTest = startTest.toLowerCase();

    if(startTest === "yes"){
        alert("Each test question has " + scoreQustion + " Point" + "\n" + "Number of test questions " + countQustion)
        Qustion.forEach(function (qustion){
            userTest = prompt(qustion.title)
            if (qustion.answer === userTest){
                score += scoreQustion;
                trueTest++;
            } else {
                falseTest++;
                addFalse = {
                    id: id++,
                    Qustion: qustion.title,
                    answerQustion: qustion.answer,
                    userAnswer: userTest,
                }                       
                falseArry.push(addFalse)
            }
        });
    }
    // Show Button Answer Qustion
    qustionsShow.style.display = "block"
    falseQustion.style.display = "block"
    showScoreBu.style.display = "block"
}

// Reset Test //
function resetQustion(){
    console.clear()
    testButton.style.display = "none";
    resetButton.style.display = "none";
    qustionsShow.style.display = "none";
    falseQustion.style.display = "none";
    Qustion = [];
    score = 0;
    alert("Your test has been reset !")
}


// Show Qustion And Answer //
function showQustionAnswer(){
    alert("Press the f12 key to display the result")
    console.clear()
    Qustion.forEach(function (qustion){
        number++
        console.log("Qustion " + number + ": " + "(" + qustion.title + ")" + " Answer " + number + ": " + "(" + qustion.answer + ")")
    });
}

// False Qustion
function qustionFlase(){
    alert("Press the f12 key to display the result")
    console.clear()
    falseArry.forEach(function (falseQustion){  
    console.log("Qustion " + falseQustion.Qustion + " YouralseAnswer: " + falseQustion.userAnswer)
    });
}

function showScore(){
    alert("Your score on the test is equal to: " + score)
    alert("The number of correct answers: " + trueTest + "\n" + " Wrong number of answers: " + falseTest);
}