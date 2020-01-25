var questions = [
    
    {
        title: "What is the body style of the car?",
        choice: ["Hatchback", "Sedan", "Coup", "Convertible",
        "Pickup", "Van",
        "Cargo Van", "SUV"]
    },

    {
        title: "How many doors?",
        choice: ["Two Door", "Four Door"]
    },

    {
        title: "What Size of vehicle?",
        choice: ["Compact", "Midsize", "Large", "Sports Utility", "Small Staiton Wagon"]
    },
    
    {
        title: "What kind of fuel type?",
        choice: ["Electric", "Flex fuel", "Premium Unleaded", "Diesel"] // premium unleaded is gas 
    },

    {
        title: "What kind of wheel drive?",
        choice: ["All wheel drive", "Front wheel drive", "Four wheel drive", "Rear wheel drive"]
    }
];

var currentQuestion = 1; // starting at the current question
var userChoices = []; // leaving the value blank so it can input the user choice

getFirstQuestion = () => { // geting the first question
    const firstChoices = questions[0].choice; // setting it to the choices array
    $("#questions").html(questions[0].title); // putting the first question to the DOM
    for(let i=0;i<firstChoices.length; i++) { // setting the length of the choices
        let qOption = $("<option>").text(firstChoices[i]); // setting the options tag
        qOption.addClass("choices"); // adding the class to the choicses
        qOption.attr("value", firstChoices[i]); // setting the value of the option
        $("#choices").append(qOption); // putting it on the next line of choices on the DOM
    };
};

getQuestion = event => { // adding a event to the questions so it knows what to do
    event.preventDefault(); // preventing the choices to be removed when refreshed or changed to a different page

    const userInput = $("#choices option:selected").val(); // adding a bucket for the users choices and the value to be empty so selected is add to value
    getUserChoice(userInput); // to pull the users choices

    if(currentQuestion >= 5) { // making it where when the user answers all the questions that it goes to the result page
        getResults(userChoices);
    }
    else { // clearing out what is on the DOM currently
        $("#questions").html(""); 
        $("#choices").html("");

        let currentChoices = questions[currentQuestion].choice; // setting it to the current question it is on 

        $("#questions").html(questions[currentQuestion].title); // setting it the current question to the DOM

        for(let i = 0; i<currentChoices.length; i++) { // making it do the same as the first question
            let qOption = $("<option>").text(currentChoices[i]);
            qOption.addClass("choices");
            qOption.attr("value", currentChoices[i]);
            $("#choices").append(qOption); 
        }
        currentQuestion++; // increments current question so it can go to the next question
    }
}

getAPI = Arr => {
    // This is where we will link the API's and code the ajax
}

getUserChoice = choice => { // keeping the user choices to a array
    userChoices.push(choice);
    console.log(userChoices);
};

getResults = choiceArr => { // making it pull all the users choices and taking it to the results page
    window.location.href = "results.html";
    getAPI (choiceArr);
};

getFirstQuestion(); // adding the button to go to the next question after selected
$(document).on("click", "#nextBtn", getQuestion);