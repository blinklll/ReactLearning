/* 
    EffectHook 的实践学习
 */
import './index.less'

import React, { useState,useEffect } from "react";


function EffectHook(props) {
  
    const [count, setCount] = useState(0);
  
    useEffect(() => {
        
        document.title = `You clicked ${count} times`;
    });
    return (
      <div className="App">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
      </div>
    );
  }
  
  export default EffectHook;
  