import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AnnouncementComponent.sass";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
export const AnnouncementComponent = ({
  data,
  header,
  direction,
  speed,
  horizontal,
  title
}) => {
  const [scrollAmount, setScrollAmount] = useState(speed);
  return /*#__PURE__*/React.createElement("div", {
    className: "announcements-section"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faBullhorn
  }), " ", header)) : null, !horizontal ? /*#__PURE__*/React.createElement("div", {
    className: "marquee-div"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "marquee-heading"
  }, /*#__PURE__*/React.createElement("p", {
    className: "marquee-para"
  }, title)) : null, /*#__PURE__*/React.createElement("div", {
    className: "marquee-main"
  }, /*#__PURE__*/React.createElement("marquee", {
    direction: direction,
    scrollAmount: scrollAmount
  }, data ? data.map((item, index) => /*#__PURE__*/React.createElement("div", {
    key: index
  }, /*#__PURE__*/React.createElement("a", {
    href: item.link,
    className: "marquee-anchor"
  }, /*#__PURE__*/React.createElement("p", {
    className: "marquee-anchor-para"
  }, item.text)))) : null))) : null, horizontal ? /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "horizontal-marquee"
  }, /*#__PURE__*/React.createElement("marquee", {
    direction: direction,
    scrollAmount: scrollAmount
  }, data ? data.map((item, id) => /*#__PURE__*/React.createElement("div", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    href: item.link,
    className: "marquee-anchor"
  }, /*#__PURE__*/React.createElement("p", null, item.text)))) : null))) : null);
};
AnnouncementComponent.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  direction: PropTypes.string,
  speed: PropTypes.string,
  horizontal: PropTypes.bool,
  title: PropTypes.string
};