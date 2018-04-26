class player{
	//sprite é a src da imagem para a sprite, ou seja, ../images/taxi.png
	constructor(type,sprite){

		this.direita=0;
		this.cima=0;
		this.esquerda=0;
		this.baixo=0;
		this.velocidade=0.1;

		this.tipo = type;
		this.health=100;
		this.attack=10;

		this.speed=3; 
		this.Xpos=0; //39
		this.Ypos=0; //22

		this.dir=0;		//direção: 0-cima, 1-direita, 2-baixo, 3-esquerda ->3

		this.charsprite= new Image();
		this.charsprite.src=sprite;

		this.spritevector={};

		this.spritevector.img1 = [0,0];

		this.frame=0;

		this.setHealth = function(vida) {
			if (vida > 100) {
				this.health = 100;
			} else if(vida < 0) {
				this.health = 0;
			} else {
				this.health = vida;
			}
		}

		this.shotsFired = [];
		this.beersThrown = [];
		this.mines = [];
		this.minesDroped = [];

		console.log("player: set");
	}
	
	addShot(){
		this.tiros.push(new Tiro());
		console.log(this.tiros[0].image.src);
	}
	verifyMines(mine){
			for(i=0;i<this.mines.length;i++){
				if(Math.floor(this.mines[i].Ypos) == Math.floor(mine.Ypos) && Math.floor(this.mines[i].Xpos) == Math.floor(mine.Xpos)){
					console.log("Não plantou");
					return 0;
				}
			}
			console.log("Plantou");
			this.mines.push(mine);
	}
}