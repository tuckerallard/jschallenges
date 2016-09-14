$(function(){
var shootButtonOne = $('#teamone-shoot');
var shootButtonTwo = $('#teamtwo-shoot');
var resetButton = $('#reset');
var counter1 = 0;
var counter2 = 0;
var resetCounter = 0;
var teamOneHits = 0;
var teamTwoHits = 0;

//The function that determines the random roll for each try

function getRandomIntInclusive() {
 min = Math.ceil(0);
 max = Math.floor(1);
 return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Links the team 1 shoot button to the random roll + counter

shootButtonOne.click(function(){
    counter1++;
    $('#teamone-numshots').html(counter1);
    var result = getRandomIntInclusive();
    if (result ==1){
        $('body').css("background-color","blue");
        alert("GOAL!")
        teamOneHits++;
        $('#teamone-numhits').html(teamOneHits);
}
else {
        $('body').css("background-color","white");
        alert("Team 1 missed")
}

});

//Links the team 2 shoot button to the random roll + counter

shootButtonTwo.click(function(){
    counter2++;
    $('#teamtwo-numshots').html(counter2);
    var result = getRandomIntInclusive();
    if (result ==1){
        $('body').css("background-color","red");
        alert("GOAL!")
        teamTwoHits++;
        $('#teamtwo-numhits').html(teamTwoHits);
}
else {
        $('body').css("background-color","white");
        alert("Team 2 missed")
}

});

//Links the reset button to the reset command which erases the counter

resetButton.click(function(){
    $('body').css("background-color","white");
    resetCounter++;
    counter1 = 0;
    counter2 = 0;
    teamOneHits = 0;
    teamTwoHits = 0;
    $('#num-resets').html(resetCounter)
    $('#teamone-numshots').html(counter1);
    $('#teamtwo-numshots').html(counter2);
    $('#teamone-numhits').html(teamOneHits);
    $('#teamtwo-numhits').html(teamTwoHits);
});





})