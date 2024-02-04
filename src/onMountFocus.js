import { useEffect, useRef } from "react";

export default App = () => {
  const inputRef = useRef(0);

  useEffect(() => inputRef.current && inputRef.current.focus(), []);

  return <input ref={inputRef} />;
};
