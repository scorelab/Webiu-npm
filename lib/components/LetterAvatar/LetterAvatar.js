import React from "react";
import PropTypes from "prop-types";
import "./LetterAvatar.sass";
export const LetterAvatar = ({
  name,
  bgColor
}) => {
  const backColor = bgColor ? bgColor : "#51ad28";
  return /*#__PURE__*/React.createElement("div", {
    className: "letter-avatar-component"
  }, /*#__PURE__*/React.createElement("div", {
    className: "letter-avatar-container",
    style: {
      backgroundColor: backColor
    }
  }, !name || /*#__PURE__*/React.createElement("span", {
    className: "letter-avatar-text"
  }, name.slice(0, 1).toUpperCase())));
};
LetterAvatar.propTypes = {
  name: PropTypes.string,
  bgColor: PropTypes.string
};