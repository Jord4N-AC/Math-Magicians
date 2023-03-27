import { calcButtons } from './variables';

const digitClass = 'digit-button';
const operatorClass = 'operator-button';
const bigBtnClass = 'big-btn';

const digitRegex = /[0-9.]/;
const operatorRegex = /^(AC|\+\/-|%|÷|x|-|\+|=)$/;

const digitButtons = calcButtons.filter((btn) => digitRegex.test(btn));
const operatorButtons = calcButtons.filter((btn) => operatorRegex.test(btn));

const handleClassName = (button) => {
  let classValue = '';
  const isDigit = digitButtons.includes(button);
  const isOperator = operatorButtons.includes(button);

  if (isDigit) {
    classValue = button === '0' ? `${digitClass} ${bigBtnClass}` : digitClass;
  } else if (isOperator) {
    classValue = operatorClass;
  }
  return classValue;
};

export default handleClassName;
