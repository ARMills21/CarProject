var questions = [

    {
        title: "What Make?",
        choice: ["Chevrolet", "Ford", "Dodge", "Mazda", "Toyota"]
    },

    {
        title: "What is the body style of the car?",
        choice: ["Hatchback", "Sedan", "Coupe", "Convertible",
            "Pickup", "Van", "Minian", "SUV"]
    },

    {
        title: "How many doors?",
        choice: ["2", "4"]
    },

    {
        title: "What kind of fuel type?",
        choice: ["Electric", "Flex fuel", "Premium Unleaded", "Regular Unleaded", "Diesel"] // premium and regular unleaded is gas 
    },

    {
        title: "What kind of wheel drive?",
        choice: ["AWD", "Front", "4WD", "Rear"]
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
function getcarpixbymodelXML(model, $img) {
    var xmlpull = "http://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=" + model;
    $.get(xmlpull)
        .then(function (response) {
            var xmlparser = new X2JS();
            var carresponse = xmlparser.xml2json(response);

            $img.attr('src', carresponse.string.__text);
            $img.css('display', 'block');
        })
}

getFirstQuestion = () => {
    const firstChoices = questions[0].choice;
    $("#questions").html(questions[0].title);

    for (let i = 0; i < firstChoices.length; i++) {
        let qOption = $("<option>");
        qOption.text(firstChoices[i]);
        qOption.addClass("choices");
        qOption.attr("value", firstChoices[i]);
        $("#choices").append(qOption);
    };
};

function getAPI() {
    // This is where we will link the API's and code the ajax
    var trim = userChoices[1];
    var doors = userChoices[2];
    var make = userChoices[0];
    var fuel = userChoices[3];
    var drive = userChoices[4];

    var queryURL = "https://www.carqueryapi.com/api/0.3/?callback=&cmd=getTrims" +
        "&body=" + trim +
        "&make=" + make +
        "&doors=" + doors +
        "&fuel_type=" + fuel +
        "&drive=" + drive
    console.log(queryURL)
    $.ajax({
        url: encodeURI(queryURL),
        dataType: "jsonp"
    }).done((resp) => {
        var cars = resp.Trims[0]
        for(var i = 0; i < resp.Trims.length; i++)
        console.log(resp.Trims[0])
        const imgQuery = (cars.model_make_display + ' + ' + cars.model_name).toLowerCase();
        const $img = $('<img>');

        $('.title').text(cars.make_display + ' ' + cars.model_name);
        getcarpixbymodelXML(imgQuery, $img);
        $('.image').html($img);

        $('.seats').text('Seats: ' + cars.model_seats);
        getcarpixbymodelXML(imgQuery, $img);
        $('.image').html($img);

        $('.doors').text('Doors: ' + cars.model_doors);
        getcarpixbymodelXML(imgQuery, $img);
        $('.image').html($img);

        $('.transmission').text('Transmission: ' + cars.model_transmission_type);
        getcarpixbymodelXML(imgQuery, $img);
        $('.image').html($img);

        $('.year').text('Year: ' + cars.model_year);
        getcarpixbymodelXML(imgQuery, $img);
        $('.image').html($img);
    })
}

getQuestion = event => { // adding a event to the questions so it knows what to do
    event.preventDefault(); // preventing the choices to be removed when refreshed or changed to a different page

    // adding a bucket for the users choices and the value to be empty so selected is add to value
    getUserChoice();

    if (currentQuestion > 4) {
        // making it where when the user answers all the questions that it goes to the result page
        return getAPI();
    }

    // clearing out what is on the DOM currently
    $("#questions").html("");
    $("#choices").html("");

    let currentChoices = questions[currentQuestion].choice; // setting it to the current question it is on 

    $("#questions").html(questions[currentQuestion].title); // setting it the current question to the DOM

    for (let i = 0; i < currentChoices.length; i++) { // making it do the same as the first question
        let qOption = $("<option>").text(currentChoices[i]);
        qOption.addClass("choices");
        qOption.attr("value", currentChoices[i]);
        $("#choices").append(qOption);
    }
    currentQuestion++; // increments current question so it can go to the next question

    // check if we are in the last question, change the label of the btn to 'send'
}

function getUserChoice() { // keeping the user choices to a array
    const choice = $("#choices option:selected").val();
    userChoices.push(choice);
}

// getResults = choiceArr => { // making it pull all the users choices and taking it to the results page
//     window.location.href = "results.html";
//     getAPI(choiceArr);
// };

getFirstQuestion(); // adding the button to go to the next question after selected
$(document).on("click", "#nextBtn", getQuestion);

