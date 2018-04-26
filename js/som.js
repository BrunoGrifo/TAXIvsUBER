window.onload = function(){
	console.log("som: set");
	//funcao de inicializacao
	var intro_menu = document.getElementById('som');
	intro_menu.src = "../sounds/IntroMenu.wav";
	intro_menu.loop = true;
	intro_menu.play();
}