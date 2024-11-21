// @ts-check
import { ctx, MAX_RENDER_WIDTH, OFFSET_X, OFFSET_Y } from "./constants.js";
import state from "./state.js";

export default function renderWave() {
  // Render the waves
  ctx.beginPath();
  ctx.strokeStyle = state.waveStyle;

  ctx.moveTo(...state.coords(0));
  for (let i = 1; i <= MAX_RENDER_WIDTH; i++) ctx.lineTo(...state.coords(i));
  ctx.stroke();
}
