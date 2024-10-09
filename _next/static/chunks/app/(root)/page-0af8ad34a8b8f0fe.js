(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[707],{

/***/ 4976:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 600));


/***/ }),

/***/ 600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./app/data/image/background.ts
var background = __webpack_require__(7764);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./app/data/data.ts
var data = __webpack_require__(9824);
;// CONCATENATED MODULE: ./components/Button/Button.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Button = (param)=>{
    let { scrollToItem } = param;
    var _ThoVangTVData_data;
    const [active, setActive] = (0,react.useState)(true);
    const [buttonWidth, setButtonWidth] = (0,react.useState)("620px"); // Đặt mặc định là 620px
    const [maxHeight, setMaxHeight] = (0,react.useState)("70px"); // Chiều cao tối đa khi active
    const contentRef = (0,react.useRef)(null); // Dùng để lấy chiều cao thực tế của nội dung
    (0,react.useEffect)(()=>{
        const updateButtonWidth = ()=>{
            const maxWidth = window.innerWidth < 620 ? "100%" : "620px"; // Nếu màn hình nhỏ hơn 620px, set 100%
            setButtonWidth(maxWidth);
        };
        // Gọi hàm để thiết lập chiều rộng ban đầu
        updateButtonWidth();
        // Thêm sự kiện lắng nghe kích thước cửa sổ
        window.addEventListener("resize", updateButtonWidth);
        // Xóa sự kiện lắng nghe khi component bị hủy
        return ()=>{
            window.removeEventListener("resize", updateButtonWidth);
        };
    }, []);
    (0,react.useEffect)(()=>{
        if (contentRef.current) {
            // Nếu active, đặt max-height bằng chiều cao thực tế của nội dung
            setMaxHeight(active ? "".concat(contentRef.current.scrollHeight, "px") : "70px");
        }
    }, [
        active
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "relative w-table h-table mb-5 hidden md:flex",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ref: contentRef,
            className: "w-full h-full bg-button p-4 pb-[10px] rounded-[10px]",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-full flex flex-col gap-1 transition-opacity duration-500 ease ".concat(active ? "opacity-100" : "opacity-0"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex gap-2 text-title-btn",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-1 text-sub-title-btn font-medium",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    children: "1."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    children: [
                                        data/* default */.ZP.name,
                                        " - ",
                                        data/* default */.ZP.title
                                    ]
                                })
                            ]
                        })
                    }),
                    data/* default */.ZP === null || data/* default */.ZP === void 0 ? void 0 : (_ThoVangTVData_data = data/* default */.ZP.data) === null || _ThoVangTVData_data === void 0 ? void 0 : _ThoVangTVData_data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "w-full h-max flex",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                className: "text-sub-title-btn pl-4 cursor-pointer",
                                onClick: ()=>scrollToItem(item.title),
                                children: [
                                    "1.",
                                    index + 1,
                                    ".",
                                    item.title,
                                    Array.isArray(item.detal_data) && item.detal_data.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex flex-col gap-2",
                                        children: item.detal_data.map((subitem, subindex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                                className: "text-sub-title-btn pl-8 cursor-pointer",
                                                onClick: ()=>scrollToItem(subitem.title),
                                                children: [
                                                    "1.",
                                                    index + 1,
                                                    ".",
                                                    subindex + 1,
                                                    ".",
                                                    subitem.title
                                                ]
                                            }, subindex))
                                    })
                                ]
                            })
                        }, index))
                ]
            })
        })
    });
};
/* harmony default export */ var Button_Button = (Button);

// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/app-dynamic.js
var app_dynamic = __webpack_require__(551);
var app_dynamic_default = /*#__PURE__*/__webpack_require__.n(app_dynamic);
;// CONCATENATED MODULE: ./node_modules/next/dist/api/app-dynamic.js



//# sourceMappingURL=app-dynamic.js.map
// EXTERNAL MODULE: ./components/Home/ImageTournament.tsx
var ImageTournament = __webpack_require__(1977);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(7138);
;// CONCATENATED MODULE: ./components/DetalPage/DetalPage.tsx





const DetalPage = (param)=>{
    let { itemRefs } = param;
    var _ThoVangTVData_data;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "w-detal_home mt-5 flex flex-col gap-3 text-sub-title-btn md:text-detal px-4 md:p-0 text-justify",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "header w-full h-max mb-2 md:mb-[20px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(api_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: "mr-[4px] text-primary-color cursor-pointer font-semibold hover:text-black",
                            children: data/* default */.ZP.name
                        })
                    }),
                    data/* default */.ZP.introduction.text,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-4 text-[#555]",
                        children: data/* default */.ZP.introduction.additionalInfo
                    })
                ]
            }),
            data/* default */.ZP === null || data/* default */.ZP === void 0 ? void 0 : (_ThoVangTVData_data = data/* default */.ZP.data) === null || _ThoVangTVData_data === void 0 ? void 0 : _ThoVangTVData_data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    ref: (el)=>{
                        itemRefs.current[item.title] = el;
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                            className: "text-title-btn md:text-top-title-btn font-bold text-[#000]",
                            children: item.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-[#555] text-sub-title-btn md:text-detal text-justify",
                            children: item.description
                        }),
                        item.image && item["sub-image"] && /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageTournament["default"], {
                            image: item.image,
                            center: false
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex flex-col gap-2 ml-5 mt-2 text-title-btn md:text-detal",
                            children: Array.isArray(item.listQuality) && item.listQuality.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: item.listQuality.map((quality, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-1 text-sub-title-btn md:text-detal text-justify text-[#555]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                children: [
                                                    index + 1,
                                                    "."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                children: quality.description
                                            })
                                        ]
                                    }, index))
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: item.conclusion
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex flex-col gap-2",
                            children: Array.isArray(item.detal_data) && item.detal_data.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: item.detal_data.map((subitem, subindex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        ref: (el)=>{
                                            itemRefs.current[subitem.title] = el;
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                className: "font-bold text-[#000]",
                                                children: subitem.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-[#555] ml-2 mt-2 md:text-detal text-sub-title-btn text-justify",
                                                children: subitem.description
                                            }),
                                            subitem.image && /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageTournament["default"], {
                                                image: subitem.image,
                                                center: false
                                            }),
                                            subitem["sub-list"] && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-[#555] md:text-title-btn text-sub-title-btn mt-2",
                                                children: subitem["sub-list"]
                                            })
                                        ]
                                    }, subindex))
                            })
                        })
                    ]
                }, index))
        ]
    });
};
/* harmony default export */ var DetalPage_DetalPage = (DetalPage);

;// CONCATENATED MODULE: ./components/Home/Home.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Home_ImageTournament = app_dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1977)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1977)
            ]
    },
    ssr: false
});
const HomePage = ()=>{
    const itemRefs = (0,react.useRef)({});
    const scrollToItem = (0,react.useCallback)((index)=>{
        if (itemRefs.current[index]) {
            var _itemRefs_current_index;
            (_itemRefs_current_index = itemRefs.current[index]) === null || _itemRefs_current_index === void 0 ? void 0 : _itemRefs_current_index.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: "w-full h-max bg-white md:mt-36 mt-28",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-full flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "h-title_slider md:w-title_slider w-header_mobi flex flex-col gap-3 items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "flex items-center justify-center py-[10px] px-6 md:text-[16px] text-sub-title-btn font-semibold capitalize bg-button rounded-full w-max",
                            children: "Thỏ V\xe0ng TV"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "md:text-[24px] text-sub-title font-bold text-center",
                            children: "Xem Trực Tiếp B\xf3ng Đ\xe1 Thỏ V\xe0ng TV Tốc Độ Cao"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-max flex items-center justify-center rounded-3xl mt-10 px-4 md:px-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                    src: background/* default */.Z.slider,
                    alt: "slider",
                    className: "rounded-3xl h-full w-full md:w-[1170px] md:h-[336px] "
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-max flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: " text-[18px] mt-10 w-full max-w-[1170px] h-max rounded-3xl flex pb-8 gap-20",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button, {
                            scrollToItem: scrollToItem
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DetalPage_DetalPage, {
                            itemRefs: itemRefs
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var Home = (HomePage);


/***/ }),

/***/ 1977:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ImageTournament = (param)=>{
    let { image, center } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex flex-col w-full h-max mt-2 ".concat(center ? "items-center justify-center" : ""),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: image,
            alt: "tournament"
        })
    });
};
/* harmony default export */ __webpack_exports__["default"] = (ImageTournament);


/***/ }),

/***/ 6648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a; }
/* harmony export */ });
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5601);
/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);



//# sourceMappingURL=image.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return dynamic;
    }
}));
const _interop_require_default = __webpack_require__(9920);
const _jsxruntime = __webpack_require__(7437);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2265));
const _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(148));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map


/***/ }),

/***/ 5601:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(9920);
const _getimgprops = __webpack_require__(497);
const _imagecomponent = __webpack_require__(8173);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(1241));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 912:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "BailoutToCSR", ({
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
}));
const _bailouttocsr = __webpack_require__(5592);
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === "undefined") {
        throw new _bailouttocsr.BailoutToCSRError(reason);
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map


/***/ }),

/***/ 148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _jsxruntime = __webpack_require__(7437);
const _react = __webpack_require__(2265);
const _dynamicbailouttocsr = __webpack_require__(912);
const _preloadcss = __webpack_require__(1481);
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { $$typeof, default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && "default" in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === "undefined" ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadcss.PreloadCss, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: fallbackElement,
            children: children
        });
    }
    LoadableComponent.displayName = "LoadableComponent";
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map


/***/ }),

/***/ 1481:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "PreloadCss", ({
    enumerable: true,
    get: function() {
        return PreloadCss;
    }
}));
const _jsxruntime = __webpack_require__(7437);
const _requestasyncstorageexternal = __webpack_require__(8512);
function PreloadCss(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== "undefined") {
        return null;
    }
    const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)("next/dynamic css");
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (requestStore.reactLoadableManifest && moduleIds) {
        const manifest = requestStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const cssFiles = manifest[key].files.filter((file)=>file.endsWith(".css"));
            allFiles.push(...cssFiles);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((file)=>{
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                // @ts-ignore
                precedence: "dynamic",
                rel: "stylesheet",
                href: requestStore.assetPrefix + "/_next/" + encodeURI(file),
                as: "style"
            }, file);
        })
    });
} //# sourceMappingURL=preload-css.js.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [173,138,824,335,744], function() { return __webpack_exec__(4976); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);