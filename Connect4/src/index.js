import fullscreen from "./fullscreen.js";
import button from "./button.js";
import game from "./game.js";

let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");

new fullscreen(Canvas, Ctx);
let Buttons = new button(Canvas);
new game(Ctx, Buttons);

Buttons.New({
  X: 260,
  Y: 250,
  W: 200,
  H: 100,
  MenuShow: [0],
  MenuGoal: 1,
  Text: "Play",
  FontSize: 70,
  Fun: function () {},
  Disp: function () {}
});
