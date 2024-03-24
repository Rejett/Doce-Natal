import Actor from "../actor/actor";
import { Background } from "../background/background";
import CanvasContext from "../render/canvas.context";
import { RenderLoop } from "../render/render.loop";

export default class Game {

    public static readonly TOP_BOUNDARY = 0;
    public static readonly RIGHT_BOUNDARY = 720;
    public static readonly BOTTOM_BOUNDARY = 480;
    public static readonly LEFT_BOUNDARY = 0;
    public static FRAME = 0;
    
    private static CANVAS_CONTEXT: CanvasContext;
    private static EVENTS: any;
    private static ACTORS: Actor[] = [];
    private static RENDER_LOOP: RenderLoop;
    private static BACKGROUND: Background;
    
    public static gravity = 0.4;
    
    static start() {
      Game.CANVAS_CONTEXT = new CanvasContext();
      Game.RENDER_LOOP = new RenderLoop();
      Game.BACKGROUND = new Background(Game.BOTTOM_BOUNDARY - 500);
      
      const { canvas, context } = Game.CANVAS_CONTEXT;
      
      canvas.width = this.RIGHT_BOUNDARY;
      canvas.height = this.BOTTOM_BOUNDARY;

      Game.RENDER_LOOP.start(context);
    }

    static addEvent = (event: any) => {
      this.EVENTS = [this.EVENTS, event];
    }

    static removeEvent = (event: any) => {
      this.EVENTS = this.EVENTS.filter((e: any) => {
        return e.id !== event.id
      });
    }

    static getActors = (): Actor[] => {
      return [...this.ACTORS];
    }

    static addActors = (actors: any) => {
      this.ACTORS = [...this.ACTORS, actors];
    }

    static removeActor = (actor: any) => {
      this.ACTORS = this.ACTORS.filter((a: any) => {
        return a.id !== actor.id
      });
    }

    static getBackground = () => {
      return this.BACKGROUND;
    }
}