class Tiro{
	constructor(){
		this.image = new Image();
		this.image.src = "../Images/balas.png";
		this.shot_sound = new Audio('../sounds/shot.wav');
		this.Xpos=0;
		this.Ypos=0;
		this.dir=0;	
		this.frame=0;
	}
}