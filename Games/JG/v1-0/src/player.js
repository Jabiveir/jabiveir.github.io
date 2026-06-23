import levels from "./levels.js";
let Levels = new levels();

export default class Player {
	Spawn(Ctx, Level) {
		this.PData = {
			XPos: 24,
			YPos: 436,
			XVel: 0,
			YVel: 0,
			MovingUp: false,
			MovingRight: false,
			MovingLeft: false,
			MovingDown: false,
			ClickX: 0,
			ClickY: 0,
			Level: Level,
			TouchingPortal: false,
			PortalTemp2: false,
			BlockState: "Red",
			Timer: 0,
			Keys: 0,
			BulletLive: false
		};
		Levels.ResetLevel(this);
	}

	Update(Ctx, Bullet) {
		Levels.DrawLevel(Ctx, this.PData.Level, this, Bullet);
		this.PData.XVel *= 0.9;
		this.PData.YVel *= 0.9;
		for (let i = 0; i < 4; i++) {
			if (this.PData.MovingRight) {
				if (this.PData.XVel === 0) this.PData.XVel = 10;
				else this.PData.XVel += 20 / 16.7;
			}
			if (this.PData.MovingLeft) {
				if (this.PData.XVel === 0) this.PData.XVel = -10;
				else this.PData.XVel -= 20 / 16.7;
			}
			if (this.PData.MovingUp) {
				if (this.PData.YVel === 0) this.PData.YVel = 10;
				else this.PData.YVel += 20 / 16.7;
			}
			if (this.PData.MovingDown) {
				if (this.PData.YVel === 0) this.PData.YVel = -10;
				else this.PData.YVel -= 20 / 16.7;
			}
			this.PData.XPos += this.PData.XVel / 16.7 / 4;
			this.PData.YPos -= this.PData.YVel / 16.7 / 4;
			Levels.Collision(Ctx, this, this.PData.Level);
		}
		this.PData.Timer += 1;
		if (this.PData.Timer >= 128) {
			if (this.PData.BlockState === "Red") this.PData.BlockState = "Blue";
			else this.PData.BlockState = "Red";
			this.PData.Timer = 0;
		}
		Ctx.fillStyle = "#0f0";
		Ctx.fillRect(this.PData.XPos, this.PData.YPos, 20, 20);
		if (this.PData.Keys > 0) {
			Ctx.fillStyle = "#cc0";
			Ctx.fillRect(this.PData.XPos + 2, this.PData.YPos + 6, 8, 8);
			Ctx.fillRect(this.PData.XPos + 4, this.PData.YPos + 8, 14, 4);
			Ctx.fillStyle = "#f00";
			Ctx.fillRect(this.PData.XPos + 4, this.PData.YPos + 8, 4, 4);
		}
	}
};
