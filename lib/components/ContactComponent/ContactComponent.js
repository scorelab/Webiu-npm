import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ContactComponent.sass";
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dots from "./images/dots.png";
import emailIcon from "./images/email-icon.png";
export const ContactComponent = ({
  contactMessage,
  subscribeMessage,
  contactTitle,
  subscribeTitle,
  handleContactSubmit = () => {},
  handleSubscribeSubmit = () => {}
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = e => setName(e.target.value);

  const handleEmail = e => setEmail(e.target.value);

  const handleMessage = e => setMessage(e.target.value);

  return /*#__PURE__*/React.createElement("div", {
    className: "contact-component",
    style: {
      backgroundImage: dots
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, contactTitle), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, contactMessage), /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleContactSubmit(name, email, message)
  }, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "contact-form"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    placeholder: "Name",
    onChange: handleName,
    required: true
  }), /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    placeholder: "E-Mail",
    onChange: handleEmail,
    required: true
  }), /*#__PURE__*/React.createElement(Form.Control, {
    as: "textarea",
    rows: "3",
    placeholder: "Your Message",
    className: "custom-text-area",
    onChange: handleMessage,
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "send-button"
  }, "SEND"))), /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, subscribeTitle), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, subscribeMessage), /*#__PURE__*/React.createElement("img", {
    className: "subscribe-image",
    alt: "subscribe",
    src: emailIcon
  }), /*#__PURE__*/React.createElement(Form, {
    onSubmit: handleSubscribeSubmit(email)
  }, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "subscribe-form"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    placeholder: "E-Mail",
    onChange: handleEmail,
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "send-button subscribe"
  }, "SUBSCRIBE"))))));
};
ContactComponent.propTypes = {
  contactMessage: PropTypes.string,
  subscribeMessage: PropTypes.string,
  contactTitle: PropTypes.string,
  subscribeTitle: PropTypes.string,
  handleSubscribeSubmit: PropTypes.func,
  handleContactSubmit: PropTypes.func
};