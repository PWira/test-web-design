/*! For license information please see 6364.e3a787b4.chunk.js.LICENSE.txt */
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[6364], {
    4275: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return l
            }
        });
        var r = n(4942)
          , o = n(4184)
          , a = n.n(o)
          , i = n(7294)
          , l = (n(7961),
        function(e) {
            var t = "boolean" !== typeof e.show || e.show
              , n = (0,
            i.useRef)(null);
            return t && i.createElement(c, Object.assign({}, e, {
                pref: n
            }))
        }
        )
          , c = i.memo((function(e) {
            var t;
            if (null !== e && void 0 !== e && e.field) {
                var n = e.field
                  , o = n.text
                  , l = n.id
                  , c = n.fontSize
                  , d = n.fontWeight
                  , u = e.textType
                  , s = e.tag
                  , p = {
                    fontSize: c,
                    fontWeight: d
                }
                  , m = /<[^>]+>/g.test(o) ? o : function(e, t) {
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
                }(s, o);
                return i.createElement("div", {
                    style: p,
                    ref: e.pref,
                    className: a()(e.className, null === e || void 0 === e || null === (t = e.field) || void 0 === t ? void 0 : t.class, "text-label", (0,
                    r.Z)({}, u, u)),
                    "data-key": "text",
                    "data-id": l,
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })
            }
            console.error("Error in TextLabel component, props.field is undefined")
        }
        ), (function(e, t) {
            var n, r, o, a, i;
            return "true" === (null === (n = document) || void 0 === n || null === (r = n.getElementById("contentIframe")) || void 0 === r || null === (o = r.contentWindow.document.querySelector('[data-id="'.concat(null === t || void 0 === t || null === (i = t.field) || void 0 === i ? void 0 : i.id, '"]'))) || void 0 === o || null === (a = o.firstChild) || void 0 === a ? void 0 : a.contentEditable)
        }
        ))
    },
    6364: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return h
            }
        });
        var r = n(4942)
          , o = n(885)
          , a = n(5987)
          , i = n(4184)
          , l = n.n(i)
          , c = n(7294)
          , d = n(8878)
          , u = n(822)
          , s = n(8592)
          , p = n(3935)
          , m = (n(6223),
        function(e) {
            var t = e.target
              , n = e.onClose
              , r = e.backdropFilter
              , o = e.shouldCloseOnOutsideClick
              , a = e.children
              , i = (0,
            c.useRef)(null);
            (0,
            c.useEffect)((function() {
                var e = t || document
                  , r = function(e) {
                    i.current && !i.current.contains(e.target) && n()
                };
                return e.addEventListener("mousedown", r),
                function() {
                    e.removeEventListener("mousedown", r)
                }
            }
            ), [n]);
            var d = c.createElement(c.Fragment, null, c.createElement("div", {
                className: l()("fade modal-backdrop", {
                    show: !1 !== r
                })
            }), c.createElement("div", {
                onClick: o && n,
                className: "fade popup-modal"
            }, c.createElement("div", {
                onClick: function(e) {
                    return e.stopPropagation()
                },
                className: "modal-dialog"
            }, c.createElement("div", {
                className: "modal-content"
            }, c.createElement("div", {
                className: "close",
                onClick: n
            }), a))));
            if ("undefined" !== typeof window) {
                var u, s = (null === t || void 0 === t ? void 0 : t.body) || (null === (u = document) || void 0 === u ? void 0 : u.body);
                return (0,
                p.createPortal)(d, s)
            }
            return null
        }
        )
          , f = (0,
        c.forwardRef)((function(e, t) {
            var n, o = e.children, a = e.overlayRef, i = e.handleClick, l = e.isActive, d = e.grid, s = e.id, p = e.selectedItem;
            return u.a.generateStyle((n = {
                ".fluidGridArea": {
                    display: "grid"
                }
            },
            (0,
            r.Z)(n, "#fluidGridArea-".concat(s), {
                gridTemplateRows: "repeat(".concat(d.mobile.rows, ", minmax(20px, auto))"),
                gridTemplateColumns: "repeat(".concat(d.mobile.columns, ", minmax(0px, 37px))"),
                gap: "10px",
                position: "relative"
            }),
            (0,
            r.Z)(n, "@media (min-width: 768px)", (0,
            r.Z)({}, "#fluidGridArea-".concat(s), {
                gridTemplateRows: "repeat(".concat(d.desktop.rows, ", minmax(20px, auto))"),
                gridTemplateColumns: "repeat(".concat(d.desktop.columns, ", minmax(0px, 37px))"),
                gap: "10px",
                position: "relative"
            })),
            n)),
            c.createElement("div", {
                id: "fluidGridArea-".concat(s),
                className: "fluidGridArea",
                ref: t,
                onClick: i
            }, c.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    opacity: .5,
                    display: l ? "block" : "none"
                }
            }, c.createElement("defs", null, c.createElement("pattern", {
                id: "gridPattern",
                height: "100%",
                width: "41.75px",
                patternUnits: "userSpaceOnUse"
            }, c.createElement("rect", {
                height: "20.3125px",
                width: "29.75px",
                x: "0.5",
                y: "0.5",
                rx: "3",
                strokeWidth: "1",
                stroke: "#B7B7B7",
                fill: "#F2F2F240",
                id: "gridRect"
            }))), c.createElement("rect", {
                width: "100%",
                height: "100%",
                fill: "url(#gridPattern)"
            })), o, c.createElement("div", {
                className: "element-overlay",
                style: {
                    visibility: p ? "visible" : "hidden"
                },
                ref: a
            }))
        }
        ))
          , v = (n(4399),
        c.memo((function(e) {
            var t = e.id
              , n = e.text;
            return c.createElement("div", {
                className: "text-container"
            }, c.createElement("div", null, c.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: n
                },
                "data-key": "text",
                "data-id": t
            })))
        }
        ), (function() {
            return !0
        }
        )))
          , g = (0,
        c.forwardRef)((function(e, t) {
            var n, o = e.id, a = e.item, i = e.opacity, d = e.designMode, s = void 0 !== d && d, p = e.selectedItem, m = e.renderOnlyStyles, f = a.desktop, g = a.mobile, y = a.data;
            u.a.generateStyle((n = {},
            (0,
            r.Z)(n, ".grid-item-".concat(o), {
                position: "relative",
                gridRowStart: g.top,
                gridColumnStart: g.left,
                gridRowEnd: g.endTop,
                gridColumnEnd: g.endLeft,
                opacity: i,
                cursor: "grab"
            }),
            (0,
            r.Z)(n, "@media (min-width: 768px)", (0,
            r.Z)({}, ".grid-item-".concat(o), {
                position: "relative",
                gridRowStart: f.top,
                gridColumnStart: f.left,
                gridRowEnd: f.endTop,
                gridColumnEnd: f.endLeft,
                opacity: i,
                cursor: "grab"
            })),
            n));
            return m ? null : c.createElement("div", {
                ref: t,
                id: o,
                style: {},
                "data-type": y.type,
                className: "grid-item grid-item-".concat(o)
            }, c.createElement("div", {
                className: l()({
                    "fluid-element-wrapper": s,
                    selected: s && p === o
                })
            }, function(e) {
                switch (e.type) {
                case "Link":
                    return c.createElement("div", {
                        className: l()({
                            "fluid-element-wrapper": s
                        })
                    }, c.createElement(h, Object.assign({}, e, {
                        fluid: !0
                    })));
                case "Text":
                    return c.createElement(v, e)
                }
            }(y)))
        }
        ))
          , y = function(e) {
            var t = e.data
              , n = e.renderOnlyStyles
              , r = void 0 !== n && n
              , o = t.context
              , a = t.grid
              , i = t.id;
            return c.createElement(f, {
                grid: a,
                id: i
            }, o.map((function(e) {
                return c.createElement(g, {
                    key: e.id,
                    opacity: 1,
                    id: e.id,
                    item: e,
                    renderOnlyStyles: r
                })
            }
            )))
        }
          , b = ["fluid", "isPrimary", "external", "id", "type"]
          , h = function(e) {
            var t, n, i = e.fluid, p = e.isPrimary, f = e.external, v = e.id, g = e.type, h = (0,
            a.Z)(e, b), x = h.href, E = h.text, w = h.color, S = h.buttonId, C = h.borderRadius, k = h.borderColor, O = h.fontSize, N = h.backgroundColor, R = h.spcStyles, _ = h.action, B = h.onClick, P = h.className, T = h.show, A = void 0 === T || T, L = (0,
            c.useContext)(d.kn), Z = (0,
            c.useState)(!1), I = (0,
            o.Z)(Z, 2), j = I[0], D = I[1];
            n = void 0 != p ? p ? "primary" : "secondary" : "primary";
            var z = (null === _ || void 0 === _ ? void 0 : _.external) || f
              , F = "".concat("primary" == n ? "" : "s", "button-").concat(R ? S : L.globals[n + "ButtonId"])
              , G = "button ".concat(F)
              , H = '[class^="button '.concat("primary" == n ? "" : "s", 'button-"].button-extra')
              , W = "[data-id='".concat(v, "'].button.button-extra")
              , U = {}
              , M = {};
            "secondary" === n && (U.backgroundColor = L.globals[n + "ButtonBg"]),
            N && (U.backgroundColor = N),
            U.fontSize = L.globals[n + "ButtonTextSize"],
            U.color = L.globals[n + "ButtonText"],
            U.borderRadius = L.globals[n + "ButtonRD"],
            U.borderColor = L.globals[n + "ButtonRDColor"],
            R && (M.fontSize = O,
            M.backgroundColor = N,
            M.color = w,
            M.borderRadius = C,
            M.borderColor = k),
            null === u.a || void 0 === u.a || u.a.generateStyle((t = {
                ".button": {
                    minWidth: "100px",
                    minHeight: "44px",
                    marginRight: "16px",
                    marginTop: "16px",
                    display: "flex",
                    cursor: "pointer",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center"
                },
                ".button div": {
                    textDecoration: "none"
                },
                ".button--primary": {
                    background: "var(--primary700)",
                    border: "1px solid var(--primary700)",
                    borderRadius: "var(--primary-button-rd)",
                    color: "var(--primary-button-text)"
                },
                ".button--primary:hover": {
                    background: "var(--primary-hover)"
                },
                ".button--secondary": {
                    background: "var(--secondary-button-bg)",
                    color: "var(--secondary-button-text)",
                    borderRadius: "var(--secondary-button-rd)",
                    border: "1px solid #cccccc"
                },
                ".button--secondary:hover": {
                    background: "var(--secondary-hover)"
                },
                ".button.fluid": {
                    width: "100%",
                    marginRight: "0",
                    marginTop: "0",
                    whiteSpace: "pre-wrap"
                }
            },
            (0,
            r.Z)(t, H, U),
            (0,
            r.Z)(t, W, M),
            t));
            var J = (null === _ || void 0 === _ ? void 0 : _.href) || x
              , K = function() {
                return !(null !== _ && void 0 !== _ && _.customPopup)
            };
            return A ? c.createElement(c.Fragment, null, c.createElement("a", {
                onClick: function(e) {
                    (null !== _ && void 0 !== _ && _.isPopup && "stripe" != (null === _ || void 0 === _ ? void 0 : _.serviceType) || null !== _ && void 0 !== _ && _.customPopup) && (e.preventDefault(),
                    D(!0))
                }
                || B,
                href: J,
                target: z ? "_blank" : "_self",
                "data-key": g,
                className: l()(G, P, "button-extra button-text", (0,
                r.Z)({
                    fluid: i
                }, h.class, h.class))
            }, "string" === typeof E || "object" === typeof E ? E : {
                value: ""
            }), function() {
                if (j && K())
                    return c.createElement(s.J, {
                        setShowPopup: D,
                        url: J
                    });
                if (j && !K()) {
                    var e, t = null === L || void 0 === L || null === (e = L.globals) || void 0 === e ? void 0 : e.popups, n = t ? t[null === _ || void 0 === _ ? void 0 : _.customPopup] : null;
                    return n && c.createElement(m, {
                        shouldCloseOnOutsideClick: !0,
                        onClose: function() {
                            return D(!1)
                        },
                        onChange: function() {}
                    }, c.createElement(y, {
                        data: n
                    }))
                }
            }()) : null
        };
        n(4275)
    },
    8592: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return l
            }
        });
        var r = n(885)
          , o = n(4184)
          , a = n.n(o)
          , i = n(7294)
          , l = function(e) {
            var t = e.setShowPopup
              , n = e.url
              , o = (0,
            i.useState)(!0)
              , l = (0,
            r.Z)(o, 2)
              , c = l[0]
              , d = l[1];
            return i.createElement("div", {
                className: a()("popup-container open"),
                style: {
                    animation: "fadeIn 250ms ease-in"
                }
            }, i.createElement("div", {
                className: "popup-content"
            }, i.createElement("button", {
                className: "close-button",
                onClick: function() {
                    return t(!1)
                }
            }, "X"), c ? i.createElement("span", {
                className: "spinner"
            }) : null, i.createElement("iframe", {
                onLoad: function() {
                    d(!1)
                },
                src: n,
                title: "Stripe Payment"
            })))
        }
    },
    4184: function(e, t) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var a = typeof n;
                        if ("string" === a || "number" === a)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var i = o.apply(null, n);
                                i && e.push(i)
                            }
                        } else if ("object" === a) {
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
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    5987: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(3366);
        function o(e, t) {
            if (null == e)
                return {};
            var n, o, a = (0,
            r.Z)(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    n = i[o],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
    }
}]);
//# sourceMappingURL=6364.e3a787b4.chunk.js.map
