import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitthShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfullMessage color="blue">お元気ですか?</ColorfullMessage>
      <ColorfullMessage color="pink">元気です!</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitthShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>٩( 'ω' )و</p>}
    </>
  );
};

//他ファイルでも使う事を明示
export default App;
