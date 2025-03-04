import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  const countCount = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <>
      <div className="flex gap-2">
        <h1 className="font-bold text-xl ">{count}</h1>
        <button className="p-2 bg-blue-500 rounded-md " onClick={countCount}>+</button>

        {
          count === 4 ?
            <p>hello</p> : <p>hi</p>
        }
      </div>

      {/* <Navbar /> */}
    </>
  )
}

export default App


