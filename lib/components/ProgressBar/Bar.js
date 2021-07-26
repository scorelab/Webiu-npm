import React from "react";
import "./ProgressBar.sass";

const Progress = ({
  bgcolor,
  completed,
  colWidth,
  colHeight,
  text
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-division"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bar-para"
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "bar-container",
    style: {
      height: colHeight,
      width: colWidth
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar-filler",
    style: {
      width: `${completed}%`,
      backgroundColor: bgcolor
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bar-label"
  }, `${completed}%`))));
};

export default Progress;