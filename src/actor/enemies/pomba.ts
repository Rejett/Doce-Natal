import Game from "../../game";
import { Updatable } from "../updatable";
import { PombaAnimation } from "./animation/pomba.animation";
import { PombaMoviment } from "./moviment/pomba.moviment";

export class Pomba extends Updatable {

  private readonly moviment: PombaMoviment;
  private readonly animation: PombaAnimation;

  public static readonly ORIGINAL_WIDTH = 293;
  public static readonly ORIGINAL_HEIGHT = 155;

  constructor() {
    super(
      Math.random() * Game.RIGHT_BOUNDARY, 
      Math.random() * Game.BOTTOM_BOUNDARY,
      Pomba.ORIGINAL_WIDTH / 2.5, 
      Pomba.ORIGINAL_HEIGHT / 2.5
    );

    this.moviment = new PombaMoviment(this);
    this.animation = new PombaAnimation(this);
  }

  addActor = () => {
    Game.addActors(this);
  };

  update = () => {
    this.animation.update();
    this.moviment.update();
  }

  draw = (context: CanvasRenderingContext2D) => {
   this.animation.draw(context);
  };
}
