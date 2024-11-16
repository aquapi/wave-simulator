// @ts-check
import { ctx, DOUBLE_PI } from "./constants.js";
import state from "./state.js";

// Point list
const POINT_RADIUS = 6;

export default function renderPoints() {
  ctx.beginPath();
  ctx.fillStyle = "red";

  for (let i = 0, points = state.points, l = points.length, arr; i < l; i++) {
    arr = state.coords(points[i]);

    ctx.moveTo(...arr);
    ctx.arc(...arr, POINT_RADIUS, 0, DOUBLE_PI);
  }

  ctx.fill();
}
