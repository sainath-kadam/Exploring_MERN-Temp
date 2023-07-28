import React, { useState } from 'react';

const States = () => {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);


  // Jb nice se koi handleIncrement is per  click karega  tb  vo  count  se +1 kar ke  setcount  ki ek se  valeue bada  dega.    
const handleIncrement = () =>{
    setCount(count+1);
}

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default States;

//uper hamane events ka bhi use kar liya .

