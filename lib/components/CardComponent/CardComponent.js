import React from 'react';
import PropTypes from 'prop-types';
import "./CardComponent.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
export const CardComponent = ({
  header,
  data,
  card,
  services,
  buttonLink,
  buttonText
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: card ? faFile : faInfoCircle
  }), " ", header)) : null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, card && data.map((data, index) => /*#__PURE__*/React.createElement(Col, {
    lg: 4,
    key: index,
    className: "card-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-div"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.image,
    className: "card-img",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "item-title"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "title-text"
  }, data.title)), /*#__PURE__*/React.createElement("div", {
    className: "item-description"
  }, /*#__PURE__*/React.createElement("p", null, data.description)), /*#__PURE__*/React.createElement("div", {
    className: "btn-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: data.buttonLink,
    className: "btn"
  }, data.buttonText))))), services && data.map((data, index) => /*#__PURE__*/React.createElement(Col, {
    lg: 4,
    key: index,
    className: "services-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "services-div"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.image,
    className: "services-img",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "services-title"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "services-text"
  }, data.title)), /*#__PURE__*/React.createElement("div", {
    className: "services-description"
  }, /*#__PURE__*/React.createElement("p", null, data.description)))))), services ? /*#__PURE__*/React.createElement("div", {
    className: "btn-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: buttonLink,
    className: "btn"
  }, buttonText)) : null));
};
CardComponent.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  card: PropTypes.bool,
  services: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};