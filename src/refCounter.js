import { useState, useRef } from "react";

export default App = () => {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const reRender = () => {
    setState(state + 1);
    ref.current++;

    console.clear();
    console.log(`pre-render state value: ${state}
pre-render ref value: ${ref.current}`);
  };

  return (
    <div>
      post-render state value: {state} <br />
      <br />
      post-render ref value: {ref.current} <br />
      <br />
      <button onClick={reRender}>re-render</button>
    </div>
  );
};
