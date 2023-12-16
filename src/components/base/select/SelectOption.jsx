import React from "react";

function SelectOption({ text, value, defaultChecked = false }) {
  return (
    <option value={value} defaultChecked={defaultChecked}>
      {text}
    </option>
  );
}

export default SelectOption;
