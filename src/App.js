import React, { useState } from "react";
import { hot } from "react-hot-loader";

import "./index.css";

const Warning = React.lazy(() => import("./Warning"));

const App = () => {
  const [name, satName] = useState("John");
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1 className="title">Hello, {name}! How are you?</h1>
      <div className="counter-container">
        <div>Counter: {count}</div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <div>
        {count >= 10 && (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        )}
      </div>
    </React.Fragment>
  );
};

export default hot(module)(App);
