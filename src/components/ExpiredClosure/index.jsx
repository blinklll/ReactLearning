/* 
   对react useState 这个Hook会产生过期闭包的实验
*/

import "./index.less";

import React, { useState } from "react";

function ExpiredClosure(props) {
  
  const [count, setCount] = useState(0);

  function handleClickAsync() {
    setTimeout(function delay() {
      console.log(count);
      setCount(count + 1); // 问题所在：此时的 count 为5s前的count！！！
    }, 5000);
  }

  function handleClickSync() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      {count}
      <button onClick={handleClickAsync}>异步加1</button>
      <button onClick={handleClickSync}>同步加1</button>
    </div>
  );
}

export default ExpiredClosure;
