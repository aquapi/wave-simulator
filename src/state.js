import { DOUBLE_PI } from "./constants";

export default {
  // Function state
  A: 50,
  w: 2 * Math.PI,
  phi: Math.PI,

  // Moving state
  reverse: false,
  moving: true,

  // Wave state
  v: 1,
  lambda() {
    return (this.v * DOUBLE_PI) / this.w;
  },
};
