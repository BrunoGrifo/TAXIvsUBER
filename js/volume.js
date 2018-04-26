/* criar script para controlar a barra do som */ 
"use strict";

(function()
{   
    window.addEventListener("load", main);

}());

var percFinal = 50;

function main()
{

    var volumeDrag = false;

    var volume = document.getElementById("volume");
    var volumeBar = document.getElementById("volumeBar");

    volume.addEventListener("mousedown", function(ev){
        volumeDrag = true;
        updateVolume(ev.pageX);    
    });

    window.addEventListener("mouseup", function(ev){
        if(volumeDrag){
            volumeDrag = false;
            updateVolume(ev.pageX);
        }
    });

    window.addEventListener("mousemove", function(ev){
        if(volumeDrag){
            updateVolume(ev.pageX);
        }
    });

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
    console.log(perc);
}

function getVolume(){
    return percFinal;
}