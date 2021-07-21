import React from "react";
import PropTypes from "prop-types";
import "./FooterComponent.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithub, faGitter, faMedium } from "@fortawesome/free-brands-svg-icons";
export const FooterComponent = ({
  mainText,
  socialLinks = {}
}) => {
  const {
    facebook,
    gitter,
    twitter,
    github,
    linkedin,
    medium
  } = socialLinks;
  return /*#__PURE__*/React.createElement("div", {
    className: "footer-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("div", {
    className: "social-icons-container"
  }, !facebook || /*#__PURE__*/React.createElement("a", {
    href: facebook
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faFacebook,
    className: "icon"
  })), !gitter || /*#__PURE__*/React.createElement("a", {
    href: gitter
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faGitter,
    className: "icon"
  })), !medium || /*#__PURE__*/React.createElement("a", {
    href: medium
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faMedium,
    className: "icon"
  })), !twitter || /*#__PURE__*/React.createElement("a", {
    href: twitter
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTwitter,
    className: "icon"
  })), !github || /*#__PURE__*/React.createElement("a", {
    href: github
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faGithub,
    className: "icon"
  })), !linkedin || /*#__PURE__*/React.createElement("a", {
    href: linkedin
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faLinkedin,
    className: "icon"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, mainText, " ", new Date().getFullYear())))));
};
FooterComponent.propTypes = {
  mainText: PropTypes.string,
  socialLinks: PropTypes.object
};