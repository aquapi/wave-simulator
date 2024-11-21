// @ts-check
import { DOUBLE_PI } from "./constants.js";
import state from "./state.js";
import parseExpr from "./parseExpr.js";
import { renderMovingWave } from "./render.js";

renderMovingWave();

// Load function modifiers
{
  /**
   * @type {Record<string, [keyof typeof state, (v: number) => number]>}
   */
  const casts = {
    f: ["w", (v) => v * DOUBLE_PI],
    T: ["w", (v) => DOUBLE_PI / v],
  };

  /**
   * @type {Partial<Record<keyof typeof state, (v: string) => any>>}
   */
  const transforms = {
    waveStyle: (color) => color,
    axisStyle: (color) => color,

    pointsStyle: (color) => color,
    points: (list) => list.split(",").map((item) => +item.trim()),

    textStyle: (color) => color,
  };

  document.querySelectorAll(".modifiers input").forEach((el) => {
    const id = el.id;

    // Modify another value with a scale
    if (id in casts) {
      const [targetId, scale] = casts[id];

      el.addEventListener("keyup", () => {
        // @ts-ignore
        const val = parseExpr(el.value);

        if (typeof val === "number" && val !== 0)
          // @ts-ignore
          state[targetId] = scale(val);
      });
    } else if (id in transforms) {
      // @ts-ignore
      const parse = transforms[id];

      el.addEventListener("keyup", () => {
        // @ts-ignore
        const val = el.value;

        if (val.length !== 0)
          // @ts-ignore
          state[id] = parse(val);
      });
    }

    // Direct modification
    else if (id in state) {
      el.addEventListener("keyup", () => {
        // @ts-ignore
        const val = parseExpr(el.value);

        if (typeof val === "number" && val !== 0)
          // @ts-ignore
          state[id] = val;
      });
    }
  });
}

// Change how the wave moves
{
  /**
   * @type {HTMLButtonElement}
   */
  // @ts-ignore
  const btn = document.querySelector("#toggle-move");

  btn.addEventListener("mousedown", () => {
    btn.innerText = state.moving ? "Continue" : "Stop";
    state.moving = !state.moving;
  });
}

{
  /**
   * @type {HTMLButtonElement}
   */
  // @ts-ignore
  const btn = document.querySelector("#reverse-move");

  btn.addEventListener("mousedown", () => {
    state.reverse = !state.reverse;
  });
}
