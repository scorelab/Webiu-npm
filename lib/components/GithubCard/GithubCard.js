import React from "react";
import PropTypes from "prop-types";
import "./GithubCard.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
export const GithubCard = ({
  name,
  username,
  description,
  twitter,
  email,
  image,
  url,
  blog,
  location,
  from,
  repo
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, image ? /*#__PURE__*/React.createElement("div", {
    className: "card-img-div"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "Profile-img",
    className: "card-img"
  })) : null, name ? /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, name) : null, username ? /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, '@' + username) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, description) : null, location ? /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faMapMarkerAlt,
    style: {
      color: '#51ad28'
    }
  }), " ", location) : null, /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, url ? /*#__PURE__*/React.createElement("a", {
    href: url,
    className: "btn"
  }, "GitHub") : null, blog ? /*#__PURE__*/React.createElement("a", {
    href: blog,
    className: "btn"
  }, "Blog") : null), repo ? /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo, " Repositories") : null, from ? /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, "Active since ", /*#__PURE__*/React.createElement("span", {
    className: "active-since"
  }, moment(from).format("MMMM Do YYYY"))) : null, twitter ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "5px 0 0 10px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "anchor",
    href: `https://twitter.com/${twitter}`
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTwitter,
    style: {
      color: '#377293'
    }
  }))) : null, email ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "5px 0 0 15px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "anchor",
    href: `mailto:${email}`
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faEnvelope,
    style: {
      color: '#377293'
    }
  }))) : null));
};
GithubCard.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  blog: PropTypes.string,
  twitter: PropTypes.string,
  url: PropTypes.string,
  from: PropTypes.string,
  location: PropTypes.string,
  repo: PropTypes.string,
  email: PropTypes.string
};