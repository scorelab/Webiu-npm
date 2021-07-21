import React from "react";
import PropTypes from "prop-types";
import "./ImageAvatar.sass";
export const ImageAvatar = ({
  image
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar-component"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-avatar-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    className: "avatar-image"
  })));
};
ImageAvatar.propTypes = {
  image: PropTypes.string
};