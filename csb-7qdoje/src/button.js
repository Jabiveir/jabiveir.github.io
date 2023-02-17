export default class Buttons {
  constructor() {
    this.B = [];
  }
  NewButton(X, Y, W, H, ShowVar, GoalVar, Vis, Text, TextSize, Type) {
    let Button = {
      X,
      Y,
      W,
      H,
      ShowVar,
      GoalVar,
      Vis,
      Text,
      TextSize,
      Type
    };
    this.B.push(Button);
  }
};
