(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[983],{

/***/ 9013:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8356));


/***/ }),

/***/ 8356:
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
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/script.js
var script = __webpack_require__(1877);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(8472);
;// CONCATENATED MODULE: ./app/(root)/test/helpers.js

// Your CryptoCompare API key
const apiKey = "431ff8c0f95eb55452d8d75732c02fb0cc7cf905cfa69803d6dd6cec0dcc07bd";
// Makes requests to CryptoCompare API
async function makeApiRequest(path) {
    try {
        const url = new URL("https://min-api.cryptocompare.com/".concat(path));
        url.searchParams.append("api_key", apiKey);
        const response = await fetch(url.toString());
        return response.json();
    } catch (error) {
        throw new Error("CryptoCompare request error: ".concat(error.status));
    }
}
// Makes requests to local API
async function makeApiLocalRequest(path) {
    try {
        const url = new URL("http://localhost:3001/".concat(path));
        url.searchParams.append("api_key", apiKey);
        // Making the request using axios and returning the response data
        const response = await axios/* default */.Z.get(url.toString());
        return response.data;
    } catch (error) {
        // Error handling for axios
        if (error.response) {
            throw new Error("CryptoCompare request error: ".concat(error.response.status));
        } else if (error.request) {
            throw new Error("CryptoCompare request error: No response received from server");
        } else {
            throw new Error("CryptoCompare request error: ".concat(error.message));
        }
    }
}
// Generates a symbol ID from a pair of the coins
function generateSymbol(exchange, fromSymbol, toSymbol) {
    const short = "".concat(fromSymbol, "/").concat(toSymbol);
    return {
        short
    };
}
// Returns all parts of the symbol
function parseFullSymbol(fullSymbol) {
    const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);
    if (!match) {
        return null;
    }
    return {
        exchange: match[1],
        fromSymbol: match[2],
        toSymbol: match[3]
    };
}

// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm/index.js + 28 modules
var esm = __webpack_require__(5040);
;// CONCATENATED MODULE: ./app/(root)/test/streaming.js


const socket = (0,esm.io)("http://localhost:3001"); // Kết nối đến server
const channelToSubscription = new Map();
// Khi kết nối thành công
socket.on("connect", ()=>{
    console.log("[socket] Connected");
});
// Khi ngắt kết nối
socket.on("disconnect", ()=>{
    console.log("[socket] Disconnected");
});
// Khi nhận được tin nhắn từ server
socket.on("message", (data)=>{
    // debugger;
    // const data = JSON.parse(event.data);
    console.log("[socket] Message:", data);
    const { TYPE: eventTypeStr, M: exchange, FSYM: fromSymbol, TSYM: toSymbol, TS: tradeTimeStr, P: tradePriceStr } = data;
    if (parseInt(eventTypeStr) !== 0) {
        // Skip all non-trading events
        return;
    }
    const tradePrice = parseFloat(tradePriceStr);
    const tradeTime = parseInt(tradeTimeStr);
    const channelString = "0~".concat(exchange, "~").concat(fromSymbol, "~").concat(toSymbol);
    const subscriptionItem = channelToSubscription.get(channelString);
    console.log("=====================subscriptionItem", subscriptionItem);
    if (subscriptionItem === undefined) {
        return;
    }
    const lastDailyBar = subscriptionItem.lastDailyBar;
    const nextDailyBarTime = getNextDailyBarTime(lastDailyBar.time);
    let bar;
    console.log("=====================", tradeTime);
    console.log(nextDailyBarTime);
    if (tradeTime >= nextDailyBarTime) {
        bar = {
            time: nextDailyBarTime,
            open: tradePrice,
            high: tradePrice,
            low: tradePrice,
            close: tradePrice
        };
        console.log("[socket] Generate new bar", bar);
    } else {
        bar = {
            ...lastDailyBar,
            high: Math.max(lastDailyBar.high, tradePrice),
            low: Math.min(lastDailyBar.low, tradePrice),
            close: tradePrice
        };
        console.log("[socket] Update the latest bar by price", tradePrice);
    }
    subscriptionItem.lastDailyBar = bar;
    // Send data to every subscriber of that symbol
    subscriptionItem.handlers.forEach((handler)=>handler.callback(bar));
});
function getNextDailyBarTime(barTime) {
    const date = new Date(barTime * 1000);
    date.setDate(date.getDate() + 1);
    return date.getTime() / 1000;
}
function subscribeOnStream(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback, lastDailyBar) {
    const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
    const channelString = "0~".concat(parsedSymbol.exchange, "~").concat(parsedSymbol.fromSymbol, "~").concat(parsedSymbol.toSymbol);
    const handler = {
        id: subscriberUID,
        callback: onRealtimeCallback
    };
    let subscriptionItem = channelToSubscription.get(channelString);
    if (subscriptionItem) {
        // Already subscribed to the channel, use the existing subscription
        subscriptionItem.handlers.push(handler);
        return;
    }
    subscriptionItem = {
        subscriberUID,
        resolution,
        lastDailyBar,
        handlers: [
            handler
        ]
    };
    channelToSubscription.set(channelString, subscriptionItem);
    console.log("[subscribeBars]: Subscribe to streaming. Channel:", channelString);
    const subRequest = {
        action: "SubAdd",
        subs: [
            channelString
        ]
    };
    console.log("-----------------subRequest:", subRequest);
    socket.emit("SubAdd", JSON.stringify(subRequest));
}
function unsubscribeFromStream(subscriberUID) {
    // Find a subscription with id === subscriberUID
    for (const channelString of channelToSubscription.keys()){
        const subscriptionItem = channelToSubscription.get(channelString);
        const handlerIndex = subscriptionItem.handlers.findIndex((handler)=>handler.id === subscriberUID);
        if (handlerIndex !== -1) {
            // Remove from handlers
            subscriptionItem.handlers.splice(handlerIndex, 1);
            if (subscriptionItem.handlers.length === 0) {
                // Unsubscribe from the channel if it was the last handler
                console.log("[unsubscribeBars]: Unsubscribe from streaming. Channel:", channelString);
                const subRequest = {
                    action: "SubRemove",
                    subs: [
                        channelString
                    ]
                };
                console.log(subRequest);
                socket.emit("SubRemove", JSON.stringify(subRequest));
                channelToSubscription.delete(channelString);
                break;
            }
        }
    }
}

;// CONCATENATED MODULE: ./app/(root)/test/bundle2.js


const lastBarsCache = new Map();
// DatafeedConfiguration implementation
const configurationData = {
    // Represents the resolutions for bars supported by your datafeed
    supported_resolutions: [
        "1",
        "5",
        "1D",
        "1W",
        "1M"
    ],
    // The `exchanges` arguments are used for the `searchSymbols` method if a user selects the exchange
    exchanges: [
        {
            value: "Bitfinex",
            name: "Bitfinex",
            desc: "Bitfinex"
        },
        {
            value: "Kraken",
            // Filter name
            name: "Kraken",
            // Full exchange name displayed in the filter popup
            desc: "Kraken bitcoin exchange"
        }
    ],
    // The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
    symbols_types: [
        {
            name: "crypto",
            value: "crypto"
        }
    ]
};
// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getAllSymbols() {
    const data = await makeApiRequest("data/v3/all/exchanges");
    let allSymbols = [];
    for (const exchange of configurationData.exchanges){
        console.log(data);
        console.log(exchange.value);
        const pairs = data.Data[exchange.value].pairs;
        for (const leftPairPart of Object.keys(pairs)){
            const symbols = pairs[leftPairPart].map((rightPairPart)=>{
                const symbol = generateSymbol(exchange.value, leftPairPart, rightPairPart);
                return {
                    symbol: symbol.short,
                    full_name: symbol.full,
                    description: symbol.short,
                    exchange: exchange.value,
                    type: "crypto"
                };
            });
            allSymbols = [
                ...allSymbols,
                ...symbols
            ];
        }
    }
    return allSymbols;
}
/* harmony default export */ var bundle2 = ({
    onReady: (callback)=>{
        console.log("[onReady]: Method call");
        setTimeout(()=>callback(configurationData));
    },
    searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback)=>{
        console.log("[searchSymbols]: Method call");
        const symbols = await getAllSymbols();
        const newSymbols = symbols.filter((symbol)=>{
            const isExchangeValid = exchange === "" || symbol.exchange === exchange;
            const isFullSymbolContainsInput = symbol.full_name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;
            return isExchangeValid && isFullSymbolContainsInput;
        });
        onResultReadyCallback(newSymbols);
    },
    resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback, extension)=>{
        console.log("[resolveSymbol]: Method call", symbolName);
        const symbols = await getAllSymbols();
        const symbolItem = symbols.find((param)=>{
            let { symbol } = param;
            return symbol === symbolName;
        });
        console.log(symbolName);
        console.log(symbols);
        if (!symbolItem) {
            console.log("[resolveSymbol]: Cannot resolve symbol", symbolName);
            onResolveErrorCallback("cannot resolve symbol");
            return;
        }
        // Symbol information object
        const symbolInfo = {
            ticker: symbolItem.full_name,
            name: symbolItem.symbol,
            description: symbolItem.description,
            type: symbolItem.type,
            session: "24x7",
            timezone: "Etc/UTC",
            exchange: symbolItem.exchange,
            minmov: 1,
            pricescale: 100,
            has_intraday: true,
            has_no_volume: true,
            has_weekly_and_monthly: false,
            supported_resolutions: configurationData.supported_resolutions,
            volume_precision: 2,
            data_status: "streaming"
        };
        console.log("[resolveSymbol]: Symbol resolved", symbolName);
        onSymbolResolvedCallback(symbolInfo);
    },
    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback)=>{
        const { from, to, firstDataRequest } = periodParams;
        console.log("[getBars]: Method call", symbolInfo, resolution, from, to);
        const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
        const urlParameters = {
            e: parsedSymbol.exchange,
            fsym: parsedSymbol.fromSymbol,
            tsym: parsedSymbol.toSymbol,
            fromTs: from,
            toTs: to,
            limit: 2000,
            resolution: resolution
        };
        const query = Object.keys(urlParameters).map((name)=>"".concat(name, "=").concat(encodeURIComponent(urlParameters[name]))).join("&");
        try {
            const data = await makeApiLocalRequest("data/histoday?".concat(query));
            console.log("---------------------------------", query);
            // debugger;
            if (data.Response && data.Response === "Error" || data.Data.length === 0) {
                // "noData" should be set if there is no data in the requested period
                onHistoryCallback([], {
                    noData: true
                });
                return;
            }
            let bars = [];
            data.Data.forEach((bar)=>{
                if (bar.time >= from && bar.time < to) {
                    bars = [
                        ...bars,
                        {
                            time: bar.time * 1000,
                            low: bar.low,
                            high: bar.high,
                            open: bar.open,
                            close: bar.close
                        }
                    ];
                }
            });
            if (firstDataRequest) {
                lastBarsCache.set(symbolInfo.full_name, {
                    ...bars[bars.length - 1]
                });
            }
            console.log("[getBars]: returned ".concat(bars.length, " bar(s)"));
            onHistoryCallback(bars, {
                noData: false
            });
        } catch (error) {
            console.log("[getBars]: Get error", error);
            onErrorCallback(error);
        }
    },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)=>{
        console.log("[subscribeBars]: Method call with subscriberUID:", subscriberUID);
        subscribeOnStream(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback, lastBarsCache.get(symbolInfo.full_name));
    },
    unsubscribeBars: (subscriberUID)=>{
        console.log("[unsubscribeBars]: Method call with subscriberUID:", subscriberUID);
        unsubscribeFromStream(subscriberUID);
    }
});

;// CONCATENATED MODULE: ./app/(root)/test/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// import clsx from 'clsx';


const Test = ()=>{
    const chartContainerRef = (0,react.useRef)();
    const [active, setActive] = (0,react.useState)(false);
    const getParameterByName = (name)=>{
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(window.location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    // Hàm khởi tạo TradingView
    const initializeTradingView = ()=>{
        if (typeof window.TradingView !== "undefined") {
            console.log(222, window.TradingView.version);
            var chart = new window.TradingView.widget({
                debug: true,
                fullscreen: true,
                // symbol: 'XAUUSD',
                symbol: "ZK/USDT",
                interval: "5",
                container: chartContainerRef === null || chartContainerRef === void 0 ? void 0 : chartContainerRef.current,
                // datafeed: new window.Datafeeds.UDFCompatibleDatafeed('http://localhost:3000'), // URL của API bạn vừa tạo
                datafeed: bundle2,
                library_path: "/static/charting_library/",
                locale: getParameterByName("lang") || "en",
                drawings_access: {
                    type: "black",
                    tools: [
                        {
                            name: "Regression Trend"
                        }
                    ]
                },
                disabled_features: [
                    "use_localstorage_for_settings"
                ],
                enabled_features: [
                    "study_templates"
                ],
                // charts_storage_url: 'http://saveload.tradingview.com',
                charts_storage_api_version: "1.1",
                client_id: "tradingview.com",
                user_id: "public_user_id",
                // timeframe: '30',
                theme: "light"
            });
            // console.log(JSON.stringify(chart));
            setTimeout(()=>{
                chart.changeTheme("dark");
            }, 1000);
            setInterval(()=>{
                console.log("update fakedata");
                // chart.realtimeUpdate('XAUUSD', {});
                chart.changeTheme("dark");
            }, 1000);
        } else {
            console.error("TradingView is not loaded");
        }
    };
    // Sử dụng useEffect để khởi tạo TradingView
    (0,react.useEffect)(()=>{
        if (true) {
            initializeTradingView();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative w-full h-[700px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(script["default"], {
                src: "//code.jquery.com/jquery-1.11.2.min.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(script["default"], {
                src: "/static/charting_library/charting_library.js",
                onLoad: ()=>{
                    initializeTradingView();
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(script["default"], {
                src: "/static/charting_library/datafeeds/udf/dist/bundle.js",
                strategy: "beforeInteractive"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    width: "100%",
                    position: "fixed",
                    height: "80vh",
                    top: "0",
                    left: "0"
                },
                className: "absolute top-[50px] left-[100px] w-[100px] h-[100px] rounded-[10px] bg-green-400 transition-all duration-500 ease ".concat(active ? "w-[200px] h-[200px]" : ""),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        ref: chartContainerRef
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        className: "mt-[20px] ml-[20px] w-[50px] h-[50px] border-none rounded-[10px] bg-red-300 text-white",
                        onClick: ()=>setActive(!active),
                        children: "Button"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var page = (Test);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [539,335,744], function() { return __webpack_exec__(9013); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);