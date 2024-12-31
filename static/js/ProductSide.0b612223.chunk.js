"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6633], {
    6104: function(e, t, a) {
        a.r(t),
        a.d(t, {
            ProductSideInternal: function() {
                return g
            }
        });
        var n = a(7294)
          , i = a(822)
          , o = a(3694)
          , r = a(5754)
          , l = a(8480)
          , c = a(1544)
          , s = a(138)
          , d = a(4275)
          , m = a(5292)
          , u = a(1407)
          , f = a(6364)
          , g = function(e) {
            var t, a, s, g = e.fs, v = e.features, p = e.componentData, h = e.displayOptions, b = e.buttonList, y = (null === g || void 0 === g ? void 0 : g.title) || e.title, x = (null === g || void 0 === g ? void 0 : g.subtitle) || e.subtitle, E = (null === g || void 0 === g ? void 0 : g.img) || e.image, N = (null === g || void 0 === g || null === (t = g.reversed) || void 0 === t ? void 0 : t.isChecked) || (null === h || void 0 === h ? void 0 : h.isReversed), Z = v || e.featureList, w = e.componentData.uuid, O = {
                ".ps-container": {
                    flexDirection: N ? "row-reverse" : "row",
                    alignItems: "center"
                },
                ".ps-feature-title": {
                    fontWeight: "600",
                    lineHeight: "25px",
                    marginBottom: "6px",
                    fontSize: "1.125rem"
                },
                ".ps-feature-logo": {
                    display: "flex",
                    alignItems: "center",
                    background: "var(--primary200)",
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                    padding: "4px",
                    marginRight: "10px",
                    flexShrink: 0,
                    position: "relative",
                    top: "3px"
                },
                ".side-image": {
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "center"
                },
                ".ps-feature-section": {
                    marginBottom: "30px"
                },
                ".data-cell": {
                    paddingLeft: N ? "40px" : "0px"
                }
            };
            return null === i.a || void 0 === i.a || i.a.generateStylesWithParentId(O, w),
            n.createElement(m.Z, {
                componentData: p
            }, n.createElement(o.W, {
                large: !0
            }, n.createElement(l.J, {
                className: "ps-container flex gap-y-8",
                gx: 8
            }, n.createElement(r.r, {
                className: "pr-8",
                desktop: 6,
                tablet: 6,
                mobile: 12
            }, n.createElement(d.y, {
                tag: "h3",
                textType: u.UH.TEXT_TYPE_HEADING,
                className: "xxxxl-bold mgb-16",
                field: y
            }), n.createElement(d.y, {
                tag: "p3",
                className: "xl-regular gray800 mgb-24",
                textType: u.UH.TEXT_TYPE_BODY,
                field: x
            }), null === Z || void 0 === Z || null === (a = Z.list) || void 0 === a ? void 0 : a.map((function(e) {
                return n.createElement("div", {
                    key: e.id,
                    className: "mgb-16"
                }, n.createElement("div", {
                    className: "ps-feature-section"
                }, n.createElement("div", {
                    className: "dp-f  mgb-16"
                }, Z.showImage && n.createElement("div", {
                    hidden: !0,
                    className: "ps-feature-logo"
                }, n.createElement(c.E, {
                    img: (null === e || void 0 === e ? void 0 : e.img) || e.image
                })), n.createElement("div", null, n.createElement(d.y, {
                    tag: "p2Bold",
                    className: "md-regular text-gray-800",
                    textType: u.UH.TEXT_TYPE_HEADING,
                    field: e.title,
                    show: Z.showTitle
                }), n.createElement(d.y, {
                    tag: "p3",
                    className: "md-regular gray800",
                    textType: u.UH.TEXT_TYPE_BODY,
                    field: e.subtitle,
                    show: Z.showSubtitle
                })))))
            }
            )), n.createElement("div", {
                className: "dp-f"
            }, null === b || void 0 === b || null === (s = b.list) || void 0 === s ? void 0 : s.map((function(e) {
                return b.showButtons && n.createElement(f.z, e.button)
            }
            )))), n.createElement(r.r, {
                desktop: 6,
                tablet: 6,
                mobile: 12,
                gx: 0
            }, n.createElement(c.E, {
                img: E
            })))), n.createElement("div", null))
        }
          , v = (0,
        s.Z)(g);
        t.default = v
    },
    3694: function(e, t, a) {
        a.d(t, {
            W: function() {
                return i
            }
        });
        var n = a(7294)
          , i = function(e) {
            var t = e.xsmall
              , a = e.small
              , i = e.medium
              , o = e.large
              , r = e.xlarge
              , l = e.xxlarge
              , c = "container";
            return t ? c += "-xs" : a ? c += "-sm" : i ? c += "-md" : o ? c += "-lg" : r ? c += "-xl" : l && (c += "-xxl"),
            n.createElement("div", {
                className: c
            }, e.children)
        }
    },
    5754: function(e, t, a) {
        a.d(t, {
            r: function() {
                return l
            }
        });
        var n = a(4942)
          , i = a(4184)
          , o = a.n(i)
          , r = a(7294)
          , l = function(e) {
            var t, a = function(t) {
                return null !== e && void 0 !== e && e.itemLength && t ? (null === e || void 0 === e ? void 0 : e.itemLength) % (12 / t) === 0 ? t : t + 1 : t
            }, i = e.desktop ? "col-xl-".concat(a(e.desktop)) : "", l = e.tablet ? "col-md-".concat(a(e.tablet)) : "", c = e.mobile ? "col-sm-".concat(e.mobile) : "", s = e.all ? "col-".concat(e.all) : "", d = e.gy > -1 ? "mb-".concat(e.gy) : "";
            return r.createElement("div", {
                style: e.style,
                "data-id": e.id,
                className: o()(e.className, (t = {
                    col: !i && !l && !c & !s
                },
                (0,
                n.Z)(t, i, e.desktop),
                (0,
                n.Z)(t, l, e.tablet),
                (0,
                n.Z)(t, c, e.mobile),
                (0,
                n.Z)(t, s, e.all),
                (0,
                n.Z)(t, d, !!d),
                t))
            }, e.children)
        }
    },
    8480: function(e, t, a) {
        a.d(t, {
            J: function() {
                return l
            }
        });
        var n = a(4942)
          , i = a(4184)
          , o = a.n(i)
          , r = a(7294)
          , l = function(e) {
            var t, a = e.gx, i = e.gy, l = e.smGy, c = e.smGx, s = e.children, d = e.centerItems, m = e.className, u = r.Children.count(s);
            return r.createElement("div", {
                className: o()("row", (t = {},
                (0,
                n.Z)(t, m, !!m),
                (0,
                n.Z)(t, "gx-".concat(a > -1 ? a : 2), !0),
                (0,
                n.Z)(t, "gy-".concat(i), i > -1),
                (0,
                n.Z)(t, "sm-gy-".concat(l), l > -1),
                (0,
                n.Z)(t, "sm-gx-".concat(c), c > -1),
                (0,
                n.Z)(t, "jc-c", d && u < 3),
                t))
            }, s)
        }
    },
    3300: function(e, t, a) {
        a.d(t, {
            E: function() {
                return l
            }
        });
        var n = a(7294)
          , i = a(822)
          , o = a(4184)
          , r = a.n(o)
          , l = function(e) {
            var t = e.img
              , a = e.show
              , o = void 0 === a || a
              , l = e.usePadding
              , c = {
                1.3333: "75%",
                .8: "125%",
                1.7777: "56.25%",
                1: "100%"
            }[null === t || void 0 === t ? void 0 : t.aspectRatio] || "100%";
            i.a.generateStyle({
                ".img-image": {
                    height: "auto",
                    maxWidth: "100%",
                    objectFit: "cover",
                    width: "100%"
                },
                ".media": {
                    overflow: "hidden"
                },
                ".img-wrapper": {
                    display: "flex",
                    position: "relative",
                    justifyContent: "center"
                },
                "@media (max-width: 576px)": {
                    ".img-image": {
                        maxHeight: "270px"
                    }
                }
            });
            if (!t.src)
                return null;
            var s = {
                borderRadius: t.roundedCorner ? "12px" : "",
                objectFit: t.objectFit,
                height: t.height ? t.height : "auto",
                width: t.width ? t.width : "100%",
                objectPosition: t.verticalOffset && t.horizontalOffset ? "".concat(t.horizontalOffset, " ").concat(t.verticalOffset) : t.horizontalOffset ? "".concat(t.horizontalOffset, " 50%") : t.verticalOffset ? "50% ".concat(t.verticalOffset) : ""
            }
              , d = {
                position: "absolute",
                objectFit: t.objectFit,
                borderRadius: t.roundedCorner ? "12px" : "",
                height: "100%",
                width: "100%",
                maxHeight: "100%",
                top: 0,
                left: 0,
                objectPosition: t.verticalOffset && t.horizontalOffset ? "".concat(t.horizontalOffset, " ").concat(t.verticalOffset) : t.horizontalOffset ? "".concat(t.horizontalOffset, " 50%") : t.verticalOffset ? "50% ".concat(t.verticalOffset) : ""
            };
            return o && n.createElement("figure", {
                className: r()("media", e.className),
                "data-img-id": t.id,
                onClick: function() {
                    if (t.href) {
                        var e = t.external ? "_blank" : "_self";
                        window.open(t.href, e)
                    }
                },
                style: {
                    cursor: t.href ? "pointer" : "default"
                }
            }, n.createElement("div", {
                className: "img-wrapper",
                style: {
                    justifyContent: t.align,
                    paddingTop: l ? c : "",
                    position: "relative"
                }
            }, n.createElement("img", {
                className: r()("img-image", e.imageClass),
                src: t.src,
                alt: (null === t || void 0 === t ? void 0 : t.alt) || e.alt || "image",
                height: t.height,
                width: t.width,
                style: l ? d : s,
                loading: "lazy"
            }), t.href && n.createElement("a", {
                href: t.href
            })))
        }
    },
    1544: function(e, t, a) {
        a.d(t, {
            E: function() {
                return n.E
            }
        });
        var n = a(3300)
    },
    138: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return o
            }
        });
        var n = a(1413)
          , i = a(7294);
        function o(e) {
            return i.memo((function(t) {
                var a = function(e) {
                    if (!e)
                        return {};
                    var t = function e(t, i) {
                        return t.map((function(t) {
                            var o = i[t];
                            if (null !== o && void 0 !== o && o.list && Array.isArray(o.list))
                                return (0,
                                n.Z)((0,
                                n.Z)({}, o), {}, {
                                    list: e(o.list, i)
                                });
                            var r = {}
                              , l = a(i[t], r);
                            return Object.keys(r).length ? (0,
                            n.Z)((0,
                            n.Z)({}, l), r) : l
                        }
                        ))
                    }
                      , a = function a(i, o) {
                        return Object.keys(i).forEach((function(r) {
                            var l = e[i[r]];
                            l && "id" != r && (null !== l && void 0 !== l && l.list && Array.isArray(l.list) ? o[r] = (0,
                            n.Z)((0,
                            n.Z)({}, l), {}, {
                                list: t(l.list, e)
                            }) : "object" != typeof i[r] && (o[r] = (0,
                            n.Z)({}, l)),
                            a(l, o[r]))
                        }
                        )),
                        (0,
                        n.Z)({}, i)
                    }
                      , i = {};
                    return a(e, i),
                    i
                }(t.componentData.properties);
                return i.createElement(e, (0,
                n.Z)((0,
                n.Z)((0,
                n.Z)({}, t), a), {}))
            }
            ), (function(e, t) {
                return e.componentData == t.componentData
            }
            ))
        }
    },
    5292: function(e, t, a) {
        var n = a(4942)
          , i = a(5987)
          , o = a(7294)
          , r = a(822)
          , l = a(4184)
          , c = a.n(l)
          , s = a(6971)
          , d = ["componentData", "children", "className", "isNavbar", "sectionRef"];
        t.Z = function(e) {
            var t, a = e.componentData, l = e.children, m = e.className, u = e.isNavbar, f = e.sectionRef, g = (0,
            i.Z)(e, d), v = a.marginTop, p = a.marginBottom, h = a.background, b = a.backgroundImage, y = a.theme;
            return null === r.a || void 0 === r.a || r.a.generateStylesWithParentId({
                ".section-background": {
                    background: b ? 'url("'.concat(b, '")') : "",
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
                    marginTop: v,
                    marginBottom: p,
                    background: b && h ? (0,
                    s.XF)(h, .6) : h
                },
                className: c()("section", m, (t = {},
                (0,
                n.Z)(t, y, y),
                (0,
                n.Z)(t, "hasTheme", !!y),
                (0,
                n.Z)(t, "hasOverlay", b && y),
                (0,
                n.Z)(t, "section-wrapper", !u),
                t)),
                id: (null === a || void 0 === a ? void 0 : a.componentName) + "-" + a.uuid,
                "data-section-id": a.uuid,
                ref: f
            }, g), o.createElement("div", {
                className: "section-background"
            }, b && y && o.createElement("div", {
                className: "section-background-overlay",
                style: {
                    opacity: .3
                }
            })), l)
        }
    }
}]);
//# sourceMappingURL=ProductSide.0b612223.chunk.js.map
