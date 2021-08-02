import React from "react";
import PropTypes from "prop-types";
import "./Timeline.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
export const Timeline = ({
  data,
  header,
  height
}) => {
  const TimelineItem = ({
    data
  }) => /*#__PURE__*/React.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-item-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: data.category.color
    }
  }, data.category.tag), /*#__PURE__*/React.createElement("time", null, /*#__PURE__*/React.createElement("span", {
    className: "data-time"
  }, data.date)), /*#__PURE__*/React.createElement("p", {
    className: "data-text"
  }, data.text), data.link && /*#__PURE__*/React.createElement("a", {
    className: "data-link",
    href: data.link.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, data.link.text), /*#__PURE__*/React.createElement("span", {
    className: "circle"
  })));

  return /*#__PURE__*/React.createElement("div", {
    className: "timeline-container",
    style: {
      maxHeight: height
    }
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faRoad
  }), " ", header)) : null, data && data.map((data, idx) => /*#__PURE__*/React.createElement(TimelineItem, {
    data: data,
    key: idx
  })));
};
Timeline.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array,
  height: PropTypes.string
};