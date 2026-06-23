export default class Button {
  Play(Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(270, 200, 180, 80);
    Ctx.fillStyle = "#fff";
    Ctx.fillRect(272, 202, 176, 76);
    Ctx.fillStyle = "#000";
    Ctx.font = "60px sans-serif ";
    Ctx.fillText("Play", 300, 260);
  }
  WipeSave(Ctx) {
    Ctx.fillStyle = "#f00";
    Ctx.fillRect(270, 380, 180, 80);
    Ctx.fillStyle = "#fff";
    Ctx.fillRect(272, 382, 176, 76);
    Ctx.fillStyle = "#f00";
    Ctx.font = "50px sans-serif ";
    Ctx.fillText("WIPE SAVE", 274, 440, 174);
  }
  MobileMode(Ctx, Clicked) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(515, 390, 195, 80);
    Ctx.fillStyle = "#fff";
    Ctx.fillRect(517, 392, 191, 76);
    Ctx.fillStyle = "#000";
    Ctx.fillRect(530, 405, 50, 50);
    Ctx.fillStyle = "#fff";
    Ctx.fillRect(532, 407, 46, 46);
    Ctx.fillStyle = "#000";
    if (Clicked !== "Off") {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(535, 410, 40, 40);
    }
    Ctx.font = "35px sans-serif";
    Ctx.textAlign = "center";
    Ctx.fillText("Mobile", 645, 425, 144);
    Ctx.fillText("Mode", 645, 460, 144);
    Ctx.textAlign = "left";
  }
};
