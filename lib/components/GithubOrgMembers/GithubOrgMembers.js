import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import "./GithubOrgMembers.sass";
import { SearchBar } from "../SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCubes } from "@fortawesome/free-solid-svg-icons";
export const GithubOrgMembers = ({
  orgname,
  title,
  auth_token,
  limit,
  showSearchBar
}) => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(members);
  useEffect(() => {
    const membersFetchUrl = `https://api.github.com/orgs/${orgname}/members?access_token=${auth_token}`;
    setLoading(true);
    fetch(membersFetchUrl, {
      method: 'GET',
      headers: new Headers({
        'Authorization': auth_token,
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(data => {
      setMembers(data);
      setSearchResults(data);
      setLoading(false);
    }).catch(err => {
      throw err;
    });
  }, [orgname, auth_token]);

  const handleSearch = async searchItem => {
    const results = members.filter(member => member.login.toLowerCase().includes(searchItem));
    setSearchItem(searchItem);
    setSearchResults(results);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "github-members-component"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon-h2",
    icon: faGithub
  }), " ", title, " ", orgname)) : null, members && !members.message ? /*#__PURE__*/React.createElement(Container, null, loading && /*#__PURE__*/React.createElement("p", null, "Fetching the profile"), /*#__PURE__*/React.createElement("div", {
    className: "contributors-search"
  }, showSearchBar ? /*#__PURE__*/React.createElement(SearchBar, {
    input: searchItem,
    handleSearch: handleSearch,
    placeHolder: "Search Members"
  }) : null), /*#__PURE__*/React.createElement(Row, null, searchResults && searchResults.map((member, index) => {
    if (index < limit) {
      return /*#__PURE__*/React.createElement("div", {
        className: "member-card",
        key: index,
        onClick: () => window.open(member.html_url, "_blank")
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
        src: member.avatar_url,
        alt: "Profile-img",
        className: "member-img"
      })), /*#__PURE__*/React.createElement("p", {
        className: "member-title"
      }, member.login));
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "member-para"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faCubes
  }), " The Building Blocks of ", orgname))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h6", null, "Organization Not Found, Please Check the orgname or the Auth-Token")));
};
GithubOrgMembers.propTypes = {
  orgname: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string,
  limit: PropTypes.number,
  showSearchBar: PropTypes.bool
};