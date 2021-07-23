import React from "react";
import PropTypes from "prop-types";
import "./LinksList.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faLink, faPaperclip } from '@fortawesome/free-solid-svg-icons';
export const LinksList = ({
  links,
  isIcon,
  iconName
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "links-list-component"
  }, links ? /*#__PURE__*/React.createElement("ul", null, links.map((link, i) => /*#__PURE__*/React.createElement("li", {
    key: `${link.url}-${i}`
  }, /*#__PURE__*/React.createElement("span", null, link.name), ": ", /*#__PURE__*/React.createElement("a", {
    href: link.url,
    target: "_blank",
    rel: "noreferrer"
  }, " ", link.url, " ", isIcon ? /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faExternalLinkAlt
  }) : null)))) : /*#__PURE__*/React.createElement("p", null, "No links found!"));
};
LinksList.propTypes = {
  links: PropTypes.array,
  isIcon: PropTypes.bool,
  iconName: PropTypes.string
};