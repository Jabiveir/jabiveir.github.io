import Game from "./game";

export default class InputHandler {
	constructor(Player, Buttons, Ctx) {
		let MenuVar = 1;
		document.addEventListener("keydown", (event) => {
			switch (event.keyCode) {
				case 39:
					Player.PData.MovingRight = true;
					break;
				case 37:
					Player.PData.MovingLeft = true;
					break;
				case 38:
					Player.PData.Jumping = true;
					break;
				default:
			}
		});
		document.addEventListener("keyup", (event) => {
			switch (event.keyCode) {
				case 39:
					Player.PData.MovingRight = false;
					break;
				case 37:
					Player.PData.MovingLeft = false;
					break;
				case 38:
					Player.PData.Jumping = false;
					break;
				default:
			}
		});
		document.addEventListener("click", (event) => {
			Buttons.Data.ClickX = event.clientX;
			Buttons.Data.ClickY = event.clientY;
			if (MenuVar === 1) {
				if (
					Buttons.Data.ClickX > 280 &&
					Buttons.Data.ClickX < 460 &&
					Buttons.Data.ClickY > 209 &&
					Buttons.Data.ClickY < 289
				) {
					MenuVar = 2;
					new Game(Ctx, Player);
				}
				if (
					Buttons.Data.ClickX > 280 &&
					Buttons.Data.ClickX < 460 &&
					Buttons.Data.ClickY > 389 &&
					Buttons.Data.ClickY < 469
				) {
					Player.PData.Level = 0;
					Ctx.fillStyle = "#000";
					Ctx.font = "30px sans-serif ";
					Ctx.clearRect(224, 310, 274, 70);
					Ctx.fillText("Save wiped! Refresh before", 224, 340, 274);
					Ctx.fillText("playing to undo", 280, 370, 160);
				}
			}
		});
	}
};
