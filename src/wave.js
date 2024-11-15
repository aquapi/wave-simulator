// @ts-check
import { ctx, MAX_RENDER_WIDTH, OFFSET_X, OFFSET_Y } from "./constants.js";
import fn from "./fn.js";

const DENSITY = 0.5;

export default function renderWave() {
  // Render the waves
  ctx.beginPath();
  ctx.strokeStyle = "black";

  ctx.moveTo(OFFSET_X, fn(0) + OFFSET_Y);

  for (let i = 1; i <= MAX_RENDER_WIDTH; i += DENSITY)
    ctx.lineTo(i + OFFSET_X, fn(i) + OFFSET_Y);

  ctx.stroke();
}
