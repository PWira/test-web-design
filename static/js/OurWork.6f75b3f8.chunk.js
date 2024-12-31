"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([[3692], {
    7890: function(e, t, a) {
        a.r(t);
        var n = a(3694)
          , o = a(7294)
          , r = a(138)
          , l = a(4275)
          , i = a(1544)
          , c = a(5292)
          , s = a(1407)
          , m = a(8917)
          , u = a(6828)
          , d = a(9018)
          , g = (0,
        r.Z)((function(e) {
            var t = e.componentData
              , a = e.title
              , r = e.subtitle
              , g = e.workList
              , v = e.buttonList;
            return o.createElement(c.Z, {
                componentData: t
            }, o.createElement(n.W, {
                large: !0
            }, o.createElement("div", {
                className: "flex flex-col items-center   gap-4"
            }, o.createElement(m.O, null, o.createElement(l.y, {
                tag: "h2",
                className: "text-4xl",
                textType: s.UH.TEXT_TYPE_HEADING,
                field: a
            }), o.createElement(l.y, {
                tag: "p2",
                textType: s.UH.TEXT_TYPE_BODY,
                className: "text-[#6E757C] max-w-4xl",
                field: r
            })), o.createElement("div", {
                className: "h-[2px] w-9 bg-[#222529] mt-4"
            }), o.createElement("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 ",
                id: "boxes"
            }, g.list.map((function(e) {
                var t;
                return o.createElement("div", {
                    key: e.id,
                    className: "relative group flex flex-col"
                }, o.createElement("div", {
                    className: "flex items-center justify-center h-full group-hover:h-[80%] overflow-hidden transition-all ease-in-out duration-500"
                }, o.createElement(i.E, {
                    img: e.image,
                    alt: (null === (t = e.image) || void 0 === t ? void 0 : t.alt) || "portfolio",
                    show: g.showImage
                })), o.createElement("div", {
                    className: "absolute top-0 left-0 group-hover:h-[80%] h-full box-border w-full flex items-center flex-col justify-center bg-black/50 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500 pointer-events-none"
                }), o.createElement("div", {
                    className: "bg-white group-hover:block absolute box-border w-full h-0 transition-all ease-in-out duration-500 overflow-hidden group-hover:h-[20%] bottom-0"
                }, o.createElement(l.y, {
                    tag: "p2",
                    className: "hover:text-[var(--primary700)] mt-3 ml-2 cursor-pointer",
                    field: (null === e || void 0 === e ? void 0 : e.name) || e.title,
                    show: g.showName || g.showTitle
                })))
            }
            ))), o.createElement(u.W, {
                className: "mt-4"
            }, o.createElement(d.Z.Button, {
                buttons: v
            })))))
        }
        ));
        t.default = g
    },
    6828: function(e, t, a) {
        a.d(t, {
            W: function() {
                return l
            }
        });
        var n = a(4184)
          , o = a.n(n)
          , r = a(7294)
          , l = function(e) {
            var t = e.className
              , a = e.children;
            return r.createElement("div", {
                className: o()("dp-f flex-wrap  justify-center", t)
            }, a)
        }
    },
    3694: function(e, t, a) {
        a.d(t, {
            W: function() {
                return o
            }
        });
        var n = a(7294)
          , o = function(e) {
            var t = e.xsmall
              , a = e.small
              , o = e.medium
              , r = e.large
              , l = e.xlarge
              , i = e.xxlarge
              , c = "container";
            return t ? c += "-xs" : a ? c += "-sm" : o ? c += "-md" : r ? c += "-lg" : l ? c += "-xl" : i && (c += "-xxl"),
            n.createElement("div", {
                className: c
            }, e.children)
        }
    },
    5292: function(e, t, a) {
        var n = a(4942)
          , o = a(5987)
          , r = a(7294)
          , l = a(822)
          , i = a(4184)
          , c = a.n(i)
          , s = a(6971)
          , m = ["componentData", "children", "className", "isNavbar", "sectionRef"];
        t.Z = function(e) {
            var t, a = e.componentData, i = e.children, u = e.className, d = e.isNavbar, g = e.sectionRef, v = (0,
            o.Z)(e, m), f = a.marginTop, p = a.marginBottom, h = a.background, x = a.backgroundImage, b = a.theme;
            return null === l.a || void 0 === l.a || l.a.generateStylesWithParentId({
                ".section-background": {
                    background: x ? 'url("'.concat(x, '")') : "",
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
            l.a.generateStyle({
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
            r.createElement("section", Object.assign({
                style: {
                    marginTop: f,
                    marginBottom: p,
                    background: x && h ? (0,
                    s.XF)(h, .6) : h
                },
                className: c()("section", u, (t = {},
                (0,
                n.Z)(t, b, b),
                (0,
                n.Z)(t, "hasTheme", !!b),
                (0,
                n.Z)(t, "hasOverlay", x && b),
                (0,
                n.Z)(t, "section-wrapper", !d),
                t)),
                id: (null === a || void 0 === a ? void 0 : a.componentName) + "-" + a.uuid,
                "data-section-id": a.uuid,
                ref: g
            }, v), r.createElement("div", {
                className: "section-background"
            }, x && b && r.createElement("div", {
                className: "section-background-overlay",
                style: {
                    opacity: .3
                }
            })), i)
        }
    },
    8917: function(e, t, a) {
        a.d(t, {
            O: function() {
                return l
            }
        });
        var n = a(4184)
          , o = a.n(n)
          , r = a(7294)
          , l = function(e) {
            var t = e.children
              , a = e.textAlign
              , n = e.align
              , l = e.dir
              , i = e.className
              , c = e.gap
              , s = e.maxW
              , m = a || "text-center"
              , u = n || "items-center"
              , d = l || "flex-col"
              , g = c ? "gap-" + c : "gap-4"
              , v = s ? "max-w-".concat(s, "xl") : "max-w-4xl";
            return r.createElement("div", {
                className: o()("flex mx-auto", m, d, g, u, v, i)
            }, t)
        }
    }
}]);
//# sourceMappingURL=OurWork.6f75b3f8.chunk.js.map
