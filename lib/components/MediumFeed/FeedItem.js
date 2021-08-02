import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import "./MediumFeed.sass";

const FeedItem = ({
  title,
  publishedDate,
  author,
  image,
  slug
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "medium-feed-item-component"
  }, /*#__PURE__*/React.createElement("img", {
    className: "image",
    alt: "medium",
    src: image.includes("cdn-images") ? image : './images/mediumPlaceholder.png'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "post-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "post-published-date"
  }, /*#__PURE__*/React.createElement("b", null, "Published on"), " ", moment(publishedDate).format("MMMM Do YYYY, h:mm A"), ' ', moment().diff(moment(publishedDate), "days") <= 7 ? /*#__PURE__*/React.createElement("span", {
    className: "new-span"
  }, "NEW") : null), /*#__PURE__*/React.createElement("p", {
    className: "post-published-author"
  }, "@", author), /*#__PURE__*/React.createElement("button", {
    className: "readmore-btn",
    onClick: () => window.open(slug, "_blank")
  }, "Read More")));
};

FeedItem.propTypes = {
  title: PropTypes.string,
  publishedDate: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string
};
export default FeedItem;