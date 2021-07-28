import React from "react";
import PropTypes from "prop-types";
import "./PublicationsList.sass";
import { Col } from 'react-bootstrap';

const PublicationListItem = ({
  title,
  conference,
  authors,
  slug
}) => {
  return /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "publications-list-item-component",
    onClick: () => window.open(slug, "_blank")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "item-title"
  }, title), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", {
    className: "item-conference"
  }, conference), /*#__PURE__*/React.createElement("p", {
    className: "item-authors"
  }, authors.join(", ")))));
};

PublicationListItem.propTypes = {
  title: PropTypes.string,
  conference: PropTypes.string,
  authors: PropTypes.array,
  slug: PropTypes.string
};
export default PublicationListItem;