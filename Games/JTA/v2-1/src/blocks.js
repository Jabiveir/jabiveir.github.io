export default class Blocks {
  constructor(X, Y, Type, Direction, OriginalState, OtherX, OtherY) {
    this.BData = {
      XPos: X,
      YPos: Y,
      Temp: false,
      Type: Type,
      PortalX: OtherX,
      PortalY: OtherY,
      PortalTemp: false,
      Origin: OriginalState,
      Dir: Direction,
    };
  }

  DrawBlock(Ctx, Player) {
    if (this.BData.Type === "Block") {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
    }
    if (this.BData.Type === "Platform") {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 3.4);
    }
    if (this.BData.Type === "Lava") {
      Ctx.fillStyle = "#f00";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
      Ctx.fillStyle = "#f80";
      Ctx.fillRect(this.BData.XPos * 24 + 2, this.BData.YPos * 24 + 2, 8, 8);
      Ctx.fillRect(this.BData.XPos * 24 + 14, this.BData.YPos * 24 + 6, 8, 8);
      Ctx.fillRect(this.BData.XPos * 24 + 4, this.BData.YPos * 24 + 14, 8, 8);
      Ctx.fillStyle = "#ff0";
      Ctx.fillRect(this.BData.XPos * 24 + 4, this.BData.YPos * 24 + 4, 4, 4);
      Ctx.fillRect(this.BData.XPos * 24 + 16, this.BData.YPos * 24 + 8, 4, 4);
      Ctx.fillRect(this.BData.XPos * 24 + 6, this.BData.YPos * 24 + 16, 4, 4);
    }
    if (this.BData.Type === "Portal") {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(this.BData.XPos * 24 + 2, this.BData.YPos * 24 + 2, 20, 20);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24 + 4, this.BData.YPos * 24 + 4, 16, 16);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(this.BData.XPos * 24 + 6, this.BData.YPos * 24 + 6, 12, 12);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24 + 8, this.BData.YPos * 24 + 8, 8, 8);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(this.BData.XPos * 24 + 10, this.BData.YPos * 24 + 10, 4, 4);
    }
    if (this.BData.Type === "Red") {
      if (Player.PData.BlockState === "Red") {
        Ctx.fillStyle = "#f00";
        Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
        Ctx.fillStyle = "#c11";
        Ctx.fillRect(
          this.BData.XPos * 24 + 6,
          this.BData.YPos * 24 + 6,
          12,
          12
        );
      } else {
        Ctx.fillStyle = "#f00";
        Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
        Ctx.fillStyle = "#fff";
        Ctx.fillRect(
          this.BData.XPos * 24 + 2,
          this.BData.YPos * 24 + 2,
          20,
          20
        );
      }
    }
    if (this.BData.Type === "Blue") {
      if (Player.PData.BlockState === "Blue") {
        Ctx.fillStyle = "#11c";
        Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
        Ctx.fillStyle = "#66f";
        Ctx.fillRect(
          this.BData.XPos * 24 + 6,
          this.BData.YPos * 24 + 6,
          12,
          12
        );
      } else {
        Ctx.fillStyle = "#11c";
        Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
        Ctx.fillStyle = "#fff";
        Ctx.fillRect(
          this.BData.XPos * 24 + 2,
          this.BData.YPos * 24 + 2,
          20,
          20
        );
      }
    }
    if (this.BData.Type === "Key") {
      Ctx.fillStyle = "#cc0";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24 + 6, 12, 12);
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24 + 10, 24, 4);
      Ctx.fillRect(this.BData.XPos * 24 + 21, this.BData.YPos * 24 + 14, 3, 3);
      Ctx.fillRect(this.BData.XPos * 24 + 15, this.BData.YPos * 24 + 14, 3, 3);
      Ctx.fillStyle = "#f00";
      Ctx.fillRect(this.BData.XPos * 24 + 3, this.BData.YPos * 24 + 9, 6, 6);
    }
    if (this.BData.Type === "LockedPortal") {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(this.BData.XPos * 24 + 2, this.BData.YPos * 24 + 2, 20, 20);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24 + 4, this.BData.YPos * 24 + 4, 16, 16);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(this.BData.XPos * 24 + 6, this.BData.YPos * 24 + 6, 12, 12);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24 + 8, this.BData.YPos * 24 + 8, 8, 8);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(this.BData.XPos * 24 + 7, this.BData.YPos * 24 + 3, 10, 10);
      Ctx.fillRect(this.BData.XPos * 24 + 9, this.BData.YPos * 24 + 11, 6, 10);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24 + 8, this.BData.YPos * 24 + 4, 8, 8);
      Ctx.fillRect(this.BData.XPos * 24 + 10, this.BData.YPos * 24 + 12, 4, 8);
    }
    if (this.BData.Type === "Speed") {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(this.BData.XPos * 24, this.BData.YPos * 24, 24.4, 24.4);
      Ctx.fillStyle = "#0ff";
      Ctx.fillRect(this.BData.XPos * 24 + 2, this.BData.YPos * 24 + 2, 20, 20);
      Ctx.fillStyle = "#000";
      for (let i = 1; i <= 8; i++) {
        if (this.BData.Dir === "Up") {
          Ctx.fillRect(
            this.BData.XPos * 24 + 12 - i,
            this.BData.YPos * 24 + 4 + i,
            i * 2,
            1.4
          );
          Ctx.fillRect(
            this.BData.XPos * 24 + 8,
            this.BData.YPos * 24 + 12,
            8,
            8
          );
        }
        if (this.BData.Dir === "Left") {
          Ctx.fillRect(
            this.BData.XPos * 24 + 3 + i,
            this.BData.YPos * 24 + 12 - i,
            1.4,
            i * 2
          );
          Ctx.fillRect(
            this.BData.XPos * 24 + 12,
            this.BData.YPos * 24 + 8,
            8,
            8
          );
        }
        if (this.BData.Dir === "Right") {
          Ctx.fillRect(
            this.BData.XPos * 24 + 20 - i,
            this.BData.YPos * 24 + 12 - i,
            1.4,
            i * 2
          );
          Ctx.fillRect(
            this.BData.XPos * 24 + 4,
            this.BData.YPos * 24 + 8,
            8,
            8
          );
        }
      }
    }
    if (this.BData.Type === "Flag") {
      Ctx.fillStyle = "#0c0";
      Ctx.fillRect(this.BData.XPos * 24 + 4, this.BData.YPos * 24 + 3, 16, 12);
      Ctx.fillStyle = "#080";
      Ctx.fillRect(this.BData.XPos * 24 + 4, this.BData.YPos * 24 + 2, 4, 20);
    }
  }

  BlockDetect(Player, Block, Ctx) {
    Block.BData.PortalTemp = false;
    //Full block collision
    if (
      Block.BData.XPos * 24 < Player.PData.XPos + 19 &&
      Player.PData.XPos < Block.BData.XPos * 24 + 23
    ) {
      if (
        Block.BData.YPos * 24 < Player.PData.YPos + 19 &&
        Player.PData.YPos < Block.BData.YPos * 24 + 23
      ) {
        if (Block.BData.Type === "Lava") {
          Player.Spawn(Ctx, Player.PData.Level);
        }
        if (Block.BData.Type === "Key") {
          Player.PData.Keys += 2;
          Block.BData.Type = "";
        }
        if (Block.BData.Type === "LockedPortal") {
          if (Player.PData.Keys > 0) {
            Player.PData.Keys -= 1;
            Block.BData.Type = "Portal";
          }
        }
        if (Block.BData.Type === "Portal") {
          if (Player.PData.TouchingPortal === false) {
            Player.PData.TouchingPortal = true;
            Player.PData.XPos = Block.BData.PortalX * 24 + 2;
            Player.PData.YPos = Block.BData.PortalY * 24 + 4;
          }
          Player.PData.PortalTemp2 = true;
        }
        if (Block.BData.Type === "Flag") {
          Player.Spawn(Ctx, Player.PData.Level);
          Player.PData.Level += 1;
          let d = new Date();
          d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
          document.cookie =
            "RLevel=" +
            Player.PData.Level +
            ";expires=" +
            d.toUTCString() +
            ";path=/";
        }
      }
    }
    //Top of block collision
    if (
      Block.BData.YPos * 24 < Player.PData.YPos + 20 &&
      Player.PData.YPos + 20 < Block.BData.YPos * 24 + 3
    ) {
      if (
        Block.BData.XPos * 24 - 19 < Player.PData.XPos &&
        Player.PData.XPos < Block.BData.XPos * 24 + 23
      ) {
        if (
          Block.BData.Type === "Block" ||
          Block.BData.Type === "Platform" ||
          Block.BData.Type === "Speed" ||
          (Block.BData.Type === "Red" && Player.PData.BlockState === "Red") ||
          (Block.BData.Type === "Blue" && Player.PData.BlockState === "Blue")
        ) {
          if (Block.BData.Dir === "Down") {
            Player.PData.YVel = -15;
            Player.PData.YPos = Block.BData.YPos * 24 - 19.5;
            Player.PData.OnFallingBlock = true;
          } else {
            Player.PData.YVel = 0;
            Player.PData.YPos = Block.BData.YPos * 24 - 20;
            Player.PData.OnFallingBlock = false;
          }
          Player.PData.OnGround = true;
          if (Block.BData.Type === "Speed") {
            if (Block.BData.Dir === "Up") Player.PData.YVel += 90;
            if (Block.BData.Dir === "Left") Player.PData.XVel -= 2;
            if (Block.BData.Dir === "Right") Player.PData.XVel += 2;
          }
        }
      }
    }
    //Smaller full block collision
    if (
      Block.BData.XPos * 24 < Player.PData.XPos + 18 &&
      Player.PData.XPos < Block.BData.XPos * 24 + 22
    ) {
      if (
        Block.BData.YPos * 24 < Player.PData.YPos + 18 &&
        Player.PData.YPos < Block.BData.YPos * 24 + 22
      ) {
        if (
          (Block.BData.Type === "Red" && Player.PData.BlockState === "Red") ||
          (Block.BData.Type === "Blue" && Player.PData.BlockState === "Blue")
        ) {
          Player.Spawn(Ctx, Player.PData.Level);
        }
      }
    }
    //Left of block collision
    if (
      Block.BData.XPos * 24 < Player.PData.XPos + 20 &&
      Player.PData.XPos + 20 < Block.BData.XPos * 24 + 24
    ) {
      if (
        Block.BData.YPos * 24 - 19 < Player.PData.YPos &&
        Player.PData.YPos < Block.BData.YPos * 24 + 23
      ) {
        if (
          Block.BData.Type === "Block" ||
          Block.BData.Type === "Speed" ||
          (Block.BData.Type === "Red" && Player.PData.BlockState === "Red") ||
          (Block.BData.Type === "Blue" && Player.PData.BlockState === "Blue")
        ) {
          Player.PData.XVel = 0;
          Player.PData.XPos = Block.BData.XPos * 24 - 20;
        }
      }
    }
    //Right of block collision
    if (
      Block.BData.XPos * 24 + 12 < Player.PData.XPos &&
      Player.PData.XPos < Block.BData.XPos * 24 + 24
    ) {
      if (
        Block.BData.YPos * 24 - 19 < Player.PData.YPos &&
        Player.PData.YPos < Block.BData.YPos * 24 + 23
      ) {
        if (
          Block.BData.Type === "Block" ||
          Block.BData.Type === "Speed" ||
          (Block.BData.Type === "Red" && Player.PData.BlockState === "Red") ||
          (Block.BData.Type === "Blue" && Player.PData.BlockState === "Blue")
        ) {
          Player.PData.XVel = 0;
          Player.PData.XPos = Block.BData.XPos * 24 + 24;
        }
      }
    }
    //Bottom of block collision
    if (
      Block.BData.YPos * 24 + 18 < Player.PData.YPos &&
      Player.PData.YPos < Block.BData.YPos * 24 + 24
    ) {
      if (
        Block.BData.XPos * 24 - 19 < Player.PData.XPos &&
        Player.PData.XPos < Block.BData.XPos * 24 + 23
      ) {
        if (
          Block.BData.Type === "Block" ||
          Block.BData.Type === "Speed" ||
          (Block.BData.Type === "Red" && Player.PData.BlockState === "Red") ||
          (Block.BData.Type === "Blue" && Player.PData.BlockState === "Blue")
        ) {
          if (Block.BData.Dir === "Down") {
            Player.PData.YVel = -20;
            Player.PData.YPos = Block.BData.YPos * 24 + 25;
          } else {
            Player.PData.YVel = -1;
            Player.PData.YPos = Block.BData.YPos * 24 + 24;
          }
        }
      }
    }
  }
};
