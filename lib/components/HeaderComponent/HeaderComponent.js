import React from "react";
import PropTypes from "prop-types";
import "./HeaderComponent.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const HeaderComponent = ({
  mainText,
  subText,
  icon,
  buttonText,
  buttonLink,
  image,
  small,
  backgroundColor
}) => {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${'../ContactComponent/images/dots.png'})`
    },
    className: "header-component"
  }, /*#__PURE__*/React.createElement(Container, null, small ? /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "small-header-col"
  }, /*#__PURE__*/React.createElement("h1", null, !icon || /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: icon,
    className: "icon"
  }), " ", mainText))) : /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "left-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-content-section"
  }, mainText ? /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "colored"
  }, mainText.split(' ')[0]), /*#__PURE__*/React.createElement("span", null, mainText.split(' ').map((t, i) => i !== 0 ? ' ' + t : null))) : null, /*#__PURE__*/React.createElement("p", {
    className: "sub-text"
  }, subText), /*#__PURE__*/React.createElement("a", {
    href: buttonLink,
    className: "btn"
  }, buttonText))), image ? /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "right-col"
  }, /*#__PURE__*/React.createElement("img", {
    className: "main-image",
    alt: "Header",
    src: image
  })) : null)));
};
HeaderComponent.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string
};