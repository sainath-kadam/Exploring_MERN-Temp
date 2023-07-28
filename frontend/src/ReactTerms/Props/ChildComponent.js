import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Greeting: {props.greeting}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default ChildComponent;
