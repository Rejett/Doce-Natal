import Actor from "./Actor";

export default class Rect extends Actor {

  private color: string;

  constructor(x: number, y: number, width: number, height: number, color: string) {
    super(x, y, width, height);

    this.color = color;
  }

  public draw = (context: CanvasRenderingContext2D): void => {
    context!.fillStyle = this.color;
    context!.fillRect(this.x, this.y, this.widht, this.height);
  }
  
}
