import { Nicolau } from "../nicolau";
import { NicolauAnimationWalk } from "./nicolau.animation.walk";

export class NicolauAnimation {
  walk;

  constructor(nicolau: Nicolau) {
    this.walk = new NicolauAnimationWalk(nicolau);
  }

  draw = (context: CanvasRenderingContext2D) => {
    this.walk.draw(context);
  };
}
