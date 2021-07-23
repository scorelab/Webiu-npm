import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
export const NavBar = ({
  logo,
  links = [],
  logoStyle
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "nav-bar-component "
  }, /*#__PURE__*/React.createElement(Navbar, {
    className: "nav-bar-custom",
    expand: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-container",
    style: logoStyle
  }, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: logo,
    alt: "logo"
  }))), /*#__PURE__*/React.createElement(Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav",
    className: "toggle"
  }), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/React.createElement(Nav, {
    className: "justify-content-end",
    style: {
      width: "100%"
    }
  }, links.map(link => !link.isExternal ? /*#__PURE__*/React.createElement(Nav.Link, {
    key: link.path,
    to: link.path,
    className: link.isSpecial ? "special" : "",
    style: {
      backgroundColor: null
    }
  }, link.name) : /*#__PURE__*/React.createElement(Nav.Link, {
    href: link.path,
    target: "_blank",
    className: link.isSpecial ? "special" : ""
  }, link.name, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faExternalLinkAlt
  })))))));
};
NavBar.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array,
  logoStyle: PropTypes.object
};