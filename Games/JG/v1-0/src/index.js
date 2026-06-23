import Player from "./player.js";
import InputHandler from "./input.js";
import buttons from "./button.js";
import bullet from "./bullet.js";
let Buttons = new buttons();
let Bullet = new bullet();

let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");

Ctx.font = "60px sans-serif ";
Ctx.fillText("JabiGear 2 (1): Solid Veir", 20, 130);
Ctx.font = "20px sans-serif";
Ctx.fillText("Version 1.0", 5, 475);

let Filler = [];
Filler.Data = {
	ClickX: 0,
	ClickY: 0
};

let Jabiveir = new Player();
new InputHandler(Jabiveir, Filler, Ctx, Bullet);

let Level = 0;
let name = "JGLevel=";
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
if(Level > 9)
	Level = 0;
Jabiveir.Spawn(Ctx, Number(Level));
Buttons.Play(Ctx);
Buttons.WipeSave(Ctx);
