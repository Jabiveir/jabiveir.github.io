export default class Bullet {
	Spawn(X, Y, Speed, Player) {
		let XVel = X - Player.PData.XPos;
		let YVel = Player.PData.YPos - Y;
		let Change = Math.sqrt(XVel * XVel + YVel * YVel) / Speed;
		this.BData = {
			XPos: Player.PData.XPos + 6,
			YPos: Player.PData.YPos + 6,
			XVel: XVel / Change,
			YVel: YVel / Change,
			OriginX: X + 12,
			OriginY: Y + 12
		};
		Player.PData.BulletLive = true;
	}
	BulletUpdate(Levels, Player, Ctx) {
		Ctx.fillStyle = "#fc0";
		Ctx.fillRect(this.BData.XPos, this.BData.YPos, 12, 12);
		this.BData.XPos += this.BData.XVel;
		this.BData.YPos -= this.BData.YVel;
		if (this.BData.XPos < 0) Player.PData.BulletLive = false;
		if (this.BData.XPos + 12 > 720) Player.PData.BulletLive = false;
		if (this.BData.YPos < 0) Player.PData.BulletLive = false;
		if (this.BData.YPos + 12 > 480) Player.PData.BulletLive = false;
		for (let i = 0; i < Levels[0][Player.PData.Level].length; i++) {
			if (
				Levels[0][Player.PData.Level][i].BData.Type ===
					Player.PData.BlockState ||
				Levels[0][Player.PData.Level][i].BData.Type === "Block"
			) {
				if (
					this.BData.XPos + 12 >
						Levels[0][Player.PData.Level][i].BData.XPos * 24 &&
					this.BData.XPos <
						Levels[0][Player.PData.Level][i].BData.XPos * 24 + 24 &&
					this.BData.YPos + 12 >
						Levels[0][Player.PData.Level][i].BData.YPos * 24 &&
					this.BData.YPos <
						Levels[0][Player.PData.Level][i].BData.YPos * 24 + 24
				)
					Player.PData.BulletLive = false;
			}
		}
		for (let i = 0; i < Levels[1][Player.PData.Level].length; i++) {
			if (
				this.BData.XPos + 12 > Levels[1][Player.PData.Level][i].EData.XPos &&
				this.BData.XPos < Levels[1][Player.PData.Level][i].EData.XPos + 24 &&
				this.BData.YPos + 12 > Levels[1][Player.PData.Level][i].EData.YPos &&
				this.BData.YPos < Levels[1][Player.PData.Level][i].EData.YPos + 24
			) {
				if (
					Levels[1][Player.PData.Level][i].EData.Type === "Sniper" ||
					Levels[1][Player.PData.Level][i].EData.Type === "Area"
				)
					Levels[1][Player.PData.Level][i].EData.Type = "";
				if (Levels[1][Player.PData.Level][i].EData.Type === "Boss") {
					Levels[1][Player.PData.Level][i].EData.Health -= 1;
					if (Levels[1][Player.PData.Level][i].EData.Health <= 0) {
						Levels[1][Player.PData.Level][i].EData.Type = "";
						Player.PData.Keys += 2;
					}
					Player.PData.XPos = 24;
					Player.PData.YPos = 436;
					Player.PData.BulletLive = false;
				}
			}
		}
	}
};
