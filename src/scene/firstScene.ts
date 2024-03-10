import { Scene } from "./scene";

export default class FirstScene extends Scene {
  public draw = (context: CanvasRenderingContext2D): void => {

    context.fillStyle = '#552343';
    context.fillRect(
      0,   // left 
      0,   // top
      window.innerWidth, // right 
      window.innerHeight, // bottom
    );
  }
}