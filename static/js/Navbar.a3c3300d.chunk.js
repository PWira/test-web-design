"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[160], {
    1806: function(e, t, l) {
        l.d(t, {
            P: function() {
                return r
            }
        });
        var n = l(4184)
          , a = l.n(n)
          , i = l(7294)
          , o = l(1407)
          , r = function(e) {
            return i.createElement("div", {
                className: a()(e.className, o._h.SECTION_CARD_TEXT)
            }, e.children)
        }
    },
    3694: function(e, t, l) {
        l.d(t, {
            W: function() {
                return a
            }
        });
        var n = l(7294)
          , a = function(e) {
            var t = e.xsmall
              , l = e.small
              , a = e.medium
              , i = e.large
              , o = e.xlarge
              , r = e.xxlarge
              , s = "container";
            return t ? s += "-xs" : l ? s += "-sm" : a ? s += "-md" : i ? s += "-lg" : o ? s += "-xl" : r && (s += "-xxl"),
            n.createElement("div", {
                className: s
            }, e.children)
        }
    },
    49: function(e, t, l) {
        l.r(t);
        var n = l(4942)
          , a = l(1413)
          , i = l(885)
          , o = l(4184)
          , r = l.n(o)
          , s = l(7294)
          , c = l(3694)
          , d = l(7848)
          , m = l(138)
          , u = l(4275)
          , v = l(6364)
          , g = l(8878)
          , p = l(822)
          , E = l(1407)
          , x = l(1806)
          , h = l(9018)
          , f = l(1948)
          , b = (0,
        m.Z)((function(e) {
            var t, l, o, m, b, y, N, k, _, T, L = e.buttonList, w = e.linkList, I = e.fontStyles, C = e.componentData, O = e.companyName, A = e.socialList, D = C.marginTop, B = C.marginBottom, S = C.backgroundColor, H = (0,
            s.useRef)(null), U = I, Z = (0,
            s.useContext)(g.kn), G = (0,
            s.useState)(!1), z = (0,
            i.Z)(G, 2), R = z[0], j = z[1], P = e.logo, K = e.buttons || L, M = e.links || (0,
            a.Z)((0,
            a.Z)({}, w), {}, {
                list: w.list.map((function(e) {
                    return e.link
                }
                ))
            }), X = null !== Z && void 0 !== Z && Z.globals.header ? null === Z || void 0 === Z || null === (t = Z.layout[0]) || void 0 === t ? void 0 : t.theme : null === Z || void 0 === Z || null === (l = Z.layout[1]) || void 0 === l ? void 0 : l.theme, Y = null === Z || void 0 === Z || null === (o = Z.layout[0]) || void 0 === o ? void 0 : o.backgroundImage, W = (null === P || void 0 === P ? void 0 : P.src) && (null === O || void 0 === O ? void 0 : O.text), F = [E.yU.DARK1, E.yU.DARK2, E.yU.NIGHT1, E.yU.NIGHT2].includes(X) && P.darkSrc || P.src;
            return p.a.generateStyle({
                ".navbar": {
                    padding: "30px 0"
                },
                ".navbar.dark": {
                    color: "var(--gray800)"
                },
                ".flex-menu": {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                ".menu": {
                    display: "flex",
                    alignItems: "center"
                },
                ".menu> div": {
                    padding: "10px 0",
                    marginLeft: "18px",
                    marginRight: "18px",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0
                },
                ".logo": {
                    textDecoration: "none",
                    color: null === U || void 0 === U || null === (m = U.fontColor) || void 0 === m || null === (b = m.value) || void 0 === b ? void 0 : b.value,
                    marginRight: "30px",
                    display: "flex",
                    alignItems: "center"
                },
                ".logo-img": {
                    height: "number" === typeof (null === P || void 0 === P ? void 0 : P.size) ? P.size + "px" : (null === P || void 0 === P ? void 0 : P.size) || "50px"
                },
                ".logo span": {
                    fontSize: "24px",
                    paddingLeft: "12px",
                    paddingRight: "8px",
                    fontWeight: "500"
                },
                ".mobile-burger": {
                    cursor: "pointer"
                },
                ".mobile-nav": {
                    margin: "8px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                ".navbar-card": {
                    top: "0",
                    left: "0",
                    width: "100%",
                    position: "absolute",
                    zIndex: "999"
                },
                ".mobile-links": {
                    borderBottom: "1px dashed rgb(203, 213, 225);"
                },
                ".button.nava-button": {
                    marginTop: 0
                },
                "div.bg-text": {
                    color: "var(--heading-font-color)"
                },
                "@media (max-width: 1024px)": {
                    "a .logo": {
                        display: W ? "none" : "block"
                    }
                }
            }),
            s.createElement("section", {
                ref: H,
                style: {
                    marginTop: D,
                    marginBottom: B,
                    backgroundColor: S,
                    position: "absolute",
                    width: "100%",
                    zIndex: 1
                },
                className: r()((y = {},
                (0,
                n.Z)(y, X, !!X),
                (0,
                n.Z)(y, "hasTheme", !!X),
                y)),
                id: null === C || void 0 === C ? void 0 : C.componentName,
                "data-section-id": C.uuid
            }, s.createElement(c.W, {
                large: !0
            }, s.createElement("header", null, s.createElement("nav", {
                className: "hidden sm:block"
            }, s.createElement("div", null, s.createElement("div", {
                className: r()("navbar")
            }, s.createElement("div", {
                className: "flex-menu"
            }, s.createElement("div", {
                className: "menu"
            }, s.createElement("a", {
                className: "logo",
                href: P.href || "/"
            }, F && s.createElement("img", {
                alt: "logo",
                className: r()("logo-img", (0,
                n.Z)({}, E.UH.LOGO_IMAGE, "SingleLogo" === (null === P || void 0 === P ? void 0 : P.type))),
                src: F
            }), s.createElement("span", {
                className: "logo"
            }, s.createElement(u.y, {
                field: O,
                textType: E.UH.TEXT_TYPE_HEADING,
                tag: "p2Bold"
            }))), s.createElement(h.Z.Link, {
                links: M,
                textClass: r()({
                    "bg-text": !!Y
                }),
                tag: "p3"
            })), s.createElement("div", {
                className: "flex items-center"
            }, s.createElement("div", {
                className: "flex"
            }, s.createElement(h.Z.Button, {
                buttons: K,
                className: "nava-button"
            })), s.createElement("div", {
                className: "flex gap-2"
            }, s.createElement(h.Z.Social, {
                socials: A
            }))))))), s.createElement("div", {
                className: r()("sm:hidden block navbar")
            }, s.createElement("div", {
                className: "mobile-nav"
            }, s.createElement("a", {
                className: "logo",
                href: P.href
            }, s.createElement("div", {
                className: "flex items-center"
            }, F && s.createElement("img", {
                alt: "logo",
                className: r()("logo-img inline-block", (0,
                n.Z)({}, E.UH.LOGO_IMAGE, "SingleLogo" === (null === P || void 0 === P ? void 0 : P.type))),
                src: F
            }), s.createElement("span", {
                className: "logo"
            }, s.createElement(u.y, {
                field: O,
                textType: E.UH.TEXT_TYPE_HEADING,
                tag: "p2Bold"
            })))), !((null === L || void 0 === L || null === (N = L.list) || void 0 === N ? void 0 : N.length) <= 0 && (null === w || void 0 === w || null === (k = w.list) || void 0 === k ? void 0 : k.length) <= 0 && (null === A || void 0 === A || null === (_ = A.list) || void 0 === _ ? void 0 : _.length) <= 0) && s.createElement("div", {
                className: r()("mobile-burger", E.UH.TEXT_TYPE_BODY),
                onClick: function() {
                    j(!0)
                }
            }, s.createElement("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 16 10"
            }, s.createElement("g", {
                fill: "currentColor"
            }, s.createElement("rect", {
                y: "8",
                width: "16",
                height: "2",
                rx: "1"
            }), s.createElement("rect", {
                y: "4",
                width: "16",
                height: "2",
                rx: "1"
            }), s.createElement("rect", {
                width: "16",
                height: "2",
                rx: "1"
            }))))), R && s.createElement("div", {
                className: "navbar-card p-3 "
            }, s.createElement(x.P, {
                className: "shadow-lg bg-white rounded-lg h-full"
            }, s.createElement("div", {
                className: r()("p-4 flex justify-end cursor-pointer", E.UH.LOGO_IMAGE),
                onClick: function() {
                    j(!1)
                }
            }, s.createElement("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40"
            }, s.createElement("title", null, "Close mobile navigation"), s.createElement("path", {
                d: "M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z",
                fill: "#4F5B76"
            }))), null === w || void 0 === w || null === (T = w.list) || void 0 === T ? void 0 : T.map((function(e) {
                return w.showLinks && s.createElement("div", {
                    key: e.id,
                    className: "p-4 text-gray-700 text-lg text-bold hover:text-gray-500 cursor-pointer mobile-links"
                }, s.createElement(d.u, Object.assign({
                    key: e.id
                }, e.link, {
                    tag: "p3"
                })))
            }
            )), null === L || void 0 === L ? void 0 : L.list.map((function(e) {
                return L.showButtons && s.createElement("div", {
                    key: e.id,
                    className: "px-4 pb-2"
                }, s.createElement(v.z, Object.assign({
                    key: e.id
                }, e.button)))
            }
            )), null === A || void 0 === A ? void 0 : A.list.map((function(e) {
                return A.showSocials && s.createElement("div", {
                    key: e.id,
                    className: "px-4 pb-2"
                }, s.createElement(f.Q, Object.assign({
                    key: e.id
                }, e.social)))
            }
            ))))))))
        }
        ));
        t.default = b
    }
}]);
//# sourceMappingURL=Navbar.a3c3300d.chunk.js.map
