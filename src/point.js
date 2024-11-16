// @ts-check
import { ctx, DOUBLE_PI } from "./constants.js";
import { calcPosFixed } from "./vec.js";

// Point list
const POINT_RADIUS = 6;

/**
 * @type {number[]}
 */
export const pointsList = [120, 235, 345, 472];

export default function renderPoints() {
  ctx.beginPath();
  ctx.fillStyle = "red";

  for (let i = 0, l = pointsList.length, arr; i < l; i++) {
    arr = calcPosFixed(pointsList[i]);

    ctx.moveTo(...arr);
    ctx.arc(...arr, POINT_RADIUS, 0, DOUBLE_PI);
  }

  ctx.fill();
}
