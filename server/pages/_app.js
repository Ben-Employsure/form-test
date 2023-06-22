(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/github-logo.js



const GitHubLogo = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: "GitHub Logo"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                className: `w-7 h-7 text-brand-deep-purple ${className}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.01,1.64c-5.83,0-10.55,4.75-10.55,10.63c0,4.7,3.02,8.67,7.21,10.08c0.52,0.11,0.72-0.23,0.72-0.51 c0-0.25-0.02-1.09-0.02-1.97C6.44,20.5,5.83,18.6,5.83,18.6c-0.47-1.23-1.17-1.55-1.17-1.55C3.7,16.4,4.73,16.4,4.73,16.4 c1.07,0.07,1.62,1.09,1.62,1.09c0.94,1.62,2.46,1.16,3.07,0.88c0.09-0.69,0.37-1.16,0.66-1.42c-2.34-0.25-4.8-1.16-4.8-5.24 c0-1.16,0.42-2.11,1.08-2.85c-0.1-0.26-0.47-1.35,0.1-2.81c0,0,0.89-0.28,2.9,1.09c0.86-0.23,1.75-0.35,2.64-0.35 c0.89,0,1.8,0.12,2.64,0.35c2.01-1.37,2.9-1.09,2.9-1.09c0.58,1.46,0.21,2.55,0.1,2.81c0.68,0.74,1.08,1.69,1.08,2.85 c0,4.08-2.46,4.98-4.82,5.24c0.38,0.33,0.72,0.97,0.72,1.97c0,1.42-0.02,2.57-0.02,2.92c0,0.28,0.19,0.62,0.72,0.51 c4.19-1.41,7.21-5.38,7.21-10.08C22.56,6.39,17.82,1.64,12.01,1.64z"
                    })
                })
            })
        ]
    });
};
GitHubLogo.defaultProps = {
    className: ""
};
GitHubLogo.propTypes = {
    /** CSS classes to apply  */ className: (external_prop_types_default()).string
};
/* harmony default export */ const github_logo = (GitHubLogo);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js





const App = ({ Component , pageProps  })=>{
    const cdnUrl = "https://employsure.com.au";
    const seoTitle = "Custom Marketo Forms React Test";
    const seoDescription = "Create custom Marketo forms that still submit data straight to the main lead database!";
    const seoImage = "open-graph-image.jpg";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: seoTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: cdnUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "max-snippet:-1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: seoTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: seoDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "image",
                        content: `${cdnUrl}/${seoImage}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: cdnUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: seoTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: seoDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: `${cdnUrl}/${seoImage}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:url",
                        content: cdnUrl
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: seoTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: seoDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: `${cdnUrl}/${seoImage}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: `${cdnUrl}/favicon-16x16.png`,
                        "data-react-helmet": "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: `${cdnUrl}/favicon-32x32.png`,
                        "data-react-helmet": "true"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "fixed bg-white w-full p-4 shadow-lg z-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "mx-auto max-w-7xl flex items-center justify-between",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/PaulieScanlon/cockroachdb-marketo-test-forms/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(github_logo, {})
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "prose px-4 pt-32 pb-16 sm:pt-48 sm:pb-24 max-w-full min-h-screen",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "bg-black",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mx-auto max-w-7xl flex items-center justify-between p-4 text-sm font-bold text-white",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Form Testing Environment"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(511));
module.exports = __webpack_exports__;

})();