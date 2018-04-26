class Beer{
	constructor(){
		this.image = new Image();
		this.image.src = "../Images/beersprite.png";
		this.shot_sound = new Audio('../sounds/vidro.flac');
		this.Xpos=0;
		this.Ypos=0;
		this.dir=0;	
		this.direita = 0;
		this.esquerda = 0;
		this.counterD = 0;
		this.counterE = 0;
	}
}