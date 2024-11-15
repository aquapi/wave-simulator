// @ts-check
// Angle constants
export const DOUBLE_PI = 2 * Math.PI;

/**
 * @type {HTMLCanvasElement}
 */
// @ts-ignore
const canvas = document.querySelector("canvas");
export const WIDTH = canvas.width;
export const HEIGHT = canvas.height;

/**
 * @type {CanvasRenderingContext2D}
 */
// @ts-ignore
export const ctx = canvas.getContext("2d");

// Offsetting
export const OFFSET_X = 50;
export const OFFSET_Y = 225;

// Max w
export const MAX_RENDER_WIDTH = WIDTH - 2 * OFFSET_X;
