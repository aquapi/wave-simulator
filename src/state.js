// @ts-check
import { DOUBLE_PI, OFFSET_X, OFFSET_Y } from "./constants";

const Y_DENSITY = 500;

export default {
  // Function state
  A: 50,
  w: 2 * Math.PI,
  phi: Math.PI,

  /**
   * @param {number} t
   * @returns {number}
   */
  getX(t) {
    // Add a PI to reverse the graph
    return this.A * Math.cos((this.w * t) / Y_DENSITY + this.phi + Math.PI);
  },

  // Moving state
  reverse: false,
  moving: true,

  // Wave state
  v: 1,
  lambda() {
    return (this.v * DOUBLE_PI) / this.w;
  },

  /**
   * @param {number} i
   * @returns {[number, number]}
   */
  coords(i) {
    return [i + OFFSET_X, this.getX(i / this.lambda()) + OFFSET_Y];
  },
};
