import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';
import "./Timestamp.sass";
export const Timestamp = ({
  image,
  firstName,
  buttonText,
  buttonLink,
  message
}) => {
  const locale = 'en';
  const [today, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const day = today.toLocaleDateString(locale, {
    weekday: 'long'
  });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long'
  })}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${hour < 12 && 'Morning' || hour < 17 && 'Afternoon' || 'Evening'}, `;
  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    second: 'numeric'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: `url(${"../ContactComponent/images/dots.png"}})`
    },
    className: "timestamp-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "left-timestamp-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timestamp-content-section"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("span", {
    className: "heading-primary"
  }, wish), " ", /*#__PURE__*/React.createElement("span", {
    className: "heading-secondary"
  }, firstName)), /*#__PURE__*/React.createElement("h4", {
    className: "heading-secondary"
  }, date), /*#__PURE__*/React.createElement("h4", {
    className: "heading-secondary"
  }, time), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "colored-text"
  }, message), buttonText ? /*#__PURE__*/React.createElement("a", {
    href: buttonLink,
    className: "timestamp-button"
  }, buttonText) : null)), /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "right-col"
  }, /*#__PURE__*/React.createElement("img", {
    className: "about-image",
    alt: "About",
    src: image
  })))));
};
Timestamp.propTypes = {
  image: PropTypes.string,
  firstName: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  message: PropTypes.string
};