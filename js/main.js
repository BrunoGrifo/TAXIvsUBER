"use strict";

(function()
{	
	window.addEventListener("load", main);

}());


function main()
{
	window.addEventListener("message",messageHandler);
	showPage("../html/menu.html");
}

function showPage(path)
{
	//carregar página na frame e enviar mensagem para a página logo que esteja carregada (frameLoadHandler)
	var frm = document.getElementsByTagName("iframe")[0];
	frm.src = path;
	frm.addEventListener("load",function(){
		frm.contentWindow.postMessage('mensagem aux para ter a ligaçao a pagina main ','*');
	});
}

function hidePage(pageNum)  //não é necessário (excepto se páginas diferentes tivessem zonas de navegação diferentes)
{
	var frm = document.getElementsByTagName("iframe")[0];
	frm.src = "";

}

function messageHandler(ev)
{
	var frm = document.getElementsByTagName("iframe")[0];
	var message = ev.data;
	var copy = message.split("-");
	if(message == "baixa_som"){
		var intro_menu = document.getElementById('som');
		if(intro_menu.volume > 0.5){
			intro_menu.volume = 0.5;
		}
	}else if(copy[0] == "vol"){
		var intro_menu = document.getElementById('som');
		intro_menu.volume = parseInt(copy[1])/100;
	}else{
		frm.src = message;
		if(frm.src == "about:blank"){
			window.close();
		}
	}
}	