import Player from "./player";
import InputHandler from "./input";
import buttons from "./button";
let Buttons = new buttons();

let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");

Ctx.font = "60px sans-serif ";
Ctx.fillText("Jabiveir: The Adventure", 40, 130);
Ctx.font = "20px sans-serif";
Ctx.fillText("Version 1.5", 5, 475);

let Filler = [];
Filler.Data = {
	ClickX: 0,
	ClickY: 0
};

let Jabiveir = new Player();
new InputHandler(Jabiveir, Filler, Ctx);

let Level = 0;
let name = "Level=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
	let c = ca[i];
	while (c.charAt(0) === " ") {
		c = c.substring(1);
	}
	if (c.indexOf(name) === 0) {
		Level = c.substring(name.length, c.length);
	}
}
Jabiveir.Spawn(Ctx, Number(Level));
Buttons.Play(Ctx);
Buttons.WipeSave(Ctx);
