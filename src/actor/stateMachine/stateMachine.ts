import State from "./state";

export default class StateMachine {

  public readonly states: State[] = [];
  private currentState: State | undefined;
  private lastState: State | undefined;

  constructor(states: []) {
    this.states = states;
  }

  changeState = (state: State) => {
    if (this.currentState !== state) {
      this.lastState = this.currentState;
      this.currentState = state;
    }
  }

  getCurretState = () => {
    return this.currentState;
  }

  getLastState = () => {
    return this.lastState;
  }
}
