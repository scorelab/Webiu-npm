import React from "react";
import PropTypes from "prop-types";
import "./PublicationsList.sass";
import { Col } from 'react-bootstrap';

const AchievementListItem = ({
  title,
  image,
  slug,
  description
}) => {
  return /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "publications-list-item-component",
    onClick: () => window.open(slug, "_blank")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "image-div"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "logo",
    className: "item-image"
  })), /*#__PURE__*/React.createElement("h5", {
    className: "achievement-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "achievement-desc"
  }, description))));
};

AchievementListItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string
};
export default AchievementListItem;