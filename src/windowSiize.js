import { useState, useEffect } from "react";

export default App = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [size, setSize] = useState(getSize);
  const handleResize = () => setSize(getSize);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return `This window is: ${size.width} × ${size.height}`;
};
