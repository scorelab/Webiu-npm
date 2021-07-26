import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export const SearchBar = ({
  handleSearch,
  input,
  placeHolder,
  header
}) => {
  return /*#__PURE__*/React.createElement("div", null, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faSearch,
    className: "icon"
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", {
    className: "search-box"
  }, /*#__PURE__*/React.createElement("input", {
    className: "search-input",
    type: "text",
    placeholder: placeHolder,
    value: input,
    onChange: e => handleSearch(e.target.value)
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    onClick: () => {},
    className: "icon",
    icon: faSearch
  })));
};
SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  input: PropTypes.string,
  placeHolder: PropTypes.string,
  header: PropTypes.string
};