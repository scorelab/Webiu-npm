import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';
import "./ProjectDetail.sass";
import { ImageGrid } from "../ImageGrid";
import { LinksList } from "../LinksList/LinksList";
export const ProjectDetail = ({
  project
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "project-detail-component"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-detail-header-container"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Logo",
    src: project.image
  }), /*#__PURE__*/React.createElement("h1", null, project.title)), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "project-detail-section-container"
  }, /*#__PURE__*/React.createElement("h3", null, "Description"), /*#__PURE__*/React.createElement("p", null, project.description), project.screenshots ? /*#__PURE__*/React.createElement("h3", null, "Screen Shots") : null, project.screenshots ? /*#__PURE__*/React.createElement(ImageGrid, {
    images: project.screenshots
  }) : null, project.links ? /*#__PURE__*/React.createElement("h3", null, "Contribute") : null, project.links ? /*#__PURE__*/React.createElement(LinksList, {
    links: project.links
  }) : null))), /*#__PURE__*/React.createElement("br", null));
};
ProjectDetail.propTypes = {
  project: PropTypes.object
};