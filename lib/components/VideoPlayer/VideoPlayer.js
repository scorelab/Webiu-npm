import React from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
export const VideoPlayer = ({
  videoSrcURL,
  title,
  header,
  width,
  height
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "video"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faVideo
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", {
    className: "videoplayer-component"
  }, videoSrcURL ? /*#__PURE__*/React.createElement("iframe", {
    width: width,
    height: height,
    src: videoSrcURL,
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }) : null, title ? /*#__PURE__*/React.createElement("p", {
    className: "video-para"
  }, title) : null));
};
VideoPlayer.propTypes = {
  videoSrcURL: PropTypes.string,
  title: PropTypes.string,
  header: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};