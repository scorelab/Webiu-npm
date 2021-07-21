import React from "react";
import PropTypes from "prop-types";
import "./Partner.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
export const Partner = ({
  header,
  mainText,
  subText,
  buttonText,
  buttonLink,
  image,
  backgroundColor,
  contactLink,
  contactText
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "partner-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faHandshake
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", {
    className: "partner-with-us",
    style: {
      backgroundColor: backgroundColor
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "left-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "partner-content-section"
  }, mainText ? /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "colored-text"
  }, mainText.split(' ')[0]), /*#__PURE__*/React.createElement("span", null, mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null))) : null, /*#__PURE__*/React.createElement("p", null, subText), /*#__PURE__*/React.createElement("div", {
    className: "buttons-div"
  }, contactText ? /*#__PURE__*/React.createElement("a", {
    href: contactLink,
    className: "btn-contact"
  }, contactText) : null, buttonText ? /*#__PURE__*/React.createElement("a", {
    href: buttonLink,
    className: "btn-link"
  }, buttonText) : null))), /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "right-col"
  }, /*#__PURE__*/React.createElement("img", {
    className: "about-image",
    alt: "About",
    src: image
  }))))));
};
Partner.propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  backgroundColor: PropTypes.string,
  contactText: PropTypes.string,
  contactLink: PropTypes.string
};