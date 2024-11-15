// @ts-check
import { ctx, OFFSET_X, OFFSET_Y, DOUBLE_PI } from "./constants.js";
import fn from "./fn.js";

// Point list
const POINT_RADIUS = 6;

/**
 * @type {number[]}
 */
export const pointsList = [120, 235, 345, 472];

export default function renderPoints() {
  ctx.beginPath();
  ctx.fillStyle = "red";

  for (let i = 0, l = pointsList.length, x, y; i < l; i++) {
    x = pointsList[i] + OFFSET_X;
    y = fn(pointsList[i]) + OFFSET_Y;

    ctx.moveTo(x, y);
    ctx.arc(x, y, POINT_RADIUS, 0, DOUBLE_PI);
  }

  ctx.fill();
}
