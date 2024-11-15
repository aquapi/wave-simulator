// @ts-check
import { ctx, HEIGHT, WIDTH } from "./constants.js";
import renderBaseCoords from "./coords.js";
import state from "./state.js";
import renderPoints from "./point.js";
import renderWave from "./wave.js";

export function renderFrame() {
  renderBaseCoords();
  renderWave();
  renderPoints();
}

// Move the wave
const WAVE_SPEED_SCALE = 0.005;

export function renderMovingWave() {
  if (state.moving) {
    // Calculate wave speed (left to right)
    state.phi += state.reverse
      ? WAVE_SPEED_SCALE * state.w
      : -WAVE_SPEED_SCALE * state.w;
  }

  // Still rerender
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  renderFrame();

  // Wait for next frame
  requestAnimationFrame(renderMovingWave);
}
