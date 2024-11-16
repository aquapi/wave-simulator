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

  document.querySelectorAll("#modifiers input").forEach((el) => {
    const id = el.id;

    if (id in state) {
      el.addEventListener("keyup", () => {
        // @ts-ignore
        const val = parseExpr(el.value);

        if (typeof val === "number" && val !== 0)
          // @ts-ignore
          state[id] = val;
      });
    }

    // Modify another value with a scale
    else if (id in casts) {
      const [targetId, scale] = casts[id];

      el.addEventListener("keyup", () => {
        // @ts-ignore
        const val = parseExpr(el.value);

        if (typeof val === "number" && val !== 0)
          // @ts-ignore
          state[targetId] = scale(val);
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
