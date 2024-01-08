export default class fullscreen {
  constructor(Canvas, Ctx, MenuVar, Buttons, Mobile) {
    let Full = this;
    Canvas.height = Math.min(
      window.innerHeight - 64,
      ((window.innerWidth - 4) * 2) / 3
    );
    Canvas.width = Math.min(
      window.innerWidth - 4,
      ((window.innerHeight - 64) * 3) / 2
    );
    Ctx.scale(Canvas.width / 720, Canvas.height / 480);
    Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
    Canvas.style.top = "15px";
    window.onresize = function () {
      if (Mobile !== "Off") {
        if (window.innerHeight >= ((window.innerWidth * 3) / 2) * 1.2)
          Mobile = "Vertical";
        else if (window.innerWidth >= ((window.innerHeight * 3) / 2) * 1.2)
          Mobile = "Horizontal";
        else Mobile = "Default";
      }
      if (Mobile === "Off") {
        Canvas.height = Math.min(
          window.innerHeight - 64,
          ((window.innerWidth - 4) * 2) / 3
        );
        Canvas.width = Math.min(
          window.innerWidth - 4,
          ((window.innerHeight - 64) * 3) / 2
        );
        Ctx.setTransform(Canvas.width / 720, 0, 0, Canvas.height / 480, 0, 0);
        Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
        Canvas.style.top = "15px";
      } else if (Mobile === "Default") {
        Canvas.height = Math.min(
          (window.innerHeight - 4) * 0.8,
          ((window.innerWidth - 4) * 2) / 3
        );
        Canvas.width = Math.min(
          window.innerWidth - 4,
          ((window.innerHeight - 4) * 0.8 * 3) / 2
        );
        Ctx.setTransform(Canvas.width / 720, 0, 0, Canvas.height / 480, 0, 0);
        Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
        Canvas.style.top = 0;
      } else if (Mobile === "Horizontal") {
        Canvas.width = ((window.innerHeight - 4) * 3) / 2;
        Canvas.height = window.innerHeight - 4;
        Ctx.scale(Canvas.width / 720, Canvas.height / 480);
        Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
        Canvas.style.top = 0;
      } else if (Mobile === "Vertical") {
        Canvas.width = window.innerWidth - 4;
        Canvas.height = ((window.innerWidth - 4) * 3) / 2;
        Ctx.translate(0, Canvas.height);
        Ctx.rotate(-Math.PI / 2);
        Ctx.scale(Canvas.width / 480, Canvas.height / 720);
        Canvas.style.left = 0;
        Canvas.style.top = (window.innerHeight - Canvas.height - 4) / 2 + "px";
      }
      if (MenuVar === 1) {
        Full.Draw(Ctx, Buttons, Mobile);
      }
    };
  }
  Draw(Ctx, Buttons, Mobile) {
    Ctx.font = "60px sans-serif ";
    Ctx.fillText("Jabiveir: The Adventure", 40, 130);
    Ctx.font = "20px sans-serif";
    Ctx.fillText("Version <2.0", 5, 475);
    Buttons.Play(Ctx);
    Buttons.WipeSave(Ctx);
    Buttons.MobileMode(Ctx, Mobile);
  }
  Rotate(Canvas, Ctx, Mobile, Buttons) {
    if (Mobile === "Off") {
      Canvas.height = Math.min(
        window.innerHeight - 64,
        ((window.innerWidth - 4) * 2) / 3
      );
      Canvas.width = Math.min(
        window.innerWidth - 4,
        ((window.innerHeight - 64) * 3) / 2
      );
      Ctx.setTransform(Canvas.width / 720, 0, 0, Canvas.height / 480, 0, 0);
      Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
      Canvas.style.top = "15px";
    } else if (Mobile === "Default") {
      Canvas.height = Math.min(
        (window.innerHeight - 4) * 0.8,
        ((window.innerWidth - 4) * 2) / 3
      );
      Canvas.width = Math.min(
        window.innerWidth - 4,
        ((window.innerHeight - 4) * 0.8 * 3) / 2
      );
      Ctx.setTransform(Canvas.width / 720, 0, 0, Canvas.height / 480, 0, 0);
      Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
      Canvas.style.top = 0;
    } else if (Mobile === "Horizontal") {
      Canvas.width = ((window.innerHeight - 4) * 3) / 2;
      Canvas.height = window.innerHeight - 4;
      Ctx.scale(Canvas.width / 720, Canvas.height / 480);
      Canvas.style.left = (window.innerWidth - Canvas.width - 4) / 2 + "px";
      Canvas.style.top = 0;
    } else if (Mobile === "Vertical") {
      Canvas.width = window.innerWidth - 4;
      Canvas.height = ((window.innerWidth - 4) * 3) / 2;
      Ctx.translate(0, Canvas.height);
      Ctx.rotate(-Math.PI / 2);
      Ctx.scale(Canvas.width / 480, Canvas.height / 720);
      Canvas.style.left = 0;
      Canvas.style.top = (window.innerHeight - Canvas.height - 4) / 2 + "px";
    }
    this.Draw(Ctx, Buttons, Mobile);
  }
};
