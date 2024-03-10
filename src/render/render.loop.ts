import { Nicolau } from "../actor/player/nicolau";
import Game from "../game";

export class RenderLoop {
  public start = (context: CanvasRenderingContext2D) => {
    let id: number | string = "running";
    try {
      id = requestAnimationFrame(() => this.start(context));

      clearDraw(context);
      drawScene(context!);
      updateActors();
      drawActors(context!);
    } catch (e) {
      console.error(e);

      if (id !== "running") {
        cancelAnimationFrame(id as number);
      }
    }
  }
}

const clearDraw = (context: CanvasRenderingContext2D): void => {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
};

const drawScene = (context: CanvasRenderingContext2D): void => {
  const scene = Game.currentScene();
  if (scene) {
    scene.draw(context);
  }
};

const updateActors = (): void => {
  const actors = Game.getActors();
  if (actors) {
    Game.getActors()
      .forEach((actor) => {
        if (actor instanceof Nicolau) {
          actor.update();
        }
      });
  }
};

const drawActors = (context: CanvasRenderingContext2D): void => {
  const actors = Game.getActors();
  if (actors) {
    Game.getActors().forEach((actor) => {
      actor.draw(context);
    });
  }
};
