import React from "react";
import PropTypes from "prop-types";
import Progress from "./Bar";
import "./ProgressBar.sass";
export const ProgressBar = ({
  data,
  colWidth,
  colHeight
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-main"
  }, data.map((item, idx) => /*#__PURE__*/React.createElement(Progress, {
    key: idx,
    bgcolor: item.bgcolor,
    completed: item.completed,
    colWidth: colWidth,
    colHeight: colHeight,
    text: item.text
  })));
};
ProgressBar.propTypes = {
  data: PropTypes.array,
  colWidth: PropTypes.string,
  colHeight: PropTypes.string
};