import { useContext } from 'react';
import GlobalContext from '../GlobalContext';

function CalcScreen() {
  const { screenText, result } = useContext(GlobalContext);

  return (
    <div className='h-28 bg-calc-purple-light flex flex-col justify-center items-end pr-8 text-xl'>
      <div className='text-purple-200'>{screenText}</div>
      <div className='text-calc-orange-dark'>
        {result === '' ? (
          ''
        ) : (
          <>
            <span className='text-purple-200'>= </span>
            {eval(result)}
          </>
        )}
      </div>
    </div>
  );
}

export default CalcScreen;
