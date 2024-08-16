"use strict";
(self.webpackChunkgatsby_mxp_project = self.webpackChunkgatsby_mxp_project || []).push([
    [4249], {
        74249: function(l, n, o) {
            o.r(n), o.d(n, {
                default: function() {
                    return _
                }
            });
            o(12041);
            var e = o(96540),
                i = o(81331),
                u = o(51315),
                t = o(85165),
                d = o(49939),
                r = o(22730),
                v = o(39661),
                a = o(11186);
            var c = function(l, n, o, e, i) {
                    return void 0 === o && (o = ""), l && Array.isArray(l) ? l.map((u => {
                        var t, d, r, c, s, m, k, g, p, b, f, y, h, A;
                        const _ = null != u && null !== (t = u.link) && void 0 !== t && null !== (d = t.url) && void 0 !== d && d.contentType ? null == u || null === (r = u.link) || void 0 === r || null === (c = r.url) || void 0 === c ? void 0 : c.contentType : null != u && null !== (s = u.link) && void 0 !== s && null !== (m = s.url) && void 0 !== m && null !== (k = m.internal) && void 0 !== k && k.type ? null == u || null === (g = u.link) || void 0 === g || null === (p = g.url) || void 0 === p || null === (b = p.internal) || void 0 === b ? void 0 : b.type : null;
                        return {
                            icon: null != u && null !== (f = u.miniBlockIcon) && void 0 !== f && f.icon ? (0, a.A)(null == u || null === (y = u.miniBlockIcon) || void 0 === y ? void 0 : y.icon) : null != u && null !== (h = u.listItemIcon) && void 0 !== h && h.icon ? (0, a.A)(null == u || null === (A = u.listItemIcon) || void 0 === A ? void 0 : A.icon) : null,
                            header: null != u && u.header ? null == u ? void 0 : u.header : null,
                            text: null != u && u.text ? null == u ? void 0 : u.text : null,
                            link: (0, v.Ay)(null == u ? void 0 : u.link, n, _, null, o, e, i),
                            Link: null == l ? void 0 : l.Link,
                            contentfulId: null == u ? void 0 : u.contentfulId
                        }
                    })) : null
                },
                s = o(80948),
                m = o(82339),
                k = o(64810);
            var g = function(l, n, o, e, i, u) {
                    return void 0 === n && (n = "en"), void 0 === e && (e = ""), l && Array.isArray(l) ? l.map((t => {
                        var d, r, c, s, g, p, b, f, y, h, A, _, I, B;
                        let x;
                        if (null != t && null !== (d = t.link) && void 0 !== d && d.video) {
                            var P, L, T;
                            const n = (0, m.Ay)(null == t || null === (P = t.link) || void 0 === P ? void 0 : P.video),
                                o = null == n ? void 0 : n.video,
                                e = null != n && null !== (L = n.thumbnail) && void 0 !== L && null !== (T = L.focalPointImage) && void 0 !== T && T.url ? null == n ? void 0 : n.thumbnail : null;
                            x = {
                                transcript: null == n ? void 0 : n.transcript,
                                transcriptText: null == n ? void 0 : n.transcriptText,
                                closeTranscript: null == n ? void 0 : n.closeTranscript,
                                video: o,
                                thumbnail: e,
                                variant: "variant_7",
                                videoProgress: null == l ? void 0 : l.videoProgress,
                                setVideoProgress: null == l ? void 0 : l.setVideoProgress
                            }
                        }
                        const C = null != t && null !== (r = t.link) && void 0 !== r && null !== (c = r.url) && void 0 !== c && c.contentType ? null == t || null === (s = t.link) || void 0 === s || null === (g = s.url) || void 0 === g ? void 0 : g.contentType : null != t && null !== (p = t.link) && void 0 !== p && null !== (b = p.url) && void 0 !== b && null !== (f = b.internal) && void 0 !== f && f.type ? null == t || null === (y = t.link) || void 0 === y || null === (h = y.url) || void 0 === h || null === (A = h.internal) || void 0 === A ? void 0 : A.type : null;
                        return {
                            icon: null != t && t.listItemIcon ? (0, a.A)(null == t || null === (_ = t.listItemIcon) || void 0 === _ ? void 0 : _.icon) : null,
                            header: null != t && t.header ? null == t ? void 0 : t.header : null,
                            text: null != t && t.text ? null == t ? void 0 : t.text : null,
                            link: null != t && null !== (I = t.link) && void 0 !== I && I.video && x ? {
                                video: x,
                                text: null == t || null === (B = t.link) || void 0 === B ? void 0 : B.text
                            } : (0, v.Ay)(null == t ? void 0 : t.link, n, C, o, e, i, u),
                            Link: k.N_,
                            contentfulId: null == t ? void 0 : t.contentfulId
                        }
                    })) : null
                },
                p = o(73342),
                b = o(82421),
                f = o(68573),
                y = o(56848),
                h = o(59810);
            o(80998).config();
            var A = function(l, n, o, e, i, u, t, d) {
                if (void 0 === n && (n = "en"), void 0 === e && (e = null), void 0 === u && (u = null), l && Array.isArray(l)) return null == l ? void 0 : l.map((l => {
                    var o, i, u, r, a, c, s, m, k, g, p, b, f, y, h, A, _, I, B, x, P, L, T, C, w, M, N, E, S, V, D, j, R, z, F, G, H, U, q, J, K, O, Q, W, X, Y, Z, $, ll, nl;
                    let ol = !1,
                        el = !1;
                    return (null != l && null !== (o = l.productImage) && void 0 !== o && null !== (i = o.image) && void 0 !== i && null !== (u = i.file) && void 0 !== u && u.url || null != l && null !== (r = l.form) && void 0 !== r && null !== (a = r.sections) && void 0 !== a && null !== (c = a[0]) && void 0 !== c && null !== (s = c.product) && void 0 !== s && null !== (m = s.media) && void 0 !== m && null !== (k = m[0]) && void 0 !== k && null !== (g = k.image) && void 0 !== g && null !== (p = g.file) && void 0 !== p && p.url) && (ol = !0), "ContentfulImage" !== (null == l || null === (b = l.media) || void 0 === b || null === (f = b[0]) || void 0 === f ? void 0 : f.__typename) && "ContentfulImage" !== (null == l || null === (y = l.productImage) || void 0 === y ? void 0 : y.__typename) || (el = !0), {
                        logo: null != l && null !== (h = l.logo) && void 0 !== h && null !== (A = h.brandfolderAsset) && void 0 !== A && null !== (_ = A[0]) && void 0 !== _ && _.url ? {
                            altText: null == l || null === (I = l.logo) || void 0 === I ? void 0 : I.altText,
                            url: null == l || null === (B = l.logo) || void 0 === B || null === (x = B.brandfolderAsset) || void 0 === x || null === (P = x[0]) || void 0 === P ? void 0 : P.url
                        } : null != l && null !== (L = l.logo) && void 0 !== L && null !== (T = L.image) && void 0 !== T && T.file ? {
                            altText: null == l || null === (C = l.logo) || void 0 === C || null === (w = C.image) || void 0 === w ? void 0 : w.altText,
                            url: null == l || null === (M = l.logo) || void 0 === M || null === (N = M.image) || void 0 === N || null === (E = N.file) || void 0 === E ? void 0 : E.url
                        } : null,
                        productName: null != l && l.internalTitle ? null == l ? void 0 : l.internalTitle : null,
                        header: (null == l ? void 0 : l.title) || null,
                        subheader: (null == l ? void 0 : l.shortDescription) || null,
                        image: {
                            altText: null == l || null === (S = l.media) || void 0 === S || null === (V = S[0]) || void 0 === V || null === (D = V.image) || void 0 === D ? void 0 : D.altText,
                            url: null == l || null === (j = l.media) || void 0 === j || null === (R = j[0]) || void 0 === R || null === (z = R.image) || void 0 === z || null === (F = z.file) || void 0 === F ? void 0 : F.url
                        },
                        body: null == l || null === (G = l.longDescription) || void 0 === G || null === (H = G.childMarkdownRemark) || void 0 === H ? void 0 : H.html,
                        cardLink: null != l && l.productPage ? "ContentfulProductPage" === (null == l || null === (U = l.productPage) || void 0 === U ? void 0 : U.__typename) ? (0, v.Ay)({
                            url: {
                                url: "" + (null == l || null === (q = l.productPage) || void 0 === q ? void 0 : q.url)
                            },
                            text: (null == l || null === (J = l.productPage) || void 0 === J ? void 0 : J.url) && "Get a Demo"
                        }, n, "ContentfulProductPage", t, d) : "ContentfulPageBase" === (null == l || null === (K = l.productPage) || void 0 === K ? void 0 : K.__typename) ? (0, v.Ay)({
                            url: {
                                url: "" + (null == l || null === (O = l.productPage) || void 0 === O ? void 0 : O.url)
                            },
                            text: (null == l || null === (Q = l.productPage) || void 0 === Q ? void 0 : Q.url) && "Learn More"
                        }, n, "ContentfulPageBase", t, d) : "ContentfulExternalLink" === (null == l || null === (W = l.productPage) || void 0 === W ? void 0 : W.__typename) ? {
                            url: (null == l || null === (X = l.productPage) || void 0 === X ? void 0 : X.url) || null,
                            text: (null == l || null === (Y = l.productPage) || void 0 === Y ? void 0 : Y.url) && "Learn More"
                        } : null : null,
                        viewMoreText: null !== (Z = e) && void 0 !== Z && Z.viewMoreLabel ? null === ($ = e) || void 0 === $ ? void 0 : $.viewMoreLabel : "View More",
                        viewLessText: null !== (ll = e) && void 0 !== ll && ll.viewLessLabel ? null === (nl = e) || void 0 === nl ? void 0 : nl.viewLessLabel : "View Less"
                    }
                }))
            };
            var _ = l => {
                var n;
                const {
                    0: o,
                    1: v
                } = (0, e.useState)(!1), {
                    data: a = {},
                    index: m,
                    location: _,
                    locale: I = "en",
                    appData: B,
                    region: x,
                    videoProgress: P,
                    setVideoProgress: L,
                    tab: T,
                    currentSpaceId: C,
                    products: w,
                    siteIdentifier: M
                } = l, {
                    homepageSlug: N
                } = (0, e.useContext)(h.M), {
                    anchor: E,
                    motion: S
                } = (0, i.ys)(a, _, N);
                let V = null,
                    D = null;
                const j = (0, p.A)(null == a ? void 0 : a.colorScheme),
                    R = { ...a,
                        ...j
                    },
                    z = (0, b.A)(R),
                    F = "Centered" === (null == a ? void 0 : a.blockAlignment),
                    G = "white" === (null == z ? void 0 : z.theme) || "concrete-gray" === (null == z ? void 0 : z.theme) ? z : null;
                if (null != a && a.variant && null != a && a.listBlocks && (null == a || null === (n = a.listBlocks) || void 0 === n ? void 0 : n.length) > 0) {
                    var H;
                    switch (a.variant) {
                        case "Icon Mini Blocks":
                            V = "icon_mini_blocks", D = {
                                blocks: null != a && a.listBlocks ? c(null == a ? void 0 : a.listBlocks, I, C, w, M) : null,
                                alignment: "Centered" === (null == a ? void 0 : a.blockAlignment) ? "center" : "left",
                                centered: F,
                                largeBlock: "Large" === (null == a ? void 0 : a.blockSize),
                                Link: k.N_
                            };
                            break;
                        case "Icon List Items Blocks":
                            V = "icon_list_item_blocks", D = {
                                blocks: null != a && a.listBlocks ? g(null == a ? void 0 : a.listBlocks, I, N, C, w, M) : null,
                                Link: k.N_,
                                theme: G,
                                tab: T,
                                alignment: "Centered" === (null == a ? void 0 : a.blockAlignment) ? "center" : "left",
                                centered: F
                            };
                            break;
                        case "Product Intro Cards":
                            V = "product_intro_cards", D = {
                                title: null == a ? void 0 : a.header,
                                cards: null != a && a.listBlocks ? A(null == a ? void 0 : a.listBlocks, I, _, B, null, null, N, C, w, M) : null,
                                cardAlignment: null != a && a.cardAlignment ? null == a ? void 0 : a.cardAlignment : null,
                                Link: k.N_,
                                theme: z,
                                tab: T
                            };
                            break;
                        case "Bounded Cards":
                            V = "bounded_cards";
                            const n = null != a && a.listBlocks ? (0, u.A)(null == a ? void 0 : a.listBlocks, I, _, B, x, null, N, C, w, M, T) : [],
                                o = null == n ? void 0 : n.filter((l => void 0 !== l && !l.isInRegion));
                            D = {
                                cards: null != o && o.length ? o : null,
                                cardAlignment: (null == l || !l.productPage) && (null != a && a.cardAlignment ? null == a ? void 0 : a.cardAlignment : null),
                                displayButton: null != a && a.linkType ? null == a ? void 0 : a.linkType : null,
                                Link: k.N_,
                                theme: z,
                                tab: T,
                                centered: F
                            };
                            break;
                        case "Unbounded Cards":
                            V = "unbounded_cards";
                            const e = {
                                    width: 3,
                                    height: 2
                                },
                                i = null != a && a.listBlocks ? (0, u.A)(null == a ? void 0 : a.listBlocks, I, _, B, x, e, N, C, w, M) : [],
                                d = null == i ? void 0 : i.filter((l => void 0 !== l));
                            D = {
                                cards: null != d && d.length ? d : null,
                                cardAlignment: (null == l || !l.productPage) && (null != a && a.cardAlignment ? null == a ? void 0 : a.cardAlignment : null),
                                displayButton: null != a && a.linkType ? null == a ? void 0 : a.linkType : null,
                                Link: k.N_,
                                theme: G,
                                tab: T,
                                centered: F
                            };
                            break;
                        case "Ecommerce Cards":
                            V = "ecommerce_cards";
                            const r = null != a && a.listBlocks ? (0, t.A)(null == a ? void 0 : a.listBlocks, I, x) : [],
                                v = null == r ? void 0 : r.filter((l => void 0 !== l));
                            D = {
                                cards: null != v && v.length ? v : null,
                                Link: k.N_,
                                theme: z,
                                tab: T,
                                centered: F
                            };
                            break;
                        case "Bio Blocks":
                            V = "bio_blocks", D = {
                                Link: k.N_,
                                blocks: null != a && a.listBlocks ? (0, s.A)(null == a ? void 0 : a.listBlocks, I, C, w, M) : null,
                                theme: G,
                                tab: T,
                                centered: F
                            }
                    }
                    let n = !0;
                    "icon_mini_blocks" === V && (n = !1);
                    const o = (null === (H = V) || void 0 === H ? void 0 : H.replaceAll("_", "-")) + "-component";
                    return "string" == typeof E ? e.createElement(y.Hg, {
                        key: "scroll-" + m,
                        name: (0, d.A)(E)
                    }, (0, r.A)(e.createElement(f.Ei, {
                        type: V,
                        content: D,
                        key: m,
                        motion: S,
                        contentfulId: null == a ? void 0 : a.contentfulId,
                        componentClass: o
                    }), !T, !0, !0, !1, n)) : e.createElement(e.Fragment, null, (0, r.A)(e.createElement(f.Ei, {
                        type: V,
                        content: D,
                        key: m,
                        motion: S,
                        contentfulId: null == a ? void 0 : a.contentfulId,
                        componentClass: o
                    }), !T, !0, !0, !1, n))
                }
                return null
            }
        }
    }
]);
//# sourceMappingURL=4249-bbda4f7d1e5a7eac0d18.js.map