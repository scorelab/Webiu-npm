import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from 'react-bootstrap';
import "./Typewriter.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuperscript } from '@fortawesome/free-solid-svg-icons';
export const Typewriter = ({
  words = [],
  header,
  wait,
  color,
  staticText
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  useEffect(() => {
    if (index === words.length) {
      return;
    }

    if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === words[index].length + 1 && index === words.length - 1 && !reverse) {
      setReverse(false);
      setIndex(0);
      setSubIndex(0);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(prev => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? wait : subIndex === words[index].length ? 1000 : wait * 2, 0));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  return /*#__PURE__*/React.createElement("div", {
    className: "typewriter-component"
  }, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faSuperscript
  }), " ", header)) : null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "typewriter-text",
    style: {
      color: color
    }
  }, staticText, " ", `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`))));
};
Typewriter.propTypes = {
  words: PropTypes.array,
  header: PropTypes.string,
  wait: PropTypes.number,
  color: PropTypes.string
};