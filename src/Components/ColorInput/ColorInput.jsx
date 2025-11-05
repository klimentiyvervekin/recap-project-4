// COLOR INPUT (TEXT AND COLOR)

import { useState } from "react";

export default function ColorInput({ id, defaultValue }) { {/* id and defaultValue are props from ColorForm */}
  const [value, setValue] = useState(defaultValue);

  // function handleChange -> function to make changes of input
  function handleChange(event) {
    setValue(event.target.value); // handleChange is to update and save what user types or picks
  }

  return (
    // <> </> -- fragment to return elements without adding extra html tags to the DOM
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
      />
      {/* text input to write hex color value */}
      <input type="color" value={value} onChange={handleChange} />
      {/* color input to pick color. type=color is HTML thing to work with RGB colors */}
    </>
  );
}
