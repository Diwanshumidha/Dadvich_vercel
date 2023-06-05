"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 4919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function TeamSlider3() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    speed: 3500,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, settings), {}, {
      className: "team-carousel2 owl owl-carousel owl-none owl-theme owl-dots-primary-full",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.1s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic1.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "John Doe"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic2.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Emily Smith"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.3s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic3.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Blake Run"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.4s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic4.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Jenna Smith"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.5s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic1.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "John Doe"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.6s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic2.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Emily Smith"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.7s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic3.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Blake Run"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.8s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic4.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Jenna Smith"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.9s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic1.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "John Doe"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "1.0s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic2.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Emily Smith"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "1.1s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic3.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Blake Run"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "item wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "1.2s",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "dlab-team style-2 m-b10",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-media",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "images/team/small/pic4.jpg",
              alt: ""
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "dlab-content",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "clearfix",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
                className: "dlab-name",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
                  href: "/team-3",
                  children: "Jenna Smith"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "dlab-position",
                children: "Senior Designer"
              })]
            })
          })]
        })
      })]
    }))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamSlider3);

/***/ }),

/***/ 5928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ clients_3)
});

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/clientSlider-3.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ClientSlider3() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue1.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light1.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue2.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light2.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue3.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light3.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue6.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light6.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue4.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light4.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue5.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light5.png",
            alt: ""
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-main",
            src: "images/logo/logo-blue6.png",
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "logo-hover",
            src: "images/logo/logo-light6.png",
            alt: ""
          })]
        })
      })]
    }))
  });
}

/* harmony default export */ const clientSlider_3 = (ClientSlider3);
;// CONCATENATED MODULE: ./element/clients-3.js




function Clients3() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "p-tb50 bg-gray",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "clients-carousel owl-none owl-carousel",
          children: /*#__PURE__*/jsx_runtime_.jsx(clientSlider_3, {})
        })
      })
    })
  });
}

/* harmony default export */ const clients_3 = (Clients3);

/***/ }),

/***/ 3757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ testimonial_3)
});

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/testimonialSlider-3.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function TestimonialSlider3() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    arrows: false
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      className: "testimonials-carousel2 owl-carousel owl-theme owl-none owl-theme owl-dots-primary-full wow fadeIn",
      "data-wow-duration": "2s",
      "data-wow-delay": "0.6s",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "testimonial-pic quote-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "images/testimonials/JoshuaSophy.jpeg",
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-text",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "white",
              children: "Rakesh has done an amazing job for me. I started with nothing and no idea and now have a great site ready for the next stage of my business development. He was extremely patient with me while I dealt with a temporary illness and has been very responsive to my requested changes and he provides top-notch help, especially for someone like me who's all thumbs when it comes to this service."
            }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "testimonial-name white",
              children: "Joshuasophy"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "testimonial-pic quote-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "images/testimonials/FinCross.jpeg",
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-text",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "white",
              children: "This guy went above and beyond to give me a website needed. Amazing communication and a long term partnership formed!"
            }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "testimonial-name white",
              children: "Fincross777"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "testimonial-pic quote-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "images/testimonials/McFarland.jpeg",
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-text",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "white",
              children: "His communication is fantastic, and the result is exactly what we wanted we had a couple features which caused a delay on the delivery. He shared the challenges right away, I saw how much time and hard he worked to solve the challenge. will use him again."
            }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "testimonial-name white",
              children: "Memberbiz"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "testimonial-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "testimonial-pic quote-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "images/testimonials/Kenyeben.jpeg",
              alt: ""
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "testimonial-text",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "white",
              children: "He is very detailed on making sure that everything exceeds my expectations. I have worked with him before and will work with him again."
            }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "testimonial-name white",
              children: "Kenyeben"
            })]
          })]
        })
      })]
    }))
  });
}

/* harmony default export */ const testimonialSlider_3 = (TestimonialSlider3);
;// CONCATENATED MODULE: ./element/testimonial-3.js





function Testimonial3() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner-1 bg-gray bg_tree",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-3 text-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title white",
            children: "What Our Clients Say\u2019s"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "dlab-separator style-2 bg-primary"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(testimonialSlider_3, {})]
      })
    })
  });
}

/* harmony default export */ const testimonial_3 = (Testimonial3);

/***/ })

};
;