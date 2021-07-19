import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      Hello, i am {name}.
    </div>
  );
}

export default Hello;
