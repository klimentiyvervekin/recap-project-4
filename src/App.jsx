// APP.JSX (LOGIC FOR ADD AND DELETE)

import { initialColors } from "./lib/colors";               // our initial colors array
import Color from "./Components/Color/Color";               // our one color card with text and so on
import ColorForm from "./Components/ColorForm/ColorForm";   // our form
import useLocalStorageState from "use-local-storage-state"; // to save cards in local storage

function App() {
  
  const [colors, setColors] = useLocalStorageState("colors", {defaultValue: initialColors,});  // our default colors saved in local storage
//-----------------------------------------------------------//
  // function to add new colors (text & background) to the list
  function handleAddColor({ role, hex, contrastText }) {
    const newColor = {
      id: crypto.randomUUID(),  // crypto.randomUUID() is intern browser function to create unique id
      role,                     // role: colorData.role,
      hex,                      // hex: colorData.hex,
      contrastText,             // contrastText: colorData.contrastText,
    };

    // add new color to new array to the beginning of initialColors array
    setColors((prevColors) => [newColor, ...prevColors]); // ...prevColors to keep previous colors, setColors to update colors state
  }
  //-----------------------------------------------------------//
  // function to delete color (by id)
  function handleDeleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id)); // id is our card id. color.id is each card id in our list. filter make new array without the deleted card
  }
//-----------------------------------------------------------//
  // function to edit color (by id)
  function handleEditColor(id, data) {                         // data is what user changed in the form
    setColors((prevColors) =>                                  // prevColors is a old color cards that we had before 
      prevColors.map((color) =>                                // map is like "go through each color card and make new array"
        color.id === id ? { ...color, ...data } : color        // if our color card id is equal to id that we edit, then change old colors text etc with new information, if not equal then just return old color
      )
    );
  }
//-----------------------------------------------------------//
  return (
    <>
      <h1>Theme Creator</h1>
      {/* add colors from ColorForm.jsx and a new color from handleAddColor */}
      <ColorForm onSubmitColor={handleAddColor} />
      {/* show list of cards: */}
      {colors.map((color) => (
        <Color key={color.id} color={color} onDelete={handleDeleteColor} onEdit={handleEditColor} />
      ))}
    </>
  );
}

export default App; // export App function to be rendered in main.jsx