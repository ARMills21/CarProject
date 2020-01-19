var questions = [
    
    {
        title: "What is the car type?",
        choice: ["Car", "Truck", "SUV", "Van", "Minivan"]
    },

    {
        title: "What is the submodel?",
        choice: ["4dr Hatchback", "Cargo Minivan", "Coup",
    "Passenger Van", "2dr Hatchback", "Cargo Van", "Crew Cab Pickup", "Regular Cap Pickup",
    "2dr SUV", "Convertible", "Extended Cab Pickup", "Sedan", "4dr SUV", "Convertible SUV",
    "Passenger Minivan", "Wagon"]
    },
    
    {
        title: "What Size of vehicle?",
        choice: ["Compact", "Midsize", "Large"]
    },
    
    {
        title: "What kind of fuel type?",
        choice: ["Electric", "Hybrid", "Natural gas", "Flex fuel", "Gas", "Diesel"]
    },

    {
        title: "What kind of wheel drive?",
        choice: ["All wheel drive", "Front wheel drive", "Four wheel drive", "Rear wheel drive"]
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