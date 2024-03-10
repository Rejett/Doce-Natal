import { NicolauAnimation } from "./nicolau.animation";
import { NicolauMovement } from "./nicolau.movement";
import { Updatable } from "./updatable";

export class Nicolau extends Updatable {
  public static readonly ORIGINAL_WIDTH: number = 200;
  public static readonly ORIGINAL_HEIGHT: number = 300;

  private animation: NicolauAnimation;
  private moviment: NicolauMovement;

  constructor(x: number, y: number) {
    super(x, y, Nicolau.ORIGINAL_WIDTH, Nicolau.ORIGINAL_HEIGHT);

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
