import React from "react";
import PropTypes from "prop-types";
import "./GitterRoomsList.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const GitterRoomItem = ({
  name,
  avatarUrl,
  roomUrl,
  userCount,
  visible
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "gitter-room-list-item-component",
    "aria-hidden": "true",
    onClick: () => window.open(roomUrl, "_blank")
  }, /*#__PURE__*/React.createElement("img", {
    className: "image",
    alt: "Avatar",
    src: avatarUrl && avatarUrl !== "" ? avatarUrl : '/images/gitterPlaceholder.png'
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "gitter-room-name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "gitter-room-members"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faUser
  }), " ", userCount, " Members"), visible ? /*#__PURE__*/React.createElement("p", {
    className: "gitter-room-members"
  }, "Public IRC") : null));
};

GitterRoomItem.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  roomUrl: PropTypes.string,
  userCount: PropTypes.string
};
export default GitterRoomItem;