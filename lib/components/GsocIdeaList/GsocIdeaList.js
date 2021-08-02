import React from "react";
import PropTypes from "prop-types";
import "./GsocIdeaList.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { Collapse } from 'antd';
const {
  Panel
} = Collapse;
export const GsocIdeaList = ({
  heading,
  description,
  listItems,
  previousProjects,
  defaultActiveKeys = []
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "gsoc-idea-list-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, !heading || /*#__PURE__*/React.createElement("h1", {
    className: "past-h1"
  }, heading), !description || /*#__PURE__*/React.createElement("h2", {
    className: "past-h2"
  }, description), /*#__PURE__*/React.createElement(Collapse, {
    accordion: true
  }, !listItems || listItems.map((item, i) => /*#__PURE__*/React.createElement(Panel, {
    header: item.title,
    key: `${i + 1}`
  }, /*#__PURE__*/React.createElement("h4", {
    className: "past-h4"
  }, "Description"), /*#__PURE__*/React.createElement("p", {
    className: "past-p",
    dangerouslySetInnerHTML: {
      __html: item.description
    }
  }), /*#__PURE__*/React.createElement("h4", {
    className: "past-h4"
  }, "Expected Results"), /*#__PURE__*/React.createElement("p", {
    className: "past-p",
    dangerouslySetInnerHTML: {
      __html: item.expectedresults
    }
  }), /*#__PURE__*/React.createElement("h4", {
    className: "past-h4"
  }, "Required Knowledge"), /*#__PURE__*/React.createElement("p", {
    className: "past-p"
  }, item.requiredknowledge), /*#__PURE__*/React.createElement("h4", {
    className: "past-h4"
  }, "Possible Mentors"), /*#__PURE__*/React.createElement("p", {
    className: "past-p"
  }, item.possiblementors), /*#__PURE__*/React.createElement("h4", {
    className: "past-h4"
  }, "Github Url"), /*#__PURE__*/React.createElement("a", {
    href: item.githuburl
  }, item.githuburl)))))), previousProjects ? /*#__PURE__*/React.createElement(Row, {
    className: "button-row"
  }, /*#__PURE__*/React.createElement(Col, {
    lg: 12
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "past-h1"
  }, "Past Years GSoC Projects")), /*#__PURE__*/React.createElement("hr", null)), previousProjects ? previousProjects.map(project => /*#__PURE__*/React.createElement(Col, {
    lg: 3,
    md: 6,
    sm: 6,
    xs: 6
  }, /*#__PURE__*/React.createElement("a", {
    className: "past-a",
    href: project.link,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "gsoc-button"
  }, project.year)))) : null) : null));
};
GsocIdeaList.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  listItems: PropTypes.array,
  defaultActiveKeys: PropTypes.array
};