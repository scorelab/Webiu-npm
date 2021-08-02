import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MailingListFeedItem from './MailingListFeedItem';
import "./MailingListFeed.sass";
export const MailingListFeed = ({
  title,
  feedUrl,
  small
}) => {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState(null);
  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = () => {
    const feedFetchUrl = `https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`;
    setLoading(true);
    fetch(feedFetchUrl).then(res => res.json()).then(data => {
      setFeed(data);
      setLoading(false);
    }).catch(err => {
      throw err;
    });
  };

  const renderFeedItemList = () => feed && feed.items ? feed.items.map(item => /*#__PURE__*/React.createElement(Col, {
    md: 12,
    key: item.guid
  }, /*#__PURE__*/React.createElement(MailingListFeedItem, {
    image: item.thumbnail,
    author: item.author,
    title: item.title,
    description: item.description,
    publishedDate: item.pubDate,
    slug: item.link
  }))) : null;

  const width = small ? "50%" : "100%";
  return /*#__PURE__*/React.createElement("div", {
    className: "mailing-list-feed-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, {
    style: {
      width: width
    }
  }, /*#__PURE__*/React.createElement(Col, {
    md: 12
  }, /*#__PURE__*/React.createElement("h1", {
    className: small ? "mailing-list-feed-title-small" : "mailing-list-feed-title"
  }, title)), loading || !feed || !feed.items ? /*#__PURE__*/React.createElement(Col, {
    md: 12
  }, /*#__PURE__*/React.createElement("p", null, "Loading...")) : renderFeedItemList()), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "view-all-btn-container"
  }, loading || !feed || !feed.items ? null : /*#__PURE__*/React.createElement("a", {
    href: feed.feed.link,
    className: "btn",
    target: "_blank"
  }, "Many More ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faArrowRight
  }))))));
};
MailingListFeed.propTypes = {
  title: PropTypes.string,
  feedUrl: PropTypes.string,
  small: PropTypes.bool
};