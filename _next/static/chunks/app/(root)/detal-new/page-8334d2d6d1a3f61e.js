(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[357],{

/***/ 5728:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6803));


/***/ }),

/***/ 6803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ page; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6648);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./components/News/SortNew.tsx



const SortNew = (param)=>{
    let { index } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex gap-2 border-solid border-b-[2px] border-[#ddd] py-3 items-center justify-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                src: "https://thovangtv.biz/wp-content/uploads/2024/09/keo-dong-banh-150x150.png",
                width: 40,
                height: 40,
                alt: "image",
                className: "w-10 h-10"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                className: "text-primary-color hover:text-black cursor-pointer",
                children: "K\xe8o Đồng Banh L\xe0 G\xec?"
            })
        ]
    }, index);
};
/* harmony default export */ var News_SortNew = (SortNew);

// EXTERNAL MODULE: ./app/data/data.ts
var data = __webpack_require__(9824);
// EXTERNAL MODULE: ./app/data/image/background.ts
var background = __webpack_require__(7764);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.mjs
var io = __webpack_require__(7168);
;// CONCATENATED MODULE: ./components/ButtonDetalNew/ButtonDetalNew.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ButtonDetalNew = (param)=>{
    let { scrollToItem } = param;
    const [active, setActive] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "relative w-full h-max",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mt-[20px] bg-button pt-[10px] pl-[10px] border-solid border-[2px] border-[#333] pr-5 pb-[10px] w-[200px] h-[70px] rounded-[10px] transition-all duration-500 ease ".concat(active ? "w-[350px] h-[220px]" : ""),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "relative mt-[10px] bg-button rounded-md pb-[10px] pl-[10px] pr-[20px] flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-[20px]",
                            children: "Nội Dung"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex border-[#ddd] border-solid border-[1px] w-[35px] h-[30px] rounded-md cursor-pointer ease-linear delay-300  transition-all duration-300 absolute right-4",
                            onClick: ()=>setActive(!active),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                    src: background/* default */.Z.list,
                                    alt: "list"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                                    src: background/* default */.Z.arrow,
                                    alt: "arrow"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-full flex flex-col gap-1 pl-3 transition-opacity duration-500 ease ".concat(active ? "opacity-100" : "opacity-0"),
                    children: data/* ListDetalNewsData */.X3.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        index + 1,
                                        "."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "hover:underline cursor-pointer",
                                    onClick: ()=>scrollToItem(index),
                                    children: item.title
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ var ButtonDetalNew_ButtonDetalNew = (ButtonDetalNew);

// EXTERNAL MODULE: ./components/Home/ImageTournament.tsx
var ImageTournament = __webpack_require__(1977);
;// CONCATENATED MODULE: ./components/newDetal/DetalNew.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const DetalNewCom = ()=>{
    const itemRefs = (0,react.useRef)({});
    console.log(itemRefs);
    const scrollToItem = (index)=>{
        if (itemRefs.current[index]) {
            var _itemRefs_current_index;
            (_itemRefs_current_index = itemRefs.current[index]) === null || _itemRefs_current_index === void 0 ? void 0 : _itemRefs_current_index.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "w-full h-max flex items-center justify-start mt-[20px] flex-col gap-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-[12px] uppercase font-semibold text-primary-color",
                children: "Tin tức"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "text-2xl font-extrabold text-black",
                children: "K\xe8o Đồng Banh L\xe0 G\xec?"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "h-[4px] w-[40px] bg-[#ddd] mt-2"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-center text-[12px] uppercase gap-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Posted on"
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-primary-color",
                        children: "06/09/2024"
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "by "
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-primary-color",
                        children: "thovangtvbiz"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "sub-title text-justify text-[17px]",
                children: "K\xe8o đồng banh, c\xf2n được gọi l\xe0 k\xe8o 0:0 hoặc k\xe8o h\xf2a, l\xe0 một loại k\xe8o cược trong b\xf3ng đ\xe1 m\xe0 nh\xe0 c\xe1i đưa ra khi đ\xe1nh gi\xe1 sức mạnh của hai đội tham gia trận đấu l\xe0 tương đương nhau. Điều n\xe0y c\xf3 nghĩa l\xe0 kh\xf4ng c\xf3 đội n\xe0o được đ\xe1nh gi\xe1 cao hơn đội c\xf2n lại."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "mt-3 text-justify",
                children: "Trong k\xe8o đồng banh, tỷ lệ ăn của cả hai đội sẽ gần như bằng nhau, thể hiện sự c\xe2n bằng trong khả năng gi\xe0nh chiến thắng của cả hai đội."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-max flex items-center justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageTournament["default"], {
                    center: true,
                    image: background/* default */.Z.detal_image_exp
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonDetalNew_ButtonDetalNew, {
                scrollToItem: scrollToItem
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mt-5 w-full h-max flex items-start justify-start flex-col gap-5",
                children: data/* ListDetalNewsData */.X3.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col",
                        ref: (el)=>{
                            itemRefs.current[index] = el;
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-xl font-semibold ",
                                children: item.title
                            }),
                            Array.isArray(item.data) && (item === null || item === void 0 ? void 0 : item.data) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex flex-col gap-3",
                                children: item.data.map((data, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-[18px]",
                                            children: data
                                        })
                                    }, index))
                            }) : null
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "mt-4 flex gap-1 justify-start items-start w-full h-max",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-start justify-start gap-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "> Xem th\xeam:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-primary-color",
                            children: " K\xe8o việt vị l\xe0 g\xec?"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex gap-1 justify-start items-start w-full h-max",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-start justify-start gap-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "> Xem th\xeam b\xe0i viết:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-primary-color",
                            children: " Tin tức"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "h-[3px] w-10 bg-[#ccc] my-4"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-center gap-1 text-[14px] w-full h-10 border-solid border-t-[1px]  border-b-[1px] border--[#ddd] mb-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "This entry was posted in "
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-primary-color",
                        children: "Tin Tức. "
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        children: "Bookmark the"
                    }),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-primary-color",
                        children: "permalink."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-max flex items-start justify-start",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "box-avatarw-full  flex items-start justify-start gap-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                            src: background/* default */.Z.no_avatar,
                            alt: "avatar-image",
                            className: "rounded-full"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "uppercase text-lg font-semibold",
                            children: "thovangtvbiz"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-max flex items-start justify-start mb-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "box-avatar w-full  flex items-center justify-start h-10 gap-4 border-solid border-t-[1px]  border-b-[1px] border--[#ddd]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(io/* IoIosArrowBack */.u1R, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "text-primary-color text-md font-medium",
                            children: "K\xe8o việt vị l\xe0 g\xec?"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var DetalNew = (DetalNewCom);

;// CONCATENATED MODULE: ./components/News/CommentBox.tsx


const CommentBox = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-start justify-start w-full h-max bg-[#0000000d] pt-[15px] px-[25px] mb-50 py-6 mb-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: "text-lg font-semibold text-black",
                children: "Để lại một b\xecnh luận "
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "form w-full h-max flex item-start justify-start px-6 sm:px-20 mt-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full h-max flex flex-col items-start justify-start",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            children: "Email của bạn sẽ kh\xf4ng được hiển thị c\xf4ng khai. C\xe1c trường bắt buộc được đ\xe1nh dấu *"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "comment w-full flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "font-semibold text-[16px]",
                                    children: "B\xecnh luận *"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                                    rows: 10,
                                    className: "border-solid border-2 border-[#cccccc] w-full h-[50px] px-4 py-2 focus:outline-none focus:border-[#0070f3]",
                                    placeholder: "Nội dung b\xecnh luận của bạn..."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "info grid grid-cols-3 gap-5 w-full h-max",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-1 w-full h-max flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: "T\xean *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            className: "w-full"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-1 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: "Email *"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            className: "w-full"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-span-1 flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                            children: "Trang web"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                            type: "text",
                                            className: "w-full"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-start gap-3 mt-5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    type: "checkbox",
                                    name: "",
                                    id: ""
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "font-bold",
                                    children: "Lưu t\xean của t\xf4i, email, v\xe0 trang web trong tr\xecnh duyệt n\xe0y cho lần b\xecnh luận kế tiếp của t\xf4i."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            className: "mt-8 px-6 py-1 bg-primary-color",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: "text-white uppercase text-lg",
                                children: "Gửi b\xecnh luận"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ var News_CommentBox = (CommentBox);

;// CONCATENATED MODULE: ./app/(root)/detal-new/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const DetalNews = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: "w-full h-max flex items-center justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "w-full max-w-[1100px] h-max grid grid-cols-1 md:grid-cols-4 gap-5",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-span-3 w-full h-max px-[25px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DetalNew, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(News_CommentBox, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "col-span-1 ml-4 px-[15px]",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "mt-5 flex flex-col items-start md:items-center justify-start md:justify-center",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(News_SortNew, {
                                    index: index
                                })
                            }, index))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ var page = (DetalNews);


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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [173,163,824,335,744], function() { return __webpack_exec__(5728); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);