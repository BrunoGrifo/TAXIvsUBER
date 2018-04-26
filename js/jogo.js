class jogo1{
	constructor() {
		this.pause = false;
		this.terminado = false;

		this.ready = false;

		this.level=1;
		this.frame=0;
		this.player1= new player(1,"../Images/taxista.png","Taxi");
		this.player2= new player(2,"../Images/uberDriver.png","Uber");
		//this.player1= new player(1,"../Images/taxi1_sprite.png");
		//this.player2= new player(2,"../Images/taxi2_sprite.png");
		this.shotHit = new Image();
		this.shotHit.src = "../Images/mine_explosion.png";

		this.mapa = new map();

		this.arrowup=false;
		this.arrowleft=false;
		this.arrowdown=false;
		this.arrowright=false;
		this.arrowattack = false; //tecla random a decidir

		this.buttonW = false;
		this.buttonA = false;
		this.buttonS = false;
		this.buttonD = false;
		this.buttonAttack = false; //tecla a decidir

		this.divpause = document.getElementById("menupausa");
		this.divpause.style.display = 'none';

		this.divgameover = document.getElementById("gameover");
		this.divgameover.style.display = 'none';

		this.intro1 = document.getElementById("intro1");
		this.intro1.style.display = 'none';
		this.btnContinuar1 = document.getElementById('continuar1');

		this.intro2 = document.getElementById("intro2");
		this.intro2.style.display = 'none';
		this.btnContinuar2 = document.getElementById('continuar2');

		this.btnRestartGameover = document.getElementById('restartGameover');
		this.btnSairGameover = document.getElementById('sairGameover');

		this.btnContinuar = document.getElementById('continuar');
		this.btnOpcoes = document.getElementById('opcoes');
		this.btnRestart = document.getElementById('restart');
		this.btnSair = document.getElementById('sair');

		this.canvas=document.getElementById("canvasPrincipal");
		this.canvas.width=40*32;
		this.canvas.height=25*32;
		this.ctx=this.canvas.getContext("2d");

		this.winner1aFase = 0;
		this.winnerFinal = 0;
		this.finisher = 0;

		// Barra vida 

		this.taxiLogo = new Image();
		this.taxiLogo.src = "../Images/taxiLogo.png";

		this.uberLogo = new Image();
		this.uberLogo.src = "../Images/uberLogo.png";

		this.canvasBarra = document.getElementById("canvasStats");
		this.barractx = this.canvasBarra.getContext("2d");

	}
	setLevel1(){
		this.ready = false;
		this.level = 1;
		
		this.intro1.style.display = 'block';
		this.mapa.mapaprincipal = this.mapa.map2;

		this.player1.Xpos = 38;
		this.player1.Ypos = 12;
		this.player1.dir = 3;

		this.player2.Xpos = 1;
		this.player2.Ypos = 12;
		this.player2.dir = 1;

	}
	setLevel2(){
		this.ready = false;
		this.level=2;

		this.intro2.style.display = 'block';
		this.mapa.mapaprincipal = this.mapa.map1;

		this.player1 = new player(1,"../Images/taxi1_sprite.png","Taxi");
		this.player1.Xpos = 39;
		this.player1.Ypos = 22;
		this.player1.dir = 3;

		this.player2 = new player(2,"../Images/taxi2_sprite.png","Uber");
		this.player2.Xpos = 39;
		this.player2.Ypos = 23;
		this.player2.dir = 3;

	}
}