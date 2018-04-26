"use strict";

(function()
{	
	window.addEventListener("load", main);

}());

var id;

function main()
{
	
	window.addEventListener("message",function(ev)
		{
			id =  messageHandler(ev);
		} 
	);

	var btnStart = document.getElementById("start");
	var btnOptions = document.getElementById("options");
	var btnScores = document.getElementById("free");
	var btnHelp = document.getElementById("help");
	var btnCredits = document.getElementById("credits");
	var btnExit = document.getElementById("exit");

	function htmlHandlerAux(ev){
		htmlMessagemHandler(ev);
	}


	btnStart.addEventListener("click",htmlHandlerAux);
	btnOptions.addEventListener("click",htmlHandlerAux);
	btnScores.addEventListener("click",htmlHandlerAux);
	btnHelp.addEventListener("click",htmlHandlerAux);
	btnCredits.addEventListener("click",htmlHandlerAux);
	btnExit.addEventListener("click",htmlHandlerAux);

}


function htmlMessagemHandler(ev){
	if(ev.target.id == "start"){
		id.postMessage('../html/newgame.html','*');
	}
	if(ev.target.id == "options"){
		id.postMessage('../html/options.html','*');
	}
	if(ev.target.id == "free"){
		console.log("envia ../html/newgame.html");
		id.postMessage('../html/newgame.html','*');
	}
	if(ev.target.id == "help"){
		id.postMessage('../html/help.html','*');
	}
	if(ev.target.id == "credits"){
		id.postMessage('../html/creditos.html','*');
	}
	if(ev.target.id == "exit"){
		id.postMessage('about:blank','*');
	}
}



function messageHandler(ev){
	
	return ev.source;
}