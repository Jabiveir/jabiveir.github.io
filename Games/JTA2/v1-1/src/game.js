export default class game {
  constructor(Fullscreen, Ctx, Buttons, Menu, Keybinds, PData2, Level) {
    let PData = PData2;
    var Error = false;
    var GameThis = this;
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
    document.addEventListener("keydown", (event) => {
      if (!PData.Replaying) {
        switch (event.key.toLowerCase()) {
          case Keybinds.Jump.toLowerCase():
            PData.K.Up = true;
            break;
          case Keybinds.Left.toLowerCase():
            PData.K.Left = true;
            break;
          case Keybinds.Right.toLowerCase():
            PData.K.Right = true;
            break;
          case Keybinds.Down.toLowerCase():
            PData.K.Down = true;
            break;
          case Keybinds.Dash.toLowerCase():
            PData.K.Dash = true;
            break;
          case Keybinds.PlayerFast.toLowerCase():
            PData.K.TimeUp = true;
            break;
          case Keybinds.PlayerSlow.toLowerCase():
            PData.K.TimeDown = true;
            break;
          default:
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      if (!PData.Replaying) {
        switch (event.key.toLowerCase()) {
          case Keybinds.Jump.toLowerCase():
            PData.K.Up = false;
            break;
          case Keybinds.Left.toLowerCase():
            PData.K.Left = false;
            break;
          case Keybinds.Right.toLowerCase():
            PData.K.Right = false;
            break;
          case Keybinds.Down.toLowerCase():
            PData.K.Down = false;
            break;
          case Keybinds.Dash.toLowerCase():
            PData.K.Dash = false;
            break;
          case Keybinds.PlayerFast.toLowerCase():
            PData.K.TimeUp = false;
            break;
          case Keybinds.PlayerSlow.toLowerCase():
            PData.K.TimeDown = false;
            break;
          default:
        }
      }
    });
    while (true) {
      var then = new Date().getTime();
      return (function loop(time) {
        requestAnimationFrame(loop);
        var now = new Date().getTime();
        var delta = now - then;
        if (delta > 1000 / 60 && !Error) {
          then = now - (delta % (1000 / 60));
          GameThis.Update(
            Fullscreen,
            Ctx,
            Buttons,
            Menu,
            Keybinds,
            PData,
            Level
          );
        }
      })(0);
    }
  }
  Update(Fullscreen, Ctx, Buttons, Menu, Keybinds, PData, Level) {
    if (Buttons.MenuVar === -1) {
      if (PData.TimeSpeed !== 0) PData.RealTime += 1;
      for (let k = 0; k < 4 * PData.TimeSpeed && !PData.Dead; k++) {
        let X = Math.floor((PData.M.X + 10) / 24);
        let Y = Math.floor((PData.M.Y + 10) / 24);
        PData.M.OnGround = false;
        PData.M.InPortal = false;
        PData.M.Gravity = true;
        PData.M.XFric = 0.9;
        PData.M.YFric = 1;
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            let Block = PData.NumList[X + j + 30 * (Y + i)];
            let index = X + j + 30 * (Y + i);
            let BlockX = (index % 30) * 24;
            let BlockY = Math.floor(index / 30) * 24;
            if (
              PData.M.X + 20 > BlockX + 2 &&
              PData.M.X < BlockX + 22 &&
              PData.M.Y + 20 > BlockY + 2 &&
              PData.M.Y < BlockY + 22
            ) {
              //FULL
              if (BlockX === 672 && BlockY === 432) {
                PData.Level++;
                if (
                  PData.Code.substring(PData.Code.indexOf(":") + 1).indexOf(
                    ":"
                  ) >= 0
                ) {
                  PData.Level--;
                  PData.CodeIndex =
                    PData.Code.substring(PData.CodeIndex).indexOf(":") +
                    PData.Code.substring(0, PData.CodeIndex).length +
                    1;
                }
                if (PData.Mode !== "Playtest" && !PData.Replaying)
                  PData.S.LevelsBeaten++;
                if (PData.Mode === "Normal") {
                  if (PData.Level > PData.MaxLevel) {
                    PData.MaxLevel = PData.Level;
                    let d = new Date();
                    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
                    let expires = "expires=" + d.toUTCString();
                    document.cookie =
                      "MaxLev=" + PData.MaxLevel + ";" + expires + ";path=/";
                  }

                  PData.TotalTime += PData.RealTime;
                  PData.RealTime = 0;
                  if (PData.SingSeg) PData.Level = 16;
                }
                if (PData.Code.length !== PData.CodeIndex) {
                  if (!PData.Replaying) {
                    PData.Replaying = true;
                    Level.LoadLevel(PData);
                    PData.Replaying = false;
                  } else Level.LoadLevel(PData);
                } else PData.Level++;
              } else if (
                Block === 1 ||
                Block === 3 ||
                (Block === 4 && PData.Time % 240 < 120) ||
                (Block === 5 && PData.Time % 240 >= 120) ||
                Block === 6 ||
                Block === 7 ||
                Block === 8 ||
                Block === 13 ||
                Block === 14
              ) {
                PData.Dead = true;
              } else if (Block === 9) {
                PData.Keys += 1;
                PData.NumList[index] = 0;
              } else if (Block === 10) {
                PData.M.DashDisabled = !PData.M.DashDisabled;
                PData.M.Dash = !PData.M.DashDisabled;
                PData.NumList[index] = 0;
              } else if (Block === 11) {
                PData.M.GravityFlip = !PData.M.GravityFlip;
                PData.NumList[index] = 0;
              } else if (Block === 12) {
                PData.M.Gravity = false;
                PData.M.XFric = 0.9;
                PData.M.YFric = 0.9;
              } else if (Block === 15) {
                PData.M.XVel /= 3;
                PData.M.YVel /= 3;
                PData.NumList[index] = 0;
              } else if (Block >= 20000) {
                if (PData.Keys > 0) {
                  PData.NumList[index] -= 10000;
                  PData.Keys -= 1;
                }
              } else if (Block >= 10000) {
                if (!PData.M.InPortal2 && !PData.M.InPortal) {
                  if (!PData.Replaying) PData.S.PortalsTeleported++;
                  PData.M.Y = (Block % 100) * 24 + 4;
                  PData.M.X = (Math.floor(Block / 100) % 100) * 24 + 2;
                }
                PData.M.InPortal = true;
              }
            }
            if (
              PData.M.Y + 20 > BlockY &&
              PData.M.Y + 20 < BlockY + 2 &&
              PData.M.X + 20 > BlockX &&
              PData.M.X < BlockX + 24
            ) {
              //TOP
              if (
                Block === 1 ||
                Block === 2 ||
                (Block === 4 && PData.Time % 240 < 120) ||
                (Block === 5 && PData.Time % 240 >= 120)
              ) {
                PData.M.Y = BlockY - 20;
                PData.M.YVel = 0;
                if (!PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 6) {
                PData.M.Y = BlockY - 20;
                PData.M.YVel = 5;
                if (!PData.M.GravityFlip) {
                  PData.M.OnGround = false;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 7) {
                PData.M.Y = BlockY - 20;
                PData.M.YVel = 0;
                PData.M.XVel -= 0.2 / 3;
                if (!PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 8) {
                PData.M.Y = BlockY - 20;
                PData.M.YVel = 0;
                PData.M.XVel += 0.2 / 3;
                if (!PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 13) {
                PData.M.Y = BlockY - 20;
                PData.M.YVel = 0;
                if (!PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.95;
                }
              } else if (Block === 14) {
                PData.M.Y = BlockY - 20;
                PData.M.YVel = 0;
                if (!PData.M.GravityFlip) {
                  PData.M.OnGround = false;
                  PData.M.Dash = false;
                  PData.M.XFric = 0.5;
                }
              } else if (Block === 15) {
                if (PData.M.YVel < -4) {
                  PData.NumList[index] = 0;
                  PData.M.YVel /= 3;
                  if (!PData.M.GravityFlip) PData.M.OnGround = true;
                } else {
                  PData.M.Y = BlockY - 20;
                  PData.M.YVel = 0;
                  if (!PData.M.GravityFlip) {
                    PData.M.OnGround = true;
                    PData.M.XFric = 0.9;
                  }
                }
              }
            }
            if (
              PData.M.X + 20 >= BlockX &&
              PData.M.X + 20 < BlockX + 2 &&
              PData.M.Y + 20 > BlockY &&
              PData.M.Y < BlockY + 24
            ) {
              //LEFT
              if (
                Block === 1 ||
                (Block === 4 && PData.Time % 240 < 120) ||
                (Block === 5 && PData.Time % 240 >= 120) ||
                Block === 8
              ) {
                PData.M.X = BlockX - 20;
                PData.M.XVel = 0;
              } else if (Block === 6) {
                PData.M.YVel += 1 / 20 / 4;
                PData.M.YFric = 0.8;
                PData.M.X = BlockX - 20;
                PData.M.XVel = 0;
              } else if (Block === 7) {
                PData.M.X = BlockX - 20;
                PData.M.XVel = -5;
              } else if (Block === 13) {
                PData.M.X = BlockX - 20;
                PData.M.XVel = 0;
              } else if (Block === 14) {
                PData.M.X = BlockX - 20;
                PData.M.XVel = 0;
                PData.M.YFric = 0.5;
              } else if (Block === 15) {
                if (PData.M.XVel > 4) {
                  PData.NumList[index] = 0;
                  PData.M.XVel /= 3;
                } else {
                  PData.M.X = BlockX - 20;
                  PData.M.XVel = 0;
                }
              }
            }
            if (
              PData.M.X > BlockX + 22 &&
              PData.M.X <= BlockX + 24 &&
              PData.M.Y + 20 > BlockY &&
              PData.M.Y < BlockY + 23
            ) {
              //RIGHT
              if (
                Block === 1 ||
                (Block === 4 && PData.Time % 240 < 120) ||
                (Block === 5 && PData.Time % 240 >= 120) ||
                Block === 7
              ) {
                PData.M.X = BlockX + 24;
                PData.M.XVel = 0;
              } else if (Block === 6) {
                PData.M.YVel += 1 / 20 / 4;
                PData.M.YFric = 0.8;
                PData.M.X = BlockX + 24;
                PData.M.XVel = 0;
              } else if (Block === 8) {
                PData.M.X = BlockX + 24;
                PData.M.XVel = 5;
              } else if (Block === 13) {
                PData.M.X = BlockX + 24;
                PData.M.XVel = 0;
              } else if (Block === 14) {
                PData.M.X = BlockX + 24;
                PData.M.XVel = 0;
                PData.M.YFric = 0.5;
              } else if (Block === 15) {
                if (PData.M.XVel < -4) {
                  PData.NumList[index] = 0;
                  PData.M.XVel /= 3;
                } else {
                  PData.M.X = BlockX + 24;
                  PData.M.XVel = 0;
                }
              }
            }
            if (
              PData.M.Y > BlockY + 22 &&
              PData.M.Y < BlockY + 24 &&
              PData.M.X + 20 > BlockX &&
              PData.M.X < BlockX + 24
            ) {
              //BOTTOM
              if (
                Block === 1 ||
                (Block === 4 && PData.Time % 240 < 120) ||
                (Block === 5 && PData.Time % 240 >= 120)
              ) {
                PData.M.Y = BlockY + 24;
                PData.M.YVel = 0;
                if (PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 6) {
                PData.M.Y = BlockY + 24;
                PData.M.YVel = 0.1;
                if (PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 7) {
                PData.M.Y = BlockY + 24;
                PData.M.YVel = 0;
                PData.M.XVel -= 0.2 / 3;
                if (PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 8) {
                PData.M.Y = BlockY + 24;
                PData.M.YVel = 0;
                PData.M.XVel += 0.2 / 3;
                if (PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.9;
                }
              } else if (Block === 13) {
                PData.M.Y = BlockY + 24;
                PData.M.YVel = 0;
                if (PData.M.GravityFlip) {
                  PData.M.OnGround = true;
                  PData.M.XFric = 0.95;
                }
              } else if (Block === 14) {
                PData.M.Y = BlockY + 24;
                PData.M.YVel = 0;
                if (PData.M.GravityFlip) {
                  PData.M.OnGround = false;
                  PData.M.Dash = false;
                  PData.M.XFric = 0.5;
                }
              } else if (Block === 15) {
                if (PData.M.YVel > 3) {
                  PData.NumList[index] = 0;
                  PData.M.YVel /= 3;
                  if (PData.M.GravityFlip) PData.M.OnGround = true;
                } else {
                  PData.M.Y = BlockY + 24;
                  PData.M.YVel = 0;
                  if (PData.M.GravityFlip) {
                    PData.M.OnGround = true;
                    PData.M.XFric = 0.9;
                  }
                }
              }
            }
          }
        }
        if (((PData.Time * 100) / 100 + PData.ReplayTime) % 1 === 0) {
          if (PData.Replaying) {
            Level.KeyDecompress(
              PData.K,
              PData.CurrentReplay[PData.Time + PData.ReplayTime] || "4"
            );
            if (
              PData.Time + PData.ReplayTime + 1 >= PData.CurrentReplay.length &&
              PData.Level > 0 &&
              PData.Level < 16
            )
              PData.Level = 16;
          } else PData.CurrentReplay += Level.KeyCompress(PData.K);
          if (PData.K.Up) {
            if (PData.M.OnGround && PData.M.Gravity && !PData.M.GravityFlip) {
              PData.M.YVel = 2.5;
              if (!PData.Replaying) PData.S.Jumps++;
            }
            if (!PData.M.Gravity) PData.M.YVel += 0.3 - 1 / 16.7;
            else if (!PData.M.GravityFlip) PData.M.YVel += 1 / 16.7;
          }
          if (PData.K.Left) {
            PData.M.XVel -= 0.3;
          }
          if (PData.K.Right) {
            PData.M.XVel += 0.3;
          }
          if (PData.K.Down) {
            if (PData.M.OnGround && PData.M.Gravity && PData.M.GravityFlip) {
              PData.M.YVel = -2.5;
              if (!PData.Replaying) PData.S.Jumps++;
            }
            if (!PData.M.Gravity) PData.M.YVel -= 0.3 - 1 / 16.7;
            else if (PData.M.GravityFlip) {
              PData.M.YVel -= 1 / 16.7;
            }
          }
          if (PData.K.Dash && PData.M.Dash && !PData.M.OnGround) {
            if (PData.K.Up || PData.K.Left || PData.K.Right || PData.K.Down) {
              PData.M.Dash = false;
              if (!PData.Replaying) PData.S.TimesDashed++;
            }
            if (PData.K.Up) PData.M.YVel = 2;
            if (PData.K.Left) PData.M.XVel -= 3;
            if (PData.K.Right) PData.M.XVel += 3;
            if (PData.K.Down) PData.M.YVel = -2;
          }
          PData.TimeSpeed = (PData.TimeSpeed - 1.001) * 0.9 + 1.001;
          if (PData.K.TimeUp) {
            PData.TimeSpeed += 0.1;
          }
          if (PData.K.TimeDown) {
            PData.TimeSpeed -= 0.099;
          }
          PData.M.XVel *= PData.M.XFric;
          PData.M.YVel *= PData.M.YFric;
        }
        if (
          (PData.M.Y > 490 && !PData.M.GravityFlip) ||
          (PData.M.Y < -10 && PData.M.GravityFlip)
        ) {
          PData.Dead = true;
        } else if (PData.M.Y < 0 && !PData.M.GravityFlip) {
          PData.M.Y = 0;
          PData.M.YVel = 0;
        } else if (PData.M.Y > 460 && PData.M.GravityFlip) {
          PData.M.Y = 460;
          PData.M.YVel = 0;
        }
        if (PData.M.X < 0) {
          PData.M.X = 0;
          PData.M.XVel = 0;
        } else if (PData.M.X > 700) {
          PData.M.X = 700;
          PData.M.XVel = 0;
        }
        PData.Time += 1 / 4;
        if ((PData.Time * 100) % 1 !== 0) {
          console.log("Rounding error detected!");
          console.log("Time: " + PData.Time);
          PData.Time = Math.floor(PData.Time * 100 + 0.5) / 100;
          console.log("Corrected Time: " + PData.Time);
        }
        if (PData.M.Gravity) {
          if (!PData.M.GravityFlip) PData.M.YVel -= 1 / 40;
          else PData.M.YVel += 1 / 40;
        }
        if (PData.M.OnGround && !PData.M.DashDisabled) PData.M.Dash = true;
        PData.M.X += PData.M.XVel / 4;
        PData.M.Y -= PData.M.YVel / 4;
        PData.M.InPortal2 = PData.M.InPortal;
        if (PData.Level === -1 || PData.Level === 16 || PData.Level === 107) {
          if (!PData.Replaying) Buttons.MenuVar = -3;
          else Buttons.MenuVar = -4;
        }
      }
    }
    if (PData.Dead) Level.LoadLevel(PData);
    Fullscreen.Update(Ctx, Buttons, Menu, Keybinds, PData, Level);
  }
};
