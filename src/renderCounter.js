import { useState, useEffect } from "react";

export default App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const [renderCount, setRenderCount] = useState(0);
  const handleRender = () => setRenderCount(renderCount + 1);

  useEffect(() => {
    handleRender();
  }, [count]);

  return (
    <div>
      Count: {count} <br />
      <br />
      <button onClick={handleIncrement}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button> <br />
      <br />
      Renders: {renderCount}
    </div>
  );
};
