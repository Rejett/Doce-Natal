// Functions to allow moviments;

import Game from "../../game";
import { KeyboardListener } from "../../io/keyboard.events";
import { Nicolau } from "./nicolau";

export class NicolauMovement {
  public readonly ORIGINAL_HEIGHT = 40;
  public readonly ORIGINAL_WIDTH = 40;

  private VELOCITY_Y = 0;
  private GRAVITY = 1;

  public SPEED = 0;
  public IS_STOOP = false;
  public IS_JUMPING = false;

  private nicolau: Nicolau;

  constructor(nicolau: Nicolau) {
    this.nicolau = nicolau;
  }

  // Functions who listen when moviments are allowed, then execute movuments.
  isOnTheFloor = () => {
    // when the feet is on the floor.
    return this.nicolau.y >= Game.BOTTOM_BOUNDARY - this.nicolau.height;
  };

  onUpPress = () => {
    if (!this.IS_JUMPING && this.isOnTheFloor()) {
      this.VELOCITY_Y -= 30;
    }
    this.IS_JUMPING = true;
  };

  onRightPress = () => {
    if (!this.IS_STOOP) {
      this.SPEED = 5;
    }
  };

  onDownPress = () => {
    this.IS_STOOP = true;
    this.SPEED = 0;
  };

  onLeftPress = () => {
    if (!this.IS_STOOP) {
      this.SPEED = -5;
    }
  };

  private MOVIMENTS: { [key: string]: () => void } = {
    ArrowUp: this.onUpPress,
    ArrowRight: this.onRightPress,
    ArrowDown: this.onDownPress,
    ArrowLeft: this.onLeftPress,
  };

  jump = () => {
    this.nicolau.y += this.VELOCITY_Y;

    // just jump when is in the floor.
    if (!this.isOnTheFloor()) {
      this.VELOCITY_Y += this.GRAVITY;
    } else {
      this.VELOCITY_Y = 0;
      if (this.nicolau.y > Game.BOTTOM_BOUNDARY - this.nicolau.height) {
        this.nicolau.y = Game.BOTTOM_BOUNDARY - this.nicolau.height;
      }
    }
  };

  stoop = () => {
    if (this.IS_STOOP && this.nicolau.height > this.ORIGINAL_HEIGHT / 2) {
      this.nicolau.y += 1;
      this.nicolau.height -= 1;
    } else if (!this.IS_STOOP && this.nicolau.height < this.ORIGINAL_HEIGHT) {
      this.nicolau.height += 1;
    }
  };

  walk = () => {
    this.nicolau.x += this.SPEED;

    // when santa's is on then extreme left side, do player returns in the other side;
    if (this.nicolau.x === Game.LEFT_BOUNDARY) {
      this.nicolau.x = Game.RIGHT_BOUNDARY;

      // when santa's front is on the extreme right side, do player returns in the other side.
    } else if (this.nicolau.x > Game.RIGHT_BOUNDARY - this.nicolau.widht) {
      this.nicolau.x = Game.LEFT_BOUNDARY;
    }
  };

  executemoviment = (key: string): void => {
    const moviment = this.MOVIMENTS[key];

    if (moviment) {
      moviment();
    }
  };

  resetMovimentStatus = () => {
    this.SPEED = 0;
    this.IS_STOOP = false;
    this.IS_JUMPING = false;
  };

  update = () => {
    this.walk();
    this.jump();
    this.stoop();

    KeyboardListener.PRESSED_KEYS.forEach((key: string) => {
      this.executemoviment(key);
    });

    let releasedKeysMustBeDeleted: string[] = [];

    KeyboardListener.REALEASED_KEYS.forEach((key: string) => {
      this.resetMovimentStatus();
      releasedKeysMustBeDeleted = [...releasedKeysMustBeDeleted, key];
    });

    releasedKeysMustBeDeleted.forEach((key) => {
      KeyboardListener.REALEASED_KEYS = KeyboardListener.REALEASED_KEYS.filter(
        (k) => k !== key
      );
    });
  }
}
