import { Updatable } from "../actor/updatable";
import Game from "../game";

export class RenderLoop {
  public start = (context: CanvasRenderingContext2D) => {
    let id: number | string = "running";
    try {
      id = requestAnimationFrame(() => this.start(context));

      clearDraw(context);
      drawBackground(context!);
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

const drawBackground = (context: CanvasRenderingContext2D): void => {
  Game.getBackground().draw(context);
};

const updateActors = (): void => {
  const actors = Game.getActors();

  if (actors) {
    Game.getActors()
      .forEach((actor) => {
        if (actor instanceof Updatable) {
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
