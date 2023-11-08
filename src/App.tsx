import React from "react";
import Button from "./atoms/button/Button";

function App() {
  return (
    <div className="App">
      <Button mode="s" />
      <Button customStyle={{ width: "100px" }} />
      <Button mode="lg" />
    </div>
  );
}

export default App;
