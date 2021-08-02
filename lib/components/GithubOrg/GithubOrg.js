import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { GithubCard } from "../GithubCard";
import "./GithubOrg.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExclamation, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
export const GithubOrg = ({
  orgname,
  limit,
  title,
  auth_token
}) => {
  const [orgLoading, setOrgLoading] = useState(true);
  const [reposLoading, setReposLoading] = useState(true);
  const [org, setOrg] = useState(null);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const orgFetchUrl = `https://api.github.com/orgs/${orgname}?access_token=${auth_token}`;
    setOrgLoading(true);
    fetch(orgFetchUrl, {
      method: 'GET',
      headers: new Headers({
        'Authorization': auth_token,
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(data => {
      setOrg(data);
      setOrgLoading(false);
    }).catch(err => {
      throw err;
    });
    const repoFetchUrl = `https://api.github.com/orgs/${orgname}/repos?access_token=${auth_token}`;
    setReposLoading(true);
    fetch(repoFetchUrl, {
      method: 'GET',
      headers: new Headers({
        'Authorization': auth_token,
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(data => {
      setRepos(data);
      setReposLoading(false);
    }).catch(err => {
      throw err;
    });
  }, [orgname, auth_token]);
  return /*#__PURE__*/React.createElement("div", {
    className: "github-org-component"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faGithub
  }), " ", title, " ", orgname)) : null, org && !org.message ? /*#__PURE__*/React.createElement(Container, null, orgLoading && /*#__PURE__*/React.createElement("p", null, "Fetching the profile"), org ? /*#__PURE__*/React.createElement(GithubCard, {
    name: org.name,
    description: org.description,
    email: org.email,
    image: org.avatar_url,
    username: org.login,
    url: org.html_url,
    location: org.location,
    repo: org.public_repos,
    from: org.created_at,
    blog: org.blog
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h4", null, "Repositories of ", orgname)), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, reposLoading && /*#__PURE__*/React.createElement("p", null, "Fetching the Repos"), repos.length > 1 ? /*#__PURE__*/React.createElement(Row, null, repos.map((item, index) => {
    if (index < limit) {
      return /*#__PURE__*/React.createElement(Col, {
        lg: 3,
        key: index
      }, /*#__PURE__*/React.createElement("div", {
        className: "repo-card"
      }, /*#__PURE__*/React.createElement("p", {
        className: "repo-title"
      }, item.name), item.description ? /*#__PURE__*/React.createElement("p", {
        className: "card-para"
      }, item.description.length > 30 ? item.description.substring(0, 29) + ".." : item.description) : null, /*#__PURE__*/React.createElement("p", {
        className: "card-para"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faExclamation,
        style: {
          color: '#51ad28'
        }
      }), " ", item.open_issues, " Open Issues"), /*#__PURE__*/React.createElement("p", {
        className: "card-para"
      }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faCodeBranch,
        style: {
          color: '#51ad28'
        }
      }), " ", item.forks, " Forks"), /*#__PURE__*/React.createElement("a", {
        href: item.html_url,
        className: "btn"
      }, "GitHub")));
    }
  })) : null)) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h6", null, "Organization Not Found, Please Check the Org Name or the Auth Token")));
};
GithubOrg.propTypes = {
  orgname: PropTypes.string,
  limit: PropTypes.number,
  title: PropTypes.string,
  auth_token: PropTypes.string
};