import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ComingsoonComponent.sass";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
export const ComingsoonComponent = ({
  countdownText,
  header,
  buttonText,
  buttonLink,
  deployDate,
  image,
  message
}) => {
  const [calculated, setCalculated] = useState(null);
  const defaultDate = "1 Jan, 2022 00:00:00";
  var countDownDate;

  if (deployDate) {
    countDownDate = new Date(deployDate).getTime();
  } else {
    countDownDate = new Date(defaultDate).getTime();
  }

  var countdownfunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    setCalculated(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    if (distance < 0) {
      clearInterval(countdownfunction);
      setCalculated("0d 0h 0m 0s");
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "countdown-div"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faHourglassHalf
  }), " ", header)) : null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "left-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "countdown-content-section"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "heading-secondary"
  }, countdownText)), /*#__PURE__*/React.createElement("h1", {
    className: "heading-primary"
  }, calculated), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "colored-text"
  }, message), /*#__PURE__*/React.createElement("br", null), buttonText ? /*#__PURE__*/React.createElement("div", {
    className: "button-div"
  }, /*#__PURE__*/React.createElement("a", {
    href: buttonLink,
    className: "countdown-button"
  }, buttonText)) : null)), /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "right-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "logo",
    className: "countdown-img"
  })))));
};
ComingsoonComponent.propTypes = {
  countdownText: PropTypes.string,
  bottomText: PropTypes.string,
  deployDate: PropTypes.string,
  buttonLink: PropTypes.string,
  message: PropTypes.string,
  image: PropTypes.string,
  header: PropTypes.string
};