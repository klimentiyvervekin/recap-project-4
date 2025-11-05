// COLOR FORM TO INPUT NEW DATA

import ColorInput from "../ColorInput/ColorInput";         // import input function from ColorInput.jsx

export default function ColorForm({                        // function ColorForm need to submit new color and text
  onSubmitColor,                                           // function onSubmitColor as a proop from App.jsx to add new color
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" }, // default input values
}) {
  function handleSubmit(event) {                           // function to submit color if user clicks the button
    event.preventDefault();
    const formData = new FormData(event.target);           // get all data from the form that user filled
    const data = Object.fromEntries(formData);             // convert form data to js object
    onSubmitColor(data);                                   // call the function from App.jsx and give our const data
    event.target.reset();                                  // reset form
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" defaultValue={initialData.role} /> {/* input for role name */}

      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" defaultValue={initialData.hex} /> {/* input for hex value from ColorInput.jsx */}

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" defaultValue={initialData.contrastText} /> {/* input for contrast text from ColorInput.jsx */}

      <button>ADD COLOR</button> {/* button for submit our form */}
    </form>
  );
}

// data is an object with new data from the form that user inputted