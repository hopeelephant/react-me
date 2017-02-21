import React from "react";
import ReactDOM from "react-dom";
function Hello(){

  return <div>
          <h1>hello</h1>
          <div>{a}</div>
          <div>{a}</div>
          <div>{a}</div>
          <h2>woshixiangwang</h2>
          <h2>woshiwiing</h2>
          <div>{a}</div>
        </div>

}
let a = <h1>hello11111111s</h1>;
ReactDOM.render(
  <Hello />,document.getElementById("app")
)
