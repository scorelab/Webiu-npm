import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";
import "./Spinners.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { propTypes } from "react-bootstrap/esm/Image";
export const Spinners = ({
  spinner,
  animation,
  variant,
  size,
  image,
  icon
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "spinner-component"
  }, image ? /*#__PURE__*/React.createElement("div", {
    className: "image-loader"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "logo",
    className: "preloader img-fluid"
  })) : null, icon ? /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "center",
    icon: faSpinner
  })) : null, spinner ? /*#__PURE__*/React.createElement("div", {
    className: "loader-boot"
  }, /*#__PURE__*/React.createElement(Spinner, {
    className: "bootstrap-spinner",
    animation: animation,
    variant: variant,
    size: size
  })) : null);
};
Spinners.propTypes = {
  animation: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.bool,
  spinner: propTypes.bool
};