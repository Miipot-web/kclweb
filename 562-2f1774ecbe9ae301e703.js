"use strict";
(self.webpackChunkgatsby_mxp_project = self.webpackChunkgatsby_mxp_project || []).push([
    [562], {
        10562: function(t, e, l) {
            l.r(e);
            var n = l(96540),
                o = l(68573),
                i = l(82421);
            const a = n.lazy((() => Promise.resolve().then(l.bind(l, 62978)))),
                r = n.lazy((() => l.e(1959).then(l.bind(l, 91959))));
            e.default = t => {
                var e, l, u, d, g, c, m, s, f, v, h, p, k, _, C, y, b, w, L, I, B, R, E, P, j, x, F, N, S, M, A, W, z, O, V, D, J, T, H, q, G, K, Q, U, X, Y, Z, $, tt, et, lt, nt;
                const {
                    content: ot,
                    locale: it,
                    location: at,
                    videoProgress: rt,
                    setVideoProgress: ut,
                    currentSpaceId: dt,
                    index: gt,
                    products: ct,
                    siteIdentifier: mt,
                    siteAppData: st
                } = t, {
                    separateContainers: ft,
                    disableTopBottomMargin: vt,
                    fontColor: ht,
                    secondaryFontColor: pt,
                    backgroundColor: kt,
                    secondaryBackgroundColor: _t,
                    contentRatio: Ct,
                    contentWidth: yt,
                    groupedComponent: bt
                } = ot;
                let {
                    contentOrientation: wt,
                    bottomRightContent: Lt,
                    topLeftContent: It
                } = ot;
                const Bt = t => {
                        var e;
                        return null == t || null === (e = t.find((t => "ContentfulMarketoForm" === (null == t ? void 0 : t.__typename)))) || void 0 === e ? void 0 : e.__typename
                    },
                    Rt = "ContentfulMarketoForm" === Bt(It) || "ContentfulMarketoForm" === Bt(Lt) ? null : null != ot && null !== (e = ot.topLeftBackgroundImage) && void 0 !== e && null !== (l = e.image) && void 0 !== l && null !== (u = l.file) && void 0 !== u && u.url ? {
                        url: null == ot || null === (d = ot.topLeftBackgroundImage) || void 0 === d || null === (g = d.image) || void 0 === g || null === (c = g.file) || void 0 === c ? void 0 : c.url,
                        height: null == ot || null === (m = ot.topLeftBackgroundImage) || void 0 === m || null === (s = m.image) || void 0 === s || null === (f = s.file) || void 0 === f || null === (v = f.details) || void 0 === v || null === (h = v.image) || void 0 === h ? void 0 : h.height,
                        width: null == ot || null === (p = ot.topLeftBackgroundImage) || void 0 === p || null === (k = p.image) || void 0 === k || null === (_ = k.file) || void 0 === _ || null === (C = _.details) || void 0 === C || null === (y = C.image) || void 0 === y ? void 0 : y.width,
                        x: null == ot || null === (b = ot.topLeftBackgroundImage) || void 0 === b || null === (w = b.focalPoint) || void 0 === w || null === (L = w.focalPoint) || void 0 === L ? void 0 : L.x,
                        y: null == ot || null === (I = ot.topLeftBackgroundImage) || void 0 === I || null === (B = I.focalPoint) || void 0 === B || null === (R = B.focalPoint) || void 0 === R ? void 0 : R.y,
                        alt: null == ot || null === (E = ot.topLeftBackgroundImage) || void 0 === E ? void 0 : E.title
                    } : "ContentfulLottieAnimation" === (null == ot || null === (P = ot.topLeftBackgroundImage) || void 0 === P ? void 0 : P.__typename) ? {
                        urlContent: (null == ot || null === (j = ot.topLeftBackgroundImage) || void 0 === j ? void 0 : j.srcLink) || null,
                        jsonContent: (null == ot || null === (x = ot.topLeftBackgroundImage) || void 0 === x ? void 0 : x.json) || null
                    } : null,
                    Et = "ContentfulMarketoForm" === Bt(It) || "ContentfulMarketoForm" === Bt(Lt) ? null : null != ot && null !== (F = ot.bottomRightBackgroundImage) && void 0 !== F && null !== (N = F.image) && void 0 !== N && null !== (S = N.file) && void 0 !== S && S.url ? {
                        url: null == ot || null === (M = ot.bottomRightBackgroundImage) || void 0 === M || null === (A = M.image) || void 0 === A || null === (W = A.file) || void 0 === W ? void 0 : W.url,
                        height: null == ot || null === (z = ot.bottomRightBackgroundImage) || void 0 === z || null === (O = z.image) || void 0 === O || null === (V = O.file) || void 0 === V || null === (D = V.details) || void 0 === D || null === (J = D.image) || void 0 === J ? void 0 : J.height,
                        width: null == ot || null === (T = ot.bottomRightBackgroundImage) || void 0 === T || null === (H = T.image) || void 0 === H || null === (q = H.file) || void 0 === q || null === (G = q.details) || void 0 === G || null === (K = G.image) || void 0 === K ? void 0 : K.width,
                        x: null == ot || null === (Q = ot.bottomRightBackgroundImage) || void 0 === Q || null === (U = Q.focalPoint) || void 0 === U || null === (X = U.focalPoint) || void 0 === X ? void 0 : X.x,
                        y: null == ot || null === (Y = ot.bottomRightBackgroundImage) || void 0 === Y || null === (Z = Y.focalPoint) || void 0 === Z || null === ($ = Z.focalPoint) || void 0 === $ ? void 0 : $.y,
                        alt: null == ot || null === (tt = ot.bottomRightBackgroundImage) || void 0 === tt ? void 0 : tt.title
                    } : "ContentfulLottieAnimation" === (null == ot || null === (et = ot.bottomRightBackgroundImage) || void 0 === et ? void 0 : et.__typename) ? {
                        urlContent: (null == ot || null === (lt = ot.bottomRightBackgroundImage) || void 0 === lt ? void 0 : lt.srcLink) || null,
                        jsonContent: (null == ot || null === (nt = ot.bottomRightBackgroundImage) || void 0 === nt ? void 0 : nt.json) || null
                    } : null,
                    Pt = {
                        desktop: {
                            height: 461,
                            ratio: {
                                height: 461
                            }
                        }
                    };
                let jt = "ContentfulMarketoForm" === Bt(It) || "ContentfulMarketoForm" === Bt(Lt) ? "transparent-dark-text" : "light" === ht ? "transparent-light-text" : "transparent-dark-text",
                    xt = "ContentfulMarketoForm" === Bt(It) || "ContentfulMarketoForm" === Bt(Lt) ? "transparent-dark-text" : "light" === pt ? "transparent-light-text" : "transparent-dark-text";
                const Ft = (t, e, l, o, r) => {
                    const u = JSON.parse(JSON.stringify(e)).map((t => {
                        var e, l;
                        (t.contentWidth = !1, t.videoProgress = rt, t.setVideoProgress = ut, "ContentfulMarketoForm" === t.__typename) && (t.inLayoutWrapper = !0, "white" !== r.toLowerCase() && "concrete-gray" !== r.toLowerCase() && "concrete gray" !== r.toLowerCase() ? (t.variant = "dark", t.backgroundColor = null === (e = (0, i.A)({
                            theme: null == kt ? void 0 : kt.split(" ").join("-").toLowerCase()
                        })) || void 0 === e ? void 0 : e.backgroundColor) : (t.variant = "light", t.backgroundColor = null === (l = (0, i.A)({
                            theme: null == kt ? void 0 : kt.split(" ").join("-").toLowerCase()
                        })) || void 0 === l ? void 0 : l.backgroundColor));
                        return t
                    }));
                    return n.createElement(a, {
                        parentIndex: t,
                        pageSections: u || [],
                        location: at,
                        locale: it || "en",
                        overrideTheme: l,
                        nested: !0,
                        ignoreFocalPoint: !0,
                        currentSpaceId: o,
                        products: ct,
                        siteIdentifier: mt,
                        siteAppData: st
                    })
                };
                let Nt = (null == kt ? void 0 : kt.split(" ").join("-").toLowerCase()) || "",
                    St = (null == _t ? void 0 : _t.split(" ").join("-").toLowerCase()) || "";
                const Mt = "Single Component" === wt,
                    At = "Vertical" === wt || "Single Component" === wt,
                    Wt = t => {
                        let e = "contentful-layout__item";
                        return e += ((t, e) => {
                            let l = "";
                            switch (l += 1 === e ? " " + (ft && !yt ? "contentful-layout__item--far-left-separate" : "contentful-layout__item--far-left") + " " + Nt : " " + (ft && !yt ? "contentful-layout__item--far-right-separate" : "contentful-layout__item--far-right") + " " + St, l += yt ? " contentful-layout__item--far-left--full-width" : "", t) {
                                case "Left larger":
                                    l += 1 === e ? " contentful-layout__item--far-left" + (ft && !yt ? "-separate" : "") + "--large" : " contentful-layout__item--far-right" + (ft && !yt ? "-separate" : "") + "--small";
                                    break;
                                case "Right larger":
                                    l += 1 === e ? " contentful-layout__item--far-left" + (ft && !yt ? "-separate" : "") + "--small" : " contentful-layout__item--far-right" + (ft && !yt ? "-separate" : "") + "--large";
                                    break;
                                default:
                                    l += 1 === e ? " contentful-layout__item--far-left" + (ft && !yt ? "-separate" : "") + "--medium" : " contentful-layout__item--far-right" + (ft && !yt ? "-separate" : "") + "--medium"
                            }
                            return l
                        })(Ct, t), At && 1 === t && "Single Component" !== wt ? e = "contentful-layout__item contentful-layout__item--vertical" : At && (e = "contentful-layout__item contentful-layout__item--vertical contentful-layout__item--vertical--last"), e
                    },
                    zt = (t, e, l) => null != t && t.urlContent || null != t && t.jsonContent ? n.createElement(n.Suspense, {
                        fallback: n.createElement("div", null, "Loading...")
                    }, n.createElement(r, {
                        data: {
                            srcLink: (null == t ? void 0 : t.urlContent) || null,
                            json: (null == t ? void 0 : t.jsonContent) || null,
                            style: {
                                width: "100%",
                                display: "block"
                            },
                            ratio: l || {
                                height: 1,
                                width: 1
                            }
                        }
                    })) : n.createElement(n.Suspense, {
                        fallback: n.createElement("div", null, "Loading...")
                    }, n.createElement(o.N9, {
                        imageSizes: e,
                        fullHeightWrapper: !0,
                        focalPointImage: t && t,
                        alt: null != t && t.alt ? null == t ? void 0 : t.alt : null == t ? void 0 : t.title
                    })),
                    Ot = (t, e, l) => {
                        if ("left" === t) {
                            if (!1 === e && "Left larger" === l) return {
                                width: 5,
                                height: 4
                            };
                            if (!1 === e && "Right larger" === l) return {
                                width: 3,
                                height: 4
                            };
                            if (!0 === e && "Left larger" === l) return {
                                width: 27,
                                height: 19
                            };
                            if (!0 === e && "Right larger" === l) return {
                                width: 81,
                                height: 95
                            }
                        } else if ("right" === t) {
                            if (!1 === e && "Left larger" === l) return {
                                width: 3,
                                height: 4
                            };
                            if (!1 === e && "Right larger" === l) return {
                                width: 5,
                                height: 4
                            };
                            if (!0 === e && "Left larger" === l) return {
                                width: 81,
                                height: 95
                            };
                            if (!0 === e && "Right larger" === l) return {
                                width: 27,
                                height: 19
                            }
                        }
                        return {
                            width: 1,
                            height: 1
                        }
                    };
                return n.createElement("section", {
                    className: "default-layout \n        " + (!0 === vt ? "no-vertical-margin" : "") + " \n        " + (yt ? Nt : "") + " \n        " + (bt ? "grouped-component" : "") + "\n        " + (Nt ? "" : "default-layout--no-top-margin") + "\n      "
                }, n.createElement("div", {
                    className: (() => {
                        let t = "contentful-layout__wrapper";
                        return t += yt ? " " + Nt + " " + (!Mt || Lt ? St + "--alt" : "") + " full-width" : " " + Nt + " " + (!Mt || Lt ? St + "--alt" : ""), t
                    })() + " " + (Rt ? "has-bg-image" : "") + " " + (ft ? " contentful-layout__wrapper--separate-containers" : ""),
                    "data-sb-object-id": null != ot && ot.contentfulId ? ot.contentfulId : null
                }, n.createElement("div", {
                    className: "grid-container"
                }, ((null == It ? void 0 : It.length) > 0 || Rt) && n.createElement("div", {
                    className: Wt(1) + " " + (Rt ? "has-bg-image " + (It || Lt ? "" : "bg-image-only") : "")
                }, n.createElement("div", {
                    className: "content-section-left",
                    "data-sb-field-path": "topLeftContent"
                }, Rt && n.createElement("div", {
                    className: "background-image " + (yt && !At ? "image-full-width-left" : "")
                }, zt(Rt, Pt, Ot("left", yt, Ct))), (null == It ? void 0 : It.length) > 0 && Ft(gt, It, jt, dt, Nt))), "Single Component" !== wt && ((null == Lt ? void 0 : Lt.length) > 0 || Et) && n.createElement("div", {
                    className: Wt(2) + " " + (Et ? "has-bg-image " + (It || Lt ? "" : "bg-image-only") : "")
                }, n.createElement("div", {
                    className: "content-section-right",
                    "data-sb-field-path": "bottomRightContent"
                }, Et && n.createElement("div", {
                    className: "background-image " + (yt && !At ? "image-full-width-right" : "")
                }, zt(Et, Pt, Ot("right", yt, Ct))), (null == Lt ? void 0 : Lt.length) && Ft(gt, Lt, xt, dt, St))))))
            }
        }
    }
]);
//# sourceMappingURL=562-2f1774ecbe9ae301e703.js.map