import React from "react";
import PropTypes from "prop-types";
import "./SocialMedia.sass";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from "react-helmet";
export const SocialMedia = ({
  facebookProfile,
  twitterProfile,
  header,
  width,
  height
}) => {
  const facebookEmbedLink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F
                             ${facebookProfile}%2F&tabs=timeline&width=340&height=500&small_header=false&
                             adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;
  const twitterEmbedLink = `https://twitter.com/${twitterProfile}?ref_src=twsrc%5Etfw`;
  return /*#__PURE__*/React.createElement("div", {
    className: "embed-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faFacebook
  }), " ", header)) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "embed-div"
  }, /*#__PURE__*/React.createElement(Row, {
    className: "embed-row"
  }, facebookProfile ? /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "embed-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "embed-facebook"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: facebookEmbedLink,
    width: width,
    height: height,
    style: {
      border: "none",
      overflow: "hidden"
    },
    scrolling: "no",
    frameborder: "0",
    allowfullscreen: "true",
    title: "Facebook-Profile",
    allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  }))) : null, twitterProfile ? /*#__PURE__*/React.createElement(Col, {
    md: 6,
    className: "embed-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: width,
      height: height
    },
    className: "embed-twitter"
  }, /*#__PURE__*/React.createElement("a", {
    class: "twitter-timeline twitter-feed",
    width: width,
    height: height,
    href: twitterEmbedLink
  }, "Tweets by ", twitterProfile)), /*#__PURE__*/React.createElement(Helmet, {
    style: {
      width: width,
      height: height
    }
  }, /*#__PURE__*/React.createElement("script", {
    async: true,
    src: "https://platform.twitter.com/widgets.js",
    charset: "utf-8"
  }))) : null))));
};
SocialMedia.propTypes = {
  facebookProfile: PropTypes.string,
  twitterProfile: PropTypes.string,
  header: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};