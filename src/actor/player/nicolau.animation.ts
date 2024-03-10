import { Nicolau } from "./nicolau";

export class NicolauAnimation {
  image: any;
  nicolau: Nicolau;
  currentFrame: number;

  gameFrame = 0;
  staggerFrame = 10;

  SPRITE_WIDTH = 200;
  SPRITE_HEIGHT = 300;

  constructor(nicolau: Nicolau) {
    this.image = new Image();
    this.image.src = "nicolau.jpeg";
    this.nicolau = nicolau;
    this.currentFrame = 0;
  }

  draw = (context: CanvasRenderingContext2D) => {
    context.fillStyle = "blue";

    if (this.gameFrame % this.staggerFrame === 0) {
      if (this.currentFrame < 5) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
    }

    const position = Math.floor(this.gameFrame/this.staggerFrame) % 6

    context.drawImage(
      // image
      this.image,
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
}
