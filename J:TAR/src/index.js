let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");
Ctx.fillStyle = "#000";
Ctx.fillRect(10,10,20,20);

import Player from "./player.js";
import InputHandler from "./input.js";
import buttons from "./button.js";
import fullscreen from "./fullscreen.js";

Ctx.fillStyle = "#000";
Ctx.fillRect(40,10,20,20);
let Buttons = new buttons();

var MenuVar = 1;
var Mobile = "Off";

let Jabiveir = new Player();
let Fullscreen = new fullscreen(Canvas, Ctx, MenuVar, Buttons, Mobile);
new InputHandler(Jabiveir, Ctx, Canvas, MenuVar, Fullscreen, Buttons, Mobile);

Ctx.fillStyle = "#000";
Ctx.fillRect(70,10,20,20);

Ctx.font = "60px sans-serif ";
Ctx.fillText("Jabiveir: The Adventure", 40, 130);
Ctx.font = "20px sans-serif";
Ctx.fillText("Version 2.0", 5, 475);

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

Jabiveir.Spawn(Ctx, Number(Level), Mobile);
Buttons.Play(Ctx);
Buttons.WipeSave(Ctx);
Buttons.MobileMode(Ctx, Mobile);
