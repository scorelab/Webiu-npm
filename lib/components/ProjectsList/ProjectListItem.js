import React from "react";
import PropTypes from "prop-types";
import "./ProjectsList.sass";
import { Col } from 'react-bootstrap';

const ProjectListItem = ({
  title,
  description,
  image,
  slug
}) => {
  return /*#__PURE__*/React.createElement(Col, {
    md: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-list-item-component",
    onClick: () => window.open(slug)
  }, /*#__PURE__*/React.createElement("img", {
    className: "image",
    alt: "project",
    src: image
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "item-title"
  }, " ", title), /*#__PURE__*/React.createElement("p", {
    className: "item-descriptiom"
  }, description.slice(0, 220).trim(), description.length > 220 ? "..." : ""))));
};

ProjectListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};
export default ProjectListItem;