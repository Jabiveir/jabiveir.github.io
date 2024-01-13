import GreenThing from "./green.js";

let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");
let Green = new GreenThing();

Ctx.fillStyle = "#f00";
Ctx.fillRect(0,0,480,480);
Green.MakeItGree(Ctx)
Ctx.fillRect(0,0,480,480);
