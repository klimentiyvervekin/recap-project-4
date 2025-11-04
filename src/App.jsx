import { useState } from "react";
import { initialColors } from "./lib/colors"; // our initial colors array
import Color from "./Components/Color/Color"; // our one color card with text and so on
import ColorForm from "./Components/ColorForm/ColorForm"; // our form

function App() {
  const [colors, setColors] = useState(initialColors); // our initial colors from colors.js

  // function to add new colors (text & background) to the list
  function handleAddColor({ role, hex, contrastText }) {
    const newColor = {
      id: crypto.randomUUID(), // crypto.randomUUID() is intern browser function to create unique id
      role,
      hex,
      contrastText,
    };

    // add new color to the beginning of initialColors array
    setColors((prevColors) => [newColor, ...prevColors]); // ...prevColors to keep previous colors, setColors to update colors state
  }

  return (
    <>
      <h1>Theme Creator</h1>
      {/* СolorForm to add colors from ColorForm.jsx and a new color */}
      <ColorForm onSubmitColor={handleAddColor} />{" "}
      {/* there are the same onSubmitColor and handleAddColor */}
      {/* UI list of colors */}
      {colors.map((color) => (
        <Color key={color.id} color={color} /> // Color.jsx to display each color. key for React to track items
      ))}
    </>
  );
}

export default App; // export App function to be rendered in main.jsx
