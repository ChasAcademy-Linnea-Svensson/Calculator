import CalcBtnContainer from './CalcBtnContainer';
import CalcScreen from './CalcScreen';

function Calculator() {
  return (
    <div className='w-96 h-fit rounded-xl overflow-hidden'>
      <div className='bg-calc-purple-dark h-10 flex items-center justify-center'>
        <h1 className='text-purple-200 font-medium'>
          <span className='text-calc-orange-dark'>Calcu</span>lator
        </h1>
      </div>
      <CalcScreen />
      <CalcBtnContainer />
    </div>
  );
}
export default Calculator;
