import Actor from "../actor/Actor";
import CanvasContext from "../render/canvas.context";
import { RenderLoop } from "../render/render.loop";
import { scenes } from "../scene";
import { Scene } from "../scene/scene";

export default class Game {

    public static readonly LEFT_BOUNDARY = 0;
    public static readonly RIGHT_BOUNDARY = window.innerWidth - 20;
    public static readonly BOTTOM_BOUNDARY = window.innerHeight - 20;
    
    private static canvasContext: CanvasContext;
    private static events: any;
    private static actors: Actor[] = [];
    private static render: RenderLoop;
    private static scenes: Scene[];

    public static gravity = 0.4;

    static start() {
      Game.canvasContext = new CanvasContext();
      Game.render = new RenderLoop();
      Game.scenes = scenes;
      
      const { canvas, context } = Game.canvasContext;
      
      canvas.width = this.RIGHT_BOUNDARY;
      canvas.height = this.BOTTOM_BOUNDARY;

      Game.render.start(context);
    }

    static addEvent = (event: any) => {
      this.events = [this.events, event];
    }

    static removeEvent = (event: any) => {
      this.events = this.events.filter((e: any) => {
        return e.id !== event.id
      });
    }

    static getActors = (): Actor[] => {
      return [...this.actors];
    }

    static addActors = (actors: any) => {
      this.actors = [...this.actors, actors];
    }

    static removeActor = (actor: any) => {
      this.actors = this.actors.filter((a: any) => {
        return a.id !== actor.id
      });
    }

    static currentScene = (): Scene => {
      return Game.scenes[0];
    }
}