"use strict";
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 3601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ aboutUs_3)
});

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/counterup.js





function Counterup({
  count
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_countup_default()), {
      end: count,
      redraw: true,
      children: ({
        countUpRef,
        start
      }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
        onChange: start,
        delayedCall: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          ref: countUpRef,
          className: "count_span",
          children: "count"
        })
      })
    })
  });
}

/* harmony default export */ const counterup = (Counterup);
;// CONCATENATED MODULE: ./element/counter3.js





function Counter3() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-4 m-b30 wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.2s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dlab-content-bx style-2 text-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-content",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
              className: "counter m-b0",
              children: [/*#__PURE__*/jsx_runtime_.jsx(counterup, {
                count: 127
              }), "+"]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: "Satisfied Clients"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-4 m-b30 wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.4s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dlab-content-bx style-2 text-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-content",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
              className: "counter m-b0",
              children: [/*#__PURE__*/jsx_runtime_.jsx(counterup, {
                count: 320
              }), "+"]
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: "Project Lunched"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-sm-4 m-b30 wow fadeInUp",
        "data-wow-duration": "2s",
        "data-wow-delay": "0.6s",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dlab-content-bx style-2 text-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "icon-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "counter m-b0",
              children: /*#__PURE__*/jsx_runtime_.jsx(counterup, {
                count: 5
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "title",
              children: "Years Completed"
            })]
          })
        })
      })]
    })
  });
}

/* harmony default export */ const counter3 = (Counter3);
;// CONCATENATED MODULE: ./element/aboutUs-3.js





function AboutUs3() {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner ",
      id: "about",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 m-b30",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dz-media",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "images/about/img6.png",
                className: "move-2",
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-6",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "section-head style-3 mb-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "title",
                children: "Why Our Agency"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dlab-separator style-2 bg-primary"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Welcome to ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "dadhich_text",
                children: "Dadhich Technologies"
              }), ", we are the architects of extraordinary digital experiences. With a perfect fusion of creativity, innovation, and technical expertise, we weave intricate codes into stunning websites that transcend expectations. From sleek designs to seamless functionality, we tailor every pixel to reflect your unique brand identity."]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "m-b30",
              children: "Join us on a transformative journey where your digital dreams become awe-inspiring realities. Let's craft a digital masterpiece\xA0together."
            }), /*#__PURE__*/jsx_runtime_.jsx(counter3, {})]
          })]
        })
      })
    })
  });
}

/* harmony default export */ const aboutUs_3 = (AboutUs3);

/***/ }),

/***/ 7045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_3)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./component/TestimonialSlider-4.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TestimonialSlider4() {
  const {
    0: open,
    1: setOpen
  } = useState("p2");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    arrows: false
  };
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx(Slider, _objectSpread(_objectSpread({}, settings), {}, {
      className: "testimonials-carousel2 owl-carousel owl-theme owl-none owl-theme owl-dots-primary-full wow fadeIn",
      "data-wow-duration": "2s",
      "data-wow-delay": "0.6s",
      children: /*#__PURE__*/_jsxs("div", {
        className: "d-flex flex-wrap carousel-slide ",
        "data-bs-ride": "carousel",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-4 col-md-6 wow fadeInUp carousel-inner ",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.2s",
          children: /*#__PURE__*/_jsxs("div", {
            className: `${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"} carousel-item active`,
            onMouseOver: () => setOpen("p1"),
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon-bx",
              children: /*#__PURE__*/_jsx("span", {
                className: "icon-cell",
                children: /*#__PURE__*/_jsx("i", {
                  className: "flaticon-office"
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "icon-content",
              children: [/*#__PURE__*/_jsx("h4", {
                className: "dlab-title m-b15 cap",
                children: "Ui/Ux Design"
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b20",
                children: "Step into a world of captivating design and unforgettable user experiences. Our UI/UX wizards weave magic through visually stunning interfaces that leave users breathless. Elevate your digital presence with our expertise and watch your audience fall in love\xA0at\xA0first\xA0click."
              }), /*#__PURE__*/_jsx(Link, {
                href: "/services-3",
                children: /*#__PURE__*/_jsx("a", {
                  className: "btn btn-outline-primary service_btn",
                  children: "Learn More"
                })
              })]
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-4 col-md-6 wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.4s",
          children: /*#__PURE__*/_jsxs("div", {
            className: `${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"} carousel-item `,
            onMouseOver: () => setOpen("p2"),
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon-bx",
              children: /*#__PURE__*/_jsx("span", {
                className: "icon-cell",
                children: /*#__PURE__*/_jsx("i", {
                  className: "flaticon-coding"
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "icon-content",
              children: [/*#__PURE__*/_jsx("h4", {
                className: "dlab-title m-b15 cap",
                children: "Web Development"
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b20",
                children: "Elevate your business with our expert web development services. We craft stunning and functional websites, ensuring seamless user experiences across devices. Let us bring your digital\xA0dreams\xA0to\xA0life."
              }), /*#__PURE__*/_jsx(Link, {
                href: "/services-3",
                children: /*#__PURE__*/_jsx("a", {
                  className: "btn btn-outline-primary service_btn",
                  children: "Learn More"
                })
              })]
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-4 col-md-6 wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/_jsxs("div", {
            className: `${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"} carousel-item`,
            onMouseOver: () => setOpen("p3"),
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon-bx",
              children: /*#__PURE__*/_jsx("span", {
                className: "icon-cell",
                children: /*#__PURE__*/_jsx("i", {
                  className: "flaticon-laptop"
                })
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "icon-content",
              children: [/*#__PURE__*/_jsx("h4", {
                className: "dlab-title m-b15 cap",
                children: "Advertisement\xA0Service"
              }), /*#__PURE__*/_jsx("p", {
                className: "m-b20",
                children: "Unlock the power of effective advertising with our strategic services. We craft compelling campaigns that ignite audience engagement, boost brand visibility, and drive measurable results. Let your brand shine and soar above the\xA0competition."
              }), /*#__PURE__*/_jsx(Link, {
                href: "/services-3",
                children: /*#__PURE__*/_jsx("a", {
                  className: "btn btn-outline-primary service_btn",
                  children: "Learn More"
                })
              })]
            })]
          })
        })]
      })
    }))
  });
}

/* harmony default export */ const TestimonialSlider_4 = ((/* unused pure expression or super */ null && (TestimonialSlider4)));
;// CONCATENATED MODULE: ./element/service-3.js







function Service3() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)("p2");
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: "content-inner",
      id: "service",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-head style-3 text-center mb-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "title",
            children: "Our Speciallization"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "dlab-separator style-2 bg-primary"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p1" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`,
              onMouseOver: () => setOpen("p1"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-office"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15 cap",
                  children: "Ui/Ux Design"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "m-b20",
                  children: "Step into a world of captivating design and unforgettable user experiences. Our UI/UX wizards weave magic through visually stunning interfaces that leave users breathless. Elevate your digital presence with our expertise and watch your audience fall in love\xA0at\xA0first\xA0click."
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/services-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn btn-outline-primary service_btn",
                    children: "Learn More"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p2" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`,
              onMouseOver: () => setOpen("p2"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-coding"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15 cap",
                  children: "Web Development"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "m-b20",
                  children: "Elevate your business with our expert web development services. We craft stunning and functional websites, ensuring seamless user experiences across devices. Let us bring your digital\xA0dreams\xA0to\xA0life."
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/services-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn btn-outline-primary service_btn",
                    children: "Learn More"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.6s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${open === "p3" ? "icon-bx-wraper style-5 box-hover text-center m-b30 active" : "icon-bx-wraper style-5 box-hover text-center m-b30"}`,
              onMouseOver: () => setOpen("p3"),
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-bx",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "icon-cell",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-laptop"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "dlab-title m-b15 cap",
                  children: "Advertisement\xA0Service"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "m-b20",
                  children: "Unlock the power of effective advertising with our strategic services. We craft compelling campaigns that ignite audience engagement, boost brand visibility, and drive measurable results. Let your brand shine and soar above the\xA0competition."
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/services-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn btn-outline-primary service_btn",
                    children: "Learn More"
                  })
                })]
              })]
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const service_3 = (Service3);

/***/ })

};
;