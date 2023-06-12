export default class Game {
  constructor(Ctx, Buttons) {
    let GData = this.Init(Buttons);
    var Error = false;
    window.onerror = function () {
      Error = true;
      Ctx.fillStyle = "#f00";
      Ctx.fillRect(140, 180, 440, 220);
      Ctx.fillStyle = "#000";
      Ctx.font = "120px sans-serif";
      Ctx.textAlign = "center";
      Ctx.fillText("ERROR", 360, 300);
      Ctx.font = "40px sans-serif";
      Ctx.fillText("Game frozen to prevent", 360, 345);
      Ctx.fillText("browser crash.", 360, 380);
    };
    var GameThis = this;
    while (!Error) {
      var then = new Date().getTime();
      return (function loop(time) {
        requestAnimationFrame(loop);
        var now = new Date().getTime();
        var delta = now - then;
        if (delta > 1000 / 60 && !Error) {
          then = now - (delta % (1000 / 60));
          GameThis.Update(Ctx, Buttons, GData);
        }
      })(0);
    }
  }
  Init(Buttons) {
    let GData = {
      Rows: 6,
      Cols: 7,
      MaxTime: -1,
      PCount: 2,
      Connect: 4,
      K: {
        a: {
          L: "a",
          R: "d",
          D: "s"
        },
        b: {
          L: "j",
          R: "l",
          D: "k"
        },
        c: {
          L: "ArrowLeft",
          R: "ArrowRight",
          D: "ArrowDown"
        },
        d: {
          L: "Insert",
          R: "Enter",
          D: "Delete"
        }
      },
      PTimes: [],
      Board: [],
      CurrentP: 1,
      Hovering: 4,
      A: 0,
      B: 0,
      Won: false
    };
    document.addEventListener("keydown", (event) => {
      if (GData.Board.length > 0 && !GData.Won) {
        let P = (GData.CurrentP + 9).toString(14)
        switch (event.key) {
          case eval("GData.K." + P + ".L"):
            if (GData.Hovering > 0) {
              let Temp = -1;
              GData.Hovering += Temp;
              while (this.PlacePiece(GData) === -1) {
                if (GData.Hovering === 0) Temp = -Temp;
                GData.Hovering += Temp;
              }
            }
            break;
          case eval("GData.K." + P + ".R"):
            if (GData.Hovering < GData.Cols - 1) {
              let Temp = 1;
              GData.Hovering += Temp;
              while (this.PlacePiece(GData) === -1) {
                if (GData.Hovering === GData.Cols - 1) Temp = -Temp;
                GData.Hovering += Temp;
              }
            }
            break;
          case eval("GData.K." + P + ".D"):
            if (this.PlacePiece(GData) !== -1) {
              GData.Board[GData.Hovering][this.PlacePiece(GData)] = P;
              if (this.DetectWin(GData)) GData.Won = true;
              else GData.CurrentP = (GData.CurrentP % GData.PCount) + 1;
            }
            break;
          default:
        }
      }
    });
    Buttons.New({
      X: 10,
      Y: 20,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Text: "+",
      FontSize: 25,
      Fun: function () {
        if (GData.Connect < 20) GData.Connect++;
        if (GData.Rows < GData.Connect) GData.Rows = GData.Connect;
        if (GData.Cols < GData.Connect) GData.Cols = GData.Connect;
      },
      Disp: function () {
        if (GData.Connect === 20) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 50,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Fun: function () {
        if (GData.Connect > 3) GData.Connect--;
      },
      Disp: function (Ctx) {
        Ctx.fillRect(this.X + 7, this.Y + 11, 11, 3);
        if (GData.Connect === 3) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 90,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Text: "+",
      FontSize: 25,
      Fun: function () {
        if (GData.Rows < 20) GData.Rows++;
      },
      Disp: function () {
        if (GData.Rows === 20) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 120,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Fun: function () {
        if (GData.Rows > GData.Connect) GData.Rows--;
      },
      Disp: function (Ctx) {
        Ctx.fillRect(this.X + 7, this.Y + 11, 11, 3);
        if (GData.Rows === GData.Connect) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 160,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Text: "+",
      FontSize: 25,
      Fun: function () {
        if (GData.Cols < 30) GData.Cols++;
      },
      Disp: function () {
        if (GData.Cols === 30) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 190,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Fun: function () {
        if (GData.Cols > GData.Connect) GData.Cols--;
      },
      Disp: function (Ctx) {
        Ctx.fillRect(this.X + 7, this.Y + 11, 11, 3);
        if (GData.Cols === GData.Connect) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 230,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Text: "+",
      FontSize: 25,
      Fun: function () {
        if (GData.PCount < 4) GData.PCount++;
      },
      Disp: function () {
        if (GData.PCount === 4) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 260,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Fun: function () {
        if (GData.PCount > 2) GData.PCount--;
      },
      Disp: function (Ctx) {
        Ctx.fillRect(this.X + 7, this.Y + 11, 11, 3);
        if (GData.PCount === 2) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 300,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Text: "+",
      FontSize: 25,
      Fun: function () {
        if (GData.MaxTime < 216000) {
          if (GData.MaxTime === -1) GData.MaxTime = 1800;
          else if (GData.MaxTime === 3600) GData.MaxTime *= 2.5;
          else if (GData.MaxTime === 36000) GData.MaxTime *= 1.5;
          else GData.MaxTime *= 2;
        }
      },
      Disp: function () {
        if (GData.MaxTime === 216000) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });
    Buttons.New({
      X: 10,
      Y: 330,
      W: 25,
      H: 25,
      MenuShow: [1],
      MenuGoal: 1,
      Fun: function () {
        if (GData.MaxTime > -1) {
          if (GData.MaxTime === 1800) GData.MaxTime = -1;
          else if (GData.MaxTime === 3600 * 2.5) GData.MaxTime /= 2.5;
          else if (GData.MaxTime === 36000 * 1.5) GData.MaxTime /= 1.5;
          else GData.MaxTime /= 2;
        }
      },
      Disp: function (Ctx) {
        Ctx.fillRect(this.X + 7, this.Y + 11, 11, 3);
        if (GData.MaxTime === -1) this.Opacity = 0;
        else this.Opacity = 1;
      }
    });

    for (let i = 0; i < 4; i++) {
      Buttons.New({
        X: 638,
        Y: 12 + 135 * i,
        W: 70,
        H: 33,
        MenuShow: [1, 2],
        MenuGoal: 2,
        Text: "Left",
        FontSize: 30,
        P: i,
        Fun: function () {
          let Listen = true;
          eval("GData.K." + (this.P + 10).toString(14) + ".L = ' ';");
          document.addEventListener("keydown", (event) => {
            if (Listen) {
              eval("GData.K." + (this.P + 10).toString(14) + ".L = event.key;");
              Buttons.MenuVar = 1;
              Listen = false;
            }
          });
        },
        Disp: function () {
          if (GData.PCount <= i) this.Opacity = 0;
          else this.Opacity = 1;
        }
      });
      Buttons.New({
        X: 638,
        Y: 57 + 135 * i,
        W: 70,
        H: 33,
        MenuShow: [1, 2],
        MenuGoal: 2,
        Text: "Right",
        FontSize: 30,
        P: i,
        Fun: function () {
          let Listen = true;
          eval("GData.K." + (this.P + 10).toString(14) + ".R = ' ';");
          document.addEventListener("keydown", (event) => {
            if (Listen) {
              eval("GData.K." + (this.P + 10).toString(14) + ".R = event.key;");
              Buttons.MenuVar = 1;
              Listen = false;
            }
          });
        },
        Disp: function () {
          if (GData.PCount <= i) this.Opacity = 0;
          else this.Opacity = 1;
        }
      });
      Buttons.New({
        X: 638,
        Y: 102 + 135 * i,
        W: 70,
        H: 33,
        MenuShow: [1, 2],
        MenuGoal: 2,
        Text: "Drop",
        FontSize: 30,
        P: i,
        Fun: function () {
          let Listen = true;
          eval("GData.K." + (this.P + 10).toString(14) + ".D = ' ';");
          document.addEventListener("keydown", (event) => {
            if (Listen) {
              eval("GData.K." + (this.P + 10).toString(14) + ".D = event.key;");
              Buttons.MenuVar = 1;
              Listen = false;
            }
          });
        },
        Disp: function () {
          if (GData.PCount <= i) this.Opacity = 0;
          else this.Opacity = 1;
        }
      });
    }
    Buttons.New({
      X: 10,
      Y: 442,
      W: 300,
      H: 100,
      MenuShow: [1],
      MenuGoal: 3,
      Text: "Start Game",
      FontSize: 70,
      Fun: function () {
        for (let i = 0; i < GData.Cols; i++) {
          GData.Board.push([]);
          for (let j = 0; j < GData.Rows; j++) GData.Board[i].push("x");
        }
        GData.Hovering = Math.floor(GData.Cols / 2 - 0.5);
        for (let i = 0; i < GData.PCount; i++) GData.PTimes.push(GData.MaxTime);
      },
      Disp: function () {}
    });

    return GData;
  }
  Update(Ctx, Buttons, GData) {
    Ctx.clearRect(0, 0, 720, 720);
    if (Buttons.MenuVar === 0) {
      Ctx.textAlign = "center";
      Ctx.font = "90px sans-serif";
      Ctx.fillText("Connect 4*", 360, 200);
    } else if (Buttons.MenuVar === 1 || Buttons.MenuVar === 2) {
      Ctx.fillStyle = "#f88";
      Ctx.fillRect(530, 0, 190, 141);
      Ctx.fillStyle = "#ff8";
      Ctx.fillRect(530, 141, 190, 135);
      Ctx.fillStyle = "#8f8";
      Ctx.fillRect(530, 276, 190, 135);
      Ctx.fillStyle = "#8ff";
      Ctx.fillRect(530, 411, 190, 141);
      Ctx.fillStyle = "#000";
      Ctx.textAlign = "left";
      Ctx.font = "60px sans-serif";
      Ctx.fillText("Connect " + GData.Connect, 40, 70);
      Ctx.fillText("Rows: " + GData.Rows, 40, 140);
      Ctx.fillText("Cols: " + GData.Cols, 40, 210);
      Ctx.fillText("Players: " + GData.PCount, 40, 280);
      let Temp = Math.floor(GData.MaxTime / 3600) + ":";
      Temp += (GData.MaxTime / 60) % 60;
      if ((GData.MaxTime / 60) % 60 < 10) Temp += "0";
      if (GData.MaxTime === -1) Temp = "None";
      Ctx.fillText("Timer: " + Temp, 40, 350);
      Ctx.textAlign = "right";
      Ctx.font = "30px sans-serif";
      for (let i = 0; i < GData.PCount; i++) {
        let Temp = "GData.K." + (i + 10).toString(14);
        Ctx.fillText(this.CFL(eval(Temp + ".L")), 633, 40 + 135 * i, 100);
        Ctx.fillText(this.CFL(eval(Temp + ".R")), 633, 85 + 135 * i, 100);
        Ctx.fillText(this.CFL(eval(Temp + ".D")), 633, 130 + 135 * i, 100);
      }
    } else if (Buttons.MenuVar === 3) {
      Ctx.fillStyle = "#888";
      Ctx.fillRect(0, 480, 720, 72);
      Ctx.fillStyle = "#000";
      if (GData.Cols > 1.5 * GData.Rows) {
        GData.A = 576 / GData.Cols;
        GData.B = 144 / (GData.Cols + 1);
      } else {
        GData.A = 384 / GData.Rows;
        GData.B = 96 / (GData.Rows + 1);
      }
      let Temp = GData.Cols * (GData.A + GData.B) + GData.B;
      Temp = (720 - Temp) / 2;
      Ctx.fillRect(0, 0, Temp + 1, 480);
      Ctx.fillRect(719 - Temp, 0, Temp + 1, 480);
      for (let i = 0; i <= GData.Cols; i++) {
        Ctx.fillRect(Temp + i * (GData.A + GData.B), 0, GData.B, 480);
      }
      let Temp2 = GData.Rows * (GData.A + GData.B) + GData.B;
      Temp2 = (480 - Temp2) / 2;
      Ctx.fillRect(0, 0, 720, Temp2 + 1);
      Ctx.fillRect(0, 479 - Temp2, 720, Temp2 + 1);
      for (let i = 0; i <= GData.Rows; i++) {
        Ctx.fillRect(0, Temp2 + i * (GData.A + GData.B), 720, GData.B);
      }
      Ctx.fillStyle = "#400";
      if (GData.PTimes[0] !== 0) Ctx.fillStyle = "#fcc";
      if (GData.CurrentP === 1) Ctx.fillStyle = "#f00";
      Ctx.fillRect(0, 480, 180, 72);
      Ctx.fillStyle = "#440";
      if (GData.PTimes[1] !== 0) Ctx.fillStyle = "#ffc";
      if (GData.CurrentP === 2) Ctx.fillStyle = "#ff0";
      Ctx.fillRect(180, 480, 180, 72);
      Ctx.fillStyle = "#040";
      if (GData.PCount >= 3 && GData.PTimes[2] !== 0) Ctx.fillStyle = "#cfc";
      if (GData.CurrentP === 3) Ctx.fillStyle = "#0f0";
      Ctx.fillRect(360, 480, 180, 72);
      Ctx.fillStyle = "#044";
      if (GData.PCount >= 4 && GData.PTimes[3] !== 0) Ctx.fillStyle = "#cff";
      if (GData.CurrentP === 4) Ctx.fillStyle = "#0ff";
      Ctx.fillRect(540, 480, 180, 72);
      Temp += GData.B;
      Temp2 += GData.B + GData.A;
      for (let i = 0; i < GData.Cols; i++) {
        for (let j = 0; j < GData.Rows; j++) {
          Ctx.fillStyle = "#fff";
          if (GData.Board[i][j] === "a") Ctx.fillStyle = "#f00";
          else if (GData.Board[i][j] === "b") Ctx.fillStyle = "#ff0";
          else if (GData.Board[i][j] === "c") Ctx.fillStyle = "#0f0";
          else if (GData.Board[i][j] === "d") Ctx.fillStyle = "#0ff";
          Ctx.fillRect(
            Temp + (GData.A + GData.B) * i,
            480 - Temp2 - (GData.A + GData.B) * j,
            GData.A,
            GData.A
          );
        }
      }
      if (GData.CurrentP === 1) Ctx.fillStyle = "#f88";
      else if (GData.CurrentP === 2) Ctx.fillStyle = "#ff8";
      else if (GData.CurrentP === 3) Ctx.fillStyle = "#8f8";
      else if (GData.CurrentP === 4) Ctx.fillStyle = "#8ff";
      let Phantom = this.PlacePiece(GData);
      if (Phantom !== -1)
        Ctx.fillRect(
          Temp + (GData.A + GData.B) * GData.Hovering,
          480 - Temp2 - (GData.A + GData.B) * Phantom,
          GData.A,
          GData.A
        );
      if (GData.Won) {
        Ctx.globalAlpha = 0.5;
        Ctx.fillStyle = "#000";
        Ctx.fillRect(0, 0, 720, 480);
        Ctx.globalAlpha = 1;
        Ctx.fillRect(135, 160, 450, 130);
        Ctx.clearRect(137, 162, 446, 126);
        Ctx.textAlign = "center";
        Ctx.font = "70px sans-serif";
        if(!this.DetectDraw(GData))
          Ctx.fillText("Player " + GData.CurrentP + " wins!", 360, 225);
        else
          Ctx.fillText("No one wins...", 360, 225)
        Ctx.font = "40px sans-serif";
        Ctx.fillText("Refresh to play again!", 360, 270);
      }
      if (!GData.Won) {
        if (GData.PTimes[GData.CurrentP - 1] > 0)
          GData.PTimes[GData.CurrentP - 1]--;
        else if (GData.PTimes[GData.CurrentP - 1] !== -1) {
          GData.CurrentP = (GData.CurrentP % GData.PCount) + 1;
          if (this.DetectWin(GData)) GData.Won = true;
        }
      }
      Ctx.textAlign = "center";
      Ctx.font = "30px sans-serif";
      Ctx.fillStyle = "#000";
      for (let i = 0; i < GData.PCount; i++) {
        if (i < GData.PCount && GData.PTimes[i] > -1) {
          let Temp = Math.floor(GData.PTimes[i] / 3600) + ":";
          if (Temp.length < 3) Temp = "0" + Temp;
          Temp += Math.floor(((GData.PTimes[i] % 3600) * 1000) / 60).toString();
          while (Temp.length < 8)
            Temp = Temp.substring(0, 3) + "0" + Temp.substring(3);
          Temp = Temp.substring(0, 5) + "." + Temp.substring(5);
          Ctx.fillText(Temp, 90 + 180 * i, 530);
        }
      }
    }
    Buttons.Draw(Ctx);
  }
  CFL(Str) {
    return Str.substring(0, 1).toUpperCase() + Str.substring(1);
  }
  PlacePiece(GData) {
    if (GData.Board[GData.Hovering][GData.Rows - 1] !== "x") return -1;
    let i = 0;
    while (GData.Board[GData.Hovering][i] !== "x") i++;
    return i;
  }

  DetectWin(GData) {
    if(this.DetectDraw(GData))
      return true
    let Count = 0;
    for (let i = 0; i < GData.PCount; i++) {
      if (GData.PTimes[i] !== 0) Count++;
    }
    if (Count === 1) {
      for (let i = 0; i < GData.PCount; i++) {
        if (GData.PTimes[i] !== 0) {
          GData.CurrentP = i + 1;
          return true;
        }
      }
    }
    let WC = "";
    for (let i = 0; i < GData.Connect; i++)
      WC += (GData.CurrentP + 9).toString(14);
    for (let i = 0; i < GData.Cols; i++) {
      for (let j = 0; j < GData.Rows; j++) {
        let H = "";
        let V = "";
        let D1 = "";
        let D2 = "";
        for (let k = 0; k < GData.Connect; k++) {
          if (i <= GData.Cols - GData.Connect) H += GData.Board[i + k][j];
          if (j <= GData.Rows - GData.Connect) V += GData.Board[i][j + k];
          if (
            i <= GData.Cols - GData.Connect &&
            j <= GData.Rows - GData.Connect
          ) {
            D1 += GData.Board[i + k][j + k];
            D2 += GData.Board[i + GData.Connect - 1 - k][j + k];
          }
        }
        if (H === WC || V === WC || D1 === WC || D2 === WC) return true;
      }
    }
    return false;
  }
  DetectDraw(GData) {
    let Draw = true
    for(let i = 0; i < GData.Cols; i++) {
      for(let j = 0; j < GData.Rows; j++) {
        if(GData.Board[i][j] === "x")
          Draw = false
      }
    }
    return Draw
  }
};
