import React from "react";
import PropTypes from "prop-types";
import "./ListPagination.sass";
import { Pagination } from "antd";
export const ListPagination = ({
  pageSize,
  total,
  onChange
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "list-pagination-component"
  }, /*#__PURE__*/React.createElement(Pagination, {
    defaultCurrent: 1,
    pageSize: pageSize,
    total: total,
    onChange: page => {
      window.scrollTo(0, 0);
      onChange(page);
    },
    hideOnSinglePage: true
  }));
};
ListPagination.propTypes = {
  pageSize: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func
};