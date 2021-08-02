import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "react-bootstrap";
import FeedItemSmall from './FeedItemSmall';
import FeedItem from './FeedItem';
import "./MediumFeed.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const MediumFeed = ({
  title,
  mediumUrl,
  small,
  limit
}) => {
  const [loading, setLoading] = useState(true);
  const [feed, setFeed] = useState(null);
  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = () => {
    const feedFetchUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;
    setLoading(true);
    fetch(feedFetchUrl).then(res => res.json()).then(data => {
      setFeed(data);
      setLoading(false);
    }).catch(err => {
      throw err;
    });
  };

  const renderSmallFeedItemList = () => {
    return feed.items.map((item, index) => {
      if (index < limit) {
        return /*#__PURE__*/React.createElement(FeedItemSmall, {
          key: item.guid,
          title: item.title,
          publishedDate: item.pubDate,
          image: item.thumbnail,
          author: item.author,
          slug: item.link
        });
      }
    });
  };

  const renderFeedItemList = () => /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, feed.items.map((item, index) => {
    if (index < limit) {
      return /*#__PURE__*/React.createElement(Col, {
        md: 6,
        key: item.guid
      }, /*#__PURE__*/React.createElement(FeedItem, {
        title: item.title,
        publishedDate: item.pubDate,
        image: item.thumbnail,
        author: item.author,
        slug: item.link
      }));
    }
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "view-all-btn-container"
  }, loading || !feed || !feed.items ? null : /*#__PURE__*/React.createElement("a", {
    href: feed.feed.link,
    className: "medium-more",
    target: "_blank",
    rel: "noreferrer"
  }, "Many More ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faArrowRight
  })))));

  return /*#__PURE__*/React.createElement("div", {
    className: "medium-feed-component"
  }, !small ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faBlog
  }), " ", title)) : /*#__PURE__*/React.createElement("p", {
    className: "medium-feed-title"
  }, title), loading || !feed ? /*#__PURE__*/React.createElement("span", null) : small ? renderSmallFeedItemList() : renderFeedItemList());
};
MediumFeed.propTypes = {
  title: PropTypes.string,
  mediumUrl: PropTypes.string,
  small: PropTypes.bool,
  limit: PropTypes.number
};