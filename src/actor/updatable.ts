import Actor from "./actor";

export abstract class Updatable extends Actor {
  public abstract update(): void;
}