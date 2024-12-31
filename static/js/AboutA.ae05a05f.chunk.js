/*! For license information please see AboutA.ae05a05f.chunk.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5868], {
    3740: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n(7294)
          , r = n(822)
          , o = n(3694)
          , i = n(5754)
          , c = n(8480)
          , l = n(138)
          , s = n(4275)
          , u = n(1544)
          , d = n(1407)
          , f = n(5292)
          , m = (0,
        l.Z)((function(t) {
            var e = t.title
              , n = t.description
              , l = t.caption
              , m = t.image
              , p = t.componentData;
            return r.a.generateStylesWithParentId({
                ".quesans": {},
                ".imagetext": {
                    justifyContent: "center"
                },
                ".aboutimage": {
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }, p.uuid),
            a.createElement(f.Z, {
                componentData: p
            }, a.createElement(o.W, {
                large: !0
            }, a.createElement(c.J, {
                className: "dp-f ai-c ",
                gx: 8
            }, a.createElement(i.r, {
                desktop: 5,
                tablet: 5,
                mobile: 12
            }, a.createElement(s.y, {
                tag: "h3",
                textType: d.UH.TEXT_TYPE_HEADING,
                className: "font-semibold",
                field: e
            }), a.createElement(s.y, {
                tag: "p3",
                textType: d.UH.TEXT_TYPE_BODY,
                className: "text-gray-600 mt-4 sm:mt-5 ",
                field: n
            }), a.createElement(s.y, {
                tag: "p3",
                textType: d.UH.TEXT_TYPE_BODY,
                className: "text-gray-600 mt-4 sm:mt-5",
                field: l
            })), a.createElement(i.r, {
                desktop: 7,
                tablet: 7,
                mobile: 12
            }, a.createElement(u.E, {
                className: "mt-12 sm:mt-0",
                img: m
            })))))
        }
        ));
        e.default = m
    },
    4275: function(t, e, n) {
        "use strict";
        n.d(e, {
            y: function() {
                return c
            }
        });
        var a = n(4942)
          , r = n(4184)
          , o = n.n(r)
          , i = n(7294)
          , c = (n(7961),
        function(t) {
            var e = "boolean" !== typeof t.show || t.show
              , n = (0,
            i.useRef)(null);
            return e && i.createElement(l, Object.assign({}, t, {
                pref: n
            }))
        }
        )
          , l = i.memo((function(t) {
            var e;
            if (null !== t && void 0 !== t && t.field) {
                var n = t.field
                  , r = n.text
                  , c = n.id
                  , l = n.fontSize
                  , s = n.fontWeight
                  , u = t.textType
                  , d = t.tag
                  , f = {
                    fontSize: l,
                    fontWeight: s
                }
                  , m = /<[^>]+>/g.test(r) ? r : function(t, e) {
                    switch (t) {
                    case "h1":
                        return "<h1>".concat(e, "</h1>");
                    case "h2":
                        return "<h2>".concat(e, "</h2>");
                    case "h3":
                        return "<h3>".concat(e, "</h3>");
                    case "p1":
                        return '<p class="text-2xl">'.concat(e, "</p>");
                    case "p2":
                        return '<p class="text-xl">'.concat(e, "</p>");
                    case "p3":
                        return "<p>".concat(e, "</p>");
                    case "p4":
                        return '<p class="text-sm">'.concat(e, "</p>");
                    case "p1Bold":
                        return '<p style="font-weight: 700;" class="text-2xl">'.concat(e, "</p>");
                    case "p2Bold":
                        return '<p style="font-weight: 700;" class="text-xl">'.concat(e, "</p>");
                    case "p3Bold":
                        return '<p style="font-weight: 700;" ">'.concat(e, "</p>");
                    case "p4Bold":
                        return '<p style="font-weight: 700;" class="text-sm">'.concat(e, "</p>");
                    default:
                        return t ? "<".concat(t, ">").concat(e, "</").concat(t, ">") : e
                    }
                }(d, r);
                return i.createElement("div", {
                    style: f,
                    ref: t.pref,
                    className: o()(t.className, null === t || void 0 === t || null === (e = t.field) || void 0 === e ? void 0 : e.class, "text-label", (0,
                    a.Z)({}, u, u)),
                    "data-key": "text",
                    "data-id": c,
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })
            }
            console.error("Error in TextLabel component, props.field is undefined")
        }
        ), (function(t, e) {
            var n, a, r, o, i;
            return "true" === (null === (n = document) || void 0 === n || null === (a = n.getElementById("contentIframe")) || void 0 === a || null === (r = a.contentWindow.document.querySelector('[data-id="'.concat(null === e || void 0 === e || null === (i = e.field) || void 0 === i ? void 0 : i.id, '"]'))) || void 0 === r || null === (o = r.firstChild) || void 0 === o ? void 0 : o.contentEditable)
        }
        ))
    },
    3694: function(t, e, n) {
        "use strict";
        n.d(e, {
            W: function() {
                return r
            }
        });
        var a = n(7294)
          , r = function(t) {
            var e = t.xsmall
              , n = t.small
              , r = t.medium
              , o = t.large
              , i = t.xlarge
              , c = t.xxlarge
              , l = "container";
            return e ? l += "-xs" : n ? l += "-sm" : r ? l += "-md" : o ? l += "-lg" : i ? l += "-xl" : c && (l += "-xxl"),
            a.createElement("div", {
                className: l
            }, t.children)
        }
    },
    5754: function(t, e, n) {
        "use strict";
        n.d(e, {
            r: function() {
                return c
            }
        });
        var a = n(4942)
          , r = n(4184)
          , o = n.n(r)
          , i = n(7294)
          , c = function(t) {
            var e, n = function(e) {
                return null !== t && void 0 !== t && t.itemLength && e ? (null === t || void 0 === t ? void 0 : t.itemLength) % (12 / e) === 0 ? e : e + 1 : e
            }, r = t.desktop ? "col-xl-".concat(n(t.desktop)) : "", c = t.tablet ? "col-md-".concat(n(t.tablet)) : "", l = t.mobile ? "col-sm-".concat(t.mobile) : "", s = t.all ? "col-".concat(t.all) : "", u = t.gy > -1 ? "mb-".concat(t.gy) : "";
            return i.createElement("div", {
                style: t.style,
                "data-id": t.id,
                className: o()(t.className, (e = {
                    col: !r && !c && !l & !s
                },
                (0,
                a.Z)(e, r, t.desktop),
                (0,
                a.Z)(e, c, t.tablet),
                (0,
                a.Z)(e, l, t.mobile),
                (0,
                a.Z)(e, s, t.all),
                (0,
                a.Z)(e, u, !!u),
                e))
            }, t.children)
        }
    },
    8480: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return c
            }
        });
        var a = n(4942)
          , r = n(4184)
          , o = n.n(r)
          , i = n(7294)
          , c = function(t) {
            var e, n = t.gx, r = t.gy, c = t.smGy, l = t.smGx, s = t.children, u = t.centerItems, d = t.className, f = i.Children.count(s);
            return i.createElement("div", {
                className: o()("row", (e = {},
                (0,
                a.Z)(e, d, !!d),
                (0,
                a.Z)(e, "gx-".concat(n > -1 ? n : 2), !0),
                (0,
                a.Z)(e, "gy-".concat(r), r > -1),
                (0,
                a.Z)(e, "sm-gy-".concat(c), c > -1),
                (0,
                a.Z)(e, "sm-gx-".concat(l), l > -1),
                (0,
                a.Z)(e, "jc-c", u && f < 3),
                e))
            }, s)
        }
    },
    3300: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return c
            }
        });
        var a = n(7294)
          , r = n(822)
          , o = n(4184)
          , i = n.n(o)
          , c = function(t) {
            var e = t.img
              , n = t.show
              , o = void 0 === n || n
              , c = t.usePadding
              , l = {
                1.3333: "75%",
                .8: "125%",
                1.7777: "56.25%",
                1: "100%"
            }[null === e || void 0 === e ? void 0 : e.aspectRatio] || "100%";
            r.a.generateStyle({
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
            if (!e.src)
                return null;
            var s = {
                borderRadius: e.roundedCorner ? "12px" : "",
                objectFit: e.objectFit,
                height: e.height ? e.height : "auto",
                width: e.width ? e.width : "100%",
                objectPosition: e.verticalOffset && e.horizontalOffset ? "".concat(e.horizontalOffset, " ").concat(e.verticalOffset) : e.horizontalOffset ? "".concat(e.horizontalOffset, " 50%") : e.verticalOffset ? "50% ".concat(e.verticalOffset) : ""
            }
              , u = {
                position: "absolute",
                objectFit: e.objectFit,
                borderRadius: e.roundedCorner ? "12px" : "",
                height: "100%",
                width: "100%",
                maxHeight: "100%",
                top: 0,
                left: 0,
                objectPosition: e.verticalOffset && e.horizontalOffset ? "".concat(e.horizontalOffset, " ").concat(e.verticalOffset) : e.horizontalOffset ? "".concat(e.horizontalOffset, " 50%") : e.verticalOffset ? "50% ".concat(e.verticalOffset) : ""
            };
            return o && a.createElement("figure", {
                className: i()("media", t.className),
                "data-img-id": e.id,
                onClick: function() {
                    if (e.href) {
                        var t = e.external ? "_blank" : "_self";
                        window.open(e.href, t)
                    }
                },
                style: {
                    cursor: e.href ? "pointer" : "default"
                }
            }, a.createElement("div", {
                className: "img-wrapper",
                style: {
                    justifyContent: e.align,
                    paddingTop: c ? l : "",
                    position: "relative"
                }
            }, a.createElement("img", {
                className: i()("img-image", t.imageClass),
                src: e.src,
                alt: (null === e || void 0 === e ? void 0 : e.alt) || t.alt || "image",
                height: e.height,
                width: e.width,
                style: c ? u : s,
                loading: "lazy"
            }), e.href && a.createElement("a", {
                href: e.href
            })))
        }
    },
    1544: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return a.E
            }
        });
        var a = n(3300)
    },
    138: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return o
            }
        });
        var a = n(1413)
          , r = n(7294);
        function o(t) {
            return r.memo((function(e) {
                var n = function(t) {
                    if (!t)
                        return {};
                    var e = function t(e, r) {
                        return e.map((function(e) {
                            var o = r[e];
                            if (null !== o && void 0 !== o && o.list && Array.isArray(o.list))
                                return (0,
                                a.Z)((0,
                                a.Z)({}, o), {}, {
                                    list: t(o.list, r)
                                });
                            var i = {}
                              , c = n(r[e], i);
                            return Object.keys(i).length ? (0,
                            a.Z)((0,
                            a.Z)({}, c), i) : c
                        }
                        ))
                    }
                      , n = function n(r, o) {
                        return Object.keys(r).forEach((function(i) {
                            var c = t[r[i]];
                            c && "id" != i && (null !== c && void 0 !== c && c.list && Array.isArray(c.list) ? o[i] = (0,
                            a.Z)((0,
                            a.Z)({}, c), {}, {
                                list: e(c.list, t)
                            }) : "object" != typeof r[i] && (o[i] = (0,
                            a.Z)({}, c)),
                            n(c, o[i]))
                        }
                        )),
                        (0,
                        a.Z)({}, r)
                    }
                      , r = {};
                    return n(t, r),
                    r
                }(e.componentData.properties);
                return r.createElement(t, (0,
                a.Z)((0,
                a.Z)((0,
                a.Z)({}, e), n), {}))
            }
            ), (function(t, e) {
                return t.componentData == e.componentData
            }
            ))
        }
    },
    5292: function(t, e, n) {
        "use strict";
        var a = n(4942)
          , r = n(5987)
          , o = n(7294)
          , i = n(822)
          , c = n(4184)
          , l = n.n(c)
          , s = n(6971)
          , u = ["componentData", "children", "className", "isNavbar", "sectionRef"];
        e.Z = function(t) {
            var e, n = t.componentData, c = t.children, d = t.className, f = t.isNavbar, m = t.sectionRef, p = (0,
            r.Z)(t, u), g = n.marginTop, h = n.marginBottom, v = n.background, y = n.backgroundImage, b = n.theme;
            return null === i.a || void 0 === i.a || i.a.generateStylesWithParentId({
                ".section-background": {
                    background: y ? 'url("'.concat(y, '")') : "",
                    backgroundSize: "cover",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: "-1",
                    overflow: "hidden",
                    top: "0",
                    backgroundPosition: "center"
                }
            }, n.uuid),
            i.a.generateStyle({
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
                    marginTop: g,
                    marginBottom: h,
                    background: y && v ? (0,
                    s.XF)(v, .6) : v
                },
                className: l()("section", d, (e = {},
                (0,
                a.Z)(e, b, b),
                (0,
                a.Z)(e, "hasTheme", !!b),
                (0,
                a.Z)(e, "hasOverlay", y && b),
                (0,
                a.Z)(e, "section-wrapper", !f),
                e)),
                id: (null === n || void 0 === n ? void 0 : n.componentName) + "-" + n.uuid,
                "data-section-id": n.uuid,
                ref: m
            }, p), o.createElement("div", {
                className: "section-background"
            }, y && b && o.createElement("div", {
                className: "section-background-overlay",
                style: {
                    opacity: .3
                }
            })), c)
        }
    },
    4184: function(t, e) {
        var n;
        !function() {
            "use strict";
            var a = {}.hasOwnProperty;
            function r() {
                for (var t = [], e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    if (n) {
                        var o = typeof n;
                        if ("string" === o || "number" === o)
                            t.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var i = r.apply(null, n);
                                i && t.push(i)
                            }
                        } else if ("object" === o) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                t.push(n.toString());
                                continue
                            }
                            for (var c in n)
                                a.call(n, c) && n[c] && t.push(c)
                        }
                    }
                }
                return t.join(" ")
            }
            t.exports ? (r.default = r,
            t.exports = r) : void 0 === (n = function() {
                return r
            }
            .apply(e, [])) || (t.exports = n)
        }()
    },
    5987: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return r
            }
        });
        var a = n(3366);
        function r(t, e) {
            if (null == t)
                return {};
            var n, r, o = (0,
            a.Z)(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
            }
            return o
        }
    }
}]);
//# sourceMappingURL=AboutA.ae05a05f.chunk.js.map
