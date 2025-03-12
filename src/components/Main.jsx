import React, { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log(`The count is ${count}`);
  }, [count]);
  return (
    <div>
      <span onClick={increase}>{count}</span>
    </div>
  );
};

export default Main;
