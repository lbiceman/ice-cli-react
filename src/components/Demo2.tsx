import { useState } from "react";

const [name, setName] = useState("小明");

function Demo2() {
  return (
    <h3>demo2组件{name}</h3>
  );
}

export default Demo2