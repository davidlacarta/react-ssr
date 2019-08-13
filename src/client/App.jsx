import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count} clicks</p>
    </section>
  );
}

export default App;
