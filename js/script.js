var donut 		= document.getElementById('click-counter');
var level 		= document.getElementById('level-no');
var autoClicker = document.getElementById('auto-clicker'); 

var clickCounter = 0;
var levelCounter = 0;
var autoClick = 0; 

donut.innerHTML 		= 'Donuts: ' + clickCounter;
level.innerHTML 		= 'Level: 0';
autoClicker.innerHTML 	= 'Auto-clicks: ' + autoClick;

$('.locked').prop('title', 'Achievement locked!');

$('#donut').click(function(){

	clickCounter +=1 + levelCounter;


	if(clickCounter > 0){
		$('#achievement1').removeClass('locked');
		$('#achievement1').prop('title', 'Clicked 1 donut!');
	}

	if(clickCounter > 4){
		$('#achievement2').removeClass('locked');
		$('#achievement2').prop('title', 'Clicked 5 donuts!');
	}

	if(clickCounter > 9){
		$('#achievement3').removeClass('locked');
		$('#achievement3').prop('title', 'Clicked 10 donuts!');
	}

	if(clickCounter > 19){
		$('#achievement4').removeClass('locked');
		$('#achievement4').prop('title', 'Clicked 20 donuts!');
	}

	if(clickCounter > 49){
		$('#achievement5').removeClass('locked');
		$('#achievement5').prop('title', 'Clicked 50 donuts!');
	}

	if(clickCounter > 99){
		$('#achievement6').removeClass('locked');
		$('#achievement6').prop('title', 'Clicked 100 donuts!');
	}

	levelCounter = Math.floor(clickCounter / 150);
	donut.innerHTML = 'Donuts: ' + clickCounter;
	level.innerHTML = 'Level: ' + levelCounter;

	// console.log(clickCounter, levelCounter);

});



