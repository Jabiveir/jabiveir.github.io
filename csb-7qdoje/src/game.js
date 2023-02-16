export default class Game {
  constructor(Ctx, GameData, Menu, Buttons, Images) {
    GameData.Playing = true;
    window.onerror = function () {
      GameData.Playing = false;
    };
    var limitLoop = function (fn) {
      var then = new Date().getTime();
      var interval = 1000 / 60;
      return (function loop(time) {
        requestAnimationFrame(loop);
        var now = new Date().getTime();
        var delta = now - then;
        if (delta > interval) {
          then = now - (delta % interval);
          if (GameData.Playing) GameLoop();
        }
      })(0);
    };
    function GameLoop() {
      Ctx.clearRect(0, 0, 640, 480);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(0, 0, 640, 480);
      GameData.Time += 1;
      if (GameData.Time >= 21600 / GameData.FastNights && !GameData.Endless) {
        GameData.Waiting = true;
        GameData.Time = 0;
        GameData.Night += 1;
      }
      if (GameData.Waiting) {
        Ctx.fillStyle = "#000";
        Ctx.fillRect(0, 0, 640, 480);
        Ctx.fillStyle = "#fff";
        Ctx.font = "100px sans-serif ";
        if (GameData.Time < 300) {
          Ctx.fillText("6 AM", 320, 250);
        } else if (GameData.Time < 420) {
          if (GameData.Night === 7 && !GameData.CustomNight) {
            GameData.Time = 305;
            Ctx.font = "60px sans-serif";
            Ctx.fillText("You beat the game!", 320, 180);
            Ctx.font = "30px sans-serif";
            Ctx.fillText("Good job!", 320, 260);
          } else if (GameData.Night === 8) {
            GameData.Time = 305;
            Ctx.font = "60px sans-serif";
            Ctx.fillText("You beat night 7", 320, 180);
            Ctx.font = "30px sans-serif";
            Ctx.fillText(
              "on " +
                GameData.FearFactor +
                "/" +
                GameData.JabiDiff +
                "/" +
                GameData.VirusDiff +
                " mode!",
              320,
              220
            );
            let Cheats =
              +GameData.NoFrontalLobe +
              +GameData.BackupGenerator +
              (GameData.FastNights - 1);
            let Challenges =
              +GameData.Blind +
              (GameData.DoubleJabi - 1) +
              (2 - GameData.DoubleVirus);
            Ctx.fillText(
              "You used " +
                Cheats +
                " cheats and " +
                Challenges +
                " challenges!",
              320,
              260
            );
          } else Ctx.fillText("Night " + GameData.Night, 320, 250);
        } else {
          GameData.Time = 0;
          GameData.Waiting = false;
          let d = new Date();
          d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
          if (GameData.Night < 7)
            document.cookie =
              "Night=" +
              GameData.Night +
              ";expires=" +
              d.toUTCString() +
              ";path=/";
          GameData.JabiTimer = {
            Door: -1,
            Closet: -1,
            Window: -1
          };
          GameData.Sprites = {
            Door: "Room",
            Closet: "Room",
            Window: "Room"
          };
          GameData.FlashesLeft = 90 / GameData.FastNights;
          GameData.Fear = 0;
          GameData.Status = "AliveRoom";
          if (GameData.Night < 7) {
            GameData.FearFactor = GameData.Night * 2;
            GameData.JabiDiff = GameData.Night * 2.5;
            GameData.VirusDiff = GameData.Night * 2;
          }
        }
      } else {
        if (GameData.MenuVar === 3) GameData.MenuVar = 4;
        if (GameData.Status === "AliveRoom") {
          if (
            GameData.Time - GameData.JabiTimer.Door >=
            GameData.AnimationTime
          ) {
            if (GameData.Sprites.Door === "RoomJabi1") {
              GameData.Sprites.Door = "RoomJabi2";
              GameData.JabiTimer.Door = GameData.Time;
            } else if (GameData.Sprites.Door === "RoomJabi2") {
              GameData.Sprites.Door = "RoomFlash";
              GameData.JabiTimer.Door = -1;
            }
          }
          if (
            GameData.Time - GameData.JabiTimer.Closet >=
            GameData.AnimationTime
          ) {
            if (GameData.Sprites.Closet === "RoomJabi1") {
              GameData.Sprites.Closet = "RoomJabi2";
              GameData.JabiTimer.Closet = GameData.Time;
            } else if (GameData.Sprites.Closet === "RoomJabi2") {
              GameData.Sprites.Closet = "RoomFlash";
              GameData.JabiTimer.Closet = -1;
            }
          }
          if (
            GameData.Time - GameData.JabiTimer.Window >=
            GameData.AnimationTime
          ) {
            if (GameData.Sprites.Window === "RoomJabi1") {
              GameData.Sprites.Window = "RoomJabi2";
              GameData.JabiTimer.Window = GameData.Time;
            } else if (GameData.Sprites.Window === "RoomJabi2") {
              GameData.Sprites.Window = "RoomFlash";
              GameData.JabiTimer.Window = -1;
            }
          }
          if (!GameData.Blind) {
            Ctx.drawImage(
              eval("Images." + GameData.Sprites.Door),
              0,
              0,
              168,
              480,
              0,
              0,
              168,
              480
            );
            Ctx.drawImage(
              eval("Images." + GameData.Sprites.Closet),
              168,
              0,
              332,
              480,
              168,
              0,
              332,
              480
            );
            Ctx.drawImage(
              eval("Images." + GameData.Sprites.Window),
              500,
              0,
              140,
              480,
              500,
              0,
              140,
              480
            );
          }
        } else if (GameData.Status === "AliveComputer") {
          if (!GameData.Blind) {
            Ctx.drawImage(Images.Computer, 0, 0);
            Ctx.drawImage(
              Images.CompAnims[GameData.CompAnim][
                ((GameData.Time / GameData.AnimationTime / 2) % 4) -
                  ((GameData.Time / GameData.AnimationTime / 2) % 1)
              ],
              64,
              96
            );
          }
          if (GameData.MenuVar === 8)
            Menu.UpdateMenu(Ctx, Buttons, GameData, Images, true, 0);
          GameData.Fear -= GameData.Fear % 1;
          if (GameData.Fear > 0) GameData.Fear -= 2 / 3;
        } else if (GameData.Status === "Dying1") {
          Ctx.drawImage(Images.RoomDeath1, 0, 0);
          if (GameData.Time > GameData.AnimationTime) {
            GameData.Time = 0;
            GameData.Status = "Dying2";
          }
        } else if (GameData.Status === "Dying2") {
          Ctx.drawImage(Images.RoomDeath2, 0, 0);
          if (GameData.Time > GameData.AnimationTime) {
            GameData.Time = 0;
            GameData.Status = "Dying3";
          }
        } else if (GameData.Status === "Dying3") {
          Ctx.drawImage(Images.RoomDeath3, 0, 0);
          if (GameData.Time > GameData.AnimationTime) {
            GameData.Time = 256;
            GameData.MenuVar = 6;
            GameData.Status = "Dead";
          }
        } else if (GameData.Status === "Dead") {
          GameData.Time -= 1;
          if (GameData.Time > 0) GameData.Time -= 1;
          Ctx.fillStyle = "#0f0";
          Ctx.fillRect(0, 0, 640, 480);
          var Color = GameData.Time.toString(16);
          if (Color.length === 1) Color = "0" + Color;
          Ctx.fillStyle = "#00" + Color + "00";
          Ctx.textAlign = "center";
          Ctx.font = "60px sans-serif";
          Ctx.fillText("You died!", 320, 150);
          Ctx.font = "30px sans-serif";
          if (GameData.DeathReason === "Eyes") {
            Ctx.fillText(
              "If you see eyes, flash your light at them!",
              320,
              200
            );
            Ctx.fillText("If they're unusually bright, they may", 320, 240);
            Ctx.fillText("just be hallucinations.", 320, 280);
          }
          if (GameData.DeathReason === "Fear") {
            Ctx.fillText("Jabiveir can smell fear, so if your", 320, 200);
            Ctx.fillText("fear meter reaches max, you'll die.", 320, 240);
            Ctx.fillText("Look on your computer to calm down.", 320, 280);
          }
          if (GameData.Endless) {
            Ctx.fillText(
              Math.floor(GameData.EndTime / 60) +
                ":" +
                (GameData.EndTime % 60) +
                " on " +
                GameData.FearFactor +
                "/" +
                GameData.JabiDiff +
                "/" +
                GameData.VirusDiff +
                " mode.",
              320,
              340
            );
            let Cheats =
              +GameData.NoFrontalLobe +
              +GameData.BackupGenerator +
              (GameData.FastNights - 1);
            let Challenges =
              +GameData.Blind +
              (GameData.DoubleJabi - 1) +
              (2 - GameData.DoubleVirus);
            Ctx.fillText(
              "You used " +
                Cheats +
                " cheats and " +
                Challenges +
                " challenges.",
              320,
              260
            );
          }

          Ctx.fillText("Refresh to continue", 320, 400);
        }
        if (
          GameData.Status === "AliveRoom" ||
          GameData.Status === "AliveComputer"
        ) {
          if (GameData.Fear < 100) {
            if (!GameData.NoFrontalLobe)
              GameData.Fear += GameData.FearFactor / 60;
          } else {
            GameData.Status = "Dying1";
            GameData.EndTime = Math.floor(GameData.Time / 60);
            GameData.Time = 0;
            GameData.DeathReason = "Fear";
            GameData.MenuVar = 7;
          }
          Ctx.fillStyle = "#fff";
          Ctx.font = "40px sans-serif ";
          var Hour =
            (GameData.Time - (GameData.Time % (3600 / GameData.FastNights))) /
            (3600 / GameData.FastNights);
          if (Hour === 0) Hour = 12;
          Ctx.textAlign = "left";
          Ctx.fillText(Hour, 544.5 - Ctx.measureText(Hour).width, 50);
          Ctx.fillText("AM", 555, 50);

          Ctx.font = "20px sans-serif ";
          Ctx.fillText("Power", 32, 470);
          Ctx.fillRect(100, 410, 7, 30);
          Ctx.fillRect(20, 400, 80, 50);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(25, 405, 70, 40);
          Ctx.fillStyle = "#fff";
          if (!GameData.Blind) {
            if (GameData.Status === "AliveRoom")
              Ctx.drawImage(Images.Room, 25, 405, 70, 40, 25, 405, 70, 40);
            else if (GameData.Status === "AliveComputer")
              Ctx.drawImage(Images.Computer, 25, 405, 70, 40, 25, 405, 70, 40);
          }
          Ctx.fillRect(
            30,
            410,
            ((GameData.FlashesLeft * 2) / 3) * GameData.FastNights,
            30
          );

          Ctx.font = "20px sans-serif ";
          Ctx.fillText("Fear", 540, 470);
          Ctx.fillRect(500, 400, 120, 50);
          Ctx.textAlign = "center";
          Ctx.fillStyle = "#000";
          Ctx.fillRect(505, 405, 110, 40);
          Ctx.fillStyle = "#fff";
          if (!GameData.Blind) {
            if (GameData.Status === "AliveRoom")
              Ctx.drawImage(Images.Room, 505, 405, 110, 40, 505, 405, 110, 40);
            else if (GameData.Status === "AliveComputer")
              Ctx.drawImage(
                Images.Computer,
                505,
                405,
                110,
                40,
                505,
                405,
                110,
                40
              );
          }
          var Red = (
            GameData.Fear / (100 / 255) -
            ((GameData.Fear / (100 / 255)) % 1)
          ).toString(16);
          if (Red.length === 1) Red = "0" + Red;
          var Green = (
            255 -
            (GameData.Fear / (100 / 255) - ((GameData.Fear / (100 / 255)) % 1))
          ).toString(16);
          if (Green.length === 1) Green = "0" + Green;
          Ctx.fillStyle = "#" + Red + Green + "00";
          Ctx.fillRect(510, 410, GameData.Fear, 30);

          if (GameData.Time % 180 === 0 && GameData.Time !== 0) {
            if (GameData.Fear / 100 > Math.random()) {
              var Spot = Math.floor(Math.random() * 3) + 1;
              if (Spot === 1 && GameData.Sprites.Door !== "RoomEyes") {
                GameData.Sprites.Door = "RoomHallucinations";
                GameData.JabiTimer.Door = GameData.Time;
              } else if (Spot === 2 && GameData.Sprites.Close !== "RoomEyes") {
                GameData.Sprites.Closet = "RoomHallucinations";
                GameData.JabiTimer.Closet = GameData.Time;
              } else if (Spot === 3 && GameData.Sprites.Window !== "RoomEyes") {
                GameData.Sprites.Window = "RoomHallucinations";
                GameData.JabiTimer.Window = GameData.Time;
              }
            }
          }
          if (
            GameData.Time % (360 / GameData.DoubleJabi) === 0 &&
            GameData.Time !== 0
          ) {
            if (GameData.JabiDiff / 20 > Math.random()) {
              var Spot = Math.floor(Math.random() * 3) + 1;
              if (Spot === 1) {
                GameData.Sprites.Door = "RoomEyes";
                GameData.JabiTimer.Door = GameData.Time;
              } else if (Spot === 2) {
                GameData.Sprites.Closet = "RoomEyes";
                GameData.JabiTimer.Closet = GameData.Time;
              } else if (Spot === 3) {
                GameData.Sprites.Window = "RoomEyes";
                GameData.JabiTimer.Window = GameData.Time;
              }
            }
          }
          if (
            (GameData.Time >
              GameData.JabiTimer.Door + 360 / GameData.DoubleJabi &&
              GameData.Sprites.Door === "RoomEyes") ||
            (GameData.Time >
              GameData.JabiTimer.Closet + 360 / GameData.DoubleJabi &&
              GameData.Sprites.Closet === "RoomEyes") ||
            (GameData.Time >
              GameData.JabiTimer.Window + 360 / GameData.DoubleJabi &&
              GameData.Sprites.Window === "RoomEyes")
          ) {
            GameData.Status = "Dying1";
            GameData.EndTime = Math.floor(GameData.Time / 60);
            GameData.Time = 0;
            GameData.DeathReason = "Eyes";
            GameData.MenuVar = 7;
          }
          if (
            GameData.Time > GameData.JabiTimer.Door + 360 &&
            GameData.Sprites.Door === "RoomHallucinations"
          ) {
            GameData.Sprites.Door = "Room";
            GameData.JabiTimer.Door = -1;
          }
          if (
            GameData.Time > GameData.JabiTimer.Closet + 360 &&
            GameData.Sprites.Closet === "RoomHallucinations"
          ) {
            GameData.Sprites.Closet = "Room";
            GameData.JabiTimer.Closet = -1;
          }
          if (
            GameData.Time > GameData.JabiTimer.Window + 360 &&
            GameData.Sprites.Window === "RoomHallucinations"
          ) {
            GameData.Sprites.Window = "Room";
            GameData.JabiTimer.Window = -1;
          }
        }
      }
    }
    limitLoop(GameLoop);
  }
};
