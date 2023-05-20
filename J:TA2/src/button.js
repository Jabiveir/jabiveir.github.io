export default class button {
  constructor(Canvas, Keybinds) {
    this.Buttons = [];
    this.MenuVar = 0;
    var But = this;
    Canvas.addEventListener("click", function fn(event) {
      for (let i = 0; i < But.Buttons.length; i++) {
        let B = But.Buttons[i];
        let X = (event.offsetX / Canvas.width) * 720;
        let Y = (event.offsetY / Canvas.height) * 552;
        let Show = false;
        for (let j = 0; j < B.MenuShow.length; j++)
          Show = Show || But.MenuVar === B.MenuShow[j];
        if (Show) {
          if (X >= B.X && X <= B.X + B.W && Y >= B.Y && Y <= B.Y + B.H) {
            But.MenuVar = B.MenuGoal;
            i = But.Buttons.length;
            B.Fun();
          }
        }
      }
    });
  }
  New(Dict) {
    this.Buttons.push(Dict);
  }
  Draw(Ctx) {
    for (let i = 0; i < this.Buttons.length; i++) {
      let B = this.Buttons[i];
      let Show = false;
      for (let j = 0; j < B.MenuShow.length; j++)
        Show = Show || this.MenuVar === B.MenuShow[j];
      if (Show) {
        if (B.Opacity !== 1) Ctx.globalAlpha = B.Opacity;
        Ctx.fillStyle = B.BorderColor || "#000";
        Ctx.fillRect(B.X, B.Y, B.W, B.H);
        Ctx.fillStyle = B.FillColor || "#fff";
        Ctx.fillRect(
          B.X + (B.Thick || 2),
          B.Y + (B.Thick || 2),
          B.W - 2 * (B.Thick || 2),
          B.H - 2 * (B.Thick || 2)
        );
        Ctx.fillStyle = B.TextColor || "#000";
        Ctx.font = B.FontSize + "px sans-serif";
        Ctx.textAlign = "center";
        Ctx.fillText(
          B.Text || "",
          B.X + B.W / 2,
          B.Y + B.H / 2 + B.FontSize / 3,
          B.W - 10
        );
        B.Disp(Ctx);
        Ctx.globalAlpha = 1;
      }
    }
  }
};
