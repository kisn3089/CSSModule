import React, { useEffect, useState } from "react";
import Button from "./atoms/button/Button";
import { Center } from "./styles/GlobalStyle";

function App() {
  // useEffect(() => {
  //   const getFetch = async () => {
  //     const arr = Array.from({ length: 5 }, (_, i) => i);
  //     const map = await Promise.all(
  //       arr.map(
  //         async (_) =>
  //           await fetch("https://catfact.ninja/fact").then((res) => res.json())
  //       )
  //     );
  //     // const response = await Promise.all(map);
  //     console.log(map);
  //   };
  //   // const data = await fetch("https://catfact.ninja/fact").then((res) =>
  //   //   res.json()
  //   // );

  //   getFetch();
  // }, []);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMessage(URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0]);
    }

    // setMessage(e.);
  };

  return (
    <Center>
      <input type="file" accept="image/*" onChange={handleChange} />
      <img src={message} alt={message} width={"50%"} />
      {/* <Button customStyle={{ width: "100px" }} />
      <Button mode="lg" /> */}
    </Center>
  );
}

export default App;
