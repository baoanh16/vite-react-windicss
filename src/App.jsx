import React from "react";

function App() {
  return (
    <>
      <h1 className="text-3xl <lg:text-xl font-bold underline hover:(text-red-300 bg-yellow-600) hstack">
        Hello world!
      </h1>
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
      >
        Button
      </button>
    </>
  );
}

export default App;
