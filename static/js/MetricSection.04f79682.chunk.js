/*! For license information please see MetricSection.04f79682.chunk.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[5511], {
    2051: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(7294)
          , a = n(822)
          , o = n(3694)
          , c = n(5754)
          , l = n(8480)
          , i = n(138)
          , s = n(4275)
          , u = n(5292)
          , d = n(1407)
          , m = n(8917)
          , f = (0,
        i.Z)((function(e) {
            var t, n = e.title, i = e.subtitle, f = e.statisticList, p = e.componentData;
            return a.a.generateStylesWithParentId({
                ".para2": {
                    marginLeft: "auto",
                    marginRight: "auto",
                    lineHeight: "30px",
                    textAlign: "center"
                },
                ".boxes": {
                    textAlign: "center",
                    padding: "15px",
                    float: "left"
                },
                ".txtColor": {
                    color: null !== p && void 0 !== p && p.theme ? "" : "var(--primary700)"
                }
            }, p.uuid),
            r.createElement(u.Z, {
                componentData: p
            }, r.createElement(o.W, {
                large: !0
            }, r.createElement(l.J, {
                gy: 4
            }, r.createElement(c.r, {
                desktop: 12,
                tablet: 12,
                mobile: 12
            }, r.createElement(m.O, null, r.createElement(s.y, {
                tag: "h3",
                className: "",
                textType: d.UH.TEXT_TYPE_HEADING,
                field: n
            }), r.createElement(s.y, {
                tag: "p2",
                className: "",
                textType: d.UH.TEXT_TYPE_BODY,
                field: i
            }))), r.createElement(c.r, {
                desktop: 12,
                tablet: 12,
                mobile: 12
            }, r.createElement("div", {
                className: "container"
            }, null === f || void 0 === f || null === (t = f.list) || void 0 === t ? void 0 : t.map((function(e) {
                return r.createElement("div", {
                    key: e.id,
                    className: "boxes w-full sm:w-4/12"
                }, r.createElement(s.y, {
                    tag: "h2",
                    className: "txtColor mt-8 mb-2",
                    textType: d.UH.TEXT_TYPE_HEADING,
                    field: e.value,
                    show: f.showValue
                }), r.createElement(s.y, {
                    tag: "p3",
                    className: "text-gray-900",
                    textType: d.UH.TEXT_TYPE_BODY,
                    field: e.name,
                    show: f.showName
                }))
            }
            )))))))
        }
        ));
        t.default = f
    },
    4275: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return l
            }
        });
        var r = n(4942)
          , a = n(4184)
          , o = n.n(a)
          , c = n(7294)
          , l = (n(7961),
        function(e) {
            var t = "boolean" !== typeof e.show || e.show
              , n = (0,
            c.useRef)(null);
            return t && c.createElement(i, Object.assign({}, e, {
                pref: n
            }))
        }
        )
          , i = c.memo((function(e) {
            var t;
            if (null !== e && void 0 !== e && e.field) {
                var n = e.field
                  , a = n.text
                  , l = n.id
                  , i = n.fontSize
                  , s = n.fontWeight
                  , u = e.textType
                  , d = e.tag
                  , m = {
                    fontSize: i,
                    fontWeight: s
                }
                  , f = /<[^>]+>/g.test(a) ? a : function(e, t) {
                    switch (e) {
                    case "h1":
                        return "<h1>".concat(t, "</h1>");
                    case "h2":
                        return "<h2>".concat(t, "</h2>");
                    case "h3":
                        return "<h3>".concat(t, "</h3>");
                    case "p1":
                        return '<p class="text-2xl">'.concat(t, "</p>");
                    case "p2":
                        return '<p class="text-xl">'.concat(t, "</p>");
                    case "p3":
                        return "<p>".concat(t, "</p>");
                    case "p4":
                        return '<p class="text-sm">'.concat(t, "</p>");
                    case "p1Bold":
                        return '<p style="font-weight: 700;" class="text-2xl">'.concat(t, "</p>");
                    case "p2Bold":
                        return '<p style="font-weight: 700;" class="text-xl">'.concat(t, "</p>");
                    case "p3Bold":
                        return '<p style="font-weight: 700;" ">'.concat(t, "</p>");
                    case "p4Bold":
                        return '<p style="font-weight: 700;" class="text-sm">'.concat(t, "</p>");
                    default:
                        return e ? "<".concat(e, ">").concat(t, "</").concat(e, ">") : t
                    }
                }(d, a);
                return c.createElement("div", {
                    style: m,
                    ref: e.pref,
                    className: o()(e.className, null === e || void 0 === e || null === (t = e.field) || void 0 === t ? void 0 : t.class, "text-label", (0,
                    r.Z)({}, u, u)),
                    "data-key": "text",
                    "data-id": l,
                    dangerouslySetInnerHTML: {
                        __html: f
                    }
                })
            }
            console.error("Error in TextLabel component, props.field is undefined")
        }
        ), (function(e, t) {
            var n, r, a, o, c;
            return "true" === (null === (n = document) || void 0 === n || null === (r = n.getElementById("contentIframe")) || void 0 === r || null === (a = r.contentWindow.document.querySelector('[data-id="'.concat(null === t || void 0 === t || null === (c = t.field) || void 0 === c ? void 0 : c.id, '"]'))) || void 0 === a || null === (o = a.firstChild) || void 0 === o ? void 0 : o.contentEditable)
        }
        ))
    },
    3694: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return a
            }
        });
        var r = n(7294)
          , a = function(e) {
            var t = e.xsmall
              , n = e.small
              , a = e.medium
              , o = e.large
              , c = e.xlarge
              , l = e.xxlarge
              , i = "container";
            return t ? i += "-xs" : n ? i += "-sm" : a ? i += "-md" : o ? i += "-lg" : c ? i += "-xl" : l && (i += "-xxl"),
            r.createElement("div", {
                className: i
            }, e.children)
        }
    },
    5754: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return l
            }
        });
        var r = n(4942)
          , a = n(4184)
          , o = n.n(a)
          , c = n(7294)
          , l = function(e) {
            var t, n = function(t) {
                return null !== e && void 0 !== e && e.itemLength && t ? (null === e || void 0 === e ? void 0 : e.itemLength) % (12 / t) === 0 ? t : t + 1 : t
            }, a = e.desktop ? "col-xl-".concat(n(e.desktop)) : "", l = e.tablet ? "col-md-".concat(n(e.tablet)) : "", i = e.mobile ? "col-sm-".concat(e.mobile) : "", s = e.all ? "col-".concat(e.all) : "", u = e.gy > -1 ? "mb-".concat(e.gy) : "";
            return c.createElement("div", {
                style: e.style,
                "data-id": e.id,
                className: o()(e.className, (t = {
                    col: !a && !l && !i & !s
                },
                (0,
                r.Z)(t, a, e.desktop),
                (0,
                r.Z)(t, l, e.tablet),
                (0,
                r.Z)(t, i, e.mobile),
                (0,
                r.Z)(t, s, e.all),
                (0,
                r.Z)(t, u, !!u),
                t))
            }, e.children)
        }
    },
    8480: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return l
            }
        });
        var r = n(4942)
          , a = n(4184)
          , o = n.n(a)
          , c = n(7294)
          , l = function(e) {
            var t, n = e.gx, a = e.gy, l = e.smGy, i = e.smGx, s = e.children, u = e.centerItems, d = e.className, m = c.Children.count(s);
            return c.createElement("div", {
                className: o()("row", (t = {},
                (0,
                r.Z)(t, d, !!d),
                (0,
                r.Z)(t, "gx-".concat(n > -1 ? n : 2), !0),
                (0,
                r.Z)(t, "gy-".concat(a), a > -1),
                (0,
                r.Z)(t, "sm-gy-".concat(l), l > -1),
                (0,
                r.Z)(t, "sm-gx-".concat(i), i > -1),
                (0,
                r.Z)(t, "jc-c", u && m < 3),
                t))
            }, s)
        }
    },
    138: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1413)
          , a = n(7294);
        function o(e) {
            return a.memo((function(t) {
                var n = function(e) {
                    if (!e)
                        return {};
                    var t = function e(t, a) {
                        return t.map((function(t) {
                            var o = a[t];
                            if (null !== o && void 0 !== o && o.list && Array.isArray(o.list))
                                return (0,
                                r.Z)((0,
                                r.Z)({}, o), {}, {
                                    list: e(o.list, a)
                                });
                            var c = {}
                              , l = n(a[t], c);
                            return Object.keys(c).length ? (0,
                            r.Z)((0,
                            r.Z)({}, l), c) : l
                        }
                        ))
                    }
                      , n = function n(a, o) {
                        return Object.keys(a).forEach((function(c) {
                            var l = e[a[c]];
                            l && "id" != c && (null !== l && void 0 !== l && l.list && Array.isArray(l.list) ? o[c] = (0,
                            r.Z)((0,
                            r.Z)({}, l), {}, {
                                list: t(l.list, e)
                            }) : "object" != typeof a[c] && (o[c] = (0,
                            r.Z)({}, l)),
                            n(l, o[c]))
                        }
                        )),
                        (0,
                        r.Z)({}, a)
                    }
                      , a = {};
                    return n(e, a),
                    a
                }(t.componentData.properties);
                return a.createElement(e, (0,
                r.Z)((0,
                r.Z)((0,
                r.Z)({}, t), n), {}))
            }
            ), (function(e, t) {
                return e.componentData == t.componentData
            }
            ))
        }
    },
    5292: function(e, t, n) {
        "use strict";
        var r = n(4942)
          , a = n(5987)
          , o = n(7294)
          , c = n(822)
          , l = n(4184)
          , i = n.n(l)
          , s = n(6971)
          , u = ["componentData", "children", "className", "isNavbar", "sectionRef"];
        t.Z = function(e) {
            var t, n = e.componentData, l = e.children, d = e.className, m = e.isNavbar, f = e.sectionRef, p = (0,
            a.Z)(e, u), v = n.marginTop, g = n.marginBottom, y = n.background, h = n.backgroundImage, x = n.theme;
            return null === c.a || void 0 === c.a || c.a.generateStylesWithParentId({
                ".section-background": {
                    background: h ? 'url("'.concat(h, '")') : "",
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
            c.a.generateStyle({
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
                    marginBottom: g,
                    background: h && y ? (0,
                    s.XF)(y, .6) : y
                },
                className: i()("section", d, (t = {},
                (0,
                r.Z)(t, x, x),
                (0,
                r.Z)(t, "hasTheme", !!x),
                (0,
                r.Z)(t, "hasOverlay", h && x),
                (0,
                r.Z)(t, "section-wrapper", !m),
                t)),
                id: (null === n || void 0 === n ? void 0 : n.componentName) + "-" + n.uuid,
                "data-section-id": n.uuid,
                ref: f
            }, p), o.createElement("div", {
                className: "section-background"
            }, h && x && o.createElement("div", {
                className: "section-background-overlay",
                style: {
                    opacity: .3
                }
            })), l)
        }
    },
    8917: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return c
            }
        });
        var r = n(4184)
          , a = n.n(r)
          , o = n(7294)
          , c = function(e) {
            var t = e.children
              , n = e.textAlign
              , r = e.align
              , c = e.dir
              , l = e.className
              , i = e.gap
              , s = e.maxW
              , u = n || "text-center"
              , d = r || "items-center"
              , m = c || "flex-col"
              , f = i ? "gap-" + i : "gap-4"
              , p = s ? "max-w-".concat(s, "xl") : "max-w-4xl";
            return o.createElement("div", {
                className: a()("flex mx-auto", u, m, f, d, p, l)
            }, t)
        }
    },
    4184: function(e, t) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var o = typeof n;
                        if ("string" === o || "number" === o)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var c = a.apply(null, n);
                                c && e.push(c)
                            }
                        } else if ("object" === o) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                e.push(n.toString());
                                continue
                            }
                            for (var l in n)
                                r.call(n, l) && n[l] && e.push(l)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (a.default = a,
            e.exports = a) : void 0 === (n = function() {
                return a
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    5987: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(3366);
        function a(e, t) {
            if (null == e)
                return {};
            var n, a, o = (0,
            r.Z)(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (a = 0; a < c.length; a++)
                    n = c[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
    }
}]);
//# sourceMappingURL=MetricSection.04f79682.chunk.js.map
