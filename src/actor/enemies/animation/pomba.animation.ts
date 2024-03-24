import Game from "../../../game";
import { Pomba } from "../pomba";

export class PombaAnimation {

  private readonly pomba: Pomba;
  private image;
  private frame = 0;
  
  constructor(pomba: Pomba) {
    this.pomba = pomba;
    this.image = new Image();
    this.image.src = "./assets/enemies/pomba/enemy1.png";
  }

  update = () => {
    if (Game.FRAME % 3 === 0) {
      if (this.frame === 5) {
        this.frame = 0;
      } else {
        this.frame++;
      }
    }
  }

  draw = (context: CanvasRenderingContext2D) => {
    context.drawImage(
      this.image,
      this.frame * Pomba.ORIGINAL_WIDTH,
      0,
      Pomba.ORIGINAL_WIDTH,
      Pomba.ORIGINAL_HEIGHT,
      this.pomba.x,
      this.pomba.y,
      this.pomba.width,
      this.pomba.height
    );
    Game.FRAME++;
  };

}