/**
 * A math expression parser
 * @param {string} str
 */
export default (str) => {
  // Fast path
  if (!isNaN(+str)) return +str;

  return null;
};
