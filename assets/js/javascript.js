$(document).ready(function() {

    $('.modal').modal("show");

    var win = 0;
    var loss = 0;

    var diam1 = 0,
        diam2 = 0,
        diam3 = 0,
        diam4 = 0;

    var numSum = 0;
    var tagH1 = $("#numSum");


    //get random num between 2-99
    var ranGuess = Math.floor((Math.random() * 120) + 1);
    $("#numGuess").append(ranGuess);

    //random 1-12
    diam1 = Math.floor((Math.random() * 12) + 1);
    console.log(diam1);
    diam2 = Math.floor((Math.random() * 12) + 1);
    console.log(diam2);
    diam3 = Math.floor((Math.random() * 12) + 1);
    console.log(diam3);
    diam4 = Math.floor((Math.random() * 12) + 1);
    console.log(diam4);



    //lost or win
    function validate() {

        if (numSum < ranGuess) {
            tagH1.text(numSum);
        } else if (numSum == ranGuess) {
            win++;
            $("#idWin").text('Win: ' + win);
            $("#idMessage").text('You won ' + win + ' times!!');
            Reset();
        } else {
            loss++;
            $("#idLoss").text('Loss: ' + loss);
            $("#idMessage").text('You lost ' + loss + ' times!!');
            Reset();
        }
    }



    //click first Diamond
    $("#diamond1").on("click", function() {
        $("#diamond1").toggleClass("flash");
        numSum += diam1;
        validate();
    });

    //click second diamind

    $("#diamond2").on("click", function() {
        $("#diamond2").toggleClass("flash");
        numSum += diam2;
        validate();
    });

    //click third diamond
    $("#diamond3").on("click", function() {
        $("#diamond3").toggleClass("flash");
        numSum += diam3;
        validate();
    });

    // click fourth diamond
    $("#diamond4").on("click", function() {
        $("#diamond4").toggleClass("flash");
        numSum += diam4;
        validate();
    });


    //Reset play
    function Reset() {

        ranGuess = Math.floor((Math.random() * 120) + 1);
        $("#numGuess").text(ranGuess);
        diam1 = Math.floor((Math.random() * 12) + 1);
        console.log(diam1);
        diam2 = Math.floor((Math.random() * 12) + 1);
        console.log(diam2);
        diam3 = Math.floor((Math.random() * 12) + 1);
        console.log(diam3);
        diam4 = Math.floor((Math.random() * 12) + 1);
        console.log(diam4);
        numSum = 0;
        $("#numSum").text(numSum);
    };


    $("#reset").click(function() {
        Reset();
        win = 0;
        loss = 0;
        $("#idWin").text('Win: ' + win);
        $("#idLoss").text('Loss: ' + loss);
        $("#idMessage").text("");
    });
});