import { Nicolau } from "../nicolau";

export class NicolauAnimationWalk {
  walkImage: any;
  nicolau: Nicolau;
  currentFrame: number;

  gameFrame = 0;
  staggerFrame = 10;

  SPRITE_WIDTH = 400;
  SPRITE_HEIGHT = 600;

  constructor(nicolau: Nicolau) {
    this.walkImage = new Image();
    this.walkImage.src = "assets/nicolau/nicolau-walk.png";

    this.nicolau = nicolau;
    this.currentFrame = 0;
  }

  draw = (context: CanvasRenderingContext2D) => {
    if (this.gameFrame % this.staggerFrame === 0) {
      if (this.currentFrame < 5) {
        this.currentFrame++;
      } else if (this.currentFrame > -1) {
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
      this.nicolau.x + 10,
      // crop image on player top 0
      this.nicolau.y,
      // crop image right in bound
      100,
      // crop image bottom in bound
      200
    );

    this.gameFrame++;
  };
}
