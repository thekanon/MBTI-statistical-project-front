import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);
  const onChange = e => {
      console.log(e.target.value)
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};