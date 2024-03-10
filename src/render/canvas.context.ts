export default class CanvasContext {
  public readonly canvas: HTMLCanvasElement;
  public readonly context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.querySelector('canvas')!;
    this.context = this.canvas.getContext('2d')!;
  }
}