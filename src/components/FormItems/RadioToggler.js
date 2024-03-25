import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioToggler({ option, selected, onChange }) {
  return (
    <div className="radio-togggle shadow">
      {option.map((option) => (
        <label>
          <input type="radio" name="bgType" value={option.value} />
          <div>
            <FontAwesomeIcon icon={option.icon} />
            <span>{option.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
}
