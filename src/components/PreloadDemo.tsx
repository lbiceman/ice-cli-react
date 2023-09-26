import React, { useState } from "react";

const [name, setName] = useState("小明");

const clickMe = () => {
  setName("小红");
}

function Demo2() {
  return (
    <>
      <h3>demo2组件{name}</h3>
      <span onClick={() => clickMe()}>click me</span>
    </>
  );
}

export default Demo2