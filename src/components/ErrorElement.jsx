import {useRouteError } from 'react-router-dom';
import ErrorSvg from './../assets/error.svg'

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main className='grid min-h-[100vh] justify-center place-content-start px-8 py-4 '>
      <div className="text-center">
      <img src={ErrorSvg} className='h-96 w-auto object-fill'/>
      <h4 className='text-center font-semibold text-4xl mt-8 text-secondary'>Something went wrong..</h4>
      </div>
    </main>
  );
};

export default  ErrorElement;
