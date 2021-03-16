import React, { useState } from 'react';

const App = () => {
  // 状態をつかう
  // const output = useState(0);

  // js の分割代入
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const divide3 = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  );

  return (
    // <React.Fragment>
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>

      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>3 の倍数のときだけ 3 で割る</button>
      </div>
    </>
    // </React.Fragment>
  );
}

export default App;
