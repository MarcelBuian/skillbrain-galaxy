import React from "react";
import "./Input.css";

const TextArea = ({value, onValueChange}) => {
  return <textarea
    className="primary-input textarea"
    rows="3"
    placeholder="Description"
    value={value}
    onChange={(e) => {onValueChange(e.target.value)}}
  />;
};

export default TextArea;
