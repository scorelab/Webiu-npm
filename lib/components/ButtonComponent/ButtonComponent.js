import React from "react";
import PropTypes from "prop-types";
import "./ButtonComponent.sass";
import { Container, Row, Col } from 'react-bootstrap';
export const ButtonComponent = ({
  heading,
  color,
  buttonText,
  buttonWidth,
  onClick = () => {}
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "button-with-heading-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h1", null, heading), buttonText ? /*#__PURE__*/React.createElement("button", {
    className: "button-main",
    style: {
      width: buttonWidth,
      backgroundColor: color
    },
    onClick: onClick
  }, buttonText) : null))));
};
ButtonComponent.propTypes = {
  heading: PropTypes.string,
  buttonText: PropTypes.string,
  buttonWidth: PropTypes.string,
  onClick: PropTypes.func
};