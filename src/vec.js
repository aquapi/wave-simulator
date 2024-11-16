import { DOUBLE_PI, OFFSET_X, OFFSET_Y } from "./constants";
import fn from "./fn";
import state from "./state";

// Scale the x position to the speed
/**
 * @param {number} i
 * @returns {[number, number]}
 */
export const calcPos = (i) => [i + OFFSET_X, fn(i / state.lambda()) + OFFSET_Y];
