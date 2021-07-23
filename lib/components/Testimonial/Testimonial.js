import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from 'react-bootstrap';
import "./Testimonial.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faComments } from '@fortawesome/free-solid-svg-icons';
export const Testimonial = ({
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
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "pn_testimonial_box"
    }, /*#__PURE__*/React.createElement("p", {
      className: "test-description text-justify"
    }, url.description), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6 pn_review_profile"
    }, /*#__PURE__*/React.createElement("img", {
      src: url.image,
      className: "border-radius-12 float-right testimonial-img",
      alt: "client"
    }), /*#__PURE__*/React.createElement("span", {
      className: "test-user"
    }, url.name)), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6 pn_review_rating d-flex justify-content-end"
    }, url.rating, " \xA0", /*#__PURE__*/React.createElement("img", {
      className: "image-radius aligncenter",
      src: "https://desklib.com/static/src/assets/images/v2/star_rating.svg",
      alt: "client-stars"
    })))));
  };

  return /*#__PURE__*/React.createElement("div", null, header ? /*#__PURE__*/React.createElement("div", {
    className: "header-component"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "icon",
    icon: faComments
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
Testimonial.propTypes = {
  header: PropTypes.string,
  data: PropTypes.array
};