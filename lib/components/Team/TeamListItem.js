import React from "react";
import PropTypes from "prop-types";
import "./Team.sass";

const TeamMemberItem = ({
  name,
  title,
  image,
  horizontal
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: horizontal ? 'team-member-item-component-horizontal' : 'team-member-item-component'
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "member-name"
  }, " ", name), /*#__PURE__*/React.createElement("p", {
    className: "member-title"
  }, " ", title)));
};

TeamMemberItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};
export default TeamMemberItem;