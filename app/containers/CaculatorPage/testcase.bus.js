/**
 * @param(param1: number)
 * @param(param2: number)
 * @describe
 * //
 * //
 *
 * @return number: san luong lua
 */
export default function sanluonglua(param1, param2) {
  if (param1 < -1) return 0;

  let result = 0;
  if (param1 > 0) {
    result = param1 * 2;
  } else if (param1 === 0 && param2 > 0) {
    result = param2 * 3 + 0.5;
  }

  return result;
}
