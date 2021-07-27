import React from "react";
import PropTypes from "prop-types";
import "./JobOpenings.sass";
import { Container, Row, Col } from 'react-bootstrap';
export const JobOpenings = ({
  title,
  openings
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "job-openings-container-component"
  }, /*#__PURE__*/React.createElement(Container, null, !title || /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, title))), openings && openings.length >= 1 ? /*#__PURE__*/React.createElement(Row, null, openings.map((opening, i) => /*#__PURE__*/React.createElement(Col, {
    key: i
  }, /*#__PURE__*/React.createElement("h5", null, opening.title), /*#__PURE__*/React.createElement("p", null, opening.description), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: opening.applyLink,
    target: "_blank",
    rel: "noreferrer"
  }, "Apply here")), /*#__PURE__*/React.createElement("ul", null, opening.skillRequirements.map((skill, i) => /*#__PURE__*/React.createElement("li", {
    key: `${skill}-${i}`
  }, skill)))))) : /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("p", null, "Thanks for showing interest in working with us! Stay tuned for more opportunity updates"))));
};
JobOpenings.propTypes = {
  title: PropTypes.string,
  openings: PropTypes.array
};