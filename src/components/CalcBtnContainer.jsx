import { useState } from 'react';
import { CalcBtns } from '../CalcBtns';
import CalcBtn from './CalcBtn';

function CalcBtnContainer() {
  const [btns, setBtns] = useState(CalcBtns);

  return (
    <div
      className='h-fit bg-calc-purple-dark grid grid-cols-4 place-content-center place-items-center gap-4 p-4'
      id='btns'
    >
      {btns.map((btn) => (
        <CalcBtn key={btn.id} btn={btn} />
      ))}
    </div>
  );
}

export default CalcBtnContainer;
