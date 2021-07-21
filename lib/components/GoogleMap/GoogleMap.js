import React from "react";
import PropTypes from "prop-types";
import "./GoogleMap.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
export const GoogleMap = ({
  mapId,
  header,
  width,
  height
}) => {
  return /*#__PURE__*/React.createElement("div", null, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faMapMarkerAlt
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", {
    className: "map-component",
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.google.com/maps/embed?${mapId}`,
    title: "This is a unique title",
    width: "100%",
    height: "100%",
    frameBorder: "0",
    style: {
      border: 0
    }
  })));
};
GoogleMap.propTypes = {
  mapId: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};