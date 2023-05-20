export default class menu {
  Update(Ctx, MenuVar, Keybinds, PData, Level) {
    Ctx.fillStyle = "#000";
    Ctx.textAlign = "center";
    if (MenuVar === -4) {
      Ctx.font = "80px sans-serif";
      Ctx.fillText("Replay finished!", 360, 110);
      Ctx.font = "40px sans-serif";
      let Time = PData.RealTime;
      if (PData.StartLevel > 0 && PData.StartLevel < 16) Time = PData.TotalTime;
      let Sec = Math.floor((Time / 60) * 1000) % 60000;
      if (Sec < 10000) Sec = "0" + Sec;
      Sec += "";
      Sec = Sec.substring(0, 2) + "." + Sec.substring(2);
      let Min = Math.floor(Time / 60 / 60) % 60;
      if (Min < 10) Min = "0" + Min;
      let Hr = Math.floor(Time / 60 / 60 / 60);
      if (Hr < 10) Hr = "0" + Hr;
      Ctx.fillText("It took " + Hr + ":" + Min + ":" + Sec, 360, 170);
      Ctx.fillText("and " + PData.Attempts + " attempts!", 360, 215);
    } else if (MenuVar === -3) {
      PData.ReplayTime = 0;
      Ctx.font = "80px sans-serif";
      Ctx.fillText("You win!", 360, 110);
      Ctx.font = "40px sans-serif";
      let Time = PData.RealTime;
      if (PData.Mode === "Normal") Time = PData.TotalTime;
      let Sec = Math.floor((Time / 60) * 1000) % 60000;
      if (Sec < 10000) Sec = "0" + Sec;
      Sec += "";
      Sec = Sec.substring(0, 2) + "." + Sec.substring(2);
      let Min = Math.floor(Time / 60 / 60) % 60;
      if (Min < 10) Min = "0" + Min;
      let Hr = Math.floor(Time / 60 / 60 / 60);
      if (Hr < 10) Hr = "0" + Hr;
      let StrTime = Hr + ":" + Min + ":" + Sec;
      if (PData.Level === 16 && PData.StartLevel === 1 && !PData.SingSeg) {
        if (Time < PData.S.BestFrames || PData.S.BestFrames === -1) {
          PData.S.BestFrames = Time;
          PData.S.BestNormalTime = StrTime;
        }
        let Temp = true;
        for (
          let i = 120;
          i < PData.CurrentReplay.length && Temp && !PData.S.BeatLevelFast;
          i++
        )
          Temp = Temp && Level.Decompress(PData.CurrentReplay[i]) % 3 === 2;
        PData.S.BeatLevelFast = Temp || PData.S.BeatLevelFast;
      }
      Ctx.fillText("It took " + StrTime, 360, 160);
      Ctx.fillText("and " + PData.Attempts + " attempts!", 360, 205);
    } else if (MenuVar === -2) {
      Ctx.fillStyle = "#000";
      Ctx.fillRect(0, 0, 720, 72);
      Ctx.fillStyle = "#ccc";
      for (let i = 1; i < 30; i++) {
        Ctx.fillRect(24 * i - 1, 72, 2, 480);
        Ctx.fillRect(0, 71 + 24 * i, 720, 2);
      }
      for (let i = 0; i < 600; i++) {
        while (PData.CustomList[i] === 0) i++;
        if (i >= 600) continue;
        let X = (i % 30) * 24;
        let Y = Math.floor(i / 30) * 24;
        if (PData.CustomList[i] === 1) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
        } else if (PData.CustomList[i] === 2) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 4);
        } else if (PData.CustomList[i] === 3) {
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#f80";
          Ctx.fillRect(X + 2, Y + 74, 8, 8);
          Ctx.fillRect(X + 4, Y + 86, 8, 8);
          Ctx.fillRect(X + 14, Y + 78, 8, 8);
          Ctx.fillStyle = "#ff0";
          Ctx.fillRect(X + 4, Y + 76, 4, 4);
          Ctx.fillRect(X + 6, Y + 88, 4, 4);
          Ctx.fillRect(X + 16, Y + 80, 4, 4);
        } else if (PData.CustomList[i] === 4) {
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#c11";
          Ctx.fillRect(X + 6, Y + 78, 12, 12);
        } else if (PData.CustomList[i] === 5) {
          Ctx.fillStyle = "#11c";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#66f";
          Ctx.fillRect(X + 6, Y + 78, 12, 12);
        } else if (PData.CustomList[i] === 6) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#0ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 8, Y + 84, 8, 8);
          for (let i = 0; i < 8; i++)
            Ctx.fillRect(X + 11 - i, Y + 76 + i, 2 * (i + 1), 2);
        } else if (PData.CustomList[i] === 7) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#0ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 12, Y + 80, 8, 8);
          for (let i = 0; i < 8; i++)
            Ctx.fillRect(X + 11 - i, Y + 76 + i, 2, 2 * (8 - i));
        } else if (PData.CustomList[i] === 8) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#0ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 4, Y + 80, 8, 8);
          for (let i = 0; i < 8; i++)
            Ctx.fillRect(X + 11 + i, Y + 76 + i, 2, 2 * (8 - i));
        } else if (PData.CustomList[i] === 9) {
          Ctx.fillStyle = "#cc0";
          Ctx.fillRect(X, Y + 78, 12, 12);
          Ctx.fillRect(X + 12, Y + 82, 12, 4);
          Ctx.fillRect(X + 15, Y + 86, 3, 4);
          Ctx.fillRect(X + 21, Y + 86, 3, 4);
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X + 3, Y + 81, 6, 6);
        } else if (PData.CustomList[i] === 10) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 2, Y + 74, 13, 13);
          Ctx.fillRect(X + 9, Y + 81, 13, 13);
          Ctx.fillStyle = "#0c0";
          Ctx.fillRect(X + 4, Y + 76, 9, 9);
          Ctx.clearRect(X + 6, Y + 78, 5, 5);
          Ctx.fillRect(X + 8, Y + 80, 4, 4);
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X + 11, Y + 83, 9, 9);
          Ctx.clearRect(X + 13, Y + 85, 5, 5);
          Ctx.fillRect(X + 12, Y + 84, 4, 4);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 9, Y + 81, 6, 6);
        } else if (PData.CustomList[i] === 11) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 1, Y + 83, 22, 2);
          for (let i = 1; i <= 5; i++) {
            Ctx.fillRect(X + 12 - 2 * i, Y + 71 + 2 * i, 4 * i, 3);
            Ctx.fillRect(X + 12 - 2 * i, Y + 94 - 2 * i, 4 * i, 3);
          }
          for (let i = 1; i <= 4; i++) {
            Ctx.fillStyle = "#f00";
            Ctx.fillRect(X + 12 - 2 * (i - 1), Y + 93 - 2 * i, 4 * (i - 1), 3);
            Ctx.fillStyle = "#0c0";
            Ctx.fillRect(X + 12 - 2 * (i - 1), Y + 72 + 2 * i, 4 * (i - 1), 3);
          }
        } else if (PData.CustomList[i] === 12) {
          Ctx.fillStyle = "#04f";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#08f";
          Ctx.fillRect(X + 4, Y + 82, 16, 4);
        } else if (PData.CustomList[i] === 13) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#4ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.clearRect(X + 8, Y + 80, 8, 8);
          Ctx.clearRect(X + 10, Y + 77, 4, 14);
          Ctx.clearRect(X + 5, Y + 82, 14, 4);
        } else if (PData.CustomList[i] === 14) {
          Ctx.fillStyle = "#fb0";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#ff0";
          Ctx.fillRect(X + 4, Y + 76, 16, 16);
        } else if (PData.CustomList[i] === 15) {
          Ctx.fillStyle = "#840";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#c80";
          Ctx.fillRect(X + 3, Y + 75, 18, 18);
        } else if (PData.CustomList[i] >= 10000) {
          let ExitX = (Math.floor(PData.CustomList[i] / 100) % 100) * 24;
          let ExitY = (PData.CustomList[i] % 100) * 24;
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.clearRect(X + 2, Y + 74, 20, 20);
          Ctx.fillRect(X + 4, Y + 76, 16, 16);
          Ctx.clearRect(X + 6, Y + 78, 12, 12);
          Ctx.fillRect(X + 8, Y + 80, 8, 8);
          Ctx.clearRect(X + 10, Y + 82, 4, 4);
          if (PData.CustomList[i] >= 20000) {
            Ctx.clearRect(X + 7, Y + 75, 10, 10);
            Ctx.clearRect(X + 9, Y + 84, 6, 10);
            Ctx.fillRect(X + 8, Y + 76, 8, 8);
            Ctx.fillRect(X + 10, Y + 84, 4, 8);
          }
          Ctx.strokeStyle = "#888";
          Ctx.strokeRect(ExitX, ExitY + 72, 24, 24);
          Ctx.strokeRect(ExitX + 4, ExitY + 76, 16, 16);
          Ctx.strokeRect(ExitX + 8, ExitY + 80, 8, 8);
        }
      }
      Ctx.fillStyle = "#0f0";
      Ctx.fillRect(26, 508, 20, 20);
      Ctx.fillRect(676, 507, 16, 12);
      Ctx.fillStyle = "#080";
      Ctx.fillRect(676, 506, 4, 20);
    } else if (MenuVar === -1) {
      for (let i = 0; i < 600; i++) {
        while (PData.NumList[i] === 0) i++;
        if (i >= 600) continue;
        let X = (i % 30) * 24;
        let Y = Math.floor(i / 30) * 24;
        if (PData.NumList[i] === 1) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
        } else if (PData.NumList[i] === 2) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 4);
        } else if (PData.NumList[i] === 3) {
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#f80";
          Ctx.fillRect(X + 2, Y + 74, 8, 8);
          Ctx.fillRect(X + 4, Y + 86, 8, 8);
          Ctx.fillRect(X + 14, Y + 78, 8, 8);
          Ctx.fillStyle = "#ff0";
          Ctx.fillRect(X + 4, Y + 76, 4, 4);
          Ctx.fillRect(X + 6, Y + 88, 4, 4);
          Ctx.fillRect(X + 16, Y + 80, 4, 4);
        } else if (PData.NumList[i] === 4) {
          if (PData.Time % 240 < 120) {
            Ctx.fillStyle = "#f00";
            Ctx.fillRect(X, Y + 72, 24, 24);
            Ctx.fillStyle = "#c11";
            Ctx.fillRect(X + 6, Y + 78, 12, 12);
          } else {
            Ctx.fillStyle = "#f00";
            Ctx.fillRect(X, Y + 72, 24, 24);
            Ctx.clearRect(X + 2, Y + 74, 20, 20);
          }
        } else if (PData.NumList[i] === 5) {
          if (PData.Time % 240 >= 120) {
            Ctx.fillStyle = "#11c";
            Ctx.fillRect(X, Y + 72, 24, 24);
            Ctx.fillStyle = "#66f";
            Ctx.fillRect(X + 6, Y + 78, 12, 12);
          } else {
            Ctx.fillStyle = "#11c";
            Ctx.fillRect(X, Y + 72, 24, 24);
            Ctx.clearRect(X + 2, Y + 74, 20, 20);
          }
        } else if (PData.NumList[i] === 6) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#0ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 8, Y + 84, 8, 8);
          for (let i = 0; i < 8; i++)
            Ctx.fillRect(X + 11 - i, Y + 76 + i, 2 * (i + 1), 2);
        } else if (PData.NumList[i] === 7) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#0ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 12, Y + 80, 8, 8);
          for (let i = 0; i < 8; i++)
            Ctx.fillRect(X + 11 - i, Y + 76 + i, 2, 2 * (8 - i));
        } else if (PData.NumList[i] === 8) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#0ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 4, Y + 80, 8, 8);
          for (let i = 0; i < 8; i++)
            Ctx.fillRect(X + 11 + i, Y + 76 + i, 2, 2 * (8 - i));
        } else if (PData.NumList[i] === 9) {
          Ctx.fillStyle = "#cc0";
          Ctx.fillRect(X, Y + 78, 12, 12);
          Ctx.fillRect(X + 12, Y + 82, 12, 4);
          Ctx.fillRect(X + 15, Y + 86, 3, 4);
          Ctx.fillRect(X + 21, Y + 86, 3, 4);
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X + 3, Y + 81, 6, 6);
        } else if (PData.NumList[i] === 10) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 2, Y + 74, 13, 13);
          Ctx.fillRect(X + 9, Y + 81, 13, 13);
          Ctx.fillStyle = "#0c0";
          Ctx.fillRect(X + 4, Y + 76, 9, 9);
          Ctx.clearRect(X + 6, Y + 78, 5, 5);
          Ctx.fillRect(X + 8, Y + 80, 4, 4);
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(X + 11, Y + 83, 9, 9);
          Ctx.clearRect(X + 13, Y + 85, 5, 5);
          Ctx.fillRect(X + 12, Y + 84, 4, 4);
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 9, Y + 81, 6, 6);
        } else if (PData.NumList[i] === 11) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X + 1, Y + 83, 22, 2);
          for (let i = 1; i <= 5; i++) {
            Ctx.fillRect(X + 12 - 2 * i, Y + 71 + 2 * i, 4 * i, 3);
            Ctx.fillRect(X + 12 - 2 * i, Y + 94 - 2 * i, 4 * i, 3);
          }
          for (let i = 1; i <= 4; i++) {
            Ctx.fillStyle = "#f00";
            Ctx.fillRect(X + 12 - 2 * (i - 1), Y + 93 - 2 * i, 4 * (i - 1), 3);
            Ctx.fillStyle = "#0c0";
            Ctx.fillRect(X + 12 - 2 * (i - 1), Y + 72 + 2 * i, 4 * (i - 1), 3);
          }
        } else if (PData.NumList[i] === 12) {
          Ctx.fillStyle = "#04f";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#08f";
          Ctx.fillRect(X + 4, Y + 82, 16, 4);
        } else if (PData.NumList[i] === 13) {
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#4ff";
          Ctx.fillRect(X + 2, Y + 74, 20, 20);
          Ctx.clearRect(X + 8, Y + 80, 8, 8);
          Ctx.clearRect(X + 10, Y + 77, 4, 14);
          Ctx.clearRect(X + 5, Y + 82, 14, 4);
        } else if (PData.NumList[i] === 14) {
          Ctx.fillStyle = "#fb0";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#ff0";
          Ctx.fillRect(X + 4, Y + 76, 16, 16);
        } else if (PData.NumList[i] === 15) {
          Ctx.fillStyle = "#840";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.fillStyle = "#c80";
          Ctx.fillRect(X + 3, Y + 75, 18, 18);
        } else if (PData.NumList[i] >= 10000) {
          let ExitX = (Math.floor(PData.NumList[i] / 100) % 100) * 24;
          let ExitY = (PData.NumList[i] % 100) * 24;
          Ctx.fillStyle = "#000";
          Ctx.fillRect(X, Y + 72, 24, 24);
          Ctx.clearRect(X + 2, Y + 74, 20, 20);
          Ctx.fillRect(X + 4, Y + 76, 16, 16);
          Ctx.clearRect(X + 6, Y + 78, 12, 12);
          Ctx.fillRect(X + 8, Y + 80, 8, 8);
          Ctx.clearRect(X + 10, Y + 82, 4, 4);
          if (PData.NumList[i] >= 20000) {
            Ctx.clearRect(X + 7, Y + 75, 10, 10);
            Ctx.clearRect(X + 9, Y + 84, 6, 10);
            Ctx.fillRect(X + 8, Y + 76, 8, 8);
            Ctx.fillRect(X + 10, Y + 84, 4, 8);
          }
          Ctx.strokeStyle = "#888";
          Ctx.strokeRect(ExitX, ExitY + 72, 24, 24);
          Ctx.strokeRect(ExitX + 4, ExitY + 76, 16, 16);
          Ctx.strokeRect(ExitX + 8, ExitY + 80, 8, 8);
        }
      }
      if (PData.Level === 101) {
        Ctx.fillStyle = "#000";
        Ctx.font = "20px sans-serif";
        Ctx.fillText(
          "Use " + Keybinds.Left + " and " + Keybinds.Right + " to move left",
          130,
          400
        );
        Ctx.fillText(
          "and right and hold " + Keybinds.Jump + " to jump",
          130,
          425
        );
        Ctx.fillText(
          "Use " +
            Keybinds.Dash +
            " with " +
            Keybinds.Jump +
            ", " +
            Keybinds.Left +
            ", " +
            Keybinds.Right +
            ", or " +
            Keybinds.Down,
          330,
          285
        );
        Ctx.fillText("to dash in the air", 330, 310);
        Ctx.fillText("(gains most height at", 330, 335);
        Ctx.fillText("the peak of the jump)", 330, 360);
        Ctx.fillText(
          "You can also use " +
            Keybinds.PlayerSlow +
            " and " +
            Keybinds.PlayerFast +
            " to slow",
          445,
          510
        );
        Ctx.fillText("down and speed up time, respectively", 445, 535);
      } else if (PData.Level === 102) {
        Ctx.fillStyle = "#000";
        Ctx.font = "20px sans-serif";
        Ctx.fillText("Don't touch lava or fall into pits!", 270, 480);
        Ctx.fillText("Dashing can get you very far!", 285, 350);
      } else if (PData.Level === 103) {
        Ctx.fillStyle = "#000";
        Ctx.font = "20px sans-serif";
        Ctx.fillText("The Dash Switch toggles if you can dash!", 330, 525);
        Ctx.fillText("Red/Blue Blocks toggle their tangibility!", 200, 120);
      } else if (PData.Level === 104) {
        Ctx.fillStyle = "#000";
        Ctx.font = "20px sans-serif";
        Ctx.fillText("Boost blocks boost you in their direction!", 330, 500);
        Ctx.fillText("Crates break when quickly ran into!", 455, 405);
        Ctx.fillText("Honey blocks are too sticky to jump on,", 290, 295);
        Ctx.fillText("but you cling to the bottom of Up Boosts!", 290, 320);
      } else if (PData.Level === 105) {
        Ctx.fillStyle = "#000";
        Ctx.font = "20px sans-serif";
        Ctx.fillText("Gravity Switches reverse gravity!", 210, 522);
        Ctx.fillText(
          "Press " + Keybinds.Down + " to jump in reversed gravity!",
          230,
          94
        );
        Ctx.fillText("Be careful, ice is slippery!", 360, 322);
      } else if (PData.Level === 106) {
        Ctx.fillStyle = "#000";
        Ctx.font = "20px sans-serif";
        Ctx.fillText("Portals can teleport you!", 117, 488);
        Ctx.fillText("They can be one-way or go both ways!", 442, 488);
        Ctx.fillText("It keeps momentum too!", 120, 112);
        Ctx.fillText("They can also be used to generate", 445, 102);
        Ctx.fillText("enough speed to clip through blocks!", 445, 125);
        Ctx.fillStyle = "#fff";
        Ctx.fillText("You can float through Water Blocks!", 445, 400);
      }
      Ctx.fillStyle = "#0f0";
      if (!PData.Dead && PData.M.Dash) {
        Ctx.fillRect(PData.M.X, PData.M.Y + 72, 20, 20);
        if (PData.Keys > 0) {
          Ctx.fillStyle = "#cc0";
          Ctx.fillRect(PData.M.X, PData.M.Y + 77, 10, 10);
          Ctx.fillRect(PData.M.X + 10, PData.M.Y + 72 + 22 / 3, 10, 10 / 3);
          Ctx.fillRect(PData.M.X + 12.5, PData.M.Y + 72 + 32 / 3, 2.5, 10 / 3);
          Ctx.fillRect(PData.M.X + 17.5, PData.M.Y + 72 + 32 / 3, 2.5, 10 / 3);
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(PData.M.X + 2.5, PData.M.Y + 79.5, 5, 5);
          Ctx.fillStyle = "#0f0";
        }
      }
      Ctx.fillRect(676, 507, 16, 12);
      Ctx.fillStyle = "#0c0";
      if (!PData.Dead && !PData.M.Dash) {
        Ctx.fillRect(PData.M.X, PData.M.Y + 72, 20, 20);
        if (PData.Keys > 0) {
          Ctx.fillStyle = "#cc0";
          Ctx.fillRect(PData.M.X, PData.M.Y + 77, 10, 10);
          Ctx.fillRect(PData.M.X + 10, PData.M.Y + 72 + 22 / 3, 10, 10 / 3);
          Ctx.fillRect(PData.M.X + 12.5, PData.M.Y + 72 + 32 / 3, 2.5, 10 / 3);
          Ctx.fillRect(PData.M.X + 17.5, PData.M.Y + 72 + 32 / 3, 2.5, 10 / 3);
          Ctx.fillStyle = "#f00";
          Ctx.fillRect(PData.M.X + 2.5, PData.M.Y + 79.5, 5, 5);
          Ctx.fillStyle = "#0f0";
        }
      }
      Ctx.fillStyle = "#080";
      Ctx.fillRect(676, 506, 4, 20);
      if (PData.Mode === "Custom") Ctx.fillStyle = "#048";
      else if (PData.Mode === "Replay") Ctx.fillStyle = "#600";
      else Ctx.fillStyle = "#000";
      Ctx.fillRect(0, 0, 720, 72);
      Ctx.fillStyle = "#fff";
      Ctx.font = "40px sans-serif";
      let Str = Math.floor(PData.TimeSpeed % 10) + ".";
      Str += Math.floor(PData.TimeSpeed * 10) % 10;
      Str += Math.floor(PData.TimeSpeed * 100) % 10;
      Ctx.fillText(Str, 190, 49);
      if (PData.Level > 0 && PData.Level < 16) Str = PData.Level + "/15";
      else if (PData.Level > 100 && PData.Level < 107)
        Str = PData.Level - 100 + "/6";
      else Str = "1/1";
      Ctx.fillText(Str, 290, 49);
      Ctx.fillStyle = "#cc0";
      Ctx.fillRect(115, 21, 30, 30);
      Ctx.clearRect(120, 26, 20, 20);
      Ctx.fillStyle = "#000";
      Ctx.fillRect(128, 26, 4, 10);
      Ctx.fillRect(128, 34, 9, 4);
    } else if (MenuVar === 0) {
      Ctx.textAlign = "center";
      Ctx.fillStyle = "#000";
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Jabiveir: The Adventure 2", 360, 150, 720);
      Ctx.font = "30px sans-serif";
      Ctx.textAlign = "left";
      Ctx.fillText("Version 1.0", 7, 545);
    } else if (MenuVar === 1) {
    } else if (MenuVar === 2 || MenuVar === 3) {
      Ctx.textAlign = "center";
      Ctx.fillStyle = "#000";
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Settings", 360, 60, 720);
      Ctx.fillRect(0, 75, 720, 2);
      Ctx.textAlign = "right";
      Ctx.font = "40px sans-serif";
      Ctx.fillText('"' + Keybinds.Jump.toUpperCase() + '"', 600, 120, 150);
      Ctx.fillText('"' + Keybinds.Right.toUpperCase() + '"', 600, 188, 150);
      Ctx.fillText('"' + Keybinds.Left.toUpperCase() + '"', 600, 256, 150);
      Ctx.fillText('"' + Keybinds.Down.toUpperCase() + '"', 600, 324, 150);
      Ctx.fillText('"' + Keybinds.Dash.toUpperCase() + '"', 600, 392, 150);
      Ctx.fillText(
        '"' + Keybinds.PlayerFast.toUpperCase() + '"',
        550,
        460,
        150
      );
      Ctx.fillText(
        '"' + Keybinds.PlayerSlow.toUpperCase() + '"',
        550,
        528,
        150
      );
      let d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        "Keybinds=" +
        Keybinds.Jump +
        ":" +
        Keybinds.Right +
        ":" +
        Keybinds.Left +
        ":" +
        Keybinds.Down +
        ":" +
        Keybinds.Dash +
        ":" +
        Keybinds.PlayerFast +
        ":" +
        Keybinds.PlayerSlow +
        ";" +
        expires +
        ";path=/";
      for (let i = 0; i < 7; i++) {
        Ctx.fillRect(10, 85 + 67 * i, 150, 57);
        Ctx.clearRect(12, 87 + 67 * i, 146, 53);
      }
      if (PData.S.BeatLevelFast) {
        Ctx.fillStyle = "#0f0";
        Ctx.fillRect(12, 87 + 67 * 6, 146, 53);
        Ctx.fillStyle = "#000";
      }
      Ctx.font = "20px sans-serif";
      Ctx.textAlign = "center";
      let i = 85;
      Ctx.fillText("Die 100 times", 85, i + 20, 140);
      Ctx.fillText("(" + PData.S.TotalDeaths + ")", 85, i + 40, 140);
      i += 67;
      Ctx.fillText("Jump 1000 times", 85, i + 20, 140);
      Ctx.fillText("(" + PData.S.Jumps + ")", 85, i + 40, 140);
      i += 67;
      Ctx.fillText("Beat 50 levels", 85, i + 20, 140);
      Ctx.fillText("(" + PData.S.LevelsBeaten + ")", 85, i + 40, 140);
      i += 67;
      Ctx.fillText("Beat Normal in 10 min", 85, i + 20, 140);
      Ctx.fillText("(" + PData.S.BestNormalTime + ")", 85, i + 40, 140);
      i += 67;
      Ctx.fillText("Dash 300 times", 85, i + 20, 140);
      Ctx.fillText("(" + PData.S.TimesDashed + ")", 85, i + 40, 140);
      i += 67;
      Ctx.fillText("Go through 100 portals", 85, i + 20, 140);
      Ctx.fillText("(" + PData.S.PortalsTeleported + ")", 85, i + 40, 140);
      i += 67;
      Ctx.fillText(
        "Beat Normal holding " + Keybinds.PlayerFast.toUpperCase(),
        85,
        i + 20,
        140
      );
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      let expires2 = "expires=" + d.toUTCString();
      document.cookie =
        "Stats=" +
        PData.S.TotalDeaths +
        "-" +
        PData.S.Jumps +
        "-" +
        PData.S.LevelsBeaten +
        "-" +
        PData.S.BestNormalTime +
        "-" +
        PData.S.BestFrames +
        "-" +
        PData.S.TimesDashed +
        "-" +
        PData.S.PortalsTeleported +
        "-" +
        PData.S.BeatLevelFast +
        ";" +
        expires2 +
        ";path=/";
      Ctx.fillStyle = "#0f0";
      i = 85 + 45;
      Ctx.fillRect(12, i, 146 * Math.min(PData.S.TotalDeaths / 100, 1), 10);
      i += 67;
      Ctx.fillRect(12, i, 146 * Math.min(PData.S.Jumps / 1000, 1), 10);
      i += 67;
      Ctx.fillRect(12, i, 146 * Math.min(PData.S.LevelsBeaten / 50, 1), 10);
      i += 67;
      let w = 0
      if(PData.S.BestFrames !== 0)
        w = Math.max(Math.min(36000 / PData.S.BestFrames, 1), 0);
      Ctx.fillRect(12, i, 146 * w, 10);
      i += 67;
      Ctx.fillRect(12, i, 146 * Math.min(PData.S.TimesDashed / 300, 1), 10);
      i += 67;
      Ctx.fillRect(
        12,
        i,
        146 * Math.min(PData.S.PortalsTeleported / 100, 1),
        10
      );
      if (PData.S.BeatLevelFast) {
        Ctx.fillRect(12, i + 67, 146, 10);
        Ctx.globalAlpha = 0.5;
        Ctx.fillRect(12, i + 67 - 43, 146, 53);
      }
      Ctx.globalAlpha = 0.5;
      if (PData.S.PortalsTeleported >= 100) Ctx.fillRect(12, i - 43, 146, 53);
      if (PData.S.TimesDashed >= 300) Ctx.fillRect(12, i - 43, 146, 53);
      if (PData.S.BestNormalTime <= 36000 && PData.S.BestNormalTime !== 0) Ctx.fillRect(12, i - 43, 146, 53);
      if (PData.S.LevelsBeaten >= 50) Ctx.fillRect(12, i - 43, 146, 53);
      if (PData.S.Jumps >= 1000) Ctx.fillRect(12, i - 43, 146, 53);
      if (PData.S.TotalDeaths >= 100) Ctx.fillRect(12, i - 43, 146, 53);
      Ctx.globalAlpha = 1;
    } else if (MenuVar === 4) {
      Ctx.textAlign = "center";
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Select game mode:", 360, 100);
    } else if (MenuVar === 5) {
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Select a level:", 360, 60);
      Ctx.font = "40px sans-serif";
      Ctx.textAlign = "left";
      Ctx.fillText("Play single level", 260, 495);
    } else if (MenuVar === 6) {
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Please paste level code", 360, 280);
      Ctx.fillText("from the clipboard.", 360, 345);
    } else if (MenuVar === 7) {
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Please paste replay code", 360, 280);
      Ctx.fillText("from the clipboard.", 360, 345);
    }
  }
};
