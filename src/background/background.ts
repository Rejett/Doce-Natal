import { Layer } from "./layer";

export class Background {
  private static SPEED = 5;

  private layers: Layer[];
  private y: number;

  constructor(y: number) {
    this.y = y;
    this.layers = [
      new Layer("assets/background/layer-1.png", 3.2, this.y),
      new Layer("assets/background/layer-2.png", 1.6, this.y),
      new Layer("assets/background/layer-3.png", 0.8, this.y),
      new Layer("assets/background/layer-4.png", 0.4, this.y),
      new Layer("assets/background/layer-5.png", 0.2, this.y),
    ];
  }

  draw(context: CanvasRenderingContext2D) {
    this.layers.forEach((layer) => {
      layer.draw(context);
    })
  }
}
