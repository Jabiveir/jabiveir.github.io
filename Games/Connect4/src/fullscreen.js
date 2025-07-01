export default class fullscreen {
  constructor(Canvas, Ctx) {
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
    };
  }
};
