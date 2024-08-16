(self.webpackChunkgatsby_mxp_project = self.webpackChunkgatsby_mxp_project || []).push([
    [6890], {
        74353: function(e) {
            e.exports = function() {
                "use strict";
                var e = 1e3,
                    n = 6e4,
                    l = 36e5,
                    t = "millisecond",
                    o = "second",
                    a = "minute",
                    i = "hour",
                    r = "day",
                    u = "week",
                    d = "month",
                    s = "quarter",
                    c = "year",
                    v = "date",
                    m = "Invalid Date",
                    g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    f = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(e) {
                            var n = ["th", "st", "nd", "rd"],
                                l = e % 100;
                            return "[" + e + (n[(l - 20) % 10] || n[l] || n[0]) + "]"
                        }
                    },
                    h = function(e, n, l) {
                        var t = String(e);
                        return !t || t.length >= n ? e : "" + Array(n + 1 - t.length).join(l) + e
                    },
                    y = {
                        s: h,
                        z: function(e) {
                            var n = -e.utcOffset(),
                                l = Math.abs(n),
                                t = Math.floor(l / 60),
                                o = l % 60;
                            return (n <= 0 ? "+" : "-") + h(t, 2, "0") + ":" + h(o, 2, "0")
                        },
                        m: function e(n, l) {
                            if (n.date() < l.date()) return -e(l, n);
                            var t = 12 * (l.year() - n.year()) + (l.month() - n.month()),
                                o = n.clone().add(t, d),
                                a = l - o < 0,
                                i = n.clone().add(t + (a ? -1 : 1), d);
                            return +(-(t + (l - o) / (a ? o - i : i - o)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(e) {
                            return {
                                M: d,
                                y: c,
                                w: u,
                                d: r,
                                D: v,
                                h: i,
                                m: a,
                                s: o,
                                ms: t,
                                Q: s
                            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    S = "en",
                    w = {};
                w[S] = f;
                var b = "$isDayjsObject",
                    D = function(e) {
                        return e instanceof P || !(!e || !e[b])
                    },
                    T = function e(n, l, t) {
                        var o;
                        if (!n) return S;
                        if ("string" == typeof n) {
                            var a = n.toLowerCase();
                            w[a] && (o = a), l && (w[a] = l, o = a);
                            var i = n.split("-");
                            if (!o && i.length > 1) return e(i[0])
                        } else {
                            var r = n.name;
                            w[r] = n, o = r
                        }
                        return !t && o && (S = o), o || !t && S
                    },
                    N = function(e, n) {
                        if (D(e)) return e.clone();
                        var l = "object" == typeof n ? n : {};
                        return l.date = e, l.args = arguments, new P(l)
                    },
                    L = y;
                L.l = T, L.i = D, L.w = function(e, n) {
                    return N(e, {
                        locale: n.$L,
                        utc: n.$u,
                        x: n.$x,
                        $offset: n.$offset
                    })
                };
                var P = function() {
                        function f(e) {
                            this.$L = T(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[b] = !0
                        }
                        var h = f.prototype;
                        return h.parse = function(e) {
                            this.$d = function(e) {
                                var n = e.date,
                                    l = e.utc;
                                if (null === n) return new Date(NaN);
                                if (L.u(n)) return new Date;
                                if (n instanceof Date) return new Date(n);
                                if ("string" == typeof n && !/Z$/i.test(n)) {
                                    var t = n.match(g);
                                    if (t) {
                                        var o = t[2] - 1 || 0,
                                            a = (t[7] || "0").substring(0, 3);
                                        return l ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a)
                                    }
                                }
                                return new Date(n)
                            }(e), this.init()
                        }, h.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, h.$utils = function() {
                            return L
                        }, h.isValid = function() {
                            return !(this.$d.toString() === m)
                        }, h.isSame = function(e, n) {
                            var l = N(e);
                            return this.startOf(n) <= l && l <= this.endOf(n)
                        }, h.isAfter = function(e, n) {
                            return N(e) < this.startOf(n)
                        }, h.isBefore = function(e, n) {
                            return this.endOf(n) < N(e)
                        }, h.$g = function(e, n, l) {
                            return L.u(e) ? this[n] : this.set(l, e)
                        }, h.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, h.valueOf = function() {
                            return this.$d.getTime()
                        }, h.startOf = function(e, n) {
                            var l = this,
                                t = !!L.u(n) || n,
                                s = L.p(e),
                                m = function(e, n) {
                                    var o = L.w(l.$u ? Date.UTC(l.$y, n, e) : new Date(l.$y, n, e), l);
                                    return t ? o : o.endOf(r)
                                },
                                g = function(e, n) {
                                    return L.w(l.toDate()[e].apply(l.toDate("s"), (t ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), l)
                                },
                                p = this.$W,
                                f = this.$M,
                                h = this.$D,
                                y = "set" + (this.$u ? "UTC" : "");
                            switch (s) {
                                case c:
                                    return t ? m(1, 0) : m(31, 11);
                                case d:
                                    return t ? m(1, f) : m(0, f + 1);
                                case u:
                                    var S = this.$locale().weekStart || 0,
                                        w = (p < S ? p + 7 : p) - S;
                                    return m(t ? h - w : h + (6 - w), f);
                                case r:
                                case v:
                                    return g(y + "Hours", 0);
                                case i:
                                    return g(y + "Minutes", 1);
                                case a:
                                    return g(y + "Seconds", 2);
                                case o:
                                    return g(y + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, h.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, h.$set = function(e, n) {
                            var l, u = L.p(e),
                                s = "set" + (this.$u ? "UTC" : ""),
                                m = (l = {}, l[r] = s + "Date", l[v] = s + "Date", l[d] = s + "Month", l[c] = s + "FullYear", l[i] = s + "Hours", l[a] = s + "Minutes", l[o] = s + "Seconds", l[t] = s + "Milliseconds", l)[u],
                                g = u === r ? this.$D + (n - this.$W) : n;
                            if (u === d || u === c) {
                                var p = this.clone().set(v, 1);
                                p.$d[m](g), p.init(), this.$d = p.set(v, Math.min(this.$D, p.daysInMonth())).$d
                            } else m && this.$d[m](g);
                            return this.init(), this
                        }, h.set = function(e, n) {
                            return this.clone().$set(e, n)
                        }, h.get = function(e) {
                            return this[L.p(e)]()
                        }, h.add = function(t, s) {
                            var v, m = this;
                            t = Number(t);
                            var g = L.p(s),
                                p = function(e) {
                                    var n = N(m);
                                    return L.w(n.date(n.date() + Math.round(e * t)), m)
                                };
                            if (g === d) return this.set(d, this.$M + t);
                            if (g === c) return this.set(c, this.$y + t);
                            if (g === r) return p(1);
                            if (g === u) return p(7);
                            var f = (v = {}, v[a] = n, v[i] = l, v[o] = e, v)[g] || 1,
                                h = this.$d.getTime() + t * f;
                            return L.w(h, this)
                        }, h.subtract = function(e, n) {
                            return this.add(-1 * e, n)
                        }, h.format = function(e) {
                            var n = this,
                                l = this.$locale();
                            if (!this.isValid()) return l.invalidDate || m;
                            var t = e || "YYYY-MM-DDTHH:mm:ssZ",
                                o = L.z(this),
                                a = this.$H,
                                i = this.$m,
                                r = this.$M,
                                u = l.weekdays,
                                d = l.months,
                                s = l.meridiem,
                                c = function(e, l, o, a) {
                                    return e && (e[l] || e(n, t)) || o[l].slice(0, a)
                                },
                                v = function(e) {
                                    return L.s(a % 12 || 12, e, "0")
                                },
                                g = s || function(e, n, l) {
                                    var t = e < 12 ? "AM" : "PM";
                                    return l ? t.toLowerCase() : t
                                };
                            return t.replace(p, (function(e, t) {
                                return t || function(e) {
                                    switch (e) {
                                        case "YY":
                                            return String(n.$y).slice(-2);
                                        case "YYYY":
                                            return L.s(n.$y, 4, "0");
                                        case "M":
                                            return r + 1;
                                        case "MM":
                                            return L.s(r + 1, 2, "0");
                                        case "MMM":
                                            return c(l.monthsShort, r, d, 3);
                                        case "MMMM":
                                            return c(d, r);
                                        case "D":
                                            return n.$D;
                                        case "DD":
                                            return L.s(n.$D, 2, "0");
                                        case "d":
                                            return String(n.$W);
                                        case "dd":
                                            return c(l.weekdaysMin, n.$W, u, 2);
                                        case "ddd":
                                            return c(l.weekdaysShort, n.$W, u, 3);
                                        case "dddd":
                                            return u[n.$W];
                                        case "H":
                                            return String(a);
                                        case "HH":
                                            return L.s(a, 2, "0");
                                        case "h":
                                            return v(1);
                                        case "hh":
                                            return v(2);
                                        case "a":
                                            return g(a, i, !0);
                                        case "A":
                                            return g(a, i, !1);
                                        case "m":
                                            return String(i);
                                        case "mm":
                                            return L.s(i, 2, "0");
                                        case "s":
                                            return String(n.$s);
                                        case "ss":
                                            return L.s(n.$s, 2, "0");
                                        case "SSS":
                                            return L.s(n.$ms, 3, "0");
                                        case "Z":
                                            return o
                                    }
                                    return null
                                }(e) || o.replace(":", "")
                            }))
                        }, h.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, h.diff = function(t, v, m) {
                            var g, p = this,
                                f = L.p(v),
                                h = N(t),
                                y = (h.utcOffset() - this.utcOffset()) * n,
                                S = this - h,
                                w = function() {
                                    return L.m(p, h)
                                };
                            switch (f) {
                                case c:
                                    g = w() / 12;
                                    break;
                                case d:
                                    g = w();
                                    break;
                                case s:
                                    g = w() / 3;
                                    break;
                                case u:
                                    g = (S - y) / 6048e5;
                                    break;
                                case r:
                                    g = (S - y) / 864e5;
                                    break;
                                case i:
                                    g = S / l;
                                    break;
                                case a:
                                    g = S / n;
                                    break;
                                case o:
                                    g = S / e;
                                    break;
                                default:
                                    g = S
                            }
                            return m ? g : L.a(g)
                        }, h.daysInMonth = function() {
                            return this.endOf(d).$D
                        }, h.$locale = function() {
                            return w[this.$L]
                        }, h.locale = function(e, n) {
                            if (!e) return this.$L;
                            var l = this.clone(),
                                t = T(e, n, !0);
                            return t && (l.$L = t), l
                        }, h.clone = function() {
                            return L.w(this.$d, this)
                        }, h.toDate = function() {
                            return new Date(this.valueOf())
                        }, h.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, h.toISOString = function() {
                            return this.$d.toISOString()
                        }, h.toString = function() {
                            return this.$d.toUTCString()
                        }, f
                    }(),
                    _ = P.prototype;
                return N.prototype = _, [
                    ["$ms", t],
                    ["$s", o],
                    ["$m", a],
                    ["$H", i],
                    ["$W", r],
                    ["$M", d],
                    ["$y", c],
                    ["$D", v]
                ].forEach((function(e) {
                    _[e[1]] = function(n) {
                        return this.$g(n, e[0], e[1])
                    }
                })), N.extend = function(e, n) {
                    return e.$i || (e(n, P, N), e.$i = !0), N
                }, N.locale = T, N.isDayjs = D, N.unix = function(e) {
                    return N(1e3 * e)
                }, N.en = w[S], N.Ls = w, N.p = {}, N
            }()
        },
        99286: function(e, n, l) {
            "use strict";
            var t = l(96540),
                o = l(68154),
                a = l(64810);
            const i = e => {
                    var n, l, i, u, d, s, c, v, m, g, p, f, h, y, S, w, b;
                    let {
                        title: D,
                        description: T,
                        image: N,
                        slug: L,
                        locale: P,
                        homepage: _,
                        appData: E,
                        seoCompose: C,
                        pageTemplate: I,
                        trialPage: $
                    } = e;
                    const A = (0, a.GR)(r),
                        k = I || "Page";
                    if (E) var {
                        siteTitle: M,
                        siteDescription: O,
                        twitterUsername: x
                    } = E;
                    else var M = "",
                        O = "",
                        x = "";
                    let B = null == E || null === (n = E.siteShareImage) || void 0 === n || null === (l = n.file) || void 0 === l ? void 0 : l.url;
                    null !== (i = B) && void 0 !== i && i.startsWith("http") || (B = "https:" + B);
                    const {
                        siteURL: F
                    } = null == A || null === (u = A.site) || void 0 === u ? void 0 : u.siteMetadata, H = {
                        title: null != C && C.title ? (null == C ? void 0 : C.title) + (M ? " | " + M : "") : D ? D + (M ? " | " + M : "") : "",
                        description: (null == C ? void 0 : C.description) || T || O,
                        image: N || B,
                        locale: P || "en"
                    }, j = null === (d = A.allContentfulLanguage) || void 0 === d ? void 0 : d.edges.map((e => {
                        let {
                            node: n
                        } = e;
                        return "en-us" === (null == n ? void 0 : n.node_locale.toLowerCase()) && (n.node_locale = "en"), n.node_locale
                    })), Y = {
                        title: (null == C ? void 0 : C.opengraphTitle) || (null == H ? void 0 : H.title),
                        type: null == C ? void 0 : C.opengraphType,
                        image: null != C && null !== (s = C.opengraphImage) && void 0 !== s && null !== (c = s.image) && void 0 !== c && null !== (v = c.file) && void 0 !== v && v.url ? "https:" + (null == C || null === (m = C.opengraphImage) || void 0 === m || null === (g = m.image) || void 0 === g || null === (p = g.file) || void 0 === p ? void 0 : p.url) : null == H ? void 0 : H.image,
                        description: (null == C ? void 0 : C.opengraphDescription) || (null == H ? void 0 : H.description),
                        url: (null == C ? void 0 : C.opengraphUrl) || (null == H ? void 0 : H.url)
                    }, W = {
                        title: (null == C ? void 0 : C.twitterTitle) || H.title,
                        image: null != C && null !== (f = C.twitterImage) && void 0 !== f && null !== (h = f.image) && void 0 !== h && null !== (y = h.file) && void 0 !== y && y.url ? "https:" + (null == C || null === (S = C.twitterImage) || void 0 === S || null === (w = S.image) || void 0 === w || null === (b = w.file) || void 0 === b ? void 0 : b.url) : null == H ? void 0 : H.image,
                        description: (null == C ? void 0 : C.twitterDescription) || (null == H ? void 0 : H.description)
                    }, J = null == j ? void 0 : j.filter(((e, n, l) => l.indexOf(e) === n));
                    return t.createElement(o.m, {
                        title: H.title
                    }, t.createElement("html", {
                        lang: "en"
                    }), t.createElement("link", {
                        rel: "canonical",
                        href: L === _ ? F + "/" + H.locale : k && "Product" === k ? F + "/" + H.locale + "/products/" + L : F + "/" + H.locale + "/" + L
                    }), J.map(((e, n) => t.createElement("link", {
                        key: n,
                        rel: "alternate",
                        hrefLang: e,
                        href: L === _ ? F + "/" + e : k && "Product" === k ? F + "/" + e + "/products/" + L : F + "/" + e + "/" + L
                    }))), t.createElement("meta", {
                        name: "description",
                        content: H.description
                    }), (null == Y ? void 0 : Y.title) && t.createElement("meta", {
                        name: "image",
                        content: null == Y ? void 0 : Y.image
                    }), (null == Y ? void 0 : Y.url) && t.createElement("meta", {
                        property: "og:url",
                        content: null == Y ? void 0 : Y.url
                    }), (null == Y ? void 0 : Y.title) && t.createElement("meta", {
                        property: "og:title",
                        content: null == Y ? void 0 : Y.title
                    }), (null == Y ? void 0 : Y.type) && t.createElement("meta", {
                        property: "og:type",
                        content: null == Y ? void 0 : Y.type
                    }), (null == Y ? void 0 : Y.description) && t.createElement("meta", {
                        property: "og:description",
                        content: null == Y ? void 0 : Y.description
                    }), (null == Y ? void 0 : Y.image) && t.createElement("meta", {
                        property: "og:image",
                        content: null == Y ? void 0 : Y.image
                    }), x && t.createElement("meta", {
                        name: "twitter:creator",
                        content: x
                    }), (null == W ? void 0 : W.title) && t.createElement("meta", {
                        name: "twitter:title",
                        content: null == W ? void 0 : W.title
                    }), (null == W ? void 0 : W.description) && t.createElement("meta", {
                        name: "twitter:description",
                        content: null == W ? void 0 : W.description
                    }), (null == W ? void 0 : W.image) && t.createElement("meta", {
                        name: "twitter:image",
                        content: null == W ? void 0 : W.image
                    }))
                },
                r = "69649930";
            n.A = i, i.defaultProps = {
                title: null,
                description: null,
                image: null
            }
        },
        1872: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return B
                }
            });
            var t = l(96540),
                o = l(68573),
                a = l(87839),
                i = l(59810),
                r = l(62978),
                u = l(99286),
                d = l(69942),
                s = l(67918),
                c = l(57499),
                v = l(28194),
                m = l(69263),
                g = l(121),
                p = l(34385),
                f = l(56360),
                h = l(66168),
                y = l(97379),
                S = l(18987);
            var w = e => {
                    (0, t.useEffect)((() => {
                        const n = S.A.get("contentful_id");
                        if ("2HsYdcj6svKuGU7cnAH9zn" === n || null != n && n.includes("2HsYdcj6svKuGU7cnAH9zn")) S.A.remove("contentful_id");
                        else if (n && (null == n ? void 0 : n.length) >= 34) {
                            const e = n.slice(0, 33);
                            S.A.remove("contentful_id"), S.A.set("contentful_id", e)
                        }
                        if (!n) {
                            const n = (null == e ? void 0 : e.length) >= 34 ? null == e ? void 0 : e.slice(0, 33) : e;
                            S.A.set("contentful_sid", n, {
                                expires: 1521,
                                domain: "trimble.com"
                            })
                        }
                    }), [])
                },
                b = l(89817);
            var D = e => {
                    var n;
                    let {
                        trialSummary: l,
                        marketoForm: a,
                        appData: i,
                        userInfo: r,
                        productData: u,
                        startTrial: d,
                        setLoading: s,
                        setError: c,
                        setErrorText: v
                    } = e;
                    return t.createElement("section", {
                        className: "entitlement-form-container"
                    }, t.createElement("div", {
                        className: "entitlement-form-container__content-area"
                    }, t.createElement(b.A, {
                        formId: (null == a ? void 0 : a.marketoFormId) || "1038",
                        marketoInstance: (null == a ? void 0 : a.marketoInstance) || {
                            munchkinId: "748-IYT-379",
                            formScriptSource: "//go.trimble.com",
                            compoundKeys: !1,
                            thankYou: {
                                childMarkdownRemark: {
                                    html: "<p>Thanks!</p>"
                                }
                            }
                        },
                        fieldDefaults: null == a ? void 0 : a.fieldDefaults,
                        variant: (null == a ? void 0 : a.variant) || "light",
                        header: (null == a ? void 0 : a.formHeader) || "Start Your Trial",
                        directions: null == a || null === (n = a.formDirections) || void 0 === n ? void 0 : n.formDirections,
                        sideImage: null == a ? void 0 : a.formImage,
                        eyebrow: null == a ? void 0 : a.eyebrow,
                        product: null == a ? void 0 : a.product,
                        removePadding: null == a ? void 0 : a.removePadding,
                        inLayoutWrapper: !0,
                        trialPage: !0,
                        userInfo: r,
                        productData: u,
                        startTrial: d,
                        setLoading: s,
                        setError: c,
                        setErrorText: v
                    }), l && t.createElement(o.DV, {
                        content: l
                    })))
                },
                T = (l(12041), l(74353)),
                N = l.n(T),
                L = l(39661),
                P = l(30485);
            l(7567);
            const _ = "https://cloud.api.trimble.com/cloud/trials-service-dx/1.0/",
                E = function(e, n, l, t, o) {
                    var a;
                    void 0 === o && (o = 30), e(!0), fetch(_ + "trials/initialize", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + (null === (a = JSON.parse(localStorage.getItem("user-trial-data"))) || void 0 === a ? void 0 : a.id)
                        },
                        body: JSON.stringify({
                            sku: "" + t,
                            periodInDays: o
                        })
                    }).then((e => e.json())).then((e => {
                        null != e && e.errorMessage ? (l(e), n(!0)) : setTimeout((() => {
                            window.location.reload(!0)
                        }), 3e3)
                    })).catch((e => {
                        console.log(e), n(!0), l(e)
                    }))
                },
                C = t.lazy((() => l.e(7982).then(l.bind(l, 67982)))),
                I = t.lazy((() => l.e(5237).then(l.bind(l, 75237)))),
                $ = (e, n, l) => {
                    if (e && e.length) {
                        var t, o;
                        if ("ContentfulPoint" === (null == e || null === (t = e[0]) || void 0 === t ? void 0 : t.__typename)) return e.map((e => ({
                            title: null == e ? void 0 : e.header,
                            text: null == e ? void 0 : e.description
                        })));
                        if ("ContentfulLink" === (null == e || null === (o = e[0]) || void 0 === o ? void 0 : o.__typename)) return e.map((e => {
                            var t, o, a, i, r, u, d, s, c, v;
                            let m = null == e || null === (t = e.url) || void 0 === t ? void 0 : t.url;
                            var g, p, f, h;
                            null != e && null !== (o = e.url) && void 0 !== o && null !== (a = o.realLink) && void 0 !== a && a.url && (m = (0, L.wT)(null == e || null === (g = e.url) || void 0 === g || null === (p = g.realLink) || void 0 === p ? void 0 : p.url, l));
                            "ContentfulPageBase" === (null == e || null === (i = e.url) || void 0 === i || null === (r = i.internal) || void 0 === r ? void 0 : r.type) && (m = "/" + n + "/" + (null == e || null === (f = e.url) || void 0 === f ? void 0 : f.url));
                            "ContentfulProductPage" === (null == e || null === (u = e.url) || void 0 === u || null === (d = u.internal) || void 0 === d ? void 0 : d.type) && (m = "/" + n + "/products/" + (null == e || null === (h = e.url) || void 0 === h ? void 0 : h.url));
                            return {
                                url: m,
                                text: null == e || null === (s = e.url) || void 0 === s ? void 0 : s.text,
                                type: null != e && null !== (c = e.url) && void 0 !== c && c.type && "ContentfulDownloadLink" === (null == e || null === (v = e.url) || void 0 === v ? void 0 : v.type) ? "pdf" : null
                            }
                        }))
                    }
                };
            var A = e => {
                    var n, l, a, i, r, u, d, s, c, v, m, g, p, f, h, y, S, w, b, T, A, k, M, O, x, B, F, H, j, Y, W, J, R, U, z, G, V, Z, q, K, Q, X, ee;
                    let {
                        data: ne,
                        appData: le,
                        locale: te,
                        innerPageNavData: oe,
                        setInnerPageNavData: ae,
                        region: ie,
                        regionList: re,
                        siteIdentifier: ue,
                        dataStorageEnv: de,
                        dataStorageSpaceId: se,
                        dataStorageAccessToken: ce,
                        product: ve
                    } = e;
                    const {
                        0: me,
                        1: ge
                    } = (0, t.useState)(!1), {
                        0: pe,
                        1: fe
                    } = (0, t.useState)(!1), {
                        0: he,
                        1: ye
                    } = (0, t.useState)(!1), {
                        0: Se,
                        1: we
                    } = (0, t.useState)(null), {
                        0: be,
                        1: De
                    } = (0, t.useState)(null), {
                        0: Te,
                        1: Ne
                    } = (0, t.useState)(null), {
                        0: Le,
                        1: Pe
                    } = (0, t.useState)(null), {
                        0: _e,
                        1: Ee
                    } = (0, t.useState)(null), {
                        0: Ce,
                        1: Ie
                    } = (0, t.useState)(!0), {
                        0: $e,
                        1: Ae
                    } = (0, t.useState)(null), ke = "undefined" != typeof window && !(null === (n = localStorage) || void 0 === n || !n.getItem("user_info"));
                    (0, t.useEffect)((() => {
                        "undefined" != typeof window && (() => {
                            var e;
                            if (null == ne || !ne.regions || null == ne || null === (e = ne.regions) || void 0 === e || !e.length) return void Ie(!0);
                            const n = null != ie && ie.machineName ? null == ie ? void 0 : ie.machineName : null != ie && ie.region ? null == ie ? void 0 : ie.region : "international";
                            if ("global" === n && (Ie(!0), ye(!1)), "global" !== n) {
                                var l;
                                const e = null == ne || null === (l = ne.regions) || void 0 === l ? void 0 : l.find((e => {
                                    var l, t;
                                    return (null == e || null === (l = e.machineName) || void 0 === l ? void 0 : l.toLowerCase()) === (null == n ? void 0 : n.toLowerCase()) || (null == e || null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase()) === (null == n ? void 0 : n.toLowerCase())
                                }));
                                Ie(!!e)
                            }
                        })()
                    }), [ie, null == ne ? void 0 : ne.regions]), (0, t.useEffect)((() => {
                        ke && !Se && "undefined" != typeof window && we(JSON.parse(localStorage.getItem("user_info")));
                        const e = () => {
                                ((e, n, l, t, o) => {
                                    var a;
                                    const i = new Headers;
                                    i.append("path", "/oauth/token"), i.append("hostname", "https://stage.id.trimblecloud.com"), i.append("content-type", "application/x-www-form-urlencoded"), i.append("Authorization", "Bearer " + (null === JSON || void 0 === JSON || null === (a = JSON.parse(localStorage.getItem("user-trial-data"))) || void 0 === a ? void 0 : a.id)), i.append("Access-Control-Allow-Origin", "*"), i.append("Access-Control-Allow-Methods", "Content-Type", "Authorization");
                                    const r = {
                                        method: "GET",
                                        headers: i,
                                        redirect: "follow"
                                    };
                                    e(!0), fetch(_ + "trials/health", r).then((e => e.status)).then((n => {
                                        console.log(n), 401 === n && (o(!1), e(!1)), l(!0)
                                    })).catch((l => {
                                        console.log(l), n(!0), t(l), e(!1)
                                    }))
                                })(ye, Pe, fe, Ee, ge)
                            },
                            n = () => {
                                if ("undefined" != typeof window)
                                    if (ke) {
                                        var e, n;
                                        const l = null === (e = JSON.parse(localStorage.getItem("user-trial-data"))) || void 0 === e ? void 0 : e.time;
                                        l && (e => {
                                            if (e) return !((Date.now() - e) / 6e4 > 10)
                                        })(Number(l)) && !be && null !== (n = JSON.parse(localStorage.getItem("user-trial-data"))) && void 0 !== n && n.id ? (((e, n, l, t) => {
                                            var o;
                                            l(!0), fetch(_ + "trials/licenses?sku=" + e, {
                                                headers: {
                                                    Authorization: "Bearer " + (null === (o = JSON.parse(localStorage.getItem("user-trial-data"))) || void 0 === o ? void 0 : o.id)
                                                }
                                            }).then((e => e.json())).then((e => {
                                                var t;
                                                console.log(e), e && null != e && null !== (t = e.licenses) && void 0 !== t && t.length && n(null == e ? void 0 : e.licenses), l(!1)
                                            })).catch((e => {
                                                console.log(e), n(!1)
                                            }))
                                        })(null == ve ? void 0 : ve.productTrialId, De, ye), ge(!0)) : (localStorage.removeItem("user_info"), localStorage.removeItem("user-trial-data"), ge(!1))
                                    } else ge(!1), ye(!1)
                            };
                        be || "undefined" == typeof window || (ke && e(), n())
                    }), [pe, me, be, null == ve ? void 0 : ve.productTrialId, Se, ke]), (0, t.useEffect)((() => {
                        "undefined" != typeof window && (() => {
                            if (be && null != be && be.length) {
                                const e = null == be ? void 0 : be.find((e => {
                                    var n;
                                    return (null == e || null === (n = e.sku) || void 0 === n ? void 0 : n.id) === (null == ve ? void 0 : ve.productTrialId)
                                }));
                                if (null != e && e.status && "expired" === (null == e ? void 0 : e.status)) Ae(0), Ne(!0);
                                else if ("active" === (null == e ? void 0 : e.status)) {
                                    const n = N()(null == e ? void 0 : e.deactivationDate);
                                    Ae(n.diff(Date.now(), "day") + 1)
                                }
                            }
                        })()
                    }), [be, null == ve ? void 0 : ve.productTrialId]), (0, t.useEffect)((() => {
                        (() => {
                            if (($e < 0 || 0 === $e) && (Ae(0), Ne(!0)), be && $e) ae({
                                breadcrumbs: [{
                                    title: " " + (null == ve ? void 0 : ve.productName) + " - " + (null == ne ? void 0 : ne.daysRemainingLabel) + ": " + $e
                                }]
                            });
                            else if (Te) {
                                var e;
                                ae({
                                    breadcrumbs: [{
                                        title: (null == ne || null === (e = ne.yourTrialHasEndedHeaderTextAndCta) || void 0 === e ? void 0 : e.headline) || "Your Trial Has Ended"
                                    }]
                                })
                            } else ae({
                                breadcrumbs: [{
                                    title: null != ne && ne.trialSummaryLabel ? (null == ne ? void 0 : ne.trialFormStartLabel) + " " + (null == ve ? void 0 : ve.productName) : "Start a Trial of " + (null == ve ? void 0 : ve.productName)
                                }]
                            })
                        })()
                    }), [$e, be, Te, null == ne ? void 0 : ne.daysRemainingLabel, null == ne ? void 0 : ne.trialFormStartLabel, null == ne ? void 0 : ne.trialSummaryLabel, null == ve ? void 0 : ve.productName, null == ne || null === (l = ne.yourTrialHasEndedHeaderTextAndCta) || void 0 === l ? void 0 : l.headline, ae]);
                    const {
                        queryString: Me
                    } = (0, P.A)(ue), Oe = {
                        variant: !$e || 0 === $e || $e < 0 ? "product-trial-last-day" : "product-trial",
                        summaryCard: !$e || 0 === $e || $e < 0 ? {
                            name: null == ve ? void 0 : ve.productName,
                            description: null == ne ? void 0 : ne.trialSummaryCardCustomText,
                            productLine: "0 " + ((null == ne ? void 0 : ne.trialLengthLabel) || "Days ")
                        } : {
                            name: null == ve ? void 0 : ve.productName,
                            description: null == ne || null === (xe = ne.longDescription) || void 0 === xe ? void 0 : xe.longDescription,
                            productLine: $e && $e < 2 ? $e + " " + ((null == ne ? void 0 : ne.trialLengthSingular) || "Day") : $e + " " + ((null == ne ? void 0 : ne.trialLengthLabel) || "Days "),
                            ctas: {
                                ctaOne: {
                                    text: null == ne ? void 0 : ne.downloadLabelWindows,
                                    url: null == ne ? void 0 : ne.Downloadlink_Windows,
                                    className: "primary--1"
                                },
                                ctaTwo: {
                                    text: null == ne ? void 0 : ne.viewYourProductsLabel,
                                    url: "/",
                                    className: "primary--2"
                                }
                            }
                        },
                        labels: {
                            productSummaryLabel: null == ne ? void 0 : ne.trialSummaryLabel,
                            productLineLabel: null == ne ? void 0 : ne.daysRemainingLabel
                        },
                        columns: [{
                            eyebrow: null == ne || null === (a = ne.inTrialProductSummary) || void 0 === a ? void 0 : a.columnOneEyebrow,
                            header: null == ne || null === (i = ne.inTrialProductSummary) || void 0 === i ? void 0 : i.columnOneHeader,
                            subheader: null == ne || null === (r = ne.inTrialProductSummary) || void 0 === r ? void 0 : r.columnOneDescription,
                            listType: "ContentfulPoint" === (null == ne || null === (u = ne.inTrialProductSummary) || void 0 === u || null === (d = u.columnOneBullets) || void 0 === d || null === (s = d[0]) || void 0 === s ? void 0 : s.__typename) ? "bullets" : "ContentfulLink" === (null == ne || null === (c = ne.inTrialProductSummary) || void 0 === c || null === (v = c.columnOneBullets) || void 0 === v || null === (m = v[0]) || void 0 === m ? void 0 : m.__typename) ? "links" : null,
                            list: $(null == ne || null === (g = ne.inTrialProductSummary) || void 0 === g ? void 0 : g.columnOneBullets, "en", null)
                        }, {
                            eyebrow: null == ne || null === (p = ne.inTrialProductSummary) || void 0 === p ? void 0 : p.columnTwoEyebrow,
                            header: null == ne || null === (f = ne.inTrialProductSummary) || void 0 === f ? void 0 : f.columnTwoHeader,
                            subheader: null == ne || null === (h = ne.inTrialProductSummary) || void 0 === h ? void 0 : h.columnTwoDescription,
                            listType: "ContentfulPoint" === (null == ne || null === (y = ne.inTrialProductSummary) || void 0 === y || null === (S = y.columnTwoBullets) || void 0 === S || null === (w = S[0]) || void 0 === w ? void 0 : w.__typename) ? "bullets" : "ContentfulLink" === (null == ne || null === (b = ne.inTrialProductSummary) || void 0 === b || null === (T = b.columnTwoBullets) || void 0 === T || null === (A = T[0]) || void 0 === A ? void 0 : A.__typename) ? "links" : null,
                            list: $(null == ne || null === (k = ne.inTrialProductSummary) || void 0 === k ? void 0 : k.columnTwoBullets, "en", null)
                        }]
                    };
                    var xe;
                    const Be = {
                            header: null != ne && ne.trialFormStartLabel && null != ve && ve.productName ? (null == ne ? void 0 : ne.trialFormStartLabel) + " " + (null == ve ? void 0 : ve.productName) : "Start a Trial of " + (null == ve ? void 0 : ve.productName),
                            text: "Create professional work with our most robust tools - free for 30 days!",
                            signInText: null == ne ? void 0 : ne.signInTextLabel,
                            ctas: {
                                ctaOne: {
                                    text: (null == ne ? void 0 : ne.signInLabel) || "Sign In",
                                    onClick: "undefined" != typeof window ? () => window.open(Me + "/" + te + "/products/" + (null == ve ? void 0 : ve.productName.toLowerCase().replaceAll(" ", "-")) + "/trial", "_self") : () => {},
                                    className: "primary--1"
                                },
                                ctaTwo: {
                                    text: (null == ne ? void 0 : ne.createAnAccountLabel) || "Create An Account",
                                    url: "https://id.trimble.com/ui/sign_up.html",
                                    className: "primary--2"
                                }
                            }
                        },
                        Fe = {
                            eyebrow: (null == ne ? void 0 : ne.trialSummaryLabel) || "Trial Summary",
                            productName: null == ve ? void 0 : ve.productName,
                            productNameIcon: null != ne && null !== (M = ne.productIcon) && void 0 !== M && null !== (O = M.file) && void 0 !== O && O.url ? {
                                src: null == ne || null === (x = ne.productIcon) || void 0 === x || null === (B = x.file) || void 0 === B ? void 0 : B.url,
                                alt: null == ne || null === (F = ne.productIcon) || void 0 === F || null === (H = F.file) || void 0 === H ? void 0 : H.fileName
                            } : null,
                            body: null == ne ? void 0 : ne.trialSummaryCustomText,
                            bullets: null != ne && null !== (j = ne.customContentListForTrialSummary) && void 0 !== j && j.length ? null == ne ? void 0 : ne.customContentListForTrialSummary : [],
                            durationLabel: (null == ne ? void 0 : ne.durationLabel) || "Duration",
                            duration: null != ve && ve.Trial_Duration && (null == ve ? void 0 : ve.Trial_Duration) < 10 ? (null == ve ? void 0 : ve.Trial_Duration) + " " + ((null == ne ? void 0 : ne.trialLengthSingular) || "Day") : null != ve && ve.Trial_Duration ? (null == ve ? void 0 : ve.Trial_Duration) + " " + ((null == ne ? void 0 : ne.trialLengthLabel) || "Days ") : null,
                            operatingSystemLabel: (null == ne ? void 0 : ne.operatingSystemLabel) || "Operating System",
                            operatingSystem: (null == ne ? void 0 : ne.windowsLabel) || "Windows"
                        },
                        He = {
                            trialSpecifics: Be,
                            trialSummary: Fe
                        },
                        je = {
                            variant: "variant_2",
                            contentSide: "left",
                            theme: {
                                color: "#26292E",
                                backgroundColor: "#F1F1F6"
                            },
                            header: null == ne ? void 0 : ne.anErrorOccurredLabel,
                            subHeader: JSON.stringify(null == _e ? void 0 : _e.statusCode),
                            text: null == _e ? void 0 : _e.errorMessage,
                            ctas: {
                                ctaOne: null != ne && null !== (Y = ne.errorLinks) && void 0 !== Y && Y[0] ? (0, L.I6)(null == ne || null === (W = ne.errorLinks) || void 0 === W ? void 0 : W[0], null == le ? void 0 : le.locale) : null,
                                ctaTwo: null != ne && null !== (J = ne.errorLinks) && void 0 !== J && J[1] ? (0, L.I6)(null == ne || null === (R = ne.errorLinks) || void 0 === R ? void 0 : R[1], null == le ? void 0 : le.locale) : null
                            },
                            image: {
                                src: null != ne && null !== (U = ne.errorImage) && void 0 !== U && null !== (z = U.image) && void 0 !== z && null !== (G = z.file) && void 0 !== G && G.url ? null == ne || null === (V = ne.errorImage) || void 0 === V || null === (Z = V.image) || void 0 === Z || null === (q = Z.file) || void 0 === q ? void 0 : q.url : Le,
                                alt: null != ne && null !== (K = ne.errorImage) && void 0 !== K && null !== (Q = K.image) && void 0 !== Q && Q.title ? null == ne || null === (X = ne.errorImage) || void 0 === X || null === (ee = X.image) || void 0 === ee ? void 0 : ee.title : "error"
                            }
                        };
                    return t.createElement("section", {
                        className: "trial-form"
                    }, t.createElement("div", {
                        className: "trial-form--grid-wrapper"
                    }, he && t.createElement("section", {
                        className: "trial-form__loading-spinner"
                    }, t.createElement(o.kt, null)), !be && !he && !Le && !Te && Ce && t.createElement("div", {
                        className: "trial-form__content-container"
                    }, t.createElement("section", {
                        className: "trial-form__content-container--forms"
                    }, !me && !he && t.createElement(o.R1, {
                        content: He
                    }), me && pe && !be && !he && t.createElement(D, {
                        trialSummary: Fe,
                        marketoForm: null == ne ? void 0 : ne.marketoFormForTrialSubmission,
                        appData: le,
                        userInfo: Se,
                        productData: ve,
                        startTrial: E,
                        setLoading: ye,
                        setError: Pe,
                        setErrorText: Ee
                    }))), me && be && pe && !Te && !he && !Le && Ce && t.createElement("div", {
                        className: "trial-form__started-container"
                    }, (null == ne ? void 0 : ne.inTrialMessagingHeaderTextAndCta) && t.createElement(I, {
                        key: "format-and-render-cta-text-header-wrapper-" + (null == ne ? void 0 : ne.Downloadlink_Windows),
                        data: null == ne ? void 0 : ne.inTrialMessagingHeaderTextAndCta
                    }), Oe && t.createElement(o.cF, {
                        content: Oe
                    })), me && Te && !he && !Le && Ce && t.createElement("div", {
                        className: "trial-form__ended-container"
                    }, (null == ne ? void 0 : ne.yourTrialHasEndedHeaderTextAndCta) && t.createElement(I, {
                        key: "format-and-render-cta-text-header-wrapper-" + (null == ne ? void 0 : ne.Downloadlink_Mac),
                        data: null == ne ? void 0 : ne.yourTrialHasEndedHeaderTextAndCta
                    }), Oe && t.createElement(o.cF, {
                        content: Oe
                    })), !Ce && t.createElement("div", {
                        className: "trial-form--region-block"
                    }, "Sorry this product is not available in your region"), Le && !he && t.createElement("div", {
                        className: "trial-form__error-container"
                    }, je && t.createElement(o.UL, {
                        content: je
                    }))), Ce && (() => {
                        var e, n;
                        const l = null == ne || null === (e = ne.ctaWithTextAndHeaderWithAccordionForTrials) || void 0 === e ? void 0 : e.find((e => "ContentfulAccordion" === (null == e ? void 0 : e.__typename))),
                            o = null == ne || null === (n = ne.ctaWithTextAndHeaderWithAccordionForTrials) || void 0 === n ? void 0 : n.find((e => "ContentfulCtaWithTextAndHeader" === (null == e ? void 0 : e.__typename)));
                        return t.createElement("div", {
                            className: "trial-form__question-container"
                        }, o && t.createElement(I, {
                            key: "format-and-render-cta-text-header-wrapper-" + o,
                            data: o,
                            overrideTheme: null,
                            nested: null,
                            locale: null == le ? void 0 : le.locale,
                            productPage: !0,
                            marginTopAndBottom: !0,
                            appData: le
                        }), l && t.createElement(C, {
                            data: l
                        }))
                    })())
                },
                k = l(64810);
            var M = (e, n, l, o) => {
                const a = (0, t.useRef)(!1);
                (0, t.useEffect)((() => {
                    if (window && "undefined" != typeof window) {
                        const l = l => {
                            var t, i, r, u, d;
                            if (a.current) return void(a.current = !1);
                            let s = null === (t = l.detail) || void 0 === t || null === (i = t.locale) || void 0 === i ? void 0 : i.toLowerCase();
                            const c = e.pathname.replace(e.pathname.split("/")[1], "").replace("/", "");
                            s && "en-us" !== s || (s = "en");
                            const v = o.reduce(((e, n) => {
                                var l, t;
                                return (null == n || null === (l = n.code) || void 0 === l ? void 0 : l.toLowerCase()) === (null === (t = s) || void 0 === t ? void 0 : t.toLowerCase()) && (e = n), e
                            }), {});
                            "{}" !== JSON.stringify(v) && ((null != e && null !== (r = e.host) && void 0 !== r && r.includes("localhost:8090") || null != e && null !== (u = e.host) && void 0 !== u && u.includes("create.netlify.com") || null != e && null !== (d = e.host) && void 0 !== d && d.includes("stackbit.dev")) && localStorage.setItem("languageSettings", JSON.stringify({
                                region: null == n ? void 0 : n.region,
                                machineName: null == n ? void 0 : n.machineName,
                                language: v
                            })), (0, k.oo)("/" + s + c))
                        };
                        return window.addEventListener("stackbitLocaleChanged", l), () => {
                            window.removeEventListener("stackbitLocaleChanged", l)
                        }
                    }
                }), [o, l])
            };
            var O = (e, n, l, t, o, a) => {
                var i, r, u, d, s, c, v, m, g;
                const p = !0 === (null == e ? void 0 : e.displayPageGroupNavigation) && null != e && e.onPageNavGroup ? {
                        navItems: null == e || null === (i = e.onPageNavGroup) || void 0 === i ? void 0 : i.navItems,
                        navCta: (0, L.Ay)(null == e || null === (r = e.onPageNavGroup) || void 0 === r ? void 0 : r.navCta, n, null == e || null === (u = e.onPageNavGroup) || void 0 === u || null === (d = u.navCta) || void 0 === d || null === (s = d.url) || void 0 === s ? void 0 : s.__typename, l, t, o, a),
                        navTitle: null == e || null === (c = e.onPageNavGroup) || void 0 === c ? void 0 : c.navTitle
                    } : {
                        navItems: null == e ? void 0 : e.onPageNavItems,
                        navCta: (0, L.Ay)(null == e ? void 0 : e.onPageNavCta, n, null == e || null === (v = e.onPageNavCta) || void 0 === v || null === (m = v.url) || void 0 === m ? void 0 : m.__typename, l, t, o, a),
                        navTitle: null == e ? void 0 : e.onPageNavTitle
                    },
                    f = null == p || null === (g = p.navItems) || void 0 === g ? void 0 : g.map((e => {
                        var i, r;
                        return null != (0, L.Ay)(e, n, null == e || null === (i = e.url) || void 0 === i ? void 0 : i.__typename, l, t, o, a) ? (0, L.Ay)(e, n, null == e || null === (r = e.url) || void 0 === r ? void 0 : r.__typename, l, t, o, a) : null
                    }));
                return p.navItems = null == f ? void 0 : f.filter((e => null != e)), p
            };
            l(72774), l(23114);
            var x = e => {
                let {
                    pageContent: n,
                    location: l,
                    locale: o = "en",
                    appData: a,
                    productPage: i,
                    region: u,
                    siteAppData: d,
                    currentSpaceId: s,
                    products: c,
                    siteIdentifier: v,
                    isPageSection: m
                } = e;
                return t.createElement(t.Fragment, null, t.createElement(r.default, {
                    pageSections: n
                }))
            };
            var B = e => {
                var n, l, S, b, D, T, N, L, P, _, E, C, I, $, k, B, F, H, j, Y, W, J, R, U, z, G, V, Z;
                let {
                    data: q,
                    pageContext: K,
                    location: Q
                } = e;
                const [X, ee] = (0, g.Pj)(), {
                    0: ne,
                    1: le
                } = (0, t.useState)((null == q || null === (n = q.contentfulMainNavigation) || void 0 === n || null === (l = n.languageSelector) || void 0 === l ? void 0 : l.regions) || (null == q || null === (S = q.contentfulPageBase) || void 0 === S ? void 0 : S.regions)), {
                    0: te,
                    1: oe
                } = (0, t.useState)(!1), {
                    0: ae,
                    1: ie
                } = (0, t.useState)(null), {
                    0: re,
                    1: ue
                } = (0, t.useState)(null), {
                    0: de,
                    1: se
                } = (0, t.useState)(!1), {
                    innerPageNavData: ce,
                    setInnerPageNavData: ve
                } = (0, o.MF)({
                    breadcrumbs: [],
                    siblingPages: []
                }), {
                    country: me
                } = (0, p.A)(ne, null == q || null === (b = q.siteAppData) || void 0 === b ? void 0 : b.internationalRegionLabel, null == q || null === (D = q.siteAppData) || void 0 === D ? void 0 : D.internationalRegionMachineName, le, null == q || null === (T = q.contentfulMainNavigation) || void 0 === T || null === (N = T.languageSelector) || void 0 === N ? void 0 : N.regions), ge = (0, f.A)(me, ne, null == q || null === (L = q.siteAppData) || void 0 === L ? void 0 : L.internationalRegionLabel, null == q || null === (P = q.siteAppData) || void 0 === P ? void 0 : P.internationalRegionMachineName), {
                    languageSettings: pe,
                    saveLanguageSettings: fe
                } = (0, h.A)(Q, ge, ne, null == q || null === (_ = q.contentfulMainNavigation) || void 0 === _ || null === (E = _.languageSelector) || void 0 === E ? void 0 : E.languages);
                M(Q, ge, ne, null == q || null === (C = q.contentfulMainNavigation) || void 0 === C || null === (I = C.languageSelector) || void 0 === I ? void 0 : I.languages);
                const he = "undefined" != typeof window && !(null === ($ = localStorage) || void 0 === $ || !$.getItem("user_info")),
                    ye = null == pe || null === (k = pe.language) || void 0 === k ? void 0 : k.code,
                    {
                        breadcrumbs: Se,
                        siblingPages: we,
                        overlayNotice: be,
                        commonSearches: De,
                        locale: Te,
                        fullPath: Ne,
                        slug: Le,
                        isPublicPage: Pe,
                        products: _e,
                        homepage: Ee,
                        currentSpaceId: Ce,
                        siteIdentifier: Ie,
                        __typename: $e,
                        seoData: Ae,
                        trialFormPageData: ke,
                        contentfulId: Me
                    } = K || {},
                    Oe = null == _e ? void 0 : _e.filter((e => {
                        var n;
                        return (null == e || null === (n = e.node) || void 0 === n ? void 0 : n.node_locale) === Te
                    })),
                    xe = null == Oe ? void 0 : Oe.map((e => e.node)),
                    Be = null != q && null !== (B = q.contentfulPageBase) && void 0 !== B && null !== (F = B.pageSeo) && void 0 !== F && null !== (H = F.opengraphImage) && void 0 !== H && H.image ? "https:" + (null == q || null === (j = q.contentfulPageBase) || void 0 === j || null === (Y = j.pageSeo) || void 0 === Y || null === (W = Y.opengraphImage) || void 0 === W || null === (J = W.image) || void 0 === J || null === (R = J.file) || void 0 === R ? void 0 : R.url) : null,
                    Fe = null == Oe ? void 0 : Oe.find((e => {
                        var n, l, t;
                        return (null == e || null === (n = e.node) || void 0 === n ? void 0 : n.sku) === (null == q || null === (l = q.contentfulProductPage) || void 0 === l || null === (t = l.productTemplate) || void 0 === t ? void 0 : t.productSku)
                    }));
                w("" + (0, t.useId)() + (null == Me ? void 0 : Me.contentful_id)), (0, t.useEffect)((() => {
                    null != xe && xe.length && ie(xe.map((e => (e => {
                        const n = (0, y.T)(null == e ? void 0 : e.regions),
                            l = JSON.parse(JSON.stringify(e));
                        return delete l.regions, l.regions = n, l
                    })(e))))
                }), [ge, Fe, me]), (0, t.useEffect)((() => {
                    "undefined" != typeof window && (() => {
                        var e, n, l;
                        if (null == q || null === (e = q.contentfulPageBase) || void 0 === e || !e.regions || null == q || null === (n = q.contentfulPageBase) || void 0 === n || null === (l = n.regions) || void 0 === l || !l.length) return void se(!1);
                        const t = null != ge && ge.machineName ? null == ge ? void 0 : ge.machineName : null != ge && ge.region ? null == ge ? void 0 : ge.region : "international";
                        if ("global" === t.toLowerCase() || "international" === t.toLowerCase()) se(!1);
                        else {
                            var o, a;
                            const e = null == q || null === (o = q.contentfulPageBase) || void 0 === o || null === (a = o.regions) || void 0 === a ? void 0 : a.find((e => {
                                var n, l;
                                return (null == e || null === (n = e.machineName) || void 0 === n ? void 0 : n.toLowerCase()) === (null == t ? void 0 : t.toLowerCase()) || (null == e || null === (l = e.name) || void 0 === l ? void 0 : l.toLowerCase()) === (null == t ? void 0 : t.toLowerCase())
                            }));
                            se(!!e)
                        }
                    })()
                }), [ge, me, null == q ? void 0 : q.regions]);
                const He = (0, v.jU)(be),
                    je = !(null != q && null !== (U = q.contentfulMainNavigation) && void 0 !== U && U.disableLanguageRegion) && ye || Te,
                    Ye = "en-us" === (null == je ? void 0 : je.toLowerCase()) ? "en" : null != je && je.toLowerCase() ? je.toLowerCase() : "en",
                    We = null != q && q.contentfulGlobalFooter ? null == q ? void 0 : q.contentfulGlobalFooter : null == K ? void 0 : K.globalFooterFallback,
                    Je = (0, t.useMemo)((() => {
                        var e;
                        return { ...null == q ? void 0 : q.contentfulFooter,
                            ...We,
                            contentfulId: null == q || null === (e = q.contentfulFooter) || void 0 === e ? void 0 : e.contentfulId
                        }
                    }), [q]);
                (0, t.useEffect)((() => {
                    (Se || we) && ve({
                        breadcrumbs: Se,
                        siblingPages: we
                    })
                }), [Se, we, ve]), (0, t.useEffect)((() => {
                    ee({
                        type: "SET_LOCALE",
                        payload: Ye
                    })
                }), [ee, Ye]);
                const Re = () => !(!1 === Pe && !he);
                (0, t.useEffect)((() => {
                    var e, n;
                    if (q) return Re() ? void(!0 === (null == q || null === (e = q.contentfulPageBase) || void 0 === e ? void 0 : e.jumpNavDisplay) && null != q && null !== (n = q.contentfulPageBase) && void 0 !== n && n.sections && oe(!0)) : (localStorage.setItem("blocked_private_page", "/" + Ne), void(0, a.oo)("/401"))
                }), [q, Ye, X, Le, he, Re, de, Ne]), (0, t.useEffect)((() => {
                    const e = async e => {
                        e.preventDefault(), await fetch("/__refresh", {
                            method: "POST"
                        })
                    };
                    return window.addEventListener("stackbitObjectsChanged", e), () => {
                        window.removeEventListener("stackbitObjectsChanged", e)
                    }
                }), []);
                const Ue = O(null == q ? void 0 : q.contentfulPageBase, Ye, null == K ? void 0 : K.homepage, Ce, _e, Ie),
                    ze = null != q && null !== (z = q.contentfulPageBase) && void 0 !== z && z.sections ? (0, s.A)(null == q || null === (G = q.contentfulPageBase) || void 0 === G ? void 0 : G.sections) : null,
                    Ge = null != q && null !== (V = q.contentfulPageBase) && void 0 !== V && V.jumpNavType ? null == q || null === (Z = q.contentfulPageBase) || void 0 === Z ? void 0 : Z.jumpNavType : "Vertical",
                    Ve = () => {
                        var e, n;
                        let l;
                        const t = null == q || null === (e = q.contentfulPageBase) || void 0 === e || null === (n = e.sections) || void 0 === n ? void 0 : n.find((e => "ContentfulMetaLocator" === (null == e ? void 0 : e.__typename)));
                        var o;
                        null != t && t.locales && (l = null == t || null === (o = t.locales) || void 0 === o ? void 0 : o.find((e => (null == e ? void 0 : e.key) === Ye)));
                        return l || (l = {
                            key: "en",
                            value: "en-US (3)"
                        }), l
                    };
                return t.createElement(g.cy.Consumer, null, (e => {
                    var n, l, a, s, v, g, p, f, h, y, S, w, b, D, T, N, L;
                    let [P, _] = e;
                    return (Pe || Re()) && t.createElement(t.Fragment, null, t.createElement(u.A, {
                        title: null != q && null !== (n = q.contentfulPageBase) && void 0 !== n && n.pageName ? null == q || null === (l = q.contentfulPageBase) || void 0 === l ? void 0 : l.pageName : null == q ? void 0 : q.jobPostingId,
                        description: null != q && null !== (a = q.contentfulPageBase) && void 0 !== a && a.pageName ? null == q || null === (s = q.contentfulPageBase) || void 0 === s ? void 0 : s.pageName : null == q ? void 0 : q.jobPostingId,
                        seoCompose: null != q && null !== (v = q.contentfulPageBase) && void 0 !== v && v.pageSeo ? null == q || null === (g = q.contentfulPageBase) || void 0 === g ? void 0 : g.pageSeo : Ae || (null != q && null !== (p = q.contentfulPageBase) && void 0 !== p && p.pageSeo ? null == q || null === (f = q.contentfulPageBase) || void 0 === f ? void 0 : f.pageSeo : null),
                        fullPath: Ne,
                        slug: Le,
                        locale: Ye,
                        homepage: Ee,
                        appData: null == q ? void 0 : q.siteAppData,
                        image: Be
                    }), t.createElement(m.A, {
                        data: q,
                        pageContext: K,
                        location: Q,
                        videoProgress: re,
                        setVideoProgress: ue
                    }), t.createElement(d.A, null), He && t.createElement(c.A, {
                        location: Q,
                        overlayNotice: He,
                        locale: Ye
                    }), t.createElement(i.A, {
                        region: ge,
                        regionBlocked: de,
                        innerPageNavData: ce,
                        rawNavigationData: null == q ? void 0 : q.contentfulMainNavigation,
                        rawFlyoutData: null == q ? void 0 : q.contentfulFlyout,
                        rawFlyoutCartData: null == q ? void 0 : q.contentfulFlyoutCart,
                        rawFooterData: Je,
                        locale: Ye,
                        location: Q,
                        commonSearches: De,
                        isPublicPage: Pe,
                        rawAppData: null == q ? void 0 : q.siteAppData,
                        languageSettings: pe,
                        saveLanguageSettings: fe,
                        products: ae,
                        homepageSlug: null == K ? void 0 : K.homepage,
                        siteIdentifier: Ie,
                        seoStructuredData: null == q || null === (h = q.contentfulPageBase) || void 0 === h ? void 0 : h.json,
                        regions: ne,
                        showJumpNav: null == q || null === (y = q.contentfulPageBase) || void 0 === y ? void 0 : y.jumpNavDisplay,
                        jumpNavItems: ze,
                        jumpNavType: Ge,
                        currentSpaceId: Ce,
                        onPageNavData: Ue,
                        metaLocatorLanguage: Ve()
                    }, t.createElement("div", {
                        "data-sb-object-id": null == q || null === (S = q.contentfulPageBase) || void 0 === S ? void 0 : S.contentfulId
                    }, t.createElement("section", {
                        className: "luna-layout__sections",
                        id: "page-content",
                        "data-sb-field-path": "sections"
                    }, !de && !ke && (null == q || null === (w = q.contentfulPageBase) || void 0 === w ? void 0 : w.sections) && t.createElement(r.default, {
                        pageSections: q.contentfulPageBase.sections,
                        location: Q,
                        locale: Ye,
                        appData: null == q ? void 0 : q.siteAppData,
                        pageContext: K,
                        region: ge,
                        videoProgress: re,
                        setVideoProgress: ue,
                        siteAppData: null == q ? void 0 : q.siteAppData,
                        currentSpaceId: Ce,
                        products: _e,
                        siteIdentifier: Ie
                    }), de && t.createElement(x, {
                        pageContent: null == q || null === (b = q.contentfulRegionBlockPage) || void 0 === b ? void 0 : b.pageContent,
                        location: Q,
                        locale: Ye,
                        appData: null == q ? void 0 : q.siteAppData,
                        pageContext: K,
                        region: ge,
                        siteAppData: null == q ? void 0 : q.siteAppData,
                        currentSpaceId: Ce,
                        products: _e,
                        siteIdentifier: Ie
                    }), !0 === te && "Vertical" === Ge && t.createElement(o.Yc, {
                        pageSections: ze,
                        jumpNavTitle: null != q && null !== (D = q.contentfulPageBase) && void 0 !== D && D.jumpNavTitle ? null == q || null === (T = q.contentfulPageBase) || void 0 === T ? void 0 : T.jumpNavTitle : "This Page",
                        jumpNavType: "vertical"
                    }), ke && t.createElement(A, {
                        data: ke,
                        appData: null == q ? void 0 : q.siteAppData,
                        locale: Ye,
                        setInnerPageNavData: ve,
                        region: ge,
                        siteIdentifier: Ie,
                        regionList: null == q || null === (N = q.contentfulMainNavigation) || void 0 === N || null === (L = N.languageSelector) || void 0 === L ? void 0 : L.regions
                    })))))
                }))
            }
        },
        67918: function(e, n, l) {
            "use strict";
            l(96540);
            n.A = e => {
                const n = [];
                return e && null !== e && Array.isArray(e) && (null == e || e.forEach((e => {
                    null != e && null != e && e.anchor && null != e && e.jumpNavTitle && (e.link = null == e ? void 0 : e.anchor, e.title = null == e ? void 0 : e.jumpNavTitle, n.push(e))
                }))), n
            }
        },
        7567: function(e, n, l) {
            "use strict";
            n.A = l.p + "static/error-4156c5d71aeb4e1f68e594c463897f25.webp"
        }
    }
]);
//# sourceMappingURL=component---src-templates-page-template-js-80d1375798a0648a424f.js.map