"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 8067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





function Accordion_sm() {
  const {
    0: activeDefault,
    1: setActiveDefault
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const defaultAccordion = [{
    title: "How to place order or contact?",
    text: "You can contact us on WhatsApp and Skype.. You can click on WhatsApp us button to discuss more about your project",
    bg: "primary"
  }, {
    title: "What services does your agency provide?",
    text: "Our agency specializes in creating custom ecommerce websites that are tailored to your business needs. We offer services such as website design, development, and optimization.",
    bg: "primary"
  }, {
    title: "How experienced is your agency in building ecommerce websites?",
    text: " Our agency has extensive experience in building ecommerce websites. We have a dedicated team of professionals with a proven track record of delivering successful ecommerce projects for our clients.",
    bg: "info"
  }, {
    title: "What platforms or technologies do you use to build ecommerce websites? ",
    text: "We work with popular ecommerce platforms such as Shopify, WooCommerce, Magento, and others, depending on your specific requirements. We also leverage modern web technologies to create seamless and engaging user experiences.",
    bg: "success"
  }, {
    title: "Can you help with integrating payment gateways and shipping providers?",
    text: "Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum, et iaculis arcu scelerisque.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",
    bg: "success"
  }, {
    title: "Do you offer responsive and mobile-friendly website designs?",
    text: "Yes, we prioritize responsive and mobile-friendly designs to ensure that your ecommerce website looks and functions flawlessly across different devices, including smartphones and tablets.",
    bg: "success"
  }, {
    title: " Can you optimize my website for search engines?",
    text: "Yes, we offer search engine optimization (SEO) services for ecommerce websites. Our team can implement SEO best practices to improve your website's visibility in search engine results and drive organic traffic to your online store.",
    bg: "success"
  }, {
    title: "How long does it typically take to build an ecommerce website?",
    text: "The timeframe for building an ecommerce website can vary depending on the project scope, complexity, and customization requirements. We work closely with you to establish a realistic timeline and keep you informed throughout the development process. ",
    bg: "success"
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "dlab-accordion accordion-sm",
      id: "accordionFaq",
      defaultActiveKey: "0",
      children: defaultAccordion.map((d, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "card",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          eventKey: `${i}`,
          className: "card-header",
          onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
            className: "dlab-title",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              className: `${activeDefault === i ? "" : "collapsed"}`,
              onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
              children: [" ", d.title]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: `${activeDefault === i ? "collapsed show" : "collapsed"}`,
          eventKey: `${i}`,
          onClick: () => setActiveDefault(activeDefault === i ? -1 : i),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "card-body",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              className: "m-b0",
              children: d.text
            })
          })
        })]
      }, i))
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion_sm);

/***/ })

};
;