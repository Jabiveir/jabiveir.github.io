export default class Game {
  constructor(Ctx, Player) {
    var limitLoop = function (fn) {
      var then = new Date().getTime();
      var interval = 1000 / 60;
      return (function loop(time) {
        requestAnimationFrame(loop);
        var now = new Date().getTime();
        if (now - then > interval) {
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
