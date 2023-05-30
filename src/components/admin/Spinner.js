import React from 'react';

const Spinner = () => {
  return (
    <div class="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
      <span class="sr-only">Chargement...</span>
    </div>
  );
};

export default Spinner;
