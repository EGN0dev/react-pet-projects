import React, { useState } from 'react';

enum Signs  {
  Empty,
  Plus,
  Minus,
  Multiply,
  Divide
};

export default function Calculator() {
  const [buttonsColor] = useState("border-black border-2 rounded-full w-20 h-20 bg-white relative");
  const [firstVHolder, setFirstVHolder] = useState('');
  const [secondVHolder, setSecondVHolder] = useState('');
  const [result, setResult] = useState('');
  const [functionAllower, setFunctionAllower] = useState(true);
  const [signValue, setSignValue] = useState(Signs.Empty);

  const resultLimit = () => {
    if (result !== '') setResult(prev => prev + '2');
  };

  const clear = () => {
    setResult('');
    setFirstVHolder('');
    setSecondVHolder('');
    setFunctionAllower(true);
  };

  const signHandler = (sign:any) => {
    setSignValue(sign);
    setFirstVHolder(result);
    setSecondVHolder('');
    setResult('');
  };

  const addMinus = () => {
    if (result !== '') setResult((parseInt(result) * -1).toString());
  };

  const equalSign = () => {
    const second = result;
    setSecondVHolder(second);

    if (firstVHolder && second && functionAllower) {
      let numHolder = 0;
      const a = parseFloat(firstVHolder);
      const b = parseFloat(second);

      switch (signValue) {
        case Signs.Plus:
          numHolder = a + b;
          break;
        case Signs.Minus:
          numHolder = a - b;
          break;
        case Signs.Multiply:
          numHolder = a * b;
          break;
        case Signs.Divide:
          numHolder = a / b;
          break;
        default:
          break;
      }

      setResult(numHolder.toString());
      setFunctionAllower(false);
    }
  };

  const appendNumber = (n:any) => {
    setResult((prev) => (prev === '0' ? n : prev + n));
  };

  const comma = () => {
    if (!result.includes(".")) {
      if (result !== '') setResult(prev => prev + '.');
    }
  };

  const button = (label:any, onClick:any) => (
    <button className={buttonsColor} onClick={onClick}>{label}</button>
  );

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="border-black border-2 rounded-2xl bg-neutral-400 h-[700px] w-[400px]">
        <div>
          <p className="border-black border-2 rounded-3xl h-[80px] w-[350px] mt-[40px] ml-[25px] mb-[40px] text-6xl bg-white">
            {result.substring(0, 9)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 ml-[30px]">
          {button('.', comma)}
          {button('p/m', addMinus)}
          {button('/', () => signHandler(Signs.Divide))}
          {button('x', () => signHandler(Signs.Multiply))}
          {button('+', () => signHandler(Signs.Plus))}
          {button('-', () => signHandler(Signs.Minus))}
          {button('7', () => appendNumber('7'))}
          {button('8', () => appendNumber('8'))}
          {button('9', () => appendNumber('9'))}
          {button('4', () => appendNumber('4'))}
          {button('5', () => appendNumber('5'))}
          {button('6', () => appendNumber('6'))}
          {button('1', () => appendNumber('1'))}
          {button('2', () => appendNumber('2'))}
          {button('3', () => appendNumber('3'))}
          {button('C', clear)}
          {button('0', () => appendNumber('0'))}
          {button('=', equalSign)}
        </div>
      </div>
    </div>
  );
}
  


