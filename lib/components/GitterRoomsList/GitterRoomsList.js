import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "react-bootstrap";
import GitterRoomItem from './GitterRoomItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./GitterRoomsList.sass";
export const GitterRoomsList = ({
  title,
  groupId,
  gitterOrganizationName,
  gitterToken,
  limit,
  small
}) => {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = () => {
    const fetchUrl = `https://api.gitter.im/v1/groups/${groupId}/rooms?access_token=${gitterToken}`;
    setLoading(true);
    fetch(fetchUrl).then(res => res.json()).then(data => {
      setRooms(data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  };

  const renderRoomList = () => rooms !== null ? rooms.map((item, i) => {
    if (i < limit) {
      return /*#__PURE__*/React.createElement(Col, {
        md: 4,
        key: item.uri
      }, /*#__PURE__*/React.createElement(GitterRoomItem, {
        name: item.name,
        avatarUrl: item.avatarUrl,
        roomUrl: `https://gitter.im/${item.url}`,
        userCount: item.userCount,
        visible: item.public
      }));
    }

    return null;
  }) : null;

  return /*#__PURE__*/React.createElement("div", {
    className: "gitter-rooms-list-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 12
  }, title ? /*#__PURE__*/React.createElement("h1", {
    className: small ? "gitter-rooms-list-title-small" : "gitter-rooms-list-title"
  }, title) : null), loading || rooms === null ? /*#__PURE__*/React.createElement(Col, {
    md: 12
  }, /*#__PURE__*/React.createElement("p", null, "Loading...")) : renderRoomList()), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    className: "view-all-btn-container"
  }, loading || !rooms ? null : /*#__PURE__*/React.createElement("a", {
    href: `https://gitter.im/${gitterOrganizationName}`,
    className: "gitter-anchor",
    target: "_blank",
    rel: "noreferrer"
  }, "Many More ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faArrowRight
  }))))));
};
GitterRoomsList.propTypes = {
  title: PropTypes.string,
  groupId: PropTypes.string,
  gitterOrganizationName: PropTypes.string,
  gitterToken: PropTypes.string,
  small: PropTypes.bool,
  limit: PropTypes.number
};