import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Stepper.sass";
export const Stepper = ({
  steps,
  direction,
  currentStep = 1
}) => {
  const [stepState, setStepState] = useState([]);
  useEffect(() => {
    let createSteps = steps.map((step, idx) => ({
      description: step,
      completed: idx < currentStep - 1,
      selected: idx <= currentStep - 1,
      highlighted: idx === currentStep - 1
    }));
    setStepState(createSteps);
  }, [steps, currentStep]);
  return /*#__PURE__*/React.createElement("div", {
    className: `stepper-container-${direction}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `stepper-wrapper-${direction}`
  }, stepState.map(({
    selected,
    completed,
    highlighted,
    description
  }, idx) => /*#__PURE__*/React.createElement("div", {
    className: "step-wrapper",
    key: idx
  }, /*#__PURE__*/React.createElement("div", {
    className: `step-number step-number-${selected ? "selected" : "disabled"}`
  }, completed ? "🗸" : idx + 1), /*#__PURE__*/React.createElement("div", {
    className: `step-description ${highlighted ? "step-description-active" : ""}`
  }, description), idx + 1 !== stepState.length && /*#__PURE__*/React.createElement("div", {
    className: `divider-line divider-line-${stepState.length}`
  })))));
};
Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired
};