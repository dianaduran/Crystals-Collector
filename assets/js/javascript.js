$(document).ready(function() {

$('.modal').modal("show");


//get random num between 1-120

var ranGuess = Math.floor(Math.random() * ((120-1)+1) + 1);
                    $("#numGuess").append(ranGuess);
                    

var win=0;
var loss=0;

var tagH1=$("#numSum");

var diam1=0, diam2=0,diam3=0, diam4=0;

var numSum=0;


//val random 1-12
diam1= Math.floor(Math.random() * ((12-1)+1) + 1);
console.log(diam1);
diam2= Math.floor(Math.random() * ((12-1)+1) + 1);
console.log(diam2);
diam3= Math.floor(Math.random() * ((12-1)+1) + 1);	
console.log(diam3);
diam4= Math.floor(Math.random() * ((12-1)+1) + 1);
console.log(diam4);



//click first Diamond
$("#diamond1").on("click", function(){

$("#diamond1").addClass("flash");
 numSum+=numSum+diam1;
 validate();
});

//click second diamind

$("#diamond2").on("click", function(){
	$("#diamond2").addClass("flash");
	numSum+=numSum+diam2;
	validate();
});

//click third diamond
$("#diamond3").on("click", function(){
 $("#diamond3").addClass("flash");
 numSum+=numSum+diam3;
 validate();
});

// click fourth diamond
$("#diamond4").on("click", function(){
 $("#diamond4").addClass("flash");
numSum+=numSum+diam4;
 validate();
});


//Reset play
function Reset(){

	ranGuess = Math.floor(Math.random() * ((120-1)+1) + 1);
	           $("#numGuess").text(ranGuess);	
	diam1= Math.floor(Math.random() * ((12-1)+1) + 1);
	diam2= Math.floor(Math.random() * ((12-1)+1) + 1);
	diam3= Math.floor(Math.random() * ((12-1)+1) + 1);
	diam4= Math.floor(Math.random() * ((12-1)+1) + 1);
	numSum=0;
	$("#numSum").text(numSum);
	$("#diamond1, #diamond2, #diamond3, #diamond4").removeClass("flash");

};



//function validate
function validate(){

//$("#diamond1, #diamond2, #diamond3, #diamond4").addClass("flash");
	if(numSum < ranGuess)
 {
 	tagH1.text(numSum);
 }

 else if( numSum == ranGuess)
 {
 	win++;
 	$("#idWin").text('Win: '+win);
 	$("#idMessage").text('You won '+win+' times!!');
 	Reset();
 }
 else{
 	loss++;
 	$("#idLoss").text('Loss: '+loss);
 	$("#idMessage").text('You lost '+loss+' times!!');
 	Reset();
 }

}

$("#reset").click(function(){
	Reset();
	win=0;
	loss=0;
	$("#idWin").text('Win: '+win);
	$("#idLoss").text('Loss: '+loss);
	$("#idMessage").text("");
});



});