import React from "react";
import PropTypes from "prop-types";
import "./PageNotFound.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
export const PageNotFound = ({
  image,
  mainText,
  subText,
  header
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-not-found-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faExclamation
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", {
    className: "inner-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "404"
  }), /*#__PURE__*/React.createElement("h1", null, mainText), /*#__PURE__*/React.createElement("p", null, subText ? subText + '|' : null, " Return to ", /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Home"), " page")));
};
PageNotFound.propTypes = {
  image: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string
};