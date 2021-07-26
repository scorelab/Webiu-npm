import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./FaqComponent.sass";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "accordion__section"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: props.bgColor
    },
    className: `accordion ${setActive}`,
    onClick: toggleAccordion
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: props.titleColor
    },
    className: "accordion__title"
  }, props.title), /*#__PURE__*/React.createElement(Chevron, {
    className: `${setRotate}`,
    width: 15,
    fill: props.toggleColor ? props.bgColor : "#24598B"
  })), /*#__PURE__*/React.createElement("div", {
    ref: content,
    style: {
      maxHeight: `${setHeight}`
    },
    className: "accordion__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion__text",
    dangerouslySetInnerHTML: {
      __html: props.content
    }
  })));
}

export default Accordion;