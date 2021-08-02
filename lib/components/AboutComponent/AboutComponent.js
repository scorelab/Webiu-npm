import React from "react";
import PropTypes from "prop-types";
import "./AboutComponent.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
export const AboutComponent = ({
  header,
  mainText,
  subText,
  buttonText,
  buttonLink,
  image,
  backgroundColor
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "about-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faInfoCircle
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", {
    className: "about-us",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "left-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-content-section"
  }, mainText ? /*#__PURE__*/React.createElement("h1", {
    className: "about-h1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "colored-text"
  }, mainText.split(' ')[0]), /*#__PURE__*/React.createElement("span", null, mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null))) : null, /*#__PURE__*/React.createElement("p", {
    className: "about-para"
  }, subText), buttonText ? /*#__PURE__*/React.createElement("a", {
    href: buttonLink,
    className: "btn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "about-span"
  }, buttonText)) : null)), /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "right-col"
  }, /*#__PURE__*/React.createElement("img", {
    className: "about-image",
    alt: "About",
    src: image
  }))))));
};
AboutComponent.propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string
};