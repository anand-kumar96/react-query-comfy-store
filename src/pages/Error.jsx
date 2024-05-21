import { Link, useRouteError } from 'react-router-dom';
import ErrorSvg from './../assets/error.svg'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404)
    return (
      <main className='grid min-h-[100vh] place-items-center px-8' >
      <div className='text-center'>
        <p className='text-9xl font-semibold text-primary'>404</p>
        <h1 className='text-4xl mt-5 font-bold tracking-tight sm:text-5xl'>Page not found</h1>
        <p className='text-lg mt-5 leading-6'>Sorry, we couldn’t find the page you’re looking for.</p>
        <Link to={'/'} className='btn btn-primary mt-8 font-semibold text-md' >Go back home</Link>
      </div>
      </main>
    );

  return (
    <main className='grid min-h-[100vh] justify-center place-content-start px-8 py-16 '>
      <div className="text-center">
      <img src={ErrorSvg} className='h-96 w-auto object-fill'/>
      <h4 className='text-center font-bold text-4xl md:pt-10 md:text-5xl text-secondary'>Something went wrong..</h4>
      <Link to={'/'} className='btn btn-primary mt-8 font-semibold text-md' >Go back home</Link>
      </div>
    </main>
  );
};

export default Error