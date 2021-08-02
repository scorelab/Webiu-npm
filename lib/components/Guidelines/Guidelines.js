import React from "react";
import PropTypes from "prop-types";
import "./Guidelines.sass";
import { Container, Row, Col } from 'react-bootstrap';
export const Guidelines = ({
  heading,
  description,
  guidelines,
  image
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "guide-lines-component",
    style: {
      backgroundImage: 'url(./images/dots.png)'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h1", {
    className: "guidelines-h1"
  }, heading), /*#__PURE__*/React.createElement("h2", {
    className: "guidelines-h2"
  }, description), /*#__PURE__*/React.createElement("ol", {
    className: "guidelines-ol"
  }, !guidelines || guidelines.map((guideline, i) => /*#__PURE__*/React.createElement("li", {
    className: "guidelines-li",
    key: i
  }, guideline)))), image ? /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("img", {
    alt: "logo",
    src: image,
    style: {
      maxWidth: "400px"
    }
  })) : null)));
};
Guidelines.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  guidelines: PropTypes.array
};