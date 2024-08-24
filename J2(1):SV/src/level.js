import LevelInit from "./levelinit.js";

let Levels = [];
let Init = new LevelInit();
Init.LevelSetup(Levels);

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
			Player.PData.YVel = 0;
		}
		if (Player.PData.YPos + 20 > 480) {
			Player.PData.YPos = 460;
			Player.PData.YVel = 0;
		}
		Player.PData.OnGround = false;
		Player.PData.PortalTemp2 = false;
		for (let i = 0; i < Levels[1][Level].length; i++)
			Levels[1][Level][i].EnemyUpdate(Player, Ctx);
		for (let i = 0; i < Levels[0][Level].length; i++) {
			Levels[0][Level][i].BlockDetect(Player, Levels[0][Level][i], Ctx);
			if (
				Levels[0][Level][i].BData.Type === "Block" &&
				Levels[0][Level][i].BData.Dir === "Down"
			) {
				Levels[0][Level][i].BData.YPos += 1 / 36;
				if (Levels[0][Level][i].BData.YPos >= 20)
					Levels[0][Level][i].BData.YPos = -1;
			}
			if (Levels[0][Level][i].BData.Temp) Player.PData.OnGround = true;
			if (Levels[0][Level][i].BData.PortalTemp) Player.PData.PortalTemp2 = true;
		}
		if (Player.PData.PortalTemp2 === false) {
			Player.PData.TouchingPortal = false;
		}
		if (Player.PData.Level === 10) {
			Ctx.fillStyle = "#000";
			Ctx.font = "60px sans-serif";
			Ctx.fillText("You done it!", 170, 100);
			Ctx.font = "30px sans-serif";
			Ctx.fillText("Happy birthday", 145, 150);
		}
	}

	DrawLevel(Ctx, Level, Player, Bullet) {
		for (let i = 0; i < Levels[1][Level].length; i++)
			Levels[1][Level][i].DrawEnemy(Ctx, Player);
		if (Player.PData.BulletLive) Bullet.BulletUpdate(Levels, Player, Ctx);
		for (let i = 0; i < Levels[0][Level].length; i++)
			Levels[0][Level][i].DrawBlock(Ctx, Player);
		let d = new Date();
		d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
		document.cookie =
			"Level=" + Player.PData.Level + ";expires=" + d.toUTCString() + ";path=/";
	}

	ResetLevel(Player) {
		for (let i = 0; i < Levels[0][Player.PData.Level].length; i++) {
			Levels[0][Player.PData.Level][i].BData.Type =
				Levels[0][Player.PData.Level][i].BData.Origin ||
				Levels[0][Player.PData.Level][i].BData.Type;
			if (Player.PData.Level === 9)
				Levels[1][Player.PData.Level][0].EData.Health = 5;
		}
	}
};
