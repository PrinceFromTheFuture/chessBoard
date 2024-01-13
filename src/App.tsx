import { useState } from "react";
import { Board } from "./components/general/Board";

const App = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className=" flex justify-center items-center "
    >
      <Board />
    </div>
  );
};

export default App;
