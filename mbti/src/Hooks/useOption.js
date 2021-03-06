import { useState } from "react";

export default defaultValue => {
    defaultValue.map((element, index )=>{
        const [value, setValue] = useState(element);
        const onChange = e => {
          const {
            target: { value }
          } = e;
          setValue(value);
        };
        return { value, onChange, setValue };
    });
};