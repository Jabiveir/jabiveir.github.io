import Game from "./game";

export default class Menu {
  UpdateMenu(Ctx, Buttons, GameData, Images, DontClear, ButtonClicked) {
    if (DontClear !== true) {
      Ctx.clearRect(0, 0, 640, 480);
      Ctx.textAlign = "center";
      if (GameData.MenuVar > 1) {
        Ctx.fillStyle = "#000";
        Ctx.fillRect(0, 0, 640, 480);
      }
    }
    if (GameData.MenuVar === 0) {
      Ctx.font = "30px sans-serif ";
      Ctx.fillText("Save wiped", 320, 347, 200);
      Ctx.fillText("Refresh to undo", 320, 377, 200);
      GameData.MenuVar = 1;
      GameData.Night = 1;
      Buttons.B[0].Text = "Night 1";
    }
    if (GameData.MenuVar === -2) {
      if (Buttons.B[ButtonClicked].Text === "<") {
        if (GameData.Volume > 0) GameData.Volume -= 5;
      } else if (Buttons.B[ButtonClicked].Text === ">") {
        if (GameData.Volume < 100) GameData.Volume += 5;
      } else {
        if (
          Buttons.B[ButtonClicked].Vis === "Menu" &&
          Buttons.B[ButtonClicked].Text !== "Settings"
        ) {
          Buttons.B[ButtonClicked].Vis = "Active";
          if (Buttons.B[ButtonClicked].Type === "NoFrontalLobe")
            GameData.NoFrontalLobe = true;
          if (Buttons.B[ButtonClicked].Type === "BackupGenerator")
            GameData.BackupGenerator = true;
          if (Buttons.B[ButtonClicked].Type === "FastNights")
            GameData.FastNights = 2;
          if (Buttons.B[ButtonClicked].Type === "Blind") GameData.Blind = true;
          if (Buttons.B[ButtonClicked].Type === "DoubleJabi")
            GameData.DoubleJabi = 2;
          if (Buttons.B[ButtonClicked].Type === "DoubleVirus")
            GameData.DoubleVirus = 1;
        } else if (Buttons.B[ButtonClicked].Vis === "Active") {
          Buttons.B[ButtonClicked].Vis = "Menu";
          if (Buttons.B[ButtonClicked].Type === "NoFrontalLobe")
            GameData.NoFrontalLobe = false;
          if (Buttons.B[ButtonClicked].Type === "BackupGenerator")
            GameData.BackupGenerator = false;
          if (Buttons.B[ButtonClicked].Type === "FastNights")
            GameData.FastNights = 1;
          if (Buttons.B[ButtonClicked].Type === "Blind") GameData.Blind = false;
          if (Buttons.B[ButtonClicked].Type === "DoubleJabi")
            GameData.DoubleJabi = 1;
          if (Buttons.B[ButtonClicked].Type === "DoubleVirus")
            GameData.DoubleVirus = 2;
        }
      }
      var BinVol = GameData.Volume.toString(2);
      while (BinVol.length < 7) BinVol = "0" + BinVol;

      let d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      document.cookie =
        "Settings=" +
        BinVol +
        +GameData.NoFrontalLobe +
        +GameData.BackupGenerator +
        (GameData.FastNights - 1) +
        +GameData.Blind +
        (GameData.DoubleJabi - 1) +
        (2 - GameData.DoubleVirus) +
        ";expires=" +
        d.toUTCString() +
        ";path=/";

      Ctx.fillStyle = "#000";
      Ctx.font = "60px sans-serif ";
      Ctx.fillText("Settings", 320, 55);
      Ctx.fillRect(0, 70, 640, 5);
      Ctx.fillRect(318, 70, 4, 410);
      Ctx.fillText("Cheats", 160, 125);
      Ctx.fillText("Challenges", 480, 125);
      Ctx.font = "40px sans-serif ";
      Ctx.textAlign = "left";
      Ctx.fillText("Courageous", 50, 190, 260);
      Ctx.fillText("Backup Generator", 50, 280, 260);
      Ctx.fillText("Fast Nights", 50, 370, 260);
      Ctx.fillText("Blindness", 372, 190, 260);
      Ctx.fillText("Double Jabiveir", 372, 280, 260);
      Ctx.fillText("Double JabiVirus", 372, 370, 260);
      Ctx.font = "20px sans-serif ";
      Ctx.textAlign = "center";
      Ctx.fillText("Prevents fear from increasing", 160, 215, 300);
      Ctx.fillText("Prevents power from decreasing", 160, 305, 300);
      Ctx.fillText("Makes nights last half as long", 160, 395, 300);
      Ctx.fillText("(Halves total available power)", 160, 415, 300);
      Ctx.fillText("Only displays the HUD", 480, 215, 300);
      Ctx.fillText("(Disables getting JabiVirus)", 480, 235, 300);
      Ctx.fillText("Doubles how often eyes appear", 480, 305, 300);
      Ctx.fillText("(Halves flashlight power usage)", 480, 325, 300);
      Ctx.fillText("Doubles amount of buttons to press", 480, 395, 300);
    }
    if (GameData.MenuVar === -3) {
      if (Buttons.B[ButtonClicked].Type === "Endless") {
        if (Buttons.B[ButtonClicked].Vis === "Menu") {
          Buttons.B[ButtonClicked].Vis = "Active";
          GameData.Endless = true;
        } else {
          Buttons.B[ButtonClicked].Vis = "Menu";
          GameData.Endless = false;
        }
      } else if (Buttons.B[ButtonClicked].Text === ">") {
        if (eval("GameData." + Buttons.B[ButtonClicked].Type) < 20) {
          eval("GameData." + Buttons.B[ButtonClicked].Type + " += 1");
        }
      } else if (Buttons.B[ButtonClicked].Text === "<") {
        if (eval("GameData." + Buttons.B[ButtonClicked].Type) > 0) {
          eval("GameData." + Buttons.B[ButtonClicked].Type + " -= 1");
        }
        if (GameData.FearFactor < 1) GameData.FearFactor = 1;
      }
      Ctx.fillStyle = "#000";
      Ctx.font = "60px sans-serif ";
      Ctx.fillText("Custom Night", 320, 55);
      Ctx.fillRect(0, 70, 640, 5);
      Ctx.fillText(GameData.FearFactor, 100, 128);
      Ctx.fillText(GameData.JabiDiff, 100, 208);
      Ctx.fillText(GameData.VirusDiff, 100, 288);
      Ctx.textAlign = "left";
      Ctx.fillText("Fear Factor", 200, 128);
      Ctx.fillText("Jabiveir", 200, 208);
      Ctx.fillText("JabiVirus", 200, 288);
      Ctx.fillRect(0, 300, 640, 5);
      Ctx.fillText("Endless Mode", 70, 363);
      Ctx.fillRect(0, 380, 640, 5);
      Ctx.textAlign = "center";
    }
    for (let i = 0; i < Buttons.B.length; i++) {
      if (GameData.MenuVar === Buttons.B[i].ShowVar) {
        if (Buttons.B[i].Vis === "Menu") {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(
            Buttons.B[i].X,
            Buttons.B[i].Y,
            Buttons.B[i].W,
            Buttons.B[i].H
          );
          Ctx.fillStyle = "#fff";
          Ctx.fillRect(
            Buttons.B[i].X + 2,
            Buttons.B[i].Y + 2,
            Buttons.B[i].W - 4,
            Buttons.B[i].H - 4
          );
          Ctx.fillStyle = "#000";
          Ctx.font = Buttons.B[i].TextSize + "px sans-serif ";
          Ctx.fillText(
            Buttons.B[i].Text,
            Buttons.B[i].X + Buttons.B[i].W / 2,
            Buttons.B[i].Y + Buttons.B[i].H / 2 + Buttons.B[i].TextSize / 2.5,
            Buttons.B[i].W
          );
        } else if (Buttons.B[i].Vis === "Active") {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(
            Buttons.B[i].X,
            Buttons.B[i].Y,
            Buttons.B[i].W,
            Buttons.B[i].H
          );
          Ctx.fillStyle = "#fff";
          Ctx.fillRect(
            Buttons.B[i].X + 2,
            Buttons.B[i].Y + 2,
            Buttons.B[i].W - 4,
            Buttons.B[i].H - 4
          );
          Ctx.fillStyle = "#000";
          Ctx.fillRect(
            Buttons.B[i].X + 6,
            Buttons.B[i].Y + 6,
            Buttons.B[i].W - 12,
            Buttons.B[i].H - 12
          );
        }
      }
    }
    if (GameData.MenuVar === 1) {
      Ctx.fillStyle = "#000";
      Ctx.font = "50px sans-serif ";
      Ctx.fillText("Five Nights at Jabiveir's", 320, 130);
      Ctx.font = "20px sans-serif";
      Ctx.textAlign = "left";
      Ctx.fillText("Version 1.1", 5, 475);
      Ctx.textAlign = "center";
    }
    if (GameData.MenuVar === 2) {
      if (Buttons.B[ButtonClicked].Type === "CN") {
        GameData.CustomNight = true;
        GameData.Night = 7;
      }
      new Game(Ctx, GameData, this, Buttons, Images);
      GameData.MenuVar = 3;
    }
    if (GameData.MenuVar === 4) {
      if (!GameData.BackupGenerator)
        GameData.FlashesLeft -= 1 / GameData.DoubleJabi;
      if (GameData.PressedType === "Computer") {
        GameData.Status = "AliveRoom";
        if (!GameData.BackupGenerator)
          GameData.FlashesLeft += 1 / GameData.DoubleJabi;
        GameData.VirusSolved = false;
      } else {
        var Temp = "";
        if (
          (eval("GameData.Sprites." + GameData.PressedType) === "Room" ||
            eval("GameData.Sprites." + GameData.PressedType) ===
              "RoomHallucinations") &&
          GameData.FlashesLeft >= 0
        ) {
          Temp = "RoomFlash";
        } else if (
          eval("GameData.Sprites." + GameData.PressedType) === "RoomEyes" &&
          GameData.FlashesLeft >= 0
        ) {
          Temp = "RoomJabi1";
          eval(
            "GameData.JabiTimer." + GameData.PressedType + " = GameData.Time"
          );
        } else {
          if (!GameData.BackupGenerator)
            GameData.FlashesLeft += 1 / GameData.DoubleJabi;
        }
        if (
          GameData.Sprites.Door === "RoomFlash" ||
          GameData.Sprites.Door === "RoomJabi1" ||
          GameData.Sprites.Door === "RoomJabi2"
        ) {
          GameData.Sprites.Door = "Room";
          GameData.JabiTimer.Door = -1;
        }
        if (
          GameData.Sprites.Closet === "RoomFlash" ||
          GameData.Sprites.Closet === "RoomJabi1" ||
          GameData.Sprites.Closet === "RoomJabi2"
        ) {
          GameData.Sprites.Closet = "Room";
          GameData.JabiTimer.Closet = -1;
        }
        if (
          GameData.Sprites.Window === "RoomFlash" ||
          GameData.Sprites.Window === "RoomJabi1" ||
          GameData.Sprites.Window === "RoomJabi2"
        ) {
          GameData.Sprites.Window = "Room";
          GameData.JabiTimer.Window = -1;
        }
        if (Temp !== "") {
          eval("GameData.Sprites." + GameData.PressedType + " = Temp");
        }
      }
    }
    if (GameData.MenuVar === 5) {
      if (GameData.FlashesLeft > 0) {
        if (
          GameData.Sprites.Door === "RoomFlash" ||
          GameData.Sprites.Door === "RoomJabi1" ||
          GameData.Sprites.Door === "RoomJabi2"
        ) {
          GameData.Sprites.Door = "Room";
          GameData.JabiTimer.Door = -1;
        }
        if (
          GameData.Sprites.Closet === "RoomFlash" ||
          GameData.Sprites.Closet === "RoomJabi1" ||
          GameData.Sprites.Closet === "RoomJabi2"
        ) {
          GameData.Sprites.Closet = "Room";
          GameData.JabiTimer.Closet = -1;
        }
        if (
          GameData.Sprites.Window === "RoomFlash" ||
          GameData.Sprites.Window === "RoomJabi1" ||
          GameData.Sprites.Window === "RoomJabi2"
        ) {
          GameData.Sprites.Window = "Room";
          GameData.JabiTimer.Window = -1;
        }
        GameData.Status = "AliveComputer";
        GameData.CompAnim = Math.floor(Math.random() * 4);
        if (!GameData.BackupGenerator) GameData.FlashesLeft -= 1;
        if (
          GameData.VirusDiff / 20 > Math.random() &&
          !GameData.VirusSolved &&
          !GameData.Blind
        ) {
          for (let i = 1; i <= GameData.VirusDiff / GameData.DoubleVirus; i++) {
            var Colliding = true;
            while (Colliding) {
              Buttons.B[i + 6].X = Math.floor(Math.random() * 462) + 64;
              Buttons.B[i + 6].Y = Math.floor(Math.random() * 238) + 96;
              if (
                !(
                  Buttons.B[i + 6].X + 50 > 320 - 86.89 &&
                  Buttons.B[i + 6].X < 320 - 86.89 + 173.78 &&
                  Buttons.B[i + 6].Y < 96 + 66
                )
              ) {
                Colliding = false;
                for (let j = 1; j < i; j++) {
                  if (
                    Buttons.B[i + 6].X + 50 > Buttons.B[j + 6].X &&
                    Buttons.B[i + 6].X < Buttons.B[j + 6].X + 50 &&
                    Buttons.B[i + 6].Y + 50 > Buttons.B[j + 6].Y &&
                    Buttons.B[i + 6].Y < Buttons.B[j + 6].Y + 50
                  )
                    Colliding = true;
                }
              }
            }
            Buttons.B[i + 6].ShowVar = 8;
            Buttons.B[i + 6].Vis = "Menu";
          }
          GameData.ButtonsClicked = 0;
          GameData.MenuVar = 8;
        }
      } else {
        GameData.MenuVar = 4;
      }
    }
    if (GameData.MenuVar === 8) {
      Ctx.font = "40px sans-serif";
      Ctx.fillStyle = "#000";
      Ctx.fillRect(320 - 86.89, 96, 173.78, 66);
      Ctx.fillStyle = "#fff";
      Ctx.fillRect(322 - 86.89, 98, 169.78, 62);
      Ctx.fillStyle = "#000";
      Ctx.fillText("JabiVirus", 320, 133);
      Ctx.font = "20px sans-serif";
      Ctx.fillText("Click buttons in order", 320, 155, 167.78);
      if (ButtonClicked !== 0) {
        if (Buttons.B[ButtonClicked].Text === GameData.ButtonsClicked + 1) {
          Buttons.B[ButtonClicked].Vis = "Clicked";
          GameData.ButtonsClicked += 1;
        } else {
          for (let i = 1; i <= GameData.ButtonsClicked; i++)
            Buttons.B[i + 6].Vis = "Menu";
          GameData.ButtonsClicked = 0;
        }
        if (
          GameData.ButtonsClicked >=
          Math.floor(GameData.VirusDiff / GameData.DoubleVirus)
        ) {
          GameData.MenuVar = 5;
          GameData.VirusSolved = true;
        }
      }
    }
    if (GameData.MenuVar === -1) {
      Ctx.fillStyle = "#000";
      Ctx.font = "60px sans-serif ";
      Ctx.fillText("Tutorial", 320, 55);
      Ctx.fillRect(0, 70, 640, 5);
      Ctx.font = "30px sans-serif ";
      Ctx.fillText("When eyes appear in your room, flash your", 320, 110);
      Ctx.fillText("light to make them go away, otherwise Jabiveir", 320, 140);
      Ctx.fillText("will kill you, but if you're very scared, eyes", 320, 170);
      Ctx.fillText("may just be hallucinations. Jabiveir can also", 320, 200);
      Ctx.fillText("smell fear, so if your fear reaches maximum,", 320, 230);
      Ctx.fillText("Jabiveir will kill you. Going on your computer", 320, 260);
      Ctx.fillText("helps calm you down, but if you get malware,", 320, 290);
      Ctx.fillText("you will need to press buttons in numerical", 320, 320);
      Ctx.fillText("order to remove the virus. Flashing your light", 320, 350);
      Ctx.fillText("and going on your computer uses power, so", 320, 380);
      Ctx.fillText("you will be unable to use them if you run out.", 320, 410);
      Ctx.fillText("Survive until 6 AM to beat the night.", 320, 440);
    }
  }
};
