"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8655);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






function GetInTouch3() {
  emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().init("H1gzgXLZ1Z9NxvYEK");
  const {
    0: sendingstatus,
    1: setsendingstatus
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const sendEmail = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formdata = Object.fromEntries(formData.entries());
    console.log(formdata);
    setsendingstatus(true);
    emailjs_com__WEBPACK_IMPORTED_MODULE_1___default().send("service_z6xpptm", "template_sv8se54", {
      from_name: formdata.full_name,
      to_name: "Sir",
      message: `Hello Good Evening Sir,   
            You Got Message from ${formdata.full_name} with Email ${formdata.email} and mobile number ${formdata.countrycode}${formdata.phone} 
            from ${window.location}
            -----------------------------------------
            Title: ${formdata.title}
            Message:${formdata.message}
            -----------------------------------------
        `
    }).then(result => {
      sendtodb(formdata);
      setsendingstatus(false);
      console.log(result.text);
    }, error => {
      console.log(error.text);
    });
  };

  function sendtodb(formdata) {
    fetch('http://localhost:5050/contactform/createinquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    }).then(response => {
      if (response.ok) {
        console.log(response);
        alert("Your Response Has Been Sent");
      } else {
        throw new Error('Request failed');
      }
    }).catch(error => {
      console.log(error);
    });
  }

  ;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("section", {
      className: "content-inner",
      id: "contact",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "col-lg-6 m-b30 wow fadeInLeft",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "dlab-media",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                src: "images/about/img8.png",
                className: "move-1",
                alt: ""
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "col-lg-6 m-b30 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
              className: "dlab-form style-1 dzForm",
              onSubmit: sendEmail,
              method: "POST",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "section-head style-3",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
                  className: "title m-t10",
                  children: "Get In Touch With Us"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "dlab-separator style-2 bg-primary"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: ".dlab-social-icon contact_dlab",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h5", {
                  style: {
                    marginBottom: "40px",
                    marginRight: "10px"
                  },
                  children: "Reach Us On -"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                  class: "fa fa-whatsapp con_whatsapp",
                  href: "https://twitter.com/login?lang=en"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                  class: "fa fa-skype con_whatsapp",
                  href: "https://twitter.com/login?lang=en"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                className: "dzFormMsg"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                type: "hidden",
                className: "form-control",
                name: "dzToDo",
                value: "Contact"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                type: "hidden",
                className: "form-control",
                name: "reCaptchaEnable",
                value: "0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                      name: "full_name",
                      type: "text",
                      required: true,
                      className: "form-control",
                      placeholder: "Full Name"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                      name: "email",
                      type: "text",
                      required: true,
                      className: "form-control",
                      placeholder: "Email Address"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "col-sm-12",
                  style: {
                    display: "flex"
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "input-group code_group",
                    style: {
                      width: "20%"
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                      name: "countrycode",
                      type: "text",
                      required: true,
                      className: "form-control code ",
                      placeholder: "+91",
                      style: {
                        borderTopRightRadius: "0 !important"
                      }
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "input-group phno_group",
                    style: {
                      width: "80%"
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                      name: "phone",
                      type: "text",
                      required: "",
                      class: "form-control phno",
                      placeholder: "Phone No.",
                      style: {
                        borderBottomLeftRadius: "0 !important"
                      }
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
                      name: "title",
                      type: "text",
                      required: true,
                      className: "form-control",
                      placeholder: "Project Title"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("textarea", {
                      name: "message",
                      className: "form-control",
                      required: true,
                      placeholder: "Explain Requirements"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "col-sm-12",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
                    type: "submit",
                    className: "btn btn-corner gradient btn-block btn-primary",
                    children: sendingstatus ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "Sending..."
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                      children: "Submit Now"
                    })
                  })
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetInTouch3);

/***/ })

};
;