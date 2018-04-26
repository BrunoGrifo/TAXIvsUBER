"use strict";

(function()
{	
	window.addEventListener("load", main);

}());

var id;
var percFinal;

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


    var volumeDrag = false;

    var volume = document.getElementById("volume");
    var volumeBar = document.getElementById("volumeBar");

    volume.addEventListener("mousedown", function(ev){
        volumeDrag = true;
        updateVolume(ev.pageX); 
        id.postMessage('vol-'+Math.floor(percFinal),'*'); 
    });

    window.addEventListener("mouseup", function(ev){
        if(volumeDrag){
            volumeDrag = false;
            updateVolume(ev.pageX);
            id.postMessage('vol-'+Math.floor(percFinal),'*');
        }
    });

    window.addEventListener("mousemove", function(ev){
        if(volumeDrag){
            updateVolume(ev.pageX);
            id.postMessage('vol-'+Math.floor(percFinal),'*');
        }
    });


}


function htmlMessagemHandler(ev){
	if(ev.target.id == "Back"){
		id.postMessage('../html/menu.html','*');
	}
}



function messageHandler(ev){
	
	return ev.source;
}


function updateVolume(x,vol){
    var volume = document.getElementById("volume");
    var volumeBar = document.getElementById("volumeBar");
    var perc;

    //console.log(volume.offsetLeft);
    //console.log(x);
    var pos = x - volume.offsetLeft;
    //console.log(pos);
    //console.log(volume.clientWidth);

    perc = 100 * pos / volume.clientWidth;
    

    if(perc>100){
        perc = 100;
    }
    if(perc<0){
        perc = 0;
    }

    volumeBar.style.width = perc + '%';
    percFinal = perc;
    console.log(perc);
    
}

function getVolume(){
    return percFinal;
}