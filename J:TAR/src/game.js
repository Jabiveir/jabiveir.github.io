export default class Game {
  constructor(Ctx, Player) {
    let Error = false;
    window.onerror = function () {
      Error = true;
      Ctx.fillStyle = "#f00";
      Ctx.fillRect(140, 180, 440, 220);
      Ctx.fillStyle = "#000";
      Ctx.font = "120px sans-serif";
      Ctx.fillText("ERROR", 360, 300);
      Ctx.font = "40px sans-serif";
      Ctx.fillText("Game frozen to prevent", 360, 345);
      Ctx.fillText("browser crash.", 360, 380);
    };
    var limitLoop = function (fn) {
      var then = new Date().getTime();
      var interval = 1000 / 60;
      return (function loop(time) {
        requestAnimationFrame(loop);
        var now = new Date().getTime();
        let delta = now - then;
        if (delta > interval && !Error) {
          then = now - (delta % interval);
          fn();
        }
      })(0);
    };
    function GameLoop() {
      Ctx.clearRect(0, 0, 720, 480);
      Player.Update(Ctx);
    }
    limitLoop(GameLoop);
  }
};
