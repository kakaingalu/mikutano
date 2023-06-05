"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "ContextProvider": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/otomisin/mikutano/context/index.js";


const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const ContextProvider = props => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: secret,
    1: setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Context.Provider, {
    value: value,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/otomisin/mikutano/pages/index.js";





function Auth() {
  const {
    username,
    setUsername,
    secret,
    setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const isChatsPage = router.pathname === '/chats';
  const {
    0: currentDate,
    1: setCurrentDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isDropdownOpen,
    1: setIsDropdownOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const toggleDropdown = dropdown => {
    setIsDropdownOpen(prevDropdown => prevDropdown === dropdown ? null : dropdown);
  };

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().put("https://api.chatengine.io/users/", {
      username,
      secret
    }, {
      headers: {
        "private-key": 'fb32ed54-6541-4102-b21d-527a902f93e3'
      }
    }).then(r => router.push('/chats'));
  }

  const handleLogoClick = () => {
    window.location.reload();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Get the current date and time
    const updateDateTime = () => {
      const now = new Date(); // Format the date and time as a string

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0'); // Combine the date parts

      const formattedDate = `${year} - ${month} - ${day} - ${hours} : ${minutes} : ${seconds}`; // Set the current date state

      setCurrentDate(formattedDate);
    }; // Update the current date and time immediately


    updateDateTime(); // Update the current date and time every second

    const interval = setInterval(updateDateTime, 1000); // Cleanup the interval on component unmount

    return () => {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "background-index",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
        className: "head-title-au",
        onClick: handleLogoClick,
        children: "Mikutano"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "dropdown-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "twitter-logo",
          onClick: () => toggleDropdown('twitter'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: "/twitter.svg",
            alt: "twitter logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 6
          }, this), isDropdownOpen === 'twitter' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "dropdown-list",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "https://twitter.com/wantonraven",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "1. Joseph Kakai"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "https://twitter.com/Khai_Purity01",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "2. Purity Chege"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "https://twitter.com/otomisin",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "3. Oluwatosin Orenaike"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "dropdown-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "github-logo",
          onClick: () => toggleDropdown('github'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: "/github.svg",
            alt: "github logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this), isDropdownOpen === 'github' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "dropdown-list2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "https://github.com/wantonraven",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "1. Joseph Kakai"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "https://github.com/Khaikhai01",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "2. Purity Chege"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "https://github.com/otomisin",
                target: "_blank",
                rel: "noopener norefererrer",
                children: "3. Oluwatosin Orenaike"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 6
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "dropdown-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "gmail-logo",
          onClick: () => toggleDropdown('gmail'),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: "/gmail.png",
            alt: "gmail logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), isDropdownOpen === 'gmail' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            className: "dropdown-list3",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "mailto:josephngalu96@gmail.com",
                children: "1. Joseph Kakai"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "mailto:shishchei@gmail.com",
                children: "2. Purity Chege"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                href: "orenaiket@yahoo.com",
                children: "3. Oluwatosin Orenaike"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 6
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 4
      }, this), currentDate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "date",
        children: [" Date: ", currentDate]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 24
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "background-image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "logo",
        onClick: handleLogoClick,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
          src: "/img1.png",
          alt: "Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "heading-top",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "head-separator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 4
        }, this), "Welcome to Mikutano"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "auth-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          className: "auth-form",
          onSubmit: e => onSubmit(e),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "auth-title",
            children: "Mikutano"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "input-container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              placeholder: "Email",
              className: "text-input",
              onChange: e => setUsername(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "input-container",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
              type: "password",
              placeholder: "Password",
              className: "text-input",
              onChange: e => setSecret(e.target.value)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "submit",
            className: "submit-button",
            children: "Login / Sign Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "body-text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "body-head",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            children: "What we do:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "space-list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: "We aim to connect Tech newbies with professionals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: "Through mikutano you get solutions to tech problems."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 5
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
              children: "We enable sharing knowledge, collaboration, and solving problems together."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("footer", {
        className: "section-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "footer-separator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: "proudly created by Purity Chege, Joseph Kakai, Oluwatosin Orenaike"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 4
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          children: "\xA9 2023 Mikutano"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 6
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpIRCxlQTJIQTtBQUFRLGlCQUFTLEVBQUMsV0FBbEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkUsZUFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBcUlEOzs7Ozs7Ozs7O0FDMU1EOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIHVzZXJuYW1lLFxuICAgIHNldFVzZXJuYW1lLFxuICAgIHNlY3JldCxcbiAgICBzZXRTZWNyZXQsXG4gIH07XG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e3Byb3BzLmNoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcbiAgY29uc3QgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUsIHNlY3JldCwgc2V0U2VjcmV0IH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGlzQ2hhdHNQYWdlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2NoYXRzJztcbiAgY29uc3QgW2N1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0Ryb3Bkb3duT3Blbiwgc2V0SXNEcm9wZG93bk9wZW5dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZHJvcGRvd24pID0+IHtcbiAgc2V0SXNEcm9wZG93bk9wZW4ocHJldkRyb3Bkb3duID0+IHByZXZEcm9wZG93biA9PT0gZHJvcGRvd24gPyBudWxsIDogZHJvcGRvd24pO1xufTtcblxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwIHx8IHNlY3JldC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGF4aW9zLnB1dChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuY2hhdGVuZ2luZS5pby91c2Vycy9cIixcbiAgICAgIHt1c2VybmFtZSwgc2VjcmV0fSxcbiAgICAgIHtoZWFkZXJzOiB7XCJwcml2YXRlLWtleVwiOiAnZmIzMmVkNTQtNjU0MS00MTAyLWIyMWQtNTI3YTkwMmY5M2UzJ319XG4gICAgKVxuICAgIC50aGVuKHIgPT4gcm91dGVyLnB1c2goJy9jaGF0cycpKVxuICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZVxuICAgIGNvbnN0IHVwZGF0ZURhdGVUaW1lID0gKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgICAgLy8gRm9ybWF0IHRoZSBkYXRlIGFuZCB0aW1lIGFzIGEgc3RyaW5nXG4gICAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IFN0cmluZyhub3cuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICBjb25zdCBkYXkgPSBTdHJpbmcobm93LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKG5vdy5nZXRIb3VycygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhub3cuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IFN0cmluZyhub3cuZ2V0U2Vjb25kcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgXG4gICAgICAvLyBDb21iaW5lIHRoZSBkYXRlIHBhcnRzXG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0gLSAke21vbnRofSAtICR7ZGF5fSAtICR7aG91cnN9IDogJHttaW51dGVzfSA6ICR7c2Vjb25kc31gO1xuXG4gICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgICAgc2V0Q3VycmVudERhdGUoZm9ybWF0dGVkRGF0ZSk7XG4gICAgfTtcbiAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZSBpbW1lZGlhdGVseVxuICAgIHVwZGF0ZURhdGVUaW1lKCk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZSBldmVyeSBzZWNvbmRcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZURhdGVUaW1lLCAxMDAwKTtcblxuICAgIC8vIENsZWFudXAgdGhlIGludGVydmFsIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuXG4gIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1pbmRleFwiPlxuXHQgIDxoMSBjbGFzc05hbWU9XCJoZWFkLXRpdGxlLWF1XCIgb25DbGljaz17aGFuZGxlTG9nb0NsaWNrfT5NaWt1dGFubzwvaDE+XG5cdCAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cblx0ICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXItbG9nb1wiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURyb3Bkb3duKCd0d2l0dGVyJyl9PlxuXHQgICAgPGltZyBzcmM9XCIvdHdpdHRlci5zdmdcIiBhbHQ9XCJ0d2l0dGVyIGxvZ29cIiAvPlxuXHQgICAge2lzRHJvcGRvd25PcGVuID09PSAndHdpdHRlcicgJiYgKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vd2FudG9ucmF2ZW5cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDEuIEpvc2VwaCBLYWthaVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0toYWlfUHVyaXR5MDFcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDIuIFB1cml0eSBDaGVnZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cblx0XHQ8bGk+ICAgIFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9vdG9taXNpblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHQgICAgMy4gT2x1d2F0b3NpbiBPcmVuYWlrZVxuXHRcdCAgICA8L2E+XG5cdFx0PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICl9XG5cdCAgPC9kaXY+XG5cdCAgPC9kaXY+XG5cdCAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cblx0ICA8ZGl2IGNsYXNzTmFtZT1cImdpdGh1Yi1sb2dvXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlRHJvcGRvd24oJ2dpdGh1YicpfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2dpdGh1Yi5zdmdcIiBhbHQ9XCJnaXRodWIgbG9nb1wiIC8+XG4gICAgICAgICAge2lzRHJvcGRvd25PcGVuID09PSAnZ2l0aHViJyAmJiAoXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1saXN0MlwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93YW50b25yYXZlblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgMS4gSm9zZXBoIEtha2FpXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9LaGFpa2hhaTAxXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAyLiBQdXJpdHkgQ2hlZ2VcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuXHRcdCAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vb3RvbWlzaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVyZXJyZXJcIj5cblx0XHQgICAzLiBPbHV3YXRvc2luIE9yZW5haWtlXG5cdFx0ICAgPC9hPlxuXHRcdDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApfVxuXG5cdCAgPC9kaXY+XG5cdCAgPC9kaXY+XG5cdCAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdtYWlsLWxvZ29cIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEcm9wZG93bignZ21haWwnKX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9nbWFpbC5wbmdcIiBhbHQ9XCJnbWFpbCBsb2dvXCIgLz5cblx0ICB7aXNEcm9wZG93bk9wZW4gPT09ICdnbWFpbCcgJiYgKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlzdDNcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86am9zZXBobmdhbHU5NkBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgMS4gSm9zZXBoIEtha2FpXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzaGlzaGNoZWlAZ21haWwuY29tXCI+XG4gICAgICAgICAgICAgICAgICAgIDIuIFB1cml0eSBDaGVnZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG5cdFx0ICAgPGEgaHJlZj1cIm9yZW5haWtldEB5YWhvby5jb21cIj5cblx0XHQgICAzLiBPbHV3YXRvc2luIE9yZW5haWtlXG5cdFx0ICAgPC9hPlxuXHRcdDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgPC9kaXY+XG5cdCAgPC9kaXY+XG4gICAgICAge2N1cnJlbnREYXRlICYmIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPiBEYXRlOiB7Y3VycmVudERhdGV9PC9kaXY+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWltYWdlXCI+XG5cdCAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBvbkNsaWNrPXtoYW5kbGVMb2dvQ2xpY2t9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZzEucG5nXCIgYWx0PVwiTG9nb1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy10b3BcIj5cblx0ICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtc2VwYXJhdG9yXCI+PC9kaXY+XG5cdCAgV2VsY29tZSB0byBNaWt1dGFub1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImF1dGgtZm9ybVwiIG9uU3VibWl0PXtlID0+IG9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtdGl0bGVcIj5NaWt1dGFubzwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgTG9naW4gLyBTaWduIFVwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktdGV4dFwiPlxuXHQgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS1oZWFkXCI+PGgxPldoYXQgd2UgZG86PC9oMT48L2Rpdj5cblx0IDxkaXYgY2xhc3NOYW1lPVwic3BhY2UtbGlzdFwiPiBcbiAgICAgICAgICAgPHVsPlxuICAgICAgXHQgICA8bGk+V2UgYWltIHRvIGNvbm5lY3QgVGVjaCBuZXdiaWVzIHdpdGggcHJvZmVzc2lvbmFscy48L2xpPlxuXHQgICA8bGk+VGhyb3VnaCBtaWt1dGFubyB5b3UgZ2V0IHNvbHV0aW9ucyB0byB0ZWNoIHByb2JsZW1zLjwvbGk+XG5cdCAgIDxsaT5XZSBlbmFibGUgc2hhcmluZyBrbm93bGVkZ2UsIGNvbGxhYm9yYXRpb24sIGFuZCBzb2x2aW5nIHByb2JsZW1zIHRvZ2V0aGVyLjwvbGk+XG4gICAgICAgICAgIDwvdWw+XG5cdCA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInNlY3Rpb24tMVwiPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNlcGFyYXRvclwiPjwvZGl2PlxuXHQgIDxwPnByb3VkbHkgY3JlYXRlZCBieSBQdXJpdHkgQ2hlZ2UsIEpvc2VwaCBLYWthaSwgT2x1d2F0b3NpbiBPcmVuYWlrZTwvcD5cblx0ICA8cD7CqSAyMDIzIE1pa3V0YW5vPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiQXV0aCIsInJvdXRlciIsImlzQ2hhdHNQYWdlIiwicGF0aG5hbWUiLCJjdXJyZW50RGF0ZSIsInNldEN1cnJlbnREYXRlIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsInRvZ2dsZURyb3Bkb3duIiwiZHJvcGRvd24iLCJwcmV2RHJvcGRvd24iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInB1dCIsImhlYWRlcnMiLCJ0aGVuIiwiciIsInB1c2giLCJoYW5kbGVMb2dvQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInVwZGF0ZURhdGVUaW1lIiwibm93IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdHRlZERhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=