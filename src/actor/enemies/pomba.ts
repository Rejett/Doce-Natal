import Game from "../../game";
import Actor from "../actor";

export class Pomba extends Actor {
  private SPEED = 0;
  private static readonly ORIGINAL_WIDTH = 293;
  private static readonly ORIGINAL_HEIGHT = 155;
  private image;
  private frame = 0;

  constructor() {
    super(0, 0, Game.RIGHT_BOUNDARY, Game.BOTTOM_BOUNDARY);
    this.SPEED = Math.random() * 4 - 2;
    this.x = Math.random() * Game.RIGHT_BOUNDARY;
    this.y = Math.random() * Game.BOTTOM_BOUNDARY;

    this.width = Pomba.ORIGINAL_WIDTH / 2.5;
    this.height = Pomba.ORIGINAL_HEIGHT / 2.5; 

    this.image = new Image();
    this.image.src = "./assets/enemies/pomba/enemy1.png";
  }

  addActor = () => {
    Game.addActors(this);
  };

  draw = (context: CanvasRenderingContext2D) => {
    this.x--;
    context.drawImage(
      this.image,
      0,
      0,
      Pomba.ORIGINAL_WIDTH,
      Pomba.ORIGINAL_HEIGHT,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };
}
