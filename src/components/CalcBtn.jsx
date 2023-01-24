import { useContext, useEffect } from 'react';
import GlobalContext from '../GlobalContext';

function CalcBtn({ btn }) {
  const { screenText, setScreenText, setResult, wasPressed, setWasPressed } =
    useContext(GlobalContext);
  const handleClick = () => {
    setScreenText(
      btn.value === '+' ||
        btn.value === '-' ||
        btn.value === '*' ||
        btn.value === '/' ||
        btn.value === '%'
        ? screenText + ' ' + btn.value + ' '
        : screenText + btn.value
    );
  };

  const handleCalculation = () => {
    setResult(screenText);
    setWasPressed(true);
  };

  const handleClear = () => {
    setScreenText('');
    setResult('');
  };

  useEffect(() => {
    const btns = document.querySelectorAll('button');

    const handleEvent = () => {
      setResult('');
      setScreenText('');
      setWasPressed(false);

      btns.forEach((btn) => {
        btn.removeEventListener('click', handleEvent);
      });
    };

    if (screenText !== '') {
      btns.forEach((btn) => {
        btn.addEventListener('click', handleEvent);
      });
    }
  }, [wasPressed]);

  return (
    <button
      className={`${
        btn.background === 'bg-calc-orange-light'
          ? 'bg-calc-orange-light border-orange-300'
          : 'bg-calc-purple-light'
      } rounded-full h-14 w-14 text-purple-200 border-2 border-purple-400`}
      onClick={
        btn.value === '='
          ? handleCalculation
          : btn.value === ''
          ? handleClear
          : handleClick
      }
    >
      {btn.symbol}
    </button>
  );
}

export default CalcBtn;
