"use strict";
(self.webpackChunkgatsby_mxp_project = self.webpackChunkgatsby_mxp_project || []).push([
    [5237], {
        75237: function(e, t, d) {
            d.r(t);
            var n = d(96540),
                o = d(22730),
                l = d(49591),
                i = d(64810),
                r = d(68573),
                a = d(59810),
                s = (d(39661), d(73342)),
                u = d(82421);
            const v = e => {
                var t, d, o, l, a, s;
                let {
                    data: u,
                    paddingClass: v,
                    overrideTheme: c,
                    locale: g,
                    buttons: h,
                    variant: m,
                    override: p,
                    setOverride: b,
                    isPageHeader: f,
                    products: P,
                    siteIdentifier: C,
                    theme: k,
                    contentful_id: _,
                    videoProgress: w,
                    setVideoProgress: y
                } = e;
                return n.createElement(r.OG, {
                    variant: c || m,
                    theme: k,
                    alignment: null == u ? void 0 : u.alignment,
                    eyebrow: null == u ? void 0 : u.eyebrow,
                    headline: null == u ? void 0 : u.headline,
                    isLongSubheader: !(null == u || !u.longSubhead),
                    subhead: (null == u || null === (t = u.longSubhead) || void 0 === t || null === (d = t.childMarkdownRemark) || void 0 === d || null === (o = d.rawMarkdownBody) || void 0 === o ? void 0 : o.substring(0, 400)) || (null == u ? void 0 : u.subhead),
                    content: (null == u || null === (l = u.body) || void 0 === l || null === (a = l.childMarkdownRemark) || void 0 === a ? void 0 : a.html) || (null == u || null === (s = u.body) || void 0 === s ? void 0 : s.body),
                    buttons: h,
                    textLinks: null == u ? void 0 : u.displayButtonsAsLinks,
                    Link: i.N_,
                    paddingClass: v,
                    attributes: "dark" === (null == u ? void 0 : u.variant) && !c && {
                        theme: {
                            backgroundColor: "#0063A3"
                        }
                    },
                    contentful_id: _,
                    isPageHeader: f,
                    videoProgress: w,
                    setVideoProgress: y
                })
            };
            t.default = e => {
                var t, d, r;
                let {
                    data: c,
                    paddingClass: g,
                    overrideTheme: h,
                    nested: m,
                    locale: p = "en",
                    disablePadding: b = !1,
                    marginTopAndBottom: f,
                    productPage: P,
                    currentSpaceId: C,
                    isPageHeader: k,
                    products: _,
                    siteIdentifier: w,
                    contentful_id: y,
                    videoProgress: x,
                    setVideoProgress: A
                } = e;
                const {
                    homepageSlug: I
                } = (0, n.useContext)(a.M), {
                    0: S,
                    1: T
                } = (0, n.useState)(!1), H = null != c && c.extraClass ? c.extraClass : "", B = (0, i.GR)("2873515370"), L = null == B || null === (t = B.allContentfulCtaWithTextAndHeader) || void 0 === t || null === (d = t.nodes) || void 0 === d ? void 0 : d.find((e => (null == e ? void 0 : e.contentfulId) === (null == c ? void 0 : c.contentfulId))), V = (0, l.formatCTAButtons)(null == c ? void 0 : c.ctaButtons, p, S, T, I, C, _, w, L), M = !!P, O = !!P || ((null == c ? void 0 : c.contentWidth) || !1), j = (null == c || null === (r = c.variant) || void 0 === r ? void 0 : r.split(" ").join("-").toLowerCase()) || "transparent-light-text", E = (0, s.A)(null == c ? void 0 : c.colorScheme), R = { ...c,
                    ...E
                }, G = (0, u.A)(R);
                return !0 === b ? n.createElement(v, {
                    data: c,
                    paddingClass: null == c ? void 0 : c.paddingClass,
                    overrideTheme: h,
                    locale: p,
                    buttons: V,
                    variant: j,
                    override: S,
                    setOverride: T,
                    isPageHeader: k,
                    products: _,
                    siteIdentifier: w,
                    theme: G,
                    contentful_id: y,
                    setVideoProgress: A,
                    videoProgress: x
                }) : (0, o.A)(n.createElement(v, {
                    data: c,
                    paddingClass: g,
                    overrideTheme: h,
                    locale: p,
                    buttons: V,
                    variant: j,
                    override: S,
                    setOverride: T,
                    isPageHeader: k,
                    products: _,
                    siteIdentifier: w,
                    theme: G,
                    contentful_id: y,
                    setVideoProgress: A,
                    videoProgress: x
                }), O, !0, !0, m, f, null, H, M)
            }
        }
    }
]);
//# sourceMappingURL=5237-0f37a9f62f2decfef6f5.js.map