/**
 * @param (expression: array) expression is pressed on keyboard
 *
 * @return (number) result of expression
 */
export default expression => {
  const postFix = convertInToPostFix(expression).split(',');
  const s = [];

  for (let i = 0, len = postFix.length; i < len; i += 1) {
    if (!isOperator(postFix[i])) {
      s.push(postFix[i]);
    } else if (isOperator(postFix[i])) {
      const op1 = s.pop();
      const op2 = s.pop();
      const res = perform(postFix[i], parseInt(op2, 10), parseInt(op1, 10));
      s.push(res);
    }
  }

  return s;
};

/**
 *
 * @param{operator:string }  one of type ['+', '-', 'x', ':']
 * @param{operand1: number }
 * @param{operand2: number }
 *
 * @result number, caculate base on operator
 */
const perform = (operator, operand1, operand2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case ':':
      result = operand1 / operand2;
      break;
    default:
      result = operand1 * operand2;
      break;
  }

  return result;
};

/**
 * @param (expression: array) expression is pressed on keyboard
 *
 * @return (string) postfix expression. e.g: 12 x 3 => 12, 3, x
 */
const convertInToPostFix = expression => {
  const s = [];
  let res = '';

  for (let i = 0, len = expression.length; i < len; i += 1) {
    if (!isOperator(expression[i])) {
      res += `${expression[i]},`;
    } else {
      while (s.length !== 0 && hasHigherPrec(s[s.length - 1], expression[i])) {
        res += `${s[s.length - 1]},`;
        s.pop();
      }
      s.push(expression[i]);
    }
  }

  while (s.length !== 0) {
    res += `${s[s.length - 1]}`;
    s.pop();
  }

  return res;
};

const hasHigherPrec = (top, keyPressed) => {
  const group1 = ['x', ':'].includes(top) ? 2 : 1;
  const group2 = ['+', '-'].includes(keyPressed) ? 1 : 2;

  return group1 >= group2;
};

export const isOperator = charactor => ['+', '-', 'x', ':'].includes(charactor);
