export default class Fullscreen {
  constructor(Canvas, Ctx, Buttons, Menu, Keybinds, PData, Level) {
    this.Update(Ctx, Buttons, Menu, Keybinds, PData, Level);
    let Full = this;
    Canvas.height = Math.min(
      window.innerHeight - 54,
      ((window.innerWidth - 4) * 23) / 30
    );
    Canvas.width = Math.min(
      window.innerWidth - 4,
      ((window.innerHeight - 54) * 30) / 23
    );
    Ctx.scale(Canvas.width / 720, Canvas.height / 552);
    window.onresize = function () {
      Canvas.height = Math.min(
        window.innerHeight - 54,
        ((window.innerWidth - 4) * 23) / 30
      );
      Canvas.width = Math.min(
        window.innerWidth - 4,
        ((window.innerHeight - 54) * 30) / 23
      );
      Ctx.scale(Canvas.width / 720, Canvas.height / 552);
      Full.Update(Ctx, Buttons, Menu, Keybinds, PData, Level);
    };
  }
  Update(Ctx, Buttons, Menu, Keybinds, PData, Level) {
    Ctx.clearRect(0, 0, 720, 552);
    Menu.Update(Ctx, Buttons.MenuVar, Keybinds, PData, Level);
    Buttons.Draw(Ctx);
  }
};
