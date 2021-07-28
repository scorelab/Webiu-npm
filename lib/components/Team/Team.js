import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Modal } from 'react-bootstrap';
import TeamListItem from './TeamListItem';
import "./Team.sass";
import { SearchBar } from "../SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
export const Team = ({
  title,
  showSearchBar,
  heads,
  contributors,
  researchers,
  alumni
}) => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(contributors);
  const [name, setName] = useState(null);
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  const handleClick = (name, position, image) => {
    setName(name);
    setPosition(position);
    setImage(image);
    setShow(true);
  };

  const handleSearch = async searchItem => {
    const results = contributors.filter(contributor => contributor.name.toLowerCase().includes(searchItem));
    setSearchItem(searchItem);
    setSearchResults(results);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "team-component"
  }, /*#__PURE__*/React.createElement(Modal, {
    show: show,
    onHide: () => setShow(false)
  }, /*#__PURE__*/React.createElement(Modal.Header, {
    closeButton: true
  }), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "profile",
    className: "team-img"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "team-title"
  }, name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "team-position"
  }, position))))), title ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faUsers,
    className: "icon"
  }), " ", title)) : null, /*#__PURE__*/React.createElement(Container, null, !heads || /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Heads"), /*#__PURE__*/React.createElement(Row, null, heads.map((item, i) => /*#__PURE__*/React.createElement(Col, {
    md: 6,
    key: i,
    className: "team-column",
    onClick: () => handleClick(item.name, item.title, item.image)
  }, /*#__PURE__*/React.createElement(TeamListItem, {
    name: item.name,
    title: item.title
  }))))), /*#__PURE__*/React.createElement("br", null), !researchers || /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Researchers"), /*#__PURE__*/React.createElement(Row, null, researchers.map((item, i) => /*#__PURE__*/React.createElement(Col, {
    md: 4,
    sm: 6,
    key: i,
    className: "team-column",
    onClick: () => handleClick(item.name, item.title, item.image)
  }, /*#__PURE__*/React.createElement(TeamListItem, {
    name: item.name,
    title: item.title,
    horizontal: true
  })))), /*#__PURE__*/React.createElement("br", null)), !alumni || /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Alumni"), /*#__PURE__*/React.createElement(Row, null, alumni.map((item, i) => /*#__PURE__*/React.createElement(Col, {
    md: 4,
    sm: 6,
    key: i,
    className: "team-column",
    onClick: () => handleClick(item.name, item.title, item.image)
  }, /*#__PURE__*/React.createElement(TeamListItem, {
    name: item.name,
    title: item.title,
    horizontal: true
  })))), /*#__PURE__*/React.createElement("br", null)), !contributors || /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "team-search-div"
  }, /*#__PURE__*/React.createElement("h3", null, "Contributors"), /*#__PURE__*/React.createElement("div", {
    className: "contributors-search"
  }, showSearchBar ? /*#__PURE__*/React.createElement(SearchBar, {
    input: searchItem,
    handleSearch: handleSearch,
    placeHolder: "Search Contributors"
  }) : null)), /*#__PURE__*/React.createElement(Row, null, searchResults.map((item, i) => /*#__PURE__*/React.createElement(Col, {
    md: 3,
    sm: 4,
    key: i,
    className: "team-column",
    onClick: () => handleClick(item.name, item.title, item.image)
  }, /*#__PURE__*/React.createElement(TeamListItem, {
    name: item.name,
    title: item.title,
    horizontal: true
  })))), /*#__PURE__*/React.createElement("br", null))));
};
Team.propTypes = {
  heads: PropTypes.array,
  researchers: PropTypes.array,
  alumni: PropTypes.array,
  contributors: PropTypes.array,
  title: PropTypes.string,
  showSearchBar: PropTypes.bool
};