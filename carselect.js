var questions = [
    
    {
        title: "What is the car type?",
        choice: ["Car", "Truck", "SUV", "Van", "Minivan"]
    },

    {
        title: "What is the submodel?",
        choice: ["stuff", "more stuff", "other stuff"]
    }
]

var questionOne = "";
var currentQuestion = 1;

getQuestion = () => {
    $("#questions").html("");
    $("#choices").html("");

    let currentChoices = questions[currentQuestion].choice;

    $("#questions").html(questions[currentQuestion].title);

    for(let i = 0; i<currentChoices.length; i++) {
        let qButton = $("<button>").text(currentChoices[i]);
        qButton.addClass("choices");
        qButton.attr("type", "submit");
        qButton.attr("value", currentChoices[i]);
        $("#choices").append(qButton);
    }
    currentQuestion++;
}

questionOne += "<p>" + questions[0].title + "</p>";
for(let i = 0; i < questions[0].choice.length; i++) {
    questionOne += "<button type=submit class=choices value=" + questions[0].choice[i] + ">" + questions[0].choice[i] + "</button>";
};

$("#questions").html(questionOne);

$(document).on("click", ".choices", getQuestion);