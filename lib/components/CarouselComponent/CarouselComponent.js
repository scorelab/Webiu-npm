import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from 'react-bootstrap';
import "./CarouselComponent.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faSlidersH } from '@fortawesome/free-solid-svg-icons';
export const CarouselComponent = ({
  data,
  header
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = data.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = data.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const ImageSlide = ({
    url
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "image-slide"
    }, /*#__PURE__*/React.createElement("div", {
      className: "slider-image-div"
    }, /*#__PURE__*/React.createElement("img", {
      className: "slider-image",
      src: url.image,
      alt: "slider-logo"
    })), /*#__PURE__*/React.createElement("div", {
      className: "slider-title"
    }, /*#__PURE__*/React.createElement("h4", null, url.title)), /*#__PURE__*/React.createElement("div", {
      className: "slider-content"
    }, /*#__PURE__*/React.createElement("p", null, url.content)));
  };

  return /*#__PURE__*/React.createElement("div", null, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faSlidersH
  }), " ", header)) : null, /*#__PURE__*/React.createElement(Container, null, data ? /*#__PURE__*/React.createElement("div", {
    className: "carousel"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon icon-left",
    icon: faArrowLeft,
    onClick: previousSlide
  }), /*#__PURE__*/React.createElement(ImageSlide, {
    url: data[currentImageIndex]
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon icon-right",
    icon: faArrowRight,
    onClick: nextSlide
  })) : null));
};
CarouselComponent.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array
};