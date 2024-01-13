import LevelInit from "./levelinit";

export default class levels {
  Collision(Ctx, Player, Level) {
    if (Player.PData.XPos < 0) {
      Player.PData.XPos = 0;
      Player.PData.XVel = 0;
    }
    if (Player.PData.XPos > 700) {
      Player.PData.XPos = 700;
      Player.PData.XVel = 0;
    }
    if (Player.PData.YPos < 0) {
      Player.PData.YPos = 0;
      Player.PData.YVel = -1;
    }
    if (Player.PData.YPos > 480 || isNaN(Player.PData.YPos))
      Player.Spawn(Ctx, Player.PData.Level);
    Player.PData.OnGround = false;
    Player.PData.PortalTemp2 = false;
    for (let i = 0; i < Levels[Level].length; i++) {
      let Block = Levels[Level][i];
      if (
        Math.abs(Block.BData.YPos * 24 - Player.PData.YPos + 2) < 36 &&
        Math.abs(Block.BData.XPos * 24 - Player.PData.XPos + 2) < 36
      )
        Block.BlockDetect(Player, Levels[Level][i], Ctx);

      if (Block.BData.Type === "Block" && Block.BData.Dir === "Down") {
        Block.BData.YPos += 1 / 72;
        if (Block.BData.YPos >= 20) Block.BData.YPos = -1;
      }
    }
    if (Player.PData.PortalTemp2 === false) Player.PData.TouchingPortal = false;
    if (Player.PData.Level === 16) {
      Ctx.fillStyle = "#000";
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Game complete", 150, 100);
      Ctx.font = "50px sans-serif";
      Ctx.fillText("You did it! Yes!", 190, 160);
    } else if (Player.PData.Level === 0) {
      Ctx.textAlign = "center";
      Ctx.fillStyle = "#000";
      if (Player.PData.Mobile === "Off") {
        Ctx.font = "60px sans-serif";
        Ctx.fillText("Use arrow keys or", 360, 120);
        Ctx.fillText("W, A, and D to move.", 360, 200);
      } else {
        Ctx.font = "40px sans-serif";
        Ctx.fillText("Tap on the game window to jump", 360, 140);
        Ctx.fillText("and hold either side to move.", 360, 200);
      }
      Ctx.textAlign = "left";
    }
  }

  DrawLevel(Ctx, Level, Player) {
    for (let i = 0; i < Levels[Level].length; i++)
      Levels[Level][i].DrawBlock(Ctx, Player);
  }

  ResetLevel(Ctx, Player) {
    for (let i = 0; i < Levels[Player.PData.Level].length; i++) {
      Levels[Player.PData.Level][i].BData.Type =
        Levels[Player.PData.Level][i].BData.Origin ||
        Levels[Player.PData.Level][i].BData.Type;
    }
  }
};
