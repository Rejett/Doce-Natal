import { KeyboardListener } from "../io/keyboard.events";

export class Layer {
  
  private image: any;
  private speed: number;

  private x = 0;
  private x2 = 1660;
  private y: number;

  constructor(src: string, speed: number, y: number) {
    this.speed = speed;
    this.image = new Image();
    this.image.src = src;
    this.y = y;
  }
  
  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y);
    context.drawImage(this.image, this.x2, this.y);

    if (!this.canMove()) {
      return;
    }

    if (this.x < -1666) {
      this.x = 1666 + this.x2 - this.speed
    } else {
      this.x -= this.speed;
    }

    if (this.x2 < -1666) {
      this.x2 = 1666 + this.x - this.speed;
    } else {
      this.x2 -= this.speed;
    }
  }

  canMove = () => {
    return KeyboardListener.PRESSED_KEYS.some((key) => {
      return ['ArrowRight', 'ArrowLeft'].includes(key);
    });
  }
}