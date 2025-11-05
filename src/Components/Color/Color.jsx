// COLOR CARD TO DISPLAY EACH COLOR WITH TEXT AND DELETE OPTION

import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm"; // import ColorForm to edit color

// color function to display each color card with text and delete option
export default function Color({ color, onDelete, onEdit }) {

  const [confirmDelete, setConfirmDelete] = useState(false); // false because user dont delete yet
  const [isEditing, setIsEditing] = useState(false); // false because user is not editing yet

  // if isEditing is true show this form
  if (isEditing) {
    return (
      <div
        className="color-card"
        style={{ background: color.hex, color: color.contrastText }}
      >
        <h3 className="color-card-headline">{color.hex}</h3>

        <ColorForm                       // use ColorForm to edit color
          initialData={color}            // initialData is a prop from ColorForm.jsx to fill form with current color data
          onSubmitColor={(data) => {     // onSubmitColor is a prop from ColorForm.jsx to submit new data (function handleSubmit)
            onEdit(color.id, data);      // call onEdit (function handleEditColor) function from App.jsx with color.id and new data that user inputted
            setIsEditing(false);         // after submit turn off form and show color card again
          }}
        />

        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {/* confirm delete or cancel; edit */}
      {!confirmDelete ? (
        <>
          <button onClick={() => setConfirmDelete(true)}>DELETE</button>{" "}    {/* if user clicks delete, go to !confirmDelete false */}
          <button onClick={() => setIsEditing(true)}>EDIT</button>{" "}          {/* if user clicks edit, go to isEditing true */}
        </>
      ) : (
        <>
          <p>Really delete?</p>
          <button onClick={() => onDelete(color.id)}>Confirm Delete</button>     {/* if user clicks confirm delete, call onDelete={handleDeleteColor} function from App.jsx with color.id */}
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>        {/* cancel delete (go to false again) */}
        </>
      )}
    </div>
  );
}

// { ... ? ( ... ) : ( ... ) } -- if true show first part, if false show second part