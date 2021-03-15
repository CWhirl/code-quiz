var initial = localStorage.getItem("initials");
var score = localStorage.getItem("score")

if($('#initialOne').text() == "") {
    $('#initialOne').text(initial);
    $('#highScoreOne').text(score);
} else if ($('#initialTwo').text() == "") {
    $('#initialTwo').text(initial);
    $('#highScoreTwo').text(score);
} else {
    $('#initialThree').text(initial);
    $('#highScoreThree').text(score);
}

