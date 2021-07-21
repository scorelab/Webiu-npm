import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const ItemPrice = ({
  data
}) => {
  return /*#__PURE__*/React.createElement(Col, {
    lg: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricing-list-item-component"
  }, /*#__PURE__*/React.createElement("div", null, data.plan ? /*#__PURE__*/React.createElement("p", {
    className: "item-title"
  }, data.plan) : null, data.plan ? /*#__PURE__*/React.createElement("hr", null) : null, data.price ? /*#__PURE__*/React.createElement("h2", {
    className: "item-price"
  }, "$", data.price) : null, /*#__PURE__*/React.createElement("div", {
    className: "item-description"
  }, data.description ? /*#__PURE__*/React.createElement("p", null, data.description) : null), data.items ? /*#__PURE__*/React.createElement("ul", null, data.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    className: "item-features"
  }, item))) : null, /*#__PURE__*/React.createElement("div", {
    className: "btn-center"
  }, data.buttonLink && data.buttonText ? /*#__PURE__*/React.createElement("a", {
    href: data.buttonLink,
    className: "btn"
  }, data.buttonText) : null))));
};

ItemPrice.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    plan: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    items: PropTypes.array,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string
  }))
};
export default ItemPrice;