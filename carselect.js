var questions = [
    
    {
        title: "What is the car type submodel?",
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

var currentQuestion = 1;
var userChoices = [];

getFirstQuestion = () => {
    const firstChoices = questions[0].choice;
    $("#questions").html(questions[0].title);
    for(let i=0;i<firstChoices.length; i++) {
        let qOption = $("<option>").text(firstChoices[i]);
        qOption.addClass("choices");
        qOption.attr("value", firstChoices[i]);
        $("#choices").append(qOption);
    };
};

getQuestion = event => {
    event.preventDefault();

    const userInput = $("#choices option:selected").val();
    getUserChoice(userInput);

    if(currentQuestion >= 4) {
        getResults(userChoices);
    }
    else {
        $("#questions").html("");
        $("#choices").html("");

        let currentChoices = questions[currentQuestion].choice;

        $("#questions").html(questions[currentQuestion].title);

        for(let i = 0; i<currentChoices.length; i++) {
            let qOption = $("<option>").text(currentChoices[i]);
            qOption.addClass("choices");
            qOption.attr("value", currentChoices[i]);
            $("#choices").append(qOption);
        }
        currentQuestion++;
    }
}

getAPI = Arr => {
    
}

getUserChoice = choice => {
    userChoices.push(choice);
    console.log(userChoices);
};

getResults = choiceArr => {
    window.location.href = "results.html";
    getAPI (choiceArr);
};

getFirstQuestion();
$(document).on("click", "#nextBtn", getQuestion);