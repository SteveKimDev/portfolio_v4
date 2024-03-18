import * as React from 'react';
import DKButton from '../components/00-reusable-components/dk-button';

const PageNotFound = () => {
  return (
    <section style={{ height: '100vh' }}>
      <div className='vertical-horizontal-align-content'>
        <div>
          <h1 className='section-title gradient-color text-align-center'>
            Page Not Found
          </h1>
          <h1 className='text-align-center'>It's time to go home now.</h1>
          <div className='text-align-center m-top-50'>
            <DKButton to='/' text='Go Home' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
