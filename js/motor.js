window.onload = function(){
	console.log("janela: set");
	//funcao de inicializacao
	arranca();
}

function arranca(){
	
	console.log("jogo: a arrancar...");

	//Inicializa objeto jogo
	var jogo = new jogo1();
	jogo.ctx.font = "bold 15px Impact";

	jogo.setLevel1();
	jogo.btnContinuar1.onclick = function(){
		jogo.intro1.style.display = 'none';
		jogo.ready = true;
	}

	//Player1 Listeners para as teclas
	window.addEventListener("keydown", function(ev) {
		
		if(jogo.ready==true){
			if(ev.keyCode==37) {
				if(jogo.level==1)
					jogo.player1.esquerda++;
				jogo.arrowleft=true;
			}else if(ev.keyCode==39) {
				if(jogo.level==1)
					jogo.player1.direita++;
				jogo.arrowright=true;
			}
			if(ev.keyCode==38) {
				if(jogo.level==1)
					jogo.player1.cima++;
				jogo.arrowup=true;
			}else if(ev.keyCode==40) {
				if(jogo.level==1)
					jogo.player1.baixo++;
				jogo.arrowdown=true;
			}
			if (ev.keyCode == 189) {
				/*if(jogo.player1.tiros.length>1){
					console.log("piu");
					jogo.player1.tiros[0].Xpos=jogo.player1.Xpos;
					jogo.player1.tiros[0].Ypos=jogo.player1.Ypos;
					jogo.player1.tiros[0].dir=jogo.player1.dir;
					console.log(jogo.player1.tiros[0].dir);
					jogo.player1.shotsFired.push(jogo.player1.tiros.shift());
				}*/
				if(jogo.level==1){
					var beer = new Beer();
					beer.Xpos = jogo.player1.Xpos;
					beer.Ypos = jogo.player1.Ypos;
					beer.dir = jogo.player1.dir;
					jogo.player1.beersThrown.push(beer);
					
				}else{
					var tiro = new Tiro();
					tiro.Xpos = jogo.player1.Xpos;
					tiro.Ypos = jogo.player1.Ypos;
					tiro.dir = jogo.player1.dir;
					jogo.player1.shotsFired.push(tiro);
					tiro.shot_sound.play();
				}
				jogo.arrowattack = true;
			}
			if (ev.keyCode == 190) {
				if(jogo.level==1){
					
				}else{
					var mine = new Mine();
					mine.Xpos = jogo.player1.Xpos;
					mine.Ypos = jogo.player1.Ypos;
					jogo.player1.verifyMines(mine);
					//jogo.player1.mines.push(mine);
					//jogo.player1.mine=mine;
				}
				jogo.buttonAttack = true;
			}
		}
	});

	window.addEventListener("keyup", function(ev) {
		if(jogo.ready){
			if(ev.keyCode==37) {
				jogo.arrowleft=false;
				jogo.player1.frame=0;
			} else if(ev.keyCode==39) {
				jogo.arrowright=false;
				jogo.player1.frame=0;
			}
			if(ev.keyCode==38) {
				jogo.arrowup=false;
				jogo.player1.frame=0;
			} else if(ev.keyCode==40) {
				jogo.arrowdown=false;
				jogo.player1.frame=0;
			}
			if (ev.keyCode == 69) {
				jogo.arrowtarget = false;
			}
			else if(ev.keyCode == 27){
				if(jogo.pause == true){
					jogo.pause = false;
					jogo.divpause.style.display = 'none';
				}else{
					jogo.pause = true;
				}
			}
		}
	});

	window.addEventListener("keydown", function(ev) {
		console.log("KEY PRESSED");
		if(jogo.ready){
			if(ev.keyCode==65) {
				if(jogo.level==1)
					jogo.player2.esquerda++;
				jogo.buttonA=true;
			}else if(ev.keyCode==68) {
				if(jogo.level==1)
					jogo.player2.direita++;
				jogo.buttonD=true;
			}
			if(ev.keyCode==83) {
				if(jogo.level==1)
					jogo.player2.baixo++;
				jogo.buttonS=true;
			}else if(ev.keyCode==87) {
				if(jogo.level==1)
					jogo.player2.cima++;
				jogo.buttonW=true;
			}
			if (ev.keyCode == 81) {
				if(jogo.level==1){
					var beer1 = new Beer();
					beer1.Xpos = jogo.player2.Xpos;
					beer1.Ypos = jogo.player2.Ypos;
					beer1.dir = jogo.player2.dir;
					jogo.player2.beersThrown.push(beer1);				
				}else{
					var tiro1 = new Tiro();
					tiro1.Xpos = jogo.player2.Xpos;
					tiro1.Ypos = jogo.player2.Ypos;
					tiro1.dir = jogo.player2.dir;
					jogo.player2.shotsFired.push(tiro1);
					tiro1.shot_sound.play();
				}
				jogo.buttonAttack = true;
			}
			if (ev.keyCode == 49) {
				if(jogo.level==1){	
				}else{
					var mine1 = new Mine();
					mine1.Xpos = jogo.player2.Xpos;
					mine1.Ypos = jogo.player2.Ypos;
					jogo.player2.mines.push(mine1);
					//jogo.player2.mines.push(mine1);
					//jogo.player2.mine=mine1;
				}
				jogo.buttonAttack = true;
			}
		}
	});

	window.addEventListener("keyup", function(ev) {
		if(jogo.ready){
			if(ev.keyCode==65) {
				jogo.buttonA=false;
				jogo.player2.frame=0;
			}else if(ev.keyCode==68) {
				jogo.buttonD=false;
				jogo.player2.frame=0;
			}
			if(ev.keyCode==83) {
				jogo.buttonS=false;
				jogo.player2.frame=0;
			}else if(ev.keyCode==87) {
				jogo.buttonW=false;
				jogo.player2.frame=0;
			}
		}
	});

	draw_map(jogo);
	draw_barra(jogo);
	Start(jogo);

}



function Start(jogo){

	if(jogo.pause == true){
		console.log("entra pausa");

		jogo.divpause.style.display = 'block';

		jogo.btnContinuar.onclick = function(){
			console.log("entrou continuar");
			jogo.divpause.style.display = 'none';
			jogo.pause = false;
		}

		jogo.btnOpcoes.onclick = function(){
			console.log("entra opcoes");
		}		

		jogo.btnRestart.onclick = function(){
			console.log("entra restart");
			//Criar função que faz reset ao jogo
		}

		jogo.btnSair.onclick = function(){
			console.log("entra sair");
		}

	}else if(jogo.terminado == true){
		console.log("jogo terminado");
		jogo.divgameover.style.display = 'block';
		if(jogo.winnerFinal == 1){
			document.getElementById("vencedorStats").innerHTML = "Winner: Taxi";
		}else{
			document.getElementById("vencedorStats").innerHTML = "Winner: Uber";
		}

	}else{
		var check = update(jogo);
		if (check == 1) {
			//Termina jogo
			return;
		}

		if(jogo.level==1){
			draw_map(jogo);
			drawElements(jogo);
			drawBeersPlayer1(jogo);
			draw_barra(jogo);
			
		}else{
			draw_map(jogo);
			drawMines(jogo);
			drawElements(jogo);
			drawShotsPlayers(jogo);
			//drawShotsPlayer2(jogo);
			draw_barra(jogo);
		}
	}

	requestAnimationFrame(function(ev){
		Start(jogo);
	});
}

function update(jogo){
	if(jogo.winnerFinal != 0){
		//Termina jogo, mostra resultados finais (vencedor, tempo? etc)
		jogo.terminado = true;
	}

	if(jogo.level == 1){
		if(jogo.player1.health == 0){
			jogo.winner1aFase = 2;
			jogo.setLevel2();
			jogo.btnContinuar2.onclick = function(){
				jogo.intro2.style.display = 'none';
				jogo.ready = true;
			}
			console.log("Entrou player morto. Winner: " + jogo.winner1aFase);
		}else if(jogo.player2.health == 0){
			jogo.winner1aFase = 1;
			jogo.setLevel2();
			jogo.btnContinuar2.onclick = function(){
				jogo.intro2.style.display = 'none';
				jogo.ready = true;
			}
			console.log("Entrou player morto. Winner: " + jogo.winner1aFase);
		}
	
	}else if(jogo.level == 2){
		if(jogo.player1.health == 0){
			jogo.winnerFinal = 2;
			console.log("Entrou player morto. Winner: " + jogo.winnerFinal);
		}else if(jogo.player2.health == 0){
			jogo.winnerFinal = 1;
			console.log("Entrou player morto. Winner: " + jogo.winnerFinal);
		}

		else if(jogo.winner1aFase == 1){
			//Se player1 chegar ao final, winnerFinal == 1;
			if(jogo.mapa.mapaprincipal[Math.floor(jogo.player1.Ypos)][Math.floor(jogo.player1.Xpos)][0] == "roadFinal"){
				jogo.winnerFinal = 1;
				console.log("Entrou Player 1 chegou meta. Winner: " + jogo.winnerFinal);
			}
		}else if(jogo.winner1aFase == 2){
			//Se player2 chegar ao final, winnerFinal == 2;
			if(jogo.mapa.mapaprincipal[Math.floor(jogo.player2.Ypos)][Math.floor(jogo.player2.Xpos)][0] == "roadFinal"){
				jogo.winnerFinal = 2;
				console.log("Entrou Player 2 chegou meta. Winner: " + jogo.winnerFinal);
			}
		}

	}

	//Controlador do player
	player1Controller(jogo);
	player2Controller(jogo);

	for(i=0;i<25;i++){
		for(j=0;j<40;j++){
			if(jogo.mapa.mapaprincipal[i][j][2]=="player1" || jogo.mapa.mapaprincipal[i][j][2]=="player2"){
				jogo.mapa.mapaprincipal[i][j][2]=0;
			}
		}
	}

	jogo.frame++;
	return 0;
}


function player1Controller(jogo) {
	//Corrigir interseções
	if(jogo.arrowdown){
		jogo.player1.dir = 2
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player1.Ypos+0.2)][Math.floor(jogo.player1.Xpos)][2])!=1 && ( (Math.floor(jogo.player1.Xpos) != Math.floor(jogo.player2.Xpos)) || (Math.floor(jogo.player1.Ypos+0.2) != Math.floor(jogo.player2.Ypos)) ) ) {
			jogo.player1.Ypos+=0.2;
			jogo.player1.frame++;
		}

	} else if(jogo.arrowup) {
		jogo.player1.dir=0;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player1.Ypos-0.2)][Math.floor(jogo.player1.Xpos)][2])!=1 && ( (Math.floor(jogo.player1.Xpos) != Math.floor(jogo.player2.Xpos)) || (Math.floor(jogo.player1.Ypos-0.2) != Math.floor(jogo.player2.Ypos)) ) ) {
			jogo.player1.Ypos-=0.2;
			jogo.player1.frame++;
		}
	}

	if(jogo.arrowright) {
		jogo.player1.dir=1;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player1.Ypos)][Math.floor(jogo.player1.Xpos+0.2)][2])!=1 && ( (Math.floor(jogo.player1.Xpos+0.2) != Math.floor(jogo.player2.Xpos)) || (Math.floor(jogo.player1.Ypos) != Math.floor(jogo.player2.Ypos)) ) ) {
			jogo.player1.Xpos+=0.2;
			jogo.player1.frame++;
		}

	} else if(jogo.arrowleft) {
		jogo.player1.dir=3;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player1.Ypos)][Math.floor(jogo.player1.Xpos-0.2)][2])!=1 && ( (Math.floor(jogo.player1.Xpos-0.2) != Math.floor(jogo.player2.Xpos)) || (Math.floor(jogo.player1.Ypos) != Math.floor(jogo.player2.Ypos)) ) ) {
			jogo.player1.Xpos-=0.2;
			jogo.player1.frame++;
		}
	}
}

function player2Controller(jogo) {
	if(jogo.buttonS){
		jogo.player2.dir = 2;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player2.Ypos+0.2)][Math.floor(jogo.player2.Xpos)][2])!=1 && ( (Math.floor(jogo.player1.Xpos) != Math.floor(jogo.player2.Xpos)) || (Math.floor(jogo.player1.Ypos) != Math.floor(jogo.player2.Ypos+0.2)) ) ) {
			jogo.player2.Ypos+=0.2;
			jogo.player2.frame++;
		}

	} else if(jogo.buttonW) {
		jogo.player2.dir=0;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player2.Ypos-0.2)][Math.floor(jogo.player2.Xpos)][2])!=1 && ( (Math.floor(jogo.player1.Xpos) != Math.floor(jogo.player2.Xpos)) || (Math.floor(jogo.player1.Ypos) != Math.floor(jogo.player2.Ypos-0.2)) ) ) {
			jogo.player2.Ypos-=0.2;
			jogo.player2.frame++;
		}
	}

	if(jogo.buttonD) {
		jogo.player2.dir=1;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player2.Ypos)][Math.floor(jogo.player2.Xpos+0.2)][2])!=1 && ( (Math.floor(jogo.player1.Xpos) != Math.floor(jogo.player2.Xpos+0.2)) || (Math.floor(jogo.player1.Ypos) != Math.floor(jogo.player2.Ypos)) ) ) {
			jogo.player2.Xpos+=0.2;
			jogo.player2.frame++;
		}

	} else if(jogo.buttonA) {
		jogo.player2.dir=3;
		if((jogo.mapa.mapaprincipal[Math.floor(jogo.player2.Ypos)][Math.floor(jogo.player2.Xpos-0.2)][2])!=1 && ( (Math.floor(jogo.player1.Xpos) != Math.floor(jogo.player2.Xpos-0.2)) || (Math.floor(jogo.player1.Ypos) != Math.floor(jogo.player2.Ypos)) ) ) {
			jogo.player2.Xpos-=0.2;
			jogo.player2.frame++;
		}
	}
}

function draw_map(jogo) {
	

	var i=0,j=0,n=0;
	for(i=0;i<25;i++){
		for(j=0;j<40;j++){
			if(jogo.mapa.mapaprincipal[i][j][0]=="house"){
				jogo.ctx.drawImage(jogo.mapa.house,j*32,i*32,32,32);
				//drawImage( IMAGEM , posição em pixeis no XX a partir de onde cortamos , YY em que cortamos, Quantidade px em XX, em YY , XX, YY )
			}else if(jogo.mapa.mapaprincipal[i][j][0]=="road"){
				jogo.ctx.drawImage(jogo.mapa.road,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][0]=="roadFinal"){
				jogo.ctx.drawImage(jogo.mapa.roadFinal,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][0]=="grass"){
				jogo.ctx.drawImage(jogo.mapa.grass,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][0]=="lava"){
				jogo.ctx.drawImage(jogo.mapa.lava,j*32,i*32,32,32);
			}else{
				jogo.ctx.drawImage(jogo.mapa.blacktile,j*32,i*32,32,32);
			}
		}
	}
	
};

function drawElements(jogo) {
	//desenhar heroi
	for(i=0;i<25;i++) {
		for(j=0;j<40;j++) {
			if(Math.floor(jogo.player1.Xpos)==j && Math.floor(jogo.player1.Ypos)==i  ) {
				if(jogo.level==1){
					if(jogo.player1.dir==0){
						jogo.ctx.drawImage(jogo.player1.charsprite,(jogo.player1.cima%4)*32,0*64,32,64,j*32,i*32,32,32);
					}else if(jogo.player1.dir==1){
						jogo.ctx.drawImage(jogo.player1.charsprite,(jogo.player1.direita%8)*32,2*64,32,64,j*32,i*32,32,32);
					}else if(jogo.player1.dir==2){
						jogo.ctx.drawImage(jogo.player1.charsprite,(jogo.player1.baixo%4)*32,1*64,32,64,j*32,i*32,32,32);
					}else{
						jogo.ctx.drawImage(jogo.player1.charsprite,(jogo.player1.esquerda%8)*32,3*64,32,64,j*32,i*32,32,32);
					}
				}else{
					jogo.ctx.drawImage(jogo.player1.charsprite,jogo.player1.dir*256,0,256,256,j*32,i*32,32,32);		
					checkMinesPlayer2(jogo,Math.floor(jogo.player1.Xpos),Math.floor(jogo.player1.Ypos),j,i);
				}	
			}
			if(Math.floor(jogo.player2.Xpos)==j && Math.floor(jogo.player2.Ypos)==i  ) {
				if(jogo.level==1){
					if(jogo.player2.dir==0){
						jogo.ctx.drawImage(jogo.player2.charsprite,(jogo.player2.cima%4)*32,0*64,32,64,j*32,i*32,32,32);
					}else if(jogo.player2.dir==1){
						jogo.ctx.drawImage(jogo.player2.charsprite,(jogo.player2.direita%8)*32,2*64,32,64,j*32,i*32,32,32);
					}else if(jogo.player2.dir==2){
						jogo.ctx.drawImage(jogo.player2.charsprite,(jogo.player2.baixo%4)*32,1*64,32,64,j*32,i*32,32,32);
					}else{
						jogo.ctx.drawImage(jogo.player2.charsprite,(jogo.player2.esquerda%8)*32,3*64,32,64,j*32,i*32,32,32);
					}
				}else{
					jogo.ctx.drawImage(jogo.player2.charsprite,jogo.player2.dir*256,0,256,256,j*32,i*32,32,32);
					checkMinesPlayer1(jogo,Math.floor(jogo.player2.Xpos),Math.floor(jogo.player2.Ypos),j,i);
				}	
			}
			if(jogo.mapa.mapaprincipal[i][j][1]=="ferroD"){
				jogo.ctx.drawImage(jogo.mapa.ferroD,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][1]=="ferroE"){
				jogo.ctx.drawImage(jogo.mapa.ferroE,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][1]=="madD"){
				jogo.ctx.drawImage(jogo.mapa.madD,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][1]=="madE"){
				jogo.ctx.drawImage(jogo.mapa.madE,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][1]=="shield"){
				jogo.ctx.drawImage(jogo.mapa.shield,j*32,i*32,32,32);
			}else if(jogo.mapa.mapaprincipal[i][j][1]=="client"){
				jogo.ctx.drawImage(jogo.mapa.client,j*32,i*32,32,32);
			}
		}
	}
}


function draw_barra(jogo){
	// Desenha barra vida uber
	jogo.barractx.drawImage(jogo.uberLogo,0,0,jogo.uberLogo.width,jogo.uberLogo.height,4.5,22.5,25,100);
	jogo.barractx.fillStyle = "red";
	jogo.barractx.fillRect(35,50,100,50);
	jogo.barractx.fillStyle = "green";
	jogo.barractx.fillRect(35,50,jogo.player2.health,50);

	// Desenha barra vida taxi
	jogo.barractx.drawImage(jogo.taxiLogo,0,0,jogo.taxiLogo.width,jogo.taxiLogo.height,157.5,22.5,25,100);
	jogo.barractx.fillStyle = "red";
	jogo.barractx.fillRect(190,50,100,50);
	jogo.barractx.fillStyle = "green";
	jogo.barractx.fillRect(190,50,jogo.player1.health,50);	

}

function drawShotsPlayers(jogo){
	for(i=0;i<25;i++) {
		for(j=0;j<40;j++) {
			for(l=0;l<jogo.player1.shotsFired.length;l++){
				if(Math.floor(jogo.player1.shotsFired[l].Xpos)==j && Math.floor(jogo.player1.shotsFired[l].Ypos)==i  ) {
					if(Math.floor(jogo.player1.shotsFired[l].Xpos) == Math.floor(jogo.player2.Xpos) && Math.floor(jogo.player1.shotsFired[l].Ypos)== Math.floor(jogo.player2.Ypos)){
						/*drawExplosion(jogo,jogo.player1.shotsFired[l].Xpos,jogo.player1.shotsFired[l].Ypos,jogo.player1.shotsFired[l]);
						if(jogo.player1.shotsFired[l].frame==30){
							jogo.player1.shotsFired.splice(l,1);
						}*/
						jogo.player1.shotsFired.splice(l,1);
						jogo.player2.setHealth(jogo.player2.health - 2);
					}else if(jogo.mapa.mapaprincipal[i][j][1] == "lava"){
						jogo.player1.shotsFired.splice(l,1);
					}else{
						if(jogo.player1.shotsFired[l].dir==0){
							jogo.ctx.drawImage(jogo.player1.shotsFired[l].image,jogo.player1.shotsFired[l].dir*256,0,256,256,j*32,i*32-32,32,32);
							jogo.player1.shotsFired[l].Ypos-=0.85;
						}else if(jogo.player1.shotsFired[l].dir==1){
							jogo.ctx.drawImage(jogo.player1.shotsFired[l].image,jogo.player1.shotsFired[l].dir*256,0,256,256,j*32+32,i*32,32,32);
							jogo.player1.shotsFired[l].Xpos+=0.5;
						}else if(jogo.player1.shotsFired[l].dir==2){
							jogo.ctx.drawImage(jogo.player1.shotsFired[l].image,jogo.player1.shotsFired[l].dir*256,0,256,256,j*32,i*32+32,32,32);
							jogo.player1.shotsFired[l].Ypos+=0.5;
						}else if(jogo.player1.shotsFired[l].dir==3){
							jogo.ctx.drawImage(jogo.player1.shotsFired[l].image,jogo.player1.shotsFired[l].dir*256,0,256,256,j*32-32,i*32,32,32);
							jogo.player1.shotsFired[l].Xpos-=0.85;
						}
					}
								
				}
			}
			//player2
			for(l=0;l<jogo.player2.shotsFired.length;l++){
				if(Math.floor(jogo.player2.shotsFired[l].Xpos)==j && Math.floor(jogo.player2.shotsFired[l].Ypos)==i  ) {
					//console.log(jogo.player1.shotsFired[l].Xpos.toPrecision(1));
					//console.log(jogo.player2.Xpos.toPrecision(1));
					if(Math.floor(jogo.player2.shotsFired[l].Xpos) == Math.floor(jogo.player1.Xpos) && Math.floor(jogo.player2.shotsFired[l].Ypos)== Math.floor(jogo.player1.Ypos)){
						/*drawExplosion(jogo,jogo.player1.shotsFired[l].Xpos,jogo.player1.shotsFired[l].Ypos,jogo.player1.shotsFired[l]);
						if(jogo.player1.shotsFired[l].frame==30){
							jogo.player1.shotsFired.splice(l,1);
						}*/
						jogo.player2.shotsFired.splice(l,1);
						jogo.player1.setHealth(jogo.player1.health - 2);
					}else if(jogo.mapa.mapaprincipal[i][j][1] == "lava"){
						jogo.player2.shotsFired.splice(l,1);
					}else{
						if(jogo.player2.shotsFired[l].dir==0){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32,i*32-32,32,32);
							jogo.player2.shotsFired[l].Ypos-=0.85;
						}else if(jogo.player2.shotsFired[l].dir==1){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32+32,i*32,32,32);
							jogo.player2.shotsFired[l].Xpos+=0.5;
						}else if(jogo.player2.shotsFired[l].dir==2){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32,i*32+32,32,32);
							jogo.player2.shotsFired[l].Ypos+=0.5;
						}else if(jogo.player2.shotsFired[l].dir==3){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32-32,i*32,32,32);
							jogo.player2.shotsFired[l].Xpos-=0.85;
						}
					}
								
				}
			}



		}
	}
}
function drawBeersPlayer1(jogo){
	for(i=0;i<25;i++) {
		for(j=0;j<40;j++) {
			for(l=0;l<jogo.player1.beersThrown.length;l++){
				if(Math.floor(jogo.player1.beersThrown[l].Xpos)==j && Math.floor(jogo.player1.beersThrown[l].Ypos)==i  ) {
					if(Math.floor(jogo.player1.beersThrown[l].Xpos) == Math.floor(jogo.player2.Xpos) && Math.floor(jogo.player1.beersThrown[l].Ypos)== Math.floor(jogo.player2.Ypos)){
						jogo.player1.beersThrown.splice(l,1);
						jogo.player2.setHealth(jogo.player2.health - 2);
					}else if(jogo.mapa.mapaprincipal[i][j][1] == "shield" || jogo.mapa.mapaprincipal[i][j][1] == "madE" || jogo.mapa.mapaprincipal[i][j][1] == "madD" || jogo.mapa.mapaprincipal[i][j][1] == "ferroE" || jogo.mapa.mapaprincipal[i][j][1] == "ferroD"){
						if(Math.floor(jogo.player1.beersThrown[l].Xpos) == Math.floor(i) && Math.floor(jogo.player1.beersThrown[l].Ypos) == Math.floor(j)){
							jogo.player1.beersThrown[l].shot_sound.play();
							jogo.player1.beersThrown.splice(l,1);
						}else{
							jogo.player1.beersThrown[l].shot_sound.play();
							jogo.player1.beersThrown.splice(l,1);
						}
					}else{
						if(jogo.player1.beersThrown[l].dir==0){
							jogo.ctx.drawImage(jogo.player1.beersThrown[l].image,0,0,256,256,j*32,i*32-32,32,32);
							jogo.player1.beersThrown[l].Ypos-=0.4;
						}else if(jogo.player1.beersThrown[l].dir==1){
							jogo.ctx.drawImage(jogo.player1.beersThrown[l].image,jogo.player1.beersThrown[l].direita%4*256,0,256,256,j*32+32,i*32,32,32);
							jogo.player1.beersThrown[l].Xpos+=0.25;
							jogo.player1.beersThrown[l].counterD +=0.25;
							if(jogo.player1.beersThrown[l].counterD%1==0)
								jogo.player1.beersThrown[l].direita++;
						}else if(jogo.player1.beersThrown[l].dir==2){
							jogo.ctx.drawImage(jogo.player1.beersThrown[l].image,0,0,256,256,j*32,i*32+32,32,32);
							jogo.player1.beersThrown[l].Ypos+=0.25;
						}else if(jogo.player1.beersThrown[l].dir==3){
							jogo.ctx.drawImage(jogo.player1.beersThrown[l].image,jogo.player1.beersThrown[l].esquerda%4*256,0,256,256,j*32-32,i*32,32,32);
							jogo.player1.beersThrown[l].Xpos-=0.4;
							jogo.player1.beersThrown[l].counterE +=0.25;
							if(jogo.player1.beersThrown[l].counterE%1==0){
								jogo.player1.beersThrown[l].esquerda++;
							}
						}
					}		
				}
			}
			for(l=0;l<jogo.player2.beersThrown.length;l++){
				if(Math.floor(jogo.player2.beersThrown[l].Xpos)==j && Math.floor(jogo.player2.beersThrown[l].Ypos)==i  ) {
					if(Math.floor(jogo.player2.beersThrown[l].Xpos) == Math.floor(jogo.player1.Xpos) && Math.floor(jogo.player2.beersThrown[l].Ypos)== Math.floor(jogo.player1.Ypos)){
						jogo.player2.beersThrown.splice(l,1);
						jogo.player1.setHealth(jogo.player1.health - 2);
					}else if(jogo.mapa.mapaprincipal[i][j][1] == "shield" || jogo.mapa.mapaprincipal[i][j][1] == "madE" || jogo.mapa.mapaprincipal[i][j][1] == "madD" || jogo.mapa.mapaprincipal[i][j][1] == "ferroE" || jogo.mapa.mapaprincipal[i][j][1] == "ferroD"){
						if(Math.floor(jogo.player2.beersThrown[l].Xpos) == i && Math.floor(jogo.player2.beersThrown[l].Ypos) == j){
							jogo.player2.beersThrown[l].shot_sound.play();
							jogo.player2.beersThrown.splice(l,1);
						}
						else{
							jogo.player2.beersThrown[l].shot_sound.play();
							jogo.player2.beersThrown.splice(l,1);
						}
					}else{
						if(jogo.player2.beersThrown[l].dir==0){
							jogo.ctx.drawImage(jogo.player2.beersThrown[l].image,0,0,256,256,j*32,i*32-32,32,32);
							jogo.player2.beersThrown[l].Ypos-=0.4;
						}else if(jogo.player2.beersThrown[l].dir==1){
							jogo.ctx.drawImage(jogo.player2.beersThrown[l].image,jogo.player2.beersThrown[l].direita%4*256,0,256,256,j*32+32,i*32,32,32);
							jogo.player2.beersThrown[l].Xpos+=0.25;
							jogo.player2.beersThrown[l].counterD +=0.25;
							if(jogo.player2.beersThrown[l].counterD%1==0)
								jogo.player2.beersThrown[l].direita++;
						}else if(jogo.player2.beersThrown[l].dir==2){
							jogo.ctx.drawImage(jogo.player2.beersThrown[l].image,0,0,256,256,j*32,i*32+32,32,32);
							jogo.player2.beersThrown[l].Ypos+=0.25;
						}else if(jogo.player2.beersThrown[l].dir==3){
							jogo.ctx.drawImage(jogo.player2.beersThrown[l].image,jogo.player2.beersThrown[l].esquerda%4*256,0,256,256,j*32-32,i*32,32,32);
							jogo.player2.beersThrown[l].Xpos-=0.4;
							jogo.player2.beersThrown[l].counterE +=0.25;
							if(jogo.player2.beersThrown[l].counterE%1==0){
								jogo.player2.beersThrown[l].esquerda++;
							}
						}
					}			
				}
			}
		}
	}
}

function drawExplosion(jogo,Xpos,Ypos,mine){
	jogo.ctx.drawImage(jogo.shotHit,0,0,256,256,Xpos*32,Ypos*32,32,32);
	mine.frame++;
}

function drawMines(jogo) {
	//desenhar heroi
	for(i=0;i<25;i++) {
		for(j=0;j<40;j++) {
			for(l=0;l<jogo.player1.mines.length;l++){
				if(Math.floor(jogo.player1.mines[l].Xpos)==j && Math.floor(jogo.player1.mines[l].Ypos)==i  ) {
					jogo.ctx.drawImage(jogo.player1.mines[l].image,0,0,256,256,j*32+3.5,i*32+4,32,32);	
				}
			}	
			for(l=0;l<jogo.player2.mines.length;l++){
				if(Math.floor(jogo.player2.mines[l].Xpos)==j && Math.floor(jogo.player2.mines[l].Ypos)==i  ) {
					jogo.ctx.drawImage(jogo.player2.mines[l].image,0,0,256,256,j*32+3.5,i*32+4,32,32);
				}
			}
		}
	}
}
function checkMinesPlayer1(jogo,Xpos,Ypos,j,i){
	for(k=0;k<jogo.player1.mines.length;k++){
		if(Math.floor(jogo.player1.mines[k].Xpos)==Xpos && Math.floor(jogo.player1.mines[k].Ypos)==Ypos ){
			var a = jogo.player1.mines[k].Xpos;
			var b = jogo.player1.mines[k].Ypos;
			drawExplosion(jogo,a,b,jogo.player1.mines[k]);
			if(jogo.player1.mines[k].frame==1){
				jogo.player1.mines.splice(k,1);
				jogo.player2.setHealth(jogo.player2.health - 5);
			}
		}
	}
}
function checkMinesPlayer2(jogo,Xpos,Ypos,j,i){
	for(k=0;k<jogo.player2.mines.length;k++){
		if(Math.floor(jogo.player2.mines[k].Xpos)==Xpos && Math.floor(jogo.player2.mines[k].Ypos)==Ypos ){
			drawExplosion(jogo,jogo.player2.mines[k].Xpos,jogo.player2.mines[k].Ypos,jogo.player2.mines[k]);
			if(jogo.player2.mines[k].frame==1){
				jogo.player2.mines.splice(k,1);
				jogo.player1.setHealth(jogo.player1.health - 5);
			}
		}
	}
}



/*function drawShotsPlayer2(jogo){
	for(i=0;i<25;i++) {
		for(j=0;j<40;j++) {
			for(l=0;l<jogo.player2.shotsFired.length;l++){
				if(Math.floor(jogo.player2.shotsFired[l].Xpos)==j && Math.floor(jogo.player2.shotsFired[l].Ypos)==i  ) {
					//console.log(jogo.player1.shotsFired[l].Xpos.toPrecision(1));
					//console.log(jogo.player2.Xpos.toPrecision(1));
					if(Math.floor(jogo.player2.shotsFired[l].Xpos) == Math.floor(jogo.player1.Xpos) && Math.floor(jogo.player2.shotsFired[l].Ypos)== Math.floor(jogo.player1.Ypos)){
						drawExplosion(jogo,jogo.player1.shotsFired[l].Xpos,jogo.player1.shotsFired[l].Ypos,jogo.player1.shotsFired[l]);
						if(jogo.player1.shotsFired[l].frame==30){
							jogo.player1.shotsFired.splice(l,1);
						}
						jogo.player2.shotsFired.splice(l,1);
						jogo.player1.setHealth(jogo.player1.health - 2);
					}else{
						if(jogo.player2.shotsFired[l].dir==0){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32,i*32-32,32,32);
							jogo.player2.shotsFired[l].Ypos-=0.85;
						}else if(jogo.player2.shotsFired[l].dir==1){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32+32,i*32,32,32);
							jogo.player2.shotsFired[l].Xpos+=0.5;
						}else if(jogo.player2.shotsFired[l].dir==2){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32,i*32+32,32,32);
							jogo.player2.shotsFired[l].Ypos+=0.5;
						}else if(jogo.player2.shotsFired[l].dir==3){
							jogo.ctx.drawImage(jogo.player2.shotsFired[l].image,jogo.player2.shotsFired[l].dir*256,0,256,256,j*32-32,i*32,32,32);
							jogo.player2.shotsFired[l].Xpos-=0.85;
						}
					}
								
				}
			}
		}
	}
}*/