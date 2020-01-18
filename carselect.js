var questions = [
    
    {
        title: "What is the car type?",
        choice: ["Car", "Truck", "SUV", "Van", "Minivan"]
    },

    {
        title: "What is the submodel?",
        choice: [""]
    }
]

var questionOne = "";
var currentQuestion = 1;
var questionTwo = "";

for(i=0; i< 2; i++){



questionOne += "<p>" + questions[0].title + "</p>";
for(let i = 0; i < questions[0].choice.length; i++) {
    questionOne += "<input type=button class=choices value=" + questions[0].choice[i] + ">";
};

document.getElementById("questions").innerHTML = questionOne;

questionTwo += "<p>" + questions[1].title + "</p>";
for(let i = 0; i < questions[1].choice.length; i++) {
    questionTwo += "<input type=button class=choices value=" + questions[0].choice[i] + ">";
};

document.getElementById("questions").innerHTML = questionTwo;
}
