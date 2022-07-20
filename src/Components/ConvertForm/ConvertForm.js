import React from "react";
import "./ConvertForm.css";

function FormConvert({ imageOne, imageTwo }) {
  return (
    <div className="parent-container">
      <div className="content">
        <input id="inputValue" />
        <div className="unitField"></div>
      </div>

      <div className="icons">
        <img
          src={imageTwo.icon}
          alt={imageTwo.name}
          width="12px"
          height="12px"
          className="clear-image"
        />
        <img
          src={imageOne.icon}
          alt={imageOne.name}
          width="12"
          height="12"
          className="copy-image"
        />
      </div>
    </div>
  );
}

export default FormConvert;
