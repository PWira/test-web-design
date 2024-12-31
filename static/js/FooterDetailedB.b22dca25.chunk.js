"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[1617], {
    9299: function(e, t, a) {
        a.r(t);
        var l = a(1413)
          , n = a(7294)
          , o = a(822)
          , r = a(3694)
          , i = a(5754)
          , c = a(8480)
          , s = a(1544)
          , m = a(138)
          , d = a(4275)
          , u = a(5292)
          , v = a(1407)
          , g = a(9018)
          , p = (0,
        m.Z)((function(e) {
            var t, a, m, p = e.componentData, f = e.footer, b = e.fd, E = e.socialIcons, x = e.linkIconList, y = e.socialList, N = (null === b || void 0 === b ? void 0 : b.copyright) || e.copyright, k = (null === b || void 0 === b ? void 0 : b.title) || e.companyName, h = (null === b || void 0 === b ? void 0 : b.subtitle) || e.subtitle, Z = null === e || void 0 === e ? void 0 : e.text2, T = null === e || void 0 === e ? void 0 : e.text3, _ = (null === f || void 0 === f ? void 0 : f.columns) || {
                list: [{
                    id: 1
                }]
            }, w = e.links || e.linkList;
            return o.a.generateStylesWithParentId({
                ".btn-submit": {
                    backgroundColor: "var(--primary700)",
                    color: "#fff",
                    cursor: "pointer"
                },
                ".footerd-input": {
                    padding: "10px 14px",
                    border: "1px solid #D0D5DD",
                    boxShadow: "0px 1px 2px rgb(16 24 40 / 5%)",
                    borderRadius: "8px"
                },
                ".footer-link": {
                    color: "var(--primary700)"
                },
                ".section-bg-color": {
                    backgroundColor: "rgb(31 41 55 / 1);"
                }
            }, p.uuid),
            n.createElement(u.Z, {
                componentData: p
            }, n.createElement(r.W, {
                large: !0
            }, n.createElement(c.J, {
                className: "jc-c grow border-b border-gray-200 pb-16"
            }, n.createElement(i.r, {
                all: 12,
                desktop: 12,
                tablet: 10
            }, n.createElement(c.J, null, n.createElement(i.r, {
                className: "flex",
                all: 12,
                desktop: 12,
                tablet: 12
            }, n.createElement("div", {
                className: "flex grow flex-col sm:flex-row mb-4 sm:mb-0"
            }, n.createElement("div", {
                className: "max-w-xs sm:max-w-sm"
            }, n.createElement("div", {
                className: "flex items-center"
            }, n.createElement(d.y, {
                tag: "p2Bold",
                className: " text-white",
                textType: v.UH.TEXT_TYPE_HEADING,
                field: k
            })), n.createElement(d.y, {
                tag: "p3",
                className: "my-6",
                textType: v.UH.TEXT_TYPE_BODY,
                field: h
            })), n.createElement("div", {
                className: "flex grow justify-around"
            }, Z && n.createElement(d.y, {
                tag: "p3",
                textType: v.UH.TEXT_TYPE_BODY,
                field: Z
            }), T && n.createElement(d.y, {
                tag: "p3",
                textType: v.UH.TEXT_TYPE_BODY,
                field: T
            }))), n.createElement("div", {
                className: "hidden sm:block max-w-[12rem]"
            }, (null === x || void 0 === x ? void 0 : x.showButtons) && (null === x || void 0 === x || null === (t = x.list) || void 0 === t ? void 0 : t.map((function(e) {
                return n.createElement("div", {
                    key: e.id,
                    className: "mb-4"
                }, n.createElement(s.E, {
                    img: (0,
                    l.Z)((0,
                    l.Z)({}, null === e || void 0 === e ? void 0 : e.icon), {}, {
                        external: !0
                    })
                }))
            }
            ))))), null === (a = _.list) || void 0 === a ? void 0 : a.map((function(e) {
                return n.createElement(i.r, {
                    className: "flex flex-row flex-wrap gap-x-8",
                    key: e.id,
                    all: 12,
                    desktop: 10,
                    tablet: 12
                }, n.createElement(g.Z.Link, {
                    links: w,
                    className: "mb-3.5 footer-link",
                    tag: "p4Bold"
                }))
            }
            ))), n.createElement(c.J, null, n.createElement(i.r, {
                className: "sm:hidden flex gap-4",
                all: 6,
                desktop: 2,
                tablet: 2
            }, (null === x || void 0 === x ? void 0 : x.showButtons) && (null === x || void 0 === x ? void 0 : x.list.map((function(e) {
                return n.createElement("div", {
                    key: e.id,
                    className: "-ml-2.5 "
                }, n.createElement(s.E, {
                    img: (0,
                    l.Z)((0,
                    l.Z)({}, null === e || void 0 === e ? void 0 : e.icon), {}, {
                        external: !0
                    })
                }))
            }
            ))))))), n.createElement("div", null), n.createElement("div", {
                className: "md:flex justify-between mt-8 items-center"
            }, n.createElement(d.y, {
                tag: "p3",
                className: "text-gray-200 mb-4",
                textType: v.UH.TEXT_TYPE_BODY,
                field: N
            }), n.createElement("div", {
                className: "flex items-center gap-x-4"
            }, null === E || void 0 === E || null === (m = E.list) || void 0 === m ? void 0 : m.map((function(e) {
                return n.createElement("a", {
                    key: e.id,
                    href: e.href,
                    target: "_blank"
                }, n.createElement("img", {
                    "data-id": e.id,
                    className: "w-6 h-6",
                    src: e.src
                }))
            }
            )), n.createElement(g.Z.Social, {
                socials: y
            })))))
        }
        ));
        t.default = p
    },
    3694: function(e, t, a) {
        a.d(t, {
            W: function() {
                return n
            }
        });
        var l = a(7294)
          , n = function(e) {
            var t = e.xsmall
              , a = e.small
              , n = e.medium
              , o = e.large
              , r = e.xlarge
              , i = e.xxlarge
              , c = "container";
            return t ? c += "-xs" : a ? c += "-sm" : n ? c += "-md" : o ? c += "-lg" : r ? c += "-xl" : i && (c += "-xxl"),
            l.createElement("div", {
                className: c
            }, e.children)
        }
    },
    5754: function(e, t, a) {
        a.d(t, {
            r: function() {
                return i
            }
        });
        var l = a(4942)
          , n = a(4184)
          , o = a.n(n)
          , r = a(7294)
          , i = function(e) {
            var t, a = function(t) {
                return null !== e && void 0 !== e && e.itemLength && t ? (null === e || void 0 === e ? void 0 : e.itemLength) % (12 / t) === 0 ? t : t + 1 : t
            }, n = e.desktop ? "col-xl-".concat(a(e.desktop)) : "", i = e.tablet ? "col-md-".concat(a(e.tablet)) : "", c = e.mobile ? "col-sm-".concat(e.mobile) : "", s = e.all ? "col-".concat(e.all) : "", m = e.gy > -1 ? "mb-".concat(e.gy) : "";
            return r.createElement("div", {
                style: e.style,
                "data-id": e.id,
                className: o()(e.className, (t = {
                    col: !n && !i && !c & !s
                },
                (0,
                l.Z)(t, n, e.desktop),
                (0,
                l.Z)(t, i, e.tablet),
                (0,
                l.Z)(t, c, e.mobile),
                (0,
                l.Z)(t, s, e.all),
                (0,
                l.Z)(t, m, !!m),
                t))
            }, e.children)
        }
    },
    8480: function(e, t, a) {
        a.d(t, {
            J: function() {
                return i
            }
        });
        var l = a(4942)
          , n = a(4184)
          , o = a.n(n)
          , r = a(7294)
          , i = function(e) {
            var t, a = e.gx, n = e.gy, i = e.smGy, c = e.smGx, s = e.children, m = e.centerItems, d = e.className, u = r.Children.count(s);
            return r.createElement("div", {
                className: o()("row", (t = {},
                (0,
                l.Z)(t, d, !!d),
                (0,
                l.Z)(t, "gx-".concat(a > -1 ? a : 2), !0),
                (0,
                l.Z)(t, "gy-".concat(n), n > -1),
                (0,
                l.Z)(t, "sm-gy-".concat(i), i > -1),
                (0,
                l.Z)(t, "sm-gx-".concat(c), c > -1),
                (0,
                l.Z)(t, "jc-c", m && u < 3),
                t))
            }, s)
        }
    },
    5292: function(e, t, a) {
        var l = a(4942)
          , n = a(5987)
          , o = a(7294)
          , r = a(822)
          , i = a(4184)
          , c = a.n(i)
          , s = a(6971)
          , m = ["componentData", "children", "className", "isNavbar", "sectionRef"];
        t.Z = function(e) {
            var t, a = e.componentData, i = e.children, d = e.className, u = e.isNavbar, v = e.sectionRef, g = (0,
            n.Z)(e, m), p = a.marginTop, f = a.marginBottom, b = a.background, E = a.backgroundImage, x = a.theme;
            return null === r.a || void 0 === r.a || r.a.generateStylesWithParentId({
                ".section-background": {
                    background: E ? 'url("'.concat(E, '")') : "",
                    backgroundSize: "cover",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: "-1",
                    overflow: "hidden",
                    top: "0",
                    backgroundPosition: "center"
                }
            }, a.uuid),
            r.a.generateStyle({
                ".section-wrapper": {
                    backgroundColor: "var(--sectionBgColor)",
                    position: "relative"
                },
                ".section-wrapper.hasOverlay": {
                    backgroundColor: "var(--sectionBgOverlayColor)"
                },
                ".section-background-overlay": {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0"
                }
            }),
            o.createElement("section", Object.assign({
                style: {
                    marginTop: p,
                    marginBottom: f,
                    background: E && b ? (0,
                    s.XF)(b, .6) : b
                },
                className: c()("section", d, (t = {},
                (0,
                l.Z)(t, x, x),
                (0,
                l.Z)(t, "hasTheme", !!x),
                (0,
                l.Z)(t, "hasOverlay", E && x),
                (0,
                l.Z)(t, "section-wrapper", !u),
                t)),
                id: (null === a || void 0 === a ? void 0 : a.componentName) + "-" + a.uuid,
                "data-section-id": a.uuid,
                ref: v
            }, g), o.createElement("div", {
                className: "section-background"
            }, E && x && o.createElement("div", {
                className: "section-background-overlay",
                style: {
                    opacity: .3
                }
            })), i)
        }
    }
}]);
//# sourceMappingURL=FooterDetailedB.b22dca25.chunk.js.map
