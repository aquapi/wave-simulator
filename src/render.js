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
let lastUpdated = performance.now();
let currentTime = lastUpdated;

export function renderMovingWave() {
  // Calculate delta time
  currentTime = performance.now();
  state.deltaTime = currentTime - lastUpdated;
  lastUpdated = currentTime;

  if (state.moving) {
    // Calculate wave speed (left to right)
    state.phi += state.reverse
      ? (state.deltaTime / 1000) * state.w
      : (-state.deltaTime / 1000) * state.w;
  }

  // Still rerender
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  renderFrame();

  // Wait for next frame
  requestAnimationFrame(renderMovingWave);
}
