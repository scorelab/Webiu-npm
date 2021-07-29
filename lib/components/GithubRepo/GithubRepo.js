import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { GithubCard } from "../GithubCard";
import "./GithubRepo.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faAsterisk, faCode, faHistory, faCodeBranch, faExclamation, faUser, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
export const GithubRepo = ({
  reponame,
  title,
  auth_token
}) => {
  const [loading, setLoading] = useState(true);
  const [repo, setRepo] = useState(null);
  useEffect(() => {
    const repoFetchUrl = `https://api.github.com/repos/${reponame}?access_token=${auth_token}`;
    setLoading(true);
    fetch(repoFetchUrl, {
      method: 'GET',
      headers: new Headers({
        'Authorization': auth_token,
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(data => {
      setRepo(data);
      setLoading(false);
    }).catch(err => {
      throw err;
    });
  }, [reponame, auth_token]);
  return /*#__PURE__*/React.createElement("div", {
    className: "github-repo-component"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faGithub
  }), " ", title)) : null, repo && !repo.message ? /*#__PURE__*/React.createElement(Container, null, loading && /*#__PURE__*/React.createElement("p", null, "Fetching the details"), repo ? /*#__PURE__*/React.createElement(GithubCard, {
    name: repo.name,
    description: repo.description.substring(0, 300),
    image: repo.organization.avatar_url,
    username: repo.full_name,
    url: repo.html_url,
    from: repo.created_at
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, loading && /*#__PURE__*/React.createElement("p", null, "Fetching the details"), repo ? /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAsterisk
  }), " Owner"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.owner.login))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faCode
  }), " Languages"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.language))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faCodeBranch
  }), " No. of Forks"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.forks))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faHistory
  }), " Last Updated"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, moment(repo.upadted_at).format("MMMM Do YYYY")))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faExclamation
  }), " Open Issues"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.open_issues_count, " Issues Opened"))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faUser
  }), " No. of Contributors"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.subscribers_count))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faGithubAlt
  }), " default Branch"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.default_branch))), /*#__PURE__*/React.createElement(Col, {
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "repo-card-single"
  }, /*#__PURE__*/React.createElement("p", {
    className: "repo-title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faIdBadge
  }), " License"), /*#__PURE__*/React.createElement("p", {
    className: "card-para"
  }, repo.license.name)))) : null)) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h6", null, "Repo Not Found, Please check the repo name or the Auth Token")));
};
GithubRepo.propTypes = {
  reponame: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string
};