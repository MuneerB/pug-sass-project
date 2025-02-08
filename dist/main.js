/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/styles.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/styles.scss ***!
  \***************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  background: #1c1c1c;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.logo {
  max-width: 150px;
  height: auto;
}

@media (max-width: 768px) {
  .logo {
    max-width: 120px;
  }
  .nav-links {
    gap: 15px;
  }
}
@media (max-width: 480px) {
  .logo {
    max-width: 100px;
  }
  .nav-links {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
.logo img {
  width: 18px;
  height: 18px;
}

/* Ensure the mobile navigation menu is visible */
.mobile-nav-overlay.active {
  align-items: baseline;
}

.mobile-nav-overlay.active .nav-links.mobile {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background: black;
  width: 100%;
  max-width: none;
  text-align: center;
  border-radius: 10px;
}

.close-nav {
  position: absolute;
  top: 10px;
  right: 25px;
  background: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  z-index: 1001;
}

.footer {
  background-color: #f8f8f8;
  padding: 2rem;
  color: #333;
  font-family: Arial, sans-serif;
}
.footer .footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
.footer .footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 1rem;
}
.footer .footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.footer .footer-section ul {
  list-style: none;
  padding: 0;
}
.footer .footer-section ul li {
  margin-bottom: 0.5rem;
}
.footer .footer-section ul a {
  color: #333;
  text-decoration: none;
}
.footer .footer-section ul a:hover {
  text-decoration: underline;
}
.footer .footer-section p {
  margin: 0;
  font-size: 0.9rem;
}
.footer .footer-bottom {
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
  font-size: 0.8rem;
}

.carousel {
  padding: 3rem 0;
  text-align: center;
}
.carousel .section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.carousel .carousel-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  overflow: hidden;
  scroll-snap-type: x mandatory;
}
.carousel .carousel-item {
  position: relative;
  flex: 1;
  max-width: 48%;
  scroll-snap-align: start;
}
.carousel .carousel-item img {
  width: 100%;
  border-radius: 8px;
}
.carousel .carousel-item .carousel-text {
  text-align: left;
  padding: 1rem;
}
.carousel .carousel-item .carousel-text h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.carousel .carousel-item .carousel-text p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}
.carousel .carousel-item .carousel-text .carousel-button {
  background: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;
}
.carousel .carousel-item .carousel-text .carousel-button:hover {
  background: #444;
}

@media (max-width: 768px) {
  .carousel {
    flex-direction: column;
  }
  .carousel-container {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
  .carousel-item {
    min-width: 100%;
    flex: 0 0 100%;
  }
}
@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
    text-align: center;
  }
  .carousel-item {
    font-size: 14px;
    text-align: center;
  }
  .carousel-text {
    padding: 0.5rem;
  }
  .carousel-button {
    width: 100%;
    font-size: 14px;
    padding: 10px;
  }
}
.carousel-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

.carousel-prev, .carousel-next {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5rem;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-prev:hover, .carousel-next:hover {
  background: rgba(0, 0, 0, 0.8);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.hero-section {
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 2rem 1rem;
  font-family: sans-serif;
}
.hero-section .hero-content {
  max-width: 1200px;
  margin: 0 auto 2rem;
  text-align: left;
}
.hero-section .hero-content .hero-subtitle {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}
.hero-section .hero-content .hero-heading {
  font-size: 2rem;
  line-height: 1.2;
  max-width: 600px;
  font-weight: 300;
}
@media (min-width: 768px) {
  .hero-section .hero-content .hero-heading {
    font-size: 3rem;
  }
}
.hero-section .card-grid {
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .hero-section .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.hero-section .card-grid .card {
  background-color: #292929;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}
.hero-section .card-grid .card .card-img-placeholder {
  width: 100%;
  height: 200px;
  background-color: #444;
  border-radius: 4px;
  margin-bottom: 1rem;
}
.hero-section .card-grid .card .card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
}
.hero-section .card-grid .card .card-text {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #cccccc;
  margin-bottom: 1.5rem;
}
.hero-section .card-grid .card .card-button {
  background-color: #444;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.hero-section .card-grid .card .card-button:hover {
  background-color: rgb(55.25, 55.25, 55.25);
}

body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  color: #333;
  text-align: center;
  padding: 20px;
}

.header {
  background: #1c1c1c;
  color: white;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 4px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }
  .nav-toggle {
    display: flex;
  }
}
@media (max-width: 768px) {
  header {
    padding: 10px;
    text-align: center;
  }
  .carousel {
    width: 100%;
    overflow-x: auto;
  }
  footer {
    text-align: center;
    padding: 10px;
  }
}
@media (max-width: 480px) {
  header {
    font-size: 14px;
  }
  .carousel img {
    max-width: 100%;
    height: auto;
  }
  footer {
    font-size: 12px;
  }
}
.carousel-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

.carousel-prev, .carousel-next {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5rem;
}

.carousel-prev:hover, .carousel-next:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Hide mobile navigation by default */
.mobile-nav-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}

.mobile-nav-overlay.active {
  display: flex;
}

/* Mobile menu */
.nav-links.mobile {
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
}

/* Hide desktop nav in mobile */
@media (max-width: 768px) {
  .nav-links.desktop {
    display: none;
  }
}
/* Show hamburger only on mobile */
@media (min-width: 769px) {
  .nav-toggle {
    display: none;
  }
}
/* Prevent scrolling when overlay is open */
.no-scroll {
  overflow: hidden;
}

/* Adjust carousel arrows */
.carousel-prev, .carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}`, "",{"version":3,"sources":["webpack://./src/sass/partials/header.scss","webpack://./src/sass/styles.scss","webpack://./src/sass/partials/footer.scss","webpack://./src/sass/partials/carousel.scss"],"names":[],"mappings":"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","sourcesContent":[".header {\r\n  background: #1c1c1c;\r\n  color: white;\r\n  padding: 15px 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nav-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.nav-links li {\r\n  display: inline;\r\n}\r\n\r\n.nav-links a {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n}\r\n\r\n.logo {\r\n  max-width: 150px;\r\n  height: auto;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .logo {\r\n    max-width: 120px;\r\n  }\r\n\r\n  .nav-links {\r\n    gap: 15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .logo {\r\n    max-width: 100px;\r\n  }\r\n\r\n  .nav-links {\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    text-align: center;\r\n  }\r\n}\r\n.logo img{\r\n\twidth: 18px;\r\n    height: 18px;\r\n}\r\n/* Ensure the mobile navigation menu is visible */\r\n.mobile-nav-overlay.active{\r\n  align-items: baseline;\r\n}\r\n.mobile-nav-overlay.active .nav-links.mobile {\r\n  display: flex !important;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 15px;\r\n  padding: 20px;\r\n  background: black;\r\n  width: 100%;\r\n  max-width: none;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n}\r\n.close-nav  {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 25px;\r\n  background: white;\r\n  border: none;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  color: black;\r\n  z-index: 1001;\r\n}\r\n","@use 'partials/header';\r\n@use 'partials/footer';\r\n@use 'partials/carousel';\r\n\r\n// Sass Variables\r\n$dark-background: #1c1c1c;\r\n$dark-card: #292929;\r\n$gray-bg: #444;\r\n$white: #ffffff;\r\n$text-light: #cccccc;\r\n\r\n// Reset\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n// Hero Section\r\n.hero-section {\r\n  background-color: $dark-background;\r\n  color: $white;\r\n  padding: 2rem 1rem;\r\n  font-family: sans-serif;\r\n\r\n  // Hero Content\r\n  .hero-content {\r\n    max-width: 1200px;\r\n    margin: 0 auto 2rem;\r\n    text-align: left;\r\n\r\n    .hero-subtitle {\r\n      font-size: 0.875rem; // ~14px\r\n      text-transform: uppercase;\r\n      letter-spacing: 1px;\r\n      margin-bottom: 0.5rem;\r\n      opacity: 0.8;\r\n    }\r\n\r\n    .hero-heading {\r\n      font-size: 2rem; // ~32px for mobile\r\n      line-height: 1.2;\r\n      max-width: 600px;\r\n      font-weight: 300;\r\n\r\n      @media (min-width: 768px) {\r\n        font-size: 3rem; // ~48px on larger screens\r\n      }\r\n    }\r\n  }\r\n\r\n  // Card Grid\r\n  .card-grid {\r\n    display: grid;\r\n    gap: 2rem;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n\r\n    @media (min-width: 768px) {\r\n      grid-template-columns: repeat(3, 1fr);\r\n    }\r\n\r\n    // Individual Cards\r\n    .card {\r\n      background-color: $dark-card;\r\n      padding: 1rem;\r\n      border-radius: 4px;\r\n      display: flex;\r\n      flex-direction: column;\r\n\r\n      .card-img-placeholder {\r\n        width: 100%;\r\n        height: 200px;\r\n        background-color: $gray-bg;\r\n        border-radius: 4px;\r\n        margin-bottom: 1rem;\r\n      }\r\n\r\n      .card-title {\r\n        font-size: 1.25rem; // ~20px\r\n        margin-bottom: 0.5rem;\r\n        font-weight: 400;\r\n      }\r\n\r\n      .card-text {\r\n        font-size: 0.875rem; // ~14px\r\n        line-height: 1.5;\r\n        color: $text-light;\r\n        margin-bottom: 1.5rem;\r\n      }\r\n\r\n      .card-button {\r\n        background-color: $gray-bg;\r\n        color: $white;\r\n        border: none;\r\n        padding: 0.75rem 1.25rem;\r\n        font-size: 0.875rem;\r\n        cursor: pointer;\r\n        border-radius: 4px;\r\n        transition: background-color 0.3s;\r\n\r\n        &:hover {\r\n          background-color: darken($gray-bg, 5%);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  background: #f4f4f4;\r\n  color: #333;\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n// Header Styles\r\n.header {\r\n  background: #1c1c1c;\r\n  color: white;\r\n  padding: 15px 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nav-links {\r\n  list-style: none;\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.nav-links li {\r\n  display: inline;\r\n}\r\n\r\n.nav-links a {\r\n  color: white;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n}\r\n\r\n.nav-toggle {\r\n  display: none;\r\n  flex-direction: column;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-toggle span {\r\n  width: 25px;\r\n  height: 3px;\r\n  background: white;\r\n  margin: 4px;\r\n}\r\n\r\n// Mobile Responsive Navbar\r\n@media (max-width: 768px) {\r\n  .nav-links {\r\n    display: none;\r\n    flex-direction: column;\r\n    width: 100%;\r\n  }\r\n\r\n  .nav-toggle {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n// Responsive styling\r\n@media (max-width: 768px) {\r\n    header {\r\n        padding: 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    .carousel {\r\n        width: 100%;\r\n        overflow-x: auto;\r\n    }\r\n\r\n    footer {\r\n        text-align: center;\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    header {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .carousel img {\r\n        max-width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    footer {\r\n        font-size: 12px;\r\n    }\r\n}\r\n.carousel-nav {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        position: absolute;\r\n        top: 50%;\r\n        width: 100%;\r\n        transform: translateY(-50%);\r\n    }\r\n    .carousel-prev, .carousel-next {\r\n        background: rgba(0, 0, 0, 0.5);\r\n        color: white;\r\n        border: none;\r\n        padding: 10px 15px;\r\n        cursor: pointer;\r\n        font-size: 1.5rem;\r\n    }\r\n    .carousel-prev:hover, .carousel-next:hover {\r\n        background: rgba(0, 0, 0, 0.8);\r\n    }\r\n    /* Hide mobile navigation by default */\r\n.mobile-nav-overlay {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  z-index: 1000;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.mobile-nav-overlay.active {\r\n  display: flex;\r\n}\r\n\r\n/* Mobile menu */\r\n.nav-links.mobile {\r\n  background: white;\r\n  padding: 20px;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Hide desktop nav in mobile */\r\n@media (max-width: 768px) {\r\n  .nav-links.desktop {\r\n      display: none;\r\n  }\r\n}\r\n\r\n/* Show hamburger only on mobile */\r\n@media (min-width: 769px) {\r\n  .nav-toggle {\r\n      display: none;\r\n  }\r\n}\r\n\r\n/* Prevent scrolling when overlay is open */\r\n.no-scroll {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Adjust carousel arrows */\r\n.carousel-prev, .carousel-next {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.carousel-prev {\r\n  left: 10px;\r\n}\r\n\r\n.carousel-next {\r\n  right: 10px;\r\n}",".footer {\r\n  background-color: #f8f8f8;\r\n  padding: 2rem;\r\n  color: #333;\r\n  font-family: Arial, sans-serif;\r\n\r\n  .footer-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .footer-section {\r\n    flex: 1;\r\n    min-width: 200px;\r\n    margin-bottom: 1rem;\r\n\r\n    h3 {\r\n      font-size: 1.2rem;\r\n      margin-bottom: 0.5rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n      padding: 0;\r\n\r\n      li {\r\n        margin-bottom: 0.5rem;\r\n      }\r\n\r\n      a {\r\n        color: #333;\r\n        text-decoration: none;\r\n\r\n        &:hover {\r\n          text-decoration: underline;\r\n        }\r\n      }\r\n    }\r\n\r\n    p {\r\n      margin: 0;\r\n      font-size: 0.9rem;\r\n    }\r\n  }\r\n\r\n  .footer-bottom {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    padding-top: 1rem;\r\n    border-top: 1px solid #ccc;\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n",".carousel {\r\n  padding: 3rem 0;\r\n  text-align: center;\r\n\r\n  .section-title {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .carousel-container {\r\n    display: flex;\r\n    gap: 2rem;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    scroll-snap-type: x mandatory;\r\n  }\r\n\r\n  .carousel-item {\r\n    position: relative;\r\n    flex: 1;\r\n    max-width: 48%;\r\n    scroll-snap-align: start;\r\n\r\n    img {\r\n      width: 100%;\r\n      border-radius: 8px;\r\n    }\r\n\r\n    .carousel-text {\r\n      text-align: left;\r\n      padding: 1rem;\r\n      \r\n      h3 {\r\n        font-size: 1.5rem;\r\n        margin-bottom: 0.5rem;\r\n      }\r\n\r\n      p {\r\n        font-size: 1rem;\r\n        color: #666;\r\n        margin-bottom: 1rem;\r\n      }\r\n      \r\n      .carousel-button {\r\n        background: #000;\r\n        color: #fff;\r\n        padding: 0.75rem 1.5rem;\r\n        border: none;\r\n        cursor: pointer;\r\n        border-radius: 4px;\r\n        transition: background 0.3s;\r\n\r\n        &:hover {\r\n          background: #444;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Responsive styles\r\n@media (max-width: 768px) {\r\n  .carousel {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .carousel-container {\r\n    flex-wrap: nowrap;\r\n    overflow-x: scroll;\r\n  }\r\n\r\n  .carousel-item {\r\n    min-width: 100%;\r\n    flex: 0 0 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .section-title {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n  }\r\n\r\n  .carousel-item {\r\n    font-size: 14px;\r\n    text-align: center;\r\n  }\r\n\r\n  .carousel-text {\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .carousel-button {\r\n    width: 100%;\r\n    font-size: 14px;\r\n    padding: 10px;\r\n  }\r\n}\r\n.carousel-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: absolute;\r\n  top: 50%;\r\n  width: 100%;\r\n  transform: translateY(-50%);\r\n}\r\n.carousel-prev, .carousel-next {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  border: none;\r\n  padding: 10px 15px;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n.carousel-prev {\r\n  left: 10px;\r\n}\r\n.carousel-next {\r\n  right: 10px;\r\n}\r\n.carousel-prev:hover, .carousel-next:hover {\r\n  background: rgba(0, 0, 0, 0.8);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/sass/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ "./src/sass/styles.scss");
// Import the main Sass file


// Log a message to confirm setup
console.log('Webpack is up and running!');

})();

/******/ })()
;
//# sourceMappingURL=main.js.map