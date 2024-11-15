// @ts-check
import state from "./state.js";

// Add additional PI to reverse the function
const Y_DENSITY = 500;
/**
 * @param {number} t
 */
export default (t) =>
  state.A * Math.cos((state.w * t) / Y_DENSITY + state.phi + Math.PI);
