import menu from "./menu.js";

export default class InputHandler {
  constructor(Ctx, Buttons, GameData, Images) {
    let Menu = new menu();
    Menu.UpdateMenu(Ctx, Buttons, GameData, Images);
    document.getElementById("GameScreen").addEventListener("click", (event) => {
      for (let i = 0; i < Buttons.B.length; i++) {
        if (GameData.MenuVar === Buttons.B[i].ShowVar) {
          if (
            event.offsetX > Buttons.B[i].X &&
            event.offsetX < Buttons.B[i].X + Buttons.B[i].W &&
            event.offsetY > Buttons.B[i].Y &&
            event.offsetY < Buttons.B[i].Y + Buttons.B[i].H
          ) {
            GameData.MenuVar = Buttons.B[i].GoalVar;
            if (Buttons.B[i].Vis !== "Menu")
              GameData.PressedType = Buttons.B[i].Vis;
            Menu.UpdateMenu(Ctx, Buttons, GameData, Images, false, i);
            break;
          }
        }
      }
    });
  }
};
