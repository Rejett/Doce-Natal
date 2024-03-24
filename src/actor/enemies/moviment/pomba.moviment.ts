import { Pomba } from "../pomba";

export class PombaMoviment {
  
  private readonly ANIMATION_LIMIT_TOP = 20;
  private readonly ANIMATION_LIMIT_BOTTOM = -20
  private IS_RISING = true;
  
  private readonly pomba: Pomba;

  private position = 0;
  private speed;

  constructor(pomba: Pomba) {
    this.pomba = pomba;
    this.speed = 10 * Math.random();
  }

  update = () => {
    this.pomba.x--;

    if (this.position === this.ANIMATION_LIMIT_TOP) {
      this.IS_RISING = false;
    } else if (this.position === this.ANIMATION_LIMIT_BOTTOM) {
      this.IS_RISING = true;
    }

    if (this.IS_RISING) {
      this.pomba.y = this.pomba.y - this.speed * Math.random();
      this.position++;
    } else {
      this.pomba.y = this.pomba.y + this.speed * Math.random();
      this.position--;
    }
  }
}