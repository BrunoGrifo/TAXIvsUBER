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

	var btnOpcoesPausa = document.getElementById("opcoes");
	var btnRestartPausa = document.getElementById("restart");
	var btnSairPausa = document.getElementById("sair");

	var btnContinuar1 = document.getElementById("continuar1");

	var btnRestartGameover = document.getElementById("restartGameover");
	var btnSairGameover = document.getElementById("sairGameover");

	function htmlHandlerAux(ev){
		htmlMessagemHandler(ev);
	}

	btnOpcoesPausa.addEventListener("click",htmlHandlerAux);
	btnRestartPausa.addEventListener("click",htmlHandlerAux);
	btnSairPausa.addEventListener("click",htmlHandlerAux);

	btnContinuar1.addEventListener("click",htmlHandlerAux);

	btnRestartGameover.addEventListener("click",htmlHandlerAux);
	btnSairGameover.addEventListener("click",htmlHandlerAux);

}

function htmlMessagemHandler(ev){
	if(ev.target.id == "opcoes"){
		id.postMessage('../html/options.html','*');
	}else if(ev.target.id == "restart"){
		id.postMessage('../html/newgame.html','*');
	}else if(ev.target.id == "sair"){
		id.postMessage('../html/menu.html','*');
	}else if(ev.target.id == "restartGameover"){
		id.postMessage('../html/newgame.html','*');
	}else if(ev.target.id == "sairGameover"){
		id.postMessage('../html/menu.html','*');
	}else if(ev.target.id == "continuar1"){
		id.postMessage('baixa_som','*');
	}
}

function messageHandler(ev){
	
	return ev.source;
}