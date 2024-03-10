import { DownState } from "./down";
import { FallState } from "./fall";
import { HitState } from "./hit";
import { IdleState } from "./idle";
import { JumpState } from "./jump";
import { WalkState } from "./walk";

export const states = [
  new DownState(),
  new FallState(),
  new HitState(),
  new IdleState(),
  new JumpState(),
  new WalkState(),
]