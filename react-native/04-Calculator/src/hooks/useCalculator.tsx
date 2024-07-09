import {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '/',
}

const useCalculator = () => {
  const lastOperation = useRef<Operator>();

  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');

  const buildNumber = (numberString: string) => {
    if (
      number.startsWith('0') &&
      numberString === '0' &&
      number.includes('.') === false
    ) {
      return;
    }

    if (number.includes('.') && numberString === '.') {
      return;
    }

    if (
      number.startsWith('0') &&
      numberString !== '0' &&
      number.includes('.') === false &&
      numberString !== '.'
    ) {
      setNumber(numberString);
    } else {
      setNumber(number + numberString);
    }
  };

  const clearNumber = () => {
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
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const calculateResult = () => {
    setFormula(`${calculateSubResult()}`);
    lastOperation.current = undefined;
    setPrevNumber('');
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
    setPrevNumber(`${calculateSubResult()}`);
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
    calculateResult,
  };
};

export default useCalculator;
