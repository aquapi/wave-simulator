// @ts-check
import { DOUBLE_PI, MAX_RENDER_WIDTH, OFFSET_X, OFFSET_Y } from "./constants";

export default {
  // Function state
  A: 70,
  w: 2 * Math.PI,
  phi: Math.PI,

  /**
   * @param {number} t
   * @returns {number}
   */
  getX(t) {
    // Add a PI to reverse the graph
    return (
      this.A * Math.cos((this.w * t) / MAX_RENDER_WIDTH + this.phi + Math.PI)
    );
  },

  /**
   * @param {number} i
   * @returns {[number, number]}
   */
  coords(i) {
    return [i + OFFSET_X, this.getX(i / this.v) + OFFSET_Y];
  },

  // Moving state
  reverse: false,
  moving: true,

  /**
   * Last frame time in milliseconds
   */
  deltaTime: 0,

  // Wave state
  v: 1,

  // Point list
  points: [125, 250, 400, 620],
};
