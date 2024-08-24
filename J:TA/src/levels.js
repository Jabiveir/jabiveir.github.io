import LevelInit1 from "./levelinit1.js";
import LevelInit2 from "./levelinit2.js";

let Levels = [];
let Init1 = new LevelInit1();
let Init2 = new LevelInit2();
Init1.LevelSetup1(Levels);
Init2.LevelSetup2(Levels);

export default class levels {
	Collision(Ctx, Player, Level) {
		if (Player.PData.XPos < 0) {
			Player.PData.XPos = 0;
			Player.PData.XVel = 0;
		}
		if (Player.PData.XPos > 700) {
			Player.PData.XPos = 700;
			Player.PData.XVel = 0;
		}
		if (Player.PData.YPos < 0) {
			Player.PData.YPos = 0;
			Player.PData.YVel = -1;
		}
		if (Player.PData.YPos > 480 || isNaN(Player.PData.YPos))
			Player.Spawn(Ctx, Player.PData.Level);
		Player.PData.OnGround = false;
		Player.PData.PortalTemp2 = false;
		for (let i = 0; i < Levels[Level].length; i++) {
			Levels[Level][i].BlockDetect(Player, Levels[Level][i], Ctx);
			if (
				Levels[Level][i].BData.Type === "Block" &&
				Levels[Level][i].BData.Dir === "Down"
			) {
				Levels[Level][i].BData.YPos += 1 / 72;
				if (Levels[Level][i].BData.YPos >= 20) Levels[Level][i].BData.YPos = -1;
			}
			if (Levels[Level][i].BData.Temp) Player.PData.OnGround = true;
			if (Levels[Level][i].BData.PortalTemp) Player.PData.PortalTemp2 = true;
		}
		if (Player.PData.PortalTemp2 === false) {
			Player.PData.TouchingPortal = false;
		}
		if (Player.PData.Level === 18) {
			Ctx.fillStyle = "#000";
			Ctx.font = "60px sans-serif";
			Ctx.fillText("Game complete", 150, 100);
			Ctx.font = "50px sans-serif";
			Ctx.fillText("You did it! Yes!", 190, 160);
		}
	}

	DrawLevel(Ctx, Level, Player) {
		for (let i = 0; i < Levels[Level].length; i++)
			Levels[Level][i].DrawBlock(Ctx, Player);
		let d = new Date();
		d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
		document.cookie =
			"Level=" + Player.PData.Level + ";expires=" + d.toUTCString() + ";path=/";
	}

	ResetLevel(Ctx, Player) {
		for (let i = 0; i < Levels[Player.PData.Level].length; i++) {
			Levels[Player.PData.Level][i].BData.Type =
				Levels[Player.PData.Level][i].BData.Origin ||
				Levels[Player.PData.Level][i].BData.Type;
		}
	}
};
