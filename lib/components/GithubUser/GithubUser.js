import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { GithubCard } from "../GithubCard";
import "./GithubUser.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export const GithubUser = ({
  username,
  title,
  auth_token
}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userFetchUrl = `https://api.github.com/users/${username}?access_token=${auth_token}`;
    setLoading(true);
    fetch(userFetchUrl, {
      method: 'GET',
      headers: new Headers({
        'Authorization': auth_token,
        'Content-Type': 'application/json'
      })
    }).then(res => res.json()).then(data => {
      setUser(data);
      setLoading(false);
    }).catch(err => {
      throw err;
    });
  }, [username, auth_token]);
  return /*#__PURE__*/React.createElement("div", {
    className: "github-user-component"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faGithub
  }), " ", title)) : null, user && !user.message ? /*#__PURE__*/React.createElement(Container, null, loading && /*#__PURE__*/React.createElement("p", null, "Fetching the profile"), user ? /*#__PURE__*/React.createElement(GithubCard, {
    name: user.name,
    description: user.bio,
    twitter: user.twitter_username,
    image: user.avatar_url,
    username: user.login,
    url: user.html_url,
    location: user.location,
    repo: user.public_repos,
    from: user.created_at,
    blog: user.blog
  }) : null) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h6", null, "User Not Found, Please Check the Username or the Auth Token")));
};
GithubUser.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  auth_token: PropTypes.string
};