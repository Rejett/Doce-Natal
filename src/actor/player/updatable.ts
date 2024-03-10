import Actor from "../Actor";

export abstract class Updatable extends Actor {
  public abstract update(): void;
}