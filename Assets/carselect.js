var questions = [

    {
        title: "What type of vehicle are you looking for?",
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


/**
* $(document).on("click", "#nextBtn", getQuestion);
* Every programming language that can make a HTTP request and parse XML is a suitable
* client for this API; here is a sample GET request:
* http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=ford+fiesta
* This returns the following XML
* <string xmlns="http://carimagery.com/">
* http://www.regcheck.org.uk/image.aspx/@Zm9yZCBmaWVzdGE=
* </string>
* If you prefer to use a HTTPS source for the image, then you can simpl
*/
function getcarpixbymodelXML(model, placeholder = 'carsample') {
    var xmlpull = "http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=" + model;
    $.get(xmlpull)
        .then(function (response) {
            var xmlparser = new X2JS();
            var carresponse = xmlparser.xml2json(response);

            var $img = $("#"+placeholder);

            if ($img.length) {
                $img.attr('src', carresponse.string.__text);
                $img.css('display', 'block');
            }


            // $("#carsample").attr('src', carresponse.string.__text)

        })
}
getcarpixbymodelXML("ford+fiesta", "carsample");

getFirstQuestion = () => {
    const firstChoices = questions[0].choice;
    $("#questions").html(questions[0].title);
    for (let i = 0; i < firstChoices.length; i++) {
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

    if (currentQuestion >= 4) {
        getResults(userChoices);
    }
    else {
        $("#questions").html("");
        $("#choices").html("");

        let currentChoices = questions[currentQuestion].choice;

        $("#questions").html(questions[currentQuestion].title);

        for (let i = 0; i < currentChoices.length; i++) {
            let qOption = $("<option>").text(currentChoices[i]);
            qOption.addClass("choices");
            qOption.attr("value", currentChoices[i]);
            $("#choices").append(qOption);
        }
        currentQuestion++;
    }
}

getAPI = Arr => {
    // This is where we will link the API's and code the ajax
}

getUserChoice = choice => {
    userChoices.push(choice);
    console.log(userChoices);
};

getResults = choiceArr => {
    window.location.href = "results.html";
    getAPI(choiceArr);
};

getFirstQuestion();
