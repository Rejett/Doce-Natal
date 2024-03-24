import { NicolauAnimation } from "./animation/nicolau.animation";
import { NicolauMovement } from "./moviment/nicolau.movement";
import { Updatable } from "../updatable";

export class Nicolau extends Updatable {
  public static readonly ORIGINAL_X = 20;
  public static readonly ORIGINAL_Y = window.innerHeight - 620;
  public static readonly ORIGINAL_WIDTH: number = 100;
  public static readonly ORIGINAL_HEIGHT: number = 200;

  private animation: NicolauAnimation;
  private moviment: NicolauMovement;

  constructor() {
    super(
      Nicolau.ORIGINAL_X,
      Nicolau.ORIGINAL_Y,
      Nicolau.ORIGINAL_WIDTH,
      Nicolau.ORIGINAL_HEIGHT
    );

    this.animation = new NicolauAnimation(this);
    this.moviment = new NicolauMovement(this);
  }

  public update = (): void => {
    this.moviment.update();
  };

  public draw = (context: CanvasRenderingContext2D): void => {
    this.animation.draw(context);
  };
}
