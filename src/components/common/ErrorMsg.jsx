import React from 'react';

const ErrorMsg = ({error}) => {
  return (
    <>
      <strong className='error-style'>{error}</strong>
    </>
  );
};

export default ErrorMsg;