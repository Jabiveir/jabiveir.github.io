export default class Enemy {
	constructor(X, Y, Type, Range, CycleLength, Dir, Speed) {
		this.EData = {
			XPos: X * 24,
			YPos: Y * 24,
			Dir: Dir,
			Speed: Speed,
			Type: Type,
			Range: Range,
			Cycle: CycleLength * 24,
			CycleVar: 0,
			Live: true
		};
		if (this.EData.Type === "Boss") this.EData.Health = 5;
	}
	DrawEnemy(Ctx, Player) {
		Ctx.fillStyle = "#fcc";
		if (this.EData.Type === "Area") {
			Ctx.fillRect(
				this.EData.XPos - 24 * this.EData.Range,
				this.EData.YPos - 24 * this.EData.Range,
				48 * this.EData.Range + 24,
				48 * this.EData.Range + 24
			);
			Ctx.fillStyle = "#f00";
			Ctx.fillRect(this.EData.XPos, this.EData.YPos, 24, 24);
		}
		if (this.EData.Type === "Sniper") {
			if (this.EData.Dir === "Up")
				Ctx.fillRect(
					this.EData.XPos,
					this.EData.YPos - 24 * this.EData.Range,
					24,
					24 * this.EData.Range
				);
			if (this.EData.Dir === "Left")
				Ctx.fillRect(
					this.EData.XPos - 24 * this.EData.Range,
					this.EData.YPos,
					24 * this.EData.Range,
					24
				);
			if (this.EData.Dir === "Right")
				Ctx.fillRect(
					this.EData.XPos + 24,
					this.EData.YPos,
					24 * this.EData.Range,
					24
				);
			if (this.EData.Dir === "Down")
				Ctx.fillRect(
					this.EData.XPos,
					this.EData.YPos + 24,
					24,
					24 * this.EData.Range
				);
			Ctx.fillStyle = "#f00";
			Ctx.fillRect(this.EData.XPos, this.EData.YPos, 24, 24);
		}
		if (this.EData.Type === "Boss") {
			if (Player.PData.Timer >= 64)
				Ctx.fillRect(
					this.EData.XPos - 24,
					this.EData.YPos,
					24 * 3,
					24 * (this.EData.Range + 1)
				);
			Ctx.fillStyle = "#f00";
			Ctx.fillRect(this.EData.XPos, this.EData.YPos, 24, 24);
			Ctx.fillRect(0, 0, 624, 24);
			Ctx.fillStyle = "#0f0";
			if (this.EData.Health >= 1) Ctx.fillRect(0, 0, 120, 24);
			if (this.EData.Health >= 2) Ctx.fillRect(120, 0, 120, 24);
			if (this.EData.Health >= 3) Ctx.fillRect(240, 0, 120, 24);
			if (this.EData.Health >= 4) Ctx.fillRect(360, 0, 120, 24);
			if (this.EData.Health >= 5) Ctx.fillRect(480, 0, 144, 24);
		}
	}
	EnemyUpdate(Player, Ctx) {
		if (this.EData.Type === "Area") {
			if (
				Player.PData.XPos + 20 > this.EData.XPos - 24 * this.EData.Range &&
				Player.PData.XPos < this.EData.XPos + 24 * (this.EData.Range + 1) &&
				Player.PData.YPos + 20 > this.EData.YPos - 24 * this.EData.Range &&
				Player.PData.YPos < this.EData.YPos + 24 * (this.EData.Range + 1)
			)
				Player.Spawn(Ctx, Player.PData.Level);
			if (this.EData.CycleVar === this.EData.Cycle) {
				this.EData.Speed *= -1;
				this.EData.CycleVar = 0;
			}
			if (this.EData.Dir === "V") this.EData.YPos -= this.EData.Speed / 4;
			if (this.EData.Dir === "H") this.EData.XPos += this.EData.Speed / 4;
			this.EData.CycleVar += Math.abs(this.EData.Speed) / 4;
		}
		if (this.EData.Type === "Sniper") {
			if (
				(this.EData.Dir === "Up" &&
					Player.PData.XPos + 20 > this.EData.XPos &&
					Player.PData.XPos < this.EData.XPos + 24 &&
					Player.PData.YPos + 20 > this.EData.YPos - this.EData.Range * 24 &&
					Player.PData.YPos < this.EData.YPos + 24) ||
				(this.EData.Dir === "Left" &&
					Player.PData.XPos + 20 > this.EData.XPos - this.EData.Range * 24 &&
					Player.PData.XPos < this.EData.XPos + 24 &&
					Player.PData.YPos + 20 > this.EData.YPos &&
					Player.PData.YPos < this.EData.YPos + 24) ||
				(this.EData.Dir === "Right" &&
					Player.PData.XPos + 20 > this.EData.XPos &&
					Player.PData.XPos < this.EData.XPos + 24 + this.EData.Range * 24 &&
					Player.PData.YPos + 20 > this.EData.YPos &&
					Player.PData.YPos < this.EData.YPos + 24) ||
				(this.EData.Dir === "Down" &&
					Player.PData.XPos + 20 > this.EData.XPos &&
					Player.PData.XPos < this.EData.XPos + 24 &&
					Player.PData.YPos + 20 > this.EData.YPos &&
					Player.PData.YPos < this.EData.YPos + 24 + this.EData.Range * 24)
			)
				Player.Spawn(Ctx, Player.PData.Level);
		}
		if (this.EData.Type === "Boss") {
			if (
				Player.PData.XPos + 20 > this.EData.XPos - 24 &&
				Player.PData.XPos < this.EData.XPos + 48 &&
				Player.PData.YPos + 20 > this.EData.YPos &&
				Player.PData.YPos < this.EData.YPos + 24 + this.EData.Range * 24 &&
				Player.PData.Timer >= 64
			)
				Player.Spawn(Ctx, Player.PData.Level);
			if (this.EData.CycleVar === this.EData.Cycle) {
				this.EData.Speed *= -1;
				this.EData.CycleVar = 0;
			}
			this.EData.XPos += this.EData.Speed / 4;
			this.EData.CycleVar += Math.abs(this.EData.Speed) / 4;
		}
	}
};
