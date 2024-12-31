/*! For license information please see TestimonialSection.fc0fa7ef.chunk.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[2579], {
    7170: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n(7294)
          , r = n(822)
          , i = n(3694)
          , o = n(5754)
          , c = n(8480)
          , l = n(138)
          , s = n(4275)
          , u = n(1544)
          , d = n(5292)
          , f = n(1407)
          , m = (0,
        l.Z)((function(t) {
            var e = t.componentData
              , n = t.quote
              , l = t.name
              , m = t.designation
              , g = t.image;
            return r.a.generateStylesWithParentId({
                ".faqimage1": {
                    alignItems: "center",
                    justifyContent: "center"
                },
                ".rating": {
                    width: "120px",
                    height: "20px"
                },
                ".signalheading": {
                    alignSelf: "stretch",
                    letterSpacing: "-0.02em"
                },
                ".faqImg": {
                    objectFit: "contain",
                    height: "100%"
                }
            }, e.uuid),
            a.createElement(d.Z, {
                componentData: e
            }, a.createElement(i.W, {
                large: !0
            }, a.createElement(c.J, {
                className: "items-center",
                gx: 6
            }, a.createElement(o.r, {
                desktop: 3,
                tablet: 5,
                mobile: 6
            }, a.createElement(u.E, {
                img: g,
                alt: "person"
            })), a.createElement(o.r, {
                desktop: 9,
                tablet: 7,
                mobile: 12
            }, a.createElement("div", {
                className: "rating mt-11 sm:mt-0 ml-0  text-gray-900"
            }, a.createElement("img", {
                src: "https://uncody.b-cdn.net/images/general/star-rating.svg",
                alt: "rating"
            })), a.createElement(s.y, {
                tag: "h3",
                className: "mt-3.5 sm:mt-6",
                textType: f.UH.TEXT_TYPE_HEADING,
                field: n
            }), a.createElement(s.y, {
                tag: "p3",
                textType: f.UH.TEXT_TYPE_BODY,
                className: "name mt-4 sm:mt-8 ml-0  text-gray-900  sm:text-left",
                field: l
            }), a.createElement(s.y, {
                tag: "p3",
                textType: f.UH.TEXT_TYPE_BODY,
                className: "designation mt-1 ml-0   sm:text-left",
                field: m
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
          , i = n.n(r)
          , o = n(7294)
          , c = (n(7961),
        function(t) {
            var e = "boolean" !== typeof t.show || t.show
              , n = (0,
            o.useRef)(null);
            return e && o.createElement(l, Object.assign({}, t, {
                pref: n
            }))
        }
        )
          , l = o.memo((function(t) {
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
                return o.createElement("div", {
                    style: f,
                    ref: t.pref,
                    className: i()(t.className, null === t || void 0 === t || null === (e = t.field) || void 0 === e ? void 0 : e.class, "text-label", (0,
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
            var n, a, r, i, o;
            return "true" === (null === (n = document) || void 0 === n || null === (a = n.getElementById("contentIframe")) || void 0 === a || null === (r = a.contentWindow.document.querySelector('[data-id="'.concat(null === e || void 0 === e || null === (o = e.field) || void 0 === o ? void 0 : o.id, '"]'))) || void 0 === r || null === (i = r.firstChild) || void 0 === i ? void 0 : i.contentEditable)
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
              , i = t.large
              , o = t.xlarge
              , c = t.xxlarge
              , l = "container";
            return e ? l += "-xs" : n ? l += "-sm" : r ? l += "-md" : i ? l += "-lg" : o ? l += "-xl" : c && (l += "-xxl"),
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
          , i = n.n(r)
          , o = n(7294)
          , c = function(t) {
            var e, n = function(e) {
                return null !== t && void 0 !== t && t.itemLength && e ? (null === t || void 0 === t ? void 0 : t.itemLength) % (12 / e) === 0 ? e : e + 1 : e
            }, r = t.desktop ? "col-xl-".concat(n(t.desktop)) : "", c = t.tablet ? "col-md-".concat(n(t.tablet)) : "", l = t.mobile ? "col-sm-".concat(t.mobile) : "", s = t.all ? "col-".concat(t.all) : "", u = t.gy > -1 ? "mb-".concat(t.gy) : "";
            return o.createElement("div", {
                style: t.style,
                "data-id": t.id,
                className: i()(t.className, (e = {
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
          , i = n.n(r)
          , o = n(7294)
          , c = function(t) {
            var e, n = t.gx, r = t.gy, c = t.smGy, l = t.smGx, s = t.children, u = t.centerItems, d = t.className, f = o.Children.count(s);
            return o.createElement("div", {
                className: i()("row", (e = {},
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
          , i = n(4184)
          , o = n.n(i)
          , c = function(t) {
            var e = t.img
              , n = t.show
              , i = void 0 === n || n
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
            return i && a.createElement("figure", {
                className: o()("media", t.className),
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
                className: o()("img-image", t.imageClass),
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
                return i
            }
        });
        var a = n(1413)
          , r = n(7294);
        function i(t) {
            return r.memo((function(e) {
                var n = function(t) {
                    if (!t)
                        return {};
                    var e = function t(e, r) {
                        return e.map((function(e) {
                            var i = r[e];
                            if (null !== i && void 0 !== i && i.list && Array.isArray(i.list))
                                return (0,
                                a.Z)((0,
                                a.Z)({}, i), {}, {
                                    list: t(i.list, r)
                                });
                            var o = {}
                              , c = n(r[e], o);
                            return Object.keys(o).length ? (0,
                            a.Z)((0,
                            a.Z)({}, c), o) : c
                        }
                        ))
                    }
                      , n = function n(r, i) {
                        return Object.keys(r).forEach((function(o) {
                            var c = t[r[o]];
                            c && "id" != o && (null !== c && void 0 !== c && c.list && Array.isArray(c.list) ? i[o] = (0,
                            a.Z)((0,
                            a.Z)({}, c), {}, {
                                list: e(c.list, t)
                            }) : "object" != typeof r[o] && (i[o] = (0,
                            a.Z)({}, c)),
                            n(c, i[o]))
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
          , i = n(7294)
          , o = n(822)
          , c = n(4184)
          , l = n.n(c)
          , s = n(6971)
          , u = ["componentData", "children", "className", "isNavbar", "sectionRef"];
        e.Z = function(t) {
            var e, n = t.componentData, c = t.children, d = t.className, f = t.isNavbar, m = t.sectionRef, g = (0,
            r.Z)(t, u), p = n.marginTop, h = n.marginBottom, v = n.background, y = n.backgroundImage, b = n.theme;
            return null === o.a || void 0 === o.a || o.a.generateStylesWithParentId({
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
            o.a.generateStyle({
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
            i.createElement("section", Object.assign({
                style: {
                    marginTop: p,
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
            }, g), i.createElement("div", {
                className: "section-background"
            }, y && b && i.createElement("div", {
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
                        var i = typeof n;
                        if ("string" === i || "number" === i)
                            t.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var o = r.apply(null, n);
                                o && t.push(o)
                            }
                        } else if ("object" === i) {
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
            var n, r, i = (0,
            a.Z)(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
            }
            return i
        }
    }
}]);
//# sourceMappingURL=TestimonialSection.fc0fa7ef.chunk.js.map
