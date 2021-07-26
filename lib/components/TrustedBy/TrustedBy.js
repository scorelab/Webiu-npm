import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';
import "./TrustedBy.sass";
export const TrustedBy = ({
  data,
  title,
  description,
  column
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "trusted-by"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "logo-div"
  }, /*#__PURE__*/React.createElement(Row, {
    className: "trusted-div"
  }, data && data.map((data, index) => /*#__PURE__*/React.createElement(Col, {
    md: column,
    key: index,
    className: "org-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.img,
    alt: "logo",
    className: "trust-logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, data.text))))));
};
TrustedBy.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  coloumn: PropTypes.string
};