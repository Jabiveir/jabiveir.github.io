export default class Button {
	Play(Ctx) {
		this.Clicked = false;
		Ctx.fillStyle = "#000";
		Ctx.fillRect(270, 200, 180, 80);
		Ctx.fillStyle = "#fff";
		Ctx.fillRect(272, 202, 176, 76);
		Ctx.fillStyle = "#000";
		Ctx.font = "60px sans-serif ";
		Ctx.fillText("Play", 300, 260);
	}
	WipeSave(Ctx) {
		this.Clicked = false;
		Ctx.fillStyle = "#f00";
		Ctx.fillRect(270, 380, 180, 80);
		Ctx.fillStyle = "#fff";
		Ctx.fillRect(272, 382, 176, 76);
		Ctx.fillStyle = "#f00";
		Ctx.font = "50px sans-serif ";
		Ctx.fillText("WIPE SAVE", 274, 440, 174);
	}
};
