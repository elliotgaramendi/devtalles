import { useEffect, useRef, useState } from "react";

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '/',
}

const useCalculator = () => {
  const lastOperation = useRef<Operator | undefined>(undefined);

  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [isCalculated, setIsCalculated] = useState(false);

  const buildNumber = (numberString: string) => {
    if (number.startsWith('0') && numberString === '0' && number.includes('.') === false) return;

    if (number.includes('.') && numberString === '.') return;

    if (
      number.startsWith('0') &&
      numberString !== '0' &&
      number.includes('.') === false &&
      numberString !== '.' ||
      isCalculated === true
    ) {
      setNumber(numberString);
      setIsCalculated(false);
    } else {
      setNumber(number + numberString);
    }
  };

  const clearNumber = () => {
    if (formula === '0') return;

    lastOperation.current = undefined;
    setNumber('0');
    setPrevNumber('');
    setFormula('0');
  };

  const toggleSign = () => setNumber(`${+number * -1}`);

  const delNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const setLastNumber = () => {
    if (formula === '0') return;

    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const addOperation = () => {
    if (formula === '0') return;
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const subtractOperation = () => {
    if (formula === '0') return;
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const multiplyOperation = () => {
    if (formula === '0') return;
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const divideOperation = () => {
    if (formula === '0') return;
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const calculateResult = () => {
    if (formula === '0') return;

    setFormula(`${calculateSubResult()}`);
    lastOperation.current = undefined;
    setPrevNumber('');
    setIsCalculated(true);
  };

  const calculateSubResult = () => {
    const [firstNumber, operator, secondNumber] = formula.split(' ');

    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);

    if (isNaN(number2)) {
      return number1;
    }

    switch (operator) {
      case Operator.add:
        return number1 + number2;
      case Operator.subtract:
        return number1 - number2;
      case Operator.multiply:
        return number1 * number2;
      case Operator.divide:
        return number1 / number2;
      default:
        break;
    }
  };

  useEffect(() => {
    if (lastOperation.current) {
      const formulaPart = formula.split(' ')[0];
      setFormula(`${formulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    prevNumber && setPrevNumber(`${calculateSubResult()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  return {
    formula,
    prevNumber,
    buildNumber,
    clearNumber,
    toggleSign,
    delNumber,
    setLastNumber,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculateResult
  };
};

export default useCalculator;
