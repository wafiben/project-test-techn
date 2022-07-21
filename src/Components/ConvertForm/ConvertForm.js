import React, { useState } from "react";
import "./ConvertForm.css";

function FormConvert({ imageOne, imageTwo, units }) {

  const [inputUnit, setInputUnit] = useState("");
  const handleClear = () => {
    setInputUnit("");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(inputUnit)
  };
  const handleChange = (e) => {
    setInputUnit(e.target.value);
  };
  return (
    <div className="parent-container">
      <div className="content">
        <input
          id="inputValue"
          placeholder="Click to insert value"
          onChange={handleChange}
          value={inputUnit}
        />
        <div className="unitField">
          {units.map((elt, index) => (
            <div className="container-single-unit">
              <h3 key={index} className="single-unit">
                {elt}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="icons">
        <img
          src={imageTwo.icon}
          alt={imageTwo.name}
          width="12px"
          height="12px"
          className="clear-image icon-input"
          onClick={handleCopy}
        />
        <img
          src={imageOne.icon}
          alt={imageOne.name}
          width="12"
          height="12"
          className="copy-image icon-input"
          onClick={handleClear}
        />
      </div>
    </div>
  );
}

export default FormConvert;
