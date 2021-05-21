import React from "react";
import PropTypes from "prop-types";
import "./ContactComponent.sass";
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const ContactComponent = ({
  contactMessage,
  subscribeMessage
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "contact-component"
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Contact Us"), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, contactMessage), /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "contact-form"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    placeholder: "Name"
  }), /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    placeholder: "E-Mail"
  }), /*#__PURE__*/React.createElement(Form.Control, {
    as: "textarea",
    rows: "3",
    placeholder: "Your Message",
    className: "custom-text-area"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "send-button"
  }, "SEND"))), /*#__PURE__*/React.createElement(Col, {
    md: 6
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Stay In Touch"), /*#__PURE__*/React.createElement("p", {
    className: "main-text"
  }, subscribeMessage), /*#__PURE__*/React.createElement("img", {
    className: "subscribe-image",
    alt: "subscribe",
    src: "https://yashvardhanportfolio.netlify.app/static/media/yash%20(2).ca34b90c.jpg"
  }), /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "subscribe-form"
  }, /*#__PURE__*/React.createElement(Form.Control, {
    type: "email",
    placeholder: "E-Mail"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "send-button subscribe"
  }, "SUBSCRIBE")))));
};
ContactComponent.propTypes = {
  contactMessage: PropTypes.string,
  subscribeMessage: PropTypes.string
};