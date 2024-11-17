// @ts-check
import { ctx, MAX_RENDER_WIDTH, OFFSET_X, OFFSET_Y } from "./constants.js";
import state from "./state.js";

// Arrows and base coords
const ARROW_SIZE = 4;
const FONT_SIZE = ARROW_SIZE * 4;

const xModifyMap = [
  -ARROW_SIZE,
  FONT_SIZE,
  -ARROW_SIZE,
  -FONT_SIZE - ARROW_SIZE,
];
const yModifyMap = [-FONT_SIZE, ARROW_SIZE, FONT_SIZE + ARROW_SIZE, ARROW_SIZE];

/**
 * @param {number} x
 * @param {number} y
 * @param {0 | 1 | 2 | 3} direction
 * @param {string} label
 */
function renderText(x, y, direction, label) {
  ctx.fillText(label, x + xModifyMap[direction], y + yModifyMap[direction]);
}

// 0 1 2 3: same stuff as padding
/**
 * @param {number} x
 * @param {number} y
 * @param {0 | 1 | 2 | 3} direction
 * @param {string} label
 */
function renderArrow(x, y, direction, label) {
  renderText(x, y, direction, label);
  ctx.moveTo(x, y);

  if ((direction & 1) === 0) {
    const newY = direction === 0 ? y + ARROW_SIZE : y - ARROW_SIZE;

    ctx.lineTo(x + ARROW_SIZE, newY);
    ctx.moveTo(x, y);
    ctx.lineTo(x - ARROW_SIZE, newY);
  } else {
    const newX = direction === 3 ? x + ARROW_SIZE : x - ARROW_SIZE;

    ctx.lineTo(newX, y + ARROW_SIZE);
    ctx.moveTo(x, y);
    ctx.lineTo(newX, y - ARROW_SIZE);
  }

  ctx.moveTo(x, y);
}

const EXTEND_WIDTH = 60;

export default function renderBaseCoords() {
  // Render the base coords
  ctx.beginPath();
  ctx.strokeStyle = "gray";

  ctx.font = FONT_SIZE + "px monospace";
  ctx.fillStyle = "gray";

  // Draw vertical axis
  renderArrow(OFFSET_X, OFFSET_Y - state.A - EXTEND_WIDTH, 0, "u");
  ctx.lineTo(OFFSET_X, OFFSET_Y + state.A);

  // Draw horizontal axis
  renderArrow(OFFSET_X + MAX_RENDER_WIDTH, OFFSET_Y, 1, "x");
  ctx.lineTo(OFFSET_X, OFFSET_Y);

  // Render O
  renderText(OFFSET_X, OFFSET_Y, 3, "O");

  ctx.stroke();
}
