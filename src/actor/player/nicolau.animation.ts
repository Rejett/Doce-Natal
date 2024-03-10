import { Nicolau } from "./nicolau";

export class NicolauAnimation {
  nicolau: Nicolau;

  walkImage: any;
  currentFrame: number;
  
  gameFrame = 0;
  staggerFrame = 10;

  SPRITE_WIDTH = 400;
  SPRITE_HEIGHT = 600;

  constructor(nicolau: Nicolau) {
    this.walkImage = new Image();
    this.walkImage.src = "assets/nicolau-walk.png";

    this.nicolau = nicolau;
    this.currentFrame = 0;
  }

  walk = (context: CanvasRenderingContext2D) => {
    if (this.gameFrame % this.staggerFrame === 0) {
      if (this.currentFrame < 5) {
        this.currentFrame++;
      } else if (this.currentFrame > 0) {
        this.currentFrame--;
      }
    }

    const position = Math.floor(this.gameFrame / this.staggerFrame) % 6;

    context.drawImage(
      // image
      this.walkImage,
      // source image x
      this.SPRITE_WIDTH * position,
      // source image y
      0,
      // source image wight
      this.SPRITE_WIDTH,
      // source image height
      this.SPRITE_HEIGHT,
      // crop image on player left 0
      this.nicolau.x,
      // crop image on player top 0
      this.nicolau.y,
      // crop image right in bound
      200,
      // crop image bottom in bound
      300
    );

    this.gameFrame++;
  };

  draw = (context: CanvasRenderingContext2D) => {
    this.walk(context);
  };
}
