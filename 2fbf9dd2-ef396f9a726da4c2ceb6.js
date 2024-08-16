/*! For license information please see 2fbf9dd2-ef396f9a726da4c2ceb6.js.LICENSE.txt */
"use strict";
(self.webpackChunkgatsby_mxp_project = self.webpackChunkgatsby_mxp_project || []).push([
    [3374], {
        97128: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                Controls: function() {
                    return Controls
                },
                Player: function() {
                    return Player
                },
                PlayerEvent: function() {
                    return PlayerEvent
                },
                PlayerState: function() {
                    return PlayerState
                },
                Seeker: function() {
                    return Seeker
                },
                parseSrc: function() {
                    return parseSrc
                }
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540),
                extendStatics = function(t, e) {
                    return (extendStatics = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                        })(t, e)
                };

            function __extends(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function r() {
                    this.constructor = t
                }
                extendStatics(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
            var __assign = function() {
                return (__assign = Object.assign || function(t) {
                    for (var e, r = 1, i = arguments.length; r < i; r++)
                        for (var a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                    return t
                }).apply(this, arguments)
            };

            function __rest(t, e) {
                var r = {};
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (i = Object.getOwnPropertySymbols(t); a < i.length; a++) e.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[a]) && (r[i[a]] = t[i[a]])
                }
                return r
            }

            function __decorate(t, e, r, i) {
                var a, s = arguments.length,
                    n = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, i);
                else
                    for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (n = (s < 3 ? a(n) : s > 3 ? a(e, r, n) : a(e, r)) || n);
                return s > 3 && n && Object.defineProperty(e, r, n), n
            }

            function __param(t, e) {
                return function(r, i) {
                    e(r, i, t)
                }
            }

            function __metadata(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function __awaiter(t, e, r, i) {
                return new(r || (r = Promise))((function(a, s) {
                    function n(t) {
                        try {
                            h(i.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function o(t) {
                        try {
                            h(i.throw(t))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function h(t) {
                        var e;
                        t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                            t(e)
                        }))).then(n, o)
                    }
                    h((i = i.apply(t, e || [])).next())
                }))
            }

            function __generator(t, e) {
                var r, i, a, s, n = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(s) {
                    return function(o) {
                        return function(s) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; n;) try {
                                if (r = 1, i && (a = 2 & s[0] ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
                                switch (i = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        return n.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        n.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = n.ops.pop(), n.trys.pop();
                                        continue;
                                    default:
                                        if (!((a = (a = n.trys).length > 0 && a[a.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                            n = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            n.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && n.label < a[1]) {
                                            n.label = a[1], a = s;
                                            break
                                        }
                                        if (a && n.label < a[2]) {
                                            n.label = a[2], n.ops.push(s);
                                            break
                                        }
                                        a[2] && n.ops.pop(), n.trys.pop();
                                        continue
                                }
                                s = e.call(t, n)
                            } catch (t) {
                                s = [6, t], i = 0
                            } finally {
                                r = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, o])
                    }
                }
            }
            var __createBinding = Object.create ? function(t, e, r, i) {
                void 0 === i && (i = r), Object.defineProperty(t, i, {
                    enumerable: !0,
                    get: function() {
                        return e[r]
                    }
                })
            } : function(t, e, r, i) {
                void 0 === i && (i = r), t[i] = e[r]
            };

            function __exportStar(t, e) {
                for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || __createBinding(e, t, r)
            }

            function __values(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    r = e && t[e],
                    i = 0;
                if (r) return r.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function __read(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var i, a, s = r.call(t),
                    n = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(i = s.next()).done;) n.push(i.value)
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return n
            }

            function __spread() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
                return t
            }

            function __spreadArrays() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var i = Array(t),
                    a = 0;
                for (e = 0; e < r; e++)
                    for (var s = arguments[e], n = 0, o = s.length; n < o; n++, a++) i[a] = s[n];
                return i
            }

            function __spreadArray(t, e, r) {
                if (r || 2 === arguments.length)
                    for (var i, a = 0, s = e.length; a < s; a++) !i && a in e || (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
                return t.concat(i || Array.prototype.slice.call(e))
            }

            function __await(t) {
                return this instanceof __await ? (this.v = t, this) : new __await(t)
            }

            function __asyncGenerator(t, e, r) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var i, a = r.apply(t, e || []),
                    s = [];
                return i = {}, n("next"), n("throw"), n("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function n(t) {
                    a[t] && (i[t] = function(e) {
                        return new Promise((function(r, i) {
                            s.push([t, e, r, i]) > 1 || o(t, e)
                        }))
                    })
                }

                function o(t, e) {
                    try {
                        (r = a[t](e)).value instanceof __await ? Promise.resolve(r.value.v).then(h, l) : p(s[0][2], r)
                    } catch (t) {
                        p(s[0][3], t)
                    }
                    var r
                }

                function h(t) {
                    o("next", t)
                }

                function l(t) {
                    o("throw", t)
                }

                function p(t, e) {
                    t(e), s.shift(), s.length && o(s[0][0], s[0][1])
                }
            }

            function __asyncDelegator(t) {
                var e, r;
                return e = {}, i("next"), i("throw", (function(t) {
                    throw t
                })), i("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function i(i, a) {
                    e[i] = t[i] ? function(e) {
                        return (r = !r) ? {
                            value: __await(t[i](e)),
                            done: "return" === i
                        } : a ? a(e) : e
                    } : a
                }
            }

            function __asyncValues(t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, r = t[Symbol.asyncIterator];
                return r ? r.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function i(r) {
                    e[r] = t[r] && function(e) {
                        return new Promise((function(i, a) {
                            ! function(t, e, r, i) {
                                Promise.resolve(i).then((function(e) {
                                    t({
                                        value: e,
                                        done: r
                                    })
                                }), e)
                            }(i, a, (e = t[r](e)).done, e.value)
                        }))
                    }
                }
            }

            function __makeTemplateObject(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }
            var __setModuleDefault = Object.create ? function(t, e) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                })
            } : function(t, e) {
                t.default = e
            };

            function __importStar(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
                return __setModuleDefault(e, t), e
            }

            function __importDefault(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function __classPrivateFieldGet(t, e, r, i) {
                if ("a" === r && !i) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === r ? i : "a" === r ? i.call(t) : i ? i.value : e.get(t)
            }

            function __classPrivateFieldSet(t, e, r, i, a) {
                if ("m" === i) throw new TypeError("Private method is not writable");
                if ("a" === i && !a) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !a : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === i ? a.call(t, r) : a ? a.value = r : e.set(t, r), r
            }
            var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {};

            function unwrapExports(t) {
                return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
            }

            function createCommonjsModule(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports
            }

            function getCjsExportFromNamespace(t) {
                return t && t.default || t
            }

            function commonjsRequire() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }
            var lottie = createCommonjsModule((function(module, exports) {
                    var e;
                    "undefined" != typeof navigator && (e = function() {
                        var svgNS = "http://www.w3.org/2000/svg",
                            locationHref = "",
                            _useWebWorker = !1,
                            initialDefaultFrame = -999999,
                            setWebWorker = function(t) {
                                _useWebWorker = !!t
                            },
                            getWebWorker = function() {
                                return _useWebWorker
                            },
                            setLocationHref = function(t) {
                                locationHref = t
                            },
                            getLocationHref = function() {
                                return locationHref
                            };

                        function createTag(t) {
                            return document.createElement(t)
                        }

                        function extendPrototype(t, e) {
                            var r, i, a = t.length;
                            for (r = 0; r < a; r += 1)
                                for (var s in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s])
                        }

                        function getDescriptor(t, e) {
                            return Object.getOwnPropertyDescriptor(t, e)
                        }

                        function createProxyFunction(t) {
                            function e() {}
                            return e.prototype = t, e
                        }
                        var audioControllerFactory = function() {
                                function t(t) {
                                    this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                                }
                                return t.prototype = {
                                        addAudio: function(t) {
                                            this.audios.push(t)
                                        },
                                        pause: function() {
                                            var t, e = this.audios.length;
                                            for (t = 0; t < e; t += 1) this.audios[t].pause()
                                        },
                                        resume: function() {
                                            var t, e = this.audios.length;
                                            for (t = 0; t < e; t += 1) this.audios[t].resume()
                                        },
                                        setRate: function(t) {
                                            var e, r = this.audios.length;
                                            for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                                        },
                                        createAudio: function(t) {
                                            return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                                src: [t]
                                            }) : {
                                                isPlaying: !1,
                                                play: function() {
                                                    this.isPlaying = !0
                                                },
                                                seek: function() {
                                                    this.isPlaying = !1
                                                },
                                                playing: function() {},
                                                rate: function() {},
                                                setVolume: function() {}
                                            }
                                        },
                                        setAudioFactory: function(t) {
                                            this.audioFactory = t
                                        },
                                        setVolume: function(t) {
                                            this._volume = t, this._updateVolume()
                                        },
                                        mute: function() {
                                            this._isMuted = !0, this._updateVolume()
                                        },
                                        unmute: function() {
                                            this._isMuted = !1, this._updateVolume()
                                        },
                                        getVolume: function() {
                                            return this._volume
                                        },
                                        _updateVolume: function() {
                                            var t, e = this.audios.length;
                                            for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                        }
                                    },
                                    function() {
                                        return new t
                                    }
                            }(),
                            createTypedArray = function() {
                                function t(t, e) {
                                    var r, i = 0,
                                        a = [];
                                    switch (t) {
                                        case "int16":
                                        case "uint8c":
                                            r = 1;
                                            break;
                                        default:
                                            r = 1.1
                                    }
                                    for (i = 0; i < e; i += 1) a.push(r);
                                    return a
                                }
                                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
                                    return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
                                } : t
                            }();

                        function createSizedArray(t) {
                            return Array.apply(null, {
                                length: t
                            })
                        }

                        function _typeof$6(t) {
                            return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var subframeEnabled = !0,
                            expressionsPlugin = null,
                            expressionsInterfaces = null,
                            idPrefix$1 = "",
                            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                            _shouldRoundValues = !1,
                            bmPow = Math.pow,
                            bmSqrt = Math.sqrt,
                            bmFloor = Math.floor,
                            bmMax = Math.max,
                            bmMin = Math.min,
                            BMMath = {};

                        function ProjectInterface$1() {
                            return {}
                        }! function() {
                            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                                r = e.length;
                            for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
                        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                            if ("object" === _typeof$6(t) && t.length) {
                                var e, r = createSizedArray(t.length),
                                    i = t.length;
                                for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                                return r
                            }
                            return Math.abs(t)
                        };
                        var defaultCurveSegments = 150,
                            degToRads = Math.PI / 180,
                            roundCorner = .5519;

                        function roundValues(t) {
                            _shouldRoundValues = !!t
                        }

                        function bmRnd(t) {
                            return _shouldRoundValues ? Math.round(t) : t
                        }

                        function styleDiv(t) {
                            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                        }

                        function BMEnterFrameEvent(t, e, r, i) {
                            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
                        }

                        function BMCompleteEvent(t, e) {
                            this.type = t, this.direction = e < 0 ? -1 : 1
                        }

                        function BMCompleteLoopEvent(t, e, r, i) {
                            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                        }

                        function BMSegmentStartEvent(t, e, r) {
                            this.type = t, this.firstFrame = e, this.totalFrames = r
                        }

                        function BMDestroyEvent(t, e) {
                            this.type = t, this.target = e
                        }

                        function BMRenderFrameErrorEvent(t, e) {
                            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                        }

                        function BMConfigErrorEvent(t) {
                            this.type = "configError", this.nativeError = t
                        }

                        function BMAnimationConfigErrorEvent(t, e) {
                            this.type = t, this.nativeError = e
                        }
                        var createElementID = (_count = 0, function() {
                                return idPrefix$1 + "__lottie_element_" + (_count += 1)
                            }),
                            _count;

                        function HSVtoRGB(t, e, r) {
                            var i, a, s, n, o, h, l, p;
                            switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
                                case 0:
                                    i = r, a = p, s = h;
                                    break;
                                case 1:
                                    i = l, a = r, s = h;
                                    break;
                                case 2:
                                    i = h, a = r, s = p;
                                    break;
                                case 3:
                                    i = h, a = l, s = r;
                                    break;
                                case 4:
                                    i = p, a = h, s = r;
                                    break;
                                case 5:
                                    i = r, a = h, s = l
                            }
                            return [i, a, s]
                        }

                        function RGBtoHSV(t, e, r) {
                            var i, a = Math.max(t, e, r),
                                s = Math.min(t, e, r),
                                n = a - s,
                                o = 0 === a ? 0 : n / a,
                                h = a / 255;
                            switch (a) {
                                case s:
                                    i = 0;
                                    break;
                                case t:
                                    i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
                                    break;
                                case e:
                                    i = r - t + 2 * n, i /= 6 * n;
                                    break;
                                case r:
                                    i = t - e + 4 * n, i /= 6 * n
                            }
                            return [i, o, h]
                        }

                        function addSaturationToRGB(t, e) {
                            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
                        }

                        function addBrightnessToRGB(t, e) {
                            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
                        }

                        function addHueToRGB(t, e) {
                            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
                        }
                        var rgbToHex = function() {
                                var t, e, r = [];
                                for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
                                return function(t, e, i) {
                                    return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
                                }
                            }(),
                            setSubframeEnabled = function(t) {
                                subframeEnabled = !!t
                            },
                            getSubframeEnabled = function() {
                                return subframeEnabled
                            },
                            setExpressionsPlugin = function(t) {
                                expressionsPlugin = t
                            },
                            getExpressionsPlugin = function() {
                                return expressionsPlugin
                            },
                            setExpressionInterfaces = function(t) {
                                expressionsInterfaces = t
                            },
                            getExpressionInterfaces = function() {
                                return expressionsInterfaces
                            },
                            setDefaultCurveSegments = function(t) {
                                defaultCurveSegments = t
                            },
                            getDefaultCurveSegments = function() {
                                return defaultCurveSegments
                            },
                            setIdPrefix = function(t) {
                                idPrefix$1 = t
                            },
                            getIdPrefix = function() {
                                return idPrefix$1
                            };

                        function createNS(t) {
                            return document.createElementNS(svgNS, t)
                        }

                        function _typeof$5(t) {
                            return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var dataManager = function() {
                                var t, e, r = 1,
                                    i = [],
                                    a = {
                                        onmessage: function() {},
                                        postMessage: function(e) {
                                            t({
                                                data: e
                                            })
                                        }
                                    },
                                    s = {
                                        postMessage: function(t) {
                                            a.onmessage({
                                                data: t
                                            })
                                        }
                                    };

                                function n() {
                                    e || ((e = function(e) {
                                        if (window.Worker && window.Blob && getWebWorker()) {
                                            var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                                    type: "text/javascript"
                                                }),
                                                i = URL.createObjectURL(r);
                                            return new Worker(i)
                                        }
                                        return t = e, a
                                    }((function(t) {
                                        if (s.dataManager || (s.dataManager = function() {
                                                function t(a, s) {
                                                    var n, o, h, l, p, c, m = a.length;
                                                    for (o = 0; o < m; o += 1)
                                                        if ("ks" in (n = a[o]) && !n.completed) {
                                                            if (n.completed = !0, n.hasMask) {
                                                                var d = n.masksProperties;
                                                                for (l = d.length, h = 0; h < l; h += 1)
                                                                    if (d[h].pt.k.i) i(d[h].pt.k);
                                                                    else
                                                                        for (c = d[h].pt.k.length, p = 0; p < c; p += 1) d[h].pt.k[p].s && i(d[h].pt.k[p].s[0]), d[h].pt.k[p].e && i(d[h].pt.k[p].e[0])
                                                            }
                                                            0 === n.ty ? (n.layers = e(n.refId, s), t(n.layers, s)) : 4 === n.ty ? r(n.shapes) : 5 === n.ty && f(n)
                                                        }
                                                }

                                                function e(t, e) {
                                                    var r = function(t, e) {
                                                        for (var r = 0, i = e.length; r < i;) {
                                                            if (e[r].id === t) return e[r];
                                                            r += 1
                                                        }
                                                        return null
                                                    }(t, e);
                                                    return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                                                }

                                                function r(t) {
                                                    var e, a, s;
                                                    for (e = t.length - 1; e >= 0; e -= 1)
                                                        if ("sh" === t[e].ty)
                                                            if (t[e].ks.k.i) i(t[e].ks.k);
                                                            else
                                                                for (s = t[e].ks.k.length, a = 0; a < s; a += 1) t[e].ks.k[a].s && i(t[e].ks.k[a].s[0]), t[e].ks.k[a].e && i(t[e].ks.k[a].e[0]);
                                                    else "gr" === t[e].ty && r(t[e].it)
                                                }

                                                function i(t) {
                                                    var e, r = t.i.length;
                                                    for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                                }

                                                function a(t, e) {
                                                    var r = e ? e.split(".") : [100, 100, 100];
                                                    return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                                                }
                                                var s, n = function() {
                                                        var t = [4, 4, 14];

                                                        function e(t) {
                                                            var e, r, i, a = t.length;
                                                            for (e = 0; e < a; e += 1) 5 === t[e].ty && (i = (r = t[e]).t.d, r.t.d = {
                                                                k: [{
                                                                    s: i,
                                                                    t: 0
                                                                }]
                                                            })
                                                        }
                                                        return function(r) {
                                                            if (a(t, r.v) && (e(r.layers), r.assets)) {
                                                                var i, s = r.assets.length;
                                                                for (i = 0; i < s; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                                                            }
                                                        }
                                                    }(),
                                                    o = (s = [4, 7, 99], function(t) {
                                                        if (t.chars && !a(s, t.v)) {
                                                            var e, i = t.chars.length;
                                                            for (e = 0; e < i; e += 1) {
                                                                var n = t.chars[e];
                                                                n.data && n.data.shapes && (r(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
                                                                    p: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    s: {
                                                                        k: [100, 100],
                                                                        a: 0
                                                                    },
                                                                    a: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    r: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    o: {
                                                                        k: 100,
                                                                        a: 0
                                                                    }
                                                                }, t.chars[e].t || (n.data.shapes.push({
                                                                    ty: "no"
                                                                }), n.data.shapes[0].it.push({
                                                                    p: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    s: {
                                                                        k: [100, 100],
                                                                        a: 0
                                                                    },
                                                                    a: {
                                                                        k: [0, 0],
                                                                        a: 0
                                                                    },
                                                                    r: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    o: {
                                                                        k: 100,
                                                                        a: 0
                                                                    },
                                                                    sk: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    sa: {
                                                                        k: 0,
                                                                        a: 0
                                                                    },
                                                                    ty: "tr"
                                                                })))
                                                            }
                                                        }
                                                    }),
                                                    h = function() {
                                                        var t = [5, 7, 15];

                                                        function e(t) {
                                                            var e, r, i = t.length;
                                                            for (e = 0; e < i; e += 1) 5 === t[e].ty && (r = void 0, "number" == typeof(r = t[e].t.p).a && (r.a = {
                                                                a: 0,
                                                                k: r.a
                                                            }), "number" == typeof r.p && (r.p = {
                                                                a: 0,
                                                                k: r.p
                                                            }), "number" == typeof r.r && (r.r = {
                                                                a: 0,
                                                                k: r.r
                                                            }))
                                                        }
                                                        return function(r) {
                                                            if (a(t, r.v) && (e(r.layers), r.assets)) {
                                                                var i, s = r.assets.length;
                                                                for (i = 0; i < s; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                                                            }
                                                        }
                                                    }(),
                                                    l = function() {
                                                        var t = [4, 1, 9];

                                                        function e(t) {
                                                            var r, i, a, s = t.length;
                                                            for (r = 0; r < s; r += 1)
                                                                if ("gr" === t[r].ty) e(t[r].it);
                                                                else if ("fl" === t[r].ty || "st" === t[r].ty)
                                                                if (t[r].c.k && t[r].c.k[0].i)
                                                                    for (a = t[r].c.k.length, i = 0; i < a; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                                                                else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                                                        }

                                                        function r(t) {
                                                            var r, i = t.length;
                                                            for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                                                        }
                                                        return function(e) {
                                                            if (a(t, e.v) && (r(e.layers), e.assets)) {
                                                                var i, s = e.assets.length;
                                                                for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                            }
                                                        }
                                                    }(),
                                                    p = function() {
                                                        var t = [4, 4, 18];

                                                        function e(t) {
                                                            var r, i, a;
                                                            for (r = t.length - 1; r >= 0; r -= 1)
                                                                if ("sh" === t[r].ty)
                                                                    if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                                                    else
                                                                        for (a = t[r].ks.k.length, i = 0; i < a; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                                                            else "gr" === t[r].ty && e(t[r].it)
                                                        }

                                                        function r(t) {
                                                            var r, i, a, s, n, o, h = t.length;
                                                            for (i = 0; i < h; i += 1) {
                                                                if ((r = t[i]).hasMask) {
                                                                    var l = r.masksProperties;
                                                                    for (s = l.length, a = 0; a < s; a += 1)
                                                                        if (l[a].pt.k.i) l[a].pt.k.c = l[a].cl;
                                                                        else
                                                                            for (o = l[a].pt.k.length, n = 0; n < o; n += 1) l[a].pt.k[n].s && (l[a].pt.k[n].s[0].c = l[a].cl), l[a].pt.k[n].e && (l[a].pt.k[n].e[0].c = l[a].cl)
                                                                }
                                                                4 === r.ty && e(r.shapes)
                                                            }
                                                        }
                                                        return function(e) {
                                                            if (a(t, e.v) && (r(e.layers), e.assets)) {
                                                                var i, s = e.assets.length;
                                                                for (i = 0; i < s; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                            }
                                                        }
                                                    }();

                                                function f(t) {
                                                    0 === t.t.a.length && t.t.p
                                                }
                                                var c = {
                                                    completeData: function(r) {
                                                        r.__complete || (l(r), n(r), o(r), h(r), p(r), t(r.layers, r.assets), function(r, i) {
                                                            if (r) {
                                                                var a = 0,
                                                                    s = r.length;
                                                                for (a = 0; a < s; a += 1) 1 === r[a].t && (r[a].data.layers = e(r[a].data.refId, i), t(r[a].data.layers, i))
                                                            }
                                                        }(r.chars, r.assets), r.__complete = !0)
                                                    }
                                                };
                                                return c.checkColors = l, c.checkChars = o, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t, c
                                            }()), s.assetLoader || (s.assetLoader = function() {
                                                function t(t) {
                                                    var e = t.getResponseHeader("content-type");
                                                    return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                                }
                                                return {
                                                    load: function(e, r, i, a) {
                                                        var s, n = new XMLHttpRequest;
                                                        try {
                                                            n.responseType = "json"
                                                        } catch (t) {}
                                                        n.onreadystatechange = function() {
                                                            if (4 === n.readyState)
                                                                if (200 === n.status) s = t(n), i(s);
                                                                else try {
                                                                    s = t(n), i(s)
                                                                } catch (t) {
                                                                    a && a(t)
                                                                }
                                                        };
                                                        try {
                                                            n.open(["G", "E", "T"].join(""), e, !0)
                                                        } catch (t) {
                                                            n.open(["G", "E", "T"].join(""), r + "/" + e, !0)
                                                        }
                                                        n.send()
                                                    }
                                                }
                                            }()), "loadAnimation" === t.data.type) s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                            s.dataManager.completeData(e), s.postMessage({
                                                id: t.data.id,
                                                payload: e,
                                                status: "success"
                                            })
                                        }), (function() {
                                            s.postMessage({
                                                id: t.data.id,
                                                status: "error"
                                            })
                                        }));
                                        else if ("complete" === t.data.type) {
                                            var e = t.data.animation;
                                            s.dataManager.completeData(e), s.postMessage({
                                                id: t.data.id,
                                                payload: e,
                                                status: "success"
                                            })
                                        } else "loadData" === t.data.type && s.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                            s.postMessage({
                                                id: t.data.id,
                                                payload: e,
                                                status: "success"
                                            })
                                        }), (function() {
                                            s.postMessage({
                                                id: t.data.id,
                                                status: "error"
                                            })
                                        }))
                                    }))).onmessage = function(t) {
                                        var e = t.data,
                                            r = e.id,
                                            a = i[r];
                                        i[r] = null, "success" === e.status ? a.onComplete(e.payload) : a.onError && a.onError()
                                    })
                                }

                                function o(t, e) {
                                    var a = "processId_" + (r += 1);
                                    return i[a] = {
                                        onComplete: t,
                                        onError: e
                                    }, a
                                }
                                return {
                                    loadAnimation: function(t, r, i) {
                                        n();
                                        var a = o(r, i);
                                        e.postMessage({
                                            type: "loadAnimation",
                                            path: t,
                                            fullPath: window.location.origin + window.location.pathname,
                                            id: a
                                        })
                                    },
                                    loadData: function(t, r, i) {
                                        n();
                                        var a = o(r, i);
                                        e.postMessage({
                                            type: "loadData",
                                            path: t,
                                            fullPath: window.location.origin + window.location.pathname,
                                            id: a
                                        })
                                    },
                                    completeAnimation: function(t, r, i) {
                                        n();
                                        var a = o(r, i);
                                        e.postMessage({
                                            type: "complete",
                                            animation: t,
                                            id: a
                                        })
                                    }
                                }
                            }(),
                            ImagePreloader = function() {
                                var t = function() {
                                    var t = createTag("canvas");
                                    t.width = 1, t.height = 1;
                                    var e = t.getContext("2d");
                                    return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                                }();

                                function e() {
                                    this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                                }

                                function r() {
                                    this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                                }

                                function i(t, e, r) {
                                    var i = "";
                                    if (t.e) i = t.p;
                                    else if (e) {
                                        var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
                                    } else i = r, i += t.u ? t.u : "", i += t.p;
                                    return i
                                }

                                function a(t) {
                                    var e = 0,
                                        r = setInterval(function() {
                                            (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                                        }.bind(this), 50)
                                }

                                function s(t) {
                                    var e = {
                                            assetData: t
                                        },
                                        r = i(t, this.assetsPath, this.path);
                                    return dataManager.loadData(r, function(t) {
                                        e.img = t, this._footageLoaded()
                                    }.bind(this), function() {
                                        e.img = {}, this._footageLoaded()
                                    }.bind(this)), e
                                }

                                function n() {
                                    this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                                }
                                return n.prototype = {
                                    loadAssets: function(t, e) {
                                        var r;
                                        this.imagesLoadedCb = e;
                                        var i = t.length;
                                        for (r = 0; r < i; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
                                    },
                                    setAssetsPath: function(t) {
                                        this.assetsPath = t || ""
                                    },
                                    setPath: function(t) {
                                        this.path = t || ""
                                    },
                                    loadedImages: function() {
                                        return this.totalImages === this.loadedAssets
                                    },
                                    loadedFootages: function() {
                                        return this.totalFootages === this.loadedFootagesCount
                                    },
                                    destroy: function() {
                                        this.imagesLoadedCb = null, this.images.length = 0
                                    },
                                    getAsset: function(t) {
                                        for (var e = 0, r = this.images.length; e < r;) {
                                            if (this.images[e].assetData === t) return this.images[e].img;
                                            e += 1
                                        }
                                        return null
                                    },
                                    createImgData: function(e) {
                                        var r = i(e, this.assetsPath, this.path),
                                            a = createTag("img");
                                        a.crossOrigin = "anonymous", a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                                            s.img = t, this._imageLoaded()
                                        }.bind(this), !1), a.src = r;
                                        var s = {
                                            img: a,
                                            assetData: e
                                        };
                                        return s
                                    },
                                    createImageData: function(e) {
                                        var r = i(e, this.assetsPath, this.path),
                                            a = createNS("image");
                                        isSafari ? this.testImageLoaded(a) : a.addEventListener("load", this._imageLoaded, !1), a.addEventListener("error", function() {
                                            s.img = t, this._imageLoaded()
                                        }.bind(this), !1), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                                        var s = {
                                            img: a,
                                            assetData: e
                                        };
                                        return s
                                    },
                                    imageLoaded: e,
                                    footageLoaded: r,
                                    setCacheType: function(t, e) {
                                        "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                                    }
                                }, n
                            }();

                        function BaseEvent() {}
                        BaseEvent.prototype = {
                            triggerEvent: function(t, e) {
                                if (this._cbs[t])
                                    for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
                            },
                            addEventListener: function(t, e) {
                                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                                    function() {
                                        this.removeEventListener(t, e)
                                    }.bind(this)
                            },
                            removeEventListener: function(t, e) {
                                if (e) {
                                    if (this._cbs[t]) {
                                        for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                                        this._cbs[t].length || (this._cbs[t] = null)
                                    }
                                } else this._cbs[t] = null
                            }
                        };
                        var markerParser = function() {
                                function t(t) {
                                    for (var e, r = t.split("\r\n"), i = {}, a = 0, s = 0; s < r.length; s += 1) 2 === (e = r[s].split(":")).length && (i[e[0]] = e[1].trim(), a += 1);
                                    if (0 === a) throw new Error;
                                    return i
                                }
                                return function(e) {
                                    for (var r = [], i = 0; i < e.length; i += 1) {
                                        var a = e[i],
                                            s = {
                                                time: a.tm,
                                                duration: a.dr
                                            };
                                        try {
                                            s.payload = JSON.parse(e[i].cm)
                                        } catch (r) {
                                            try {
                                                s.payload = t(e[i].cm)
                                            } catch (t) {
                                                s.payload = {
                                                    name: e[i].cm
                                                }
                                            }
                                        }
                                        r.push(s)
                                    }
                                    return r
                                }
                            }(),
                            ProjectInterface = function() {
                                function t(t) {
                                    this.compositions.push(t)
                                }
                                return function() {
                                    function e(t) {
                                        for (var e = 0, r = this.compositions.length; e < r;) {
                                            if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                            e += 1
                                        }
                                        return null
                                    }
                                    return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                                }
                            }(),
                            renderers = {},
                            registerRenderer = function(t, e) {
                                renderers[t] = e
                            };

                        function getRenderer(t) {
                            return renderers[t]
                        }

                        function _typeof$4(t) {
                            return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var AnimationItem = function() {
                            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
                        };
                        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                            var e = "svg";
                            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
                            var r = getRenderer(e);
                            this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                        }, AnimationItem.prototype.onSetupError = function() {
                            this.trigger("data_failed")
                        }, AnimationItem.prototype.setupAnimation = function(t) {
                            dataManager.completeAnimation(t, this.configAnimation)
                        }, AnimationItem.prototype.setData = function(t, e) {
                            e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
                            var r = {
                                    wrapper: t,
                                    animationData: e
                                },
                                i = t.attributes;
                            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                            var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                            "false" === a ? r.loop = !1 : "true" === a ? r.loop = !0 : "" !== a && (r.loop = parseInt(a, 10));
                            var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                            r.autoplay = "false" !== s, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
                        }, AnimationItem.prototype.includeLayers = function(t) {
                            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                            var e, r, i = this.animationData.layers,
                                a = i.length,
                                s = t.layers,
                                n = s.length;
                            for (r = 0; r < n; r += 1)
                                for (e = 0; e < a;) {
                                    if (i[e].id === s[r].id) {
                                        i[e] = s[r];
                                        break
                                    }
                                    e += 1
                                }
                            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                                for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
                            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                        }, AnimationItem.prototype.onSegmentComplete = function(t) {
                            this.animationData = t;
                            var e = getExpressionsPlugin();
                            e && e.initExpressions(this), this.loadNextSegment()
                        }, AnimationItem.prototype.loadNextSegment = function() {
                            var t = this.animationData.segments;
                            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                            var e = t.shift();
                            this.timeCompleted = e.time * this.frameRate;
                            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                            this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                                this.trigger("data_failed")
                            }.bind(this))
                        }, AnimationItem.prototype.loadSegments = function() {
                            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                        }, AnimationItem.prototype.imagesLoaded = function() {
                            this.trigger("loaded_images"), this.checkLoaded()
                        }, AnimationItem.prototype.preloadImages = function() {
                            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                        }, AnimationItem.prototype.configAnimation = function(t) {
                            if (this.renderer) try {
                                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                            } catch (t) {
                                this.triggerConfigError(t)
                            }
                        }, AnimationItem.prototype.waitForFontsLoaded = function() {
                            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                        }, AnimationItem.prototype.checkLoaded = function() {
                            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                                this.isLoaded = !0;
                                var t = getExpressionsPlugin();
                                t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                                    this.trigger("DOMLoaded")
                                }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                            }
                        }, AnimationItem.prototype.resize = function(t, e) {
                            var r = "number" == typeof t ? t : void 0,
                                i = "number" == typeof e ? e : void 0;
                            this.renderer.updateContainerSize(r, i)
                        }, AnimationItem.prototype.setSubframe = function(t) {
                            this.isSubframeEnabled = !!t
                        }, AnimationItem.prototype.gotoFrame = function() {
                            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                        }, AnimationItem.prototype.renderFrame = function() {
                            if (!1 !== this.isLoaded && this.renderer) try {
                                this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                            } catch (t) {
                                this.triggerRenderFrameError(t)
                            }
                        }, AnimationItem.prototype.play = function(t) {
                            t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                        }, AnimationItem.prototype.pause = function(t) {
                            t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                        }, AnimationItem.prototype.togglePause = function(t) {
                            t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                        }, AnimationItem.prototype.stop = function(t) {
                            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                        }, AnimationItem.prototype.getMarkerData = function(t) {
                            for (var e, r = 0; r < this.markers.length; r += 1)
                                if ((e = this.markers[r]).payload && e.payload.name === t) return e;
                            return null
                        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
                            if (!r || this.name === r) {
                                var i = Number(t);
                                if (isNaN(i)) {
                                    var a = this.getMarkerData(t);
                                    a && this.goToAndStop(a.time, !0)
                                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                                this.pause()
                            }
                        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                            if (!r || this.name === r) {
                                var i = Number(t);
                                if (isNaN(i)) {
                                    var a = this.getMarkerData(t);
                                    a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0))
                                } else this.goToAndStop(i, e, r);
                                this.play()
                            }
                        }, AnimationItem.prototype.advanceTime = function(t) {
                            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                                var e = this.currentRawFrame + t * this.frameModifier,
                                    r = !1;
                                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                            }
                        }, AnimationItem.prototype.adjustSegment = function(t, e) {
                            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                        }, AnimationItem.prototype.setSegment = function(t, e) {
                            var r = -1;
                            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
                        }, AnimationItem.prototype.playSegments = function(t, e) {
                            if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                                var r, i = t.length;
                                for (r = 0; r < i; r += 1) this.segments.push(t[r])
                            } else this.segments.push(t);
                            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                        }, AnimationItem.prototype.resetSegments = function(t) {
                            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                        }, AnimationItem.prototype.checkSegments = function(t) {
                            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                        }, AnimationItem.prototype.destroy = function(t) {
                            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                            this.currentRawFrame = t, this.gotoFrame()
                        }, AnimationItem.prototype.setSpeed = function(t) {
                            this.playSpeed = t, this.updaFrameModifier()
                        }, AnimationItem.prototype.setDirection = function(t) {
                            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                        }, AnimationItem.prototype.setLoop = function(t) {
                            this.loop = t
                        }, AnimationItem.prototype.setVolume = function(t, e) {
                            e && this.name !== e || this.audioController.setVolume(t)
                        }, AnimationItem.prototype.getVolume = function() {
                            return this.audioController.getVolume()
                        }, AnimationItem.prototype.mute = function(t) {
                            t && this.name !== t || this.audioController.mute()
                        }, AnimationItem.prototype.unmute = function(t) {
                            t && this.name !== t || this.audioController.unmute()
                        }, AnimationItem.prototype.updaFrameModifier = function() {
                            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                        }, AnimationItem.prototype.getPath = function() {
                            return this.path
                        }, AnimationItem.prototype.getAssetsPath = function(t) {
                            var e = "";
                            if (t.e) e = t.p;
                            else if (this.assetsPath) {
                                var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
                            } else e = this.path, e += t.u ? t.u : "", e += t.p;
                            return e
                        }, AnimationItem.prototype.getAssetData = function(t) {
                            for (var e = 0, r = this.assets.length; e < r;) {
                                if (t === this.assets[e].id) return this.assets[e];
                                e += 1
                            }
                            return null
                        }, AnimationItem.prototype.hide = function() {
                            this.renderer.hide()
                        }, AnimationItem.prototype.show = function() {
                            this.renderer.show()
                        }, AnimationItem.prototype.getDuration = function(t) {
                            return t ? this.totalFrames : this.totalFrames / this.frameRate
                        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
                            try {
                                this.renderer.getElementByPath(t).updateDocumentData(e, r)
                            } catch (t) {}
                        }, AnimationItem.prototype.trigger = function(t) {
                            if (this._cbs && this._cbs[t]) switch (t) {
                                case "enterFrame":
                                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                                    break;
                                case "drawnFrame":
                                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                                    break;
                                case "loopComplete":
                                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                                    break;
                                case "complete":
                                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                                    break;
                                case "segmentStart":
                                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                                    break;
                                case "destroy":
                                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                                    break;
                                default:
                                    this.triggerEvent(t)
                            }
                            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                        }, AnimationItem.prototype.triggerConfigError = function(t) {
                            var e = new BMConfigErrorEvent(t, this.currentFrame);
                            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                        };
                        var animationManager = function() {
                                var t = {},
                                    e = [],
                                    r = 0,
                                    i = 0,
                                    a = 0,
                                    s = !0,
                                    n = !1;

                                function o(t) {
                                    for (var r = 0, a = t.target; r < i;) e[r].animation === a && (e.splice(r, 1), r -= 1, i -= 1, a.isPaused || p()), r += 1
                                }

                                function h(t, r) {
                                    if (!t) return null;
                                    for (var a = 0; a < i;) {
                                        if (e[a].elem === t && null !== e[a].elem) return e[a].animation;
                                        a += 1
                                    }
                                    var s = new AnimationItem;
                                    return f(s, t), s.setData(t, r), s
                                }

                                function l() {
                                    a += 1, d()
                                }

                                function p() {
                                    a -= 1
                                }

                                function f(t, r) {
                                    t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                                        elem: r,
                                        animation: t
                                    }), i += 1
                                }

                                function c(t) {
                                    var o, h = t - r;
                                    for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
                                    r = t, a && !n ? window.requestAnimationFrame(c) : s = !0
                                }

                                function m(t) {
                                    r = t, window.requestAnimationFrame(c)
                                }

                                function d() {
                                    !n && a && s && (window.requestAnimationFrame(m), s = !1)
                                }
                                return t.registerAnimation = h, t.loadAnimation = function(t) {
                                    var e = new AnimationItem;
                                    return f(e, null), e.setParams(t), e
                                }, t.setSpeed = function(t, r) {
                                    var a;
                                    for (a = 0; a < i; a += 1) e[a].animation.setSpeed(t, r)
                                }, t.setDirection = function(t, r) {
                                    var a;
                                    for (a = 0; a < i; a += 1) e[a].animation.setDirection(t, r)
                                }, t.play = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.play(t)
                                }, t.pause = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.pause(t)
                                }, t.stop = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.stop(t)
                                }, t.togglePause = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
                                }, t.searchAnimations = function(t, e, r) {
                                    var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                        s = a.length;
                                    for (i = 0; i < s; i += 1) r && a[i].setAttribute("data-bm-type", r), h(a[i], t);
                                    if (e && 0 === s) {
                                        r || (r = "svg");
                                        var n = document.getElementsByTagName("body")[0];
                                        n.innerText = "";
                                        var o = createTag("div");
                                        o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), h(o, t)
                                    }
                                }, t.resize = function() {
                                    var t;
                                    for (t = 0; t < i; t += 1) e[t].animation.resize()
                                }, t.goToAndStop = function(t, r, a) {
                                    var s;
                                    for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, r, a)
                                }, t.destroy = function(t) {
                                    var r;
                                    for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
                                }, t.freeze = function() {
                                    n = !0
                                }, t.unfreeze = function() {
                                    n = !1, d()
                                }, t.setVolume = function(t, r) {
                                    var a;
                                    for (a = 0; a < i; a += 1) e[a].animation.setVolume(t, r)
                                }, t.mute = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.mute(t)
                                }, t.unmute = function(t) {
                                    var r;
                                    for (r = 0; r < i; r += 1) e[r].animation.unmute(t)
                                }, t.getRegisteredAnimations = function() {
                                    var t, r = e.length,
                                        i = [];
                                    for (t = 0; t < r; t += 1) i.push(e[t].animation);
                                    return i
                                }, t
                            }(),
                            BezierFactory = function() {
                                var t = {
                                        getBezierEasing: function(t, r, i, a, s) {
                                            var n = s || ("bez_" + t + "_" + r + "_" + i + "_" + a).replace(/\./g, "p");
                                            if (e[n]) return e[n];
                                            var o = new h([t, r, i, a]);
                                            return e[n] = o, o
                                        }
                                    },
                                    e = {},
                                    r = "function" == typeof Float32Array;

                                function i(t, e) {
                                    return 1 - 3 * e + 3 * t
                                }

                                function a(t, e) {
                                    return 3 * e - 6 * t
                                }

                                function s(t) {
                                    return 3 * t
                                }

                                function n(t, e, r) {
                                    return ((i(e, r) * t + a(e, r)) * t + s(e)) * t
                                }

                                function o(t, e, r) {
                                    return 3 * i(e, r) * t * t + 2 * a(e, r) * t + s(e)
                                }

                                function h(t) {
                                    this._p = t, this._mSampleValues = r ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                                }
                                return h.prototype = {
                                    get: function(t) {
                                        var e = this._p[0],
                                            r = this._p[1],
                                            i = this._p[2],
                                            a = this._p[3];
                                        return this._precomputed || this._precompute(), e === r && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : n(this._getTForX(t), r, a)
                                    },
                                    _precompute: function() {
                                        var t = this._p[0],
                                            e = this._p[1],
                                            r = this._p[2],
                                            i = this._p[3];
                                        this._precomputed = !0, t === e && r === i || this._calcSampleValues()
                                    },
                                    _calcSampleValues: function() {
                                        for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r) this._mSampleValues[r] = n(.1 * r, t, e)
                                    },
                                    _getTForX: function(t) {
                                        for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, a = 0, s = 1; 10 !== s && i[s] <= t; ++s) a += .1;
                                        var h = a + (t - i[--s]) / (i[s + 1] - i[s]) * .1,
                                            l = o(h, e, r);
                                        return l >= .001 ? function(t, e, r, i) {
                                            for (var a = 0; a < 4; ++a) {
                                                var s = o(e, r, i);
                                                if (0 === s) return e;
                                                e -= (n(e, r, i) - t) / s
                                            }
                                            return e
                                        }(t, h, e, r) : 0 === l ? h : function(t, e, r, i, a) {
                                            var s, o, h = 0;
                                            do {
                                                (s = n(o = e + (r - e) / 2, i, a) - t) > 0 ? r = o : e = o
                                            } while (Math.abs(s) > 1e-7 && ++h < 10);
                                            return o
                                        }(t, a, a + .1, e, r)
                                    }
                                }, t
                            }(),
                            pooling = {
                                double: function(t) {
                                    return t.concat(createSizedArray(t.length))
                                }
                            },
                            poolFactory = function(t, e, r) {
                                var i = 0,
                                    a = t,
                                    s = createSizedArray(a);
                                return {
                                    newElement: function() {
                                        return i ? s[i -= 1] : e()
                                    },
                                    release: function(t) {
                                        i === a && (s = pooling.double(s), a *= 2), r && r(t), s[i] = t, i += 1
                                    }
                                }
                            },
                            bezierLengthPool = poolFactory(8, (function() {
                                return {
                                    addedLength: 0,
                                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                                }
                            })),
                            segmentsLengthPool = poolFactory(8, (function() {
                                return {
                                    lengths: [],
                                    totalLength: 0
                                }
                            }), (function(t) {
                                var e, r = t.lengths.length;
                                for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
                                t.lengths.length = 0
                            }));

                        function bezFunction() {
                            var t = Math;

                            function e(t, e, r, i, a, s) {
                                var n = t * i + e * a + r * s - a * i - s * t - r * e;
                                return n > -.001 && n < .001
                            }
                            var r = function(t, e, r, i) {
                                var a, s, n, o, h, l, p = getDefaultCurveSegments(),
                                    f = 0,
                                    c = [],
                                    m = [],
                                    d = bezierLengthPool.newElement();
                                for (n = r.length, a = 0; a < p; a += 1) {
                                    for (h = a / (p - 1), l = 0, s = 0; s < n; s += 1) o = bmPow(1 - h, 3) * t[s] + 3 * bmPow(1 - h, 2) * h * r[s] + 3 * (1 - h) * bmPow(h, 2) * i[s] + bmPow(h, 3) * e[s], c[s] = o, null !== m[s] && (l += bmPow(c[s] - m[s], 2)), m[s] = c[s];
                                    l && (f += l = bmSqrt(l)), d.percents[a] = h, d.lengths[a] = f
                                }
                                return d.addedLength = f, d
                            };

                            function i(t) {
                                this.segmentLength = 0, this.points = new Array(t)
                            }

                            function a(t, e) {
                                this.partialLength = t, this.point = e
                            }
                            var s, n = (s = {}, function(t, r, n, o) {
                                var h = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                                if (!s[h]) {
                                    var l, p, f, c, m, d, u, y = getDefaultCurveSegments(),
                                        g = 0,
                                        v = null;
                                    2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (y = 2);
                                    var b = new i(y);
                                    for (f = n.length, l = 0; l < y; l += 1) {
                                        for (u = createSizedArray(f), m = l / (y - 1), d = 0, p = 0; p < f; p += 1) c = bmPow(1 - m, 3) * t[p] + 3 * bmPow(1 - m, 2) * m * (t[p] + n[p]) + 3 * (1 - m) * bmPow(m, 2) * (r[p] + o[p]) + bmPow(m, 3) * r[p], u[p] = c, null !== v && (d += bmPow(u[p] - v[p], 2));
                                        g += d = bmSqrt(d), b.points[l] = new a(d, u), v = u
                                    }
                                    b.segmentLength = g, s[h] = b
                                }
                                return s[h]
                            });

                            function o(t, e) {
                                var r = e.percents,
                                    i = e.lengths,
                                    a = r.length,
                                    s = bmFloor((a - 1) * t),
                                    n = t * e.addedLength,
                                    o = 0;
                                if (s === a - 1 || 0 === s || n === i[s]) return r[s];
                                for (var h = i[s] > n ? -1 : 1, l = !0; l;)
                                    if (i[s] <= n && i[s + 1] > n ? (o = (n - i[s]) / (i[s + 1] - i[s]), l = !1) : s += h, s < 0 || s >= a - 1) {
                                        if (s === a - 1) return r[s];
                                        l = !1
                                    }
                                return r[s] + (r[s + 1] - r[s]) * o
                            }
                            var h = createTypedArray("float32", 8);
                            return {
                                getSegmentsLength: function(t) {
                                    var e, i = segmentsLengthPool.newElement(),
                                        a = t.c,
                                        s = t.v,
                                        n = t.o,
                                        o = t.i,
                                        h = t._length,
                                        l = i.lengths,
                                        p = 0;
                                    for (e = 0; e < h - 1; e += 1) l[e] = r(s[e], s[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
                                    return a && h && (l[e] = r(s[e], s[0], n[e], o[0]), p += l[e].addedLength), i.totalLength = p, i
                                },
                                getNewSegment: function(e, r, i, a, s, n, l) {
                                    s < 0 ? s = 0 : s > 1 && (s = 1);
                                    var p, f = o(s, l),
                                        c = o(n = n > 1 ? 1 : n, l),
                                        m = e.length,
                                        d = 1 - f,
                                        u = 1 - c,
                                        y = d * d * d,
                                        g = f * d * d * 3,
                                        v = f * f * d * 3,
                                        b = f * f * f,
                                        _ = d * d * u,
                                        E = f * d * u + d * f * u + d * d * c,
                                        P = f * f * u + d * f * c + f * d * c,
                                        x = f * f * c,
                                        S = d * u * u,
                                        C = f * u * u + d * c * u + d * u * c,
                                        A = f * c * u + d * c * c + f * u * c,
                                        M = f * c * c,
                                        D = u * u * u,
                                        T = c * u * u + u * c * u + u * u * c,
                                        k = c * c * u + u * c * c + c * u * c,
                                        w = c * c * c;
                                    for (p = 0; p < m; p += 1) h[4 * p] = t.round(1e3 * (y * e[p] + g * i[p] + v * a[p] + b * r[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (_ * e[p] + E * i[p] + P * a[p] + x * r[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (S * e[p] + C * i[p] + A * a[p] + M * r[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (D * e[p] + T * i[p] + k * a[p] + w * r[p])) / 1e3;
                                    return h
                                },
                                getPointInSegment: function(e, r, i, a, s, n) {
                                    var h = o(s, n),
                                        l = 1 - h;
                                    return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * a[0] + h * h * h * r[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * a[1] + h * h * h * r[1])) / 1e3]
                                },
                                buildBezierData: n,
                                pointOnLine2D: e,
                                pointOnLine3D: function(r, i, a, s, n, o, h, l, p) {
                                    if (0 === a && 0 === o && 0 === p) return e(r, i, s, n, h, l);
                                    var f, c = t.sqrt(t.pow(s - r, 2) + t.pow(n - i, 2) + t.pow(o - a, 2)),
                                        m = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - a, 2)),
                                        d = t.sqrt(t.pow(h - s, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                                    return (f = c > m ? c > d ? c - m - d : d - m - c : d > m ? d - m - c : m - c - d) > -1e-4 && f < 1e-4
                                }
                            }
                        }
                        var bez = bezFunction(),
                            PropertyFactory = function() {
                                var t = initialDefaultFrame,
                                    e = Math.abs;

                                function r(t, e) {
                                    var r, a = this.offsetTime;
                                    "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                                    for (var s, n, o, h, l, p, f, c, m, d = e.lastIndex, u = d, y = this.keyframes.length - 1, g = !0; g;) {
                                        if (s = this.keyframes[u], n = this.keyframes[u + 1], u === y - 1 && t >= n.t - a) {
                                            s.h && (s = n), d = 0;
                                            break
                                        }
                                        if (n.t - a > t) {
                                            d = u;
                                            break
                                        }
                                        u < y - 1 ? u += 1 : (d = 0, g = !1)
                                    }
                                    o = this.keyframesMetadata[u] || {};
                                    var v, b = n.t - a,
                                        _ = s.t - a;
                                    if (s.to) {
                                        o.bezierData || (o.bezierData = bez.buildBezierData(s.s, n.s || s.e, s.to, s.ti));
                                        var E = o.bezierData;
                                        if (t >= b || t < _) {
                                            var P = t >= b ? E.points.length - 1 : 0;
                                            for (l = E.points[P].point.length, h = 0; h < l; h += 1) r[h] = E.points[P].point[h]
                                        } else {
                                            o.__fnct ? m = o.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, o.__fnct = m), p = m((t - _) / (b - _));
                                            var x, S = E.segmentLength * p,
                                                C = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastAddedLength : 0;
                                            for (c = e.lastFrame < t && e._lastKeyframeIndex === u ? e._lastPoint : 0, g = !0, f = E.points.length; g;) {
                                                if (C += E.points[c].partialLength, 0 === S || 0 === p || c === E.points.length - 1) {
                                                    for (l = E.points[c].point.length, h = 0; h < l; h += 1) r[h] = E.points[c].point[h];
                                                    break
                                                }
                                                if (S >= C && S < C + E.points[c + 1].partialLength) {
                                                    for (x = (S - C) / E.points[c + 1].partialLength, l = E.points[c].point.length, h = 0; h < l; h += 1) r[h] = E.points[c].point[h] + (E.points[c + 1].point[h] - E.points[c].point[h]) * x;
                                                    break
                                                }
                                                c < f - 1 ? c += 1 : g = !1
                                            }
                                            e._lastPoint = c, e._lastAddedLength = C - E.points[c].partialLength, e._lastKeyframeIndex = u
                                        }
                                    } else {
                                        var A, M, D, T, k;
                                        if (y = s.s.length, v = n.s || s.e, this.sh && 1 !== s.h) t >= b ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : t <= _ ? (r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2]) : function(t, e) {
                                            var r = e[0],
                                                i = e[1],
                                                a = e[2],
                                                s = e[3],
                                                n = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a),
                                                o = Math.asin(2 * r * i + 2 * a * s),
                                                h = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a);
                                            t[0] = n / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
                                        }(r, function(t, e, r) {
                                            var i, a, s, n, o, h = [],
                                                l = t[0],
                                                p = t[1],
                                                f = t[2],
                                                c = t[3],
                                                m = e[0],
                                                d = e[1],
                                                u = e[2],
                                                y = e[3];
                                            return (a = l * m + p * d + f * u + c * y) < 0 && (a = -a, m = -m, d = -d, u = -u, y = -y), 1 - a > 1e-6 ? (i = Math.acos(a), s = Math.sin(i), n = Math.sin((1 - r) * i) / s, o = Math.sin(r * i) / s) : (n = 1 - r, o = r), h[0] = n * l + o * m, h[1] = n * p + o * d, h[2] = n * f + o * u, h[3] = n * c + o * y, h
                                        }(i(s.s), i(v), (t - _) / (b - _)));
                                        else
                                            for (u = 0; u < y; u += 1) 1 !== s.h && (t >= b ? p = 1 : t < _ ? p = 0 : (s.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[u] ? m = o.__fnct[u] : (A = void 0 === s.o.x[u] ? s.o.x[0] : s.o.x[u], M = void 0 === s.o.y[u] ? s.o.y[0] : s.o.y[u], D = void 0 === s.i.x[u] ? s.i.x[0] : s.i.x[u], T = void 0 === s.i.y[u] ? s.i.y[0] : s.i.y[u], m = BezierFactory.getBezierEasing(A, M, D, T).get, o.__fnct[u] = m)) : o.__fnct ? m = o.__fnct : (A = s.o.x, M = s.o.y, D = s.i.x, T = s.i.y, m = BezierFactory.getBezierEasing(A, M, D, T).get, s.keyframeMetadata = m), p = m((t - _) / (b - _)))), v = n.s || s.e, k = 1 === s.h ? s.s[u] : s.s[u] + (v[u] - s.s[u]) * p, "multidimensional" === this.propType ? r[u] = k : r = k
                                    }
                                    return e.lastIndex = d, r
                                }

                                function i(t) {
                                    var e = t[0] * degToRads,
                                        r = t[1] * degToRads,
                                        i = t[2] * degToRads,
                                        a = Math.cos(e / 2),
                                        s = Math.cos(r / 2),
                                        n = Math.cos(i / 2),
                                        o = Math.sin(e / 2),
                                        h = Math.sin(r / 2),
                                        l = Math.sin(i / 2);
                                    return [o * h * n + a * s * l, o * s * n + a * h * l, a * h * n - o * s * l, a * s * n - o * h * l]
                                }

                                function a() {
                                    var e = this.comp.renderedFrame - this.offsetTime,
                                        r = this.keyframes[0].t - this.offsetTime,
                                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
                                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                        var a = this.interpolateValue(e, this._caching);
                                        this.pv = a
                                    }
                                    return this._caching.lastFrame = e, this.pv
                                }

                                function s(t) {
                                    var r;
                                    if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
                                    else
                                        for (var i = 0, a = this.v.length; i < a;) r = t[i] * this.mult, e(this.v[i] - r) > 1e-5 && (this.v[i] = r, this._mdf = !0), i += 1
                                }

                                function n() {
                                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                        if (this.lock) this.setVValue(this.pv);
                                        else {
                                            var t;
                                            this.lock = !0, this._mdf = this._isFirstFrame;
                                            var e = this.effectsSequence.length,
                                                r = this.kf ? this.pv : this.data.k;
                                            for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                        }
                                }

                                function o(t) {
                                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                                }

                                function h(t, e, r, i) {
                                    this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = s, this.addEffect = o
                                }

                                function l(t, e, r, i) {
                                    var a;
                                    this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                                    var h = e.k.length;
                                    for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), this.vel = createTypedArray("float32", h), a = 0; a < h; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
                                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = s, this.addEffect = o
                                }

                                function p(e, i, h, l) {
                                    this.propType = "unidimensional", this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                        lastFrame: t,
                                        lastIndex: 0,
                                        value: 0,
                                        _lastKeyframeIndex: -1
                                    }, this.k = !0, this.kf = !0, this.data = i, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = s, this.interpolateValue = r, this.effectsSequence = [a.bind(this)], this.addEffect = o
                                }

                                function f(e, i, h, l) {
                                    var p;
                                    this.propType = "multidimensional";
                                    var f, c, m, d, u = i.k.length;
                                    for (p = 0; p < u - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (f = i.k[p].s, c = i.k[p + 1].s, m = i.k[p].to, d = i.k[p].ti, (2 === f.length && (f[0] !== c[0] || f[1] !== c[1]) && bez.pointOnLine2D(f[0], f[1], c[0], c[1], f[0] + m[0], f[1] + m[1]) && bez.pointOnLine2D(f[0], f[1], c[0], c[1], c[0] + d[0], c[1] + d[1]) || 3 === f.length && (f[0] !== c[0] || f[1] !== c[1] || f[2] !== c[2]) && bez.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], f[0] + m[0], f[1] + m[1], f[2] + m[2]) && bez.pointOnLine3D(f[0], f[1], f[2], c[0], c[1], c[2], c[0] + d[0], c[1] + d[1], c[2] + d[2])) && (i.k[p].to = null, i.k[p].ti = null), f[0] === c[0] && f[1] === c[1] && 0 === m[0] && 0 === m[1] && 0 === d[0] && 0 === d[1] && (2 === f.length || f[2] === c[2] && 0 === m[2] && 0 === d[2]) && (i.k[p].to = null, i.k[p].ti = null));
                                    this.effectsSequence = [a.bind(this)], this.data = i, this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, this.container = l, this.comp = e.comp, this.getValue = n, this.setVValue = s, this.interpolateValue = r, this.frameId = -1;
                                    var y = i.k[0].s.length;
                                    for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1) this.v[p] = t, this.pv[p] = t;
                                    this._caching = {
                                        lastFrame: t,
                                        lastIndex: 0,
                                        value: createTypedArray("float32", y)
                                    }, this.addEffect = o
                                }
                                return {
                                    getProp: function(t, e, r, i, a) {
                                        var s;
                                        if (e.k.length)
                                            if ("number" == typeof e.k[0]) s = new l(t, e, i, a);
                                            else switch (r) {
                                                case 0:
                                                    s = new p(t, e, i, a);
                                                    break;
                                                case 1:
                                                    s = new f(t, e, i, a)
                                            } else s = new h(t, e, i, a);
                                        return s.effectsSequence.length && a.addDynamicProperty(s), s
                                    }
                                }
                            }();

                        function DynamicPropertyContainer() {}
                        DynamicPropertyContainer.prototype = {
                            addDynamicProperty: function(t) {
                                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                            },
                            iterateDynamicProperties: function() {
                                var t;
                                this._mdf = !1;
                                var e = this.dynamicProperties.length;
                                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                            },
                            initDynamicPropertyContainer: function(t) {
                                this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                            }
                        };
                        var pointPool = poolFactory(8, (function() {
                            return createTypedArray("float32", 2)
                        }));

                        function ShapePath() {
                            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                        }
                        ShapePath.prototype.setPathData = function(t, e) {
                            this.c = t, this.setLength(e);
                            for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
                        }, ShapePath.prototype.setLength = function(t) {
                            for (; this._maxLength < t;) this.doubleArrayLength();
                            this._length = t
                        }, ShapePath.prototype.doubleArrayLength = function() {
                            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                        }, ShapePath.prototype.setXYAt = function(t, e, r, i, a) {
                            var s;
                            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                                case "v":
                                    s = this.v;
                                    break;
                                case "i":
                                    s = this.i;
                                    break;
                                case "o":
                                    s = this.o;
                                    break;
                                default:
                                    s = []
                            }(!s[i] || s[i] && !a) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e
                        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, a, s, n, o) {
                            this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(a, s, "i", n, o)
                        }, ShapePath.prototype.reverse = function() {
                            var t = new ShapePath;
                            t.setPathData(this.c, this._length);
                            var e = this.v,
                                r = this.o,
                                i = this.i,
                                a = 0;
                            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), a = 1);
                            var s, n = this._length - 1,
                                o = this._length;
                            for (s = a; s < o; s += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], s, !1), n -= 1;
                            return t
                        }, ShapePath.prototype.length = function() {
                            return this._length
                        };
                        var shapePool = (factory = poolFactory(4, (function() {
                                return new ShapePath
                            }), (function(t) {
                                var e, r = t._length;
                                for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                                t._length = 0, t.c = !1
                            })), factory.clone = function(t) {
                                var e, r = factory.newElement(),
                                    i = void 0 === t._length ? t.v.length : t._length;
                                for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                                return r
                            }, factory),
                            factory;

                        function ShapeCollection() {
                            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                        }
                        ShapeCollection.prototype.addShape = function(t) {
                            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                        }, ShapeCollection.prototype.releaseShapes = function() {
                            var t;
                            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                            this._length = 0
                        };
                        var shapeCollectionPool = (ob = {
                                newShapeCollection: function() {
                                    return _length ? pool[_length -= 1] : new ShapeCollection
                                },
                                release: function(t) {
                                    var e, r = t._length;
                                    for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
                                    t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
                                }
                            }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
                            ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
                                function t(t, e, r) {
                                    var i, a, s, n, o, h, l, p, f, c = r.lastIndex,
                                        m = this.keyframes;
                                    if (t < m[0].t - this.offsetTime) i = m[0].s[0], s = !0, c = 0;
                                    else if (t >= m[m.length - 1].t - this.offsetTime) i = m[m.length - 1].s ? m[m.length - 1].s[0] : m[m.length - 2].e[0], s = !0;
                                    else {
                                        for (var d, u, y, g = c, v = m.length - 1, b = !0; b && (d = m[g], !((u = m[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : b = !1;
                                        if (y = this.keyframesMetadata[g] || {}, c = g, !(s = 1 === d.h)) {
                                            if (t >= u.t - this.offsetTime) p = 1;
                                            else if (t < d.t - this.offsetTime) p = 0;
                                            else {
                                                var _;
                                                y.__fnct ? _ = y.__fnct : (_ = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = _), p = _((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
                                            }
                                            a = u.s ? u.s[0] : d.e[0]
                                        }
                                        i = d.s[0]
                                    }
                                    for (h = e._length, l = i.i[0].length, r.lastIndex = c, n = 0; n < h; n += 1)
                                        for (o = 0; o < l; o += 1) f = s ? i.i[n][o] : i.i[n][o] + (a.i[n][o] - i.i[n][o]) * p, e.i[n][o] = f, f = s ? i.o[n][o] : i.o[n][o] + (a.o[n][o] - i.o[n][o]) * p, e.o[n][o] = f, f = s ? i.v[n][o] : i.v[n][o] + (a.v[n][o] - i.v[n][o]) * p, e.v[n][o] = f
                                }

                                function e() {
                                    var t = this.comp.renderedFrame - this.offsetTime,
                                        e = this.keyframes[0].t - this.offsetTime,
                                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                        i = this._caching.lastFrame;
                                    return -999999 !== i && (i < e && t < e || i > r && t > r) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                                }

                                function r() {
                                    this.paths = this.localShapeCollection
                                }

                                function i(t) {
                                    (function(t, e) {
                                        if (t._length !== e._length || t.c !== e.c) return !1;
                                        var r, i = t._length;
                                        for (r = 0; r < i; r += 1)
                                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                                        return !0
                                    })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                                }

                                function a() {
                                    if (this.elem.globalData.frameId !== this.frameId)
                                        if (this.effectsSequence.length)
                                            if (this.lock) this.setVValue(this.pv);
                                            else {
                                                var t, e;
                                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                                var r = this.effectsSequence.length;
                                                for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                            }
                                    else this._mdf = !1
                                }

                                function s(t, e, i) {
                                    this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                                    var a = 3 === i ? e.pt.k : e.ks.k;
                                    this.v = shapePool.clone(a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
                                }

                                function n(t) {
                                    this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                                }

                                function o(t, i, a) {
                                    this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                                    var s = this.keyframes[0].s[0].i.length;
                                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = r, this._caching = {
                                        lastFrame: -999999,
                                        lastIndex: 0
                                    }, this.effectsSequence = [e.bind(this)]
                                }
                                s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = n, o.prototype.getValue = a, o.prototype.interpolateShape = t, o.prototype.setVValue = i, o.prototype.addEffect = n;
                                var h = function() {
                                        var t = roundCorner;

                                        function e(t, e) {
                                            this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                        }
                                        return e.prototype = {
                                            reset: r,
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                            },
                                            convertEllToPath: function() {
                                                var e = this.p.v[0],
                                                    r = this.p.v[1],
                                                    i = this.s.v[0] / 2,
                                                    a = this.s.v[1] / 2,
                                                    s = 3 !== this.d,
                                                    n = this.v;
                                                n.v[0][0] = e, n.v[0][1] = r - a, n.v[1][0] = s ? e + i : e - i, n.v[1][1] = r, n.v[2][0] = e, n.v[2][1] = r + a, n.v[3][0] = s ? e - i : e + i, n.v[3][1] = r, n.i[0][0] = s ? e - i * t : e + i * t, n.i[0][1] = r - a, n.i[1][0] = s ? e + i : e - i, n.i[1][1] = r - a * t, n.i[2][0] = s ? e + i * t : e - i * t, n.i[2][1] = r + a, n.i[3][0] = s ? e - i : e + i, n.i[3][1] = r + a * t, n.o[0][0] = s ? e + i * t : e - i * t, n.o[0][1] = r - a, n.o[1][0] = s ? e + i : e - i, n.o[1][1] = r + a * t, n.o[2][0] = s ? e - i * t : e + i * t, n.o[2][1] = r + a, n.o[3][0] = s ? e - i : e + i, n.o[3][1] = r - a * t
                                            }
                                        }, extendPrototype([DynamicPropertyContainer], e), e
                                    }(),
                                    l = function() {
                                        function t(t, e) {
                                            this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                        }
                                        return t.prototype = {
                                            reset: r,
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                            },
                                            convertStarToPath: function() {
                                                var t, e, r, i, a = 2 * Math.floor(this.pt.v),
                                                    s = 2 * Math.PI / a,
                                                    n = !0,
                                                    o = this.or.v,
                                                    h = this.ir.v,
                                                    l = this.os.v,
                                                    p = this.is.v,
                                                    f = 2 * Math.PI * o / (2 * a),
                                                    c = 2 * Math.PI * h / (2 * a),
                                                    m = -Math.PI / 2;
                                                m += this.r.v;
                                                var d = 3 === this.data.d ? -1 : 1;
                                                for (this.v._length = 0, t = 0; t < a; t += 1) {
                                                    r = n ? l : p, i = n ? f : c;
                                                    var u = (e = n ? o : h) * Math.cos(m),
                                                        y = e * Math.sin(m),
                                                        g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                                                        v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                                                    u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0), n = !n, m += s * d
                                                }
                                            },
                                            convertPolygonToPath: function() {
                                                var t, e = Math.floor(this.pt.v),
                                                    r = 2 * Math.PI / e,
                                                    i = this.or.v,
                                                    a = this.os.v,
                                                    s = 2 * Math.PI * i / (4 * e),
                                                    n = .5 * -Math.PI,
                                                    o = 3 === this.data.d ? -1 : 1;
                                                for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                                    var h = i * Math.cos(n),
                                                        l = i * Math.sin(n),
                                                        p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                                        f = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                                    h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * s * a * o, l - f * s * a * o, h + p * s * a * o, l + f * s * a * o, t, !0), n += r * o
                                                }
                                                this.paths.length = 0, this.paths[0] = this.v
                                            }
                                        }, extendPrototype([DynamicPropertyContainer], t), t
                                    }(),
                                    p = function() {
                                        function t(t, e) {
                                            this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                        }
                                        return t.prototype = {
                                            convertRectToPath: function() {
                                                var t = this.p.v[0],
                                                    e = this.p.v[1],
                                                    r = this.s.v[0] / 2,
                                                    i = this.s.v[1] / 2,
                                                    a = bmMin(r, i, this.r.v),
                                                    s = a * (1 - roundCorner);
                                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + a, t + r, e - i + s, 0, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - s, t + r, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e + i, t + r - a, e + i, t + r - s, e + i, 2, !0), this.v.setTripleAt(t - r + a, e + i, t - r + s, e + i, t - r + a, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + s, t - r, e - i + a, 5, !0), this.v.setTripleAt(t - r + a, e - i, t - r + a, e - i, t - r + s, e - i, 6, !0), this.v.setTripleAt(t + r - a, e - i, t + r - s, e - i, t + r - a, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + s, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + s, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + a, t + r, e - i + s, t + r, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + r - a, e - i, t + r - a, e - i, t + r - s, e - i, 1, !0), this.v.setTripleAt(t - r + a, e - i, t - r + s, e - i, t - r + a, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + a, t - r, e - i + a, t - r, e - i + s, 3, !0), this.v.setTripleAt(t - r, e + i - a, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r + a, e + i, t - r + a, e + i, t - r + s, e + i, 5, !0), this.v.setTripleAt(t + r - a, e + i, t + r - s, e + i, t + r - a, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - a, t + r, e + i - a, t + r, e + i - s, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + s, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - s, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - s, e + i, t + r, e + i, 3, !0)))
                                            },
                                            getValue: function() {
                                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                            },
                                            reset: r
                                        }, extendPrototype([DynamicPropertyContainer], t), t
                                    }(),
                                    f = {
                                        getShapeProp: function(t, e, r) {
                                            var i;
                                            return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new o(t, e, r) : new s(t, e, r) : 5 === r ? i = new p(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new l(t, e)), i.k && t.addDynamicProperty(i), i
                                        },
                                        getConstructorFunction: function() {
                                            return s
                                        },
                                        getKeyframedConstructorFunction: function() {
                                            return o
                                        }
                                    };
                                return f
                            }(),
                            Matrix = function() {
                                var t = Math.cos,
                                    e = Math.sin,
                                    r = Math.tan,
                                    i = Math.round;

                                function a() {
                                    return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                                }

                                function s(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        a = e(r);
                                    return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function n(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        a = e(r);
                                    return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1)
                                }

                                function o(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        a = e(r);
                                    return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1)
                                }

                                function h(r) {
                                    if (0 === r) return this;
                                    var i = t(r),
                                        a = e(r);
                                    return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function l(t, e) {
                                    return this._t(1, e, t, 1, 0, 0)
                                }

                                function p(t, e) {
                                    return this.shear(r(t), r(e))
                                }

                                function f(i, a) {
                                    var s = t(a),
                                        n = e(a);
                                    return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                                }

                                function c(t, e, r) {
                                    return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                                }

                                function m(t, e, r, i, a, s, n, o, h, l, p, f, c, m, d, u) {
                                    return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = a, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = c, this.props[13] = m, this.props[14] = d, this.props[15] = u, this
                                }

                                function d(t, e, r) {
                                    return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                                }

                                function u(t, e, r, i, a, s, n, o, h, l, p, f, c, m, d, u) {
                                    var y = this.props;
                                    if (1 === t && 0 === e && 0 === r && 0 === i && 0 === a && 1 === s && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === f) return y[12] = y[12] * t + y[15] * c, y[13] = y[13] * s + y[15] * m, y[14] = y[14] * p + y[15] * d, y[15] *= u, this._identityCalculated = !1, this;
                                    var g = y[0],
                                        v = y[1],
                                        b = y[2],
                                        _ = y[3],
                                        E = y[4],
                                        P = y[5],
                                        x = y[6],
                                        S = y[7],
                                        C = y[8],
                                        A = y[9],
                                        M = y[10],
                                        D = y[11],
                                        T = y[12],
                                        k = y[13],
                                        w = y[14],
                                        I = y[15];
                                    return y[0] = g * t + v * a + b * h + _ * c, y[1] = g * e + v * s + b * l + _ * m, y[2] = g * r + v * n + b * p + _ * d, y[3] = g * i + v * o + b * f + _ * u, y[4] = E * t + P * a + x * h + S * c, y[5] = E * e + P * s + x * l + S * m, y[6] = E * r + P * n + x * p + S * d, y[7] = E * i + P * o + x * f + S * u, y[8] = C * t + A * a + M * h + D * c, y[9] = C * e + A * s + M * l + D * m, y[10] = C * r + A * n + M * p + D * d, y[11] = C * i + A * o + M * f + D * u, y[12] = T * t + k * a + w * h + I * c, y[13] = T * e + k * s + w * l + I * m, y[14] = T * r + k * n + w * p + I * d, y[15] = T * i + k * o + w * f + I * u, this._identityCalculated = !1, this
                                }

                                function y() {
                                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                                }

                                function g(t) {
                                    for (var e = 0; e < 16;) {
                                        if (t.props[e] !== this.props[e]) return !1;
                                        e += 1
                                    }
                                    return !0
                                }

                                function v(t) {
                                    var e;
                                    for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                                    return t
                                }

                                function b(t) {
                                    var e;
                                    for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                                }

                                function _(t, e, r) {
                                    return {
                                        x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                                        y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                                        z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                                    }
                                }

                                function E(t, e, r) {
                                    return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                                }

                                function P(t, e, r) {
                                    return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                                }

                                function x(t, e, r) {
                                    return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                                }

                                function S() {
                                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                        e = this.props[5] / t,
                                        r = -this.props[1] / t,
                                        i = -this.props[4] / t,
                                        a = this.props[0] / t,
                                        s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                        n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                        o = new Matrix;
                                    return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = a, o.props[12] = s, o.props[13] = n, o
                                }

                                function C(t) {
                                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                                }

                                function A(t) {
                                    var e, r = t.length,
                                        i = [];
                                    for (e = 0; e < r; e += 1) i[e] = C(t[e]);
                                    return i
                                }

                                function M(t, e, r) {
                                    var i = createTypedArray("float32", 6);
                                    if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
                                    else {
                                        var a = this.props[0],
                                            s = this.props[1],
                                            n = this.props[4],
                                            o = this.props[5],
                                            h = this.props[12],
                                            l = this.props[13];
                                        i[0] = t[0] * a + t[1] * n + h, i[1] = t[0] * s + t[1] * o + l, i[2] = e[0] * a + e[1] * n + h, i[3] = e[0] * s + e[1] * o + l, i[4] = r[0] * a + r[1] * n + h, i[5] = r[0] * s + r[1] * o + l
                                    }
                                    return i
                                }

                                function D(t, e, r) {
                                    return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                                }

                                function T(t, e) {
                                    if (this.isIdentity()) return t + "," + e;
                                    var r = this.props;
                                    return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                                }

                                function k() {
                                    for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
                                    return r
                                }

                                function w(t) {
                                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                                }

                                function I() {
                                    var t = this.props;
                                    return "matrix(" + w(t[0]) + "," + w(t[1]) + "," + w(t[4]) + "," + w(t[5]) + "," + w(t[12]) + "," + w(t[13]) + ")"
                                }
                                return function() {
                                    this.reset = a, this.rotate = s, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = c, this.setTransform = m, this.translate = d, this.transform = u, this.applyToPoint = _, this.applyToX = E, this.applyToY = P, this.applyToZ = x, this.applyToPointArray = D, this.applyToTriplePoints = M, this.applyToPointStringified = T, this.toCSS = k, this.to2dCSS = I, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = A, this.inversePoint = C, this.getInverseMatrix = S, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                                }
                            }();

                        function _typeof$3(t) {
                            return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var lottie = {},
                            standalone = "__[STANDALONE]__",
                            animationData = "__[ANIMATIONDATA]__",
                            renderer = "";

                        function setLocation(t) {
                            setLocationHref(t)
                        }

                        function searchAnimations() {
                            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                        }

                        function setSubframeRendering(t) {
                            setSubframeEnabled(t)
                        }

                        function setPrefix(t) {
                            setIdPrefix(t)
                        }

                        function loadAnimation(t) {
                            return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                        }

                        function setQuality(t) {
                            if ("string" == typeof t) switch (t) {
                                case "high":
                                    setDefaultCurveSegments(200);
                                    break;
                                default:
                                case "medium":
                                    setDefaultCurveSegments(50);
                                    break;
                                case "low":
                                    setDefaultCurveSegments(10)
                            } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
                            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                        }

                        function inBrowser() {
                            return "undefined" != typeof navigator
                        }

                        function installPlugin(t, e) {
                            "expressions" === t && setExpressionsPlugin(e)
                        }

                        function getFactory(t) {
                            switch (t) {
                                case "propertyFactory":
                                    return PropertyFactory;
                                case "shapePropertyFactory":
                                    return ShapePropertyFactory;
                                case "matrix":
                                    return Matrix;
                                default:
                                    return null
                            }
                        }

                        function checkReady() {
                            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                        }

                        function getQueryVariable(t) {
                            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                                var i = e[r].split("=");
                                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                            }
                            return null
                        }
                        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
                        var queryString = "";
                        if (standalone) {
                            var scripts = document.getElementsByTagName("script"),
                                index = scripts.length - 1,
                                myScript = scripts[index] || {
                                    src: ""
                                };
                            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                        }
                        var readyStateCheckInterval = setInterval(checkReady, 100);
                        try {
                            "object" !== _typeof$3(exports) && (window.bodymovin = lottie)
                        } catch (t) {}
                        var ShapeModifiers = (t = {}, e = {}, t.registerModifier = function(t, r) {
                                e[t] || (e[t] = r)
                            }, t.getModifier = function(t, r, i) {
                                return new e[t](r, i)
                            }, t),
                            t, e;

                        function ShapeModifier() {}

                        function TrimModifier() {}

                        function PuckerAndBloatModifier() {}
                        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                            if (!this.closed) {
                                t.sh.container.addDynamicProperty(t.sh);
                                var e = {
                                    shape: t.sh,
                                    data: t,
                                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                                };
                                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                            }
                        }, ShapeModifier.prototype.init = function(t, e) {
                            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, ShapeModifier.prototype.processKeys = function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                        }, TrimModifier.prototype.addShapeToModifier = function(t) {
                            t.pathsData = []
                        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, a) {
                            var s = [];
                            e <= 1 ? s.push({
                                s: t,
                                e: e
                            }) : t >= 1 ? s.push({
                                s: t - 1,
                                e: e - 1
                            }) : (s.push({
                                s: t,
                                e: 1
                            }), s.push({
                                s: 0,
                                e: e - 1
                            }));
                            var n, o, h = [],
                                l = s.length;
                            for (n = 0; n < l; n += 1) {
                                var p, f;
                                (o = s[n]).e * a < i || o.s * a > i + r || (p = o.s * a <= i ? 0 : (o.s * a - i) / r, f = o.e * a >= i + r ? 1 : (o.e * a - i) / r, h.push([p, f]))
                            }
                            return h.length || h.push([0, 0]), h
                        }, TrimModifier.prototype.releasePathsData = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
                            return t.length = 0, t
                        }, TrimModifier.prototype.processShapes = function(t) {
                            var e, r, i, a;
                            if (this._mdf || t) {
                                var s = this.o.v % 360 / 360;
                                if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (r = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                                    var n = e;
                                    e = r, r = n
                                }
                                e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
                            } else e = this.sValue, r = this.eValue;
                            var o, h, l, p, f, c = this.shapes.length,
                                m = 0;
                            if (r === e)
                                for (a = 0; a < c; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
                            else if (1 === r && 0 === e || 0 === r && 1 === e) {
                                if (this._mdf)
                                    for (a = 0; a < c; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
                            } else {
                                var d, u, y = [];
                                for (a = 0; a < c; a += 1)
                                    if ((d = this.shapes[a]).shape._mdf || this._mdf || t || 2 === this.m) {
                                        if (h = (i = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length) f = d.totalShapeLength;
                                        else {
                                            for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(i.shapes[o]), l.push(p), f += p.totalLength;
                                            d.totalShapeLength = f, d.pathsData = l
                                        }
                                        m += f, d.shape._mdf = !0
                                    } else d.shape.paths = d.localShapeCollection;
                                var g, v = e,
                                    b = r,
                                    _ = 0;
                                for (a = c - 1; a >= 0; a -= 1)
                                    if ((d = this.shapes[a]).shape._mdf) {
                                        for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, _, m), _ += d.totalShapeLength) : g = [
                                                [v, b]
                                            ], h = g.length, o = 0; o < h; o += 1) {
                                            v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                                                s: d.totalShapeLength * v,
                                                e: d.totalShapeLength * b
                                            }) : v >= 1 ? y.push({
                                                s: d.totalShapeLength * (v - 1),
                                                e: d.totalShapeLength * (b - 1)
                                            }) : (y.push({
                                                s: d.totalShapeLength * v,
                                                e: d.totalShapeLength
                                            }), y.push({
                                                s: 0,
                                                e: d.totalShapeLength * (b - 1)
                                            }));
                                            var E = this.addShapes(d, y[0]);
                                            if (y[0].s !== y[0].e) {
                                                if (y.length > 1)
                                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                                        var P = E.pop();
                                                        this.addPaths(E, u), E = this.addShapes(d, y[1], P)
                                                    } else this.addPaths(E, u), E = this.addShapes(d, y[1]);
                                                this.addPaths(E, u)
                                            }
                                        }
                                        d.shape.paths = u
                                    }
                            }
                        }, TrimModifier.prototype.addPaths = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) e.addShape(t[r])
                        }, TrimModifier.prototype.addSegment = function(t, e, r, i, a, s, n) {
                            a.setXYAt(e[0], e[1], "o", s), a.setXYAt(r[0], r[1], "i", s + 1), n && a.setXYAt(t[0], t[1], "v", s), a.setXYAt(i[0], i[1], "v", s + 1)
                        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
                            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
                        }, TrimModifier.prototype.addShapes = function(t, e, r) {
                            var i, a, s, n, o, h, l, p, f = t.pathsData,
                                c = t.shape.paths.shapes,
                                m = t.shape.paths._length,
                                d = 0,
                                u = [],
                                y = !0;
                            for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), u.push(r), i = 0; i < m; i += 1) {
                                for (h = f[i].lengths, r.c = c[i].c, s = c[i].c ? h.length : h.length + 1, a = 1; a < s; a += 1)
                                    if (d + (n = h[a - 1]).addedLength < e.s) d += n.addedLength, r.c = !1;
                                    else {
                                        if (d > e.e) {
                                            r.c = !1;
                                            break
                                        }
                                        e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[a], c[i].v[a], r, o, y), y = !1) : (l = bez.getNewSegment(c[i].v[a - 1], c[i].v[a], c[i].o[a - 1], c[i].i[a], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[a - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1), d += n.addedLength, o += 1
                                    }
                                if (c[i].c && h.length) {
                                    if (n = h[a - 1], d <= e.e) {
                                        var g = h[a - 1].addedLength;
                                        e.s <= d && e.e >= d + g ? (this.addSegment(c[i].v[a - 1], c[i].o[a - 1], c[i].i[0], c[i].v[0], r, o, y), y = !1) : (l = bez.getNewSegment(c[i].v[a - 1], c[i].v[0], c[i].o[a - 1], c[i].i[0], (e.s - d) / g, (e.e - d) / g, h[a - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1)
                                    } else r.c = !1;
                                    d += n.addedLength, o += 1
                                }
                                if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
                                i < m - 1 && (r = shapePool.newElement(), y = !0, u.push(r), o = 0)
                            }
                            return u
                        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                            var r = e / 100,
                                i = [0, 0],
                                a = t._length,
                                s = 0;
                            for (s = 0; s < a; s += 1) i[0] += t.v[s][0], i[1] += t.v[s][1];
                            i[0] /= a, i[1] /= a;
                            var n, o, h, l, p, f, c = shapePool.newElement();
                            for (c.c = t.c, s = 0; s < a; s += 1) n = t.v[s][0] + (i[0] - t.v[s][0]) * r, o = t.v[s][1] + (i[1] - t.v[s][1]) * r, h = t.o[s][0] + (i[0] - t.o[s][0]) * -r, l = t.o[s][1] + (i[1] - t.o[s][1]) * -r, p = t.i[s][0] + (i[0] - t.i[s][0]) * -r, f = t.i[s][1] + (i[1] - t.i[s][1]) * -r, c.setTripleAt(n, o, h, l, p, f, s);
                            return c
                        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                            var e, r, i, a, s, n, o = this.shapes.length,
                                h = this.amount.v;
                            if (0 !== h)
                                for (r = 0; r < o; r += 1) {
                                    if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                        for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h));
                                    s.shape.paths = s.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        };
                        var TransformPropertyFactory = function() {
                            var t = [0, 0];

                            function e(t, e, r) {
                                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                        k: [0, 0, 0]
                                    }, 1, 0, this), e.rx) {
                                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                        var i, a = e.or.k.length;
                                        for (i = 0; i < a; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
                                    }
                                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                                } else this.r = PropertyFactory.getProp(t, e.r || {
                                    k: 0
                                }, 0, degToRads, this);
                                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                    k: [100, 100, 100]
                                }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                                    _mdf: !1,
                                    v: 1
                                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                            }
                            return e.prototype = {
                                applyToMatrix: function(t) {
                                    var e = this._mdf;
                                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                },
                                getValue: function(e) {
                                    if (this.elem.globalData.frameId !== this.frameId) {
                                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                            var r;
                                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                                var i, a;
                                                if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                    i = [], a = [];
                                                    var s = this.px,
                                                        n = this.py;
                                                    s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / r, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / r, 0), a[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0), a[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r, 0)) : (i = [s.pv, n.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime), a[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r, n.offsetTime))
                                                } else i = a = t;
                                                this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
                                            }
                                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                        }
                                        this.frameId = this.elem.globalData.frameId
                                    }
                                },
                                precalculateMatrix: function() {
                                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                        }
                                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                    }
                                },
                                autoOrient: function() {}
                            }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                            }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                                getTransformProperty: function(t, r, i) {
                                    return new e(t, r, i)
                                }
                            }
                        }();

                        function RepeaterModifier() {}

                        function RoundCornersModifier() {}

                        function floatEqual(t, e) {
                            return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
                        }

                        function floatZero(t) {
                            return Math.abs(t) <= 1e-5
                        }

                        function lerp(t, e, r) {
                            return t * (1 - r) + e * r
                        }

                        function lerpPoint(t, e, r) {
                            return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
                        }

                        function quadRoots(t, e, r) {
                            if (0 === t) return [];
                            var i = e * e - 4 * t * r;
                            if (i < 0) return [];
                            var a = -e / (2 * t);
                            if (0 === i) return [a];
                            var s = Math.sqrt(i) / (2 * t);
                            return [a - s, a + s]
                        }

                        function polynomialCoefficients(t, e, r, i) {
                            return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
                        }

                        function singlePoint(t) {
                            return new PolynomialBezier(t, t, t, t, !1)
                        }

                        function PolynomialBezier(t, e, r, i, a) {
                            a && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), a && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
                            var s = polynomialCoefficients(t[0], e[0], r[0], i[0]),
                                n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
                            this.a = [s[0], n[0]], this.b = [s[1], n[1]], this.c = [s[2], n[2]], this.d = [s[3], n[3]], this.points = [t, e, r, i]
                        }

                        function extrema(t, e) {
                            var r = t.points[0][e],
                                i = t.points[t.points.length - 1][e];
                            if (r > i) {
                                var a = i;
                                i = r, r = a
                            }
                            for (var s = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < s.length; n += 1)
                                if (s[n] > 0 && s[n] < 1) {
                                    var o = t.point(s[n])[e];
                                    o < r ? r = o : o > i && (i = o)
                                }
                            return {
                                min: r,
                                max: i
                            }
                        }

                        function intersectData(t, e, r) {
                            var i = t.boundingBox();
                            return {
                                cx: i.cx,
                                cy: i.cy,
                                width: i.width,
                                height: i.height,
                                bez: t,
                                t: (e + r) / 2,
                                t1: e,
                                t2: r
                            }
                        }

                        function splitData(t) {
                            var e = t.bez.split(.5);
                            return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
                        }

                        function boxIntersect(t, e) {
                            return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
                        }

                        function intersectsImpl(t, e, r, i, a, s) {
                            if (boxIntersect(t, e))
                                if (r >= s || t.width <= i && t.height <= i && e.width <= i && e.height <= i) a.push([t.t, e.t]);
                                else {
                                    var n = splitData(t),
                                        o = splitData(e);
                                    intersectsImpl(n[0], o[0], r + 1, i, a, s), intersectsImpl(n[0], o[1], r + 1, i, a, s), intersectsImpl(n[1], o[0], r + 1, i, a, s), intersectsImpl(n[1], o[1], r + 1, i, a, s)
                                }
                        }

                        function crossProduct(t, e) {
                            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                        }

                        function lineIntersection(t, e, r, i) {
                            var a = [t[0], t[1], 1],
                                s = [e[0], e[1], 1],
                                n = [r[0], r[1], 1],
                                o = [i[0], i[1], 1],
                                h = crossProduct(crossProduct(a, s), crossProduct(n, o));
                            return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
                        }

                        function polarOffset(t, e, r) {
                            return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
                        }

                        function pointDistance(t, e) {
                            return Math.hypot(t[0] - e[0], t[1] - e[1])
                        }

                        function pointEqual(t, e) {
                            return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
                        }

                        function ZigZagModifier() {}

                        function setPoint(t, e, r, i, a, s, n) {
                            var o = r - Math.PI / 2,
                                h = r + Math.PI / 2,
                                l = e[0] + Math.cos(r) * i * a,
                                p = e[1] - Math.sin(r) * i * a;
                            t.setTripleAt(l, p, l + Math.cos(o) * s, p - Math.sin(o) * s, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
                        }

                        function getPerpendicularVector(t, e) {
                            var r = [e[0] - t[0], e[1] - t[1]],
                                i = .5 * -Math.PI;
                            return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
                        }

                        function getProjectingAngle(t, e) {
                            var r = 0 === e ? t.length() - 1 : e - 1,
                                i = (e + 1) % t.length(),
                                a = getPerpendicularVector(t.v[r], t.v[i]);
                            return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
                        }

                        function zigZagCorner(t, e, r, i, a, s, n) {
                            var o = getProjectingAngle(e, r),
                                h = e.v[r % e._length],
                                l = e.v[0 === r ? e._length - 1 : r - 1],
                                p = e.v[(r + 1) % e._length],
                                f = 2 === s ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
                                c = 2 === s ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
                            setPoint(t, e.v[r % e._length], o, n, i, c / (2 * (a + 1)), f / (2 * (a + 1)), s)
                        }

                        function zigZagSegment(t, e, r, i, a, s) {
                            for (var n = 0; n < i; n += 1) {
                                var o = (n + 1) / (i + 1),
                                    h = 2 === a ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                                    l = e.normalAngle(o);
                                setPoint(t, e.point(o), l, s, r, h / (2 * (i + 1)), h / (2 * (i + 1)), a), s = -s
                            }
                            return s
                        }

                        function linearOffset(t, e, r) {
                            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
                            return [polarOffset(t, i, r), polarOffset(e, i, r)]
                        }

                        function offsetSegment(t, e) {
                            var r, i, a, s, n, o, h;
                            r = (h = linearOffset(t.points[0], t.points[1], e))[0], i = h[1], a = (h = linearOffset(t.points[1], t.points[2], e))[0], s = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
                            var l = lineIntersection(r, i, a, s);
                            null === l && (l = i);
                            var p = lineIntersection(n, o, a, s);
                            return null === p && (p = n), new PolynomialBezier(r, l, p, o)
                        }

                        function joinLines(t, e, r, i, a) {
                            var s = e.points[3],
                                n = r.points[0];
                            if (3 === i) return s;
                            if (pointEqual(s, n)) return s;
                            if (2 === i) {
                                var o = -e.tangentAngle(1),
                                    h = -r.tangentAngle(0) + Math.PI,
                                    l = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)),
                                    p = l ? pointDistance(l, s) : pointDistance(s, n) / 2,
                                    f = polarOffset(s, o, 2 * p * roundCorner);
                                return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(n, h, 2 * p * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n
                            }
                            var c = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, n, pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]);
                            return c && pointDistance(c, s) < a ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : s
                        }

                        function getIntersection(t, e) {
                            var r = t.intersections(e);
                            return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
                        }

                        function pruneSegmentIntersection(t, e) {
                            var r = t.slice(),
                                i = e.slice(),
                                a = getIntersection(t[t.length - 1], e[0]);
                            return a && (r[t.length - 1] = t[t.length - 1].split(a[0])[0], i[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [
                                [t[0].split(a[0])[0]],
                                [e[e.length - 1].split(a[1])[1]]
                            ] : [r, i]
                        }

                        function pruneIntersections(t) {
                            for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
                            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
                        }

                        function offsetSegmentSplit(t, e) {
                            var r, i, a, s, n = t.inflectionPoints();
                            if (0 === n.length) return [offsetSegment(t, e)];
                            if (1 === n.length || floatEqual(n[1], 1)) return r = (a = t.split(n[0]))[0], i = a[1], [offsetSegment(r, e), offsetSegment(i, e)];
                            r = (a = t.split(n[0]))[0];
                            var o = (n[1] - n[0]) / (1 - n[0]);
                            return s = (a = a[1].split(o))[0], i = a[1], [offsetSegment(r, e), offsetSegment(s, e), offsetSegment(i, e)]
                        }

                        function OffsetPathModifier() {}

                        function getFontProperties(t) {
                            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", a = e.length, s = 0; s < a; s += 1) switch (e[s].toLowerCase()) {
                                case "italic":
                                    i = "italic";
                                    break;
                                case "bold":
                                    r = "700";
                                    break;
                                case "black":
                                    r = "900";
                                    break;
                                case "medium":
                                    r = "500";
                                    break;
                                case "regular":
                                case "normal":
                                    r = "400";
                                    break;
                                case "light":
                                case "thin":
                                    r = "200"
                            }
                            return {
                                style: i,
                                weight: t.fWeight || r
                            }
                        }
                        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, a, s) {
                            var n = s ? -1 : 1,
                                o = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
                                h = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
                            t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / o : o, s ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
                            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
                            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                        }, RepeaterModifier.prototype.resetElements = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                        }, RepeaterModifier.prototype.cloneElements = function(t) {
                            var e = JSON.parse(JSON.stringify(t));
                            return this.resetElements(e), e
                        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
                        }, RepeaterModifier.prototype.processShapes = function(t) {
                            var e, r, i, a, s, n = !1;
                            if (this._mdf || t) {
                                var o, h = Math.ceil(this.c.v);
                                if (this._groups.length < h) {
                                    for (; this._groups.length < h;) {
                                        var l = {
                                            it: this.cloneElements(this._elements),
                                            ty: "gr"
                                        };
                                        l.it.push({
                                            a: {
                                                a: 0,
                                                ix: 1,
                                                k: [0, 0]
                                            },
                                            nm: "Transform",
                                            o: {
                                                a: 0,
                                                ix: 7,
                                                k: 100
                                            },
                                            p: {
                                                a: 0,
                                                ix: 2,
                                                k: [0, 0]
                                            },
                                            r: {
                                                a: 1,
                                                ix: 6,
                                                k: [{
                                                    s: 0,
                                                    e: 0,
                                                    t: 0
                                                }, {
                                                    s: 0,
                                                    e: 0,
                                                    t: 1
                                                }]
                                            },
                                            s: {
                                                a: 0,
                                                ix: 3,
                                                k: [100, 100]
                                            },
                                            sa: {
                                                a: 0,
                                                ix: 5,
                                                k: 0
                                            },
                                            sk: {
                                                a: 0,
                                                ix: 4,
                                                k: 0
                                            },
                                            ty: "tr"
                                        }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
                                    }
                                    this.elem.reloadShapes(), n = !0
                                }
                                for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                                    if (o = s < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                                        var p = this.elemsData[i].it,
                                            f = p[p.length - 1];
                                        0 !== f.transform.op.v ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                                    }
                                    s += 1
                                }
                                this._currentCopies = h;
                                var c = this.o.v,
                                    m = c % 1,
                                    d = c > 0 ? Math.floor(c) : Math.ceil(c),
                                    u = this.pMatrix.props,
                                    y = this.rMatrix.props,
                                    g = this.sMatrix.props;
                                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                                var v, b, _ = 0;
                                if (c > 0) {
                                    for (; _ < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _ += 1;
                                    m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, m, !1), _ += m)
                                } else if (c < 0) {
                                    for (; _ > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _ -= 1;
                                    m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -m, !0), _ -= m)
                                }
                                for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                                    if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== _) {
                                        for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
                                        this.matrix.reset()
                                    } else
                                        for (this.matrix.reset(), v = 0; v < b; v += 1) r[v] = this.matrix.props[v];
                                    _ += 1, s -= 1, i += a
                                }
                            } else
                                for (s = this._currentCopies, i = 0, a = 1; s;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += a;
                            return n
                        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                        }, RoundCornersModifier.prototype.processPath = function(t, e) {
                            var r, i = shapePool.newElement();
                            i.c = t.c;
                            var a, s, n, o, h, l, p, f, c, m, d, u, y = t._length,
                                g = 0;
                            for (r = 0; r < y; r += 1) a = t.v[r], n = t.o[r], s = t.i[r], a[0] === n[0] && a[1] === n[1] && a[0] === s[0] && a[1] === s[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = a[0] + (o[0] - a[0]) * l, f = u = a[1] - (a[1] - o[1]) * l, c = p - (p - a[0]) * roundCorner, m = f - (f - a[1]) * roundCorner, i.setTripleAt(p, f, c, m, d, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = a[0] + (o[0] - a[0]) * l, f = m = a[1] + (o[1] - a[1]) * l, d = p - (p - a[0]) * roundCorner, u = f - (f - a[1]) * roundCorner, i.setTripleAt(p, f, c, m, d, u, g), g += 1) : (i.setTripleAt(a[0], a[1], n[0], n[1], s[0], s[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
                            return i
                        }, RoundCornersModifier.prototype.processShapes = function(t) {
                            var e, r, i, a, s, n, o = this.shapes.length,
                                h = this.rd.v;
                            if (0 !== h)
                                for (r = 0; r < o; r += 1) {
                                    if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                        for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h));
                                    s.shape.paths = s.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        }, PolynomialBezier.prototype.point = function(t) {
                            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
                        }, PolynomialBezier.prototype.derivative = function(t) {
                            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
                        }, PolynomialBezier.prototype.tangentAngle = function(t) {
                            var e = this.derivative(t);
                            return Math.atan2(e[1], e[0])
                        }, PolynomialBezier.prototype.normalAngle = function(t) {
                            var e = this.derivative(t);
                            return Math.atan2(e[0], e[1])
                        }, PolynomialBezier.prototype.inflectionPoints = function() {
                            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                            if (floatZero(t)) return [];
                            var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                                r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
                            if (r < 0) return [];
                            var i = Math.sqrt(r);
                            return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter((function(t) {
                                return t > 0 && t < 1
                            }))
                        }, PolynomialBezier.prototype.split = function(t) {
                            if (t <= 0) return [singlePoint(this.points[0]), this];
                            if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                            var e = lerpPoint(this.points[0], this.points[1], t),
                                r = lerpPoint(this.points[1], this.points[2], t),
                                i = lerpPoint(this.points[2], this.points[3], t),
                                a = lerpPoint(e, r, t),
                                s = lerpPoint(r, i, t),
                                n = lerpPoint(a, s, t);
                            return [new PolynomialBezier(this.points[0], e, a, n, !0), new PolynomialBezier(n, s, i, this.points[3], !0)]
                        }, PolynomialBezier.prototype.bounds = function() {
                            return {
                                x: extrema(this, 0),
                                y: extrema(this, 1)
                            }
                        }, PolynomialBezier.prototype.boundingBox = function() {
                            var t = this.bounds();
                            return {
                                left: t.x.min,
                                right: t.x.max,
                                top: t.y.min,
                                bottom: t.y.max,
                                width: t.x.max - t.x.min,
                                height: t.y.max - t.y.min,
                                cx: (t.x.max + t.x.min) / 2,
                                cy: (t.y.max + t.y.min) / 2
                            }
                        }, PolynomialBezier.prototype.intersections = function(t, e, r) {
                            void 0 === e && (e = 2), void 0 === r && (r = 7);
                            var i = [];
                            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
                        }, PolynomialBezier.shapeSegment = function(t, e) {
                            var r = (e + 1) % t.length();
                            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
                        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
                            var r = (e + 1) % t.length();
                            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
                        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                        }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
                            var a = t._length,
                                s = shapePool.newElement();
                            if (s.c = t.c, t.c || (a -= 1), 0 === a) return s;
                            var n = -1,
                                o = PolynomialBezier.shapeSegment(t, 0);
                            zigZagCorner(s, t, 0, e, r, i, n);
                            for (var h = 0; h < a; h += 1) n = zigZagSegment(s, o, e, r, i, -n), o = h !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % a) : null, zigZagCorner(s, t, h + 1, e, r, i, n);
                            return s
                        }, ZigZagModifier.prototype.processShapes = function(t) {
                            var e, r, i, a, s, n, o = this.shapes.length,
                                h = this.amplitude.v,
                                l = Math.max(0, Math.round(this.frequency.v)),
                                p = this.pointsType.v;
                            if (0 !== h)
                                for (r = 0; r < o; r += 1) {
                                    if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                        for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h, l, p));
                                    s.shape.paths = s.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
                            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
                            var a = shapePool.newElement();
                            a.c = t.c;
                            var s, n, o, h = t.length();
                            t.c || (h -= 1);
                            var l = [];
                            for (s = 0; s < h; s += 1) o = PolynomialBezier.shapeSegment(t, s), l.push(offsetSegmentSplit(o, e));
                            if (!t.c)
                                for (s = h - 1; s >= 0; s -= 1) o = PolynomialBezier.shapeSegmentInverted(t, s), l.push(offsetSegmentSplit(o, e));
                            l = pruneIntersections(l);
                            var p = null,
                                f = null;
                            for (s = 0; s < l.length; s += 1) {
                                var c = l[s];
                                for (f && (p = joinLines(a, f, c[0], r, i)), f = c[c.length - 1], n = 0; n < c.length; n += 1) o = c[n], p && pointEqual(o.points[0], p) ? a.setXYAt(o.points[1][0], o.points[1][1], "o", a.length() - 1) : a.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], a.length()), a.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], a.length()), p = o.points[3]
                            }
                            return l.length && joinLines(a, f, l[0][0], r, i), a
                        }, OffsetPathModifier.prototype.processShapes = function(t) {
                            var e, r, i, a, s, n, o = this.shapes.length,
                                h = this.amount.v,
                                l = this.miterLimit.v,
                                p = this.lineJoin;
                            if (0 !== h)
                                for (r = 0; r < o; r += 1) {
                                    if (n = (s = this.shapes[r]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                        for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], h, p, l));
                                    s.shape.paths = s.localShapeCollection
                                }
                            this.dynamicProperties.length || (this._mdf = !1)
                        };
                        var FontManager = function() {
                            var t = {
                                    w: 0,
                                    size: 0,
                                    shapes: [],
                                    data: {
                                        shapes: []
                                    }
                                },
                                e = [];
                            e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                            var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                                i = [65039, 8205];

                            function a(t, e) {
                                var r = createTag("span");
                                r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
                                var i = createTag("span");
                                i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
                                var a = i.offsetWidth;
                                return i.style.fontFamily = function(t) {
                                    var e, r = t.split(","),
                                        i = r.length,
                                        a = [];
                                    for (e = 0; e < i; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && a.push(r[e]);
                                    return a.join(",")
                                }(t) + ", " + e, {
                                    node: i,
                                    w: a,
                                    parent: r
                                }
                            }

                            function s(t, e) {
                                var r, i = document.body && e ? "svg" : "canvas",
                                    a = getFontProperties(t);
                                if ("svg" === i) {
                                    var s = createNS("text");
                                    s.style.fontSize = "100px", s.setAttribute("font-family", t.fFamily), s.setAttribute("font-style", a.style), s.setAttribute("font-weight", a.weight), s.textContent = "1", t.fClass ? (s.style.fontFamily = "inherit", s.setAttribute("class", t.fClass)) : s.style.fontFamily = t.fFamily, e.appendChild(s), r = s
                                } else {
                                    var n = new OffscreenCanvas(500, 500).getContext("2d");
                                    n.font = a.style + " " + a.weight + " 100px " + t.fFamily, r = n
                                }
                                return {
                                    measureText: function(t) {
                                        return "svg" === i ? (r.textContent = t, r.getComputedTextLength()) : r.measureText(t).width
                                    }
                                }
                            }
                            var n = function() {
                                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                            };
                            return n.isModifier = function(t, e) {
                                var i = t.toString(16) + e.toString(16);
                                return -1 !== r.indexOf(i)
                            }, n.isZeroWidthJoiner = function(t, e) {
                                return e ? t === i[0] && e === i[1] : t === i[1]
                            }, n.isCombinedCharacter = function(t) {
                                return -1 !== e.indexOf(t)
                            }, n.prototype = {
                                addChars: function(t) {
                                    if (t) {
                                        var e;
                                        this.chars || (this.chars = []);
                                        var r, i, a = t.length,
                                            s = this.chars.length;
                                        for (e = 0; e < a; e += 1) {
                                            for (r = 0, i = !1; r < s;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                                            i || (this.chars.push(t[e]), s += 1)
                                        }
                                    }
                                },
                                addFonts: function(t, e) {
                                    if (t) {
                                        if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                        if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                                            t.helper = s(t), t.cache = {}
                                        })), void(this.fonts = t.list);
                                        var r, i = t.list,
                                            n = i.length,
                                            o = n;
                                        for (r = 0; r < n; r += 1) {
                                            var h, l, p = !0;
                                            if (i[r].loaded = !1, i[r].monoCase = a(i[r].fFamily, "monospace"), i[r].sansCase = a(i[r].fFamily, "sans-serif"), i[r].fPath) {
                                                if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                                                    if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                        var f = createTag("style");
                                                        f.setAttribute("f-forigin", i[r].fOrigin), f.setAttribute("f-origin", i[r].origin), f.setAttribute("f-family", i[r].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", e.appendChild(f)
                                                    }
                                                } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                                                    for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(i[r].fPath) && (p = !1);
                                                    if (p) {
                                                        var c = createTag("link");
                                                        c.setAttribute("f-forigin", i[r].fOrigin), c.setAttribute("f-origin", i[r].origin), c.type = "text/css", c.rel = "stylesheet", c.href = i[r].fPath, document.body.appendChild(c)
                                                    }
                                                } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                                                    for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) i[r].fPath === h[l].src && (p = !1);
                                                    if (p) {
                                                        var m = createTag("link");
                                                        m.setAttribute("f-forigin", i[r].fOrigin), m.setAttribute("f-origin", i[r].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", i[r].fPath), e.appendChild(m)
                                                    }
                                                }
                                            } else i[r].loaded = !0, o -= 1;
                                            i[r].helper = s(i[r], e), i[r].cache = {}, this.fonts.push(i[r])
                                        }
                                        0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                    } else this.isLoaded = !0
                                },
                                getCharData: function(e, r, i) {
                                    for (var a = 0, s = this.chars.length; a < s;) {
                                        if (this.chars[a].ch === e && this.chars[a].style === r && this.chars[a].fFamily === i) return this.chars[a];
                                        a += 1
                                    }
                                    return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0), t
                                },
                                getFontByName: function(t) {
                                    for (var e = 0, r = this.fonts.length; e < r;) {
                                        if (this.fonts[e].fName === t) return this.fonts[e];
                                        e += 1
                                    }
                                    return this.fonts[0]
                                },
                                measureText: function(t, e, r) {
                                    var i = this.getFontByName(e),
                                        a = t.charCodeAt(0);
                                    if (!i.cache[a + 1]) {
                                        var s = i.helper;
                                        if (" " === t) {
                                            var n = s.measureText("|" + t + "|"),
                                                o = s.measureText("||");
                                            i.cache[a + 1] = (n - o) / 100
                                        } else i.cache[a + 1] = s.measureText(t) / 100
                                    }
                                    return i.cache[a + 1] * r
                                },
                                checkLoadedFonts: function() {
                                    var t, e, r, i = this.fonts.length,
                                        a = i;
                                    for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                    0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                                },
                                setIsLoaded: function() {
                                    this.isLoaded = !0
                                }
                            }, n
                        }();

                        function RenderableElement() {}
                        RenderableElement.prototype = {
                            initRenderable: function() {
                                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                            },
                            addRenderableComponent: function(t) {
                                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                            },
                            removeRenderableComponent: function(t) {
                                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                            },
                            prepareRenderableFrame: function(t) {
                                this.checkLayerLimits(t)
                            },
                            checkTransparency: function() {
                                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                            },
                            checkLayerLimits: function(t) {
                                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                            },
                            renderRenderable: function() {
                                var t, e = this.renderableComponents.length;
                                for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                            },
                            sourceRectAtTime: function() {
                                return {
                                    top: 0,
                                    left: 0,
                                    width: 100,
                                    height: 100
                                }
                            },
                            getLayerSize: function() {
                                return 5 === this.data.ty ? {
                                    w: this.data.textData.width,
                                    h: this.data.textData.height
                                } : {
                                    w: this.data.width,
                                    h: this.data.height
                                }
                            }
                        };
                        var getBlendMode = (blendModeEnums = {
                                0: "source-over",
                                1: "multiply",
                                2: "screen",
                                3: "overlay",
                                4: "darken",
                                5: "lighten",
                                6: "color-dodge",
                                7: "color-burn",
                                8: "hard-light",
                                9: "soft-light",
                                10: "difference",
                                11: "exclusion",
                                12: "hue",
                                13: "saturation",
                                14: "color",
                                15: "luminosity"
                            }, function(t) {
                                return blendModeEnums[t] || ""
                            }),
                            blendModeEnums;

                        function SliderEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function AngleEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function ColorEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                        }

                        function PointEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                        }

                        function LayerIndexEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function MaskIndexEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function CheckboxEffect(t, e, r) {
                            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                        }

                        function NoValueEffect() {
                            this.p = {}
                        }

                        function EffectsManager(t, e) {
                            var r, i = t.ef || [];
                            this.effectElements = [];
                            var a, s = i.length;
                            for (r = 0; r < s; r += 1) a = new GroupEffect(i[r], e), this.effectElements.push(a)
                        }

                        function GroupEffect(t, e) {
                            this.init(t, e)
                        }

                        function BaseElement() {}

                        function FrameElement() {}

                        function FootageElement(t, e, r) {
                            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
                        }

                        function AudioElement(t, e, r) {
                            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
                            var i = this.globalData.getAssetsPath(this.assetData);
                            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
                                k: [100]
                            }, 1, .01, this)
                        }

                        function BaseRenderer() {}

                        function TransformElement() {}

                        function MaskElement(t, e, r) {
                            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                            var i, a, s = this.globalData.defs,
                                n = this.masksProperties ? this.masksProperties.length : 0;
                            this.viewData = createSizedArray(n), this.solidPath = "";
                            var o, h, l, p, f, c, m = this.masksProperties,
                                d = 0,
                                u = [],
                                y = createElementID(),
                                g = "clipPath",
                                v = "clip-path";
                            for (i = 0; i < n; i += 1)
                                if (("a" !== m[i].mode && "n" !== m[i].mode || m[i].inv || 100 !== m[i].o.k || m[i].o.x) && (g = "mask", v = "mask"), "s" !== m[i].mode && "i" !== m[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), a = createNS("path"), "n" === m[i].mode) this.viewData[i] = {
                                    op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.element),
                                    prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3),
                                    elem: a,
                                    lastPath: ""
                                }, s.appendChild(a);
                                else {
                                    var b;
                                    if (d += 1, a.setAttribute("fill", "s" === m[i].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 0 !== m[i].x.k ? (g = "mask", v = "mask", c = PropertyFactory.getProp(this.element, m[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), s.appendChild(p), a.setAttribute("stroke", "s" === m[i].mode ? "#000000" : "#ffffff")) : (f = null, c = null), this.storedData[i] = {
                                            elem: a,
                                            x: c,
                                            expan: f,
                                            lastPath: "",
                                            lastOperator: "",
                                            filterId: b,
                                            lastRadius: 0
                                        }, "i" === m[i].mode) {
                                        h = u.length;
                                        var _ = createNS("g");
                                        for (o = 0; o < h; o += 1) _.appendChild(u[o]);
                                        var E = createNS("mask");
                                        E.setAttribute("mask-type", "alpha"), E.setAttribute("id", y + "_" + d), E.appendChild(a), s.appendChild(E), _.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), u.length = 0, u.push(_)
                                    } else u.push(a);
                                    m[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                        elem: a,
                                        lastPath: "",
                                        op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.element),
                                        prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3),
                                        invRect: l
                                    }, this.viewData[i].prop.k || this.drawPath(m[i], this.viewData[i].prop.v, this.viewData[i])
                                }
                            for (this.maskElement = createNS(g), n = u.length, i = 0; i < n; i += 1) this.maskElement.appendChild(u[i]);
                            d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                        }
                        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                            var r;
                            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                            var i, a = this.data.ef.length,
                                s = this.data.ef;
                            for (r = 0; r < a; r += 1) {
                                switch (i = null, s[r].ty) {
                                    case 0:
                                        i = new SliderEffect(s[r], e, this);
                                        break;
                                    case 1:
                                        i = new AngleEffect(s[r], e, this);
                                        break;
                                    case 2:
                                        i = new ColorEffect(s[r], e, this);
                                        break;
                                    case 3:
                                        i = new PointEffect(s[r], e, this);
                                        break;
                                    case 4:
                                    case 7:
                                        i = new CheckboxEffect(s[r], e, this);
                                        break;
                                    case 10:
                                        i = new LayerIndexEffect(s[r], e, this);
                                        break;
                                    case 11:
                                        i = new MaskIndexEffect(s[r], e, this);
                                        break;
                                    case 5:
                                        i = new EffectsManager(s[r], e, this);
                                        break;
                                    default:
                                        i = new NoValueEffect(s[r], e, this)
                                }
                                i && this.effectElements.push(i)
                            }
                        }, BaseElement.prototype = {
                            checkMasks: function() {
                                if (!this.data.hasMask) return !1;
                                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                    t += 1
                                }
                                return !1
                            },
                            initExpressions: function() {
                                var t = getExpressionInterfaces();
                                if (t) {
                                    var e = t("layer"),
                                        r = t("effects"),
                                        i = t("shape"),
                                        a = t("text"),
                                        s = t("comp");
                                    this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                                    var n = r.createEffectsInterface(this, this.layerInterface);
                                    this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = s(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                                }
                            },
                            setBlendMode: function() {
                                var t = getBlendMode(this.data.bm);
                                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                            },
                            initBaseData: function(t, e, r) {
                                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                            },
                            getType: function() {
                                return this.type
                            },
                            sourceRectAtTime: function() {}
                        }, FrameElement.prototype = {
                            initFrame: function() {
                                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                            },
                            prepareProperties: function(t, e) {
                                var r, i = this.dynamicProperties.length;
                                for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                            },
                            addDynamicProperty: function(t) {
                                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                            }
                        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                            return null
                        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                            var t = getExpressionInterfaces();
                            if (t) {
                                var e = t("footage");
                                this.layerInterface = e(this)
                            }
                        }, FootageElement.prototype.getFootageData = function() {
                            return this.footageData
                        }, AudioElement.prototype.prepareFrame = function(t) {
                            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                            else {
                                var e = this.tm.v;
                                this._currentTime = e
                            }
                            this._volume = this.lv.v[0];
                            var r = this._volume * this._volumeMultiplier;
                            this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
                        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                            this.audio.pause(), this._isPlaying = !1
                        }, AudioElement.prototype.pause = function() {
                            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                        }, AudioElement.prototype.resume = function() {
                            this._canPlay = !0
                        }, AudioElement.prototype.setRate = function(t) {
                            this.audio.rate(t)
                        }, AudioElement.prototype.volume = function(t) {
                            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
                        }, AudioElement.prototype.getBaseElement = function() {
                            return null
                        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
                            var e, r, i = this.layers.length;
                            for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.createItem = function(t) {
                            switch (t.ty) {
                                case 2:
                                    return this.createImage(t);
                                case 0:
                                    return this.createComp(t);
                                case 1:
                                    return this.createSolid(t);
                                case 3:
                                default:
                                    return this.createNull(t);
                                case 4:
                                    return this.createShape(t);
                                case 5:
                                    return this.createText(t);
                                case 6:
                                    return this.createAudio(t);
                                case 13:
                                    return this.createCamera(t);
                                case 15:
                                    return this.createFootage(t)
                            }
                        }, BaseRenderer.prototype.createCamera = function() {
                            throw new Error("You're using a 3d camera. Try the html renderer.")
                        }, BaseRenderer.prototype.createAudio = function(t) {
                            return new AudioElement(t, this.globalData, this)
                        }, BaseRenderer.prototype.createFootage = function(t) {
                            return new FootageElement(t, this.globalData, this)
                        }, BaseRenderer.prototype.buildAllItems = function() {
                            var t, e = this.layers.length;
                            for (t = 0; t < e; t += 1) this.buildItem(t);
                            this.checkPendingElements()
                        }, BaseRenderer.prototype.includeLayers = function(t) {
                            var e;
                            this.completeLayers = !1;
                            var r, i = t.length,
                                a = this.layers.length;
                            for (e = 0; e < i; e += 1)
                                for (r = 0; r < a;) {
                                    if (this.layers[r].id === t[e].id) {
                                        this.layers[r] = t[e];
                                        break
                                    }
                                    r += 1
                                }
                        }, BaseRenderer.prototype.setProjectInterface = function(t) {
                            this.globalData.projectInterface = t
                        }, BaseRenderer.prototype.initItems = function() {
                            this.globalData.progressiveLoad || this.buildAllItems()
                        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                            for (var i = this.elements, a = this.layers, s = 0, n = a.length; s < n;) a[s].ind == e && (i[s] && !0 !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(t, a[s].parent, r) : t.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
                        }, BaseRenderer.prototype.addPendingElement = function(t) {
                            this.pendingElements.push(t)
                        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1)
                                if (t[e].xt) {
                                    var i = this.createComp(t[e]);
                                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                                }
                        }, BaseRenderer.prototype.getElementById = function(t) {
                            var e, r = this.elements.length;
                            for (e = 0; e < r; e += 1)
                                if (this.elements[e].data.ind === t) return this.elements[e];
                            return null
                        }, BaseRenderer.prototype.getElementByPath = function(t) {
                            var e, r = t.shift();
                            if ("number" == typeof r) e = this.elements[r];
                            else {
                                var i, a = this.elements.length;
                                for (i = 0; i < a; i += 1)
                                    if (this.elements[i].data.nm === r) {
                                        e = this.elements[i];
                                        break
                                    }
                            }
                            return 0 === t.length ? e : e.getElementByPath(t)
                        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                            this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                                w: t.w,
                                h: t.h
                            }
                        }, TransformElement.prototype = {
                            initTransform: function() {
                                this.finalTransform = {
                                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                        o: 0
                                    },
                                    _matMdf: !1,
                                    _opMdf: !1,
                                    mat: new Matrix
                                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                            },
                            renderTransform: function() {
                                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                                    var t, e = this.finalTransform.mat,
                                        r = 0,
                                        i = this.hierarchy.length;
                                    if (!this.finalTransform._matMdf)
                                        for (; r < i;) {
                                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                                this.finalTransform._matMdf = !0;
                                                break
                                            }
                                            r += 1
                                        }
                                    if (this.finalTransform._matMdf)
                                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                                }
                            },
                            globalToLocal: function(t) {
                                var e = [];
                                e.push(this.finalTransform);
                                for (var r, i = !0, a = this.comp; i;) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : i = !1;
                                var s, n = e.length;
                                for (r = 0; r < n; r += 1) s = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                                return t
                            },
                            mHelper: new Matrix
                        }, MaskElement.prototype.getMaskProperty = function(t) {
                            return this.viewData[t].prop
                        }, MaskElement.prototype.renderFrame = function(t) {
                            var e, r = this.element.finalTransform.mat,
                                i = this.masksProperties.length;
                            for (e = 0; e < i; e += 1)
                                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                                    var a = this.storedData[e].expan;
                                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                                }
                        }, MaskElement.prototype.getMaskelement = function() {
                            return this.maskElement
                        }, MaskElement.prototype.createLayerSolidPath = function() {
                            var t = "M0,0 ";
                            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
                        }, MaskElement.prototype.drawPath = function(t, e, r) {
                            var i, a, s = " M" + e.v[0][0] + "," + e.v[0][1];
                            for (a = e._length, i = 1; i < a; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                            if (e.c && a > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== s) {
                                var n = "";
                                r.elem && (e.c && (n = t.inv ? this.solidPath + s : s), r.elem.setAttribute("d", n)), r.lastPath = s
                            }
                        }, MaskElement.prototype.destroy = function() {
                            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                        };
                        var filtersFactory = function() {
                                var t = {
                                    createFilter: function(t, e) {
                                        var r = createNS("filter");
                                        return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
                                    },
                                    createAlphaToLuminanceFilter: function() {
                                        var t = createNS("feColorMatrix");
                                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                                    }
                                };
                                return t
                            }(),
                            featureSupport = function() {
                                var t = {
                                    maskType: !0,
                                    svgLumaHidden: !0,
                                    offscreenCanvas: "undefined" != typeof OffscreenCanvas
                                };
                                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
                            }(),
                            registeredEffects = {},
                            idPrefix = "filter_result_";

                        function SVGEffects(t) {
                            var e, r, i = "SourceGraphic",
                                a = t.data.ef ? t.data.ef.length : 0,
                                s = createElementID(),
                                n = filtersFactory.createFilter(s, !0),
                                o = 0;
                            for (this.filters = [], e = 0; e < a; e += 1) {
                                r = null;
                                var h = t.data.ef[e].ty;
                                registeredEffects[h] && (r = new(0, registeredEffects[h].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects[h].countsAsEffect && (o += 1)), r && this.filters.push(r)
                            }
                            o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
                        }

                        function registerEffect(t, e, r) {
                            registeredEffects[t] = {
                                effect: e,
                                countsAsEffect: r
                            }
                        }

                        function SVGBaseElement() {}

                        function HierarchyElement() {}

                        function RenderableDOMElement() {}

                        function IImageElement(t, e, r) {
                            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                                top: 0,
                                left: 0,
                                width: this.assetData.w,
                                height: this.assetData.h
                            }
                        }

                        function ProcessedElement(t, e) {
                            this.elem = t, this.pos = e
                        }

                        function IShapeElement() {}
                        SVGEffects.prototype.renderFrame = function(t) {
                            var e, r = this.filters.length;
                            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
                        }, SVGBaseElement.prototype = {
                            initRendererElement: function() {
                                this.layerElement = createNS("g")
                            },
                            createContainerElements: function() {
                                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                                var t = null;
                                if (this.data.td) {
                                    this.matteMasks = {};
                                    var e = createNS("g");
                                    e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
                                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                    var r = createNS("clipPath"),
                                        i = createNS("path");
                                    i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                    var a = createElementID();
                                    if (r.setAttribute("id", a), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                                        var s = createNS("g");
                                        s.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), s.appendChild(this.layerElement), this.transformedElement = s, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                                }
                                0 !== this.data.bm && this.setBlendMode()
                            },
                            renderElement: function() {
                                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                            },
                            destroyBaseElement: function() {
                                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                            },
                            getBaseElement: function() {
                                return this.data.hd ? null : this.baseElement
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                            },
                            getMatte: function(t) {
                                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                                    var e, r, i, a, s = this.layerId + "_" + t;
                                    if (1 === t || 3 === t) {
                                        var n = createNS("mask");
                                        n.setAttribute("id", s), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), n.appendChild(i), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(i), n.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
                                    } else if (2 === t) {
                                        var o = createNS("mask");
                                        o.setAttribute("id", s), o.setAttribute("mask-type", "alpha");
                                        var h = createNS("g");
                                        o.appendChild(h), e = createElementID(), r = filtersFactory.createFilter(e);
                                        var l = createNS("feComponentTransfer");
                                        l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
                                        var p = createNS("feFuncA");
                                        p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(r);
                                        var f = createNS("rect");
                                        f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(f), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), h.appendChild(f), a.appendChild(this.layerElement), h.appendChild(a)), this.globalData.defs.appendChild(o)
                                    }
                                    this.matteMasks[t] = s
                                }
                                return this.matteMasks[t]
                            },
                            setMatte: function(t) {
                                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
                            }
                        }, HierarchyElement.prototype = {
                            initHierarchy: function() {
                                this.hierarchy = [], this._isParent = !1, this.checkParenting()
                            },
                            setHierarchy: function(t) {
                                this.hierarchy = t
                            },
                            setAsParent: function() {
                                this._isParent = !0
                            },
                            checkParenting: function() {
                                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                            }
                        }, extendPrototype([RenderableElement, createProxyFunction({
                            initElement: function(t, e, r) {
                                this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            },
                            hide: function() {
                                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                            },
                            show: function() {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(t) {
                                this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                            var t = this.globalData.getAssetsPath(this.assetData);
                            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                        }, IImageElement.prototype.sourceRectAtTime = function() {
                            return this.sourceRect
                        }, IShapeElement.prototype = {
                            addShapeToModifiers: function(t) {
                                var e, r = this.shapeModifiers.length;
                                for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
                            },
                            isShapeInAnimatedModifiers: function(t) {
                                for (var e = this.shapeModifiers.length; 0 < e;)
                                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                                return !1
                            },
                            renderModifiers: function() {
                                if (this.shapeModifiers.length) {
                                    var t, e = this.shapes.length;
                                    for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                                    for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                                }
                            },
                            searchProcessedElement: function(t) {
                                for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                                    if (e[r].elem === t) return e[r].pos;
                                    r += 1
                                }
                                return 0
                            },
                            addProcessedElement: function(t, e) {
                                for (var r = this.processedElements, i = r.length; i;)
                                    if (r[i -= 1].elem === t) return void(r[i].pos = e);
                                r.push(new ProcessedElement(t, e))
                            },
                            prepareFrame: function(t) {
                                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                            }
                        };
                        var lineCapEnum = {
                                1: "butt",
                                2: "round",
                                3: "square"
                            },
                            lineJoinEnum = {
                                1: "miter",
                                2: "round",
                                3: "bevel"
                            };

                        function SVGShapeData(t, e, r) {
                            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
                            for (var i = 0, a = t.length; i < a;) {
                                if (t[i].mProps.dynamicProperties.length) {
                                    this._isAnimated = !0;
                                    break
                                }
                                i += 1
                            }
                        }

                        function SVGStyleData(t, e) {
                            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                        }

                        function DashProperty(t, e, r, i) {
                            var a;
                            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                            var s, n = e.length || 0;
                            for (a = 0; a < n; a += 1) s = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[a] = {
                                n: e[a].n,
                                p: s
                            };
                            this.k || this.getValue(!0), this._isAnimated = this.k
                        }

                        function SVGStrokeStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
                        }

                        function SVGFillStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
                        }

                        function SVGNoStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
                        }

                        function GradientProperty(t, e, r) {
                            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                            var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                        }

                        function SVGGradientFillStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
                        }

                        function SVGGradientStrokeStyleData(t, e, r) {
                            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
                        }

                        function ShapeGroupData() {
                            this.it = [], this.prevViewData = [], this.gr = createNS("g")
                        }

                        function SVGTransformData(t, e, r) {
                            this.transform = {
                                mProps: t,
                                op: e,
                                container: r
                            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                        }
                        SVGShapeData.prototype.setAsAnimated = function() {
                            this._isAnimated = !0
                        }, SVGStyleData.prototype.reset = function() {
                            this.d = "", this._mdf = !1
                        }, DashProperty.prototype.getValue = function(t) {
                            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                                var e = 0,
                                    r = this.dataProps.length;
                                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                            }
                        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
                            for (var r = 0, i = this.o.length / 2; r < i;) {
                                if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
                                r += 1
                            }
                            return !0
                        }, GradientProperty.prototype.checkCollapsable = function() {
                            if (this.o.length / 2 != this.c.length / 4) return !1;
                            if (this.data.k.k[0].s)
                                for (var t = 0, e = this.data.k.k.length; t < e;) {
                                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                                    t += 1
                                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                            return !0
                        }, GradientProperty.prototype.getValue = function(t) {
                            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                                var e, r, i, a = 4 * this.data.p;
                                for (e = 0; e < a; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                                if (this.o.length)
                                    for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                                this._mdf = !t
                            }
                        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
                            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                                k: 0
                            }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                                k: 0
                            }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
                        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                            var r = createElementID(),
                                i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                            var a, s, n, o = [];
                            for (n = 4 * e.g.p, s = 0; s < n; s += 4) a = createNS("stop"), i.appendChild(a), o.push(a);
                            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
                        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                            if (this.g._hasOpacity && !this.g._collapsable) {
                                var r, i, a, s = createNS("mask"),
                                    n = createNS("path");
                                s.appendChild(n);
                                var o = createElementID(),
                                    h = createElementID();
                                s.setAttribute("id", h);
                                var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                                l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                                var p = this.stops;
                                for (i = 4 * t.g.p; i < a; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
                                n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = s, this.ost = p, this.maskId = h, e.msElem = n
                            }
                        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                        var buildShapeString = function(t, e, r, i) {
                                if (0 === e) return "";
                                var a, s = t.o,
                                    n = t.i,
                                    o = t.v,
                                    h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                                for (a = 1; a < e; a += 1) h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(o[a][0], o[a][1]);
                                return r && e && (h += " C" + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
                            },
                            SVGElementsRenderer = function() {
                                var t = new Matrix,
                                    e = new Matrix;

                                function r(t, e, r) {
                                    (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                                }

                                function i() {}

                                function a(r, i, a) {
                                    var s, n, o, h, l, p, f, c, m, d, u, y = i.styles.length,
                                        g = i.lvl;
                                    for (p = 0; p < y; p += 1) {
                                        if (h = i.sh._mdf || a, i.styles[p].lvl < g) {
                                            for (c = e.reset(), d = g - i.styles[p].lvl, u = i.transformers.length - 1; !h && d > 0;) h = i.transformers[u].mProps._mdf || h, d -= 1, u -= 1;
                                            if (h)
                                                for (d = g - i.styles[p].lvl, u = i.transformers.length - 1; d > 0;) m = i.transformers[u].mProps.v.props, c.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), d -= 1, u -= 1
                                        } else c = t;
                                        if (n = (f = i.sh.paths)._length, h) {
                                            for (o = "", s = 0; s < n; s += 1)(l = f.shapes[s]) && l._length && (o += buildShapeString(l, l._length, l.c, c));
                                            i.caches[p] = o
                                        } else o = i.caches[p];
                                        i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = h || i.styles[p]._mdf
                                    }
                                }

                                function s(t, e, r) {
                                    var i = e.style;
                                    (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
                                }

                                function n(t, e, r) {
                                    o(t, e, r), h(0, e, r)
                                }

                                function o(t, e, r) {
                                    var i, a, s, n, o, h = e.gf,
                                        l = e.g._hasOpacity,
                                        p = e.s.v,
                                        f = e.e.v;
                                    if (e.o._mdf || r) {
                                        var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                                        e.style.pElem.setAttribute(c, e.o.v)
                                    }
                                    if (e.s._mdf || r) {
                                        var m = 1 === t.t ? "x1" : "cx",
                                            d = "x1" === m ? "y1" : "cy";
                                        h.setAttribute(m, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(m, p[0]), e.of.setAttribute(d, p[1]))
                                    }
                                    if (e.g._cmdf || r) {
                                        i = e.cst;
                                        var u = e.g.c;
                                        for (s = i.length, a = 0; a < s; a += 1)(n = i[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
                                    }
                                    if (l && (e.g._omdf || r)) {
                                        var y = e.g.o;
                                        for (s = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < s; a += 1) n = i[a], e.g._collapsable || n.setAttribute("offset", y[2 * a] + "%"), n.setAttribute("stop-opacity", y[2 * a + 1])
                                    }
                                    if (1 === t.t)(e.e._mdf || r) && (h.setAttribute("x2", f[0]), h.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
                                    else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                                        o || (o = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
                                        var g = Math.atan2(f[1] - p[1], f[0] - p[0]),
                                            v = e.h.v;
                                        v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                                        var b = o * v,
                                            _ = Math.cos(g + e.a.v) * b + p[0],
                                            E = Math.sin(g + e.a.v) * b + p[1];
                                        h.setAttribute("fx", _), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", _), e.of.setAttribute("fy", E))
                                    }
                                }

                                function h(t, e, r) {
                                    var i = e.style,
                                        a = e.d;
                                    a && (a._mdf || r) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
                                }
                                return {
                                    createRenderFunction: function(t) {
                                        switch (t.ty) {
                                            case "fl":
                                                return s;
                                            case "gf":
                                                return o;
                                            case "gs":
                                                return n;
                                            case "st":
                                                return h;
                                            case "sh":
                                            case "el":
                                            case "rc":
                                            case "sr":
                                                return a;
                                            case "tr":
                                                return r;
                                            case "no":
                                                return i;
                                            default:
                                                return null
                                        }
                                    }
                                }
                            }();

                        function SVGShapeElement(t, e, r) {
                            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
                        }

                        function LetterProps(t, e, r, i, a, s) {
                            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = a, this.p = s, this._mdf = {
                                o: !0,
                                sw: !!e,
                                sc: !!r,
                                fc: !!i,
                                m: !0,
                                p: !0
                            }
                        }

                        function TextProperty(t, e) {
                            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                                ascent: 0,
                                boxWidth: this.defaultBoxWidth,
                                f: "",
                                fStyle: "",
                                fWeight: "",
                                fc: "",
                                j: "",
                                justifyOffset: "",
                                l: [],
                                lh: 0,
                                lineWidths: [],
                                ls: "",
                                of: "",
                                s: "",
                                sc: "",
                                sw: 0,
                                t: 0,
                                tr: 0,
                                sz: 0,
                                ps: null,
                                fillColorAnim: !1,
                                strokeColorAnim: !1,
                                strokeWidthAnim: !1,
                                yOffset: 0,
                                finalSize: 0,
                                finalText: [],
                                finalLineHeight: 0,
                                __complete: !1
                            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                        }
                        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                            var t, e, r, i, a = this.shapes.length,
                                s = this.stylesList.length,
                                n = [],
                                o = !1;
                            for (r = 0; r < s; r += 1) {
                                for (i = this.stylesList[r], o = !1, n.length = 0, t = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
                                n.length > 1 && o && this.setShapesAsAnimated(n)
                            }
                        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
                        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                            var r, i = new SVGStyleData(t, e),
                                a = i.pElem;
                            return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)), "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
                        }, SVGShapeElement.prototype.createGroupElement = function(t) {
                            var e = new ShapeGroupData;
                            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                                i = new SVGTransformData(r, r.o, e);
                            return this.addToAnimatedContents(t, i), i
                        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                            var i = 4;
                            "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                            var a = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
                            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
                        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                            for (var r = 0, i = this.animatedContents.length; r < i;) {
                                if (this.animatedContents[r].element === e) return;
                                r += 1
                            }
                            this.animatedContents.push({
                                fn: SVGElementsRenderer.createRenderFunction(t),
                                element: e,
                                data: t
                            })
                        }, SVGShapeElement.prototype.setElementStyles = function(t) {
                            var e, r = t.styles,
                                i = this.stylesList.length;
                            for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
                        }, SVGShapeElement.prototype.reloadShapes = function() {
                            var t;
                            this._isFirstFrame = !0;
                            var e = this.itemsData.length;
                            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                            this.renderModifiers()
                        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, a, s, n) {
                            var o, h, l, p, f, c, m = [].concat(s),
                                d = t.length - 1,
                                u = [],
                                y = [];
                            for (o = d; o >= 0; o -= 1) {
                                if ((c = this.searchProcessedElement(t[o])) ? e[o] = r[c - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], a), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), u.push(e[o].style);
                                else if ("gr" === t[o].ty) {
                                    if (c)
                                        for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                                    else e[o] = this.createGroupElement(t[o]);
                                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, a + 1, m, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                                } else "tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, m.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], m, a)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (f = e[o]).closed = !1 : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), y.push(f)) : "rp" === t[o].ty && (c ? (f = e[o]).closed = !0 : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = !1), y.push(f));
                                this.addProcessedElement(t[o], o + 1)
                            }
                            for (d = u.length, o = 0; o < d; o += 1) u[o].closed = !0;
                            for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
                        }, SVGShapeElement.prototype.renderInnerContent = function() {
                            var t;
                            this.renderModifiers();
                            var e = this.stylesList.length;
                            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                            for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                        }, SVGShapeElement.prototype.renderShape = function() {
                            var t, e, r = this.animatedContents.length;
                            for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                        }, SVGShapeElement.prototype.destroy = function() {
                            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                        }, LetterProps.prototype.update = function(t, e, r, i, a, s) {
                            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                            var n = !1;
                            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== a && (this.m = a, this._mdf.m = !0, n = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, n = !0), n
                        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t
                        }, TextProperty.prototype.setCurrentData = function(t) {
                            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                        }, TextProperty.prototype.searchProperty = function() {
                            return this.searchKeyframes()
                        }, TextProperty.prototype.searchKeyframes = function() {
                            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                        }, TextProperty.prototype.addEffect = function(t) {
                            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.getValue = function(t) {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                                var e = this.currentData,
                                    r = this.keysIndex;
                                if (this.lock) this.setCurrentData(this.currentData);
                                else {
                                    var i;
                                    this.lock = !0, this._mdf = !1;
                                    var a = this.effectsSequence.length,
                                        s = t || this.data.d.k[this.keysIndex].s;
                                    for (i = 0; i < a; i += 1) s = r !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
                                    e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                            }
                        }, TextProperty.prototype.getKeyframeValue = function() {
                            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
                            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
                        }, TextProperty.prototype.buildFinalText = function(t) {
                            for (var e, r, i = [], a = 0, s = t.length, n = !1; a < s;) e = t.charCodeAt(a), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(a) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(a + 1)) >= 56320 && r <= 57343 ? (n || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(a, 2), n = !1) : i.push(t.substr(a, 2)), a += 1) : i.push(t.charAt(a)) : e > 56319 ? (r = t.charCodeAt(a + 1), FontManager.isZeroWidthJoiner(e, r) ? (n = !0, i[i.length - 1] += t.substr(a, 2), a += 1) : i.push(t.charAt(a))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(a), n = !0) : i.push(t.charAt(a)), a += 1;
                            return i
                        }, TextProperty.prototype.completeTextData = function(t) {
                            t.__complete = !0;
                            var e, r, i, a, s, n, o, h = this.elem.globalData.fontManager,
                                l = this.data,
                                p = [],
                                f = 0,
                                c = l.m.g,
                                m = 0,
                                d = 0,
                                u = 0,
                                y = [],
                                g = 0,
                                v = 0,
                                b = h.getFontByName(t.f),
                                _ = 0,
                                E = getFontProperties(b);
                            t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
                            var P, x = t.tr / 1e3 * t.finalSize;
                            if (t.sz)
                                for (var S, C, A = !0, M = t.sz[0], D = t.sz[1]; A;) {
                                    S = 0, g = 0, r = (C = this.buildFinalText(t.t)).length, x = t.tr / 1e3 * t.finalSize;
                                    var T = -1;
                                    for (e = 0; e < r; e += 1) P = C[e].charCodeAt(0), i = !1, " " === C[e] ? T = e : 13 !== P && 3 !== P || (g = 0, i = !0, S += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(C[e], b.fStyle, b.fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(C[e], t.f, t.finalSize), g + _ > M && " " !== C[e] ? (-1 === T ? r += 1 : e = T, S += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, T === e ? 1 : 0, "\r"), T = -1, g = 0) : (g += _, g += x);
                                    S += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && D < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, r = t.finalText.length, A = !1)
                                }
                            g = -x, _ = 0;
                            var k, w = 0;
                            for (e = 0; e < r; e += 1)
                                if (i = !1, 13 === (P = (k = t.finalText[e]).charCodeAt(0)) || 3 === P ? (w = 0, y.push(g), v = g > v ? g : v, g = -2 * x, a = "", i = !0, u += 1) : a = k, h.chars ? (o = h.getCharData(k, b.fStyle, h.getFontByName(t.f).fFamily), _ = i ? 0 : o.w * t.finalSize / 100) : _ = h.measureText(a, t.f, t.finalSize), " " === k ? w += _ + x : (g += _ + x + w, w = 0), p.push({
                                        l: _,
                                        an: _,
                                        add: m,
                                        n: i,
                                        anIndexes: [],
                                        val: a,
                                        line: u,
                                        animatorJustifyOffset: 0
                                    }), 2 == c) {
                                    if (m += _, "" === a || " " === a || e === r - 1) {
                                        for ("" !== a && " " !== a || (m -= _); d <= e;) p[d].an = m, p[d].ind = f, p[d].extra = _, d += 1;
                                        f += 1, m = 0
                                    }
                                } else if (3 == c) {
                                if (m += _, "" === a || e === r - 1) {
                                    for ("" === a && (m -= _); d <= e;) p[d].an = m, p[d].ind = f, p[d].extra = _, d += 1;
                                    m = 0, f += 1
                                }
                            } else p[f].ind = f, p[f].extra = 0, f += 1;
                            if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                            else switch (t.boxWidth = v, t.j) {
                                case 1:
                                    t.justifyOffset = -t.boxWidth;
                                    break;
                                case 2:
                                    t.justifyOffset = -t.boxWidth / 2;
                                    break;
                                default:
                                    t.justifyOffset = 0
                            }
                            t.lineWidths = y;
                            var I, F, B, R, V = l.a;
                            n = V.length;
                            var L = [];
                            for (s = 0; s < n; s += 1) {
                                for ((I = V[s]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), R = 0, B = I.s.b, e = 0; e < r; e += 1)(F = p[e]).anIndexes[s] = R, (1 == B && "" !== F.val || 2 == B && "" !== F.val && " " !== F.val || 3 == B && (F.n || " " == F.val || e == r - 1) || 4 == B && (F.n || e == r - 1)) && (1 === I.s.rn && L.push(R), R += 1);
                                l.a[s].s.totalChars = R;
                                var O, z = -1;
                                if (1 === I.s.rn)
                                    for (e = 0; e < r; e += 1) z != (F = p[e]).anIndexes[s] && (z = F.anIndexes[s], O = L.splice(Math.floor(Math.random() * L.length), 1)[0]), F.anIndexes[s] = O
                            }
                            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
                        }, TextProperty.prototype.updateDocumentData = function(t, e) {
                            e = void 0 === e ? this.keysIndex : e;
                            var r = this.copyData({}, this.data.d.k[e].s);
                            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.recalculate = function(t) {
                            var e = this.data.d.k[t].s;
                            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                        }, TextProperty.prototype.canResizeFont = function(t) {
                            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        }, TextProperty.prototype.setMinimumFontSize = function(t) {
                            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                        };
                        var TextSelectorProp = function() {
                            var t = Math.max,
                                e = Math.min,
                                r = Math.floor;

                            function i(t, e) {
                                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                    k: 0
                                }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                    v: 100
                                }, this.o = PropertyFactory.getProp(t, e.o || {
                                    k: 0
                                }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                    k: 0
                                }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                    k: 0
                                }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                                    k: 100
                                }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                            }
                            return i.prototype = {
                                getMult: function(i) {
                                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                    var a = 0,
                                        s = 0,
                                        n = 1,
                                        o = 1;
                                    this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                                    var h = BezierFactory.getBezierEasing(a, s, n, o).get,
                                        l = 0,
                                        p = this.finalS,
                                        f = this.finalE,
                                        c = this.data.sh;
                                    if (2 === c) l = h(l = f === p ? i >= f ? 1 : 0 : t(0, e(.5 / (f - p) + (i - p) / (f - p), 1)));
                                    else if (3 === c) l = h(l = f === p ? i >= f ? 0 : 1 : 1 - t(0, e(.5 / (f - p) + (i - p) / (f - p), 1)));
                                    else if (4 === c) f === p ? l = 0 : (l = t(0, e(.5 / (f - p) + (i - p) / (f - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
                                    else if (5 === c) {
                                        if (f === p) l = 0;
                                        else {
                                            var m = f - p,
                                                d = -m / 2 + (i = e(t(0, i + .5 - p), f - p)),
                                                u = m / 2;
                                            l = Math.sqrt(1 - d * d / (u * u))
                                        }
                                        l = h(l)
                                    } else 6 === c ? (f === p ? l = 0 : (i = e(t(0, i + .5 - p), f - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (f - p))) / 2), l = h(l)) : (i >= r(p) && (l = t(0, e(i - p < 0 ? e(f, 1) - (p - i) : f - i, 1))), l = h(l));
                                    if (100 !== this.sm.v) {
                                        var y = .01 * this.sm.v;
                                        0 === y && (y = 1e-8);
                                        var g = .5 - .5 * y;
                                        l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1)
                                    }
                                    return l * this.a.v
                                },
                                getValue: function(t) {
                                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                        r = this.o.v / e,
                                        i = this.s.v / e + r,
                                        a = this.e.v / e + r;
                                    if (i > a) {
                                        var s = i;
                                        i = a, a = s
                                    }
                                    this.finalS = i, this.finalE = a
                                }
                            }, extendPrototype([DynamicPropertyContainer], i), {
                                getTextSelectorProp: function(t, e, r) {
                                    return new i(t, e, r)
                                }
                            }
                        }();

                        function TextAnimatorDataProperty(t, e, r) {
                            var i = {
                                    propType: !1
                                },
                                a = PropertyFactory.getProp,
                                s = e.a;
                            this.a = {
                                r: s.r ? a(t, s.r, 0, degToRads, r) : i,
                                rx: s.rx ? a(t, s.rx, 0, degToRads, r) : i,
                                ry: s.ry ? a(t, s.ry, 0, degToRads, r) : i,
                                sk: s.sk ? a(t, s.sk, 0, degToRads, r) : i,
                                sa: s.sa ? a(t, s.sa, 0, degToRads, r) : i,
                                s: s.s ? a(t, s.s, 1, .01, r) : i,
                                a: s.a ? a(t, s.a, 1, 0, r) : i,
                                o: s.o ? a(t, s.o, 0, .01, r) : i,
                                p: s.p ? a(t, s.p, 1, 0, r) : i,
                                sw: s.sw ? a(t, s.sw, 0, 0, r) : i,
                                sc: s.sc ? a(t, s.sc, 1, 0, r) : i,
                                fc: s.fc ? a(t, s.fc, 1, 0, r) : i,
                                fh: s.fh ? a(t, s.fh, 0, 0, r) : i,
                                fs: s.fs ? a(t, s.fs, 0, .01, r) : i,
                                fb: s.fb ? a(t, s.fb, 0, .01, r) : i,
                                t: s.t ? a(t, s.t, 0, 0, r) : i
                            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
                        }

                        function TextAnimatorProperty(t, e, r) {
                            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                                alignment: {}
                            }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
                        }

                        function ITextElement() {}
                        TextAnimatorProperty.prototype.searchProperties = function() {
                            var t, e, r = this._textData.a.length,
                                i = PropertyFactory.getProp;
                            for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                                a: i(this._elem, this._textData.p.a, 0, 0, this),
                                f: i(this._elem, this._textData.p.f, 0, 0, this),
                                l: i(this._elem, this._textData.p.l, 0, 0, this),
                                r: i(this._elem, this._textData.p.r, 0, 0, this),
                                p: i(this._elem, this._textData.p.p, 0, 0, this),
                                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
                        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                                this._isFirstFrame = !1;
                                var r, i, a, s, n, o, h, l, p, f, c, m, d, u, y, g, v, b, _, E = this._moreOptions.alignment.v,
                                    P = this._animatorsData,
                                    x = this._textData,
                                    S = this.mHelper,
                                    C = this._renderType,
                                    A = this.renderedLetters.length,
                                    M = t.l;
                                if (this._hasMaskedPath) {
                                    if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                        var D, T = _.v;
                                        for (this._pathData.r.v && (T = T.reverse()), n = {
                                                tLength: 0,
                                                segments: []
                                            }, s = T._length - 1, g = 0, a = 0; a < s; a += 1) D = bez.buildBezierData(T.v[a], T.v[a + 1], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[a + 1][0] - T.v[a + 1][0], T.i[a + 1][1] - T.v[a + 1][1]]), n.tLength += D.segmentLength, n.segments.push(D), g += D.segmentLength;
                                        a = s, _.v.c && (D = bez.buildBezierData(T.v[a], T.v[0], [T.o[a][0] - T.v[a][0], T.o[a][1] - T.v[a][1]], [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]]), n.tLength += D.segmentLength, n.segments.push(D), g += D.segmentLength), this._pathData.pi = n
                                    }
                                    if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, f = 1, l = 0, p = !0, u = n.segments, o < 0 && _.v.c)
                                        for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (d = u[c = u.length - 1].points).length - 1; o < 0;) o += d[f].partialLength, (f -= 1) < 0 && (f = (d = u[c -= 1].points).length - 1);
                                    m = (d = u[c].points)[f - 1], y = (h = d[f]).partialLength
                                }
                                s = M.length, r = 0, i = 0;
                                var k, w, I, F, B, R = 1.2 * t.finalSize * .714,
                                    V = !0;
                                I = P.length;
                                var L, O, z, G, N, H, W, j, q, K, U, $, Y = -1,
                                    X = o,
                                    Z = c,
                                    J = f,
                                    Q = -1,
                                    tt = "",
                                    et = this.defaultPropsArray;
                                if (2 === t.j || 1 === t.j) {
                                    var rt = 0,
                                        it = 0,
                                        at = 2 === t.j ? -.5 : -1,
                                        st = 0,
                                        nt = !0;
                                    for (a = 0; a < s; a += 1)
                                        if (M[a].n) {
                                            for (rt && (rt += it); st < a;) M[st].animatorJustifyOffset = rt, st += 1;
                                            rt = 0, nt = !0
                                        } else {
                                            for (w = 0; w < I; w += 1)(k = P[w].a).t.propType && (nt && 2 === t.j && (it += k.t.v * at), (B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars)).length ? rt += k.t.v * B[0] * at : rt += k.t.v * B * at);
                                            nt = !1
                                        }
                                    for (rt && (rt += it); st < a;) M[st].animatorJustifyOffset = rt, st += 1
                                }
                                for (a = 0; a < s; a += 1) {
                                    if (S.reset(), G = 1, M[a].n) r = 0, i += t.yOffset, i += V ? 1 : 0, o = X, V = !1, this._hasMaskedPath && (f = J, m = (d = u[c = Z].points)[f - 1], y = (h = d[f]).partialLength, l = 0), tt = "", U = "", q = "", $ = "", et = this.defaultPropsArray;
                                    else {
                                        if (this._hasMaskedPath) {
                                            if (Q !== M[a].line) {
                                                switch (t.j) {
                                                    case 1:
                                                        o += g - t.lineWidths[M[a].line];
                                                        break;
                                                    case 2:
                                                        o += (g - t.lineWidths[M[a].line]) / 2
                                                }
                                                Q = M[a].line
                                            }
                                            Y !== M[a].ind && (M[Y] && (o += M[Y].extra), o += M[a].an / 2, Y = M[a].ind), o += E[0] * M[a].an * .005;
                                            var ot = 0;
                                            for (w = 0; w < I; w += 1)(k = P[w].a).p.propType && ((B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars)).length ? ot += k.p.v[0] * B[0] : ot += k.p.v[0] * B), k.a.propType && ((B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars)).length ? ot += k.a.v[0] * B[0] : ot += k.a.v[0] * B);
                                            for (p = !0, this._pathData.a.v && (o = .5 * M[0].an + (g - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * Y / (s - 1), o += this._pathData.f.v); p;) l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, O = m.point[0] + (h.point[0] - m.point[0]) * v, z = m.point[1] + (h.point[1] - m.point[1]) * v, S.translate(-E[0] * M[a].an * .005, -E[1] * R * .01), p = !1) : d && (l += h.partialLength, (f += 1) >= d.length && (f = 0, u[c += 1] ? d = u[c].points : _.v.c ? (f = 0, d = u[c = 0].points) : (l -= h.partialLength, d = null)), d && (m = h, y = (h = d[f]).partialLength));
                                            L = M[a].an / 2 - M[a].add, S.translate(-L, 0, 0)
                                        } else L = M[a].an / 2 - M[a].add, S.translate(-L, 0, 0), S.translate(-E[0] * M[a].an * .005, -E[1] * R * .01, 0);
                                        for (w = 0; w < I; w += 1)(k = P[w].a).t.propType && (B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += k.t.v * B[0] : o += k.t.v * B : B.length ? r += k.t.v * B[0] : r += k.t.v * B));
                                        for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (W = [t.fc[0], t.fc[1], t.fc[2]]), w = 0; w < I; w += 1)(k = P[w].a).a.propType && ((B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars)).length ? S.translate(-k.a.v[0] * B[0], -k.a.v[1] * B[1], k.a.v[2] * B[2]) : S.translate(-k.a.v[0] * B, -k.a.v[1] * B, k.a.v[2] * B));
                                        for (w = 0; w < I; w += 1)(k = P[w].a).s.propType && ((B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars)).length ? S.scale(1 + (k.s.v[0] - 1) * B[0], 1 + (k.s.v[1] - 1) * B[1], 1) : S.scale(1 + (k.s.v[0] - 1) * B, 1 + (k.s.v[1] - 1) * B, 1));
                                        for (w = 0; w < I; w += 1) {
                                            if (k = P[w].a, B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars), k.sk.propType && (B.length ? S.skewFromAxis(-k.sk.v * B[0], k.sa.v * B[1]) : S.skewFromAxis(-k.sk.v * B, k.sa.v * B)), k.r.propType && (B.length ? S.rotateZ(-k.r.v * B[2]) : S.rotateZ(-k.r.v * B)), k.ry.propType && (B.length ? S.rotateY(k.ry.v * B[1]) : S.rotateY(k.ry.v * B)), k.rx.propType && (B.length ? S.rotateX(k.rx.v * B[0]) : S.rotateX(k.rx.v * B)), k.o.propType && (B.length ? G += (k.o.v * B[0] - G) * B[0] : G += (k.o.v * B - G) * B), t.strokeWidthAnim && k.sw.propType && (B.length ? H += k.sw.v * B[0] : H += k.sw.v * B), t.strokeColorAnim && k.sc.propType)
                                                for (j = 0; j < 3; j += 1) B.length ? N[j] += (k.sc.v[j] - N[j]) * B[0] : N[j] += (k.sc.v[j] - N[j]) * B;
                                            if (t.fillColorAnim && t.fc) {
                                                if (k.fc.propType)
                                                    for (j = 0; j < 3; j += 1) B.length ? W[j] += (k.fc.v[j] - W[j]) * B[0] : W[j] += (k.fc.v[j] - W[j]) * B;
                                                k.fh.propType && (W = B.length ? addHueToRGB(W, k.fh.v * B[0]) : addHueToRGB(W, k.fh.v * B)), k.fs.propType && (W = B.length ? addSaturationToRGB(W, k.fs.v * B[0]) : addSaturationToRGB(W, k.fs.v * B)), k.fb.propType && (W = B.length ? addBrightnessToRGB(W, k.fb.v * B[0]) : addBrightnessToRGB(W, k.fb.v * B))
                                            }
                                        }
                                        for (w = 0; w < I; w += 1)(k = P[w].a).p.propType && (B = P[w].s.getMult(M[a].anIndexes[w], x.a[w].s.totalChars), this._hasMaskedPath ? B.length ? S.translate(0, k.p.v[1] * B[0], -k.p.v[2] * B[1]) : S.translate(0, k.p.v[1] * B, -k.p.v[2] * B) : B.length ? S.translate(k.p.v[0] * B[0], k.p.v[1] * B[1], -k.p.v[2] * B[2]) : S.translate(k.p.v[0] * B, k.p.v[1] * B, -k.p.v[2] * B));
                                        if (t.strokeWidthAnim && (q = H < 0 ? 0 : H), t.strokeColorAnim && (K = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * W[0]) + "," + Math.round(255 * W[1]) + "," + Math.round(255 * W[2]) + ")"), this._hasMaskedPath) {
                                            if (S.translate(0, -t.ls), S.translate(0, E[1] * R * .01 + i, 0), this._pathData.p.v) {
                                                b = (h.point[1] - m.point[1]) / (h.point[0] - m.point[0]);
                                                var ht = 180 * Math.atan(b) / Math.PI;
                                                h.point[0] < m.point[0] && (ht += 180), S.rotate(-ht * Math.PI / 180)
                                            }
                                            S.translate(O, z, 0), o -= E[0] * M[a].an * .005, M[a + 1] && Y !== M[a + 1].ind && (o += M[a].an / 2, o += .001 * t.tr * t.finalSize)
                                        } else {
                                            switch (S.translate(r, i, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                                case 1:
                                                    S.translate(M[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[a].line]), 0, 0);
                                                    break;
                                                case 2:
                                                    S.translate(M[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[a].line]) / 2, 0, 0)
                                            }
                                            S.translate(0, -t.ls), S.translate(L, 0, 0), S.translate(E[0] * M[a].an * .005, E[1] * R * .01, 0), r += M[a].l + .001 * t.tr * t.finalSize
                                        }
                                        "html" === C ? tt = S.toCSS() : "svg" === C ? tt = S.to2dCSS() : et = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], $ = G
                                    }
                                    A <= a ? (F = new LetterProps($, q, K, U, tt, et), this.renderedLetters.push(F), A += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[a], this.lettersChangedFlag = F.update($, q, K, U, tt, et) || this.lettersChangedFlag)
                                }
                            }
                        }, TextAnimatorProperty.prototype.getValue = function() {
                            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
                            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                        }, ITextElement.prototype.prepareFrame = function(t) {
                            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                        }, ITextElement.prototype.createPathShape = function(t, e) {
                            var r, i, a = e.length,
                                s = "";
                            for (r = 0; r < a; r += 1) "sh" === e[r].ty && (i = e[r].ks.k, s += buildShapeString(i, i.i.length, !0, t));
                            return s
                        }, ITextElement.prototype.updateDocumentData = function(t, e) {
                            this.textProperty.updateDocumentData(t, e)
                        }, ITextElement.prototype.canResizeFont = function(t) {
                            this.textProperty.canResizeFont(t)
                        }, ITextElement.prototype.setMinimumFontSize = function(t) {
                            this.textProperty.setMinimumFontSize(t)
                        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, a) {
                            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                                case 1:
                                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                                    break;
                                case 2:
                                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
                            }
                            e.translate(i, a, 0)
                        }, ITextElement.prototype.buildColor = function(t) {
                            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
                        var emptyShapeData = {
                            shapes: []
                        };

                        function SVGTextLottieElement(t, e, r) {
                            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
                        }

                        function ISolidElement(t, e, r) {
                            this.initElement(t, e, r)
                        }

                        function NullElement(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
                        }

                        function SVGRendererBase() {}

                        function ICompElement() {}

                        function SVGCompElement(t, e, r) {
                            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function SVGRenderer(t, e) {
                            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                            var r = "";
                            if (e && e.title) {
                                var i = createNS("title"),
                                    a = createElementID();
                                i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), r += a
                            }
                            if (e && e.description) {
                                var s = createNS("desc"),
                                    n = createElementID();
                                s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), r += " " + n
                            }
                            r && this.svgElement.setAttribute("aria-labelledby", r);
                            var o = createNS("defs");
                            this.svgElement.appendChild(o);
                            var h = createNS("g");
                            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                contentVisibility: e && e.contentVisibility || "visible",
                                progressiveLoad: e && e.progressiveLoad || !1,
                                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                                viewBoxOnly: e && e.viewBoxOnly || !1,
                                viewBoxSize: e && e.viewBoxSize || !1,
                                className: e && e.className || "",
                                id: e && e.id || "",
                                focusable: e && e.focusable,
                                filterSize: {
                                    width: e && e.filterSize && e.filterSize.width || "100%",
                                    height: e && e.filterSize && e.filterSize.height || "100%",
                                    x: e && e.filterSize && e.filterSize.x || "0%",
                                    y: e && e.filterSize && e.filterSize.y || "0%"
                                },
                                width: e && e.width,
                                height: e && e.height,
                                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                defs: o,
                                renderConfig: this.renderConfig
                            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                        }

                        function CVContextData() {
                            var t;
                            for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                            this._length = 15
                        }

                        function ShapeTransformManager() {
                            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                        }
                        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                            for (var e = 0, r = t.length, i = [], a = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
                            return i.push(a), i
                        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
                            if (t.shapes && t.shapes.length) {
                                var r = t.shapes[0];
                                if (r.it) {
                                    var i = r.it[r.it.length - 1];
                                    i.s && (i.s.k[0] = e, i.s.k[1] = e)
                                }
                            }
                            return t
                        }, SVGTextLottieElement.prototype.buildNewText = function() {
                            var t, e;
                            this.addDynamicProperty(this);
                            var r = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                            var i = this.globalData.fontManager.getFontByName(r.f);
                            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                            else {
                                this.layerElement.setAttribute("font-family", i.fFamily);
                                var a = r.fWeight,
                                    s = r.fStyle;
                                this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", a)
                            }
                            this.layerElement.setAttribute("aria-label", r.t);
                            var n, o = r.l || [],
                                h = !!this.globalData.fontManager.chars;
                            e = o.length;
                            var l = this.mHelper,
                                p = this.data.singleShape,
                                f = 0,
                                c = 0,
                                m = !0,
                                d = .001 * r.tr * r.finalSize;
                            if (!p || h || r.sz) {
                                var u, y = this.textSpans.length;
                                for (t = 0; t < e; t += 1) {
                                    if (this.textSpans[t] || (this.textSpans[t] = {
                                            span: null,
                                            childSpan: null,
                                            glyph: null
                                        }), !h || !p || 0 === t) {
                                        if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                                            if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                                                var g = createNS("g");
                                                n.appendChild(g), this.textSpans[t].childSpan = g
                                            }
                                            this.textSpans[t].span = n, this.layerElement.appendChild(n)
                                        }
                                        n.style.display = "inherit"
                                    }
                                    if (l.reset(), p && (o[t].n && (f = -d, c += r.yOffset, c += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, l, o[t].line, f, c), f += o[t].l || 0, f += d), h) {
                                        var v;
                                        if (1 === (u = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) v = new SVGCompElement(u.data, this.globalData, this);
                                        else {
                                            var b = emptyShapeData;
                                            u.data && u.data.shapes && (b = this.buildShapeData(u.data, r.finalSize)), v = new SVGShapeElement(b, this.globalData, this)
                                        }
                                        if (this.textSpans[t].glyph) {
                                            var _ = this.textSpans[t].glyph;
                                            this.textSpans[t].childSpan.removeChild(_.layerElement), _.destroy()
                                        }
                                        this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                                    } else p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                                }
                                p && n && n.setAttribute("d", "")
                            } else {
                                var E = this.textContainer,
                                    P = "start";
                                switch (r.j) {
                                    case 1:
                                        P = "end";
                                        break;
                                    case 2:
                                        P = "middle";
                                        break;
                                    default:
                                        P = "start"
                                }
                                E.setAttribute("text-anchor", P), E.setAttribute("letter-spacing", d);
                                var x = this.buildTextContents(r.finalText);
                                for (e = x.length, c = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t].span || createNS("tspan")).textContent = x[t], n.setAttribute("x", 0), n.setAttribute("y", c), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
                                    span: null,
                                    glyph: null
                                }), this.textSpans[t].span = n, c += r.finalLineHeight;
                                this.layerElement.appendChild(E)
                            }
                            for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
                            this._sizeChanged = !0
                        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                                this._sizeChanged = !1;
                                var t = this.layerElement.getBBox();
                                this.bbox = {
                                    top: t.y,
                                    left: t.x,
                                    width: t.width,
                                    height: t.height
                                }
                            }
                            return this.bbox
                        }, SVGTextLottieElement.prototype.getValue = function() {
                            var t, e, r = this.textSpans.length;
                            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
                        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                            if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                                var t, e;
                                this._sizeChanged = !0;
                                var r, i, a, s = this.textAnimator.renderedLetters,
                                    n = this.textProperty.currentData.l;
                                for (e = n.length, t = 0; t < e; t += 1) n[t].n || (r = s[t], i = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
                            }
                        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                            var t = createNS("rect");
                            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                        }, NullElement.prototype.prepareFrame = function(t) {
                            this.prepareProperties(t, !0)
                        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                            return null
                        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
                            return new NullElement(t, this.globalData, this)
                        }, SVGRendererBase.prototype.createShape = function(t) {
                            return new SVGShapeElement(t, this.globalData, this)
                        }, SVGRendererBase.prototype.createText = function(t) {
                            return new SVGTextLottieElement(t, this.globalData, this)
                        }, SVGRendererBase.prototype.createImage = function(t) {
                            return new IImageElement(t, this.globalData, this)
                        }, SVGRendererBase.prototype.createSolid = function(t) {
                            return new ISolidElement(t, this.globalData, this)
                        }, SVGRendererBase.prototype.configAnimation = function(t) {
                            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                            var e = this.globalData.defs;
                            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                            var r = createNS("clipPath"),
                                i = createNS("rect");
                            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                            var a = createElementID();
                            r.setAttribute("id", a), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                        }, SVGRendererBase.prototype.destroy = function() {
                            var t;
                            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                            var e = this.layers ? this.layers.length : 0;
                            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
                            var e = 0,
                                r = this.layers.length;
                            for (e = 0; e < r; e += 1)
                                if (this.layers[e].ind === t) return e;
                            return -1
                        }, SVGRendererBase.prototype.buildItem = function(t) {
                            var e = this.elements;
                            if (!e[t] && 99 !== this.layers[t].ty) {
                                e[t] = !0;
                                var r = this.createItem(this.layers[t]);
                                if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                                    if (-1 === i) return;
                                    if (this.elements[i] && !0 !== this.elements[i]) {
                                        var a = e[i].getMatte(this.layers[t].tt);
                                        r.setMatte(a)
                                    } else this.buildItem(i), this.addPendingElement(r)
                                }
                            }
                        }, SVGRendererBase.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) {
                                var t = this.pendingElements.pop();
                                if (t.checkParenting(), t.data.tt)
                                    for (var e = 0, r = this.elements.length; e < r;) {
                                        if (this.elements[e] === t) {
                                            var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                                a = this.elements[i].getMatte(this.layers[e].tt);
                                            t.setMatte(a);
                                            break
                                        }
                                        e += 1
                                    }
                            }
                        }, SVGRendererBase.prototype.renderFrame = function(t) {
                            if (this.renderedFrame !== t && !this.destroyed) {
                                var e;
                                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                                var r = this.layers.length;
                                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                                if (this.globalData._mdf)
                                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                            }
                        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
                            var r = t.getBaseElement();
                            if (r) {
                                for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                                i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
                            }
                        }, SVGRendererBase.prototype.hide = function() {
                            this.layerElement.style.display = "none"
                        }, SVGRendererBase.prototype.show = function() {
                            this.layerElement.style.display = "block"
                        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                        }, ICompElement.prototype.prepareFrame = function(t) {
                            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                                else {
                                    var e = this.tm.v;
                                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                                }
                                var r, i = this.elements.length;
                                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                            }
                        }, ICompElement.prototype.renderInnerContent = function() {
                            var t, e = this.layers.length;
                            for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                        }, ICompElement.prototype.setElements = function(t) {
                            this.elements = t
                        }, ICompElement.prototype.getElements = function() {
                            return this.elements
                        }, ICompElement.prototype.destroyElements = function() {
                            var t, e = this.layers.length;
                            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                        }, ICompElement.prototype.destroy = function() {
                            this.destroyElements(), this.destroyBaseElement()
                        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
                            return new SVGCompElement(t, this.globalData, this)
                        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
                            return new SVGCompElement(t, this.globalData, this)
                        }, CVContextData.prototype.duplicate = function() {
                            var t = 2 * this._length,
                                e = this.savedOp;
                            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                            var r = 0;
                            for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
                            this._length = t
                        }, CVContextData.prototype.reset = function() {
                            this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                        }, CVContextData.prototype.popTransform = function() {
                            var t, e = this.saved[this.cArrPos],
                                r = this.cTr.props;
                            for (t = 0; t < 16; t += 1) r[t] = e[t];
                            return e
                        }, CVContextData.prototype.popOpacity = function() {
                            var t = this.savedOp[this.cArrPos];
                            return this.cO = t, t
                        }, CVContextData.prototype.pop = function() {
                            return this.cArrPos -= 1, {
                                transform: this.popTransform(),
                                opacity: this.popOpacity()
                            }
                        }, CVContextData.prototype.push = function() {
                            var t, e = this.cTr.props;
                            this._length <= this.cArrPos && this.duplicate();
                            var r = this.saved[this.cArrPos];
                            for (t = 0; t < 16; t += 1) r[t] = e[t];
                            this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
                        }, CVContextData.prototype.getTransform = function() {
                            return this.cTr
                        }, CVContextData.prototype.getOpacity = function() {
                            return this.cO
                        }, CVContextData.prototype.setOpacity = function(t) {
                            this.cO = t
                        }, ShapeTransformManager.prototype = {
                            addTransformSequence: function(t) {
                                var e, r = t.length,
                                    i = "_";
                                for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
                                var a = this.sequences[i];
                                return a || (a = {
                                    transforms: [].concat(t),
                                    finalTransform: new Matrix,
                                    _mdf: !1
                                }, this.sequences[i] = a, this.sequenceList.push(a)), a
                            },
                            processSequence: function(t, e) {
                                for (var r, i = 0, a = t.transforms.length, s = e; i < a && !e;) {
                                    if (t.transforms[i].transform.mProps._mdf) {
                                        s = !0;
                                        break
                                    }
                                    i += 1
                                }
                                if (s)
                                    for (t.finalTransform.reset(), i = a - 1; i >= 0; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                                t._mdf = s
                            },
                            processSequences: function(t) {
                                var e, r = this.sequenceList.length;
                                for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
                            },
                            getNewKey: function() {
                                return this.transform_key_count += 1, "_" + this.transform_key_count
                            }
                        };
                        var lumaLoader = function() {
                            var t = "__lottie_element_luma_buffer",
                                e = null,
                                r = null,
                                i = null;

                            function a() {
                                var a, s, n;
                                e || (a = createNS("svg"), s = createNS("filter"), n = createNS("feColorMatrix"), s.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(n), a.appendChild(s), a.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), i = a, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
                            }
                            return {
                                load: a,
                                get: function(i) {
                                    return e || a(), e.width = i.width, e.height = i.height, r.filter = "url(#" + t + ")", e
                                }
                            }
                        };

                        function createCanvas(t, e) {
                            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
                            var r = createTag("canvas");
                            return r.width = t, r.height = e, r
                        }
                        var assetLoader = {
                            loadLumaCanvas: lumaLoader.load,
                            getLumaCanvas: lumaLoader.get,
                            createCanvas: createCanvas
                        };

                        function CVEffects() {}

                        function CVMaskElement(t, e) {
                            var r;
                            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                            var i = this.masksProperties.length,
                                a = !1;
                            for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (a = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                            this.hasMasks = a, a && this.element.addRenderableComponent(this)
                        }

                        function CVBaseElement() {}
                        CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
                            if (this.hasMasks) {
                                var t, e, r, i, a = this.element.finalTransform.mat,
                                    s = this.element.canvasContext,
                                    n = this.masksProperties.length;
                                for (s.beginPath(), t = 0; t < n; t += 1)
                                    if ("n" !== this.masksProperties[t].mode) {
                                        var o;
                                        this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = a.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                                        var h = i._length;
                                        for (o = 1; o < h; o += 1) r = a.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                                        r = a.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                                    }
                                this.element.globalData.renderer.save(!0), s.clip()
                            }
                        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                            this.element = null
                        };
                        var operationsMap = {
                            1: "source-in",
                            2: "source-out",
                            3: "source-in",
                            4: "source-out"
                        };

                        function CVShapeData(t, e, r, i) {
                            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                            var a, s = 4;
                            "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                            var n, o = r.length;
                            for (a = 0; a < o; a += 1) r[a].closed || (n = {
                                transforms: i.addTransformSequence(r[a].transforms),
                                trNodes: []
                            }, this.styledShapes.push(n), r[a].elements.push(n))
                        }

                        function CVShapeElement(t, e, r) {
                            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
                        }

                        function CVTextElement(t, e, r) {
                            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                                fill: "rgba(0,0,0,0)",
                                stroke: "rgba(0,0,0,0)",
                                sWidth: 0,
                                fValue: ""
                            }, this.initElement(t, e, r)
                        }

                        function CVImageElement(t, e, r) {
                            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
                        }

                        function CVSolidElement(t, e, r) {
                            this.initElement(t, e, r)
                        }

                        function CanvasRendererBase(t, e) {
                            this.animationItem = t, this.renderConfig = {
                                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                                context: e && e.context || null,
                                progressiveLoad: e && e.progressiveLoad || !1,
                                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                contentVisibility: e && e.contentVisibility || "visible",
                                className: e && e.className || "",
                                id: e && e.id || ""
                            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                                frameNum: -1,
                                _mdf: !1,
                                renderConfig: this.renderConfig,
                                currentGlobalAlpha: -1
                            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                        }

                        function CVCompElement(t, e, r) {
                            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function CanvasRenderer(t, e) {
                            this.animationItem = t, this.renderConfig = {
                                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                                context: e && e.context || null,
                                progressiveLoad: e && e.progressiveLoad || !1,
                                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                contentVisibility: e && e.contentVisibility || "visible",
                                className: e && e.className || "",
                                id: e && e.id || "",
                                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                                frameNum: -1,
                                _mdf: !1,
                                renderConfig: this.renderConfig,
                                currentGlobalAlpha: -1
                            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                        }

                        function HBaseElement() {}

                        function HSolidElement(t, e, r) {
                            this.initElement(t, e, r)
                        }

                        function HShapeElement(t, e, r) {
                            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                                x: 999999,
                                y: -999999,
                                h: 0,
                                w: 0
                            }
                        }

                        function HTextElement(t, e, r) {
                            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                                x: 999999,
                                y: -999999,
                                h: 0,
                                w: 0
                            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
                        }

                        function HCameraElement(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
                            var i = PropertyFactory.getProp;
                            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                                var a, s = t.ks.or.k.length;
                                for (a = 0; a < s; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
                            }
                            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                                mProp: this
                            }
                        }

                        function HImageElement(t, e, r) {
                            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
                        }

                        function HybridRendererBase(t, e) {
                            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                                className: e && e.className || "",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                                filterSize: {
                                    width: e && e.filterSize && e.filterSize.width || "400%",
                                    height: e && e.filterSize && e.filterSize.height || "400%",
                                    x: e && e.filterSize && e.filterSize.x || "-100%",
                                    y: e && e.filterSize && e.filterSize.y || "-100%"
                                }
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                renderConfig: this.renderConfig
                            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                        }

                        function HCompElement(t, e, r) {
                            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                                _placeholder: !0
                            }
                        }

                        function HybridRenderer(t, e) {
                            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                                className: e && e.className || "",
                                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                                filterSize: {
                                    width: e && e.filterSize && e.filterSize.width || "400%",
                                    height: e && e.filterSize && e.filterSize.height || "400%",
                                    x: e && e.filterSize && e.filterSize.x || "-100%",
                                    y: e && e.filterSize && e.filterSize.y || "-100%"
                                },
                                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
                            }, this.globalData = {
                                _mdf: !1,
                                frameNum: -1,
                                renderConfig: this.renderConfig
                            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                        }
                        CVBaseElement.prototype = {
                            createElements: function() {},
                            initRendererElement: function() {},
                            createContainerElements: function() {
                                if (this.data.tt >= 1) {
                                    this.buffers = [];
                                    var t = this.globalData.canvasContext,
                                        e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                                    this.buffers.push(e);
                                    var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                                    this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                                }
                                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
                            },
                            createContent: function() {},
                            setBlendMode: function() {
                                var t = this.globalData;
                                if (t.blendMode !== this.data.bm) {
                                    t.blendMode = this.data.bm;
                                    var e = getBlendMode(this.data.bm);
                                    t.canvasContext.globalCompositeOperation = e
                                }
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new CVMaskElement(this.data, this)
                            },
                            hideElement: function() {
                                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                            },
                            showElement: function() {
                                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                            },
                            clearCanvas: function(t) {
                                t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                            },
                            prepareLayer: function() {
                                if (this.data.tt >= 1) {
                                    var t = this.buffers[0].getContext("2d");
                                    this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                                }
                            },
                            exitLayer: function() {
                                if (this.data.tt >= 1) {
                                    var t = this.buffers[1],
                                        e = t.getContext("2d");
                                    if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                        var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                        r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
                                    }
                                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                                }
                            },
                            renderFrame: function(t) {
                                if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
                                    this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                                    var e = 0 === this.data.ty;
                                    this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                                }
                            },
                            destroy: function() {
                                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                            },
                            mHelper: new Matrix
                        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                            opacity: 1,
                            _opMdf: !1
                        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                            var r = {
                                    data: t,
                                    type: t.ty,
                                    preTransforms: this.transformsManager.addTransformSequence(e),
                                    transforms: [],
                                    elements: [],
                                    closed: !0 === t.hd
                                },
                                i = {};
                            if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                                    k: 0
                                }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                                    k: 0
                                }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                                if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                                    var a = new DashProperty(this, t.d, "canvas", this);
                                    i.d = a, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                                }
                            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
                            return this.stylesList.push(r), i.style = r, i
                        }, CVShapeElement.prototype.createGroupElement = function() {
                            return {
                                it: [],
                                prevViewData: []
                            }
                        }, CVShapeElement.prototype.createTransformElement = function(t) {
                            return {
                                transform: {
                                    opacity: 1,
                                    _opMdf: !1,
                                    key: this.transformsManager.getNewKey(),
                                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                                }
                            }
                        }, CVShapeElement.prototype.createShapeElement = function(t) {
                            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                            return this.shapes.push(e), this.addShapeToModifiers(e), e
                        }, CVShapeElement.prototype.reloadShapes = function() {
                            var t;
                            this._isFirstFrame = !0;
                            var e = this.itemsData.length;
                            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                            var e, r = this.stylesList.length;
                            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                            var t, e = this.stylesList.length;
                            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                        }, CVShapeElement.prototype.closeStyles = function(t) {
                            var e, r = t.length;
                            for (e = 0; e < r; e += 1) t[e].closed = !0
                        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, a) {
                            var s, n, o, h, l, p, f = t.length - 1,
                                c = [],
                                m = [],
                                d = [].concat(a);
                            for (s = f; s >= 0; s -= 1) {
                                if ((h = this.searchProcessedElement(t[s])) ? e[s] = r[h - 1] : t[s]._shouldRender = i, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) h ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], d), c.push(e[s].style);
                                else if ("gr" === t[s].ty) {
                                    if (h)
                                        for (o = e[s].it.length, n = 0; n < o; n += 1) e[s].prevViewData[n] = e[s].it[n];
                                    else e[s] = this.createGroupElement(t[s]);
                                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, d)
                                } else "tr" === t[s].ty ? (h || (p = this.createTransformElement(t[s]), e[s] = p), d.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? h || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty || "zz" === t[s].ty || "op" === t[s].ty ? (h ? (l = e[s]).closed = !1 : ((l = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = l, this.shapeModifiers.push(l)), m.push(l)) : "rp" === t[s].ty && (h ? (l = e[s]).closed = !0 : (l = ShapeModifiers.getModifier(t[s].ty), e[s] = l, l.init(this, t, s, e), this.shapeModifiers.push(l), i = !1), m.push(l));
                                this.addProcessedElement(t[s], s + 1)
                            }
                            for (this.removeTransformFromStyleList(), this.closeStyles(c), f = m.length, s = 0; s < f; s += 1) m[s].closed = !0
                        }, CVShapeElement.prototype.renderInnerContent = function() {
                            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                        }, CVShapeElement.prototype.drawLayer = function() {
                            var t, e, r, i, a, s, n, o, h, l = this.stylesList.length,
                                p = this.globalData.renderer,
                                f = this.globalData.canvasContext;
                            for (t = 0; t < l; t += 1)
                                if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                                    for (p.save(), s = h.elements, "st" === o || "gs" === o ? (f.strokeStyle = "st" === o ? h.co : h.grd, f.lineWidth = h.wi, f.lineCap = h.lc, f.lineJoin = h.lj, f.miterLimit = h.ml || 0) : f.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = s.length, e = 0; e < r; e += 1) {
                                        for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), a = (n = s[e].trNodes).length, i = 0; i < a; i += 1) "m" === n[i].t ? f.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? f.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : f.closePath();
                                        "st" !== o && "gs" !== o || (f.stroke(), h.da && f.setLineDash(this.dashResetter))
                                    }
                                    "st" !== o && "gs" !== o && f.fill(h.r), p.restore()
                                }
                        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
                            var a, s;
                            for (s = t, a = e.length - 1; a >= 0; a -= 1) "tr" === e[a].ty ? (s = r[a].transform, this.renderShapeTransform(t, s)) : "sh" === e[a].ty || "el" === e[a].ty || "rc" === e[a].ty || "sr" === e[a].ty ? this.renderPath(e[a], r[a]) : "fl" === e[a].ty ? this.renderFill(e[a], r[a], s) : "st" === e[a].ty ? this.renderStroke(e[a], r[a], s) : "gf" === e[a].ty || "gs" === e[a].ty ? this.renderGradientFill(e[a], r[a], s) : "gr" === e[a].ty ? this.renderShape(s, e[a].it, r[a].it) : e[a].ty;
                            i && this.drawLayer()
                        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                                var r, i, a, s = t.trNodes,
                                    n = e.paths,
                                    o = n._length;
                                s.length = 0;
                                var h = t.transforms.finalTransform;
                                for (a = 0; a < o; a += 1) {
                                    var l = n.shapes[a];
                                    if (l && l.v) {
                                        for (i = l._length, r = 1; r < i; r += 1) 1 === r && s.push({
                                            t: "m",
                                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                        }), s.push({
                                            t: "c",
                                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                                        });
                                        1 === i && s.push({
                                            t: "m",
                                            p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                        }), l.c && i && (s.push({
                                            t: "c",
                                            pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                                        }), s.push({
                                            t: "z"
                                        }))
                                    }
                                }
                                t.trNodes = s
                            }
                        }, CVShapeElement.prototype.renderPath = function(t, e) {
                            if (!0 !== t.hd && t._shouldRender) {
                                var r, i = e.styledShapes.length;
                                for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
                            }
                        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
                            var i = e.style;
                            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
                        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                            var i, a = e.style;
                            if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                                var s, n = this.globalData.canvasContext,
                                    o = e.s.v,
                                    h = e.e.v;
                                if (1 === t.t) i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                                else {
                                    var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                                        p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                                        f = e.h.v;
                                    f >= 1 ? f = .99 : f <= -1 && (f = -.99);
                                    var c = l * f,
                                        m = Math.cos(p + e.a.v) * c + o[0],
                                        d = Math.sin(p + e.a.v) * c + o[1];
                                    i = n.createRadialGradient(m, d, 0, o[0], o[1], l)
                                }
                                var u = t.g.p,
                                    y = e.g.c,
                                    g = 1;
                                for (s = 0; s < u; s += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * s + 1]), i.addColorStop(y[4 * s] / 100, "rgba(" + y[4 * s + 1] + "," + y[4 * s + 2] + "," + y[4 * s + 3] + "," + g + ")");
                                a.grd = i
                            }
                            a.coOp = e.o.v * r.opacity
                        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
                            var i = e.style,
                                a = e.d;
                            a && (a._mdf || this._isFirstFrame) && (i.da = a.dashArray, i.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                        }, CVShapeElement.prototype.destroy = function() {
                            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                            var t = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                            var e = !1;
                            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                            var r = !1;
                            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                            var i, a, s, n, o, h, l, p, f, c, m, d, u = this.globalData.fontManager.getFontByName(t.f),
                                y = t.l,
                                g = this.mHelper;
                            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
                            var v = this.data.singleShape,
                                b = .001 * t.tr * t.finalSize,
                                _ = 0,
                                E = 0,
                                P = !0,
                                x = 0;
                            for (i = 0; i < a; i += 1) {
                                n = (s = this.globalData.fontManager.getCharData(t.finalText[i], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, g.reset(), v && y[i].n && (_ = -b, E += t.yOffset, E += P ? 1 : 0, P = !1), f = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, _, E), m = createSizedArray(f - 1);
                                var S = 0;
                                for (p = 0; p < f; p += 1)
                                    if ("sh" === l[p].ty) {
                                        for (h = l[p].ks.k.i.length, c = l[p].ks.k, d = [], o = 1; o < h; o += 1) 1 === o && d.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[o][0], c.i[o][1], 0), g.applyToY(c.i[o][0], c.i[o][1], 0), g.applyToX(c.v[o][0], c.v[o][1], 0), g.applyToY(c.v[o][0], c.v[o][1], 0));
                                        d.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), m[S] = d, S += 1
                                    }
                                v && (_ += y[i].l, _ += b), this.textSpans[x] ? this.textSpans[x].elem = m : this.textSpans[x] = {
                                    elem: m
                                }, x += 1
                            }
                        }, CVTextElement.prototype.renderInnerContent = function() {
                            var t, e, r, i, a, s, n = this.canvasContext;
                            n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                            var o, h = this.textAnimator.renderedLetters,
                                l = this.textProperty.currentData.l;
                            e = l.length;
                            var p, f, c = null,
                                m = null,
                                d = null;
                            for (t = 0; t < e; t += 1)
                                if (!l[t].n) {
                                    if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                        for (o && o.fc ? c !== o.fc && (c = o.fc, n.fillStyle = o.fc) : c !== this.values.fill && (c = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                            for (s = (f = p[r]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(f[a], f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5]);
                                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                                    }
                                    if (this.stroke) {
                                        for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? m !== o.sc && (m = o.sc, n.strokeStyle = o.sc) : m !== this.values.stroke && (m = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                            for (s = (f = p[r]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(f[a], f[a + 1], f[a + 2], f[a + 3], f[a + 4], f[a + 5]);
                                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                                    }
                                    o && this.globalData.renderer.restore()
                                }
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                                var t = createTag("canvas");
                                t.width = this.assetData.w, t.height = this.assetData.h;
                                var e, r, i = t.getContext("2d"),
                                    a = this.img.width,
                                    s = this.img.height,
                                    n = a / s,
                                    o = this.assetData.w / this.assetData.h,
                                    h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                                n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = s) * o : r = (e = a) / o, i.drawImage(this.img, (a - e) / 2, (s - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                            }
                        }, CVImageElement.prototype.renderInnerContent = function() {
                            this.canvasContext.drawImage(this.img, 0, 0)
                        }, CVImageElement.prototype.destroy = function() {
                            this.img = null
                        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                            var t = this.canvasContext;
                            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
                            return new CVShapeElement(t, this.globalData, this)
                        }, CanvasRendererBase.prototype.createText = function(t) {
                            return new CVTextElement(t, this.globalData, this)
                        }, CanvasRendererBase.prototype.createImage = function(t) {
                            return new CVImageElement(t, this.globalData, this)
                        }, CanvasRendererBase.prototype.createSolid = function(t) {
                            return new CVSolidElement(t, this.globalData, this)
                        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
                            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                                if (this.renderConfig.clearCanvas) {
                                    this.transformMat.cloneFromProps(t);
                                    var e = this.contextData.getTransform(),
                                        r = e.props;
                                    this.transformMat.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]), e.cloneFromProps(this.transformMat.props);
                                    var i = e.props;
                                    this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
                                } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
                            var e = this.contextData.getOpacity();
                            if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = e);
                            e *= t < 0 ? 0 : t, this.contextData.setOpacity(e), this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e)
                        }, CanvasRendererBase.prototype.reset = function() {
                            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                        }, CanvasRendererBase.prototype.save = function(t) {
                            this.renderConfig.clearCanvas ? (t && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save()
                        }, CanvasRendererBase.prototype.restore = function(t) {
                            if (this.renderConfig.clearCanvas) {
                                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                                var e = this.contextData.pop(),
                                    r = e.transform,
                                    i = e.opacity;
                                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i)
                            } else this.canvasContext.restore()
                        }, CanvasRendererBase.prototype.configAnimation = function(t) {
                            if (this.animationItem.wrapper) {
                                this.animationItem.container = createTag("canvas");
                                var e = this.animationItem.container.style;
                                e.width = "100%", e.height = "100%";
                                var r = "0px 0px 0px";
                                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                            } else this.canvasContext = this.renderConfig.context;
                            this.data = t, this.layers = t.layers, this.transformCanvas = {
                                w: t.w,
                                h: t.h,
                                sx: 0,
                                sy: 0,
                                tx: 0,
                                ty: 0
                            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
                            var r, i, a, s;
                            if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                                var n = this.renderConfig.preserveAspectRatio.split(" "),
                                    o = n[1] || "meet",
                                    h = n[0] || "xMidYMid",
                                    l = h.substr(0, 4),
                                    p = h.substr(4);
                                a = r / i, (s = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === o || s < a && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (s < a && "meet" === o || s > a && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (s < a && "meet" === o || s > a && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (s > a && "meet" === o || s < a && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                            } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                        }, CanvasRendererBase.prototype.destroy = function() {
                            var t;
                            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
                            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                                var r;
                                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                                var i = this.layers.length;
                                for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                                if (this.globalData._mdf) {
                                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                                    !0 !== this.renderConfig.clearCanvas && this.restore()
                                }
                            }
                        }, CanvasRendererBase.prototype.buildItem = function(t) {
                            var e = this.elements;
                            if (!e[t] && 99 !== this.layers[t].ty) {
                                var r = this.createItem(this.layers[t], this, this.globalData);
                                e[t] = r, r.initExpressions()
                            }
                        }, CanvasRendererBase.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, CanvasRendererBase.prototype.hide = function() {
                            this.animationItem.container.style.display = "none"
                        }, CanvasRendererBase.prototype.show = function() {
                            this.animationItem.container.style.display = "block"
                        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                            var t, e = this.canvasContext;
                            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                        }, CVCompElement.prototype.destroy = function() {
                            var t;
                            for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                            this.layers = null, this.elements = null
                        }, CVCompElement.prototype.createComp = function(t) {
                            return new CVCompElement(t, this.globalData, this)
                        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
                            return new CVCompElement(t, this.globalData, this)
                        }, HBaseElement.prototype = {
                            checkBlendMode: function() {},
                            initRendererElement: function() {
                                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                            },
                            createContainerElements: function() {
                                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                            },
                            renderElement: function() {
                                var t = this.transformedElement ? this.transformedElement.style : {};
                                if (this.finalTransform._matMdf) {
                                    var e = this.finalTransform.mat.toCSS();
                                    t.transform = e, t.webkitTransform = e
                                }
                                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            destroy: function() {
                                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                            },
                            createRenderableComponents: function() {
                                this.maskManager = new MaskElement(this.data, this, this.globalData)
                            },
                            addEffects: function() {},
                            setMatte: function() {}
                        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                            var t;
                            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                            var t;
                            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                            else {
                                t = createNS("svg");
                                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                            }
                            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
                            return e
                        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                            var r, i, a, s, n, o = t.sh.v,
                                h = t.transformers,
                                l = o._length;
                            if (!(l <= 1)) {
                                for (r = 0; r < l - 1; r += 1) i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, a, s, n, e);
                                o.c && (i = this.getTransformedPoint(h, o.v[r]), a = this.getTransformedPoint(h, o.o[r]), s = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, a, s, n, e))
                            }
                        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, a) {
                            this.getBoundsOfCurve(t, e, r, i);
                            var s = this.shapeBoundingBox;
                            a.x = bmMin(s.left, a.x), a.xMax = bmMax(s.right, a.xMax), a.y = bmMin(s.top, a.y), a.yMax = bmMax(s.bottom, a.yMax)
                        }, HShapeElement.prototype.shapeBoundingBox = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, HShapeElement.prototype.tempBoundingBox = {
                            x: 0,
                            xMax: 0,
                            y: 0,
                            yMax: 0,
                            width: 0,
                            height: 0
                        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
                            for (var a, s, n, o, h, l, p, f = [
                                    [t[0], i[0]],
                                    [t[1], i[1]]
                                ], c = 0; c < 2; ++c) s = 6 * t[c] - 12 * e[c] + 6 * r[c], a = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * i[c], n = 3 * e[c] - 3 * t[c], s |= 0, n |= 0, 0 == (a |= 0) && 0 === s || (0 === a ? (o = -n / s) > 0 && o < 1 && f[c].push(this.calculateF(o, t, e, r, i, c)) : (h = s * s - 4 * n * a) >= 0 && ((l = (-s + bmSqrt(h)) / (2 * a)) > 0 && l < 1 && f[c].push(this.calculateF(l, t, e, r, i, c)), (p = (-s - bmSqrt(h)) / (2 * a)) > 0 && p < 1 && f[c].push(this.calculateF(p, t, e, r, i, c))));
                            this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
                        }, HShapeElement.prototype.calculateF = function(t, e, r, i, a, s) {
                            return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * r[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * a[s]
                        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                            var r, i = t.length;
                            for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
                        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
                            var r = 0;
                            if (t.keyframes) {
                                for (var i = 0; i < t.keyframes.length; i += 1) {
                                    var a = t.keyframes[i].s;
                                    a > r && (r = a)
                                }
                                r *= t.mult
                            } else r = t.v * t.mult;
                            e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
                        }, HShapeElement.prototype.currentBoxContains = function(t) {
                            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                        }, HShapeElement.prototype.renderInnerContent = function() {
                            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                                var t = this.tempBoundingBox,
                                    e = 999999;
                                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                                var r = !1;
                                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                    var i = this.shapeCont.style,
                                        a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                    i.transform = a, i.webkitTransform = a
                                }
                            }
                        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                            if (this.isMasked = this.checkMasks(), this.isMasked) {
                                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                                var t = createNS("g");
                                this.maskedElement.appendChild(t), this.innerElem = t
                            } else this.renderType = "html", this.innerElem = this.layerElement;
                            this.checkParenting()
                        }, HTextElement.prototype.buildNewText = function() {
                            var t = this.textProperty.currentData;
                            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                            var e = this.innerElem.style,
                                r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                            var i, a, s = this.globalData.fontManager.getFontByName(t.f);
                            if (!this.globalData.fontManager.chars)
                                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                                else {
                                    e.fontFamily = s.fFamily;
                                    var n = t.fWeight,
                                        o = t.fStyle;
                                    e.fontStyle = o, e.fontWeight = n
                                }
                            var h, l, p, f = t.l;
                            a = f.length;
                            var c, m = this.mHelper,
                                d = "",
                                u = 0;
                            for (i = 0; i < a; i += 1) {
                                if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                                    var y, g = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                                    if (y = g ? g.data : null, m.reset(), y && y.shapes && y.shapes.length && (c = y.shapes[0].it, m.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(m, c), h.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(h);
                                    else {
                                        if (this.innerElem.appendChild(l), y && y.shapes) {
                                            document.body.appendChild(p);
                                            var v = p.getBBox();
                                            p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                            var b = p.style,
                                                _ = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                            b.transform = _, b.webkitTransform = _, f[i].yOffset = v.y - 1
                                        } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                        l.appendChild(p)
                                    }
                                } else if (h.textContent = f[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
                                else {
                                    this.innerElem.appendChild(l);
                                    var E = h.style,
                                        P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                                    E.transform = P, E.webkitTransform = P
                                }
                                this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1
                            }
                            for (; u < this.textSpans.length;) this.textSpans[u].style.display = "none", u += 1
                        }, HTextElement.prototype.renderInnerContent = function() {
                            var t;
                            if (this.data.singleShape) {
                                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                                if (this.isMasked && this.finalTransform._matMdf) {
                                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                                    t.transform = e, t.webkitTransform = e
                                }
                            }
                            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                                var r, i, a, s, n, o = 0,
                                    h = this.textAnimator.renderedLetters,
                                    l = this.textProperty.currentData.l;
                                for (i = l.length, r = 0; r < i; r += 1) l[r].n ? o += 1 : (s = this.textSpans[r], n = this.textPaths[r], a = h[o], o += 1, a._mdf.m && (this.isMasked ? s.setAttribute("transform", a.m) : (s.style.webkitTransform = a.m, s.style.transform = a.m)), s.style.opacity = a.o, a.sw && a._mdf.sw && n.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && n.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (n.setAttribute("fill", a.fc), n.style.color = a.fc));
                                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                                    var p = this.innerElem.getBBox();
                                    if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                                        this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                        var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                        t.transform = f, t.webkitTransform = f
                                    }
                                }
                            }
                        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                            var t, e, r, i, a = this.comp.threeDElements.length;
                            for (t = 0; t < a; t += 1)
                                if ("3d" === (e = this.comp.threeDElements[t]).type) {
                                    r = e.perspectiveElem.style, i = e.container.style;
                                    var s = this.pe.v + "px",
                                        n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                    r.perspective = s, r.webkitPerspective = s, i.transformOrigin = "0px 0px 0px", i.mozTransformOrigin = "0px 0px 0px", i.webkitTransformOrigin = "0px 0px 0px", r.transform = n, r.webkitTransform = n
                                }
                        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                            var t, e, r = this._isFirstFrame;
                            if (this.hierarchy)
                                for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
                            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                                if (this.mat.reset(), this.hierarchy)
                                    for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                        var i = this.hierarchy[t].finalTransform.mProp;
                                        this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                                    }
                                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                                    var a;
                                    a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                                    var s = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
                                        n = [a[0] / s, a[1] / s, a[2] / s],
                                        o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                                        h = Math.atan2(n[1], o),
                                        l = Math.atan2(n[0], -n[2]);
                                    this.mat.rotateY(l).rotateX(-h)
                                }
                                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                                var p = !this._prevMat.equals(this.mat);
                                if ((p || this.pe._mdf) && this.comp.threeDElements) {
                                    var f, c, m;
                                    for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                                        if ("3d" === (f = this.comp.threeDElements[t]).type) {
                                            if (p) {
                                                var d = this.mat.toCSS();
                                                (m = f.container.style).transform = d, m.webkitTransform = d
                                            }
                                            this.pe._mdf && ((c = f.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
                                        }
                                    this.mat.clone(this._prevMat)
                                }
                            }
                            this._isFirstFrame = !1
                        }, HCameraElement.prototype.prepareFrame = function(t) {
                            this.prepareProperties(t, !0)
                        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                            return null
                        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                            var t = this.globalData.getAssetsPath(this.assetData),
                                e = new Image;
                            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
                            var r = t.getBaseElement();
                            if (r) {
                                var i = this.layers[e];
                                if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                                else if (this.threeDElements) this.addTo3dContainer(r, e);
                                else {
                                    for (var a, s, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], a = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || a), n += 1;
                                    a ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, a) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                                }
                            }
                        }, HybridRendererBase.prototype.createShape = function(t) {
                            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                        }, HybridRendererBase.prototype.createText = function(t) {
                            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                        }, HybridRendererBase.prototype.createCamera = function(t) {
                            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                        }, HybridRendererBase.prototype.createImage = function(t) {
                            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                        }, HybridRendererBase.prototype.createSolid = function(t) {
                            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
                            for (var e = 0, r = this.threeDElements.length; e < r;) {
                                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                                e += 1
                            }
                            return null
                        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
                            var r, i, a = createTag("div");
                            styleDiv(a);
                            var s = createTag("div");
                            if (styleDiv(s), "3d" === e) {
                                (r = a.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px", r.webkitTransformOrigin = "50% 50%", r.mozTransformOrigin = "50% 50%", r.transformOrigin = "50% 50%";
                                var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                                (i = s.style).transform = n, i.webkitTransform = n
                            }
                            a.appendChild(s);
                            var o = {
                                container: s,
                                perspectiveElem: a,
                                startPos: t,
                                endPos: t,
                                type: e
                            };
                            return this.threeDElements.push(o), o
                        }, HybridRendererBase.prototype.build3dContainers = function() {
                            var t, e, r = this.layers.length,
                                i = "";
                            for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                            for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
                            for (var r = 0, i = this.threeDElements.length; r < i;) {
                                if (e <= this.threeDElements[r].endPos) {
                                    for (var a, s = this.threeDElements[r].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                                    a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                                    break
                                }
                                r += 1
                            }
                        }, HybridRendererBase.prototype.configAnimation = function(t) {
                            var e = createTag("div"),
                                r = this.animationItem.wrapper,
                                i = e.style;
                            i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
                            var a = createNS("svg");
                            a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
                            var s = createNS("defs");
                            a.appendChild(s), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                        }, HybridRendererBase.prototype.destroy = function() {
                            var t;
                            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                            var e = this.layers ? this.layers.length : 0;
                            for (t = 0; t < e; t += 1) this.elements[t].destroy();
                            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                        }, HybridRendererBase.prototype.updateContainerSize = function() {
                            var t, e, r, i, a = this.animationItem.wrapper.offsetWidth,
                                s = this.animationItem.wrapper.offsetHeight,
                                n = a / s;
                            this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, r = 0, i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
                            var o = this.resizerElem.style;
                            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
                        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                            this.resizerElem.style.display = "none"
                        }, HybridRendererBase.prototype.show = function() {
                            this.resizerElem.style.display = "block"
                        }, HybridRendererBase.prototype.initItems = function() {
                            if (this.buildAllItems(), this.camera) this.camera.setup();
                            else {
                                var t, e = this.globalData.compSize.w,
                                    r = this.globalData.compSize.h,
                                    i = this.threeDElements.length;
                                for (t = 0; t < i; t += 1) {
                                    var a = this.threeDElements[t].perspectiveElem.style;
                                    a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", a.perspective = a.webkitPerspective
                                }
                            }
                        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
                            var e, r = t.length,
                                i = createTag("div");
                            for (e = 0; e < r; e += 1)
                                if (t[e].xt) {
                                    var a = this.createComp(t[e], i, this.globalData.comp, null);
                                    a.initExpressions(), this.globalData.projectInterface.registerComposition(a)
                                }
                        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                            for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
                            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
                        }, HCompElement.prototype.createComp = function(t) {
                            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
                            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                        };
                        var CompExpressionInterface = function(t) {
                                function e(e) {
                                    for (var r = 0, i = t.layers.length; r < i;) {
                                        if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                                        r += 1
                                    }
                                    return null
                                }
                                return Object.defineProperty(e, "_name", {
                                    value: t.data.nm
                                }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                            },
                            Expressions = function() {
                                var t = {
                                    initExpressions: function(t) {
                                        var e = 0,
                                            r = [];
                                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                                            e += 1
                                        }, t.renderer.globalData.popExpression = function() {
                                            0 == (e -= 1) && function() {
                                                var t, e = r.length;
                                                for (t = 0; t < e; t += 1) r[t].release();
                                                r.length = 0
                                            }()
                                        }, t.renderer.globalData.registerExpressionProperty = function(t) {
                                            -1 === r.indexOf(t) && r.push(t)
                                        }
                                    }
                                };
                                return t
                            }(),
                            MaskManagerInterface = function() {
                                function t(t, e) {
                                    this._mask = t, this._data = e
                                }
                                return Object.defineProperty(t.prototype, "maskPath", {
                                        get: function() {
                                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                        }
                                    }), Object.defineProperty(t.prototype, "maskOpacity", {
                                        get: function() {
                                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                        }
                                    }),
                                    function(e) {
                                        var r, i = createSizedArray(e.viewData.length),
                                            a = e.viewData.length;
                                        for (r = 0; r < a; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                                        return function(t) {
                                            for (r = 0; r < a;) {
                                                if (e.masksProperties[r].nm === t) return i[r];
                                                r += 1
                                            }
                                            return null
                                        }
                                    }
                            }(),
                            ExpressionPropertyInterface = function() {
                                var t = {
                                        pv: 0,
                                        v: 0,
                                        mult: 1
                                    },
                                    e = {
                                        pv: [0, 0, 0],
                                        v: [0, 0, 0],
                                        mult: 1
                                    };

                                function r(t, e, r) {
                                    Object.defineProperty(t, "velocity", {
                                        get: function() {
                                            return e.getVelocityAtTime(e.comp.currentFrame)
                                        }
                                    }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                                        if (!t.numKeys) return 0;
                                        var a;
                                        a = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                                        var s = "unidimensional" === r ? new Number(a) : Object.assign({}, a);
                                        return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === r ? a[0] : a, s
                                    }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                                }

                                function i() {
                                    return t
                                }
                                return function(a) {
                                    return a ? "unidimensional" === a.propType ? function(e) {
                                        e && "pv" in e || (e = t);
                                        var i = 1 / e.mult,
                                            a = e.pv * i,
                                            s = new Number(a);
                                        return s.value = a, r(s, e, "unidimensional"),
                                            function() {
                                                return e.k && e.getValue(), a = e.v * i, s.value !== a && ((s = new Number(a)).value = a, r(s, e, "unidimensional")), s
                                            }
                                    }(a) : function(t) {
                                        t && "pv" in t || (t = e);
                                        var i = 1 / t.mult,
                                            a = t.data && t.data.l || t.pv.length,
                                            s = createTypedArray("float32", a),
                                            n = createTypedArray("float32", a);
                                        return s.value = n, r(s, t, "multidimensional"),
                                            function() {
                                                t.k && t.getValue();
                                                for (var e = 0; e < a; e += 1) n[e] = t.v[e] * i, s[e] = n[e];
                                                return s
                                            }
                                    }(a) : i
                                }
                            }(),
                            TransformExpressionInterface = function(t) {
                                function e(t) {
                                    switch (t) {
                                        case "scale":
                                        case "Scale":
                                        case "ADBE Scale":
                                        case 6:
                                            return e.scale;
                                        case "rotation":
                                        case "Rotation":
                                        case "ADBE Rotation":
                                        case "ADBE Rotate Z":
                                        case 10:
                                            return e.rotation;
                                        case "ADBE Rotate X":
                                            return e.xRotation;
                                        case "ADBE Rotate Y":
                                            return e.yRotation;
                                        case "position":
                                        case "Position":
                                        case "ADBE Position":
                                        case 2:
                                            return e.position;
                                        case "ADBE Position_0":
                                            return e.xPosition;
                                        case "ADBE Position_1":
                                            return e.yPosition;
                                        case "ADBE Position_2":
                                            return e.zPosition;
                                        case "anchorPoint":
                                        case "AnchorPoint":
                                        case "Anchor Point":
                                        case "ADBE AnchorPoint":
                                        case 1:
                                            return e.anchorPoint;
                                        case "opacity":
                                        case "Opacity":
                                        case 11:
                                            return e.opacity;
                                        default:
                                            return null
                                    }
                                }
                                var r, i, a, s;
                                return Object.defineProperty(e, "rotation", {
                                    get: ExpressionPropertyInterface(t.r || t.rz)
                                }), Object.defineProperty(e, "zRotation", {
                                    get: ExpressionPropertyInterface(t.rz || t.r)
                                }), Object.defineProperty(e, "xRotation", {
                                    get: ExpressionPropertyInterface(t.rx)
                                }), Object.defineProperty(e, "yRotation", {
                                    get: ExpressionPropertyInterface(t.ry)
                                }), Object.defineProperty(e, "scale", {
                                    get: ExpressionPropertyInterface(t.s)
                                }), t.p ? s = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                                    get: function() {
                                        return t.p ? s() : [r(), i(), a ? a() : 0]
                                    }
                                }), Object.defineProperty(e, "xPosition", {
                                    get: ExpressionPropertyInterface(t.px)
                                }), Object.defineProperty(e, "yPosition", {
                                    get: ExpressionPropertyInterface(t.py)
                                }), Object.defineProperty(e, "zPosition", {
                                    get: ExpressionPropertyInterface(t.pz)
                                }), Object.defineProperty(e, "anchorPoint", {
                                    get: ExpressionPropertyInterface(t.a)
                                }), Object.defineProperty(e, "opacity", {
                                    get: ExpressionPropertyInterface(t.o)
                                }), Object.defineProperty(e, "skew", {
                                    get: ExpressionPropertyInterface(t.sk)
                                }), Object.defineProperty(e, "skewAxis", {
                                    get: ExpressionPropertyInterface(t.sa)
                                }), Object.defineProperty(e, "orientation", {
                                    get: ExpressionPropertyInterface(t.or)
                                }), e
                            },
                            LayerExpressionInterface = function() {
                                function t(t) {
                                    var e = new Matrix;
                                    return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
                                }

                                function e(t, e) {
                                    var r = this.getMatrix(e);
                                    return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
                                }

                                function r(t, e) {
                                    var r = this.getMatrix(e);
                                    return this.applyPoint(r, t)
                                }

                                function i(t, e) {
                                    var r = this.getMatrix(e);
                                    return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
                                }

                                function a(t, e) {
                                    var r = this.getMatrix(e);
                                    return this.invertPoint(r, t)
                                }

                                function s(t, e) {
                                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var r, i = this._elem.hierarchy.length;
                                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                                    }
                                    return t.applyToPointArray(e[0], e[1], e[2] || 0)
                                }

                                function n(t, e) {
                                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var r, i = this._elem.hierarchy.length;
                                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                                    }
                                    return t.inversePoint(e)
                                }

                                function o(t) {
                                    var e = new Matrix;
                                    if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                        var r, i = this._elem.hierarchy.length;
                                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                                        return e.inversePoint(t)
                                    }
                                    return e.inversePoint(t)
                                }

                                function h() {
                                    return [1, 1, 1, 1]
                                }
                                return function(l) {
                                    var p;

                                    function f(t) {
                                        switch (t) {
                                            case "ADBE Root Vectors Group":
                                            case "Contents":
                                            case 2:
                                                return f.shapeInterface;
                                            case 1:
                                            case 6:
                                            case "Transform":
                                            case "transform":
                                            case "ADBE Transform Group":
                                                return p;
                                            case 4:
                                            case "ADBE Effect Parade":
                                            case "effects":
                                            case "Effects":
                                                return f.effect;
                                            case "ADBE Text Properties":
                                                return f.textInterface;
                                            default:
                                                return null
                                        }
                                    }
                                    f.getMatrix = t, f.invertPoint = n, f.applyPoint = s, f.toWorld = r, f.toWorldVec = e, f.fromWorld = a, f.fromWorldVec = i, f.toComp = r, f.fromComp = o, f.sampleImage = h, f.sourceRectAtTime = l.sourceRectAtTime.bind(l), f._elem = l;
                                    var c = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                                    return Object.defineProperties(f, {
                                        hasParent: {
                                            get: function() {
                                                return l.hierarchy.length
                                            }
                                        },
                                        parent: {
                                            get: function() {
                                                return l.hierarchy[0].layerInterface
                                            }
                                        },
                                        rotation: getDescriptor(p, "rotation"),
                                        scale: getDescriptor(p, "scale"),
                                        position: getDescriptor(p, "position"),
                                        opacity: getDescriptor(p, "opacity"),
                                        anchorPoint: c,
                                        anchor_point: c,
                                        transform: {
                                            get: function() {
                                                return p
                                            }
                                        },
                                        active: {
                                            get: function() {
                                                return l.isInRange
                                            }
                                        }
                                    }), f.startTime = l.data.st, f.index = l.data.ind, f.source = l.data.refId, f.height = 0 === l.data.ty ? l.data.h : 100, f.width = 0 === l.data.ty ? l.data.w : 100, f.inPoint = l.data.ip / l.comp.globalData.frameRate, f.outPoint = l.data.op / l.comp.globalData.frameRate, f._name = l.data.nm, f.registerMaskInterface = function(t) {
                                        f.mask = new MaskManagerInterface(t, l)
                                    }, f.registerEffectsInterface = function(t) {
                                        f.effect = t
                                    }, f
                                }
                            }(),
                            propertyGroupFactory = function(t, e) {
                                return function(r) {
                                    return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
                                }
                            },
                            PropertyInterface = function(t, e) {
                                var r = {
                                    _name: t
                                };
                                return function(t) {
                                    return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
                                }
                            },
                            EffectsExpressionInterface = function() {
                                function t(r, i, a, s) {
                                    function n(t) {
                                        for (var e = r.ef, i = 0, a = e.length; i < a;) {
                                            if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? l[i] : l[i]();
                                            i += 1
                                        }
                                        throw new Error
                                    }
                                    var o, h = propertyGroupFactory(n, a),
                                        l = [],
                                        p = r.ef.length;
                                    for (o = 0; o < p; o += 1) 5 === r.ef[o].ty ? l.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s)) : l.push(e(i.effectElements[o], r.ef[o].ty, s, h));
                                    return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
                                        get: function() {
                                            return l[0]()
                                        }
                                    }), Object.defineProperties(n, {
                                        numProperties: {
                                            get: function() {
                                                return r.np
                                            }
                                        },
                                        _name: {
                                            value: r.nm
                                        },
                                        propertyGroup: {
                                            value: h
                                        }
                                    }), n.enabled = 0 !== r.en, n.active = n.enabled, n
                                }

                                function e(t, e, r, i) {
                                    var a = ExpressionPropertyInterface(t.p);
                                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                                        function() {
                                            return 10 === e ? r.comp.compInterface(t.p.v) : a()
                                        }
                                }
                                return {
                                    createEffectsInterface: function(e, r) {
                                        if (e.effectsManager) {
                                            var i, a = [],
                                                s = e.data.ef,
                                                n = e.effectsManager.effectElements.length;
                                            for (i = 0; i < n; i += 1) a.push(t(s[i], e.effectsManager.effectElements[i], r, e));
                                            var o = e.data.ef || [],
                                                h = function(t) {
                                                    for (i = 0, n = o.length; i < n;) {
                                                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return a[i];
                                                        i += 1
                                                    }
                                                    return null
                                                };
                                            return Object.defineProperty(h, "numProperties", {
                                                get: function() {
                                                    return o.length
                                                }
                                            }), h
                                        }
                                        return null
                                    }
                                }
                            }(),
                            ShapePathInterface = function(t, e, r) {
                                var i = e.sh;

                                function a(t) {
                                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? a.path : null
                                }
                                var s = propertyGroupFactory(a, r);
                                return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(a, {
                                    path: {
                                        get: function() {
                                            return i.k && i.getValue(), i
                                        }
                                    },
                                    shape: {
                                        get: function() {
                                            return i.k && i.getValue(), i
                                        }
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    ix: {
                                        value: t.ix
                                    },
                                    propertyIndex: {
                                        value: t.ix
                                    },
                                    mn: {
                                        value: t.mn
                                    },
                                    propertyGroup: {
                                        value: r
                                    }
                                }), a
                            },
                            ShapeExpressionInterface = function() {
                                function t(t, n, c) {
                                    var m, d = [],
                                        u = t ? t.length : 0;
                                    for (m = 0; m < u; m += 1) "gr" === t[m].ty ? d.push(e(t[m], n[m], c)) : "fl" === t[m].ty ? d.push(r(t[m], n[m], c)) : "st" === t[m].ty ? d.push(a(t[m], n[m], c)) : "tm" === t[m].ty ? d.push(s(t[m], n[m], c)) : "tr" === t[m].ty || ("el" === t[m].ty ? d.push(o(t[m], n[m], c)) : "sr" === t[m].ty ? d.push(h(t[m], n[m], c)) : "sh" === t[m].ty ? d.push(ShapePathInterface(t[m], n[m], c)) : "rc" === t[m].ty ? d.push(l(t[m], n[m], c)) : "rd" === t[m].ty ? d.push(p(t[m], n[m], c)) : "rp" === t[m].ty ? d.push(f(t[m], n[m], c)) : "gf" === t[m].ty ? d.push(i(t[m], n[m], c)) : d.push((t[m], n[m], function() {
                                        return null
                                    })));
                                    return d
                                }

                                function e(e, r, i) {
                                    var a = function(t) {
                                        switch (t) {
                                            case "ADBE Vectors Group":
                                            case "Contents":
                                            case 2:
                                                return a.content;
                                            default:
                                                return a.transform
                                        }
                                    };
                                    a.propertyGroup = propertyGroupFactory(a, i);
                                    var s = function(e, r, i) {
                                            var a, s = function(t) {
                                                for (var e = 0, r = a.length; e < r;) {
                                                    if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t) return a[e];
                                                    e += 1
                                                }
                                                return "number" == typeof t ? a[t - 1] : null
                                            };
                                            s.propertyGroup = propertyGroupFactory(s, i), a = t(e.it, r.it, s.propertyGroup), s.numProperties = a.length;
                                            var o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
                                            return s.transform = o, s.propertyIndex = e.cix, s._name = e.nm, s
                                        }(e, r, a.propertyGroup),
                                        o = n(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                                    return a.content = s, a.transform = o, Object.defineProperty(a, "_name", {
                                        get: function() {
                                            return e.nm
                                        }
                                    }), a.numProperties = e.np, a.propertyIndex = e.ix, a.nm = e.nm, a.mn = e.mn, a
                                }

                                function r(t, e, r) {
                                    function i(t) {
                                        return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
                                    }
                                    return Object.defineProperties(i, {
                                        color: {
                                            get: ExpressionPropertyInterface(e.c)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        _name: {
                                            value: t.nm
                                        },
                                        mn: {
                                            value: t.mn
                                        }
                                    }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
                                }

                                function i(t, e, r) {
                                    function i(t) {
                                        return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
                                    }
                                    return Object.defineProperties(i, {
                                        startPoint: {
                                            get: ExpressionPropertyInterface(e.s)
                                        },
                                        endPoint: {
                                            get: ExpressionPropertyInterface(e.e)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        type: {
                                            get: function() {
                                                return "a"
                                            }
                                        },
                                        _name: {
                                            value: t.nm
                                        },
                                        mn: {
                                            value: t.mn
                                        }
                                    }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
                                }

                                function a(t, e, r) {
                                    var i, a = propertyGroupFactory(l, r),
                                        s = propertyGroupFactory(h, a);

                                    function n(r) {
                                        Object.defineProperty(h, t.d[r].nm, {
                                            get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                                        })
                                    }
                                    var o = t.d ? t.d.length : 0,
                                        h = {};
                                    for (i = 0; i < o; i += 1) n(i), e.d.dataProps[i].p.setGroupProperty(s);

                                    function l(t) {
                                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                                    }
                                    return Object.defineProperties(l, {
                                        color: {
                                            get: ExpressionPropertyInterface(e.c)
                                        },
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        strokeWidth: {
                                            get: ExpressionPropertyInterface(e.w)
                                        },
                                        dash: {
                                            get: function() {
                                                return h
                                            }
                                        },
                                        _name: {
                                            value: t.nm
                                        },
                                        mn: {
                                            value: t.mn
                                        }
                                    }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), l
                                }

                                function s(t, e, r) {
                                    function i(e) {
                                        return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
                                    }
                                    var a = propertyGroupFactory(i, r);
                                    return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", a)), e.e.setGroupProperty(PropertyInterface("End", a)), e.o.setGroupProperty(PropertyInterface("Offset", a)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
                                        start: {
                                            get: ExpressionPropertyInterface(e.s)
                                        },
                                        end: {
                                            get: ExpressionPropertyInterface(e.e)
                                        },
                                        offset: {
                                            get: ExpressionPropertyInterface(e.o)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.mn = t.mn, i
                                }

                                function n(t, e, r) {
                                    function i(e) {
                                        return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
                                    }
                                    var a = propertyGroupFactory(i, r);
                                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", a)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", a)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", a)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", a)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", a)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", a)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", a))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", a)), Object.defineProperties(i, {
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                                        },
                                        anchorPoint: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                                        },
                                        scale: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                                        },
                                        skew: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                        },
                                        skewAxis: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i
                                }

                                function o(t, e, r) {
                                    function i(e) {
                                        return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
                                    }
                                    var a = propertyGroupFactory(i, r);
                                    i.propertyIndex = t.ix;
                                    var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                                    return s.s.setGroupProperty(PropertyInterface("Size", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), Object.defineProperties(i, {
                                        size: {
                                            get: ExpressionPropertyInterface(s.s)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(s.p)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.mn = t.mn, i
                                }

                                function h(t, e, r) {
                                    function i(e) {
                                        return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
                                    }
                                    var a = propertyGroupFactory(i, r),
                                        s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                                    return i.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", a)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", a)), s.pt.setGroupProperty(PropertyInterface("Points", a)), s.p.setGroupProperty(PropertyInterface("Position", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", a)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", a))), Object.defineProperties(i, {
                                        position: {
                                            get: ExpressionPropertyInterface(s.p)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(s.r)
                                        },
                                        points: {
                                            get: ExpressionPropertyInterface(s.pt)
                                        },
                                        outerRadius: {
                                            get: ExpressionPropertyInterface(s.or)
                                        },
                                        outerRoundness: {
                                            get: ExpressionPropertyInterface(s.os)
                                        },
                                        innerRadius: {
                                            get: ExpressionPropertyInterface(s.ir)
                                        },
                                        innerRoundness: {
                                            get: ExpressionPropertyInterface(s.is)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.mn = t.mn, i
                                }

                                function l(t, e, r) {
                                    function i(e) {
                                        return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
                                    }
                                    var a = propertyGroupFactory(i, r),
                                        s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                                    return i.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", a)), s.s.setGroupProperty(PropertyInterface("Size", a)), s.r.setGroupProperty(PropertyInterface("Rotation", a)), Object.defineProperties(i, {
                                        position: {
                                            get: ExpressionPropertyInterface(s.p)
                                        },
                                        roundness: {
                                            get: ExpressionPropertyInterface(s.r)
                                        },
                                        size: {
                                            get: ExpressionPropertyInterface(s.s)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.mn = t.mn, i
                                }

                                function p(t, e, r) {
                                    function i(e) {
                                        return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
                                    }
                                    var a = propertyGroupFactory(i, r),
                                        s = e;
                                    return i.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", a)), Object.defineProperties(i, {
                                        radius: {
                                            get: ExpressionPropertyInterface(s.rd)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.mn = t.mn, i
                                }

                                function f(t, e, r) {
                                    function i(e) {
                                        return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
                                    }
                                    var a = propertyGroupFactory(i, r),
                                        s = e;
                                    return i.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", a)), s.o.setGroupProperty(PropertyInterface("Offset", a)), Object.defineProperties(i, {
                                        copies: {
                                            get: ExpressionPropertyInterface(s.c)
                                        },
                                        offset: {
                                            get: ExpressionPropertyInterface(s.o)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.mn = t.mn, i
                                }
                                return function(e, r, i) {
                                    var a;

                                    function s(t) {
                                        if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : a[t - 1];
                                        for (var e = 0, r = a.length; e < r;) {
                                            if (a[e]._name === t) return a[e];
                                            e += 1
                                        }
                                        return null
                                    }
                                    return s.propertyGroup = propertyGroupFactory(s, (function() {
                                        return i
                                    })), a = t(e, r, s.propertyGroup), s.numProperties = a.length, s._name = "Contents", s
                                }
                            }(),
                            TextExpressionInterface = function(t) {
                                var e, r;

                                function i(t) {
                                    return "ADBE Text Document" === t ? i.sourceText : null
                                }
                                return Object.defineProperty(i, "sourceText", {
                                    get: function() {
                                        t.textProperty.getValue();
                                        var i = t.textProperty.currentData.t;
                                        return i !== e && (e = t.textProperty.currentData.t, (r = new String(i)).value = i || new String(i), Object.defineProperty(r, "style", {
                                            get: function() {
                                                return {
                                                    fillColor: t.textProperty.currentData.fc
                                                }
                                            }
                                        })), r
                                    }
                                }), i
                            };

                        function _typeof$2(t) {
                            return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var FootageInterface = (dataInterfaceFactory = function(t) {
                                function e(t) {
                                    return "Outline" === t ? e.outlineInterface() : null
                                }
                                return e._name = "Outline", e.outlineInterface = function(t) {
                                    var e = "",
                                        r = t.getFootageData();

                                    function i(t) {
                                        if (r[t]) return e = t, "object" === _typeof$2(r = r[t]) ? i : r;
                                        var a = t.indexOf(e);
                                        if (-1 !== a) {
                                            var s = parseInt(t.substr(a + e.length), 10);
                                            return "object" === _typeof$2(r = r[s]) ? i : r
                                        }
                                        return ""
                                    }
                                    return function() {
                                        return e = "", r = t.getFootageData(), i
                                    }
                                }(t), e
                            }, function(t) {
                                function e(t) {
                                    return "Data" === t ? e.dataInterface : null
                                }
                                return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
                            }),
                            dataInterfaceFactory, interfaces = {
                                layer: LayerExpressionInterface,
                                effects: EffectsExpressionInterface,
                                comp: CompExpressionInterface,
                                shape: ShapeExpressionInterface,
                                text: TextExpressionInterface,
                                footage: FootageInterface
                            };

                        function getInterface(t) {
                            return interfaces[t] || null
                        }

                        function _typeof$1(t) {
                            return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }

                        function seedRandom(t, e) {
                            var r = this,
                                i = e.pow(256, 6),
                                a = e.pow(2, 52),
                                s = 2 * a;

                            function n(t) {
                                var e, r = t.length,
                                    i = this,
                                    a = 0,
                                    s = i.i = i.j = 0,
                                    n = i.S = [];
                                for (r || (t = [r++]); a < 256;) n[a] = a++;
                                for (a = 0; a < 256; a++) n[a] = n[s = 255 & s + t[a % r] + (e = n[a])], n[s] = e;
                                i.g = function(t) {
                                    for (var e, r = 0, a = i.i, s = i.j, n = i.S; t--;) e = n[a = 255 & a + 1], r = 256 * r + n[255 & (n[a] = n[s = 255 & s + e]) + (n[s] = e)];
                                    return i.i = a, i.j = s, r
                                }
                            }

                            function o(t, e) {
                                return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                            }

                            function h(t, e) {
                                for (var r, i = t + "", a = 0; a < i.length;) e[255 & a] = 255 & (r ^= 19 * e[255 & a]) + i.charCodeAt(a++);
                                return l(e)
                            }

                            function l(t) {
                                return String.fromCharCode.apply(0, t)
                            }
                            e.seedrandom = function(p, f, c) {
                                var m = [],
                                    d = h(function t(e, r) {
                                        var i, a = [],
                                            s = _typeof$1(e);
                                        if (r && "object" == s)
                                            for (i in e) try {
                                                a.push(t(e[i], r - 1))
                                            } catch (t) {}
                                        return a.length ? a : "string" == s ? e : e + "\0"
                                    }((f = !0 === f ? {
                                        entropy: !0
                                    } : f || {}).entropy ? [p, l(t)] : null === p ? function() {
                                        try {
                                            var e = new Uint8Array(256);
                                            return (r.crypto || r.msCrypto).getRandomValues(e), l(e)
                                        } catch (e) {
                                            var i = r.navigator,
                                                a = i && i.plugins;
                                            return [+new Date, r, a, r.screen, l(t)]
                                        }
                                    }() : p, 3), m),
                                    u = new n(m),
                                    y = function() {
                                        for (var t = u.g(6), e = i, r = 0; t < a;) t = 256 * (t + r), e *= 256, r = u.g(1);
                                        for (; t >= s;) t /= 2, e /= 2, r >>>= 1;
                                        return (t + r) / e
                                    };
                                return y.int32 = function() {
                                    return 0 | u.g(4)
                                }, y.quick = function() {
                                    return u.g(4) / 4294967296
                                }, y.double = y, h(l(u.S), t), (f.pass || c || function(t, r, i, a) {
                                    return a && (a.S && o(a, u), t.state = function() {
                                        return o(u, {})
                                    }), i ? (e.random = t, r) : t
                                })(y, d, "global" in f ? f.global : this == e, f.state)
                            }, h(e.random(), t)
                        }

                        function initialize$2(t) {
                            seedRandom([], t)
                        }
                        var propTypes = {
                            SHAPE: "shape"
                        };

                        function _typeof(t) {
                            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                return typeof t
                            } : function(t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            })(t)
                        }
                        var ExpressionManager = function() {
                                var ob = {},
                                    Math = BMMath,
                                    window = null,
                                    document = null,
                                    XMLHttpRequest = null,
                                    fetch = null,
                                    frames = null;

                                function $bm_isInstanceOfArray(t) {
                                    return t.constructor === Array || t.constructor === Float32Array
                                }

                                function isNumerable(t, e) {
                                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                                }

                                function $bm_neg(t) {
                                    var e = _typeof(t);
                                    if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                                    if ($bm_isInstanceOfArray(t)) {
                                        var r, i = t.length,
                                            a = [];
                                        for (r = 0; r < i; r += 1) a[r] = -t[r];
                                        return a
                                    }
                                    return t.propType ? t.v : -t
                                }
                                initialize$2(BMMath);
                                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                                function sum(t, e) {
                                    var r = _typeof(t),
                                        i = _typeof(e);
                                    if ("string" === r || "string" === i) return t + e;
                                    if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                        for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] + e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
                                        return o
                                    }
                                    return 0
                                }
                                var add = sum;

                                function sub(t, e) {
                                    var r = _typeof(t),
                                        i = _typeof(e);
                                    if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                        for (var a = 0, s = t.length, n = e.length, o = []; a < s || a < n;)("number" == typeof t[a] || t[a] instanceof Number) && ("number" == typeof e[a] || e[a] instanceof Number) ? o[a] = t[a] - e[a] : o[a] = void 0 === e[a] ? t[a] : t[a] || e[a], a += 1;
                                        return o
                                    }
                                    return 0
                                }

                                function mul(t, e) {
                                    var r, i, a, s = _typeof(t),
                                        n = _typeof(e);
                                    if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
                                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                                        for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] * e;
                                        return r
                                    }
                                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                                        for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t * e[i];
                                        return r
                                    }
                                    return 0
                                }

                                function div(t, e) {
                                    var r, i, a, s = _typeof(t),
                                        n = _typeof(e);
                                    if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
                                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                                        for (a = t.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t[i] / e;
                                        return r
                                    }
                                    if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                                        for (a = e.length, r = createTypedArray("float32", a), i = 0; i < a; i += 1) r[i] = t / e[i];
                                        return r
                                    }
                                    return 0
                                }

                                function mod(t, e) {
                                    return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                                }
                                var $bm_sum = sum,
                                    $bm_sub = sub,
                                    $bm_mul = mul,
                                    $bm_div = div,
                                    $bm_mod = mod;

                                function clamp(t, e, r) {
                                    if (e > r) {
                                        var i = r;
                                        r = e, e = i
                                    }
                                    return Math.min(Math.max(t, e), r)
                                }

                                function radiansToDegrees(t) {
                                    return t / degToRads
                                }
                                var radians_to_degrees = radiansToDegrees;

                                function degreesToRadians(t) {
                                    return t * degToRads
                                }
                                var degrees_to_radians = radiansToDegrees,
                                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                                function length(t, e) {
                                    if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                                    var r;
                                    e || (e = helperLengthArray);
                                    var i = Math.min(t.length, e.length),
                                        a = 0;
                                    for (r = 0; r < i; r += 1) a += Math.pow(e[r] - t[r], 2);
                                    return Math.sqrt(a)
                                }

                                function normalize(t) {
                                    return div(t, length(t))
                                }

                                function rgbToHsl(t) {
                                    var e, r, i = t[0],
                                        a = t[1],
                                        s = t[2],
                                        n = Math.max(i, a, s),
                                        o = Math.min(i, a, s),
                                        h = (n + o) / 2;
                                    if (n === o) e = 0, r = 0;
                                    else {
                                        var l = n - o;
                                        switch (r = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                                            case i:
                                                e = (a - s) / l + (a < s ? 6 : 0);
                                                break;
                                            case a:
                                                e = (s - i) / l + 2;
                                                break;
                                            case s:
                                                e = (i - a) / l + 4
                                        }
                                        e /= 6
                                    }
                                    return [e, r, h, t[3]]
                                }

                                function hue2rgb(t, e, r) {
                                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                                }

                                function hslToRgb(t) {
                                    var e, r, i, a = t[0],
                                        s = t[1],
                                        n = t[2];
                                    if (0 === s) e = n, i = n, r = n;
                                    else {
                                        var o = n < .5 ? n * (1 + s) : n + s - n * s,
                                            h = 2 * n - o;
                                        e = hue2rgb(h, o, a + 1 / 3), r = hue2rgb(h, o, a), i = hue2rgb(h, o, a - 1 / 3)
                                    }
                                    return [e, r, i, t[3]]
                                }

                                function linear(t, e, r, i, a) {
                                    if (void 0 !== i && void 0 !== a || (i = e, a = r, e = 0, r = 1), r < e) {
                                        var s = r;
                                        r = e, e = s
                                    }
                                    if (t <= e) return i;
                                    if (t >= r) return a;
                                    var n, o = r === e ? 0 : (t - e) / (r - e);
                                    if (!i.length) return i + (a - i) * o;
                                    var h = i.length,
                                        l = createTypedArray("float32", h);
                                    for (n = 0; n < h; n += 1) l[n] = i[n] + (a[n] - i[n]) * o;
                                    return l
                                }

                                function random(t, e) {
                                    if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                        var r, i = e.length;
                                        t || (t = createTypedArray("float32", i));
                                        var a = createTypedArray("float32", i),
                                            s = BMMath.random();
                                        for (r = 0; r < i; r += 1) a[r] = t[r] + s * (e[r] - t[r]);
                                        return a
                                    }
                                    return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                                }

                                function createPath(t, e, r, i) {
                                    var a, s = t.length,
                                        n = shapePool.newElement();
                                    n.setPathData(!!i, s);
                                    var o, h, l = [0, 0];
                                    for (a = 0; a < s; a += 1) o = e && e[a] ? e[a] : l, h = r && r[a] ? r[a] : l, n.setTripleAt(t[a][0], t[a][1], h[0] + t[a][0], h[1] + t[a][1], o[0] + t[a][0], o[1] + t[a][1], a, !0);
                                    return n
                                }

                                function initiateExpression(elem, data, property) {
                                    function noOp(t) {
                                        return t
                                    }
                                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                                    var val = data.x,
                                        needsVelocity = /velocity(?![\w\d])/.test(val),
                                        _needsRandom = -1 !== val.indexOf("random"),
                                        elemType = elem.data.ty,
                                        transform, $bm_transform, content, effect, thisProperty = property;
                                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                        get: function() {
                                            return thisProperty.v
                                        }
                                    }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                        width = elem.data.sw ? elem.data.sw : 0,
                                        height = elem.data.sh ? elem.data.sh : 0,
                                        name = elem.data.nm,
                                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                        numKeys = property.kf ? data.k.length : 0,
                                        active = !this.data || !0 !== this.data.hd,
                                        wiggle = function(t, e) {
                                            var r, i, a = this.pv.length ? this.pv.length : 1,
                                                s = createTypedArray("float32", a),
                                                n = Math.floor(5 * time);
                                            for (r = 0, i = 0; r < n;) {
                                                for (i = 0; i < a; i += 1) s[i] += -e + 2 * e * BMMath.random();
                                                r += 1
                                            }
                                            var o = 5 * time,
                                                h = o - Math.floor(o),
                                                l = createTypedArray("float32", a);
                                            if (a > 1) {
                                                for (i = 0; i < a; i += 1) l[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * h;
                                                return l
                                            }
                                            return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * h
                                        }.bind(this);

                                    function loopInDuration(t, e) {
                                        return loopIn(t, e, !0)
                                    }

                                    function loopOutDuration(t, e) {
                                        return loopOut(t, e, !0)
                                    }
                                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                                    function lookAt(t, e) {
                                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                            i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                                        return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                                    }

                                    function easeOut(t, e, r, i, a) {
                                        return applyEase(easeOutBez, t, e, r, i, a)
                                    }

                                    function easeIn(t, e, r, i, a) {
                                        return applyEase(easeInBez, t, e, r, i, a)
                                    }

                                    function ease(t, e, r, i, a) {
                                        return applyEase(easeInOutBez, t, e, r, i, a)
                                    }

                                    function applyEase(t, e, r, i, a, s) {
                                        void 0 === a ? (a = r, s = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                                        var n = t(e);
                                        if ($bm_isInstanceOfArray(a)) {
                                            var o, h = a.length,
                                                l = createTypedArray("float32", h);
                                            for (o = 0; o < h; o += 1) l[o] = (s[o] - a[o]) * n + a[o];
                                            return l
                                        }
                                        return (s - a) * n + a
                                    }

                                    function nearestKey(t) {
                                        var e, r, i, a = data.k.length;
                                        if (data.k.length && "number" != typeof data.k[0])
                                            if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                                            else {
                                                for (e = 0; e < a - 1; e += 1) {
                                                    if (t === data.k[e].t) {
                                                        r = e + 1, i = data.k[e].t;
                                                        break
                                                    }
                                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                                                        break
                                                    }
                                                } - 1 === r && (r = e + 1, i = data.k[e].t)
                                            }
                                        else r = 0, i = 0;
                                        var s = {};
                                        return s.index = r, s.time = i / elem.comp.globalData.frameRate, s
                                    }

                                    function key(t) {
                                        var e, r, i;
                                        if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                        t -= 1, e = {
                                            time: data.k[t].t / elem.comp.globalData.frameRate,
                                            value: []
                                        };
                                        var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                        for (i = a.length, r = 0; r < i; r += 1) e[r] = a[r], e.value[r] = a[r];
                                        return e
                                    }

                                    function framesToTime(t, e) {
                                        return e || (e = elem.comp.globalData.frameRate), t / e
                                    }

                                    function timeToFrames(t, e) {
                                        return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                                    }

                                    function seedRandom(t) {
                                        BMMath.seedrandom(randSeed + t)
                                    }

                                    function sourceRectAtTime() {
                                        return elem.sourceRectAtTime()
                                    }

                                    function substring(t, e) {
                                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                                    }

                                    function substr(t, e) {
                                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                                    }

                                    function posterizeTime(t) {
                                        time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                                    }
                                    var index = elem.data.ind,
                                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                        parent, randSeed = Math.floor(1e6 * Math.random()),
                                        globalData = elem.globalData;

                                    function executeExpression(t) {
                                        return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                                    }
                                    return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                                }
                                return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
                            }(),
                            expressionHelpers = {
                                searchExpressions: function(t, e, r) {
                                    e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                                },
                                getSpeedAtTime: function(t) {
                                    var e = this.getValueAtTime(t),
                                        r = this.getValueAtTime(t + -.01),
                                        i = 0;
                                    if (e.length) {
                                        var a;
                                        for (a = 0; a < e.length; a += 1) i += Math.pow(r[a] - e[a], 2);
                                        i = 100 * Math.sqrt(i)
                                    } else i = 0;
                                    return i
                                },
                                getVelocityAtTime: function(t) {
                                    if (void 0 !== this.vel) return this.vel;
                                    var e, r, i = this.getValueAtTime(t),
                                        a = this.getValueAtTime(t + -.001);
                                    if (i.length)
                                        for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (a[r] - i[r]) / -.001;
                                    else e = (a - i) / -.001;
                                    return e
                                },
                                getValueAtTime: function(t) {
                                    return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                                },
                                getStaticValueAtTime: function() {
                                    return this.pv
                                },
                                setGroupProperty: function(t) {
                                    this.propertyGroup = t
                                }
                            };

                        function addPropertyDecorator() {
                            function t(t, e, r) {
                                if (!this.k || !this.keyframes) return this.pv;
                                t = t ? t.toLowerCase() : "";
                                var i, a, s, n, o, h = this.comp.renderedFrame,
                                    l = this.keyframes,
                                    p = l[l.length - 1].t;
                                if (h <= p) return this.pv;
                                if (r ? a = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (a = l[l.length - 1 - e].t)), "pingpong" === t) {
                                    if (Math.floor((h - a) / i) % 2 != 0) return this.getValueAtTime((i - (h - a) % i + a) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === t) {
                                        var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                            c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            m = this.getValueAtTime(((h - a) % i + a) / this.comp.globalData.frameRate, 0),
                                            d = Math.floor((h - a) / i);
                                        if (this.pv.length) {
                                            for (n = (o = new Array(f.length)).length, s = 0; s < n; s += 1) o[s] = (c[s] - f[s]) * d + m[s];
                                            return o
                                        }
                                        return (c - f) * d + m
                                    }
                                    if ("continue" === t) {
                                        var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1) o[s] = u[s] + (u[s] - y[s]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                            return o
                                        }
                                        return u + (h - p) / .001 * (u - y)
                                    }
                                }
                                return this.getValueAtTime(((h - a) % i + a) / this.comp.globalData.frameRate, 0)
                            }

                            function e(t, e, r) {
                                if (!this.k) return this.pv;
                                t = t ? t.toLowerCase() : "";
                                var i, a, s, n, o, h = this.comp.renderedFrame,
                                    l = this.keyframes,
                                    p = l[0].t;
                                if (h >= p) return this.pv;
                                if (r ? a = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (a = l[e].t) - p), "pingpong" === t) {
                                    if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
                                } else {
                                    if ("offset" === t) {
                                        var f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                            m = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0),
                                            d = Math.floor((p - h) / i) + 1;
                                        if (this.pv.length) {
                                            for (n = (o = new Array(f.length)).length, s = 0; s < n; s += 1) o[s] = m[s] - (c[s] - f[s]) * d;
                                            return o
                                        }
                                        return m - (c - f) * d
                                    }
                                    if ("continue" === t) {
                                        var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                            y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                        if (this.pv.length) {
                                            for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1) o[s] = u[s] + (u[s] - y[s]) * (p - h) / .001;
                                            return o
                                        }
                                        return u + (u - y) * (p - h) / .001
                                    }
                                }
                                return this.getValueAtTime((i - ((p - h) % i + p)) / this.comp.globalData.frameRate, 0)
                            }

                            function r(t, e) {
                                if (!this.k) return this.pv;
                                if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                                var r, i, a = this.comp.renderedFrame / this.comp.globalData.frameRate,
                                    s = a - t,
                                    n = e > 1 ? (a + t - s) / (e - 1) : 1,
                                    o = 0,
                                    h = 0;
                                for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                                    if (i = this.getValueAtTime(s + o * n), this.pv.length)
                                        for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
                                    else r += i;
                                    o += 1
                                }
                                if (this.pv.length)
                                    for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
                                else r /= e;
                                return r
                            }

                            function i(t) {
                                this._transformCachingAtTime || (this._transformCachingAtTime = {
                                    v: new Matrix
                                });
                                var e = this._transformCachingAtTime.v;
                                if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                                    var r = this.a.getValueAtTime(t);
                                    e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
                                }
                                if (this.appliedTransformations < 2) {
                                    var i = this.s.getValueAtTime(t);
                                    e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
                                }
                                if (this.sk && this.appliedTransformations < 3) {
                                    var a = this.sk.getValueAtTime(t),
                                        s = this.sa.getValueAtTime(t);
                                    e.skewFromAxis(-a * this.sk.mult, s * this.sa.mult)
                                }
                                if (this.r && this.appliedTransformations < 4) {
                                    var n = this.r.getValueAtTime(t);
                                    e.rotate(-n * this.r.mult)
                                } else if (!this.r && this.appliedTransformations < 4) {
                                    var o = this.rz.getValueAtTime(t),
                                        h = this.ry.getValueAtTime(t),
                                        l = this.rx.getValueAtTime(t),
                                        p = this.or.getValueAtTime(t);
                                    e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                                }
                                if (this.data.p && this.data.p.s) {
                                    var f = this.px.getValueAtTime(t),
                                        c = this.py.getValueAtTime(t);
                                    if (this.data.p.z) {
                                        var m = this.pz.getValueAtTime(t);
                                        e.translate(f * this.px.mult, c * this.py.mult, -m * this.pz.mult)
                                    } else e.translate(f * this.px.mult, c * this.py.mult, 0)
                                } else {
                                    var d = this.p.getValueAtTime(t);
                                    e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                                }
                                return e
                            }

                            function a() {
                                return this.v.clone(new Matrix)
                            }
                            var s = TransformPropertyFactory.getTransformProperty;
                            TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                                var n = s(t, e, r);
                                return n.dynamicProperties.length ? n.getValueAtTime = i.bind(n) : n.getValueAtTime = a.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
                            };
                            var n = PropertyFactory.getProp;
                            PropertyFactory.getProp = function(i, a, s, o, h) {
                                var l = n(i, a, s, o, h);
                                l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === a.a ? a.k.length : 0, l.propertyIndex = a.ix;
                                var p = 0;
                                return 0 !== s && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), l._cachingAtTime = {
                                    lastFrame: initialDefaultFrame,
                                    lastIndex: 0,
                                    value: p
                                }, expressionHelpers.searchExpressions(i, a, l), l.k && h.addDynamicProperty(l), l
                            };
                            var o = ShapePropertyFactory.getConstructorFunction(),
                                h = ShapePropertyFactory.getKeyframedConstructorFunction();

                            function l() {}
                            l.prototype = {
                                vertices: function(t, e) {
                                    this.k && this.getValue();
                                    var r, i = this.v;
                                    void 0 !== e && (i = this.getValueAtTime(e, 0));
                                    var a = i._length,
                                        s = i[t],
                                        n = i.v,
                                        o = createSizedArray(a);
                                    for (r = 0; r < a; r += 1) o[r] = "i" === t || "o" === t ? [s[r][0] - n[r][0], s[r][1] - n[r][1]] : [s[r][0], s[r][1]];
                                    return o
                                },
                                points: function(t) {
                                    return this.vertices("v", t)
                                },
                                inTangents: function(t) {
                                    return this.vertices("i", t)
                                },
                                outTangents: function(t) {
                                    return this.vertices("o", t)
                                },
                                isClosed: function() {
                                    return this.v.c
                                },
                                pointOnPath: function(t, e) {
                                    var r = this.v;
                                    void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                                    for (var i, a = this._segmentsLength, s = a.lengths, n = a.totalLength * t, o = 0, h = s.length, l = 0; o < h;) {
                                        if (l + s[o].addedLength > n) {
                                            var p = o,
                                                f = r.c && o === h - 1 ? 0 : o + 1,
                                                c = (n - l) / s[o].addedLength;
                                            i = bez.getPointInSegment(r.v[p], r.v[f], r.o[p], r.i[f], c, s[o]);
                                            break
                                        }
                                        l += s[o].addedLength, o += 1
                                    }
                                    return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
                                },
                                vectorOnPath: function(t, e, r) {
                                    1 == t ? t = this.v.c : 0 == t && (t = .999);
                                    var i = this.pointOnPath(t, e),
                                        a = this.pointOnPath(t + .001, e),
                                        s = a[0] - i[0],
                                        n = a[1] - i[1],
                                        o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
                                    return 0 === o ? [0, 0] : "tangent" === r ? [s / o, n / o] : [-n / o, s / o]
                                },
                                tangentOnPath: function(t, e) {
                                    return this.vectorOnPath(t, e, "tangent")
                                },
                                normalOnPath: function(t, e) {
                                    return this.vectorOnPath(t, e, "normal")
                                },
                                setGroupProperty: expressionHelpers.setGroupProperty,
                                getValueAtTime: expressionHelpers.getStaticValueAtTime
                            }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
                                return this._cachingAtTime || (this._cachingAtTime = {
                                    shapeValue: shapePool.clone(this.pv),
                                    lastIndex: 0,
                                    lastTime: initialDefaultFrame
                                }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                            }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
                            var p = ShapePropertyFactory.getShapeProp;
                            ShapePropertyFactory.getShapeProp = function(t, e, r, i, a) {
                                var s = p(t, e, r, i, a);
                                return s.propertyIndex = e.ix, s.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
                            }
                        }

                        function initialize$1() {
                            addPropertyDecorator()
                        }

                        function addDecorator() {
                            TextProperty.prototype.getExpressionValue = function(t, e) {
                                var r = this.calculateExpression(e);
                                if (t.t !== r) {
                                    var i = {};
                                    return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
                                }
                                return t
                            }, TextProperty.prototype.searchProperty = function() {
                                var t = this.searchKeyframes(),
                                    e = this.searchExpressions();
                                return this.kf = t || e, this.kf
                            }, TextProperty.prototype.searchExpressions = function() {
                                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                            }
                        }

                        function initialize() {
                            addDecorator()
                        }

                        function SVGComposableEffect() {}
                        SVGComposableEffect.prototype = {
                            createMergeNode: function(t, e) {
                                var r, i, a = createNS("feMerge");
                                for (a.setAttribute("result", t), i = 0; i < e.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", e[i]), a.appendChild(r), a.appendChild(r);
                                return a
                            }
                        };
                        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                        function SVGTintFilter(t, e, r, i, a) {
                            this.filterManager = e;
                            var s = createNS("feColorMatrix");
                            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = s, s.setAttribute("result", i + "_tint_1"), t.appendChild(s), (s = createNS("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i + "_tint_2"), t.appendChild(s), this.matrixFilter = s;
                            var n = this.createMergeNode(i, [a, i + "_tint_1", i + "_tint_2"]);
                            t.appendChild(n)
                        }

                        function SVGFillFilter(t, e, r, i) {
                            this.filterManager = e;
                            var a = createNS("feColorMatrix");
                            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i), t.appendChild(a), this.matrixFilter = a
                        }

                        function SVGStrokeEffect(t, e, r) {
                            this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
                        }

                        function SVGTritoneFilter(t, e, r, i) {
                            this.filterManager = e;
                            var a = createNS("feColorMatrix");
                            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
                            var s = createNS("feComponentTransfer");
                            s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), this.matrixFilter = s;
                            var n = createNS("feFuncR");
                            n.setAttribute("type", "table"), s.appendChild(n), this.feFuncR = n;
                            var o = createNS("feFuncG");
                            o.setAttribute("type", "table"), s.appendChild(o), this.feFuncG = o;
                            var h = createNS("feFuncB");
                            h.setAttribute("type", "table"), s.appendChild(h), this.feFuncB = h, t.appendChild(s)
                        }

                        function SVGProLevelsFilter(t, e, r, i) {
                            this.filterManager = e;
                            var a = this.filterManager.effectElements,
                                s = createNS("feComponentTransfer");
                            (a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", s)), (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", s)), (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", s)), (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(s)), (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && ((s = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("result", i), t.appendChild(s), this.feFuncRComposed = this.createFeFunc("feFuncR", s), this.feFuncGComposed = this.createFeFunc("feFuncG", s), this.feFuncBComposed = this.createFeFunc("feFuncB", s))
                        }

                        function SVGDropShadowEffect(t, e, r, i, a) {
                            var s = e.container.globalData.renderConfig.filterSize,
                                n = e.data.fs || s;
                            t.setAttribute("x", n.x || s.x), t.setAttribute("y", n.y || s.y), t.setAttribute("width", n.width || s.width), t.setAttribute("height", n.height || s.height), this.filterManager = e;
                            var o = createNS("feGaussianBlur");
                            o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
                            var h = createNS("feOffset");
                            h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
                            var l = createNS("feFlood");
                            l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
                            var p = createNS("feComposite");
                            p.setAttribute("in", i + "_drop_shadow_3"), p.setAttribute("in2", i + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(p);
                            var f = this.createMergeNode(i, [i + "_drop_shadow_4", a]);
                            t.appendChild(f)
                        }
                        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = this.filterManager.effectElements[0].p.v,
                                    r = this.filterManager.effectElements[1].p.v,
                                    i = this.filterManager.effectElements[2].p.v / 100;
                                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
                            }
                        }, SVGFillFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = this.filterManager.effectElements[2].p.v,
                                    r = this.filterManager.effectElements[6].p.v;
                                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                            }
                        }, SVGStrokeEffect.prototype.initialize = function() {
                            var t, e, r, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                            for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                                p: t,
                                m: r
                            });
                            if (3 === this.filterManager.effectElements[10].p.v) {
                                var s = createNS("mask"),
                                    n = createElementID();
                                s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                                var o = createNS("g");
                                for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); a[0];) o.appendChild(a[0]);
                                this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
                            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                                if (2 === this.filterManager.effectElements[10].p.v)
                                    for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;) this.elem.layerElement.removeChild(a[0]);
                                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                            }
                            this.initialized = !0, this.pathMasker = e
                        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                            var e;
                            this.initialized || this.initialize();
                            var r, i, a = this.paths.length;
                            for (e = 0; e < a; e += 1)
                                if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                                    var s;
                                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                        var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                            o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                            h = i.getTotalLength();
                                        s = "0 0 0 " + h * n + " ";
                                        var l, p = h * (o - n),
                                            f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                            c = Math.floor(p / f);
                                        for (l = 0; l < c; l += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                        s += "0 " + 10 * h + " 0 0"
                                    } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                                    i.setAttribute("stroke-dasharray", s)
                                }
                            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                                var m = this.filterManager.effectElements[3].p.v;
                                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * m[0]) + "," + bmFloor(255 * m[1]) + "," + bmFloor(255 * m[2]) + ")")
                            }
                        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = this.filterManager.effectElements[0].p.v,
                                    r = this.filterManager.effectElements[1].p.v,
                                    i = this.filterManager.effectElements[2].p.v,
                                    a = i[0] + " " + r[0] + " " + e[0],
                                    s = i[1] + " " + r[1] + " " + e[1],
                                    n = i[2] + " " + r[2] + " " + e[2];
                                this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n)
                            }
                        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                            var r = createNS(t);
                            return r.setAttribute("type", "table"), e.appendChild(r), r
                        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, a) {
                            for (var s, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                                    length: 256
                                }), f = 0, c = a - i, m = e - t; o <= 256;) n = (s = o / 256) <= h ? m < 0 ? a : i : s >= l ? m < 0 ? i : a : i + c * Math.pow((s - t) / m, 1 / r), p[f] = n, f += 1, o += 256 / 255;
                            return p.join(" ")
                        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e, r = this.filterManager.effectElements;
                                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                            }
                        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                                    var e = this.filterManager.effectElements[0].p.v;
                                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                                }
                                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                                    var r = this.filterManager.effectElements[3].p.v,
                                        i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                        a = r * Math.cos(i),
                                        s = r * Math.sin(i);
                                    this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", s)
                                }
                            }
                        };
                        var _svgMatteSymbols = [];

                        function SVGMatte3Effect(t, e, r) {
                            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
                        }

                        function SVGGaussianBlurEffect(t, e, r, i) {
                            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                            var a = createNS("feGaussianBlur");
                            a.setAttribute("result", i), t.appendChild(a), this.feGaussianBlur = a
                        }
                        return SVGMatte3Effect.prototype.findSymbol = function(t) {
                            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                                e += 1
                            }
                            return null
                        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                            var r = t.layerElement.parentNode;
                            if (r) {
                                for (var i, a = r.children, s = 0, n = a.length; s < n && a[s] !== t.layerElement;) s += 1;
                                s <= n - 2 && (i = a[s + 1]);
                                var o = createNS("use");
                                o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
                            }
                        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                            if (!this.findSymbol(e)) {
                                var r = createElementID(),
                                    i = createNS("mask");
                                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                                var a = t.globalData.defs;
                                a.appendChild(i);
                                var s = createNS("symbol");
                                s.setAttribute("id", r), this.replaceInParent(e, r), s.appendChild(e.layerElement), a.appendChild(s);
                                var n = createNS("use");
                                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
                            }
                            t.setMatte(e.layerId)
                        }, SVGMatte3Effect.prototype.initialize = function() {
                            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
                            this.initialized = !0
                        }, SVGMatte3Effect.prototype.renderFrame = function() {
                            this.initialized || this.initialize()
                        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                            if (t || this.filterManager._mdf) {
                                var e = .3 * this.filterManager.effectElements[0].p.v,
                                    r = this.filterManager.effectElements[1].p.v,
                                    i = 3 == r ? 0 : e,
                                    a = 2 == r ? 0 : e;
                                this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
                                var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                                this.feGaussianBlur.setAttribute("edgeMode", s)
                            }
                        }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
                    }, module.exports = e())
                })),
                REACT_LOTTIE_PLAYER_VERSION = "3.5.3",
                LOTTIE_WEB_VERSION = "^5.10.2",
                PlayerState, PlayerEvent, t;

            function parseSrc(t) {
                if ("object" == typeof t) return t;
                try {
                    return JSON.parse(t)
                } catch (t) {}
                try {
                    return new URL(t).toString()
                } catch (t) {}
                return t
            }
            t = PlayerState || (PlayerState = {}), t.Loading = "loading", t.Playing = "playing", t.Paused = "paused", t.Stopped = "stopped", t.Frozen = "frozen", t.Error = "error",
                function(t) {
                    t.Load = "load", t.InstanceSaved = "instanceSaved", t.Error = "error", t.Ready = "ready", t.Play = "play", t.Pause = "pause", t.Stop = "stop", t.Freeze = "freeze", t.Loop = "loop", t.Complete = "complete", t.Frame = "frame"
                }(PlayerEvent || (PlayerEvent = {}));
            var defaultOptions = {
                    clearCanvas: !1,
                    hideOnTransparent: !0,
                    progressiveLoad: !0
                },
                Player = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.container = null, r.unmounted = !1, r.handleBgChange = function(t) {
                            r.setState({
                                background: t
                            })
                        }, r.triggerDownload = function(t, e) {
                            var r = document.createElement("a");
                            r.href = t, r.download = e, document.body.appendChild(r), r.click(), document.body.removeChild(r)
                        }, r.snapshot = function(t) {
                            var e;
                            void 0 === t && (t = !0);
                            var i = r.props.id ? r.props.id : "lottie",
                                a = document.getElementById(i);
                            if ("svg" === r.props.renderer) {
                                if (a) {
                                    var s = a.querySelector("svg");
                                    if (s) {
                                        var n = (new XMLSerializer).serializeToString(s);
                                        e = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(n)
                                    }
                                }
                                t && r.triggerDownload(e, "snapshot.svg")
                            } else if ("canvas" === r.props.renderer) {
                                if (a) {
                                    var o = a.querySelector("canvas");
                                    o && (e = o.toDataURL("image/png"))
                                }
                                t && r.triggerDownload(e, "snapshot.png")
                            }
                            return e
                        }, "undefined" != typeof window && (window.lottie = lottie), r.state = {
                            animationData: null,
                            background: "transparent",
                            containerRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(),
                            debug: !0,
                            instance: null,
                            playerState: PlayerState.Loading,
                            seeker: 0
                        }, r
                    }
                    return __extends(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return __awaiter(this, void 0, void 0, (function() {
                            return __generator(this, (function(r) {
                                return t.background !== e.background ? [2, {
                                    background: t.background
                                }] : [2, null]
                            }))
                        }))
                    }, e.prototype.getVersions = function() {
                        return {
                            lottieWebVersion: LOTTIE_WEB_VERSION,
                            lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION
                        }
                    }, e.prototype.componentDidMount = function() {
                        return __awaiter(this, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.unmounted ? [3, 2] : [4, this.createLottie()];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.componentWillUnmount = function() {
                        this.unmounted = !0, this.state.instance && this.state.instance.destroy()
                    }, e.prototype.componentDidUpdate = function(t) {
                        return __awaiter(this, void 0, void 0, (function() {
                            return __generator(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.props.src === t.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.render = function() {
                        var t = this,
                            e = this.props,
                            r = e.children,
                            i = e.loop,
                            a = e.style,
                            s = e.onBackgroundChange,
                            n = e.className,
                            o = this.state,
                            h = o.animationData,
                            l = o.instance,
                            p = o.playerState,
                            f = o.seeker,
                            c = o.debug,
                            m = o.background;
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-player-container"
                        }, this.state.playerState === PlayerState.Error ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-error"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
                            "aria-label": "error-symbol",
                            role: "img"
                        }, "⚠️")) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            id: this.props.id ? this.props.id : "lottie",
                            ref: function(e) {
                                return t.container = e
                            },
                            style: __assign({
                                background: m,
                                margin: "0 auto",
                                outline: "none",
                                overflow: "hidden"
                            }, a),
                            className: n
                        }), react__WEBPACK_IMPORTED_MODULE_0__.Children.map(r, (function(e) {
                            return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(e) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(e, {
                                animationData: h,
                                background: m,
                                debug: c,
                                instance: l,
                                loop: i,
                                pause: function() {
                                    return t.pause()
                                },
                                play: function() {
                                    return t.play()
                                },
                                playerState: p,
                                seeker: f,
                                setBackground: function(e) {
                                    t.setState({
                                        background: e
                                    }), "function" == typeof s && s(e)
                                },
                                setSeeker: function(e, r) {
                                    return t.setSeeker(e, r)
                                },
                                stop: function() {
                                    return t.stop()
                                },
                                toggleDebug: function() {
                                    return t.toggleDebug()
                                },
                                setLoop: function(e) {
                                    return t.setLoop(e)
                                },
                                colorChangedEvent: function(e) {
                                    t.handleBgChange(e)
                                },
                                snapshot: function() {
                                    t.snapshot()
                                }
                            }) : null
                        })))
                    }, e.prototype.toggleDebug = function() {
                        this.setState({
                            debug: !this.state.debug
                        })
                    }, e.prototype.createLottie = function() {
                        return __awaiter(this, void 0, void 0, (function() {
                            var t, e, r, i, a, s, n, o, h, l, p, f, c, m, d = this;
                            return __generator(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (t = this.props, e = t.autoplay, r = t.direction, i = t.loop, a = t.lottieRef, s = t.renderer, n = t.speed, o = t.src, h = t.background, l = t.rendererSettings, p = t.hover, f = this.state.instance, !o || !this.container) return [2];
                                        u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 5, , 6]), "string" != typeof(c = parseSrc(o)) ? [3, 4] : [4, fetch(c).catch((function() {
                                            throw d.setState({
                                                playerState: PlayerState.Error
                                            }), d.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                                        }))];
                                    case 2:
                                        return [4, u.sent().json().catch((function() {
                                            throw d.setState({
                                                playerState: PlayerState.Error
                                            }), d.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.")
                                        }))];
                                    case 3:
                                        c = u.sent(), u.label = 4;
                                    case 4:
                                        return f && f.destroy(), m = lottie.loadAnimation({
                                            rendererSettings: l || defaultOptions,
                                            animationData: c,
                                            autoplay: e || !1,
                                            container: this.container,
                                            loop: i || !1,
                                            renderer: s
                                        }), n && m.setSpeed(n), this.setState({
                                            animationData: c
                                        }), this.setState({
                                            instance: m
                                        }, (function() {
                                            d.triggerEvent(PlayerEvent.InstanceSaved), "function" == typeof a && a(m), e && d.play()
                                        })), m.addEventListener("enterFrame", (function() {
                                            d.triggerEvent(PlayerEvent.Frame), d.setState({
                                                seeker: Math.floor(m.currentFrame)
                                            })
                                        })), m.addEventListener("DOMLoaded", (function() {
                                            d.triggerEvent(PlayerEvent.Load)
                                        })), m.addEventListener("data_ready", (function() {
                                            d.triggerEvent(PlayerEvent.Ready)
                                        })), m.addEventListener("data_failed", (function() {
                                            d.setState({
                                                playerState: PlayerState.Error
                                            }), d.triggerEvent(PlayerEvent.Error)
                                        })), m.addEventListener("loopComplete", (function() {
                                            d.triggerEvent(PlayerEvent.Loop)
                                        })), m.addEventListener("complete", (function() {
                                            d.triggerEvent(PlayerEvent.Complete), d.setState({
                                                playerState: PlayerState.Paused
                                            }), d.props.keepLastFrame && !d.props.loop || d.setSeeker(0)
                                        })), this.container && (this.container.addEventListener("mouseenter", (function() {
                                            p && d.state.playerState !== PlayerState.Playing && (d.props.keepLastFrame && d.stop(), d.play())
                                        })), this.container.addEventListener("mouseleave", (function() {
                                            p && d.state.playerState === PlayerState.Playing && d.stop()
                                        }))), n && this.setPlayerSpeed(n), r && this.setPlayerDirection(r), h && this.setState({
                                            background: h
                                        }), [3, 6];
                                    case 5:
                                        return u.sent(), this.setState({
                                            playerState: PlayerState.Error
                                        }), this.triggerEvent(PlayerEvent.Error), [3, 6];
                                    case 6:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.play = function() {
                        var t = this.state.instance;
                        t && (this.triggerEvent(PlayerEvent.Play), t.play(), this.setState({
                            playerState: PlayerState.Playing
                        }))
                    }, e.prototype.pause = function() {
                        var t = this.state.instance;
                        t && (this.triggerEvent(PlayerEvent.Pause), t.pause(), this.setState({
                            playerState: PlayerState.Paused
                        }))
                    }, e.prototype.stop = function() {
                        var t = this.state.instance;
                        t && (this.triggerEvent(PlayerEvent.Stop), t.stop(), this.setState({
                            playerState: PlayerState.Stopped
                        }))
                    }, e.prototype.setPlayerSpeed = function(t) {
                        var e = this.state.instance;
                        e && e.setSpeed(t)
                    }, e.prototype.setPlayerDirection = function(t) {
                        var e = this.state.instance;
                        e && e.setDirection(t)
                    }, e.prototype.setSeeker = function(t, e) {
                        void 0 === e && (e = !1);
                        var r = this.state,
                            i = r.instance,
                            a = r.playerState;
                        i && (e && a === PlayerState.Playing ? i.goToAndPlay(t, !0) : (i.goToAndStop(t, !0), this.triggerEvent(PlayerEvent.Pause), this.setState({
                            playerState: PlayerState.Paused
                        })))
                    }, e.prototype.setLoop = function(t) {
                        var e = this.state.instance;
                        e && (e.loop = t, this.setState({
                            instance: e
                        }))
                    }, e.prototype.triggerEvent = function(t) {
                        var e = this.props.onEvent;
                        e && e(t)
                    }, e.defaultProps = {
                        loop: !1
                    }, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

            function styleInject(t, e) {
                void 0 === e && (e = {});
                var r = e.insertAt;
                if (t && "undefined" != typeof document) {
                    var i = document.head || document.getElementsByTagName("head")[0],
                        a = document.createElement("style");
                    a.type = "text/css", "top" === r && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
                }
            }
            var css_248z = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n",
                stylesheet = ".lf-progress {\n  -webkit-appearance: none;\n  -moz-apperance: none;\n  width: 100%;\n  /* margin: 0 10px; */\n  height: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.lf-progress:focus {\n  outline: none;\n  border: none;\n}\n.lf-progress::-moz-range-track {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n}\n.lf-progress::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-moz-range-thumb {\n  -moz-appearance: none !important;\n  height: 13px;\n  width: 13px;\n  border: 0;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress::-ms-track {\n  width: 100%;\n  height: 3px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.lf-progress::-ms-fill-lower {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-fill-upper {\n  background: #ccc;\n  border-radius: 3px;\n}\n.lf-progress::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: #0fccce;\n  cursor: pointer;\n}\n.lf-progress:focus::-ms-fill-lower {\n  background: #ccc;\n}\n.lf-progress:focus::-ms-fill-upper {\n  background: #ccc;\n}\n.lf-player-container :focus {\n  outline: 0;\n}\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-player-btn-container {\n  display: flex;\n  align-items: center;\n}\n.lf-player-btn {\n  cursor: pointer;\n  fill: #999;\n  width: 14px;\n}\n\n.lf-player-btn.active {\n  fill: #555;\n}\n\n.lf-popover {\n  position: relative;\n}\n\n.lf-popover-content {\n  display: inline-block;\n  position: absolute;\n  background-color: #ffffff;\n  opacity: 1;\n\n  transform: translate(0, -10px);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n  padding: 10px;\n}\n\n.lf-popover-content.hidden {\n  opacity: 0;\n  visibility: hidden;\n  transform: translate(0, 0px);\n}\n\n.lf-arrow {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  bottom: -9px;\n  border-style: solid;\n  border-width: 10px 10px 0px 10px;\n}\n\n.lf-left-align,\n.lf-left-align .lfarrow {\n  left: 0;\n  right: unset;\n}\n\n.lf-right-align,\n.lf-right-align .lf-arrow {\n  right: 0;\n  left: unset;\n}\n\n.lf-text-input {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 3px;\n  width: 60px;\n  margin: 0;\n}\n\n.lf-color-picker {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 90px;\n}\n\n.lf-color-selectors {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.lf-color-component {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n}\n\n.lf-color-component strong {\n  width: 40px;\n}\n\n.lf-color-component input[type='range'] {\n  margin: 0 0 0 10px;\n}\n\n.lf-color-component input[type='number'] {\n  width: 50px;\n  margin: 0 0 0 10px;\n}\n\n.lf-color-preview {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 5px;\n}\n\n.lf-preview {\n  height: 60px;\n  width: 60px;\n}\n\n.lf-popover-snapshot {\n  width: 150px;\n}\n.lf-popover-snapshot h5 {\n  margin: 5px 0 10px 0;\n  font-size: 0.75rem;\n}\n.lf-popover-snapshot a {\n  display: block;\n  text-decoration: none;\n}\n.lf-popover-snapshot a:before {\n  content: '⥼';\n  margin-right: 5px;\n}\n.lf-popover-snapshot .lf-note {\n  display: block;\n  margin-top: 10px;\n  color: #999;\n}\n.lf-player-controls > div {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.lf-player-controls > div:first-child {\n  margin-left: 0px;\n}\n.lf-player-controls > div:last-child {\n  margin-right: 0px;\n}\n";
            styleInject(css_248z);
            var ColorPicker = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            red: 0,
                            green: 0,
                            blue: 0,
                            rgba: null,
                            hex: "#000000",
                            colorComponents: []
                        }, e.handleChange = function(t, r) {
                            if ("r" === t) {
                                var i = "#" + (256 | r).toString(16).slice(1) + (256 | e.state.green).toString(16).slice(1) + (256 | e.state.blue).toString(16).slice(1);
                                e.setState({
                                    hex: i
                                })
                            } else "g" === t ? (i = "#" + (256 | e.state.red).toString(16).slice(1) + (256 | r).toString(16).slice(1) + (256 | e.state.blue).toString(16).slice(1), e.setState({
                                hex: i
                            })) : "b" === t && (i = "#" + (256 | e.state.red).toString(16).slice(1) + (256 | e.state.green).toString(16).slice(1) + (256 | r).toString(16).slice(1), e.setState({
                                hex: i
                            }))
                        }, e.parseColor = function(t) {
                            var r;
                            if ("string" == typeof t) {
                                if ("#" === t[0]) {
                                    var i = 4 === t.length ? [t.slice(1, 2), t.slice(2, 3), t.slice(3, 4)].map((function(t) {
                                        return parseInt("" + t + t, 16)
                                    })) : [t.slice(1, 3), t.slice(3, 5), t.slice(5, 7)].map((function(t) {
                                        return parseInt(t, 16)
                                    }));
                                    e.setState({
                                        colorComponents: i
                                    })
                                } else t.startsWith("rgb") && void 0 !== (i = null === (r = t.match(/\d+/g)) || void 0 === r ? void 0 : r.map((function(t) {
                                    return parseInt(t)
                                }))) && e.setState({
                                    colorComponents: i
                                });
                                e.state.colorComponents.length && (e.setState({
                                    red: e.state.colorComponents[0]
                                }), e.setState({
                                    green: e.state.colorComponents[1]
                                }), e.setState({
                                    blue: e.state.colorComponents[2]
                                }))
                            }
                        }, e
                    }
                    return __extends(e, t), e.prototype.componentDidUpdate = function(t, e) {
                        return this.props.colorChangedEvent && this.state.hex !== e.hex && this.props.colorChangedEvent(this.state.hex), !0
                    }, e.prototype.render = function() {
                        var t = this;
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-picker"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-selectors"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-component"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Red"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            type: "range",
                            min: "0",
                            max: "255",
                            value: this.state.red,
                            onChange: function(e) {
                                t.setState({
                                    red: e.target.value
                                }), t.handleChange("r", e.target.value)
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "number",
                            min: "0",
                            max: "255",
                            value: this.state.red,
                            onChange: function(e) {
                                t.setState({
                                    red: e.target.value
                                }), t.handleChange("r", e.target.value)
                            }
                        })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-component"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Green"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            type: "range",
                            min: "0",
                            max: "255",
                            value: this.state.green,
                            onChange: function(e) {
                                t.setState({
                                    green: e.target.value
                                }), t.handleChange("g", e.target.value)
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "number",
                            min: "0",
                            max: "255",
                            value: this.state.green,
                            onChange: function(e) {
                                t.setState({
                                    green: e.target.value
                                }), t.handleChange("g", e.target.value)
                            }
                        })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-component"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Blue"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            type: "range",
                            min: "0",
                            max: "255",
                            value: this.state.blue,
                            onChange: function(e) {
                                t.setState({
                                    blue: e.target.value
                                }), t.handleChange("b", e.target.value)
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "number",
                            min: "0",
                            max: "255",
                            value: this.state.blue,
                            onChange: function(e) {
                                t.setState({
                                    blue: e.target.value
                                }), t.handleChange("b", e.target.value)
                            }
                        }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-color-preview"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-preview",
                            style: {
                                background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"
                            }
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            className: "lf-text-input",
                            type: "text",
                            value: this.state.hex,
                            onChange: function(e) {
                                t.setState({
                                    hex: e.target.value
                                }), t.parseColor(e.target.value)
                            }
                        }))))
                    }, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                Popover = function(t) {
                    var e = t.children,
                        r = t.icon,
                        i = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                        a = i[0],
                        s = i[1],
                        n = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                        o = n[0],
                        h = n[1],
                        l = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
                        p = l[0],
                        f = l[1],
                        c = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
                        m = c[0],
                        d = c[1];
                    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function() {
                        if (a && o) {
                            var t = a.getBoundingClientRect(),
                                e = o.getBoundingClientRect(),
                                r = t.left + e.width > window.innerWidth ? -1 : 0;
                            f(r)
                        }
                    }), [p, o, a]), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        className: "lf-popover",
                        onMouseOver: function() {
                            d(!0)
                        },
                        onMouseLeave: function() {
                            d(!1)
                        },
                        ref: function(t) {
                            s(t)
                        }
                    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        className: " lf-player-btn"
                    }, r), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        className: "lf-popover-content",
                        ref: function(t) {
                            h(t)
                        },
                        style: {
                            bottom: "22px",
                            right: "0px",
                            zIndex: 2,
                            visibility: m ? "visible" : "hidden"
                        }
                    }, e))
                },
                Seeker = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.inputRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef(), r.handleChange = function() {
                            return function(t) {
                                var e = t.target.value,
                                    i = Math.floor(e / 100 * r.props.max);
                                r.props.onChange(i)
                            }
                        }, r.state = {
                            value: 0
                        }, r
                    }
                    return __extends(e, t), e.prototype.render = function() {
                        var t = this.props.value / this.props.max * 100,
                            e = {
                                backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + t + "%, rgba(15, 204, 206, 0.4)), color-stop(" + t + "%, #DAE1E7))"
                            },
                            r = {
                                position: "absolute",
                                left: 0,
                                marginTop: "8px",
                                width: "20px",
                                display: "block",
                                border: "0px",
                                backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                                color: this.props.darkTheme ? "#B9B9B9" : "#555",
                                padding: "2px",
                                textAlign: "center",
                                borderRadius: "3px",
                                fontSize: "8px",
                                fontWeight: "bold"
                            },
                            i = {
                                position: "absolute",
                                right: 0,
                                marginTop: "8px",
                                width: "20px",
                                display: "block",
                                border: "0px",
                                backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)",
                                color: this.props.darkTheme ? "#B9B9B9" : "#555",
                                padding: "2px",
                                textAlign: "center",
                                borderRadius: "3px",
                                fontSize: "8px",
                                fontWeight: "bold"
                            };
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%",
                                marginRight: "5px",
                                marginLeft: "5px",
                                position: "relative"
                            }
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            ref: this.inputRef,
                            id: "track",
                            className: "lf-progress",
                            name: "progress",
                            "aria-label": "progress",
                            type: "range",
                            min: "0",
                            max: "100",
                            step: "0.1",
                            value: t,
                            onInput: this.handleChange(),
                            onChange: this.handleChange(),
                            style: e
                        }), this.props.showLabels && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between"
                            }
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: r
                        }, this.props.min), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: i
                        }, this.props.max)))
                    }, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component),
                ControlButtonStyle = {
                    display: "inline-flex",
                    cursor: "pointer"
                },
                Controls = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this;
                        return r.state = {
                            activeFrame: 0,
                            mouseDown: !1
                        }, r
                    }
                    return __extends(e, t), e.prototype.render = function() {
                        var t = this,
                            e = this.props,
                            r = e.instance,
                            i = e.playerState,
                            a = e.seeker,
                            s = e.setLoop,
                            n = e.setSeeker,
                            o = e.play,
                            h = e.pause,
                            l = e.stop,
                            p = e.visible,
                            f = e.buttons;
                        if (!r) return null;
                        if (!p) return null;
                        var c = !f || f.includes("play"),
                            m = !f || f.includes("stop"),
                            d = !f || f.includes("repeat"),
                            u = !f || f.includes("frame"),
                            y = !f || f.includes("background"),
                            g = !f || f.includes("snapshot"),
                            v = {
                                width: 14,
                                height: 14,
                                viewBox: "0 0 24 24"
                            },
                            b = Math.round(r.currentFrame);
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            className: "lf-player-controls",
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                height: "60px",
                                alignItems: "center",
                                backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff",
                                paddingLeft: "10px",
                                paddingRight: "10px"
                            }
                        }, c && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            role: "button",
                            "aria-label": i === PlayerState.Playing ? PlayerEvent.Pause : PlayerEvent.Play,
                            tabIndex: 0,
                            onClick: function() {
                                i === PlayerState.Playing ? "function" == typeof h && h() : "function" == typeof o && o()
                            },
                            onKeyDown: function() {
                                i === PlayerState.Playing ? "function" == typeof h && h() : "function" == typeof o && o()
                            },
                            className: "lf-player-btn",
                            style: ControlButtonStyle
                        }, i === PlayerState.Playing ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, v), react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                            height: "22.9",
                            rx: "1.9",
                            width: "7.6",
                            x: "14",
                            y: ".5"
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                            height: "22.9",
                            rx: "1.9",
                            width: "7.6",
                            x: "2",
                            y: ".5"
                        })) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, v), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z"
                        }))), m && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            tabIndex: 0,
                            role: "button",
                            "aria-label": PlayerEvent.Stop,
                            onClick: function() {
                                return l && l()
                            },
                            onKeyDown: function() {
                                return l && l()
                            },
                            className: i === PlayerState.Stopped ? "lf-player-btn active" : "lf-player-btn",
                            style: ControlButtonStyle
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, v), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333\n            22H3.667A1.67 1.67 0 0 1 2 20.333z"
                        }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement(Seeker, {
                            min: 0,
                            step: 1,
                            max: r ? r.totalFrames : 1,
                            value: a || 0,
                            onChange: function(e) {
                                n && t.setState({
                                    activeFrame: e
                                }, (function() {
                                    n(e, !1)
                                }))
                            },
                            onChangeEnd: function(e) {
                                n && t.setState({
                                    activeFrame: e
                                }, (function() {
                                    n(e, !1)
                                }))
                            },
                            showLabels: this.props.showLabels,
                            darkTheme: this.props.darkTheme
                        }), u && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            role: "button",
                            className: "lf-player-btn-container"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
                            style: {
                                outline: "none",
                                border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid",
                                borderRadius: "3px",
                                width: "40px",
                                textAlign: "center",
                                backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff",
                                color: this.props.darkTheme ? "#B9B9B9" : "#999",
                                fontSize: "0.7rem",
                                padding: "0",
                                fontFamily: "inherit"
                            },
                            type: "text",
                            value: b,
                            readOnly: !0
                        })), d && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            role: "button",
                            "aria-label": PlayerEvent.Loop,
                            tabIndex: 0,
                            onClick: function() {
                                r && s && s(!r.loop)
                            },
                            onKeyDown: function() {
                                r && s && s(!r.loop)
                            },
                            className: r.loop ? "lf-player-btn active" : "lf-player-btn",
                            style: ControlButtonStyle
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, v), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116\n            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0\n            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025\n            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0\n            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115\n            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z",
                            stroke: "#8795A1",
                            strokeWidth: ".26"
                        }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                            d: "M11.1482\n            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898\n            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347\n            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014\n            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453\n            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368\n            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671\n            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442\n            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z",
                            fill: "#8795A1",
                            stroke: "#8795A1",
                            strokeWidth: ".26"
                        }))), y && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popover, {
                            icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, v), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                d: "M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0\n            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1\n            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0\n            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6\n            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z"
                            }))
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            slot: "content",
                            className: "lf-popover popover-background"
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColorPicker, {
                            colorChangedEvent: this.props.colorChangedEvent
                        }))), g && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popover, {
                            icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({}, v), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                clipRule: "evenodd",
                                d: "M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983\n              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0\n              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z",
                                fillRule: "evenodd"
                            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z"
                            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
                                cx: "7.444",
                                cy: "6.513",
                                r: "2.032"
                            }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
                                d: "M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0\n              01-.803.804H9.562a1.061 1.061 0 100 2.123z",
                                stroke: "#8795a1",
                                strokeWidth: ".215"
                            }))
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            slot: "content",
                            className: "lf-popover lf-popover-snapshot",
                            onWheel: function(t) {
                                n && n(b + (t.deltaY > 0 ? -1 : 1), !1)
                            }
                        }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Frame ", b), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                cursor: "pointer",
                                color: "#0FCCCE"
                            },
                            onClick: this.props.snapshot
                        }, "Download SVG"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                            style: {
                                cursor: "pointer",
                                color: "#0FCCCE"
                            },
                            onClick: this.props.snapshot
                        }, "Download PNG"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
                            className: "lf-note"
                        }, "Scroll with mousewheel to find exact frame"))))
                    }, e
                }(react__WEBPACK_IMPORTED_MODULE_0__.Component)
        }
    }
]);
//# sourceMappingURL=2fbf9dd2-ef396f9a726da4c2ceb6.js.map