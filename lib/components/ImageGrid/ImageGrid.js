import React from "react";
import PropTypes from "prop-types";
import "./ImageGrid.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
export const ImageGrid = ({
  header,
  images,
  size,
  categories,
  categoryData,
  row
}) => {
  const renderImages = () => {
    return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, images.map(i => /*#__PURE__*/React.createElement(Col, {
      md: size,
      key: i
    }, /*#__PURE__*/React.createElement("img", {
      className: "image-grid",
      alt: "Logo",
      src: i.imageUrl
    }), i.imageText ? /*#__PURE__*/React.createElement("p", {
      className: "image-para"
    }, i.imageText) : null))));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "image-grid-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faImage
  }), " ", header)) : null, images && images.length > 0 ? renderImages() : !categories && !row ? /*#__PURE__*/React.createElement("p", null, "No screen shots found!") : null, categories ? /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, categoryData.map((category, id) => /*#__PURE__*/React.createElement(Col, {
    md: size,
    className: "category-col",
    key: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "category-div",
    style: {
      backgroundColor: category.color
    },
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("h3", {
    className: "category-text"
  }, category.text)))))) : null, row ? /*#__PURE__*/React.createElement(Row, {
    className: "category-row"
  }, categoryData.map((category, index) => /*#__PURE__*/React.createElement(Col, {
    md: 2,
    xs: 6,
    key: index,
    className: "data-col"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => {}
  }, /*#__PURE__*/React.createElement("img", {
    src: category.image,
    alt: "logo",
    className: "data-img"
  }), /*#__PURE__*/React.createElement("p", {
    className: "category-text"
  }, category.text))))) : null);
};
ImageGrid.propTypes = {
  images: PropTypes.array,
  header: PropTypes.string,
  size: PropTypes.number,
  categories: PropTypes.bool,
  categoryData: PropTypes.array,
  row: PropTypes.bool
};