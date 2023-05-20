import fullscreen from "./fullscreen.js";
import buttons from "./button.js";
import menu from "./menu.js";
import game from "./game.js";
import level from "./level.js";

let Level = new level();
let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");

let Keybinds = {
  Jump: "w",
  Left: "a",
  Right: "d",
  Down: "s",
  Dash: "k",
  PlayerFast: "l",
  PlayerSlow: "j"
};
let NumList = [];
let Holding = 0;
for (let i = 0; i < 600; i++) NumList.push(0);
let PData = {
  Level: 0,
  StartLevel: 0,
  MaxLevel: 1,
  Mode: "None",
  Dead: false,
  Time: 0,
  RealTime: 0,
  TotalTime: 0,
  ReplayTime: 0,
  Attempts: 1,
  Replaying: false,
  TimeSpeed: 1,
  Keys: 0,
  M: {
    X: 26,
    Y: 436,
    XVel: 0,
    YVel: 0,
    XFric: 0.9,
    YFric: 1,
    Gravity: true,
    OnGround: true,
    Dash: true,
    DashDisabled: false,
    GravityFlip: false,
    InPortal: false,
    InPortal2: false
  },
  K: {
    Up: false,
    Left: false,
    Right: false,
    Down: false,
    Dash: false,
    TimeUp: false,
    TimeDown: false
  },
  S: {
    TotalDeaths: 0,
    Jumps: 0,
    LevelsBeaten: 0,
    BestNormalTime: "N/A",
    BestFrames: 0,
    TimesDashed: 0,
    PortalsTeleported: 0,
    BeatLevelFast: false
  },
  SingSeg: false,
  CurrentReplay: "",
  CustomList: NumList,
  NumList: [],
  Code: "",
  CodeIndex: 0
};
let Buttons = new buttons(Canvas, Keybinds);
let Menu = new menu();
let Fullscreen = new fullscreen(
  Canvas,
  Ctx,
  Buttons,
  Menu,
  Keybinds,
  PData,
  Level
);
let Game = new game(Fullscreen, Ctx, Buttons, Menu, Keybinds, PData, Level);

let name = "MaxLev=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) === 0) {
    c = c.substring(name.length);
    PData.MaxLevel = parseInt(c, 10);
  }
}
name = "Keybinds=";
decodedCookie = decodeURIComponent(document.cookie);
ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) === 0) {
    c = c.substring(name.length);
    Keybinds.Jump = c.substring(0, c.indexOf(":"));
    c = c.substring(c.indexOf(":") + 1);
    Keybinds.Right = c.substring(0, c.indexOf(":"));
    c = c.substring(c.indexOf(":") + 1);
    Keybinds.Left = c.substring(0, c.indexOf(":"));
    c = c.substring(c.indexOf(":") + 1);
    Keybinds.Down = c.substring(0, c.indexOf(":"));
    c = c.substring(c.indexOf(":") + 1);
    Keybinds.Dash = c.substring(0, c.indexOf(":"));
    c = c.substring(c.indexOf(":") + 1);
    Keybinds.PlayerFast = c.substring(0, c.indexOf(":"));
    c = c.substring(c.indexOf(":") + 1);
    Keybinds.PlayerSlow = c;
  }
}
name = "Stats=";
decodedCookie = decodeURIComponent(document.cookie);
ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) === 0) {
    c = c.substring(name.length);
    PData.S.TotalDeaths = parseInt(c.substring(0, c.indexOf("-")), 10);
    c = c.substring(c.indexOf("-") + 1);
    PData.S.Jumps = parseInt(c.substring(0, c.indexOf("-")), 10);
    c = c.substring(c.indexOf("-") + 1);
    PData.S.LevelsBeaten = parseInt(c.substring(0, c.indexOf("-")), 10);
    c = c.substring(c.indexOf("-") + 1);
    PData.S.BestNormalTime = c.substring(0, c.indexOf("-"));
    c = c.substring(c.indexOf("-") + 1);
    PData.S.BestFrames = parseInt(c.substring(0, c.indexOf("-")), 10);
    c = c.substring(c.indexOf("-") + 1);
    PData.S.TimesDashed = parseInt(c.substring(0, c.indexOf("-")), 10);
    c = c.substring(c.indexOf("-") + 1);
    PData.S.PortalsTeleported = parseInt(c.substring(0, c.indexOf("-")), 10);
    c = c.substring(c.indexOf("-") + 1);
    PData.S.BeatLevelFast = c === "true";
  }
}

Buttons.New({
  X: 260,
  Y: 200,
  W: 200,
  H: 100,
  MenuShow: [0],
  MenuGoal: 4,
  Text: "Play",
  FontSize: 70,
  Fun: function () {},
  Disp: function () {}
});
Buttons.New({
  X: 560,
  Y: 467,
  W: 150,
  H: 75,
  MenuShow: [0],
  MenuGoal: 2,
  Text: "Settings",
  FontSize: 45,
  Fun: function () {},
  Disp: function () {}
});
let Click = false;
Buttons.New({
  X: 260,
  Y: 310,
  W: 200,
  H: 100,
  MenuShow: [0],
  MenuGoal: -2,
  Text: "Custom",
  FontSize: 55,
  Fun: function () {
    PData.Mode = "Custom";
    Click = false;
  },
  Disp: function () {}
});
Buttons.New({
  X: 185,
  Y: 467,
  W: 150,
  H: 75,
  MenuShow: [2],
  MenuGoal: 2,
  Text: "Wipe Save",
  FontSize: 38,
  BorderColor: "#000",
  TextColor: "#000",
  Fun: function () {
    if (this.BorderColor === "#000") {
      this.BorderColor = "#f00";
      this.TextColor = "#f00";
    } else {
      let d = new Date();
      d.setTime(d.getTime() - 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = "MaxLev=-;" + expires + ";path=/";
      document.cookie = "Stats=-;" + expires + ";path=/";
      PData.MaxLevel = 1;
      PData.S.TotalDeaths = 0;
      PData.S.Jumps = 0;
      PData.S.LevelsBeaten = 0;
      PData.S.BestNormalTime = "N/A";
      PData.S.BestFrames = 0;
      PData.S.TimesDashed = 0;
      PData.S.PortalsTeleported = 0;
      PData.S.BeatLevelFast = 0;
      this.BorderColor = "#000";
      this.TextColor = "#000";
      Buttons.MenuVar = 0;
    }
  },
  Disp: function () {}
});
Buttons.New({
  X: 10,
  Y: 13,
  W: 50,
  H: 50,
  MenuShow: [1, 2],
  MenuGoal: 0,
  Text: "X",
  FontSize: 40,
  Fun: function () {},
  Disp: function () {}
});
Buttons.New({
  X: 10,
  Y: 85,
  W: 150,
  H: 75,
  MenuShow: [10527],
  MenuGoal: 2,
  Text: "Keybinds",
  FontSize: 38,
  Fun: function () {},
  Disp: function () {}
});
Buttons.New({
  X: 610,
  Y: 85,
  W: 100,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Up",
  FontSize: 40,
  Fun: function () {
    let Listen = true;
    Keybinds.Jump = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.Jump = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 610,
  Y: 153,
  W: 100,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Right",
  FontSize: 40,
  Fun: function () {
    let Listen = true;
    Keybinds.Right = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.Right = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 610,
  Y: 221,
  W: 100,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Left",
  FontSize: 40,
  Fun: function () {
    let Listen = true;
    Keybinds.Left = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.Left = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 610,
  Y: 289,
  W: 100,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Down",
  FontSize: 40,
  Fun: function () {
    let Listen = true;
    Keybinds.Down = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.Down = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 610,
  Y: 357,
  W: 100,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Dash",
  FontSize: 40,
  Fun: function () {
    let Listen = true;
    Keybinds.Dash = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.Dash = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 560,
  Y: 425,
  W: 150,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Player Fast",
  FontSize: 30,
  Fun: function () {
    let Listen = true;
    Keybinds.PlayerFast = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.PlayerFast = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 560,
  Y: 493,
  W: 150,
  H: 50,
  MenuShow: [2, 3],
  MenuGoal: 3,
  Text: "Player Slow",
  FontSize: 30,
  Fun: function () {
    let Listen = true;
    Keybinds.PlayerSlow = " ";
    document.addEventListener("keydown", (event) => {
      if (Listen) {
        Keybinds.PlayerSlow = event.key;
        Buttons.MenuVar = 2;
        Listen = false;
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 260,
  Y: 140,
  W: 200,
  H: 100,
  MenuShow: [4],
  MenuGoal: -1,
  Text: "Tutorial",
  FontSize: 60,
  Fun: function () {
    PData.Mode = "Tutorial";
    PData.Level = 101;
    PData.StartLevel = 101;
    PData.RealTime = 0;
    PData.Replaying = false;
    PData.CurrentReplay = "";
    Level.LoadLevel(PData);
  },
  Disp: function () {}
});
Buttons.New({
  X: 260,
  Y: 250,
  W: 200,
  H: 100,
  MenuShow: [4],
  MenuGoal: 5,
  Text: "Normal",
  FontSize: 60,
  Fun: function () {
    PData.Mode = "Normal";
  },
  Disp: function () {}
});
Buttons.New({
  X: 260,
  Y: 360,
  W: 200,
  H: 100,
  MenuShow: [4],
  MenuGoal: 6,
  Text: "Custom",
  FontSize: 60,
  Fun: function () {
    let Listen = true;
    document.addEventListener("paste", (event) => {
      if (Listen && Buttons.MenuVar === 6) {
        let Paste = event.clipboardData.getData("text").trim();
        if (Paste.indexOf("@") < 0) {
          alert("Invalid level code :(");
        } else {
          PData.Code = Paste;
          PData.Mode = "Custom";
          PData.Level = -2;
          PData.StartLevel = -2;
          PData.Replaying = false;
          PData.CurrentReplay = "";
          Buttons.MenuVar = -1;
          PData.ReplayTime = 0;
          PData.RealTime = 0;
          PData.TotalTime = 0;
          Level.LoadLevel(PData);
          Listen = false;
        }
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 10,
  Y: 10,
  W: 90,
  H: 52,
  MenuShow: [-1],
  MenuGoal: -1,
  Text: "Reset",
  FontSize: 40,
  Fun: function () {
    if (!PData.Replaying) {
      PData.Attempts++;
      Level.LoadLevel(PData);
    }
  },
  Disp: function () {
    if (PData.Replaying) this.Text = "Replay";
    else this.Text = "Reset";
  }
});
Buttons.New({
  X: 658,
  Y: 10,
  W: 52,
  H: 52,
  MenuShow: [-2, 4, 5, 6, 7],
  MenuGoal: 0,
  Text: "X",
  FontSize: 40,
  Fun: function () {},
  Disp: function () {}
});
let Mouse = false;
document.addEventListener("mousedown", (event) => {
  Mouse = true;
  if (Buttons.MenuVar === -2) {
    let X = (event.offsetX / Canvas.width) * 720;
    let Y = (event.offsetY / Canvas.height) * 552;
    if (Y > 72 && Y < 552 && X < 720 && X > 1 && Click) {
      if (Holding < 16) {
        X = Math.floor((X - 1) / 24);
        Y = Math.floor((Y - 73) / 24);
        PData.CustomList[X + Y * 30] = Holding;
        for (let i = 600; i < PData.CustomList.length; i++) {
          let Block = Math.floor(PData.CustomList[i] / 10000) % 10000;
          if (Block === X * 100 + Y) {
            PData.CustomList.splice(i, 1);
            i = PData.CustomList.length;
          }
        }
      }
    }
    Click = true;
  }
});
document.addEventListener("mouseup", (event) => {
  Mouse = false;
});
document.addEventListener("mousemove", (event) => {
  if (Mouse && Buttons.MenuVar === -2) {
    let X = (event.offsetX / Canvas.width) * 720;
    let Y = (event.offsetY / Canvas.height) * 552;
    if (Y > 72 && Y < 552 && X < 720 && X > 1 && Click) {
      if (Holding < 16) {
        X = Math.floor((X - 1) / 24);
        Y = Math.floor((Y - 73) / 24);
        PData.CustomList[X + Y * 30] = Holding;
        for (let i = 600; i < PData.CustomList.length; i++) {
          let Block = Math.floor(PData.CustomList[i] / 10000) % 10000;
          if (Block === X * 100 + Y) {
            PData.CustomList.splice(i, 1);
            i = PData.CustomList.length;
          }
        }
      }
    }
    Click = true;
  }
});
let ResetColor = function () {
  for (let i = 18; i <= 35; i++) {
    Buttons.Buttons[i].BorderColor = "#000";
  }
};

Buttons.New({
  X: 3,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 1;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
  }
});
Buttons.New({
  X: 3,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 2;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 4);
  }
});
Buttons.New({
  X: 36,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 3;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#f00";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#f80";
    Ctx.fillRect(this.X + 6, this.Y + 6, 8, 8);
    Ctx.fillRect(this.X + 8, this.Y + 18, 8, 8);
    Ctx.fillRect(this.X + 18, this.Y + 10, 8, 8);
    Ctx.fillStyle = "#ff0";
    Ctx.fillRect(this.X + 8, this.Y + 8, 4, 4);
    Ctx.fillRect(this.X + 10, this.Y + 20, 4, 4);
    Ctx.fillRect(this.X + 20, this.Y + 12, 4, 4);
  }
});
Buttons.New({
  X: 69,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 4;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#f00";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#c11";
    Ctx.fillRect(this.X + 10, this.Y + 10, 12, 12);
  }
});
Buttons.New({
  X: 102,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 5;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#11c";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#66f";
    Ctx.fillRect(this.X + 10, this.Y + 10, 12, 12);
  }
});
Buttons.New({
  X: 36,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 6;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#0ff";
    Ctx.fillRect(this.X + 6, this.Y + 6, 20, 20);
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 12, this.Y + 16, 8, 8);
    for (let i = 0; i < 8; i++)
      Ctx.fillRect(this.X + 15 - i, this.Y + 8 + i, 2 * (i + 1), 2);
  }
});
Buttons.New({
  X: 69,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 7;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#0ff";
    Ctx.fillRect(this.X + 6, this.Y + 6, 20, 20);
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 16, this.Y + 12, 8, 8);
    for (let i = 0; i < 8; i++)
      Ctx.fillRect(this.X + 15 - i, this.Y + 8 + i, 2, 2 * (8 - i));
  }
});
Buttons.New({
  X: 102,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 8;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#0ff";
    Ctx.fillRect(this.X + 6, this.Y + 6, 20, 20);
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 8, this.Y + 12, 8, 8);
    for (let i = 0; i < 8; i++)
      Ctx.fillRect(this.X + 15 + i, this.Y + 8 + i, 2, 2 * (8 - i));
  }
});

Buttons.New({
  X: 235,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    ResetColor();
    this.BorderColor = "#f00";
    let Listen = 0;
    Holding = 0;
    var X = 0;
    var Y = 0;
    document.addEventListener("click", (event) => {
      if (Listen === 1) {
        let X2 = (event.offsetX / Canvas.width) * 720;
        let Y2 = (event.offsetY / Canvas.height) * 552;
        if (Y2 > 72 && Y2 < 552 && X2 < 720 && X2 > 0) {
          X2 = Math.floor((X2 - 1) / 24);
          Y2 = Math.floor((Y2 - 73) / 24);
          PData.CustomList[X + Y * 30] = 10000 + X2 * 100 + Y2;
          this.BorderColor = "#000";
          Listen = 2;
        }
      }
      if (Listen === 0) {
        X = (event.offsetX / Canvas.width) * 720;
        Y = (event.offsetY / Canvas.height) * 552;
        if (Y > 72 && Y < 552 && X < 720 && X > 0) {
          X = Math.floor((X - 1) / 24);
          Y = Math.floor((Y - 73) / 24);
          PData.CustomList[X + Y * 30] = 10000 + X * 100 + Y;
          this.BorderColor = "#08f";
          Holding = 10000;
          Listen = 1;
        }
      }
    });
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.clearRect(this.X + 6, this.Y + 6, 20, 20);
    Ctx.fillRect(this.X + 8, this.Y + 8, 16, 16);
    Ctx.clearRect(this.X + 10, this.Y + 10, 12, 12);
    Ctx.fillRect(this.X + 12, this.Y + 12, 8, 8);
    Ctx.clearRect(this.X + 14, this.Y + 14, 4, 4);
  }
});
Buttons.New({
  X: 235,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    ResetColor();
    this.BorderColor = "#f00";
    let Listen = 0;
    Holding = 0;
    var X = 0;
    var Y = 0;
    document.addEventListener("click", (event) => {
      if (Listen === 1) {
        let X2 = (event.offsetX / Canvas.width) * 720;
        let Y2 = (event.offsetY / Canvas.height) * 552;
        if (Y2 > 72 && Y2 < 552 && X2 < 720 && X2 > 0) {
          X2 = Math.floor((X2 - 1) / 24);
          Y2 = Math.floor((Y2 - 73) / 24);
          PData.CustomList[X + Y * 30] = 20000 + X2 * 100 + Y2;
          this.BorderColor = "#000";
          Listen = 2;
        }
      }
      if (Listen === 0) {
        X = (event.offsetX / Canvas.width) * 720;
        Y = (event.offsetY / Canvas.height) * 552;
        if (Y > 72 && Y < 552 && X < 720 && X > 0) {
          X = Math.floor((X - 1) / 24);
          Y = Math.floor((Y - 73) / 24);
          PData.CustomList[X + Y * 30] = 20000 + X * 100 + Y;
          this.BorderColor = "#08f";
          Holding = 10000;
          Listen = 1;
        }
      }
    });
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.clearRect(this.X + 6, this.Y + 6, 20, 20);
    Ctx.fillRect(this.X + 8, this.Y + 8, 16, 16);
    Ctx.clearRect(this.X + 10, this.Y + 10, 12, 12);
    Ctx.fillRect(this.X + 12, this.Y + 12, 8, 8);
    Ctx.clearRect(this.X + 14, this.Y + 14, 4, 4);
    Ctx.clearRect(this.X + 11, this.Y + 7, 10, 10);
    Ctx.clearRect(this.X + 13, this.Y + 16, 6, 10);
    Ctx.fillRect(this.X + 12, this.Y + 8, 8, 8);
    Ctx.fillRect(this.X + 14, this.Y + 16, 4, 8);
  }
});
Buttons.New({
  X: 268,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 9;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#cc0";
    Ctx.fillRect(this.X + 4, this.Y + 10, 12, 12);
    Ctx.fillRect(this.X + 16, this.Y + 14, 12, 4);
    Ctx.fillRect(this.X + 19, this.Y + 18, 3, 4);
    Ctx.fillRect(this.X + 25, this.Y + 18, 3, 4);
    Ctx.fillStyle = "#f00";
    Ctx.fillRect(this.X + 7, this.Y + 13, 6, 6);
  }
});
Buttons.New({
  X: 268,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 0;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.clearRect(this.X + 6, this.Y + 6, 20, 20);
    for (let i = 4; i < 22; i += 7) {
      Ctx.clearRect(this.X + 4 + i, this.Y + 4, 2, 24);
      Ctx.clearRect(this.X + 4, this.Y + 4 + i, 24, 2);
    }
  }
});
Buttons.New({
  X: 135,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 10;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 6, this.Y + 6, 13, 13);
    Ctx.fillRect(this.X + 13, this.Y + 13, 13, 13);
    Ctx.fillStyle = "#0c0";
    Ctx.fillRect(this.X + 8, this.Y + 8, 9, 9);
    Ctx.clearRect(this.X + 10, this.Y + 10, 5, 5);
    Ctx.fillRect(this.X + 12, this.Y + 12, 4, 4);
    Ctx.fillStyle = "#f00";
    Ctx.fillRect(this.X + 15, this.Y + 15, 9, 9);
    Ctx.clearRect(this.X + 17, this.Y + 17, 5, 5);
    Ctx.fillRect(this.X + 16, this.Y + 16, 4, 4);
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 13, this.Y + 13, 6, 6);
  }
});
Buttons.New({
  X: 135,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 11;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 5, this.Y + 15, 22, 2);
    for (let i = 1; i <= 5; i++) {
      Ctx.fillRect(this.X + 16 - 2 * i, this.Y + 3 + 2 * i, 4 * i, 3);
      Ctx.fillRect(this.X + 16 - 2 * i, this.Y + 26 - 2 * i, 4 * i, 3);
    }
    for (let i = 1; i <= 4; i++) {
      Ctx.fillStyle = "#f00";
      Ctx.fillRect(
        this.X + 16 - 2 * (i - 1),
        this.Y + 25 - 2 * i,
        4 * (i - 1),
        3
      );
      Ctx.fillStyle = "#0c0";
      Ctx.fillRect(
        this.X + 16 - 2 * (i - 1),
        this.Y + 4 + 2 * i,
        4 * (i - 1),
        3
      );
    }
  }
});

Buttons.New({
  X: 168,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 12;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#04f";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#08f";
    Ctx.fillRect(this.X + 8, this.Y + 14, 16, 4);
  }
});
Buttons.New({
  X: 168,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 13;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#000";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#4ff";
    Ctx.fillRect(this.X + 6, this.Y + 6, 20, 20);
    Ctx.clearRect(this.X + 12, this.Y + 12, 8, 8);
    Ctx.clearRect(this.X + 14, this.Y + 9, 4, 14);
    Ctx.clearRect(this.X + 9, this.Y + 14, 14, 4);
  }
});
Buttons.New({
  X: 201,
  Y: 3,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 14;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#fb0";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#ff0";
    Ctx.fillRect(this.X + 8, this.Y + 8, 16, 16);
  }
});
Buttons.New({
  X: 201,
  Y: 36,
  W: 32,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Fun: function () {
    Holding = 15;
    ResetColor();
    this.BorderColor = "#f00";
  },
  Disp: function (Ctx) {
    Ctx.fillStyle = "#840";
    Ctx.fillRect(this.X + 4, this.Y + 4, 24, 24);
    Ctx.fillStyle = "#c80";
    Ctx.fillRect(this.X + 7, this.Y + 7, 18, 18);
  }
});
Buttons.New({
  X: 301,
  Y: 3,
  W: 90,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -1,
  Text: "Playtest",
  FontSize: 25,
  Fun: function () {
    PData.Mode = "Playtest";
    PData.Level = -2;
    PData.StartLevel = -2;
    PData.Code = Level.Encode(PData.CustomList);
    PData.RealTime = 0;
    PData.Attempts = 1;
    PData.Replaying = false;
    PData.CurrentReplay = "";
    Level.LoadLevel(PData);
  },
  Disp: function () {}
});
Buttons.New({
  X: 658,
  Y: 10,
  W: 52,
  H: 52,
  MenuShow: [-1],
  MenuGoal: 0,
  Text: "X",
  FontSize: 40,
  Fun: function () {
    if (PData.Mode === "Playtest") Buttons.MenuVar = -2;
  },
  Disp: function () {}
});
for (let i = 0; i < 15; i++) {
  Buttons.New({
    X: 60 + 128 * (i % 5),
    Y: 82 + 120 * Math.floor(i / 5),
    W: 88,
    H: 88,
    MenuShow: [5],
    MenuGoal: 5,
    Text: i + 1,
    FontSize: 40,
    Fun: function () {
      if (PData.MaxLevel >= this.Text) {
        PData.Mode = "Normal";
        PData.RealTime = 0;
        PData.TotalTime = 0;
        PData.Level = this.Text;
        PData.StartLevel = this.Text;
        PData.Replaying = false;
        PData.CurrentReplay = "";
        Buttons.MenuVar = -1;
        Level.LoadLevel(PData);
      }
    },
    Disp: function (Ctx) {
      if (PData.MaxLevel < this.Text) {
        Ctx.fillStyle = "#888";
        Ctx.fillRect(this.X + 4, this.Y + 4, 80, 80);
        Ctx.textAlign = "center";
        Ctx.font = "40px sans-serif";
        Ctx.fillStyle = "#000";
        Ctx.fillText(this.Text, this.X + 44, this.Y + 51, 80);
        Ctx.font = "20px sans-serif";
        Ctx.fillText("LOCKED", this.X + 44, this.Y + 80, 76);
      }
    }
  });
}
Buttons.New({
  X: 40,
  Y: 320,
  W: 300,
  H: 100,
  MenuShow: [-4, -3],
  MenuGoal: -1,
  Text: "Play again",
  FontSize: 60,
  Fun: function () {
    PData.RealTime = 0;
    PData.ReplayTime = 0;
    PData.Time = 0;
    PData.Attempts = 1;
    PData.Level = PData.StartLevel;
    PData.CodeIndex = 0;
    if (!PData.Replaying) PData.CurrentReplay = "";
    Level.LoadLevel(PData);
  },
  Disp: function () {}
});
Buttons.New({
  X: 380,
  Y: 320,
  W: 300,
  H: 100,
  MenuShow: [-4, -3],
  MenuGoal: 0,
  Text: "Main Menu",
  FontSize: 60,
  Fun: function () {
    if (PData.Mode === "Playtest") Buttons.MenuVar = -2;
  },
  Disp: function () {}
});
Buttons.New({
  X: 210,
  Y: 430,
  W: 300,
  H: 100,
  MenuShow: [-3],
  MenuGoal: -3,
  Text: "Save Replay",
  FontSize: 60,
  Fun: function () {
    let Code = PData.StartLevel + ";";
    if (Level.MainCode(PData.StartLevel) === -1) Code += PData.Code;
    Code += ";" + PData.CurrentReplay;
    Code = Level.Encode2(Code);
    let HTML =
      '<h2 style="user-select: none;">Copy the code below (CTRL+A then CTRL+C):</h2>';
    HTML += '<p style="word-wrap: break-word;">' + Code + "</p>";
    let tab = window.open("about:blank", "_blank");
    tab.document.write(HTML);
    tab.document.close();
  },
  Disp: function () {}
});
Buttons.New({
  X: 301,
  Y: 36,
  W: 90,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Text: "Export",
  FontSize: 25,
  Fun: function () {
    let HTML =
      '<h2 style="user-select: none;">Copy the code below (CTRL+A then CTRL+C):</h2>';
    HTML +=
      '<p style="word-wrap: break-word;">' +
      Level.Encode(PData.CustomList) +
      "</p>";
    HTML +=
      '<p style="user-select: none;">\nYou can also create multi-level codes by pasting one code to the end of another!</p>';
    let tab = window.open("about:blank", "_blank");
    tab.document.write(HTML);
    tab.document.close();
  },
  Disp: function () {}
});
Buttons.New({
  X: 392,
  Y: 36,
  W: 90,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Text: "Import",
  FontSize: 25,
  Fun: function () {
    alert("Paste level code from clipboard to edit it!");
    let Listen = true;
    document.addEventListener("paste", (event) => {
      if (Listen && Buttons.MenuVar === -2) {
        let Paste = event.clipboardData.getData("text").trim();
        if (Paste.indexOf("@") < 0) {
          alert("Invalid level code :(");
        } else {
          PData.CustomList = Level.Decode(Paste);
          Listen = false;
        }
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 392,
  Y: 3,
  W: 90,
  H: 32,
  MenuShow: [-2],
  MenuGoal: -2,
  Text: "Clear",
  FontSize: 25,
  Confirmation: false,
  Fun: function () {
    if (this.Confirmation) {
      for (let i = 0; i < 600; i++) PData.CustomList[i] = 0;
      this.Confirmation = false;
      this.BorderColor = "#000";
      this.TextColor = "#000";
    } else {
      this.Confirmation = true;
      this.BorderColor = "#f00";
      this.TextColor = "#f00";
    }
  },
  Disp: function () {}
});
Buttons.New({
  X: 260,
  Y: 420,
  W: 200,
  H: 100,
  MenuShow: [0],
  MenuGoal: 7,
  Text: "Replays",
  FontSize: 55,
  Fun: function () {
    let Listen = true;
    document.addEventListener("paste", (event) => {
      let Paste = event.clipboardData.getData("text").trim();
      if (Listen && Buttons.MenuVar === 7) {
        if (
          Paste.indexOf(";") < 0 ||
          Paste.substring(Paste.indexOf(";") + 1).indexOf(";") < 0
        ) {
          alert("Invalid replay code :(");
        } else {
          PData.CurrentReplay = Paste;
          Buttons.MenuVar = -1;
          PData.Mode = "Replay";
          let index = PData.CurrentReplay.indexOf(";");
          PData.Level = parseInt(PData.CurrentReplay.substring(0, index));
          PData.StartLevel = PData.Level;
          PData.CurrentReplay = PData.CurrentReplay.substring(index + 1);
          index = PData.CurrentReplay.indexOf(";");
          if (Level.MainCode(PData.Level) === -1)
            PData.Code = Level.Decode2(PData.CurrentReplay.substring(0, index));
          PData.CurrentReplay = PData.CurrentReplay.substring(index + 1);
          PData.CurrentReplay = Level.Decode2(PData.CurrentReplay);
          PData.Replaying = true;
          PData.ReplayTime = 0;
          PData.RealTime = 0;
          PData.Time = 0;
          PData.Attempts = 1;
          PData.CodeIndex = 0;
          Level.LoadLevel(PData);
          Listen = false;
        }
      }
    });
  },
  Disp: function () {}
});
Buttons.New({
  X: 446,
  Y: 11,
  W: 100,
  H: 50,
  MenuShow: [-1],
  MenuGoal: -1,
  Text: "Pause",
  FontSize: 35,
  Temp: 1,
  Fun: function () {
    if (this.Text === "Pause") {
      this.Temp = PData.TimeSpeed;
      PData.TimeSpeed = 0;
      this.Text = "Play";
    } else if (this.Text === "Play") {
      PData.TimeSpeed = this.Temp;
      this.Text = "Pause";
    }
  },
  Disp: function () {
    if (this.Text === "Play" && !PData.Replaying) {
      Ctx.globalAlpha = 0.5;
      Ctx.fillStyle = "#000";
      Ctx.fillRect(0, 72, 720, 720);
      Ctx.globalAlpha = 1;
    }
  }
});
Buttons.New({
  X: 551,
  Y: 11,
  W: 50,
  H: 50,
  MenuShow: [-1],
  MenuGoal: -1,
  Text: ">",
  FontSize: 35,
  Temp: 1,
  Opacity: 1,
  Fun: function () {
    if (PData.TimeSpeed === 0 && PData.Replaying) {
      PData.TimeSpeed = 1;
      Game.Update(Fullscreen, Ctx, Buttons, Menu, Keybinds, PData, Level);
      PData.TimeSpeed = 0;
    }
  },
  Disp: function () {
    if (PData.TimeSpeed === 0 && PData.Replaying) this.Opacity = 1;
    else this.Opacity = 0;
  }
});
Buttons.New({
  X: 205,
  Y: 455,
  W: 50,
  H: 50,
  MenuShow: [5],
  MenuGoal: 5,
  Text: "",
  FontSize: 35,
  Temp: 1,
  Opacity: 1,
  Fun: function () {
    PData.SingSeg = !PData.SingSeg;
  },
  Disp: function () {
    if (PData.SingSeg) {
      Ctx.lineWidth = 5;
      Ctx.strokeStyle = "#000";
      Ctx.moveTo(this.X + 8, this.Y + 28);
      Ctx.lineTo(this.X + 25, this.Y + 42);
      Ctx.lineTo(this.X + 42, this.Y + 8);
      Ctx.stroke();
      Ctx.lineWidth = 1;
    }
  }
});
