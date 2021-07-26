import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignupAndLogin.sass";
import { Container, Row, Col, Form } from 'react-bootstrap';
export const SignupAndLogin = ({
  signupMessage,
  handleSignup = () => {},
  loginMessage,
  handleLogin = () => {}
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, signupMessage ? /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "signup-component"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Sign up"), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, signupMessage), /*#__PURE__*/React.createElement(Form, {
    onSubmit: () => handleSignup(name, email, password)
  }, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "contact-form"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    name: "name",
    placeholder: "Name",
    onChange: handleName
  }), /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    name: "email",
    placeholder: "E-Mail",
    onChange: handleEmail
  }), /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    name: "password",
    placeholder: "Password",
    onChange: handlePassword
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "signup-button",
    onClick: e => handleSignup(e, name, email, password)
  }, "SIGN UP")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    className: "signup-para"
  }, "Already have an account with us? ", /*#__PURE__*/React.createElement("a", {
    href: "/login"
  }, "Login")))) : null, signupMessage ? /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "signup-component"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Log In"), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, loginMessage), /*#__PURE__*/React.createElement(Form, {
    onSubmit: email => handleLogin(email, password)
  }, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "contact-form"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    name: "email",
    placeholder: "E-Mail",
    onChange: handleEmail
  }), /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    name: "password",
    placeholder: "Password",
    onChange: handlePassword
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "signup-button",
    onClick: e => handleLogin(e, email, password)
  }, "LOG IN")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    className: "signup-para"
  }, "New to us? ", /*#__PURE__*/React.createElement("a", {
    href: "/signup"
  }, "Signup")))) : null)));
};
SignupAndLogin.propTypes = {
  signupMessage: PropTypes.string,
  handleSignup: PropTypes.func,
  loginMessage: PropTypes.string,
  handleLogin: PropTypes.func
};