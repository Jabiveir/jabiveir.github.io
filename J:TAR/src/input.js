import Game from "./game.js";

export default class InputHandler {
  constructor(Player, Ctx, Canvas, MenuVar, Fullscreen, Buttons, Mobile) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 38:
          Player.PData.Jumping = true;
          break;
        case 37:
          Player.PData.MovingLeft = true;
          break;
        case 39:
          Player.PData.MovingRight = true;
          break;
        case 87:
          Player.PData.Jumping = true;
          break;
        case 65:
          Player.PData.MovingLeft = true;
          break;
        case 68:
          Player.PData.MovingRight = true;
          break;
        default:
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 38:
          Player.PData.Jumping = false;
          break;
        case 37:
          Player.PData.MovingLeft = false;
          break;
        case 39:
          Player.PData.MovingRight = false;
          break;
        case 87:
          Player.PData.Jumping = false;
          break;
        case 65:
          Player.PData.MovingLeft = false;
          break;
        case 68:
          Player.PData.MovingRight = false;
          break;
        default:
      }
    });
    document.addEventListener("click", (event) => {
      if (MenuVar === 1) {
        let X = parseInt(
          Canvas.style.left.substring(0, Canvas.style.left.length - 2)
        );
        let Y = parseInt(
          Canvas.style.top.substring(0, Canvas.style.top.length - 2)
        );
        if (Mobile !== "Vertical") {
          X = ((event.clientX - X) / Canvas.width) * 720;
          Y = ((event.clientY - Y) / Canvas.height) * 480;
        } else {
          let Temp = Y;
          Y = ((event.clientX - X) / Canvas.width) * 480;
          X = 720 - ((event.clientY - Temp) / Canvas.height) * 720;
        }
        if (X > 270 && X < 450 && Y > 200 && Y < 280) {
          MenuVar = 2;
          new Game(Ctx, Player);
        } else if (X > 270 && X < 450 && Y > 380 && Y < 460) {
          Player.PData.Level = 0;
          Ctx.fillStyle = "#000";
          Ctx.font = "30px sans-serif ";
          Ctx.clearRect(224, 310, 274, 70);
          Ctx.fillText("Save wiped! Refresh before", 224, 340, 274);
          Ctx.fillText("playing to undo", 280, 370, 160);
        } else if (X > 515 && X < 710 && Y > 390 && Y < 470) {
          Ctx.clearRect(535, 410, 40, 40);
          if (Mobile === "Off") {
            Ctx.fillStyle = "#000";
            Ctx.fillRect(535, 410, 40, 40);
          } else {
            Ctx.fillStyle = "#fff";
            Ctx.fillRect(535, 410, 40, 40);
          }
          if (Mobile === "Off") {
            if (window.innerHeight >= ((window.innerWidth * 3) / 2) * 1.2)
              Mobile = "Vertical";
            else if (window.innerWidth >= ((window.innerHeight * 3) / 2) * 1.2)
              Mobile = "Horizontal";
            else Mobile = "Default";
          } else Mobile = "Off";
          Player.PData.Mobile = Mobile;
          Fullscreen.Rotate(Canvas, Ctx, Mobile, Buttons);
        }
      }
    });
    document.addEventListener("touchstart", (event) => {
      if (Mobile !== "Off" && MenuVar === 2) {
        event.preventDefault();
        let A = parseInt(
          Canvas.style.left.substring(0, Canvas.style.left.length - 2)
        );
        let B = parseInt(
          Canvas.style.top.substring(0, Canvas.style.top.length - 2)
        );
        if (Mobile !== "Vertical") {
          for (let i = 0; i < event.touches.length; i++) {
            let X = event.touches[i].pageX;
            let Y = event.touches[i].pageY;
            if (X > A && X < A + Canvas.width && Y > B && Y < B + Canvas.height)
              Player.PData.Jumping = true;
            else if (X < window.innerWidth / 2) Player.PData.MovingLeft = true;
            else Player.PData.MovingRight = true;
          }
        } else {
          for (let i = 0; i < event.touches.length; i++) {
            let Y = event.touches[i].pageX;
            let X = window.innerHeight - event.touches[i].pageY;
            if (X > B && X < B + Canvas.height && Y > A && Y < A + Canvas.width)
              Player.PData.Jumping = true;
            else if (X < window.innerHeight / 2) Player.PData.MovingLeft = true;
            else Player.PData.MovingRight = true;
          }
        }
      }
    });
    document.addEventListener("touchend", (event) => {
      if (Mobile !== "Off" && MenuVar === 2) {
        event.preventDefault();
        let A = parseInt(
          Canvas.style.left.substring(0, Canvas.style.left.length - 2)
        );
        let B = parseInt(
          Canvas.style.top.substring(0, Canvas.style.top.length - 2)
        );
        if (Mobile !== "Vertical") {
          for (let i = 0; i < event.changedTouches.length; i++) {
            let X = event.changedTouches[i].pageX;
            let Y = event.changedTouches[i].pageY;
            if (X > A && X < A + Canvas.width && Y > B && Y < B + Canvas.height)
              Player.PData.Jumping = false;
            else if (X < window.innerWidth / 2) Player.PData.MovingLeft = false;
            else Player.PData.MovingRight = false;
          }
        } else {
          for (let i = 0; i < event.changedTouches.length; i++) {
            let Y = event.changedTouches[i].pageX;
            let X = window.innerHeight - event.changedTouches[i].pageY;
            if (X > B && X < B + Canvas.height && Y > A && Y < A + Canvas.width)
              Player.PData.Jumping = false;
            else if (X < window.innerHeight / 2)
              Player.PData.MovingLeft = false;
            else Player.PData.MovingRight = false;
          }
        }
      }
    });
    document.addEventListener(
      "touchmove",
      (event) => {
        event.preventDefault();
      },
      { passive: false }
    );
  }
};
