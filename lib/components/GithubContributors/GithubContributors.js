import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import "./GithubContributors.sass";
import { SearchBar } from "../SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
export const GithubContributors = ({
  projectname,
  title,
  auth_token,
  limit,
  showSearchBar
}) => {
  const [loading, setLoading] = useState(true);
  const [contributors, setContributors] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState(contributors);
  useEffect(() => {
    const contributorsFetchUrl = `https://api.github.com/repos/${projectname}/contributors?access_token=${auth_token}`;
    setLoading(true);
    fetch(contributorsFetchUrl, {
      method: 'GET',
      headers: new Headers({
        'Authorization': auth_token,
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(data => {
      setContributors(data);
      setSearchResults(data);
      setLoading(false);
    }).catch(err => {
      throw err;
    });
  }, [projectname, auth_token]);

  const handleSearch = async searchItem => {
    const results = contributors.filter(contributor => contributor.login.toLowerCase().includes(searchItem));
    setSearchItem(searchItem);
    setSearchResults(results);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "github-contributors-component"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon-h2",
    icon: faGithub
  }), " ", title, " ", projectname)) : null, contributors && !contributors.message ? /*#__PURE__*/React.createElement(Container, null, loading && /*#__PURE__*/React.createElement("p", null, "Fetching the profile"), /*#__PURE__*/React.createElement("div", {
    className: "contributors-search"
  }, showSearchBar ? /*#__PURE__*/React.createElement(SearchBar, {
    input: searchItem,
    handleSearch: handleSearch,
    placeHolder: "Search Contributors"
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
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "member-para"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faCodeBranch
  }), " We value our Contributors!"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Project Not Found, Please Check the Project name or the Auth-Token")));
};
GithubContributors.propTypes = {
  projectname: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string,
  limit: PropTypes.number,
  showSearchBar: PropTypes.bool
};