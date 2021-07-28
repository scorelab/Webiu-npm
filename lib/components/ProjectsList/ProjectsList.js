function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProjectsList.sass";
import { Container, Row, Col } from 'react-bootstrap';
import ProjectListItem from './ProjectListItem';
import { SearchBar } from "../SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";
export const ProjectsList = ({
  title,
  showSearchBar,
  searchPlaceHolder,
  items = [],
  limit,
  suffle = false
}) => {
  const suffledItems = suffle ? items.sort(() => Math.random() - 0.5) : items;
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(suffledItems);

  const handleSearch = async searchItem => {
    const results = suffledItems.filter(item => item.title.toLowerCase().includes(searchItem));
    setSearchItem(searchItem);
    setSearchResults(results);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "project-list-component"
  }, !title || /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faCode
  }), " ", title)))), showSearchBar ? /*#__PURE__*/React.createElement("div", {
    className: "projects-search"
  }, showSearchBar ? /*#__PURE__*/React.createElement(SearchBar, {
    input: searchItem,
    handleSearch: handleSearch,
    placeHolder: searchPlaceHolder
  }) : null) : null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, searchResults.map((item, i) => !limit || i < limit ? /*#__PURE__*/React.createElement(ProjectListItem, _extends({
    key: i
  }, item)) : null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "view-all-btn-container"
  }, !limit || /*#__PURE__*/React.createElement("a", {
    href: '/projects',
    className: "many-projects"
  }, "Many More ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faArrowRight
  }))))));
};
ProjectsList.propTypes = {
  title: PropTypes.string,
  showSearchBar: PropTypes.bool,
  searchPlaceHolder: PropTypes.string,
  items: PropTypes.array,
  limit: PropTypes.number,
  suffle: PropTypes.bool
};