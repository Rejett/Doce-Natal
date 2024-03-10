export default abstract class Actor {

  public x: number;
  public y: number;
  public widht: number;
  public height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.widht = width;
    this.height = height;
  }

  public abstract draw(_: CanvasRenderingContext2D): void;

}