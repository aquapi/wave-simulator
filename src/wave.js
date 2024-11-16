// @ts-check
import { ctx, MAX_RENDER_WIDTH, OFFSET_X, OFFSET_Y } from "./constants.js";
import fn from "./fn.js";
import state from "./state.js";
import { calcPos } from "./vec.js";

const DENSITY = 0.5;

export default function renderWave() {
  // Render the waves
  ctx.beginPath();
  ctx.strokeStyle = "black";

  ctx.moveTo(...calcPos(0));

  for (let i = 1; i <= MAX_RENDER_WIDTH; i += DENSITY)
    ctx.lineTo(...calcPos(i));

  ctx.stroke();
}
