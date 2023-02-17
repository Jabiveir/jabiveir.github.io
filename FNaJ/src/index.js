import buttons from "./button.js";
import Input from "./input.js";
let Buttons = new buttons();

let Canvas = document.getElementById("GameScreen");
let Ctx = Canvas.getContext("2d");

var Computer = document.createElement("img");
Computer.src = "src/images/Computer.png";
var Room = document.createElement("img");
Room.src = "src/images/Room.png";
var RoomEyes = document.createElement("img");
RoomEyes.src = "src/images/RoomEyes.png";
var RoomFlash = document.createElement("img");
RoomFlash.src = "src/images/RoomFlash.png";
var RoomHallucinations = document.createElement("img");
RoomHallucinations.src = "src/images/RoomHallucinations.png";
var RoomJabi1 = document.createElement("img");
RoomJabi1.src = "src/images/RoomJabi1.png";
var RoomJabi2 = document.createElement("img");
RoomJabi2.src = "src/images/RoomJabi2.png";
var RoomDeath1 = document.createElement("img");
RoomDeath1.src = "src/images/RoomDeath1.png";
var RoomDeath2 = document.createElement("img");
RoomDeath2.src = "src/images/RoomDeath2.png";
var RoomDeath3 = document.createElement("img");
RoomDeath3.src = "src/images/RoomDeath3.png";
var Brown1 = document.createElement("img");
Brown1.src = "src/images/computer/Brown1.png";
var Brown2 = document.createElement("img");
Brown2.src = "src/images/computer/Brown2.png";
var Brown3 = document.createElement("img");
Brown3.src = "src/images/computer/Brown3.png";
var Brown4 = document.createElement("img");
Brown4.src = "src/images/computer/Brown4.png";
var Grey1 = document.createElement("img");
Grey1.src = "src/images/computer/Grey1.png";
var Grey2 = document.createElement("img");
Grey2.src = "src/images/computer/Grey2.png";
var Grey3 = document.createElement("img");
Grey3.src = "src/images/computer/Grey3.png";
var Grey4 = document.createElement("img");
Grey4.src = "src/images/computer/Grey4.png";
var Orange1 = document.createElement("img");
Orange1.src = "src/images/computer/Orange1.png";
var Orange2 = document.createElement("img");
Orange2.src = "src/images/computer/Orange2.png";
var Orange3 = document.createElement("img");
Orange3.src = "src/images/computer/Orange3.png";
var Orange4 = document.createElement("img");
Orange4.src = "src/images/computer/Orange4.png";
var White1 = document.createElement("img");
White1.src = "src/images/computer/White1.png";
var White2 = document.createElement("img");
White2.src = "src/images/computer/White2.png";
var White3 = document.createElement("img");
White3.src = "src/images/computer/White3.png";
var White4 = document.createElement("img");
White4.src = "src/images/computer/White4.png";

let Images = {
  Computer,
  Room,
  RoomEyes,
  RoomFlash,
  RoomHallucinations,
  RoomJabi1,
  RoomJabi2,
  RoomDeath1,
  RoomDeath2,
  RoomDeath3,
  CompAnims: [
    [Brown1, Brown2, Brown3, Brown4],
    [Grey1, Grey2, Grey3, Grey4],
    [Orange1, Orange2, Orange3, Orange4],
    [White1, White2, White3, White4]
  ]
};

let GameData = {
  Playing: false,
  MenuVar: 1,
  Night: 1,
  Time: 300,
  Waiting: true,
  Status: "AliveRoom",
  PressedType: "",
  Sprites: {
    Door: "Room",
    Closet: "Room",
    Window: "Room"
  },
  JabiTimer: {
    Door: -1,
    Closet: -1,
    Window: -1
  },
  AnimationTime: 5,
  CompAnim: 0,
  FlashesLeft: 90,
  Fear: 0,
  FearFactor: 1,
  JabiDiff: 0,
  VirusDiff: 0,
  ButtonsClicked: 0,
  VirusSolved: false,
  DeathReason: "",
  Volume: 50,
  Blind: false,
  DoubleJabi: 1,
  DoubleVirus: 2,
  NoFrontalLobe: false,
  BackupGenerator: false,
  FastNights: 1,
  Endless: false,
  CustomNight: false,
  EndTime: 0
};

var name = "Night=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) === 0) {
    GameData.Night = parseInt(c.substring(name.length, c.length), 10);
  }
}
name = "Settings=";
decodedCookie = decodeURIComponent(document.cookie);
ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) === 0) {
    c = c.substring(name.length);
    GameData.Volume = parseInt(c.substring(0, 7), 2);
    GameData.NoFrontalLobe = !!parseInt(c.substring(7, 8), 2);
    GameData.BackupGenerator = !!parseInt(c.substring(8, 9), 2);
    GameData.FastNights = parseInt(c.substring(9, 10), 2) + 1;
    GameData.Blind = !!parseInt(c.substring(10, 11), 2);
    GameData.DoubleJabi = parseInt(c.substring(11, 12), 2) + 1;
    GameData.DoubleVirus = 2 - parseInt(c.substring(12, 13), 2);
  }
}
name = "Custom=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(";");
for (let i = 0; i < ca.length; i++) {
  let c = ca[i];
  while (c.charAt(0) === " ") {
    c = c.substring(1);
  }
  if (c.indexOf(name) === 0) {
    GameData.FearFactor = parseInt(c.substring(0,2), 10) - 10;
    GameData.JabiDiff = parseInt(c.substring(2,4), 10) - 10;
    GameData.VirusDiff = parseInt(c.substring(4,6), 10) - 10;
  }
}

Buttons.NewButton(
  220,
  150,
  200,
  75,
  1,
  2,
  "Menu",
  "Night " + GameData.Night,
  50
);

Buttons.NewButton(480, 360, 150, 50, 1, 0, "Menu", "Wipe Save", 30);

Buttons.NewButton(10, 30, 125, 400, 4, 4, "Door");
Buttons.NewButton(268, 50, 212, 210, 4, 4, "Closet");
Buttons.NewButton(540, 90, 80, 180, 4, 4, "Window");
Buttons.NewButton(235, 265, 170, 105, 4, 5, "Computer");
Buttons.NewButton(0, 0, 640, 480, 5, 4, "Computer");
for (let i = 1; i <= 20; i++)
  Buttons.NewButton(0, 0, 50, 50, 0, 8, "Menu", i, 40);
Buttons.NewButton(0, 0, 640, 480, 8, 8, "VirusCountReset", "");

Buttons.NewButton(455, 420, 175, 50, 1, -1, "Menu", "How To Play", 30);
Buttons.NewButton(505, 300, 125, 50, 1, -2, "Menu", "Settings", 30);
Buttons.NewButton(200, 240, 240, 75, 1, -3, "Menu", "Custom Night", 38);
Buttons.NewButton(10, 10, 35, 35, -1, 1, "Menu", "X", 30);
Buttons.NewButton(10, 10, 35, 35, -2, 1, "Menu", "X", 30);
Buttons.NewButton(10, 10, 35, 35, -3, 1, "Menu", "X", 30);
if (!GameData.NoFrontalLobe)
  Buttons.NewButton(10, 160, 30, 30, -2, -2, "Menu", "", 30, "NoFrontalLobe");
else
  Buttons.NewButton(10, 160, 30, 30, -2, -2, "Active", "", 30, "NoFrontalLobe");
if (!GameData.BackupGenerator)
  Buttons.NewButton(10, 250, 30, 30, -2, -2, "Menu", "", 30, "BackupGenerator");
else
  Buttons.NewButton(
    10,
    250,
    30,
    30,
    -2,
    -2,
    "Active",
    "",
    30,
    "BackupGenerator"
  );
if (GameData.FastNights === 1)
  Buttons.NewButton(10, 340, 30, 30, -2, -2, "Menu", "", 30, "FastNights");
else Buttons.NewButton(10, 340, 30, 30, -2, -2, "Active", "", 30, "FastNights");
if (!GameData.Blind)
  Buttons.NewButton(332, 160, 30, 30, -2, -2, "Menu", "", 30, "Blind");
else Buttons.NewButton(332, 160, 30, 30, -2, -2, "Active", "", 30, "Blind");
if (GameData.DoubleJabi === 1)
  Buttons.NewButton(332, 250, 30, 30, -2, -2, "Menu", "", 30, "DoubleJabi");
else
  Buttons.NewButton(332, 250, 30, 30, -2, -2, "Active", "", 30, "DoubleJabi");
if (GameData.DoubleVirus === 2)
  Buttons.NewButton(332, 340, 30, 30, -2, -2, "Menu", "", 30, "DoubleVirus");
else
  Buttons.NewButton(332, 340, 30, 30, -2, -2, "Active", "", 30, "DoubleVirus");

Buttons.NewButton(430, 395, 200, 75, -3, 2, "Menu", "Night 7", 50, "CN");
Buttons.NewButton(10, 82, 50, 50, -3, -3, "Menu", "<", 50, "FearFactor");
Buttons.NewButton(140, 82, 50, 50, -3, -3, "Menu", ">", 50, "FearFactor");
Buttons.NewButton(10, 162, 50, 50, -3, -3, "Menu", "<", 50, "JabiDiff");
Buttons.NewButton(140, 162, 50, 50, -3, -3, "Menu", ">", 50, "JabiDiff");
Buttons.NewButton(10, 242, 50, 50, -3, -3, "Menu", "<", 50, "VirusDiff");
Buttons.NewButton(140, 242, 50, 50, -3, -3, "Menu", ">", 50, "VirusDiff");
Buttons.NewButton(10, 317, 50, 50, -3, -3, "Menu", "", 30, "Endless");

new Input(Ctx, Buttons, GameData, Images);
