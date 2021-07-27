import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import "./MailingListFeed.sass";
import { LetterAvatar } from "../LetterAvatar";

const MailingListFeedItem = ({
  image,
  author,
  title,
  description,
  publishedDate,
  slug
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "mailing-list-feed-item-component",
    onClick: () => window.open(slug, "_blank")
  }, image && image !== "" ? /*#__PURE__*/React.createElement("img", {
    className: "image",
    alt: "medium",
    src: image
  }) : /*#__PURE__*/React.createElement(LetterAvatar, {
    name: author
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "post-published-author"
  }, author), /*#__PURE__*/React.createElement("p", {
    className: "post-published-date"
  }, moment(publishedDate).format("MMMM Do YYYY, h:mm A"), ' ', moment().diff(moment(publishedDate), "days") <= 7 ? /*#__PURE__*/React.createElement("span", {
    className: "new-span"
  }, "NEW") : null), /*#__PURE__*/React.createElement("p", {
    className: "post-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "post-description"
  }, "\"", description.substring(0, 300) + "...", "\"")));
};

MailingListFeedItem.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  publishedDate: PropTypes.string,
  slug: PropTypes.string
};
export default MailingListFeedItem;