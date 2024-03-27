import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioToggler({ option, defaultValue, onChange }) {
  return (
    <div className="radio-togggle shadow">
      {option.map((option,index) => (
        <label key={index}>
          <input
            type="radio"
            name="bgType"
            onClick={ev =>onChange(ev.target.value)}
            defaultChecked={defaultValue=== option.value}
            value={option.value} />
          <div>
            <FontAwesomeIcon icon={option.icon} />
            <span>{option.label}</span>
          </div>
        </label>
      ))}
    </div>
  );
}
