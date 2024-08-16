"use strict";
(self.webpackChunkgatsby_mxp_project = self.webpackChunkgatsby_mxp_project || []).push([
    [607], {
        89817: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return s
                }
            });
            var r = n(54506),
                o = n(96540),
                i = n(121);
            var u = n(64810),
                a = n(68154);
            const l = t => t.split("?")[0],
                c = () => o.createElement(a.m, null, o.createElement(u.eF, {
                    id: "compound-key-tracking",
                    src: "https://s3-us-west-2.amazonaws.com/assets.creative-strategies/compound-key-tracking-v103.js"
                }));
            var s = t => {
                var e, n, u, a, s, f, v, d, m, p, g, y, h, b, w, x, S, E;
                let {
                    formId: k,
                    marketoFollowUpUrl: j,
                    marketoInstance: O,
                    fieldDefaults: _,
                    variant: N,
                    header: P,
                    directions: T,
                    sideImage: F,
                    eyebrow: I,
                    product: A,
                    removePadding: C,
                    inLayoutWrapper: L = !1,
                    trialPage: M = !1,
                    userInfo: D = {},
                    productData: R = [],
                    startTrial: q = (() => {}),
                    setLoading: z = (() => {}),
                    setError: B = (() => {}),
                    setErrorText: $ = (() => {}),
                    backgroundColor: U,
                    formWidth: V
                } = t;
                const {
                    0: W,
                    1: G
                } = (0, o.useState)(!1), {
                    0: K,
                    1: Y
                } = (0, o.useState)(!1), {
                    0: H,
                    1: X
                } = (0, o.useState)(!1), [J] = (0, i.Pj)();
                let Q = "light";
                "dark" === N && (Q = N);
                let Z = "";
                !0 === C && (Z = "remove-padding");
                const tt = null == J || null === (e = J.navData) || void 0 === e || null === (n = e.userProfile) || void 0 === n ? void 0 : n.firstName,
                    et = null == J || null === (u = J.navData) || void 0 === u || null === (a = u.userProfile) || void 0 === a ? void 0 : a.lastName,
                    nt = null == J || null === (s = J.navData) || void 0 === s || null === (f = s.userProfile) || void 0 === f ? void 0 : f.email,
                    rt = null != O && null !== (v = O.thankYou) && void 0 !== v && null !== (d = v.childMarkdownRemark) && void 0 !== d && d.html ? null == O || null === (m = O.thankYou) || void 0 === m || null === (p = m.childMarkdownRemark) || void 0 === p ? void 0 : p.html : "Thanks!",
                    ot = L && U ? "#252A2E" === U || "#003054" === U || "#0063A3" === U ? "dark" : "light" : Q;
                return (0, o.useEffect)((() => {
                    var t;
                    if (W) {
                        if (!H) {
                            const t = (t, e) => {
                                    var n = t.getFormElem()[0],
                                        r = getSelection.call.bind([].slice);
                                    r(n.querySelectorAll("[style]")).concat(n).forEach((function(t) {
                                        t.removeAttribute("style")
                                    })), e || n.setAttribute("data-styles-ready", "true"), r(document.styleSheets).forEach((function(t) {
                                        (-1 !== [document.getElementById("mktoForm_" + k)].indexOf(t.ownerNode) || n.contains(t.ownerNode)) && (t.disabled = !0)
                                    })), e || n.setAttribute("data-styles-ready", "true")
                                },
                                e = () => {
                                    if (null != _ && _.length) {
                                        const t = document.getElementById("mktoForm_" + k);
                                        null != t && t.children.length ? t && _.forEach((t => {
                                            var e;
                                            const n = null == t ? void 0 : t.fieldName,
                                                r = null == t ? void 0 : t.value,
                                                o = null === (e = document) || void 0 === e ? void 0 : e.getElementsByName(n)[0];
                                            o && r && (o.value = r)
                                        })) : setTimeout(e, 100)
                                    }
                                },
                                n = () => {
                                    const t = document.querySelectorAll("input[type='hidden']");
                                    t.forEach(((e, n) => {
                                        t.length && "TC1_Product_ID__c" === t[n].name && null != A && A.productId ? t[n].value = null == A ? void 0 : A.productId : null != t && t.length && ("TNV_Recent_Software_Trial_SKU__c" === t[n].name && (t[n].value = null == R ? void 0 : R.productTrialId), "TNV_Trimble_ID__c" === t[n].name && (t[n].value = null == D ? void 0 : D.tid), "TNV_Profiles_Account_ID__c" === t[n].name && (t[n].value = null == D ? void 0 : D.tid), "FirstName" === t[n].name && (t[n].value = null != D && D.fName ? null == D ? void 0 : D.fName : "" !== t[n].value ? t[n].value : void 0), "LastName" === t[n].name && (t[n].value = null != D && D.lName ? null == D ? void 0 : D.lName : "" !== t[n].value ? t[n].value : void 0), "Email" === t[n].name && (t[n].value = null != D && D.email ? null == D ? void 0 : D.email : "" !== t[n].value ? t[n].value : void 0))
                                    }))
                                },
                                o = () => {
                                    const t = document.getElementById("mktoForm_" + k);
                                    if (null != t && t.children.length) {
                                        var e;
                                        const t = null === (e = document.getElementById("mktoForm_" + k)) || void 0 === e ? void 0 : e.getElementsByClassName("mktoRangeField");
                                        if (null != t && t.length)
                                            for (let e in t) {
                                                var n, r, i, u;
                                                const o = null == t || null === (n = t[e]) || void 0 === n || null === (r = n.querySelectorAll("input")) || void 0 === r ? void 0 : r[0],
                                                    a = null == t || null === (i = t[e]) || void 0 === i || null === (u = i.getElementsByClassName("mktoRangeValue")) || void 0 === u ? void 0 : u[0];
                                                o && a && (o.addEventListener("focus", (function() {
                                                    a.classList.add("in-focus")
                                                })), o.addEventListener("blur", (function() {
                                                    a.classList.remove("in-focus")
                                                })))
                                            }
                                    } else setTimeout(o, 1e3)
                                };
                            window.MktoForms2.loadForm(null == O ? void 0 : O.formScriptSource, null == O ? void 0 : O.munchkinId, k, (function(t) {
                                null == t || t.vals({ ...tt && {
                                        FirstName: tt
                                    },
                                    ...et && {
                                        LastName: et
                                    },
                                    ...nt && {
                                        Email: nt
                                    }
                                }), null == t || t.onSubmit((function() {
                                    q(z, B, $, null == R ? void 0 : R.productTrialId, null == R ? void 0 : R.Trial_Duration);
                                    var e = null == t ? void 0 : t.vals();
                                    console.log("onSubmit", e)
                                })), null == t || t.onSuccess((function(e, n) {
                                    if (console.log("onSuccess", e, n), j) return window.location.href = j, !1; {
                                        const i = l(n) !== l(window.location.href);
                                        return i || (t.getFormElem().hide(), Y(!0), window.scrollTo({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth"
                                        })), o = e, (r = P) && "object" == typeof o && null !== o && (Object.keys(o).forEach((function(t) {
                                            o["form_" + t.toLowerCase().trim()] = o[t], delete o[t]
                                        })), "undefined" != typeof window && void 0 !== typeof document && window.dataLayer.push({
                                            event: "form_submit_success",
                                            form_name: r,
                                            marketo_form: o.form_formid || null,
                                            ...o
                                        })), i
                                    }
                                    var r, o
                                }))
                            })), window.MktoForms2.whenRendered((function(i) {
                                t(i), e(), o(), n();
                                const u = i.getFormElem()[0];
                                Array.from(u.querySelectorAll("label:not([data-for-type])")).forEach((t => {
                                    const e = u.querySelector("#" + t.htmlFor) || u.querySelector("[name='" + t.htmlFor + "']");
                                    t.setAttribute("data-for-type", e ? e.type : "")
                                })), document.querySelectorAll(".mktoCheckboxList").length > 0 && (0, r.A)(document.querySelectorAll(".mktoCheckboxList")).forEach((t => {
                                    (0, r.A)(t.childNodes).filter((t => "INPUT" === t.nodeName)).length > 1 && t.classList.add("multiCheckbox")
                                }))
                            })), X(!0)
                        }
                    } else if (null !== (t = window) && void 0 !== t && t.MktoForms2) G(!0);
                    else {
                        const t = document.createElement("script");
                        t.defer = !0, t.onload = () => {
                            var t;
                            return null !== (t = window) && void 0 !== t && t.MktoForms2 ? G(!0) : null
                        }, t.id = "compound-key-tracking", t.src = "https://go2.trimble.com/js/forms2/js/forms2.min.js", document.head.appendChild(t)
                    }
                }), [W]), k && O ? o.createElement("div", {
                    className: "marketo-form " + (L ? "marketo-from-layout-wrapper" : "") + " " + Z
                }, W && (null == O ? void 0 : O.compoundKeys) && o.createElement(c, null), o.createElement("div", {
                    className: "form-container " + ot + " " + (!L && (null == F || null === (g = F.image) || void 0 === g || null === (y = g.file) || void 0 === y ? void 0 : y.url) && "has-image") + " " + (!1 === V && !(null != F && null !== (h = F.image) && void 0 !== h && null !== (b = h.file) && void 0 !== b && b.url) && "form-container--narrow") + " ",
                    style: U ? {
                        backgroundColor: U
                    } : {}
                }, (P || T) && o.createElement("div", {
                    className: "form-head"
                }, I && o.createElement("span", {
                    className: "eyebrow"
                }, I), P && o.createElement("h2", {
                    className: "header"
                }, P), T && o.createElement("div", {
                    className: "directions"
                }, o.createElement("p", null, T))), o.createElement("div", {
                    className: "form-outer " + ot,
                    style: U ? {
                        backgroundColor: U
                    } : {}
                }, K && o.createElement("div", {
                    className: "form-outer--submit-text",
                    dangerouslySetInnerHTML: {
                        __html: rt
                    }
                }), o.createElement("form", {
                    className: "form",
                    id: "mktoForm_" + k
                }))), (null == F || null === (w = F.image) || void 0 === w || null === (x = w.file) || void 0 === x ? void 0 : x.url) && !L && o.createElement("div", {
                    className: "image-container"
                }, o.createElement("div", {
                    className: "image-container__wrapper",
                    style: {
                        backgroundImage: "url(" + (null == F || null === (S = F.image) || void 0 === S || null === (E = S.file) || void 0 === E ? void 0 : E.url) + ")"
                    }
                }))) : null
            }
        },
        79306: function(t, e, n) {
            var r = n(94901),
                o = n(16823),
                i = TypeError;
            t.exports = function(t) {
                if (r(t)) return t;
                throw new i(o(t) + " is not a function")
            }
        },
        28551: function(t, e, n) {
            var r = n(20034),
                o = String,
                i = TypeError;
            t.exports = function(t) {
                if (r(t)) return t;
                throw new i(o(t) + " is not an object")
            }
        },
        19617: function(t, e, n) {
            var r = n(25397),
                o = n(35610),
                i = n(26198),
                u = function(t) {
                    return function(e, n, u) {
                        var a = r(e),
                            l = i(a);
                        if (0 === l) return !t && -1;
                        var c, s = o(u, l);
                        if (t && n != n) {
                            for (; l > s;)
                                if ((c = a[s++]) != c) return !0
                        } else
                            for (; l > s; s++)
                                if ((t || s in a) && a[s] === n) return t || s || 0;
                        return !t && -1
                    }
                };
            t.exports = {
                includes: u(!0),
                indexOf: u(!1)
            }
        },
        44576: function(t, e, n) {
            var r = n(79504),
                o = r({}.toString),
                i = r("".slice);
            t.exports = function(t) {
                return i(o(t), 8, -1)
            }
        },
        36955: function(t, e, n) {
            var r = n(92140),
                o = n(94901),
                i = n(44576),
                u = n(78227)("toStringTag"),
                a = Object,
                l = "Arguments" === i(function() {
                    return arguments
                }());
            t.exports = r ? i : function(t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                    try {
                        return t[e]
                    } catch (n) {}
                }(e = a(t), u)) ? n : l ? i(e) : "Object" === (r = i(e)) && o(e.callee) ? "Arguments" : r
            }
        },
        77740: function(t, e, n) {
            var r = n(39297),
                o = n(35031),
                i = n(77347),
                u = n(24913);
            t.exports = function(t, e, n) {
                for (var a = o(e), l = u.f, c = i.f, s = 0; s < a.length; s++) {
                    var f = a[s];
                    r(t, f) || n && r(n, f) || l(t, f, c(e, f))
                }
            }
        },
        66699: function(t, e, n) {
            var r = n(43724),
                o = n(24913),
                i = n(6980);
            t.exports = r ? function(t, e, n) {
                return o.f(t, e, i(1, n))
            } : function(t, e, n) {
                return t[e] = n, t
            }
        },
        6980: function(t) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        36840: function(t, e, n) {
            var r = n(94901),
                o = n(24913),
                i = n(50283),
                u = n(39433);
            t.exports = function(t, e, n, a) {
                a || (a = {});
                var l = a.enumerable,
                    c = void 0 !== a.name ? a.name : e;
                if (r(n) && i(n, c, a), a.global) l ? t[e] = n : u(e, n);
                else {
                    try {
                        a.unsafe ? t[e] && (l = !0) : delete t[e]
                    } catch (s) {}
                    l ? t[e] = n : o.f(t, e, {
                        value: n,
                        enumerable: !1,
                        configurable: !a.nonConfigurable,
                        writable: !a.nonWritable
                    })
                }
                return t
            }
        },
        39433: function(t, e, n) {
            var r = n(24475),
                o = Object.defineProperty;
            t.exports = function(t, e) {
                try {
                    o(r, t, {
                        value: e,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[t] = e
                }
                return e
            }
        },
        43724: function(t, e, n) {
            var r = n(79039);
            t.exports = !r((function() {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        4055: function(t, e, n) {
            var r = n(24475),
                o = n(20034),
                i = r.document,
                u = o(i) && o(i.createElement);
            t.exports = function(t) {
                return u ? i.createElement(t) : {}
            }
        },
        79392: function(t) {
            t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        77388: function(t, e, n) {
            var r, o, i = n(24475),
                u = n(79392),
                a = i.process,
                l = i.Deno,
                c = a && a.versions || l && l.version,
                s = c && c.v8;
            s && (o = (r = s.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && u && (!(r = u.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = u.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o
        },
        88727: function(t) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        46518: function(t, e, n) {
            var r = n(24475),
                o = n(77347).f,
                i = n(66699),
                u = n(36840),
                a = n(39433),
                l = n(77740),
                c = n(92796);
            t.exports = function(t, e) {
                var n, s, f, v, d, m = t.target,
                    p = t.global,
                    g = t.stat;
                if (n = p ? r : g ? r[m] || a(m, {}) : r[m] && r[m].prototype)
                    for (s in e) {
                        if (v = e[s], f = t.dontCallGetSet ? (d = o(n, s)) && d.value : n[s], !c(p ? s : m + (g ? "." : "#") + s, t.forced) && void 0 !== f) {
                            if (typeof v == typeof f) continue;
                            l(v, f)
                        }(t.sham || f && f.sham) && i(v, "sham", !0), u(n, s, v, t)
                    }
            }
        },
        79039: function(t) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        },
        40616: function(t, e, n) {
            var r = n(79039);
            t.exports = !r((function() {
                var t = function() {}.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }))
        },
        69565: function(t, e, n) {
            var r = n(40616),
                o = Function.prototype.call;
            t.exports = r ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        10350: function(t, e, n) {
            var r = n(43724),
                o = n(39297),
                i = Function.prototype,
                u = r && Object.getOwnPropertyDescriptor,
                a = o(i, "name"),
                l = a && "something" === function() {}.name,
                c = a && (!r || r && u(i, "name").configurable);
            t.exports = {
                EXISTS: a,
                PROPER: l,
                CONFIGURABLE: c
            }
        },
        79504: function(t, e, n) {
            var r = n(40616),
                o = Function.prototype,
                i = o.call,
                u = r && o.bind.bind(i, i);
            t.exports = r ? u : function(t) {
                return function() {
                    return i.apply(t, arguments)
                }
            }
        },
        97751: function(t, e, n) {
            var r = n(24475),
                o = n(94901);
            t.exports = function(t, e) {
                return arguments.length < 2 ? (n = r[t], o(n) ? n : void 0) : r[t] && r[t][e];
                var n
            }
        },
        55966: function(t, e, n) {
            var r = n(79306),
                o = n(64117);
            t.exports = function(t, e) {
                var n = t[e];
                return o(n) ? void 0 : r(n)
            }
        },
        2478: function(t, e, n) {
            var r = n(79504),
                o = n(48981),
                i = Math.floor,
                u = r("".charAt),
                a = r("".replace),
                l = r("".slice),
                c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                s = /\$([$&'`]|\d{1,2})/g;
            t.exports = function(t, e, n, r, f, v) {
                var d = n + t.length,
                    m = r.length,
                    p = s;
                return void 0 !== f && (f = o(f), p = c), a(v, p, (function(o, a) {
                    var c;
                    switch (u(a, 0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return l(e, 0, n);
                        case "'":
                            return l(e, d);
                        case "<":
                            c = f[l(a, 1, -1)];
                            break;
                        default:
                            var s = +a;
                            if (0 === s) return o;
                            if (s > m) {
                                var v = i(s / 10);
                                return 0 === v ? o : v <= m ? void 0 === r[v - 1] ? u(a, 1) : r[v - 1] + u(a, 1) : o
                            }
                            c = r[s - 1]
                    }
                    return void 0 === c ? "" : c
                }))
            }
        },
        24475: function(t, e, n) {
            var r = function(t) {
                return t && t.Math === Math && t
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || r("object" == typeof this && this) || function() {
                return this
            }() || Function("return this")()
        },
        39297: function(t, e, n) {
            var r = n(79504),
                o = n(48981),
                i = r({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(t, e) {
                return i(o(t), e)
            }
        },
        30421: function(t) {
            t.exports = {}
        },
        35917: function(t, e, n) {
            var r = n(43724),
                o = n(79039),
                i = n(4055);
            t.exports = !r && !o((function() {
                return 7 !== Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        47055: function(t, e, n) {
            var r = n(79504),
                o = n(79039),
                i = n(44576),
                u = Object,
                a = r("".split);
            t.exports = o((function() {
                return !u("z").propertyIsEnumerable(0)
            })) ? function(t) {
                return "String" === i(t) ? a(t, "") : u(t)
            } : u
        },
        33706: function(t, e, n) {
            var r = n(79504),
                o = n(94901),
                i = n(77629),
                u = r(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function(t) {
                return u(t)
            }), t.exports = i.inspectSource
        },
        91181: function(t, e, n) {
            var r, o, i, u = n(58622),
                a = n(24475),
                l = n(20034),
                c = n(66699),
                s = n(39297),
                f = n(77629),
                v = n(66119),
                d = n(30421),
                m = "Object already initialized",
                p = a.TypeError,
                g = a.WeakMap;
            if (u || f.state) {
                var y = f.state || (f.state = new g);
                y.get = y.get, y.has = y.has, y.set = y.set, r = function(t, e) {
                    if (y.has(t)) throw new p(m);
                    return e.facade = t, y.set(t, e), e
                }, o = function(t) {
                    return y.get(t) || {}
                }, i = function(t) {
                    return y.has(t)
                }
            } else {
                var h = v("state");
                d[h] = !0, r = function(t, e) {
                    if (s(t, h)) throw new p(m);
                    return e.facade = t, c(t, h, e), e
                }, o = function(t) {
                    return s(t, h) ? t[h] : {}
                }, i = function(t) {
                    return s(t, h)
                }
            }
            t.exports = {
                set: r,
                get: o,
                has: i,
                enforce: function(t) {
                    return i(t) ? o(t) : r(t, {})
                },
                getterFor: function(t) {
                    return function(e) {
                        var n;
                        if (!l(e) || (n = o(e)).type !== t) throw new p("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }
        },
        94901: function(t) {
            var e = "object" == typeof document && document.all;
            t.exports = void 0 === e && void 0 !== e ? function(t) {
                return "function" == typeof t || t === e
            } : function(t) {
                return "function" == typeof t
            }
        },
        92796: function(t, e, n) {
            var r = n(79039),
                o = n(94901),
                i = /#|\.prototype\./,
                u = function(t, e) {
                    var n = l[a(t)];
                    return n === s || n !== c && (o(e) ? r(e) : !!e)
                },
                a = u.normalize = function(t) {
                    return String(t).replace(i, ".").toLowerCase()
                },
                l = u.data = {},
                c = u.NATIVE = "N",
                s = u.POLYFILL = "P";
            t.exports = u
        },
        64117: function(t) {
            t.exports = function(t) {
                return null == t
            }
        },
        20034: function(t, e, n) {
            var r = n(94901);
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : r(t)
            }
        },
        18776: function(t) {
            t.exports = !1
        },
        60788: function(t, e, n) {
            var r = n(20034),
                o = n(44576),
                i = n(78227)("match");
            t.exports = function(t) {
                var e;
                return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" === o(t))
            }
        },
        10757: function(t, e, n) {
            var r = n(97751),
                o = n(94901),
                i = n(1625),
                u = n(7040),
                a = Object;
            t.exports = u ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                var e = r("Symbol");
                return o(e) && i(e.prototype, a(t))
            }
        },
        26198: function(t, e, n) {
            var r = n(18014);
            t.exports = function(t) {
                return r(t.length)
            }
        },
        50283: function(t, e, n) {
            var r = n(79504),
                o = n(79039),
                i = n(94901),
                u = n(39297),
                a = n(43724),
                l = n(10350).CONFIGURABLE,
                c = n(33706),
                s = n(91181),
                f = s.enforce,
                v = s.get,
                d = String,
                m = Object.defineProperty,
                p = r("".slice),
                g = r("".replace),
                y = r([].join),
                h = a && !o((function() {
                    return 8 !== m((function() {}), "length", {
                        value: 8
                    }).length
                })),
                b = String(String).split("String"),
                w = t.exports = function(t, e, n) {
                    "Symbol(" === p(d(e), 0, 7) && (e = "[" + g(d(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!u(t, "name") || l && t.name !== e) && (a ? m(t, "name", {
                        value: e,
                        configurable: !0
                    }) : t.name = e), h && n && u(n, "arity") && t.length !== n.arity && m(t, "length", {
                        value: n.arity
                    });
                    try {
                        n && u(n, "constructor") && n.constructor ? a && m(t, "prototype", {
                            writable: !1
                        }) : t.prototype && (t.prototype = void 0)
                    } catch (o) {}
                    var r = f(t);
                    return u(r, "source") || (r.source = y(b, "string" == typeof e ? e : "")), t
                };
            Function.prototype.toString = w((function() {
                return i(this) && v(this).source || c(this)
            }), "toString")
        },
        80741: function(t) {
            var e = Math.ceil,
                n = Math.floor;
            t.exports = Math.trunc || function(t) {
                var r = +t;
                return (r > 0 ? n : e)(r)
            }
        },
        24913: function(t, e, n) {
            var r = n(43724),
                o = n(35917),
                i = n(48686),
                u = n(28551),
                a = n(56969),
                l = TypeError,
                c = Object.defineProperty,
                s = Object.getOwnPropertyDescriptor,
                f = "enumerable",
                v = "configurable",
                d = "writable";
            e.f = r ? i ? function(t, e, n) {
                if (u(t), e = a(e), u(n), "function" == typeof t && "prototype" === e && "value" in n && d in n && !n[d]) {
                    var r = s(t, e);
                    r && r[d] && (t[e] = n.value, n = {
                        configurable: v in n ? n[v] : r[v],
                        enumerable: f in n ? n[f] : r[f],
                        writable: !1
                    })
                }
                return c(t, e, n)
            } : c : function(t, e, n) {
                if (u(t), e = a(e), u(n), o) try {
                    return c(t, e, n)
                } catch (r) {}
                if ("get" in n || "set" in n) throw new l("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        77347: function(t, e, n) {
            var r = n(43724),
                o = n(69565),
                i = n(48773),
                u = n(6980),
                a = n(25397),
                l = n(56969),
                c = n(39297),
                s = n(35917),
                f = Object.getOwnPropertyDescriptor;
            e.f = r ? f : function(t, e) {
                if (t = a(t), e = l(e), s) try {
                    return f(t, e)
                } catch (n) {}
                if (c(t, e)) return u(!o(i.f, t, e), t[e])
            }
        },
        38480: function(t, e, n) {
            var r = n(61828),
                o = n(88727).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return r(t, o)
            }
        },
        33717: function(t, e) {
            e.f = Object.getOwnPropertySymbols
        },
        1625: function(t, e, n) {
            var r = n(79504);
            t.exports = r({}.isPrototypeOf)
        },
        61828: function(t, e, n) {
            var r = n(79504),
                o = n(39297),
                i = n(25397),
                u = n(19617).indexOf,
                a = n(30421),
                l = r([].push);
            t.exports = function(t, e) {
                var n, r = i(t),
                    c = 0,
                    s = [];
                for (n in r) !o(a, n) && o(r, n) && l(s, n);
                for (; e.length > c;) o(r, n = e[c++]) && (~u(s, n) || l(s, n));
                return s
            }
        },
        48773: function(t, e) {
            var n = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                o = r && !n.call({
                    1: 2
                }, 1);
            e.f = o ? function(t) {
                var e = r(this, t);
                return !!e && e.enumerable
            } : n
        },
        84270: function(t, e, n) {
            var r = n(69565),
                o = n(94901),
                i = n(20034),
                u = TypeError;
            t.exports = function(t, e) {
                var n, a;
                if ("string" === e && o(n = t.toString) && !i(a = r(n, t))) return a;
                if (o(n = t.valueOf) && !i(a = r(n, t))) return a;
                if ("string" !== e && o(n = t.toString) && !i(a = r(n, t))) return a;
                throw new u("Can't convert object to primitive value")
            }
        },
        35031: function(t, e, n) {
            var r = n(97751),
                o = n(79504),
                i = n(38480),
                u = n(33717),
                a = n(28551),
                l = o([].concat);
            t.exports = r("Reflect", "ownKeys") || function(t) {
                var e = i.f(a(t)),
                    n = u.f;
                return n ? l(e, n(t)) : e
            }
        },
        67979: function(t, e, n) {
            var r = n(28551);
            t.exports = function() {
                var t = r(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
            }
        },
        61034: function(t, e, n) {
            var r = n(69565),
                o = n(39297),
                i = n(1625),
                u = n(67979),
                a = RegExp.prototype;
            t.exports = function(t) {
                var e = t.flags;
                return void 0 !== e || "flags" in a || o(t, "flags") || !i(a, t) ? e : r(u, t)
            }
        },
        67750: function(t, e, n) {
            var r = n(64117),
                o = TypeError;
            t.exports = function(t) {
                if (r(t)) throw new o("Can't call method on " + t);
                return t
            }
        },
        66119: function(t, e, n) {
            var r = n(25745),
                o = n(33392),
                i = r("keys");
            t.exports = function(t) {
                return i[t] || (i[t] = o(t))
            }
        },
        77629: function(t, e, n) {
            var r = n(18776),
                o = n(24475),
                i = n(39433),
                u = "__core-js_shared__",
                a = t.exports = o[u] || i(u, {});
            (a.versions || (a.versions = [])).push({
                version: "3.37.0",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        25745: function(t, e, n) {
            var r = n(77629);
            t.exports = function(t, e) {
                return r[t] || (r[t] = e || {})
            }
        },
        4495: function(t, e, n) {
            var r = n(77388),
                o = n(79039),
                i = n(24475).String;
            t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                var t = Symbol("symbol detection");
                return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        35610: function(t, e, n) {
            var r = n(91291),
                o = Math.max,
                i = Math.min;
            t.exports = function(t, e) {
                var n = r(t);
                return n < 0 ? o(n + e, 0) : i(n, e)
            }
        },
        25397: function(t, e, n) {
            var r = n(47055),
                o = n(67750);
            t.exports = function(t) {
                return r(o(t))
            }
        },
        91291: function(t, e, n) {
            var r = n(80741);
            t.exports = function(t) {
                var e = +t;
                return e != e || 0 === e ? 0 : r(e)
            }
        },
        18014: function(t, e, n) {
            var r = n(91291),
                o = Math.min;
            t.exports = function(t) {
                var e = r(t);
                return e > 0 ? o(e, 9007199254740991) : 0
            }
        },
        48981: function(t, e, n) {
            var r = n(67750),
                o = Object;
            t.exports = function(t) {
                return o(r(t))
            }
        },
        72777: function(t, e, n) {
            var r = n(69565),
                o = n(20034),
                i = n(10757),
                u = n(55966),
                a = n(84270),
                l = n(78227),
                c = TypeError,
                s = l("toPrimitive");
            t.exports = function(t, e) {
                if (!o(t) || i(t)) return t;
                var n, l = u(t, s);
                if (l) {
                    if (void 0 === e && (e = "default"), n = r(l, t, e), !o(n) || i(n)) return n;
                    throw new c("Can't convert object to primitive value")
                }
                return void 0 === e && (e = "number"), a(t, e)
            }
        },
        56969: function(t, e, n) {
            var r = n(72777),
                o = n(10757);
            t.exports = function(t) {
                var e = r(t, "string");
                return o(e) ? e : e + ""
            }
        },
        92140: function(t, e, n) {
            var r = {};
            r[n(78227)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
        },
        655: function(t, e, n) {
            var r = n(36955),
                o = String;
            t.exports = function(t) {
                if ("Symbol" === r(t)) throw new TypeError("Cannot convert a Symbol value to a string");
                return o(t)
            }
        },
        16823: function(t) {
            var e = String;
            t.exports = function(t) {
                try {
                    return e(t)
                } catch (n) {
                    return "Object"
                }
            }
        },
        33392: function(t, e, n) {
            var r = n(79504),
                o = 0,
                i = Math.random(),
                u = r(1..toString);
            t.exports = function(t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + u(++o + i, 36)
            }
        },
        7040: function(t, e, n) {
            var r = n(4495);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        48686: function(t, e, n) {
            var r = n(43724),
                o = n(79039);
            t.exports = r && o((function() {
                return 42 !== Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        58622: function(t, e, n) {
            var r = n(24475),
                o = n(94901),
                i = r.WeakMap;
            t.exports = o(i) && /native code/.test(String(i))
        },
        78227: function(t, e, n) {
            var r = n(24475),
                o = n(25745),
                i = n(39297),
                u = n(33392),
                a = n(4495),
                l = n(7040),
                c = r.Symbol,
                s = o("wks"),
                f = l ? c.for || c : c && c.withoutSetter || u;
            t.exports = function(t) {
                return i(s, t) || (s[t] = a && i(c, t) ? c[t] : f("Symbol." + t)), s[t]
            }
        },
        79978: function(t, e, n) {
            var r = n(46518),
                o = n(69565),
                i = n(79504),
                u = n(67750),
                a = n(94901),
                l = n(64117),
                c = n(60788),
                s = n(655),
                f = n(55966),
                v = n(61034),
                d = n(2478),
                m = n(78227),
                p = n(18776),
                g = m("replace"),
                y = TypeError,
                h = i("".indexOf),
                b = i("".replace),
                w = i("".slice),
                x = Math.max;
            r({
                target: "String",
                proto: !0
            }, {
                replaceAll: function(t, e) {
                    var n, r, i, m, S, E, k, j, O, _ = u(this),
                        N = 0,
                        P = 0,
                        T = "";
                    if (!l(t)) {
                        if ((n = c(t)) && (r = s(u(v(t))), !~h(r, "g"))) throw new y("`.replaceAll` does not allow non-global regexes");
                        if (i = f(t, g)) return o(i, t, _, e);
                        if (p && n) return b(s(_), t, e)
                    }
                    for (m = s(_), S = s(t), (E = a(e)) || (e = s(e)), k = S.length, j = x(1, k), N = h(m, S); - 1 !== N;) O = E ? s(e(S, N, m)) : d(S, m, N, [], void 0, e), T += w(m, P, N) + O, P = N + k, N = N + j > m.length ? -1 : h(m, S, N + j);
                    return P < m.length && (T += w(m, P)), T
                }
            })
        },
        12041: function(t, e, n) {
            n(79978)
        }
    }
]);
//# sourceMappingURL=a1ddeff7b41a84a8c634a70ff18b102986036b89-63e3137e3e19dd692739.js.map