import React from "react";
import PropTypes from "prop-types";
import "./DescriptionComponent.sass";
import { Container, Row, Col } from 'react-bootstrap';
export const DescriptionComponent = ({
  title,
  subTitle,
  image,
  mainText,
  sideComponent
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "description-container-component"
  }, /*#__PURE__*/React.createElement(Container, null, !title || /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, title), !subTitle || /*#__PURE__*/React.createElement("h5", null, subTitle))), !image || /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "description-container-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    className: "description-container-image",
    alt: "Header",
    src: image
  }))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    lg: sideComponent ? 8 : 12
  }, /*#__PURE__*/React.createElement("p", {
    className: "description-container-text"
  }, mainText)), !sideComponent || /*#__PURE__*/React.createElement(Col, {
    lg: 4
  }, /*#__PURE__*/React.createElement("p", {
    className: "description-container-text"
  }, sideComponent.content)))));
};
DescriptionComponent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  mainText: PropTypes.string,
  subTitle: PropTypes.string,
  sideComponent: PropTypes.object
};