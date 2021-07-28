function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import "./PublicationsList.sass";
import { Container, Row, Col } from 'react-bootstrap';
import PublicationListItem from './PublicationListItem';
import AchievementListItem from "./AchievementListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const PublicationsList = ({
  title,
  items = [],
  limit,
  suffle,
  publications,
  achievements
}) => {
  const suffledItems = suffle ? items.sort(() => Math.random() - 0.5) : items;
  return /*#__PURE__*/React.createElement("div", {
    className: "publications-list-component"
  }, /*#__PURE__*/React.createElement(Container, null, !title || /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, title))), publications ? /*#__PURE__*/React.createElement(Row, null, suffledItems.map((item, i) => !limit || i < limit ? /*#__PURE__*/React.createElement(PublicationListItem, _extends({
    key: i
  }, item)) : null)) : null, achievements ? /*#__PURE__*/React.createElement(Row, null, suffledItems.map((item, i) => !limit || i < limit ? /*#__PURE__*/React.createElement(AchievementListItem, _extends({
    key: i
  }, item)) : null)) : null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "view-all-btn-container"
  }, !limit || /*#__PURE__*/React.createElement("a", {
    href: '/publications',
    className: "publications-many"
  }, "Many More ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faArrowRight
  }))))));
};
PublicationsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  limit: PropTypes.number,
  suffle: PropTypes.bool,
  publications: PropTypes.bool,
  achievements: PropTypes.bool
};