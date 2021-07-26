import React from "react";
import PropTypes from "prop-types";
import Accordion from "./Accordion";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import "./FaqComponent.sass";
export const FaqComponent = ({
  data,
  header,
  bgColor,
  toggleColor,
  titleColor
}) => {
  return /*#__PURE__*/React.createElement("div", null, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, header, " ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faQuestionCircle
  }))) : null, /*#__PURE__*/React.createElement(Container, {
    className: "faq-container"
  }, data.length >= 1 ? data.map(faq => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Accordion, {
    title: faq.title,
    content: faq.content,
    bgColor: bgColor,
    toggleColor: toggleColor,
    titleColor: titleColor
  }), /*#__PURE__*/React.createElement("hr", {
    style: {
      borderWidth: "0"
    }
  }))) : null));
};
FaqComponent.propTypes = {
  data: PropTypes.array,
  header: PropTypes.string,
  bgColor: PropTypes.string,
  toggleColor: PropTypes.string,
  titleColor: PropTypes.string
};