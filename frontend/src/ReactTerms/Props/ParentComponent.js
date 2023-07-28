import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
//   const greeting = 'Hello from Parent Component';
//   const age = 23;

  return (
    <div>
      <ChildComponent greeting=' meet sainath kadam' age='23' />
      <ChildComponent greeting=' meet Ajinkya' age='22' />
    </div>
  );
};

export default ParentComponent;


// passing information in the  child by creating here