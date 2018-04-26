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

	var btnBack = document.getElementById("Back");

	function htmlHandlerAux(ev){
		htmlMessagemHandler(ev);
	}

	btnBack.addEventListener("click",htmlHandlerAux);
}

function htmlMessagemHandler(ev){
	if(ev.target.id == "Back"){
		id.postMessage('../html/menu.html','*');
	}
}


function messageHandler(ev){
	
	return ev.source;
}