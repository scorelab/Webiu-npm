import React from 'react';
import PropTypes from 'prop-types';
import "./Statistics.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
export const Statistics = ({
  header,
  title,
  description,
  data,
  image
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "statistics-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faSignal
  }), " ", header)) : null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "stats-col"
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", null, description), /*#__PURE__*/React.createElement(Row, {
    className: "stats-row"
  }, data.map((data, index) => /*#__PURE__*/React.createElement(Col, {
    md: 4,
    xs: 6
  }, /*#__PURE__*/React.createElement("h2", {
    className: "stats-name"
  }, data.stat), /*#__PURE__*/React.createElement("p", {
    className: "stats-para"
  }, data.name))))), /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-img-div"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "logo",
    className: "stats-image"
  }))))));
};
Statistics.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};