import React from 'react';
import ItemPrice from './ItemPrice';
import PropTypes from 'prop-types';
import "./Pricing.sass";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
export const Pricing = ({
  header,
  title,
  description,
  plans
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "pricing-list-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faDollarSign
  }), " ", header)) : null, /*#__PURE__*/React.createElement(Container, null, !title || /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "title-div"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, title))), /*#__PURE__*/React.createElement("div", {
    className: "description-div"
  }, description ? /*#__PURE__*/React.createElement("p", null, description) : null), plans ? /*#__PURE__*/React.createElement(Row, null, plans.map((item, i) => /*#__PURE__*/React.createElement(ItemPrice, {
    data: item
  }))) : null));
};
Pricing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  plans: PropTypes.array,
  header: PropTypes.string
};