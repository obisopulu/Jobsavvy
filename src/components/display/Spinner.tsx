import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center mt-20">
      <div
        className="animate-spin inline-block border-4 border-solid border-t-transparent rounded-full text-center mx-auto"
        style={{ width: 100, height: 100 }}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
