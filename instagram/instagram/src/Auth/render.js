import React from 'react';

const withConditionalRender = First => Second => props => {
  if (localStorage.getItem('showFirst')) {
    return <First />;
  }
  return <Second />;
};

export default withConditionalRender;
