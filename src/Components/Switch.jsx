import React from "react";
import "../styles/Switch.css";

function Switch({ checked, setChecked, id }) {
  return (
    <>
      <input
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
    </>
  );
}

export default Switch;
