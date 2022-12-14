/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    "use strict";
    var i = [],
        n = e.document,
        s = Object.getPrototypeOf,
        r = i.slice,
        a = i.concat,
        o = i.push,
        l = i.indexOf,
        c = {},
        d = c.toString,
        u = c.hasOwnProperty,
        h = u.toString,
        p = h.call(Object),
        f = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        v = function (e) {
            return null != e && e === e.window
        },
        g = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(e, t, i) {
        var s, r = (t = t || n).createElement("script");
        if (r.text = e, i)
            for (s in g) i[s] && (r[s] = i[s]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[d.call(e)] || "object" : typeof e
    }
    var x = function (e, t) {
            return new x.fn.init(e, t)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function _(e) {
        var t = !!e && "length" in e && e.length,
            i = b(e);
        return !m(e) && !v(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: "3.3.1",
        constructor: x,
        length: 0,
        toArray: function () {
            return r.call(this)
        },
        get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return x.each(this, e)
        },
        map: function (e) {
            return this.pushStack(x.map(this, (function (t, i) {
                return e.call(t, i, t)
            })))
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    }, x.extend = x.fn.extend = function () {
        var e, t, i, n, s, r, a = arguments[0] || {},
            o = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || m(a) || (a = {}), o === l && (a = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) i = a[t], a !== (n = e[t]) && (c && n && (x.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, r = i && Array.isArray(i) ? i : []) : r = i && x.isPlainObject(i) ? i : {}, a[t] = x.extend(c, r, n)) : void 0 !== n && (a[t] = n));
        return a
    }, x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, i;
            return !(!e || "[object Object]" !== d.call(e) || (t = s(e)) && ("function" != typeof (i = u.call(t, "constructor") && t.constructor) || h.call(i) !== p))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            y(e)
        },
        each: function (e, t) {
            var i, n = 0;
            if (_(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (_(Object(e)) ? x.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i
        },
        inArray: function (e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function (e, t) {
            for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
            return e.length = s, e
        },
        grep: function (e, t, i) {
            for (var n = [], s = 0, r = e.length, a = !i; s < r; s++) !t(e[s], s) !== a && n.push(e[s]);
            return n
        },
        map: function (e, t, i) {
            var n, s, r = 0,
                o = [];
            if (_(e))
                for (n = e.length; r < n; r++) null != (s = t(e[r], r, i)) && o.push(s);
            else
                for (r in e) null != (s = t(e[r], r, i)) && o.push(s);
            return a.apply([], o)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    }));
    var S = function (e) {
        var t, i, n, s, r, a, o, l, c, d, u, h, p, f, m, v, g, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            _ = 0,
            S = 0,
            T = ae(),
            C = ae(),
            E = ae(),
            k = function (e, t) {
                return e === t && (u = !0), 0
            },
            $ = {}.hasOwnProperty,
            M = [],
            P = M.pop,
            L = M.push,
            D = M.push,
            A = M.slice,
            N = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + z + "*(" + q + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + z + "*\\]",
            H = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            j = new RegExp(z + "+", "g"),
            F = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            B = new RegExp("^" + z + "*," + z + "*"),
            W = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            R = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
            X = new RegExp(H),
            V = new RegExp("^" + q + "$"),
            G = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            U = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
            ee = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "???" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function () {
                h()
            },
            se = ye((function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            D.apply(M = A.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType
        } catch (e) {
            D = {
                apply: M.length ? function (e, t) {
                    L.apply(e, A.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function re(e, t, n, s) {
            var r, o, c, d, u, f, g, y = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return n;
            if (!s && ((t ? t.ownerDocument || t : w) !== p && h(t), t = t || p, m)) {
                if (11 !== _ && (u = Q.exec(e)))
                    if (r = u[1]) {
                        if (9 === _) {
                            if (!(c = t.getElementById(r))) return n;
                            if (c.id === r) return n.push(c), n
                        } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return n.push(c), n
                    } else {
                        if (u[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(r)), n
                    } if (i.qsa && !E[e + " "] && (!v || !v.test(e))) {
                    if (1 !== _) y = t, g = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((d = t.getAttribute("id")) ? d = d.replace(te, ie) : t.setAttribute("id", d = x), o = (f = a(e)).length; o--;) f[o] = "#" + d + " " + ge(f[o]);
                        g = f.join(","), y = J.test(e) && me(t.parentNode) || t
                    }
                    if (g) try {
                        return D.apply(n, y.querySelectorAll(g)), n
                    } catch (e) {} finally {
                        d === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, n, s)
        }

        function ae() {
            var e = [];
            return function t(i, s) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s
            }
        }

        function oe(e) {
            return e[x] = !0, e
        }

        function le(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = t
        }

        function de(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function ue(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function fe(e) {
            return oe((function (t) {
                return t = +t, oe((function (i, n) {
                    for (var s, r = e([], i.length, t), a = r.length; a--;) i[s = r[a]] && (i[s] = !(n[s] = i[s]))
                }))
            }))
        }

        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = re.support = {}, r = re.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, h = re.setDocument = function (e) {
                var t, s, a = e ? e.ownerDocument || e : w;
                return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, m = !r(p), w !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ne, !1) : s.attachEvent && s.attachEvent("onunload", ne)), i.attributes = le((function (e) {
                    return e.className = "i", !e.getAttribute("className")
                })), i.getElementsByTagName = le((function (e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                })), i.getElementsByClassName = K.test(p.getElementsByClassName), i.getById = le((function (e) {
                    return f.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                })), i.getById ? (n.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i, n, s, r = t.getElementById(e);
                        if (r) {
                            if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                            for (s = t.getElementsByName(e), n = 0; r = s[n++];)
                                if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var i, n = [],
                        s = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                }, g = [], v = [], (i.qsa = K.test(p.querySelectorAll)) && (le((function (e) {
                    f.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + z + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
                })), le((function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + z + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                }))), (i.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le((function (e) {
                    i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", H)
                })), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = K.test(f.compareDocumentPosition), b = t || K.test(f.contains) ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, k = t ? function (e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : d ? N(d, e) - N(d, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return u = !0, 0;
                    var i, n = 0,
                        s = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        o = [t];
                    if (!s || !r) return e === p ? -1 : t === p ? 1 : s ? -1 : r ? 1 : d ? N(d, e) - N(d, t) : 0;
                    if (s === r) return de(e, t);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (; a[n] === o[n];) n++;
                    return n ? de(a[n], o[n]) : a[n] === w ? -1 : o[n] === w ? 1 : 0
                }, p) : p
            }, re.matches = function (e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== p && h(e), t = t.replace(R, "='$1']"), i.matchesSelector && m && !E[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return re(t, p, null, [e]).length > 0
            }, re.contains = function (e, t) {
                return (e.ownerDocument || e) !== p && h(e), b(e, t)
            }, re.attr = function (e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var s = n.attrHandle[t.toLowerCase()],
                    r = s && $.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                return void 0 !== r ? r : i.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, re.escape = function (e) {
                return (e + "").replace(te, ie)
            }, re.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function (e) {
                var t, n = [],
                    s = 0,
                    r = 0;
                if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(k), u) {
                    for (; t = e[r++];) t === e[r] && (s = n.push(r));
                    for (; s--;) e.splice(n[s], 1)
                }
                return d = null, e
            }, s = re.getText = function (e) {
                var t, i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n++];) i += s(t);
                return i
            }, (n = re.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, i = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && T(e, (function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function (e, t, i) {
                        return function (n) {
                            var s = re.attr(n, e);
                            return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(j, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (e, t, i, n, s) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === s ? function (e) {
                            return !!e.parentNode
                        } : function (t, i, l) {
                            var c, d, u, h, p, f, m = r !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = o && t.nodeName.toLowerCase(),
                                y = !l && !o,
                                b = !1;
                            if (v) {
                                if (r) {
                                    for (; m;) {
                                        for (h = t; h = h[m];)
                                            if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (b = (p = (c = (d = (u = (h = v)[x] || (h[x] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2], h = p && v.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            d[e] = [_, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (c = (d = (u = (h = t)[x] || (h[x] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === _ && c[1]), !1 === b)
                                    for (;
                                        (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++b || (y && ((d = (u = h[x] || (h[x] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [_, b]), h !== t)););
                                return (b -= s) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return s[x] ? s(t) : s.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? oe((function (e, i) {
                            for (var n, r = s(e, t), a = r.length; a--;) e[n = N(e, r[a])] = !(i[n] = r[a])
                        })) : function (e) {
                            return s(e, 0, i)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe((function (e) {
                        var t = [],
                            i = [],
                            n = o(e.replace(F, "$1"));
                        return n[x] ? oe((function (e, t, i, s) {
                            for (var r, a = n(e, null, s, []), o = e.length; o--;)(r = a[o]) && (e[o] = !(t[o] = r))
                        })) : function (e, s, r) {
                            return t[0] = e, n(t, null, r, i), t[0] = null, !i.pop()
                        }
                    })),
                    has: oe((function (e) {
                        return function (t) {
                            return re(e, t).length > 0
                        }
                    })),
                    contains: oe((function (e) {
                        return e = e.replace(Z, ee),
                            function (t) {
                                return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                            }
                    })),
                    lang: oe((function (e) {
                        return V.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function (t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    })),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === f
                    },
                    focus: function (e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function (e) {
                        return U.test(e.nodeName)
                    },
                    input: function (e) {
                        return Y.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe((function () {
                        return [0]
                    })),
                    last: fe((function (e, t) {
                        return [t - 1]
                    })),
                    eq: fe((function (e, t, i) {
                        return [i < 0 ? i + t : i]
                    })),
                    even: fe((function (e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    })),
                    odd: fe((function (e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    })),
                    lt: fe((function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    })),
                    gt: fe((function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    }))
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = ue(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = he(t);

        function ve() {}

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(e, t, i) {
            var n = t.dir,
                s = t.next,
                r = s || n,
                a = i && "parentNode" === r,
                o = S++;
            return t.first ? function (t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || a) return e(t, i, s);
                return !1
            } : function (t, i, l) {
                var c, d, u, h = [_, o];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || a) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || a)
                            if (d = (u = t[x] || (t[x] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((c = d[r]) && c[0] === _ && c[1] === o) return h[2] = c[2];
                                if (d[r] = h, h[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var s = e.length; s--;)
                    if (!e[s](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function xe(e, t, i, n, s) {
            for (var r, a = [], o = 0, l = e.length, c = null != t; o < l; o++)(r = e[o]) && (i && !i(r, n, s) || (a.push(r), c && t.push(o)));
            return a
        }

        function we(e, t, i, n, s, r) {
            return n && !n[x] && (n = we(n)), s && !s[x] && (s = we(s, r)), oe((function (r, a, o, l) {
                var c, d, u, h = [],
                    p = [],
                    f = a.length,
                    m = r || function (e, t, i) {
                        for (var n = 0, s = t.length; n < s; n++) re(e, t[n], i);
                        return i
                    }(t || "*", o.nodeType ? [o] : o, []),
                    v = !e || !r && t ? m : xe(m, h, e, o, l),
                    g = i ? s || (r ? e : f || n) ? [] : a : v;
                if (i && i(v, g, o, l), n)
                    for (c = xe(g, p), n(c, [], o, l), d = c.length; d--;)(u = c[d]) && (g[p[d]] = !(v[p[d]] = u));
                if (r) {
                    if (s || e) {
                        if (s) {
                            for (c = [], d = g.length; d--;)(u = g[d]) && c.push(v[d] = u);
                            s(null, g = [], c, l)
                        }
                        for (d = g.length; d--;)(u = g[d]) && (c = s ? N(r, u) : h[d]) > -1 && (r[c] = !(a[c] = u))
                    }
                } else g = xe(g === a ? g.splice(f, g.length) : g), s ? s(null, a, g, l) : D.apply(a, g)
            }))
        }

        function _e(e) {
            for (var t, i, s, r = e.length, a = n.relative[e[0].type], o = a || n.relative[" "], l = a ? 1 : 0, d = ye((function (e) {
                    return e === t
                }), o, !0), u = ye((function (e) {
                    return N(t, e) > -1
                }), o, !0), h = [function (e, i, n) {
                    var s = !a && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                    return t = null, s
                }]; l < r; l++)
                if (i = n.relative[e[l].type]) h = [ye(be(h), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (s = ++l; s < r && !n.relative[e[s].type]; s++);
                        return we(l > 1 && be(h), l > 1 && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), i, l < s && _e(e.slice(l, s)), s < r && _e(e = e.slice(s)), s < r && ge(e))
                    }
                    h.push(i)
                } return be(h)
        }

        function Se(e, t) {
            var i = t.length > 0,
                s = e.length > 0,
                r = function (r, a, o, l, d) {
                    var u, f, v, g = 0,
                        y = "0",
                        b = r && [],
                        x = [],
                        w = c,
                        S = r || s && n.find.TAG("*", d),
                        T = _ += null == w ? 1 : Math.random() || .1,
                        C = S.length;
                    for (d && (c = a === p || a || d); y !== C && null != (u = S[y]); y++) {
                        if (s && u) {
                            for (f = 0, a || u.ownerDocument === p || (h(u), o = !m); v = e[f++];)
                                if (v(u, a || p, o)) {
                                    l.push(u);
                                    break
                                } d && (_ = T)
                        }
                        i && ((u = !v && u) && g--, r && b.push(u))
                    }
                    if (g += y, i && y !== g) {
                        for (f = 0; v = t[f++];) v(b, x, a, o);
                        if (r) {
                            if (g > 0)
                                for (; y--;) b[y] || x[y] || (x[y] = P.call(l));
                            x = xe(x)
                        }
                        D.apply(l, x), d && !r && x.length > 0 && g + t.length > 1 && re.uniqueSort(l)
                    }
                    return d && (_ = T, c = w), b
                };
            return i ? oe(r) : r
        }
        return ve.prototype = n.filters = n.pseudos, n.setFilters = new ve, a = re.tokenize = function (e, t) {
            var i, s, r, a, o, l, c, d = C[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (o = e, l = [], c = n.preFilter; o;) {
                for (a in i && !(s = B.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(r = [])), i = !1, (s = W.exec(o)) && (i = s.shift(), r.push({
                        value: i,
                        type: s[0].replace(F, " ")
                    }), o = o.slice(i.length)), n.filter) !(s = G[a].exec(o)) || c[a] && !(s = c[a](s)) || (i = s.shift(), r.push({
                    value: i,
                    type: a,
                    matches: s
                }), o = o.slice(i.length));
                if (!i) break
            }
            return t ? o.length : o ? re.error(e) : C(e, l).slice(0)
        }, o = re.compile = function (e, t) {
            var i, n = [],
                s = [],
                r = E[e + " "];
            if (!r) {
                for (t || (t = a(e)), i = t.length; i--;)(r = _e(t[i]))[x] ? n.push(r) : s.push(r);
                (r = E(e, Se(s, n))).selector = e
            }
            return r
        }, l = re.select = function (e, t, i, s) {
            var r, l, c, d, u, h = "function" == typeof e && e,
                p = !s && a(e = h.selector || e);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = G.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !n.relative[d = c.type]);)
                    if ((u = n.find[d]) && (s = u(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = s.length && ge(l))) return D.apply(i, s), i;
                        break
                    }
            }
            return (h || o(e, p))(s, t, !m, i, !t || J.test(e) && me(t.parentNode) || t), i
        }, i.sortStable = x.split("").sort(k).join("") === x, i.detectDuplicates = !!u, h(), i.sortDetached = le((function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        })), le((function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || ce("type|href|height|width", (function (e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), i.attributes && le((function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || ce("value", (function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), le((function (e) {
            return null == e.getAttribute("disabled")
        })) || ce(O, (function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        })), re
    }(e);
    x.find = S, x.expr = S.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = S.uniqueSort, x.text = S.getText, x.isXMLDoc = S.isXML, x.contains = S.contains, x.escapeSelector = S.escape;
    var T = function (e, t, i) {
            for (var n = [], s = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (s && x(e).is(i)) break;
                    n.push(e)
                } return n
        },
        C = function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        E = x.expr.match.needsContext;

    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function M(e, t, i) {
        return m(t) ? x.grep(e, (function (e, n) {
            return !!t.call(e, n, e) !== i
        })) : t.nodeType ? x.grep(e, (function (e) {
            return e === t !== i
        })) : "string" != typeof t ? x.grep(e, (function (e) {
            return l.call(t, e) > -1 !== i
        })) : x.filter(t, e, i)
    }
    x.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? x.find.matchesSelector(n, e) ? [n] : [] : x.find.matches(e, x.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, x.fn.extend({
        find: function (e) {
            var t, i, n = this.length,
                s = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter((function () {
                for (t = 0; t < n; t++)
                    if (x.contains(s[t], this)) return !0
            })));
            for (i = this.pushStack([]), t = 0; t < n; t++) x.find(e, s[t], i);
            return n > 1 ? x.uniqueSort(i) : i
        },
        filter: function (e) {
            return this.pushStack(M(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(M(this, e || [], !0))
        },
        is: function (e) {
            return !!M(this, "string" == typeof e && E.test(e) ? x(e) : e || [], !1).length
        }
    });
    var P, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function (e, t, i) {
        var s, r;
        if (!e) return this;
        if (i = i || P, "string" == typeof e) {
            if (!(s = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !s[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (s[1]) {
                if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(s[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), $.test(s[1]) && x.isPlainObject(t))
                    for (s in t) m(this[s]) ? this[s](t[s]) : this.attr(s, t[s]);
                return this
            }
            return (r = n.getElementById(s[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== i.ready ? i.ready(e) : e(x) : x.makeArray(e, this)
    }).prototype = x.fn, P = x(n);
    var D = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function N(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function (e) {
            var t = x(e, this),
                i = t.length;
            return this.filter((function () {
                for (var e = 0; e < i; e++)
                    if (x.contains(this, t[e])) return !0
            }))
        },
        closest: function (e, t) {
            var i, n = 0,
                s = this.length,
                r = [],
                a = "string" != typeof e && x(e);
            if (!E.test(e))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
                            r.push(i);
                            break
                        } return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return T(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return T(e, "parentNode", i)
        },
        next: function (e) {
            return N(e, "nextSibling")
        },
        prev: function (e) {
            return N(e, "previousSibling")
        },
        nextAll: function (e) {
            return T(e, "nextSibling")
        },
        prevAll: function (e) {
            return T(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return T(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return T(e, "previousSibling", i)
        },
        siblings: function (e) {
            return C((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return C(e.firstChild)
        },
        contents: function (e) {
            return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, (function (e, t) {
        x.fn[e] = function (i, n) {
            var s = x.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = x.filter(n, s)), this.length > 1 && (A[e] || x.uniqueSort(s), D.test(e) && s.reverse()), this.pushStack(s)
        }
    }));
    var O = /[^\x20\t\r\n\f]+/g;

    function z(e) {
        return e
    }

    function q(e) {
        throw e
    }

    function I(e, t, i, n) {
        var s;
        try {
            e && m(s = e.promise) ? s.call(e).done(t).fail(i) : e && m(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    x.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return x.each(e.match(O) || [], (function (e, i) {
                t[i] = !0
            })), t
        }(e) : x.extend({}, e);
        var t, i, n, s, r = [],
            a = [],
            o = -1,
            l = function () {
                for (s = s || e.once, n = t = !0; a.length; o = -1)
                    for (i = a.shift(); ++o < r.length;) !1 === r[o].apply(i[0], i[1]) && e.stopOnFalse && (o = r.length, i = !1);
                e.memory || (i = !1), t = !1, s && (r = i ? [] : "")
            },
            c = {
                add: function () {
                    return r && (i && !t && (o = r.length - 1, a.push(i)), function t(i) {
                        x.each(i, (function (i, n) {
                            m(n) ? e.unique && c.has(n) || r.push(n) : n && n.length && "string" !== b(n) && t(n)
                        }))
                    }(arguments), i && !t && l()), this
                },
                remove: function () {
                    return x.each(arguments, (function (e, t) {
                        for (var i;
                            (i = x.inArray(t, r, i)) > -1;) r.splice(i, 1), i <= o && o--
                    })), this
                },
                has: function (e) {
                    return e ? x.inArray(e, r) > -1 : r.length > 0
                },
                empty: function () {
                    return r && (r = []), this
                },
                disable: function () {
                    return s = a = [], r = i = "", this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return s = a = [], i || t || (r = i = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, i) {
                    return s || (i = [e, (i = i || []).slice ? i.slice() : i], a.push(i), t || l()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return c
    }, x.extend({
        Deferred: function (t) {
            var i = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                s = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return s.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return x.Deferred((function (t) {
                            x.each(i, (function (i, n) {
                                var s = m(e[n[4]]) && e[n[4]];
                                r[n[1]]((function () {
                                    var e = s && s.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, s ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function (t, n, s) {
                        var r = 0;

                        function a(t, i, n, s) {
                            return function () {
                                var o = this,
                                    l = arguments,
                                    c = function () {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = n.apply(o, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, m(c) ? s ? c.call(e, a(r, i, z, s), a(r, i, q, s)) : (r++, c.call(e, a(r, i, z, s), a(r, i, q, s), a(r, i, z, i.notifyWith))) : (n !== z && (o = void 0, l = [e]), (s || i.resolveWith)(o, l))
                                        }
                                    },
                                    d = s ? c : function () {
                                        try {
                                            c()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= r && (n !== q && (o = void 0, l = [e]), i.rejectWith(o, l))
                                        }
                                    };
                                t ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        return x.Deferred((function (e) {
                            i[0][3].add(a(0, e, m(s) ? s : z, e.notifyWith)), i[1][3].add(a(0, e, m(t) ? t : z)), i[2][3].add(a(0, e, m(n) ? n : q))
                        })).promise()
                    },
                    promise: function (e) {
                        return null != e ? x.extend(e, s) : s
                    }
                },
                r = {};
            return x.each(i, (function (e, t) {
                var a = t[2],
                    o = t[5];
                s[t[1]] = a.add, o && a.add((function () {
                    n = o
                }), i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), a.add(t[3].fire), r[t[0]] = function () {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = a.fireWith
            })), s.promise(r), t && t.call(r, r), r
        },
        when: function (e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                s = r.call(arguments),
                a = x.Deferred(),
                o = function (e) {
                    return function (i) {
                        n[e] = this, s[e] = arguments.length > 1 ? r.call(arguments) : i, --t || a.resolveWith(n, s)
                    }
                };
            if (t <= 1 && (I(e, a.done(o(i)).resolve, a.reject, !t), "pending" === a.state() || m(s[i] && s[i].then))) return a.then();
            for (; i--;) I(s[i], o(i), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function (t, i) {
        e.console && e.console.warn && t && H.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, x.readyException = function (t) {
        e.setTimeout((function () {
            throw t
        }))
    };
    var j = x.Deferred();

    function F() {
        n.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), x.ready()
    }
    x.fn.ready = function (e) {
        return j.then(e).catch((function (e) {
            x.readyException(e)
        })), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || j.resolveWith(n, [x]))
        }
    }), x.ready.then = j.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(x.ready) : (n.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var B = function (e, t, i, n, s, r, a) {
            var o = 0,
                l = e.length,
                c = null == i;
            if ("object" === b(i))
                for (o in s = !0, i) B(e, t, o, i[o], !0, r, a);
            else if (void 0 !== n && (s = !0, m(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
                    return c.call(x(e), i)
                })), t))
                for (; o < l; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
            return s ? e : c ? t.call(e) : l ? t(e[0], i) : r
        },
        W = /^-ms-/,
        R = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(W, "ms-").replace(R, X)
    }
    var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = x.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, i) {
            var n, s = this.cache(e);
            if ("string" == typeof t) s[V(t)] = i;
            else
                for (n in t) s[V(n)] = t[n];
            return s
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function (e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function (e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in n ? [t] : t.match(O) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || x.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var U = new Y,
        K = new Y,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                    }(i)
                } catch (e) {}
                K.set(e, t, i)
            } else i = void 0;
        return i
    }
    x.extend({
        hasData: function (e) {
            return K.hasData(e) || U.hasData(e)
        },
        data: function (e, t, i) {
            return K.access(e, t, i)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, i) {
            return U.access(e, t, i)
        },
        _removeData: function (e, t) {
            U.remove(e, t)
        }
    }), x.fn.extend({
        data: function (e, t) {
            var i, n, s, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (s = K.get(r), 1 === r.nodeType && !U.get(r, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = V(n.slice(5)), Z(r, n, s[n]));
                    U.set(r, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each((function () {
                K.set(this, e)
            })) : B(this, (function (t) {
                var i;
                if (r && void 0 === t) {
                    if (void 0 !== (i = K.get(r, e))) return i;
                    if (void 0 !== (i = Z(r, e))) return i
                } else this.each((function () {
                    K.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each((function () {
                K.remove(this, e)
            }))
        }
    }), x.extend({
        queue: function (e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = U.get(e, t), i && (!n || Array.isArray(i) ? n = U.access(e, t, x.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = x.queue(e, t),
                n = i.length,
                s = i.shift(),
                r = x._queueHooks(e, t);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, (function () {
                x.dequeue(e, t)
            }), r)), !n && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return U.get(e, i) || U.access(e, i, {
                empty: x.Callbacks("once memory").add((function () {
                    U.remove(e, [t + "queue", i])
                }))
            })
        }
    }), x.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? x.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var i = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && x.dequeue(this, e)
            }))
        },
        dequeue: function (e) {
            return this.each((function () {
                x.dequeue(this, e)
            }))
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var i, n = 1,
                s = x.Deferred(),
                r = this,
                a = this.length,
                o = function () {
                    --n || s.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = U.get(r[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), s.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        },
        se = function (e, t, i, n) {
            var s, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            for (r in s = i.apply(e, n || []), t) e.style[r] = a[r];
            return s
        };

    function re(e, t, i, n) {
        var s, r, a = 20,
            o = n ? function () {
                return n.cur()
            } : function () {
                return x.css(e, t, "")
            },
            l = o(),
            c = i && i[3] || (x.cssNumber[t] ? "" : "px"),
            d = (x.cssNumber[t] || "px" !== c && +l) && te.exec(x.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; a--;) x.style(e, t, d + c), (1 - r) * (1 - (r = o() / l || .5)) <= 0 && (a = 0), d /= r;
            d *= 2, x.style(e, t, d + c), i = i || []
        }
        return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = s)), s
    }
    var ae = {};

    function oe(e) {
        var t, i = e.ownerDocument,
            n = e.nodeName,
            s = ae[n];
        return s || (t = i.body.appendChild(i.createElement(n)), s = x.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), ae[n] = s, s)
    }

    function le(e, t) {
        for (var i, n, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (i = n.style.display, t ? ("none" === i && (s[r] = U.get(n, "display") || null, s[r] || (n.style.display = "")), "" === n.style.display && ne(n) && (s[r] = oe(n))) : "none" !== i && (s[r] = "none", U.set(n, "display", i)));
        for (r = 0; r < a; r++) null != s[r] && (e[r].style.display = s[r]);
        return e
    }
    x.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                ne(this) ? x(this).show() : x(this).hide()
            }))
        }
    });
    var ce = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? x.merge([e], i) : i
    }

    function fe(e, t) {
        for (var i = 0, n = e.length; i < n; i++) U.set(e[i], "globalEval", !t || U.get(t[i], "globalEval"))
    }
    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td;
    var me = /<|&#?\w+;/;

    function ve(e, t, i, n, s) {
        for (var r, a, o, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === b(r)) x.merge(h, r.nodeType ? [r] : r);
                else if (me.test(r)) {
            for (a = a || u.appendChild(t.createElement("div")), o = (de.exec(r) || ["", ""])[1].toLowerCase(), l = he[o] || he._default, a.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], d = l[0]; d--;) a = a.lastChild;
            x.merge(h, a.childNodes), (a = u.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (u.textContent = "", p = 0; r = h[p++];)
            if (n && x.inArray(r, n) > -1) s && s.push(r);
            else if (c = x.contains(r.ownerDocument, r), a = pe(u.appendChild(r), "script"), c && fe(a), i)
            for (d = 0; r = a[d++];) ue.test(r.type || "") && i.push(r);
        return u
    }! function () {
        var e = n.createDocumentFragment().appendChild(n.createElement("div")),
            t = n.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ge = n.documentElement,
        ye = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function _e() {
        return !1
    }

    function Se() {
        try {
            return n.activeElement
        } catch (e) {}
    }

    function Te(e, t, i, n, s, r) {
        var a, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) Te(e, o, i, n, t[o], r);
            return e
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = _e;
        else if (!s) return e;
        return 1 === r && (a = s, (s = function (e) {
            return x().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = x.guid++)), e.each((function () {
            x.event.add(this, t, s, n, i)
        }))
    }
    x.event = {
        global: {},
        add: function (e, t, i, n, s) {
            var r, a, o, l, c, d, u, h, p, f, m, v = U.get(e);
            if (v)
                for (i.handler && (i = (r = i).handler, s = r.selector), s && x.find.matchesSelector(ge, s), i.guid || (i.guid = x.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(O) || [""]).length; c--;) p = m = (o = xe.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (u = x.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = x.event.special[p] || {}, d = x.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && x.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[p] = !0)
        },
        remove: function (e, t, i, n, s) {
            var r, a, o, l, c, d, u, h, p, f, m, v = U.hasData(e) && U.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--;)
                    if (p = m = (o = xe.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (u = x.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) d = h[r], !s && m !== d.origType || i && i.guid !== d.guid || o && !o.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(r, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                        a && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || x.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) x.event.remove(e, p + t[c], i, n, !0);
                x.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, i, n, s, r, a, o = x.event.fix(e),
                l = new Array(arguments.length),
                c = (U.get(this, "events") || {})[o.type] || [],
                d = x.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
                for (a = x.event.handlers.call(this, o, c), t = 0;
                    (s = a[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = s.elem, i = 0;
                        (r = s.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (n = ((x.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, o), o.result
            }
        },
        handlers: function (e, t) {
            var i, n, s, r, a, o = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], a = {}, i = 0; i < l; i++) void 0 === a[s = (n = t[i]).selector + " "] && (a[s] = n.needsContext ? x(s, this).index(c) > -1 : x.find(s, this, null, [c]).length), a[s] && r.push(n);
                        r.length && o.push({
                            elem: c,
                            handlers: r
                        })
                    } return c = this, l < t.length && o.push({
                elem: c,
                handlers: t.slice(l)
            }), o
        },
        addProp: function (e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return k(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, x.Event = function (e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: _e,
        isPropagationStopped: _e,
        isImmediatePropagationStopped: _e,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    s = e.relatedTarget,
                    r = e.handleObj;
                return s && (s === n || x.contains(n, s)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    })), x.fn.extend({
        on: function (e, t, i, n) {
            return Te(this, e, t, i, n)
        },
        one: function (e, t, i, n) {
            return Te(this, e, t, i, n, 1)
        },
        off: function (e, t, i) {
            var n, s;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, x(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = _e), this.each((function () {
                x.event.remove(this, e, i, t)
            }))
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var i, n, s, r, a, o, l, c;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (r = U.access(e), a = U.set(t, r), c = r.events))
                for (s in delete a.handle, a.events = {}, c)
                    for (i = 0, n = c[s].length; i < n; i++) x.event.add(t, s, c[s][i]);
            K.hasData(e) && (o = K.access(e), l = x.extend({}, o), K.set(t, l))
        }
    }

    function Ae(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && ce.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function Ne(e, t, i, n) {
        t = a.apply([], t);
        var s, r, o, l, c, d, u = 0,
            h = e.length,
            p = h - 1,
            v = t[0],
            g = m(v);
        if (g || h > 1 && "string" == typeof v && !f.checkClone && ke.test(v)) return e.each((function (s) {
            var r = e.eq(s);
            g && (t[0] = v.call(this, s, r.html())), Ne(r, t, i, n)
        }));
        if (h && (r = (s = ve(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = r), r || n)) {
            for (l = (o = x.map(pe(s, "script"), Pe)).length; u < h; u++) c = s, u !== p && (c = x.clone(c, !0, !0), l && x.merge(o, pe(c, "script"))), i.call(e[u], c, u);
            if (l)
                for (d = o[o.length - 1].ownerDocument, x.map(o, Le), u = 0; u < l; u++) c = o[u], ue.test(c.type || "") && !U.access(c, "globalEval") && x.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(c.src) : y(c.textContent.replace($e, ""), d, c))
        }
        return e
    }

    function Oe(e, t, i) {
        for (var n, s = t ? x.filter(t, e) : e, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || x.cleanData(pe(n)), n.parentNode && (i && x.contains(n.ownerDocument, n) && fe(pe(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    x.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function (e, t, i) {
            var n, s, r, a, o = e.cloneNode(!0),
                l = x.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (a = pe(o), n = 0, s = (r = pe(e)).length; n < s; n++) Ae(r[n], a[n]);
            if (t)
                if (i)
                    for (r = r || pe(e), a = a || pe(o), n = 0, s = r.length; n < s; n++) De(r[n], a[n]);
                else De(e, o);
            return (a = pe(o, "script")).length > 0 && fe(a, !l && pe(e, "script")), o
        },
        cleanData: function (e) {
            for (var t, i, n, s = x.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (G(i)) {
                    if (t = i[U.expando]) {
                        if (t.events)
                            for (n in t.events) s[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
                        i[U.expando] = void 0
                    }
                    i[K.expando] && (i[K.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        },
        remove: function (e) {
            return Oe(this, e)
        },
        text: function (e) {
            return B(this, (function (e) {
                return void 0 === e ? x.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function () {
            return Ne(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            }))
        },
        prepend: function () {
            return Ne(this, arguments, (function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function () {
            return Ne(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function () {
            return Ne(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return x.clone(this, e, t)
            }))
        },
        html: function (e) {
            return B(this, (function (e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (x.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ne(this, arguments, (function (t) {
                var i = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(pe(this)), i && i.replaceChild(t, this))
            }), e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        x.fn[e] = function (e) {
            for (var i, n = [], s = x(e), r = s.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), x(s[a])[t](i), o.apply(n, i.get());
            return this.pushStack(n)
        }
    }));
    var ze = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        qe = function (t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        Ie = new RegExp(ie.join("|"), "i");

    function He(e, t, i) {
        var n, s, r, a, o = e.style;
        return (i = i || qe(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), !f.pixelBoxStyles() && ze.test(a) && Ie.test(t) && (n = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a
    }

    function je(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (d) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ge.appendChild(c).appendChild(d);
                var t = e.getComputedStyle(d);
                s = "1%" !== t.top, l = 12 === i(t.marginLeft), d.style.right = "60%", o = 36 === i(t.right), r = 36 === i(t.width), d.style.position = "absolute", a = 36 === d.offsetWidth || "absolute", ge.removeChild(c), d = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var s, r, a, o, l, c = n.createElement("div"),
            d = n.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === d.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function () {
                return t(), r
            },
            pixelBoxStyles: function () {
                return t(), o
            },
            pixelPosition: function () {
                return t(), s
            },
            reliableMarginLeft: function () {
                return t(), l
            },
            scrollboxSize: function () {
                return t(), a
            }
        }))
    }();
    var Fe = /^(none|table(?!-c[ea]).+)/,
        Be = /^--/,
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Re = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xe = ["Webkit", "Moz", "ms"],
        Ve = n.createElement("div").style;

    function Ge(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function (e) {
            if (e in Ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Xe.length; i--;)
                if ((e = Xe[i] + t) in Ve) return e
        }(e) || e), t
    }

    function Ye(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ue(e, t, i, n, s, r) {
        var a = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === i && (l += x.css(e, i + ie[a], !0, s)), n ? ("content" === i && (l -= x.css(e, "padding" + ie[a], !0, s)), "margin" !== i && (l -= x.css(e, "border" + ie[a] + "Width", !0, s))) : (l += x.css(e, "padding" + ie[a], !0, s), "padding" !== i ? l += x.css(e, "border" + ie[a] + "Width", !0, s) : o += x.css(e, "border" + ie[a] + "Width", !0, s));
        return !n && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - o - .5))), l
    }

    function Ke(e, t, i) {
        var n = qe(e),
            s = He(e, t, n),
            r = "border-box" === x.css(e, "boxSizing", !1, n),
            a = r;
        if (ze.test(s)) {
            if (!i) return s;
            s = "auto"
        }
        return a = a && (f.boxSizingReliable() || s === e.style[t]), ("auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, n)) && (s = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (s = parseFloat(s) || 0) + Ue(e, t, i || (r ? "border" : "content"), a, n, s) + "px"
    }

    function Qe(e, t, i, n, s) {
        return new Qe.prototype.init(e, t, i, n, s)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = He(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, r, a, o = V(t),
                    l = Be.test(t),
                    c = e.style;
                if (l || (t = Ge(o)), a = x.cssHooks[t] || x.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(e, !1, n)) ? s : c[t];
                "string" == (r = typeof i) && (s = te.exec(i)) && s[1] && (i = re(e, t, s), r = "number"), null != i && i == i && ("number" === r && (i += s && s[3] || (x.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function (e, t, i, n) {
            var s, r, a, o = V(t);
            return Be.test(t) || (t = Ge(o)), (a = x.cssHooks[t] || x.cssHooks[o]) && "get" in a && (s = a.get(e, !0, i)), void 0 === s && (s = He(e, t, n)), "normal" === s && t in Re && (s = Re[t]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s
        }
    }), x.each(["height", "width"], (function (e, t) {
        x.cssHooks[t] = {
            get: function (e, i, n) {
                if (i) return !Fe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, n) : se(e, We, (function () {
                    return Ke(e, t, n)
                }))
            },
            set: function (e, i, n) {
                var s, r = qe(e),
                    a = "border-box" === x.css(e, "boxSizing", !1, r),
                    o = n && Ue(e, t, n, a, r);
                return a && f.scrollboxSize() === r.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ue(e, t, "border", !1, r) - .5)), o && (s = te.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = x.css(e, t)), Ye(0, i, o)
            }
        }
    })), x.cssHooks.marginLeft = je(f.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + ie[n] + t] = r[n] || r[n - 2] || r[0];
                return s
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = Ye)
    })), x.fn.extend({
        css: function (e, t) {
            return B(this, (function (e, t, i) {
                var n, s, r = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (n = qe(e), s = t.length; a < s; a++) r[t[a]] = x.css(e, t[a], !1, n);
                    return r
                }
                return void 0 !== i ? x.style(e, t, i) : x.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), x.Tween = Qe, Qe.prototype = {
        constructor: Qe,
        init: function (e, t, i, n, s, r) {
            this.elem = e, this.prop = i, this.easing = s || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (x.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = Qe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = Qe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Qe.propHooks._default.set(this), this
        }
    }, Qe.prototype.init.prototype = Qe.prototype, Qe.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Qe.prototype.init, x.fx.step = {};
    var Je, Ze, et = /^(?:toggle|show|hide)$/,
        tt = /queueHooks$/;

    function it() {
        Ze && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, x.fx.interval), x.fx.tick())
    }

    function nt() {
        return e.setTimeout((function () {
            Je = void 0
        })), Je = Date.now()
    }

    function st(e, t) {
        var i, n = 0,
            s = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = ie[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e), s
    }

    function rt(e, t, i) {
        for (var n, s = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, a = s.length; r < a; r++)
            if (n = s[r].call(i, t, e)) return n
    }

    function at(e, t, i) {
        var n, s, r = 0,
            a = at.prefilters.length,
            o = x.Deferred().always((function () {
                delete l.elem
            })),
            l = function () {
                if (s) return !1;
                for (var t = Je || nt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(n);
                return o.notifyWith(e, [c, n, i]), n < 1 && a ? i : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
            },
            c = o.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Je || nt(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = x.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (function (e, t) {
                var i, n, s, r, a;
                for (i in e)
                    if (s = t[n = V(i)], r = e[i], Array.isArray(r) && (s = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (a = x.cssHooks[n]) && "expand" in a)
                        for (i in r = a.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = s);
                    else t[n] = s
            }(d, c.opts.specialEasing); r < a; r++)
            if (n = at.prefilters[r].call(c, e, d, c.opts)) return m(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(d, rt, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    x.Animation = x.extend(at, {
            tweeners: {
                "*": [function (e, t) {
                    var i = this.createTween(e, t);
                    return re(i.elem, e, te.exec(t), i), i
                }]
            },
            tweener: function (e, t) {
                m(e) ? (t = e, e = ["*"]) : e = e.match(O);
                for (var i, n = 0, s = e.length; n < s; n++) i = e[n], at.tweeners[i] = at.tweeners[i] || [], at.tweeners[i].unshift(t)
            },
            prefilters: [function (e, t, i) {
                var n, s, r, a, o, l, c, d, u = "width" in t || "height" in t,
                    h = this,
                    p = {},
                    f = e.style,
                    m = e.nodeType && ne(e),
                    v = U.get(e, "fxshow");
                for (n in i.queue || (null == (a = x._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || o()
                    }), a.unqueued++, h.always((function () {
                        h.always((function () {
                            a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), t)
                    if (s = t[n], et.test(s)) {
                        if (delete t[n], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
                            if ("show" !== s || !v || void 0 === v[n]) continue;
                            m = !0
                        }
                        p[n] = v && v[n] || x.style(e, n)
                    } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                    for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = U.get(e, "display")), "none" === (d = x.css(e, "display")) && (c ? d = c : (le([e], !0), c = e.style.display || c, d = x.css(e, "display"), le([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === x.css(e, "float") && (l || (h.done((function () {
                            f.display = c
                        })), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always((function () {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        }))), l = !1, p) l || (v ? "hidden" in v && (m = v.hidden) : v = U.access(e, "fxshow", {
                        display: c
                    }), r && (v.hidden = !m), m && le([e], !0), h.done((function () {
                        for (n in m || le([e]), U.remove(e, "fxshow"), p) x.style(e, n, p[n])
                    }))), l = rt(m ? v[n] : 0, n, h), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (e, t) {
                t ? at.prefilters.unshift(e) : at.prefilters.push(e)
            }
        }), x.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? x.extend({}, e) : {
                complete: i || !i && t || m(e) && e,
                duration: e,
                easing: i && t || t && !m(t) && t
            };
            return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                m(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue)
            }, n
        }, x.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function (e, t, i, n) {
                var s = x.isEmptyObject(e),
                    r = x.speed(t, i, n),
                    a = function () {
                        var t = at(this, x.extend({}, e), r);
                        (s || U.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () {
                    var t = !0,
                        s = null != e && e + "queueHooks",
                        r = x.timers,
                        a = U.get(this);
                    if (s) a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && tt.test(s) && n(a[s]);
                    for (s = r.length; s--;) r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(i), t = !1, r.splice(s, 1));
                    !t && i || x.dequeue(this, e)
                }))
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each((function () {
                    var t, i = U.get(this),
                        n = i[e + "queue"],
                        s = i[e + "queueHooks"],
                        r = x.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, x.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                }))
            }
        }), x.each(["toggle", "show", "hide"], (function (e, t) {
            var i = x.fn[t];
            x.fn[t] = function (e, n, s) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(t, !0), e, n, s)
            }
        })), x.each({
            slideDown: st("show"),
            slideUp: st("hide"),
            slideToggle: st("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function (e, t) {
            x.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        })), x.timers = [], x.fx.tick = function () {
            var e, t = 0,
                i = x.timers;
            for (Je = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || x.fx.stop(), Je = void 0
        }, x.fx.timer = function (e) {
            x.timers.push(e), x.fx.start()
        }, x.fx.interval = 13, x.fx.start = function () {
            Ze || (Ze = !0, it())
        }, x.fx.stop = function () {
            Ze = null
        }, x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, x.fn.delay = function (t, i) {
            return t = x.fx && x.fx.speeds[t] || t, i = i || "fx", this.queue(i, (function (i, n) {
                var s = e.setTimeout(i, t);
                n.stop = function () {
                    e.clearTimeout(s)
                }
            }))
        },
        function () {
            var e = n.createElement("input"),
                t = n.createElement("select").appendChild(n.createElement("option"));
            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = t.selected, (e = n.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
    var ot, lt = x.expr.attrHandle;
    x.fn.extend({
        attr: function (e, t) {
            return B(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each((function () {
                x.removeAttr(this, e)
            }))
        }
    }), x.extend({
        attr: function (e, t, i) {
            var n, s, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, i) : (1 === r && x.isXMLDoc(e) || (s = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ot : void 0)), void 0 !== i ? null === i ? void x.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = x.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!f.radioValue && "radio" === t && k(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var i, n = 0,
                s = t && t.match(O);
            if (s && 1 === e.nodeType)
                for (; i = s[n++];) e.removeAttribute(i)
        }
    }), ot = {
        set: function (e, t, i) {
            return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var i = lt[t] || x.find.attr;
        lt[t] = function (e, t, n) {
            var s, r, a = t.toLowerCase();
            return n || (r = lt[a], lt[a] = s, s = null != i(e, t, n) ? a : null, lt[a] = r), s
        }
    }));
    var ct = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ut(e) {
        return (e.match(O) || []).join(" ")
    }

    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function pt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    x.fn.extend({
        prop: function (e, t) {
            return B(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each((function () {
                delete this[x.propFix[e] || e]
            }))
        }
    }), x.extend({
        prop: function (e, t, i) {
            var n, s, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, s = x.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        x.propFix[this.toLowerCase()] = this
    })), x.fn.extend({
        addClass: function (e) {
            var t, i, n, s, r, a, o, l = 0;
            if (m(e)) return this.each((function (t) {
                x(this).addClass(e.call(this, t, ht(this)))
            }));
            if ((t = pt(e)).length)
                for (; i = this[l++];)
                    if (s = ht(i), n = 1 === i.nodeType && " " + ut(s) + " ") {
                        for (a = 0; r = t[a++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        s !== (o = ut(n)) && i.setAttribute("class", o)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, s, r, a, o, l = 0;
            if (m(e)) return this.each((function (t) {
                x(this).removeClass(e.call(this, t, ht(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = pt(e)).length)
                for (; i = this[l++];)
                    if (s = ht(i), n = 1 === i.nodeType && " " + ut(s) + " ") {
                        for (a = 0; r = t[a++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        s !== (o = ut(n)) && i.setAttribute("class", o)
                    } return this
        },
        toggleClass: function (e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each((function (i) {
                x(this).toggleClass(e.call(this, i, ht(this), t), t)
            })) : this.each((function () {
                var t, s, r, a;
                if (n)
                    for (s = 0, r = x(this), a = pt(e); t = a[s++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = ht(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + ut(ht(i)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g;
    x.fn.extend({
        val: function (e) {
            var t, i, n, s = this[0];
            return arguments.length ? (n = m(e), this.each((function (i) {
                var s;
                1 === this.nodeType && (null == (s = n ? e.call(this, i, x(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = x.map(s, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            }))) : s ? (t = x.valHooks[s.type] || x.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(ft, "") : null == i ? "" : i : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ut(x.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, i, n, s = e.options,
                        r = e.selectedIndex,
                        a = "select-one" === e.type,
                        o = a ? null : [],
                        l = a ? r + 1 : s.length;
                    for (n = r < 0 ? l : a ? r : 0; n < l; n++)
                        if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !k(i.parentNode, "optgroup"))) {
                            if (t = x(i).val(), a) return t;
                            o.push(t)
                        } return o
                },
                set: function (e, t) {
                    for (var i, n, s = e.options, r = x.makeArray(t), a = s.length; a--;)((n = s[a]).selected = x.inArray(x.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), x.each(["radio", "checkbox"], (function () {
        x.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1
            }
        }, f.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), f.focusin = "onfocusin" in e;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        vt = function (e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function (t, i, s, r) {
            var a, o, l, c, d, h, p, f, g = [s || n],
                y = u.call(t, "type") ? t.type : t,
                b = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = l = s = s || n, 3 !== s.nodeType && 8 !== s.nodeType && !mt.test(y + x.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), d = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = s), i = null == i ? [t] : x.makeArray(i, [t]), p = x.event.special[y] || {}, r || !p.trigger || !1 !== p.trigger.apply(s, i))) {
                if (!r && !p.noBubble && !v(s)) {
                    for (c = p.delegateType || y, mt.test(c + y) || (o = o.parentNode); o; o = o.parentNode) g.push(o), l = o;
                    l === (s.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (a = 0;
                    (o = g[a++]) && !t.isPropagationStopped();) f = o, t.type = a > 1 ? c : p.bindType || y, (h = (U.get(o, "events") || {})[t.type] && U.get(o, "handle")) && h.apply(o, i), (h = d && o[d]) && h.apply && G(o) && (t.result = h.apply(o, i), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), i) || !G(s) || d && m(s[y]) && !v(s) && ((l = s[d]) && (s[d] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, vt), s[y](), t.isPropagationStopped() && f.removeEventListener(y, vt), x.event.triggered = void 0, l && (s[d] = l)), t.result
            }
        },
        simulate: function (e, t, i) {
            var n = x.extend(new x.Event, i, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(n, null, t)
        }
    }), x.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                x.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return x.event.trigger(e, t, i, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, (function (e, t) {
        var i = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    s = U.access(n, t);
                s || n.addEventListener(e, i, !0), U.access(n, t, (s || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    s = U.access(n, t) - 1;
                s ? U.access(n, t, s) : (n.removeEventListener(e, i, !0), U.remove(n, t))
            }
        }
    }));
    var gt = e.location,
        yt = Date.now(),
        bt = /\?/;
    x.parseXML = function (t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), i
    };
    var xt = /\[\]$/,
        wt = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function Tt(e, t, i, n) {
        var s;
        if (Array.isArray(t)) x.each(t, (function (t, s) {
            i || xt.test(e) ? n(e, s) : Tt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
        }));
        else if (i || "object" !== b(t)) n(e, t);
        else
            for (s in t) Tt(e + "[" + s + "]", t[s], i, n)
    }
    x.param = function (e, t) {
        var i, n = [],
            s = function (e, t) {
                var i = m(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function () {
            s(this.name, this.value)
        }));
        else
            for (i in e) Tt(i, e[i], t, s);
        return n.join("&")
    }, x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map((function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !_t.test(e) && (this.checked || !ce.test(e))
            })).map((function (e, t) {
                var i = x(this).val();
                return null == i ? null : Array.isArray(i) ? x.map(i, (function (e) {
                    return {
                        name: t.name,
                        value: e.replace(wt, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: i.replace(wt, "\r\n")
                }
            })).get()
        }
    });
    var Ct = /%20/g,
        Et = /#.*$/,
        kt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Lt = {},
        Dt = {},
        At = "*/".concat("*"),
        Nt = n.createElement("a");

    function Ot(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, s = 0,
                r = t.toLowerCase().match(O) || [];
            if (m(i))
                for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function zt(e, t, i, n) {
        var s = {},
            r = e === Dt;

        function a(o) {
            var l;
            return s[o] = !0, x.each(e[o] || [], (function (e, o) {
                var c = o(t, i, n);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
            })), l
        }
        return a(t.dataTypes[0]) || !s["*"] && a("*")
    }

    function qt(e, t) {
        var i, n, s = x.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && x.extend(!0, e, n), e
    }
    Nt.href = gt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? qt(qt(e, x.ajaxSettings), t) : qt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ot(Lt),
        ajaxTransport: Ot(Dt),
        ajax: function (t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var s, r, a, o, l, c, d, u, h, p, f = x.ajaxSetup({}, i),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? x(m) : x.event,
                g = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                _ = {},
                S = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (d) {
                            if (!o)
                                for (o = {}; t = $t.exec(a);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return d ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == d && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == d && (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (d) T.always(e[T.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || S;
                        return s && s.abort(t), C(0, t), this
                    }
                };
            if (g.promise(T), f.url = ((t || f.url || gt.href) + "").replace(Pt, gt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""], null == f.crossDomain) {
                c = n.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = Nt.protocol + "//" + Nt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), zt(Lt, f, i, T), d) return T;
            for (h in (u = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), r = f.url.replace(Et, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ct, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (bt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(kt, "$1"), p = (bt.test(r) ? "&" : "?") + "_=" + yt++ + p), f.url = r + p), f.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + At + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, T, f) || d)) return T.abort();
            if (S = "abort", y.add(f.complete), T.done(f.success), T.fail(f.error), s = zt(Dt, f, i, T)) {
                if (T.readyState = 1, u && v.trigger("ajaxSend", [T, f]), d) return T;
                f.async && f.timeout > 0 && (l = e.setTimeout((function () {
                    T.abort("timeout")
                }), f.timeout));
                try {
                    d = !1, s.send(w, C)
                } catch (e) {
                    if (d) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, i, n, o) {
                var c, h, p, w, _, S = i;
                d || (d = !0, l && e.clearTimeout(l), s = void 0, a = o || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, n && (w = function (e, t, i) {
                    for (var n, s, r, a, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in o)
                            if (o[s] && o[s].test(n)) {
                                l.unshift(s);
                                break
                            } if (l[0] in i) r = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            a || (a = s)
                        }
                        r = r || a
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r]
                }(f, T, n)), w = function (e, t, i, n) {
                    var s, r, a, o, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (r = d.shift(); r;)
                        if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(a = c[l + " " + r] || c["* " + r]))
                            for (s in c)
                                if ((o = s.split(" "))[1] === r && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                                    !0 === a ? a = c[s] : !0 !== c[s] && (r = o[0], d.unshift(o[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, T, c), c ? (f.ifModified && ((_ = T.getResponseHeader("Last-Modified")) && (x.lastModified[r] = _), (_ = T.getResponseHeader("etag")) && (x.etag[r] = _)), 204 === t || "HEAD" === f.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = w.state, h = w.data, c = !(p = w.error))) : (p = S, !t && S || (S = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (i || S) + "", c ? g.resolveWith(m, [h, S, T]) : g.rejectWith(m, [T, S, p]), T.statusCode(b), b = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? h : p]), y.fireWith(m, [T, S]), u && (v.trigger("ajaxComplete", [T, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, i) {
            return x.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], (function (e, t) {
        x[t] = function (e, i, n, s) {
            return m(i) && (s = s || n, n = i, i = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: s,
                data: i,
                success: n
            }, x.isPlainObject(e) && e))
        }
    })), x._evalUrl = function (e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function (e) {
            return m(e) ? this.each((function (t) {
                x(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = x(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function (e) {
            var t = m(e);
            return this.each((function (i) {
                x(this).wrapAll(t ? e.call(this, i) : e)
            }))
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each((function () {
                x(this).replaceWith(this.childNodes)
            })), this
        }
    }), x.expr.pseudos.hidden = function (e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var It = {
            0: 200,
            1223: 204
        },
        Ht = x.ajaxSettings.xhr();
    f.cors = !!Ht && "withCredentials" in Ht, f.ajax = Ht = !!Ht, x.ajaxTransport((function (t) {
        var i, n;
        if (f.cors || Ht && !t.crossDomain) return {
            send: function (s, r) {
                var a, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) o[a] = t.xhrFields[a];
                for (a in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) o.setRequestHeader(a, s[a]);
                i = function (e) {
                    return function () {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(It[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
                    4 === o.readyState && e.setTimeout((function () {
                        i && n()
                    }))
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (i) throw e
                }
            },
            abort: function () {
                i && i()
            }
        }
    })), x.ajaxPrefilter((function (e) {
        e.crossDomain && (e.contents.script = !1)
    })), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), x.ajaxTransport("script", (function (e) {
        var t, i;
        if (e.crossDomain) return {
            send: function (s, r) {
                t = x("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function (e) {
                    t.remove(), i = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), n.head.appendChild(t[0])
            },
            abort: function () {
                i && i()
            }
        }
    }));
    var jt = [],
        Ft = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jt.pop() || x.expando + "_" + yt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", (function (t, i, n) {
        var s, r, a, o = !1 !== t.jsonp && (Ft.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Ft, "$1" + s) : !1 !== t.jsonp && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
            return a || x.error(s + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[s], e[s] = function () {
            a = arguments
        }, n.always((function () {
            void 0 === r ? x(e).removeProp(s) : e[s] = r, t[s] && (t.jsonpCallback = i.jsonpCallback, jt.push(s)), a && m(r) && r(a[0]), a = r = void 0
        })), "script"
    })), f.createHTMLDocument = function () {
        var e = n.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), x.parseHTML = function (e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (f.createHTMLDocument ? ((s = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(s)) : t = n), a = !i && [], (r = $.exec(e)) ? [t.createElement(r[1])] : (r = ve([e], t, a), a && a.length && x(a).remove(), x.merge([], r.childNodes)));
        var s, r, a
    }, x.fn.load = function (e, t, i) {
        var n, s, r, a = this,
            o = e.indexOf(" ");
        return o > -1 && (n = ut(e.slice(o)), e = e.slice(0, o)), m(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), a.length > 0 && x.ajax({
            url: e,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            r = arguments, a.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e)
        })).always(i && function (e, t) {
            a.each((function () {
                i.apply(this, r || [e.responseText, t, e])
            }))
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), x.expr.pseudos.animated = function (e) {
        return x.grep(x.timers, (function (t) {
            return e === t.elem
        })).length
    }, x.offset = {
        setOffset: function (e, t, i) {
            var n, s, r, a, o, l, c = x.css(e, "position"),
                d = x(e),
                u = {};
            "static" === c && (e.style.position = "relative"), o = d.offset(), r = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (n = d.position()).top, s = n.left) : (a = parseFloat(r) || 0, s = parseFloat(l) || 0), m(t) && (t = t.call(e, i, x.extend({}, o))), null != t.top && (u.top = t.top - o.top + a), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, x.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                x.offset.setOffset(this, e, t)
            }));
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, i, n = this[0],
                    s = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((s = x(e).offset()).top += x.css(e, "borderTopWidth", !0), s.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - s.top - x.css(n, "marginTop", !0),
                    left: t.left - s.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ge
            }))
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function (e, t) {
        var i = "pageYOffset" === t;
        x.fn[e] = function (n) {
            return B(this, (function (e, n, s) {
                var r;
                if (v(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === s) return r ? r[t] : e[n];
                r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : e[n] = s
            }), e, n, arguments.length)
        }
    })), x.each(["top", "left"], (function (e, t) {
        x.cssHooks[t] = je(f.pixelPosition, (function (e, i) {
            if (i) return i = He(e, t), ze.test(i) ? x(e).position()[t] + "px" : i
        }))
    })), x.each({
        Height: "height",
        Width: "width"
    }, (function (e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function (i, n) {
            x.fn[n] = function (s, r) {
                var a = arguments.length && (i || "boolean" != typeof s),
                    o = i || (!0 === s || !0 === r ? "margin" : "border");
                return B(this, (function (t, i, s) {
                    var r;
                    return v(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? x.css(t, i, o) : x.style(t, i, s, o)
                }), t, a ? s : void 0, a)
            }
        }))
    })), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
        x.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    })), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), x.proxy = function (e, t) {
        var i, n, s;
        if ("string" == typeof t && (i = e[t], t = e, e = i), m(e)) return n = r.call(arguments, 2), (s = function () {
            return e.apply(t || this, n.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, s
    }, x.holdReady = function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = k, x.isFunction = m, x.isWindow = v, x.camelCase = V, x.type = b, x.now = Date.now, x.isNumeric = function (e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return x
    }));
    var Bt = e.jQuery,
        Wt = e.$;
    return x.noConflict = function (t) {
        return e.$ === x && (e.$ = Wt), t && e.jQuery === x && (e.jQuery = Bt), x
    }, t || (e.jQuery = e.$ = x), x
})),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
    "use strict";
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: {
                blur: function () {},
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () {}
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function () {
                return this
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return ""
                    }
                }
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {}
        } : window,
        i = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function n(n, s) {
        var r = [],
            a = 0;
        if (n && !s && n instanceof i) return n;
        if (n)
            if ("string" == typeof n) {
                var o, l, c = n.trim();
                if (0 <= c.indexOf("<") && 0 <= c.indexOf(">")) {
                    var d = "div";
                    for (0 === c.indexOf("<li") && (d = "ul"), 0 === c.indexOf("<tr") && (d = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (d = "tr"), 0 === c.indexOf("<tbody") && (d = "table"), 0 === c.indexOf("<option") && (d = "select"), (l = e.createElement(d)).innerHTML = c, a = 0; a < l.childNodes.length; a += 1) r.push(l.childNodes[a])
                } else
                    for (o = s || "#" !== n[0] || n.match(/[ .<>:~]/) ? (s || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], a = 0; a < o.length; a += 1) o[a] && r.push(o[a])
            } else if (n.nodeType || n === t || n === e) r.push(n);
        else if (0 < n.length && n[0].nodeType)
            for (a = 0; a < n.length; a += 1) r.push(n[a]);
        return new i(r)
    }

    function s(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    n.fn = i.prototype, n.Class = i, n.Dom7 = i;
    var r = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        },
        removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        },
        attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === i.length) this[n].setAttribute(e, t);
                else
                    for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                r = t[1],
                a = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(r)) a.apply(t, i);
                    else
                        for (var s = n(t).parents(), o = 0; o < s.length; o += 1) n(s[o]).is(r) && a.apply(s[o], i)
                }
            }

            function c(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
            }
            "function" == typeof t[1] && (s = (e = t)[0], a = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var d, u = s.split(" "), h = 0; h < this.length; h += 1) {
                var p = this[h];
                if (r)
                    for (d = 0; d < u.length; d += 1) {
                        var f = u[d];
                        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                            listener: a,
                            proxyListener: l
                        }), p.addEventListener(f, l, o)
                    } else
                        for (d = 0; d < u.length; d += 1) {
                            var m = u[d];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                                listener: a,
                                proxyListener: c
                            }), p.addEventListener(m, c, o)
                        }
            }
            return this
        },
        off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var n = t[0],
                s = t[1],
                r = t[2],
                a = t[3];
            "function" == typeof t[1] && (n = (e = t)[0], r = e[1], a = e[2], s = void 0), a || (a = !1);
            for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                for (var c = o[l], d = 0; d < this.length; d += 1) {
                    var u = this[d],
                        h = void 0;
                    if (!s && u.dom7Listeners ? h = u.dom7Listeners[c] : s && u.dom7LiveListeners && (h = u.dom7LiveListeners[c]), h && h.length)
                        for (var p = h.length - 1; 0 <= p; p -= 1) {
                            var f = h[p];
                            r && f.listener === r || r && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === r ? (u.removeEventListener(c, f.proxyListener, a), h.splice(p, 1)) : r || (u.removeEventListener(c, f.proxyListener, a), h.splice(p, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
            for (var s = i[0].split(" "), r = i[1], a = 0; a < s.length; a += 1)
                for (var o = s[a], l = 0; l < this.length; l += 1) {
                    var c = this[l],
                        d = void 0;
                    try {
                        d = new t.CustomEvent(o, {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (i) {
                        (d = e.createEvent("Event")).initEvent(o, !0, !0), d.detail = r
                    }
                    c.dom7EventData = i.filter((function (e, t) {
                        return 0 < t
                    })), c.dispatchEvent(d), c.dom7EventData = [], delete c.dom7EventData
                }
            return this
        },
        transitionEnd: function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                n = this;

            function s(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) n.off(i[t], s)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) n.on(i[t], s);
            return this
        },
        outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function () {
            if (0 < this.length) {
                var i = this[0],
                    n = i.getBoundingClientRect(),
                    s = e.body,
                    r = i.clientTop || s.clientTop || 0,
                    a = i.clientLeft || s.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: n.top + o - r,
                    left: n.left + l - a
                }
            }
            return null
        },
        css: function (e, i) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var s in e) this[n].style[s] = e[s];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
                return this
            }
            return this
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (s) {
            var r, a, o = this[0];
            if (!o || void 0 === s) return !1;
            if ("string" == typeof s) {
                if (o.matches) return o.matches(s);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(s);
                if (o.msMatchesSelector) return o.msMatchesSelector(s);
                for (r = n(s), a = 0; a < r.length; a += 1)
                    if (r[a] === o) return !0;
                return !1
            }
            if (s === e) return o === e;
            if (s === t) return o === t;
            if (s.nodeType || s instanceof i) {
                for (r = s.nodeType ? [s] : s, a = 0; a < r.length; a += 1)
                    if (r[a] === o) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t, n = this.length;
            return new i(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function () {
            for (var t, n = [], s = arguments.length; s--;) n[s] = arguments[s];
            for (var r = 0; r < n.length; r += 1) {
                t = n[r];
                for (var a = 0; a < this.length; a += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[a].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[a].appendChild(t[l]);
                else this[a].appendChild(t)
            }
            return this
        },
        prepend: function (t) {
            var n, s;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t, s = r.childNodes.length - 1; 0 <= s; s -= 1) this[n].insertBefore(r.childNodes[s], this[n].childNodes[0])
                } else if (t instanceof i)
                for (s = 0; s < t.length; s += 1) this[n].insertBefore(t[s], this[n].childNodes[0]);
            else this[n].insertBefore(t, this[n].childNodes[0]);
            return this
        },
        next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function (e) {
            var t = [],
                s = this[0];
            if (!s) return new i([]);
            for (; s.nextElementSibling;) {
                var r = s.nextElementSibling;
                e ? n(r).is(e) && t.push(r) : t.push(r), s = r
            }
            return new i(t)
        },
        prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function (e) {
            var t = [],
                s = this[0];
            if (!s) return new i([]);
            for (; s.previousElementSibling;) {
                var r = s.previousElementSibling;
                e ? n(r).is(e) && t.push(r) : t.push(r), s = r
            }
            return new i(t)
        },
        parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return n(s(t))
        },
        parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r;) e ? n(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return n(s(t))
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var s = this[n].querySelectorAll(e), r = 0; r < s.length; r += 1) t.push(s[r]);
            return new i(t)
        },
        children: function (e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var a = this[r].childNodes, o = 0; o < a.length; o += 1) e ? 1 === a[o].nodeType && n(a[o]).is(e) && t.push(a[o]) : 1 === a[o].nodeType && t.push(a[o]);
            return new i(s(t))
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, s;
            for (i = 0; i < e.length; i += 1) {
                var r = n(e[i]);
                for (s = 0; s < r.length; s += 1) this[this.length] = r[s], this.length += 1
            }
            return this
        },
        styles: function () {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach((function (e) {
        n.fn[e] = r[e]
    }));
    var a, o, l, c, d = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach((function (e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (e, i) {
                var n, s, r;
                void 0 === i && (i = "x");
                var a = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? (6 < (s = a.transform || a.webkitTransform).split(",").length && (s = s.split(", ").map((function (e) {
                    return e.replace(",", ".")
                })).join(", ")), r = new t.WebKitCSSMatrix("none" === s ? "" : s)) : n = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (s = t.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (s = t.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
            },
            parseUrlQuery: function (e) {
                var i, n, s, r, a = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (n = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                            return "" !== e
                        }))).length, i = 0; i < r; i += 1) s = n[i].replace(/#\S+/g, "").split("="), a[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                return a
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                    var s = e[n];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), a = 0, o = r.length; a < o; a += 1) {
                            var l = r[a],
                                c = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== c && c.enumerable && (d.isObject(i[l]) && d.isObject(s[l]) ? d.extend(i[l], s[l]) : !d.isObject(i[l]) && d.isObject(s[l]) ? (i[l] = {}, d.extend(i[l], s[l])) : i[l] = s[l])
                        }
                }
                return i
            }
        },
        u = (l = e.createElement("div"), {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(0 < t.navigator.maxTouchPoints || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && 0 < t.navigator.maxTouchPoints),
            prefixedPointerEvents: !!t.navigator.msPointerEnabled,
            transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
            transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (a = l.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
            flexbox: function () {
                for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function () {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        }),
        h = {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: (c = t.navigator.userAgent.toLowerCase(), 0 <= c.indexOf("safari") && c.indexOf("chrome") < 0 && c.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        },
        p = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
                t.on(e, t.params.on[e])
            }))
        },
        f = {
            components: {
                configurable: !0
            }
        };
    p.prototype.on = function (e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var s = i ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
        })), n
    }, p.prototype.once = function (e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;

        function s() {
            for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];
            t.apply(n, i), n.off(e, s), s.f7proxy && delete s.f7proxy
        }
        return s.f7proxy = t, n.on(e, s, i)
    }, p.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners && e.split(" ").forEach((function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (n, s) {
                (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
            }))
        })), i
    }, p.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, n, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = r) : (i = e[0].events, n = e[0].data, s = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach((function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach((function (e) {
                    t.push(e)
                })), t.forEach((function (e) {
                    e.apply(s, n)
                }))
            }
        }))), r
    }, p.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var n = t.modules[i];
            n.params && d.extend(e, n.params)
        }))
    }, p.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (i) {
            var n = t.modules[i],
                s = e[i] || {};
            n.instance && Object.keys(n.instance).forEach((function (e) {
                var i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), n.on && t.on && Object.keys(n.on).forEach((function (e) {
                t.on(e, n.on[e])
            })), n.create && n.create.bind(t)(s)
        }))
    }, f.components.set = function (e) {
        this.use && this.use(e)
    }, p.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var s = e.name || Object.keys(n.prototype.modules).length + "_" + d.now();
        return (n.prototype.modules[s] = e).proto && Object.keys(e.proto).forEach((function (t) {
            n.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function (t) {
            n[t] = e.static[t]
        })), e.install && e.install.apply(n, t), n
    }, p.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach((function (e) {
            return n.installModule(e)
        })), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(p, f);
    var m = {
            updateSize: function () {
                var e, t, i = this,
                    n = i.$el;
                e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), d.extend(i, {
                    width: e,
                    height: t,
                    size: i.isHorizontal() ? e : t
                }))
            },
            updateSlides: function () {
                var e = this,
                    i = e.params,
                    n = e.$wrapperEl,
                    s = e.size,
                    r = e.rtlTranslate,
                    a = e.wrongRTL,
                    o = e.virtual && i.virtual.enabled,
                    l = o ? e.virtual.slides.length : e.slides.length,
                    c = n.children("." + e.params.slideClass),
                    h = o ? e.virtual.slides.length : c.length,
                    p = [],
                    f = [],
                    m = [],
                    v = i.slidesOffsetBefore;
                "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
                var g = i.slidesOffsetAfter;
                "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                var y = e.snapGrid.length,
                    b = e.snapGrid.length,
                    x = i.spaceBetween,
                    w = -v,
                    _ = 0,
                    S = 0;
                if (void 0 !== s) {
                    var T, C;
                    "string" == typeof x && 0 <= x.indexOf("%") && (x = parseFloat(x.replace("%", "")) / 100 * s), e.virtualSize = -x, r ? c.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < i.slidesPerColumn && (T = Math.floor(h / i.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));
                    for (var E, k = i.slidesPerColumn, $ = T / k, M = Math.floor(h / i.slidesPerColumn), P = 0; P < h; P += 1) {
                        C = 0;
                        var L = c.eq(P);
                        if (1 < i.slidesPerColumn) {
                            var D = void 0,
                                A = void 0,
                                N = void 0;
                            "column" === i.slidesPerColumnFill ? (N = P - (A = Math.floor(P / k)) * k, (M < A || A === M && N === k - 1) && k <= (N += 1) && (N = 0, A += 1), D = A + N * T / k, L.css({
                                "-webkit-box-ordinal-group": D,
                                "-moz-box-ordinal-group": D,
                                "-ms-flex-order": D,
                                "-webkit-order": D,
                                order: D
                            })) : A = P - (N = Math.floor(P / $)) * $, L.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== N && i.spaceBetween && i.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", N)
                        }
                        if ("none" !== L.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                var O = t.getComputedStyle(L[0], null),
                                    z = L[0].style.transform,
                                    q = L[0].style.webkitTransform;
                                if (z && (L[0].style.transform = "none"), q && (L[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    var I = parseFloat(O.getPropertyValue("width")),
                                        H = parseFloat(O.getPropertyValue("padding-left")),
                                        j = parseFloat(O.getPropertyValue("padding-right")),
                                        F = parseFloat(O.getPropertyValue("margin-left")),
                                        B = parseFloat(O.getPropertyValue("margin-right")),
                                        W = O.getPropertyValue("box-sizing");
                                    C = W && "border-box" === W ? I + F + B : I + H + j + F + B
                                } else {
                                    var R = parseFloat(O.getPropertyValue("height")),
                                        X = parseFloat(O.getPropertyValue("padding-top")),
                                        V = parseFloat(O.getPropertyValue("padding-bottom")),
                                        G = parseFloat(O.getPropertyValue("margin-top")),
                                        Y = parseFloat(O.getPropertyValue("margin-bottom")),
                                        U = O.getPropertyValue("box-sizing");
                                    C = U && "border-box" === U ? R + G + Y : R + X + V + G + Y
                                }
                                z && (L[0].style.transform = z), q && (L[0].style.webkitTransform = q), i.roundLengths && (C = Math.floor(C))
                            } else C = (s - (i.slidesPerView - 1) * x) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), c[P] && (e.isHorizontal() ? c[P].style.width = C + "px" : c[P].style.height = C + "px");
                            c[P] && (c[P].swiperSlideSize = C), m.push(C), i.centeredSlides ? (w = w + C / 2 + _ / 2 + x, 0 === _ && 0 !== P && (w = w - s / 2 - x), 0 === P && (w = w - s / 2 - x), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), S % i.slidesPerGroup == 0 && p.push(w), f.push(w)) : (i.roundLengths && (w = Math.floor(w)), S % i.slidesPerGroup == 0 && p.push(w), f.push(w), w = w + C + x), e.virtualSize += C + x, _ = C, S += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + g, r && a && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
                            width: e.virtualSize + i.spaceBetween + "px"
                        }), u.flexbox && !i.setWrapperSize || (e.isHorizontal() ? n.css({
                            width: e.virtualSize + i.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + i.spaceBetween + "px"
                        })), 1 < i.slidesPerColumn && (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, e.isHorizontal() ? n.css({
                            width: e.virtualSize + i.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + i.spaceBetween + "px"
                        }), i.centeredSlides)) {
                        E = [];
                        for (var K = 0; K < p.length; K += 1) {
                            var Q = p[K];
                            i.roundLengths && (Q = Math.floor(Q)), p[K] < e.virtualSize + p[0] && E.push(Q)
                        }
                        p = E
                    }
                    if (!i.centeredSlides) {
                        E = [];
                        for (var J = 0; J < p.length; J += 1) {
                            var Z = p[J];
                            i.roundLengths && (Z = Math.floor(Z)), p[J] <= e.virtualSize - s && E.push(Z)
                        }
                        p = E, 1 < Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - s)
                    }
                    if (0 === p.length && (p = [0]), 0 !== i.spaceBetween && (e.isHorizontal() ? r ? c.css({
                            marginLeft: x + "px"
                        }) : c.css({
                            marginRight: x + "px"
                        }) : c.css({
                            marginBottom: x + "px"
                        })), i.centerInsufficientSlides) {
                        var ee = 0;
                        if (m.forEach((function (e) {
                                ee += e + (i.spaceBetween ? i.spaceBetween : 0)
                            })), (ee -= i.spaceBetween) < s) {
                            var te = (s - ee) / 2;
                            p.forEach((function (e, t) {
                                p[t] = e - te
                            })), f.forEach((function (e, t) {
                                f[t] = e + te
                            }))
                        }
                    }
                    d.extend(e, {
                        slides: c,
                        snapGrid: p,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }), h !== l && e.emit("slidesLengthChange"), p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function (e) {
                var t, i = this,
                    n = [],
                    s = 0;
                if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                        var r = i.activeIndex + t;
                        if (r > i.slides.length) break;
                        n.push(i.slides.eq(r)[0])
                    } else n.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < n.length; t += 1)
                    if (void 0 !== n[t]) {
                        var a = n[t].offsetHeight;
                        s = s < a ? a : s
                    } s && i.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    i = t.params,
                    s = t.slides,
                    r = t.rtlTranslate;
                if (0 !== s.length) {
                    void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                    var a = -e;
                    r && (a = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (var o = 0; o < s.length; o += 1) {
                        var l = s[o],
                            c = (a + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility) {
                            var d = -(a - l.swiperSlideOffset),
                                u = d + t.slidesSizesGrid[o];
                            (0 <= d && d < t.size || 0 < u && u <= t.size || d <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), s.eq(o).addClass(i.slideVisibleClass))
                        }
                        l.progress = r ? -c : c
                    }
                    t.visibleSlides = n(t.visibleSlides)
                }
            },
            updateProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    i = t.params,
                    n = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    r = t.isBeginning,
                    a = t.isEnd,
                    o = r,
                    l = a;
                0 === n ? a = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / n) <= 0, a = 1 <= s), d.extend(t, {
                    progress: s,
                    isBeginning: r,
                    isEnd: a
                }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", s)
            },
            updateSlidesClasses: function () {
                var e, t = this,
                    i = t.slides,
                    n = t.params,
                    s = t.$wrapperEl,
                    r = t.activeIndex,
                    a = t.realIndex,
                    o = t.virtual && n.virtual.enabled;
                i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : i.eq(r)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
                var l = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
                var c = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? s.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : s.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + c.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (e) {
                var t, i = this,
                    n = i.rtlTranslate ? i.translate : -i.translate,
                    s = i.slidesGrid,
                    r = i.snapGrid,
                    a = i.params,
                    o = i.activeIndex,
                    l = i.realIndex,
                    c = i.snapIndex,
                    u = e;
                if (void 0 === u) {
                    for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? n >= s[h] && n < s[h + 1] - (s[h + 1] - s[h]) / 2 ? u = h : n >= s[h] && n < s[h + 1] && (u = h + 1) : n >= s[h] && (u = h);
                    a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if ((t = 0 <= r.indexOf(n) ? r.indexOf(n) : Math.floor(u / a.slidesPerGroup)) >= r.length && (t = r.length - 1), u !== o) {
                    var p = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    d.extend(i, {
                        snapIndex: t,
                        realIndex: p,
                        previousIndex: o,
                        activeIndex: u
                    }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== p && i.emit("realIndexChange"), i.emit("slideChange")
                } else t !== c && (i.snapIndex = t, i.emit("snapIndexChange"))
            },
            updateClickedSlide: function (e) {
                var t = this,
                    i = t.params,
                    s = n(e.target).closest("." + i.slideClass)[0],
                    r = !1;
                if (s)
                    for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === s && (r = !0);
                if (!s || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n(s).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        v = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    s = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -n : n;
                var r = d.getTranslate(s[0], e);
                return i && (r = -r), r || 0
            },
            setTranslate: function (e, t) {
                var i = this,
                    n = i.rtlTranslate,
                    s = i.params,
                    r = i.$wrapperEl,
                    a = i.progress,
                    o = 0,
                    l = 0;
                i.isHorizontal() ? o = n ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (u.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
                var c = i.maxTranslate() - i.minTranslate();
                (0 === c ? 0 : (e - i.minTranslate()) / c) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function () {
                return -this.snapGrid[0]
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        g = {
            slideTo: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var s = this,
                    r = e;
                r < 0 && (r = 0);
                var a = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    c = s.previousIndex,
                    d = s.activeIndex,
                    h = s.rtlTranslate;
                if (s.animating && a.preventInteractionOnTransition) return !1;
                var p = Math.floor(r / a.slidesPerGroup);
                p >= o.length && (p = o.length - 1), (d || a.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
                var f, m = -o[p];
                if (s.updateProgress(m), a.normalizeSlideIndex)
                    for (var v = 0; v < l.length; v += 1) - Math.floor(100 * m) >= Math.floor(100 * l[v]) && (r = v);
                if (s.initialized && r !== d) {
                    if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1;
                    if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (d || 0) !== r) return !1
                }
                return f = d < r ? "next" : r < d ? "prev" : "reset", h && -m === s.translate || !h && m === s.translate ? (s.updateActiveIndex(r), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(m), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && u.transition ? (s.setTransition(t), s.setTranslate(m), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, f))
                }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
            },
            slideToLoop: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var s = e;
                return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, i, n)
            },
            slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    s = n.params,
                    r = n.animating;
                return s.loop ? !r && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)
            },
            slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    s = n.params,
                    r = n.animating,
                    a = n.snapGrid,
                    o = n.slidesGrid,
                    l = n.rtlTranslate;
                if (s.loop) {
                    if (r) return !1;
                    n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var d, u = c(l ? n.translate : -n.translate),
                    h = a.map((function (e) {
                        return c(e)
                    })),
                    p = (o.map((function (e) {
                        return c(e)
                    })), a[h.indexOf(u)], a[h.indexOf(u) - 1]);
                return void 0 !== p && (d = o.indexOf(p)) < 0 && (d = n.activeIndex - 1), n.slideTo(d, e, t, i)
            },
            slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    s = n.activeIndex,
                    r = Math.floor(s / n.params.slidesPerGroup);
                if (r < n.snapGrid.length - 1) {
                    var a = n.rtlTranslate ? n.translate : -n.translate,
                        o = n.snapGrid[r];
                    (n.snapGrid[r + 1] - o) / 2 < a - o && (s = n.params.slidesPerGroup)
                }
                return n.slideTo(s, e, t, i)
            },
            slideToClickedSlide: function () {
                var e, t = this,
                    i = t.params,
                    s = t.$wrapperEl,
                    r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                    a = t.clickedIndex;
                if (i.loop) {
                    if (t.animating) return;
                    e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick((function () {
                        t.slideTo(a)
                    }))) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick((function () {
                        t.slideTo(a)
                    }))) : t.slideTo(a)
                } else t.slideTo(a)
            }
        },
        y = {
            loopCreate: function () {
                var t = this,
                    i = t.params,
                    s = t.$wrapperEl;
                s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var r = s.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var a = i.slidesPerGroup - r.length % i.slidesPerGroup;
                    if (a !== i.slidesPerGroup) {
                        for (var o = 0; o < a; o += 1) {
                            var l = n(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            s.append(l)
                        }
                        r = s.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
                var c = [],
                    d = [];
                r.each((function (e, i) {
                    var s = n(i);
                    e < t.loopedSlides && d.push(i), e < r.length && e >= r.length - t.loopedSlides && c.push(i), s.attr("data-swiper-slide-index", e)
                }));
                for (var u = 0; u < d.length; u += 1) s.append(n(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var h = c.length - 1; 0 <= h; h -= 1) s.prepend(n(c[h].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function () {
                var e, t = this,
                    i = t.params,
                    n = t.activeIndex,
                    s = t.slides,
                    r = t.loopedSlides,
                    a = t.allowSlidePrev,
                    o = t.allowSlideNext,
                    l = t.snapGrid,
                    c = t.rtlTranslate;
                t.allowSlidePrev = !0, t.allowSlideNext = !0;
                var d = -l[n] - t.getTranslate();
                n < r ? (e = s.length - 3 * r + n, e += r, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? -t.translate : t.translate) - d)) : ("auto" === i.slidesPerView && 2 * r <= n || n >= s.length - r) && (e = -s.length + n + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== d && t.setTranslate((c ? -t.translate : t.translate) - d)), t.allowSlidePrev = a, t.allowSlideNext = o
            },
            loopDestroy: function () {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        b = {
            setGrabCursor: function (e) {
                if (!(u.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function () {
                u.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
            }
        },
        x = {
            appendSlide: function (e) {
                var t = this,
                    i = t.$wrapperEl,
                    n = t.params;
                if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && i.append(e[s]);
                else i.append(e);
                n.loop && t.loopCreate(), n.observer && u.observer || t.update()
            },
            prependSlide: function (e) {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    s = t.activeIndex;
                i.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) e[a] && n.prepend(e[a]);
                    r = s + e.length
                } else n.prepend(e);
                i.loop && t.loopCreate(), i.observer && u.observer || t.update(), t.slideTo(r, 0, !1)
            },
            addSlide: function (e, t) {
                var i = this,
                    n = i.$wrapperEl,
                    s = i.params,
                    r = i.activeIndex;
                s.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = n.children("." + s.slideClass));
                var a = i.slides.length;
                if (e <= 0) i.prependSlide(t);
                else if (a <= e) i.appendSlide(t);
                else {
                    for (var o = e < r ? r + 1 : r, l = [], c = a - 1; e <= c; c -= 1) {
                        var d = i.slides.eq(c);
                        d.remove(), l.unshift(d)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var h = 0; h < t.length; h += 1) t[h] && n.append(t[h]);
                        o = e < r ? r + t.length : r
                    } else n.append(t);
                    for (var p = 0; p < l.length; p += 1) n.append(l[p]);
                    s.loop && i.loopCreate(), s.observer && u.observer || i.update(), s.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                }
            },
            removeSlide: function (e) {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    s = t.activeIndex;
                i.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = n.children("." + i.slideClass));
                var r, a = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < a && (a -= 1);
                    a = Math.max(a, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < a && (a -= 1), a = Math.max(a, 0);
                i.loop && t.loopCreate(), i.observer && u.observer || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        w = function () {
            var i = t.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: t.cordova || t.phonegap,
                    phonegap: t.cordova || t.phonegap
                },
                s = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = i.match(/(iPad).*OS\s([\d_]+)/),
                o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !a && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (s && (n.os = "windows", n.osVersion = s[2], n.windows = !0), r && !s && (n.os = "android", n.osVersion = r[2], n.android = !0, n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (a || l || o) && (n.os = "ios", n.ios = !0), l && !o && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), a && (n.osVersion = a[2].replace(/_/g, "."), n.ipad = !0), o && (n.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || a || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
                var c = n.osVersion.split("."),
                    d = e.querySelector('meta[name="viewport"]');
                n.minimalUi = !n.webView && (o || l) && (1 * c[0] == 7 ? 1 <= 1 * c[1] : 7 < 1 * c[0]) && d && 0 <= d.getAttribute("content").indexOf("minimal-ui")
            }
            return n.pixelRatio = t.devicePixelRatio || 1, n
        }();

    function _() {
        var e = this,
            t = e.params,
            i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var n = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var a = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var S = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: m,
            translate: v,
            transition: {
                setTransition: function (e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this,
                        n = i.activeIndex,
                        s = i.params,
                        r = i.previousIndex;
                    s.autoHeight && i.updateAutoHeight();
                    var a = t;
                    if (a || (a = r < n ? "next" : n < r ? "prev" : "reset"), i.emit("transitionStart"), e && n !== r) {
                        if ("reset" === a) return void i.emit("slideResetTransitionStart");
                        i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this,
                        n = i.activeIndex,
                        s = i.previousIndex;
                    i.animating = !1, i.setTransition(0);
                    var r = t;
                    if (r || (r = s < n ? "next" : n < s ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== s) {
                        if ("reset" === r) return void i.emit("slideResetTransitionEnd");
                        i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                    }
                }
            },
            slide: g,
            loop: y,
            grabCursor: b,
            manipulation: x,
            events: {
                attachEvents: function () {
                    var i = this,
                        s = i.params,
                        r = i.touchEvents,
                        a = i.el,
                        o = i.wrapperEl;
                    i.onTouchStart = function (i) {
                        var s = this,
                            r = s.touchEventsData,
                            a = s.params,
                            o = s.touches;
                        if (!s.animating || !a.preventInteractionOnTransition) {
                            var l = i;
                            if (l.originalEvent && (l = l.originalEvent), r.isTouchEvent = "touchstart" === l.type, (r.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!r.isTouchEvent && "button" in l && 0 < l.button || r.isTouched && r.isMoved))
                                if (a.noSwiping && n(l.target).closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) s.allowClick = !0;
                                else if (!a.swipeHandler || n(l).closest(a.swipeHandler)[0]) {
                                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                var c = o.currentX,
                                    u = o.currentY,
                                    h = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                                    p = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                                if (!h || !(c <= p || c >= t.screen.width - p)) {
                                    if (d.extend(r, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), o.startX = c, o.startY = u, r.touchStartTime = d.now(), s.allowClick = !0, s.updateSize(), s.swipeDirection = void 0, 0 < a.threshold && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                                        var f = !0;
                                        n(l.target).is(r.formElements) && (f = !1), e.activeElement && n(e.activeElement).is(r.formElements) && e.activeElement !== l.target && e.activeElement.blur();
                                        var m = f && s.allowTouchMove && a.touchStartPreventDefault;
                                        (a.touchStartForcePreventDefault || m) && l.preventDefault()
                                    }
                                    s.emit("touchStart", l)
                                }
                            }
                        }
                    }.bind(i), i.onTouchMove = function (t) {
                        var i = this,
                            s = i.touchEventsData,
                            r = i.params,
                            a = i.touches,
                            o = i.rtlTranslate,
                            l = t;
                        if (l.originalEvent && (l = l.originalEvent), s.isTouched) {
                            if (!s.isTouchEvent || "mousemove" !== l.type) {
                                var c = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                                    u = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                if (l.preventedByNestedSwiper) return a.startX = c, void(a.startY = u);
                                if (!i.allowTouchMove) return i.allowClick = !1, void(s.isTouched && (d.extend(a, {
                                    startX: c,
                                    startY: u,
                                    currentX: c,
                                    currentY: u
                                }), s.touchStartTime = d.now()));
                                if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                                    if (i.isVertical()) {
                                        if (u < a.startY && i.translate <= i.maxTranslate() || u > a.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                                    } else if (c < a.startX && i.translate <= i.maxTranslate() || c > a.startX && i.translate >= i.minTranslate()) return;
                                if (s.isTouchEvent && e.activeElement && l.target === e.activeElement && n(l.target).is(s.formElements)) return s.isMoved = !0, void(i.allowClick = !1);
                                if (s.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                    a.currentX = c, a.currentY = u;
                                    var h, p = a.currentX - a.startX,
                                        f = a.currentY - a.startY;
                                    if (!(i.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < i.params.threshold))
                                        if (void 0 === s.isScrolling && (i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : 25 <= p * p + f * f && (h = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, s.isScrolling = i.isHorizontal() ? h > r.touchAngle : 90 - h > r.touchAngle)), s.isScrolling && i.emit("touchMoveOpposite", l), void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling) s.isTouched = !1;
                                        else if (s.startMoving) {
                                        i.allowClick = !1, l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), s.isMoved || (r.loop && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !r.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), s.isMoved = !0;
                                        var m = i.isHorizontal() ? p : f;
                                        a.diff = m, m *= r.touchRatio, o && (m = -m), i.swipeDirection = 0 < m ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
                                        var v = !0,
                                            g = r.resistanceRatio;
                                        if (r.touchReleaseOnEdges && (g = 0), 0 < m && s.currentTranslate > i.minTranslate() ? (v = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + s.startTranslate + m, g))) : m < 0 && s.currentTranslate < i.maxTranslate() && (v = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - s.startTranslate - m, g))), v && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), 0 < r.threshold) {
                                            if (!(Math.abs(m) > r.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                                            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void(a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                        }
                                        r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), r.freeMode && (0 === s.velocities.length && s.velocities.push({
                                            position: a[i.isHorizontal() ? "startX" : "startY"],
                                            time: s.touchStartTime
                                        }), s.velocities.push({
                                            position: a[i.isHorizontal() ? "currentX" : "currentY"],
                                            time: d.now()
                                        })), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
                                    }
                                }
                            }
                        } else s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l)
                    }.bind(i), i.onTouchEnd = function (e) {
                        var t = this,
                            i = t.touchEventsData,
                            n = t.params,
                            s = t.touches,
                            r = t.rtlTranslate,
                            a = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid,
                            c = e;
                        if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var u, h = d.now(),
                            p = h - i.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), p < 300 && 300 < h - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick((function () {
                                t && !t.destroyed && t.emit("click", c)
                            }), 300)), p < 300 && h - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = d.now(), d.nextTick((function () {
                                t.destroyed || (t.allowClick = !0)
                            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = n.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (n.freeModeMomentum) {
                                if (1 < i.velocities.length) {
                                    var f = i.velocities.pop(),
                                        m = i.velocities.pop(),
                                        v = f.position - m.position,
                                        g = f.time - m.time;
                                    t.velocity = v / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < g || 300 < d.now() - f.time) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                var y = 1e3 * n.freeModeMomentumRatio,
                                    b = t.velocity * y,
                                    x = t.translate + b;
                                r && (x = -x);
                                var w, _, S = !1,
                                    T = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                if (x < t.maxTranslate()) n.freeModeMomentumBounce ? (x + t.maxTranslate() < -T && (x = t.maxTranslate() - T), w = t.maxTranslate(), S = !0, i.allowMomentumBounce = !0) : x = t.maxTranslate(), n.loop && n.centeredSlides && (_ = !0);
                                else if (x > t.minTranslate()) n.freeModeMomentumBounce ? (x - t.minTranslate() > T && (x = t.minTranslate() + T), w = t.minTranslate(), S = !0, i.allowMomentumBounce = !0) : x = t.minTranslate(), n.loop && n.centeredSlides && (_ = !0);
                                else if (n.freeModeSticky) {
                                    for (var C, E = 0; E < l.length; E += 1)
                                        if (l[E] > -x) {
                                            C = E;
                                            break
                                        } x = -(x = Math.abs(l[C] - x) < Math.abs(l[C - 1] - x) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                                }
                                if (_ && t.once("transitionEnd", (function () {
                                        t.loopFix()
                                    })), 0 !== t.velocity) y = r ? Math.abs((-x - t.translate) / t.velocity) : Math.abs((x - t.translate) / t.velocity);
                                else if (n.freeModeSticky) return void t.slideToClosest();
                                n.freeModeMomentumBounce && S ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(x), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd((function () {
                                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(w), a.transitionEnd((function () {
                                        t && !t.destroyed && t.transitionEnd()
                                    })))
                                }))) : t.velocity ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(x), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd((function () {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(x), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (n.freeModeSticky) return void t.slideToClosest();
                            (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var k = 0, $ = t.slidesSizesGrid[0], M = 0; M < o.length; M += n.slidesPerGroup) void 0 !== o[M + n.slidesPerGroup] ? u >= o[M] && u < o[M + n.slidesPerGroup] && ($ = o[(k = M) + n.slidesPerGroup] - o[M]) : u >= o[M] && (k = M, $ = o[o.length - 1] - o[o.length - 2]);
                            var P = (u - o[k]) / $;
                            if (p > n.longSwipesMs) {
                                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (P >= n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (P > 1 - n.longSwipesRatio ? t.slideTo(k + n.slidesPerGroup) : t.slideTo(k))
                            } else {
                                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(k + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
                            }
                        }
                    }.bind(i), i.onClick = function (e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(i);
                    var l = "container" === s.touchEventsTarget ? a : o,
                        c = !!s.nested;
                    if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                        if (u.touch) {
                            var h = !("touchstart" !== r.start || !u.passiveListener || !s.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            l.addEventListener(r.start, i.onTouchStart, h), l.addEventListener(r.move, i.onTouchMove, u.passiveListener ? {
                                passive: !1,
                                capture: c
                            } : c), l.addEventListener(r.end, i.onTouchEnd, h)
                        }(s.simulateTouch && !w.ios && !w.android || s.simulateTouch && !u.touch && w.ios) && (l.addEventListener("mousedown", i.onTouchStart, !1), e.addEventListener("mousemove", i.onTouchMove, c), e.addEventListener("mouseup", i.onTouchEnd, !1))
                    } else l.addEventListener(r.start, i.onTouchStart, !1), e.addEventListener(r.move, i.onTouchMove, c), e.addEventListener(r.end, i.onTouchEnd, !1);
                    (s.preventClicks || s.preventClicksPropagation) && l.addEventListener("click", i.onClick, !0), i.on(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _, !0)
                },
                detachEvents: function () {
                    var t = this,
                        i = t.params,
                        n = t.touchEvents,
                        s = t.el,
                        r = t.wrapperEl,
                        a = "container" === i.touchEventsTarget ? s : r,
                        o = !!i.nested;
                    if (u.touch || !u.pointerEvents && !u.prefixedPointerEvents) {
                        if (u.touch) {
                            var l = !("onTouchStart" !== n.start || !u.passiveListener || !i.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            a.removeEventListener(n.start, t.onTouchStart, l), a.removeEventListener(n.move, t.onTouchMove, o), a.removeEventListener(n.end, t.onTouchEnd, l)
                        }(i.simulateTouch && !w.ios && !w.android || i.simulateTouch && !u.touch && w.ios) && (a.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1))
                    } else a.removeEventListener(n.start, t.onTouchStart, !1), e.removeEventListener(n.move, t.onTouchMove, o), e.removeEventListener(n.end, t.onTouchEnd, !1);
                    (i.preventClicks || i.preventClicksPropagation) && a.removeEventListener("click", t.onClick, !0), t.off(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        i = e.initialized,
                        n = e.loopedSlides;
                    void 0 === n && (n = 0);
                    var s = e.params,
                        r = s.breakpoints;
                    if (r && (!r || 0 !== Object.keys(r).length)) {
                        var a = e.getBreakpoint(r);
                        if (a && e.currentBreakpoint !== a) {
                            var o = a in r ? r[a] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var l = o || e.originalParams,
                                c = l.direction && l.direction !== s.direction,
                                u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
                            c && i && e.changeDirection(), d.extend(e.params, l), d.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = a, u && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        }
                    }
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var i = !1,
                            n = [];
                        Object.keys(e).forEach((function (e) {
                            n.push(e)
                        })), n.sort((function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        }));
                        for (var s = 0; s < n.length; s += 1) {
                            var r = n[s];
                            this.params.breakpointsInverse ? r <= t.innerWidth && (i = r) : r >= t.innerWidth && !i && (i = r)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        n = this.$el,
                        s = [];
                    s.push("initialized"), s.push(t.direction), t.freeMode && s.push("free-mode"), u.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), 1 < t.slidesPerColumn && s.push("multirow"), w.android && s.push("android"), w.ios && s.push("ios"), (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && s.push("wp8-" + t.direction), s.forEach((function (i) {
                        e.push(t.containerModifierClass + i)
                    })), n.addClass(e.join(" "))
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, i, n, s, r, a) {
                    var o;

                    function l() {
                        a && a()
                    }
                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, s && (o.sizes = s), n && (o.srcset = n), i && (o.src = i)) : l()
                },
                preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var n = e.imagesToLoad[i];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        C = {},
        E = function (e) {
            function t() {
                for (var i, s, r, a = [], o = arguments.length; o--;) a[o] = arguments[o];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? r = a[0] : (s = (i = a)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), s && !r.el && (r.el = s), e.call(this, r), Object.keys(T).forEach((function (e) {
                    Object.keys(T[e]).forEach((function (i) {
                        t.prototype[i] || (t.prototype[i] = T[e][i])
                    }))
                }));
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach((function (e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            n = t.params[i];
                        if ("object" != typeof n || null === n) return;
                        if (!(i in r) || !("enabled" in n)) return;
                        !0 === r[i] && (r[i] = {
                            enabled: !0
                        }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                            enabled: !1
                        })
                    }
                }));
                var c = d.extend({}, S);
                l.useModulesParams(c), l.params = d.extend({}, c, C, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r);
                var h = (l.$ = n)(l.params.el);
                if (s = h[0]) {
                    if (1 < h.length) {
                        var p = [];
                        return h.each((function (e, i) {
                            var n = d.extend({}, r, {
                                el: i
                            });
                            p.push(new t(n))
                        })), p
                    }
                    s.swiper = l, h.data("swiper", l);
                    var f, m, v = h.children("." + l.params.wrapperClass);
                    return d.extend(l, {
                        $el: h,
                        el: s,
                        $wrapperEl: v,
                        wrapperEl: v[0],
                        classNames: [],
                        slides: n(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === h.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === h.css("direction")),
                        wrongRTL: "-webkit-box" === v.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], u.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : u.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2]
                        }, l.touchEventsDesktop = {
                            start: m[0],
                            move: m[1],
                            end: m[2]
                        }, u.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }
            e && (t.__proto__ = e);
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function () {
                var e = this,
                    t = e.params,
                    i = e.slides,
                    n = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    a = 1;
                if (t.centeredSlides) {
                    for (var o, l = i[r].swiperSlideSize, c = r + 1; c < i.length; c += 1) i[c] && !o && (a += 1, s < (l += i[c].swiperSlideSize) && (o = !0));
                    for (var d = r - 1; 0 <= d; d -= 1) i[d] && !o && (a += 1, s < (l += i[d].swiperSlideSize) && (o = !0))
                } else
                    for (var u = r + 1; u < i.length; u += 1) n[u] - n[r] < s && (a += 1);
                return a
            }, t.prototype.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function n() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    n = i.params.direction;
                return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || ("vertical" === n && (i.$el.removeClass(i.params.containerModifierClass + "vertical wp8-vertical").addClass("" + i.params.containerModifierClass + e), (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), "horizontal" === n && (i.$el.removeClass(i.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + i.params.containerModifierClass + e), (h.isIE || h.isEdge) && (u.pointerEvents || u.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), i.params.direction = e, i.slides.each((function (t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                })), i.emit("changeDirection"), t && i.update()), i
            }, t.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, t.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    n = i.params,
                    s = i.$el,
                    r = i.$wrapperEl,
                    a = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null
            }, t.extendDefaults = function (e) {
                d.extend(C, e)
            }, i.extendedDefaults.get = function () {
                return C
            }, i.defaults.get = function () {
                return S
            }, i.Class.get = function () {
                return e
            }, i.$.get = function () {
                return n
            }, Object.defineProperties(t, i), t
        }(p),
        k = {
            name: "device",
            proto: {
                device: w
            },
            static: {
                device: w
            }
        },
        $ = {
            name: "support",
            proto: {
                support: u
            },
            static: {
                support: u
            }
        },
        M = {
            name: "browser",
            proto: {
                browser: h
            },
            static: {
                browser: h
            }
        },
        P = {
            name: "resize",
            create: function () {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function () {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function () {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        L = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function (e, i) {
                void 0 === i && (i = {});
                var n = this,
                    s = new L.func((function (e) {
                        if (1 !== e.length) {
                            var i = function () {
                                n.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else n.emit("observerUpdate", e[0])
                    }));
                s.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), n.observer.observers.push(s)
            },
            init: function () {
                var e = this;
                if (u.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach((function (e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        },
        D = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function () {
                d.extend(this, {
                    observer: {
                        init: L.init.bind(this),
                        attach: L.attach.bind(this),
                        destroy: L.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                },
                destroy: function () {
                    this.observer.destroy()
                }
            }
        },
        A = {
            update: function (e) {
                var t = this,
                    i = t.params,
                    n = i.slidesPerView,
                    s = i.slidesPerGroup,
                    r = i.centeredSlides,
                    a = t.params.virtual,
                    o = a.addSlidesBefore,
                    l = a.addSlidesAfter,
                    c = t.virtual,
                    u = c.from,
                    h = c.to,
                    p = c.slides,
                    f = c.slidesGrid,
                    m = c.renderSlide,
                    v = c.offset;
                t.updateActiveIndex();
                var g, y, b, x = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (y = Math.floor(n / 2) + s + o, b = Math.floor(n / 2) + s + l) : (y = n + (s - 1) + o, b = s + l);
                var w = Math.max((x || 0) - b, 0),
                    _ = Math.min((x || 0) + y, p.length - 1),
                    S = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                function T() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (d.extend(t.virtual, {
                        from: w,
                        to: _,
                        offset: S,
                        slidesGrid: t.slidesGrid
                    }), u === w && h === _ && !e) return t.slidesGrid !== f && S !== v && t.slides.css(g, S + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: S,
                    from: w,
                    to: _,
                    slides: function () {
                        for (var e = [], t = w; t <= _; t += 1) e.push(p[t]);
                        return e
                    }()
                }), void T();
                var C = [],
                    E = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var k = u; k <= h; k += 1)(k < w || _ < k) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                for (var $ = 0; $ < p.length; $ += 1) w <= $ && $ <= _ && (void 0 === h || e ? E.push($) : (h < $ && E.push($), $ < u && C.push($)));
                E.forEach((function (e) {
                    t.$wrapperEl.append(m(p[e], e))
                })), C.sort((function (e, t) {
                    return t - e
                })).forEach((function (e) {
                    t.$wrapperEl.prepend(m(p[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(g, S + "px"), T()
            },
            renderSlide: function (e, t) {
                var i = this,
                    s = i.params.virtual;
                if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                var r = s.renderSlide ? n(s.renderSlide.call(i, e, t)) : n('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", t), s.cache && (i.virtual.cache[t] = r), r
            },
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function (e) {
                var t = this,
                    i = t.activeIndex,
                    n = i + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; r += 1) e[r] && t.virtual.slides.unshift(e[r]);
                    n = i + e.length, s = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        o = {};
                    Object.keys(a).forEach((function (e) {
                        o[parseInt(e, 10) + s] = a[e]
                    })), t.virtual.cache = o
                }
                t.virtual.update(!0), t.slideTo(n, 0)
            },
            removeSlide: function (e) {
                var t = this;
                if (null != e) {
                    var i = t.activeIndex;
                    if (Array.isArray(e))
                        for (var n = e.length - 1; 0 <= n; n -= 1) t.virtual.slides.splice(e[n], 1), t.params.virtual.cache && delete t.virtual.cache[e[n]], e[n] < i && (i -= 1), i = Math.max(i, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
                    t.virtual.update(!0), t.slideTo(i, 0)
                }
            },
            removeAllSlides: function () {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        },
        N = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    virtual: {
                        update: A.update.bind(e),
                        appendSlide: A.appendSlide.bind(e),
                        prependSlide: A.prependSlide.bind(e),
                        removeSlide: A.removeSlide.bind(e),
                        removeAllSlides: A.removeAllSlides.bind(e),
                        renderSlide: A.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        O = {
            handle: function (i) {
                var n = this,
                    s = n.rtlTranslate,
                    r = i;
                r.originalEvent && (r = r.originalEvent);
                var a = r.keyCode || r.charCode;
                if (!n.allowSlideNext && (n.isHorizontal() && 39 === a || n.isVertical() && 40 === a)) return !1;
                if (!n.allowSlidePrev && (n.isHorizontal() && 37 === a || n.isVertical() && 38 === a)) return !1;
                if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (n.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
                        var o = !1;
                        if (0 < n.$el.parents("." + n.params.slideClass).length && 0 === n.$el.parents("." + n.params.slideActiveClass).length) return;
                        var l = t.innerWidth,
                            c = t.innerHeight,
                            d = n.$el.offset();
                        s && (d.left -= n.$el[0].scrollLeft);
                        for (var u = [
                                [d.left, d.top],
                                [d.left + n.width, d.top],
                                [d.left, d.top + n.height],
                                [d.left + n.width, d.top + n.height]
                            ], h = 0; h < u.length; h += 1) {
                            var p = u[h];
                            0 <= p[0] && p[0] <= l && 0 <= p[1] && p[1] <= c && (o = !0)
                        }
                        if (!o) return
                    }
                    n.isHorizontal() ? (37 !== a && 39 !== a || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (39 === a && !s || 37 === a && s) && n.slideNext(), (37 === a && !s || 39 === a && s) && n.slidePrev()) : (38 !== a && 40 !== a || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 40 === a && n.slideNext(), 38 === a && n.slidePrev()), n.emit("keyPress", a)
                }
            },
            enable: function () {
                this.keyboard.enabled || (n(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function () {
                this.keyboard.enabled && (n(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        z = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function () {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: O.enable.bind(this),
                        disable: O.disable.bind(this),
                        handle: O.handle.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        q = {
            lastScrollTime: d.now(),
            event: -1 < t.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
                var t = "onwheel",
                    i = t in e;
                if (!i) {
                    var n = e.createElement("div");
                    n.setAttribute(t, "return;"), i = "function" == typeof n[t]
                }
                return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i
            }() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    i = 0,
                    n = 0,
                    s = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: s
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (e) {
                var i = e,
                    n = this,
                    s = n.params.mousewheel;
                if (!n.mouseEntered && !s.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                var r = 0,
                    a = n.rtlTranslate ? -1 : 1,
                    o = q.normalize(i);
                if (s.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * a
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY;
                if (0 === r) return !0;
                if (s.invert && (r = -r), n.params.freeMode) {
                    n.params.loop && n.loopFix();
                    var l = n.getTranslate() + r * s.sensitivity,
                        c = n.isBeginning,
                        u = n.isEnd;
                    if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!c && n.isBeginning || !u && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = d.nextTick((function () {
                            n.slideToClosest()
                        }), 300)), n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                } else {
                    if (60 < d.now() - n.mousewheel.lastScrollTime)
                        if (r < 0)
                            if (n.isEnd && !n.params.loop || n.animating) {
                                if (s.releaseOnEdges) return !0
                            } else n.slideNext(), n.emit("scroll", i);
                    else if (n.isBeginning && !n.params.loop || n.animating) {
                        if (s.releaseOnEdges) return !0
                    } else n.slidePrev(), n.emit("scroll", i);
                    n.mousewheel.lastScrollTime = (new t.Date).getTime()
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
            },
            enable: function () {
                var e = this;
                if (!q.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(q.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function () {
                var e = this;
                if (!q.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.off(q.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        I = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var i = e.navigation,
                        n = i.$nextEl,
                        s = i.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && 0 < n.length && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function (e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function () {
                var e, t, i = this,
                    s = i.params.navigation;
                (s.nextEl || s.prevEl) && (s.nextEl && (e = n(s.nextEl), i.params.uniqueNavElements && "string" == typeof s.nextEl && 1 < e.length && 1 === i.$el.find(s.nextEl).length && (e = i.$el.find(s.nextEl))), s.prevEl && (t = n(s.prevEl), i.params.uniqueNavElements && "string" == typeof s.prevEl && 1 < t.length && 1 === i.$el.find(s.prevEl).length && (t = i.$el.find(s.prevEl))), e && 0 < e.length && e.on("click", i.navigation.onNextClick), t && 0 < t.length && t.on("click", i.navigation.onPrevClick), d.extend(i.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    i = t.$nextEl,
                    n = t.$prevEl;
                i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
            }
        },
        H = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    i = e.params.pagination;
                if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var s, r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        a = e.pagination.$el,
                        o = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (s -= r - 2 * e.loopedSlides), o - 1 < s && (s -= o), s < 0 && "bullets" !== e.params.paginationType && (s = o + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var l, c, d, u = e.pagination.bullets;
                        if (i.dynamicBullets && (e.pagination.bulletSize = u.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = s - e.pagination.dynamicBulletIndex, d = ((c = l + (Math.min(u.length, i.dynamicMainBullets) - 1)) + l) / 2), u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < a.length) u.each((function (e, t) {
                            var r = n(t),
                                a = r.index();
                            a === s && r.addClass(i.bulletActiveClass), i.dynamicBullets && (l <= a && a <= c && r.addClass(i.bulletActiveClass + "-main"), a === l && r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), a === c && r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }));
                        else if (u.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets) {
                            for (var h = u.eq(l), p = u.eq(c), f = l; f <= c; f += 1) u.eq(f).addClass(i.bulletActiveClass + "-main");
                            h.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), p.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                        if (i.dynamicBullets) {
                            var m = Math.min(u.length, i.dynamicMainBullets + 4),
                                v = (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                g = t ? "right" : "left";
                            u.css(e.isHorizontal() ? g : "top", v + "px")
                        }
                    }
                    if ("fraction" === i.type && (a.find("." + i.currentClass).text(i.formatFractionCurrent(s + 1)), a.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                        var y;
                        y = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (s + 1) / o,
                            x = 1,
                            w = 1;
                        "horizontal" === y ? x = b : w = b, a.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + w + ")").transition(e.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(e, s + 1, o)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        n = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, a = 0; a < r; a += 1) t.renderBullet ? s += t.renderBullet.call(e, a, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        n.html(s), e.pagination.bullets = n.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = n(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                        t.preventDefault();
                        var i = n(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    })), d.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
                }
            }
        },
        j = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.rtlTranslate,
                        n = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        a = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        c = s,
                        d = (r - s) * n;
                    i ? 0 < (d = -d) ? (c = s - d, d = 0) : r < -d + s && (c = r + d) : d < 0 ? (c = s + d, d = 0) : r < d + s && (c = r - d), e.isHorizontal() ? (u.transforms3d ? a.transform("translate3d(" + d + "px, 0, 0)") : a.transform("translateX(" + d + "px)"), a[0].style.width = c + "px") : (u.transforms3d ? a.transform("translate3d(0px, " + d + "px, 0)") : a.transform("translateY(" + d + "px)"), a[0].style.height = c + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout((function () {
                        o[0].style.opacity = 0, o.transition(400)
                    }), 1e3))
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        i = t.$dragEl,
                        n = t.$el;
                    i[0].style.width = "", i[0].style.height = "";
                    var s, r = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                        a = e.size / e.virtualSize,
                        o = a * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = s + "px" : i[0].style.height = s + "px", n[0].style.display = 1 <= a ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), d.extend(t, {
                        trackSize: r,
                        divider: a,
                        moveDivider: o,
                        dragSize: s
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function (e) {
                var t, i = this,
                    n = i.scrollbar,
                    s = i.rtlTranslate,
                    r = n.$el,
                    a = n.dragSize,
                    o = n.trackSize;
                t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[i.isHorizontal() ? "left" : "top"] - a / 2) / (o - a), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses()
            },
            onDragStart: function (e) {
                var t = this,
                    i = t.params.scrollbar,
                    n = t.scrollbar,
                    s = t.$wrapperEl,
                    r = n.$el,
                    a = n.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), a.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), i.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    n = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function (e) {
                var t = this,
                    i = t.params.scrollbar,
                    n = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = d.nextTick((function () {
                    n.css("opacity", 0), n.transition(400)
                }), 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar,
                        n = t.touchEventsTouch,
                        s = t.touchEventsDesktop,
                        r = t.params,
                        a = i.$el[0],
                        o = !(!u.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!u.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    u.touch ? (a.addEventListener(n.start, t.scrollbar.onDragStart, o), a.addEventListener(n.move, t.scrollbar.onDragMove, o), a.addEventListener(n.end, t.scrollbar.onDragEnd, l)) : (a.addEventListener(s.start, t.scrollbar.onDragStart, o), e.addEventListener(s.move, t.scrollbar.onDragMove, o), e.addEventListener(s.end, t.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar,
                        n = t.touchEventsTouch,
                        s = t.touchEventsDesktop,
                        r = t.params,
                        a = i.$el[0],
                        o = !(!u.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!u.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    u.touch ? (a.removeEventListener(n.start, t.scrollbar.onDragStart, o), a.removeEventListener(n.move, t.scrollbar.onDragMove, o), a.removeEventListener(n.end, t.scrollbar.onDragEnd, l)) : (a.removeEventListener(s.start, t.scrollbar.onDragStart, o), e.removeEventListener(s.move, t.scrollbar.onDragMove, o), e.removeEventListener(s.end, t.scrollbar.onDragEnd, l))
                }
            },
            init: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.$el,
                        s = e.params.scrollbar,
                        r = n(s.el);
                    e.params.uniqueNavElements && "string" == typeof s.el && 1 < r.length && 1 === i.find(s.el).length && (r = i.find(s.el));
                    var a = r.find("." + e.params.scrollbar.dragClass);
                    0 === a.length && (a = n('<div class="' + e.params.scrollbar.dragClass + '"></div>'), r.append(a)), d.extend(t, {
                        $el: r,
                        el: r[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), s.draggable && t.enableDraggable()
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        F = {
            setTransform: function (e, t) {
                var i = this.rtl,
                    s = n(e),
                    r = i ? -1 : 1,
                    a = s.attr("data-swiper-parallax") || "0",
                    o = s.attr("data-swiper-parallax-x"),
                    l = s.attr("data-swiper-parallax-y"),
                    c = s.attr("data-swiper-parallax-scale"),
                    d = s.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                    var u = d - (d - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = u
                }
                if (null == c) s.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var h = c - (c - 1) * (1 - Math.abs(t));
                    s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + h + ")")
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    s = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, i) {
                    e.parallax.setTransform(i, s)
                })), i.each((function (t, i) {
                    var a = i.progress;
                    1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, i) {
                        e.parallax.setTransform(i, a)
                    }))
                }))
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, i) {
                    var s = n(i),
                        r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), s.transition(r)
                }))
            }
        },
        B = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    n = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
            },
            onGestureStart: function (e) {
                var t = this,
                    i = t.params.zoom,
                    s = t.zoom,
                    r = s.gesture;
                if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !u.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    s.fakeGestureTouched = !0, r.scaleStart = B.getDistanceBetweenTouches(e)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = n(e.target).closest(".swiper-slide"), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!u.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = B.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = u.gestures ? e.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!u.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (w.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function (e) {
                var t = this,
                    i = t.zoom,
                    n = i.gesture,
                    s = i.image,
                    r = i.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, s.isTouched && n.$slideEl)) {
                    s.isMoved || (s.width = n.$imageEl[0].offsetWidth, s.height = n.$imageEl[0].offsetHeight, s.startX = d.getTranslate(n.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var a = s.width * i.scale,
                        o = s.height * i.scale;
                    if (!(a < n.slideWidth && o < n.slideHeight)) {
                        if (s.minX = Math.min(n.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(n.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !i.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    n = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var s = 300,
                        r = 300,
                        a = n.x * s,
                        o = i.currentX + a,
                        l = n.y * r,
                        c = i.currentY + l;
                    0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
                    var d = Math.max(s, r);
                    i.currentX = o, i.currentY = c;
                    var u = i.width * e.scale,
                        h = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function (e) {
                var t, i, s, r, a, o, l, c, d, u, h, p, f, m, v, g, y = this,
                    b = y.zoom,
                    x = y.params.zoom,
                    w = b.gesture,
                    _ = b.image;
                w.$slideEl || (w.$slideEl = y.clickedSlide ? n(y.clickedSlide) : y.slides.eq(y.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + x.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === _.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = _.touchesStart.x, i = _.touchesStart.y), b.scale = w.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, b.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (v = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + v / 2 - t, r = w.$slideEl.offset().top + g / 2 - i, l = w.$imageEl[0].offsetWidth, c = w.$imageEl[0].offsetHeight, d = l * b.scale, u = c * b.scale, f = -(h = Math.min(v / 2 - d / 2, 0)), m = -(p = Math.min(g / 2 - u / 2, 0)), (a = s * b.scale) < h && (a = h), f < a && (a = f), (o = r * b.scale) < p && (o = p), m < o && (o = m)) : o = a = 0, w.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function () {
                var e = this,
                    t = e.zoom,
                    i = e.params.zoom,
                    s = t.gesture;
                s.$slideEl || (s.$slideEl = e.clickedSlide ? n(e.clickedSlide) : e.slides.eq(e.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (t.scale = 1, t.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
            },
            enable: function () {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    u.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !u.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    u.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        W = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        a = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (a = a.add(r[0])), 0 !== a.length && a.each((function (e, a) {
                        var o = n(a);
                        o.addClass(s.loadingClass);
                        var l = o.attr("data-background"),
                            c = o.attr("data-src"),
                            d = o.attr("data-srcset"),
                            u = o.attr("data-sizes");
                        i.loadImage(o[0], c || l, d, u, !1, (function () {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), r.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var n = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(n.index(), !1)
                                    } else {
                                        var a = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        })), i.emit("lazyImageLoad", r[0], o[0])
                    }))
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    s = e.slides,
                    r = e.activeIndex,
                    a = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function c(e) {
                    if (a) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return a ? n(e).attr("data-swiper-slide-index") : n(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function (t, i) {
                    var s = a ? n(i).attr("data-swiper-slide-index") : n(i).index();
                    e.lazy.loadInSlide(s)
                }));
                else if (1 < l)
                    for (var u = r; u < r + l; u += 1) c(u) && e.lazy.loadInSlide(u);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (1 < l || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                        for (var h = o.loadPrevNextAmount, p = l, f = Math.min(r + p + Math.max(h, p), s.length), m = Math.max(r - Math.max(p, h), 0), v = r + l; v < f; v += 1) c(v) && e.lazy.loadInSlide(v);
                        for (var g = m; g < r; g += 1) c(g) && e.lazy.loadInSlide(g)
                    } else {
                        var y = t.children("." + i.slideNextClass);
                        0 < y.length && e.lazy.loadInSlide(d(y));
                        var b = t.children("." + i.slidePrevClass);
                        0 < b.length && e.lazy.loadInSlide(d(b))
                    }
            }
        },
        R = {
            LinearSpline: function (e, t) {
                var i, n, s, r, a;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (a = function (e, t) {
                        for (n = -1, i = e.length; 1 < i - n;) e[s = i + n >> 1] <= t ? n = s : i = s;
                        return i
                    }(this.x, e), r = a - 1, (e - this.x[r]) * (this.y[a] - this.y[r]) / (this.x[a] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function (e, t) {
                var i, n, s = this,
                    r = s.controller.control;

                function a(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * i + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof E && a(r[o]);
                else r instanceof E && t !== r && a(r)
            },
            setTransition: function (e, t) {
                var i, n = this,
                    s = n.controller.control;

                function r(t) {
                    t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick((function () {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function () {
                        s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }
                if (Array.isArray(s))
                    for (i = 0; i < s.length; i += 1) s[i] !== t && s[i] instanceof E && r(s[i]);
                else s instanceof E && t !== s && r(s)
            }
        },
        X = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function (e) {
                var t = this,
                    i = t.params.a11y;
                if (13 === e.keyCode) {
                    var s = n(e.target);
                    t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && s.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && s.is("." + t.params.pagination.bulletClass) && s[0].click()
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        i = t.$nextEl,
                        n = t.$prevEl;
                    n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (i, s) {
                    var r = n(s);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                }))
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, i, n = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function () {
                var e, t, i = this;
                i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
            }
        },
        V = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var i = e.history;
                    i.initialized = !0, i.paths = V.getPathValues(), (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function () {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                this.history.paths = V.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function () {
                var e = t.location.pathname.slice(1).split("/").filter((function (e) {
                        return "" !== e
                    })),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function (e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var n = this.slides.eq(i),
                        s = V.slugify(n.attr("data-history"));
                    t.location.pathname.includes(e) || (s = e + "/" + s);
                    var r = t.history.state;
                    r && r.value === s || (this.params.history.replaceState ? t.history.replaceState({
                        value: s
                    }, null, s) : t.history.pushState({
                        value: s
                    }, null, s))
                }
            },
            slugify: function (e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (e, t, i) {
                var n = this;
                if (t)
                    for (var s = 0, r = n.slides.length; s < r; s += 1) {
                        var a = n.slides.eq(s);
                        if (V.slugify(a.attr("data-history")) === t && !a.hasClass(n.params.slideDuplicateClass)) {
                            var o = a.index();
                            n.slideTo(o, e, i)
                        }
                    } else n.slideTo(0, e, i)
            }
        },
        G = {
            onHashCange: function () {
                var t = this,
                    i = e.location.hash.replace("#", "");
                if (i !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    var n = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + i + '"]').index();
                    if (void 0 === n) return;
                    t.slideTo(n)
                }
            },
            setHash: function () {
                var i = this;
                if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
                    if (i.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || "");
                    else {
                        var n = i.slides.eq(i.activeIndex),
                            s = n.attr("data-hash") || n.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function () {
                var i = this;
                if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                    i.hashNavigation.initialized = !0;
                    var s = e.location.hash.replace("#", "");
                    if (s)
                        for (var r = 0, a = i.slides.length; r < a; r += 1) {
                            var o = i.slides.eq(r);
                            if ((o.attr("data-hash") || o.attr("data-history")) === s && !o.hasClass(i.params.slideDuplicateClass)) {
                                var l = o.index();
                                i.slideTo(l, 0, i.params.runCallbacksOnInit, !0)
                            }
                        }
                    i.params.hashNavigation.watchState && n(t).on("hashchange", i.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && n(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        Y = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick((function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }), i)
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        U = {
            setTranslate: function () {
                for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                    var n = e.slides.eq(i),
                        s = -n[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({
                        opacity: a
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    n = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    i.transitionEnd((function () {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                        }
                    }))
                }
            }
        },
        K = {
            setTranslate: function () {
                var e, t = this,
                    i = t.$el,
                    s = t.$wrapperEl,
                    r = t.slides,
                    a = t.width,
                    o = t.height,
                    l = t.rtlTranslate,
                    c = t.size,
                    d = t.params.cubeEffect,
                    u = t.isHorizontal(),
                    p = t.virtual && t.params.virtual.enabled,
                    f = 0;
                d.shadow && (u ? (0 === (e = s.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), s.append(e)), e.css({
                    height: a + "px"
                })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                for (var m = 0; m < r.length; m += 1) {
                    var v = r.eq(m),
                        g = m;
                    p && (g = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var y = 90 * g,
                        b = Math.floor(y / 360);
                    l && (y = -y, b = Math.floor(-y / 360));
                    var x = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        _ = 0,
                        S = 0;
                    g % 4 == 0 ? (w = 4 * -b * c, S = 0) : (g - 1) % 4 == 0 ? (w = 0, S = 4 * -b * c) : (g - 2) % 4 == 0 ? (w = c + 4 * b * c, S = c) : (g - 3) % 4 == 0 && (w = -c, S = 3 * c + 4 * c * b), l && (w = -w), u || (_ = w, w = 0);
                    var T = "rotateX(" + (u ? 0 : -y) + "deg) rotateY(" + (u ? y : 0) + "deg) translate3d(" + w + "px, " + _ + "px, " + S + "px)";
                    if (x <= 1 && -1 < x && (f = 90 * g + 90 * x, l && (f = 90 * -g - 90 * x)), v.transform(T), d.slideShadows) {
                        var C = u ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            E = u ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), v.append(C)), 0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), v.append(E)), C.length && (C[0].style.opacity = Math.max(-x, 0)), E.length && (E[0].style.opacity = Math.max(x, 0))
                    }
                }
                if (s.css({
                        "-webkit-transform-origin": "50% 50% -" + c / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + c / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + c / 2 + "px",
                        "transform-origin": "50% 50% -" + c / 2 + "px"
                    }), d.shadow)
                    if (u) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var k = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            $ = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
                            M = d.shadowScale,
                            P = d.shadowScale / $,
                            L = d.shadowOffset;
                        e.transform("scale3d(" + M + ", 1, " + P + ") translate3d(0px, " + (o / 2 + L) + "px, " + -o / 2 / P + "px) rotateX(-90deg)")
                    } var D = h.isSafari || h.isUiWebView ? -c / 2 : 0;
                s.transform("translate3d(0px,0," + D + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)")
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        Q = {
            setTranslate: function () {
                for (var e = this, t = e.slides, i = e.rtlTranslate, s = 0; s < t.length; s += 1) {
                    var r = t.eq(s),
                        a = r[0].progress;
                    e.params.flipEffect.limitRotation && (a = Math.max(Math.min(r[0].progress, 1), -1));
                    var o = -180 * a,
                        l = 0,
                        c = -r[0].swiperSlideOffset,
                        d = 0;
                    if (e.isHorizontal() ? i && (o = -o) : (d = c, l = -o, o = c = 0), r[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, e.params.flipEffect.slideShadows) {
                        var u = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                            h = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === u.length && (u = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), r.append(u)), 0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(h)), u.length && (u[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                    }
                    r.transform("translate3d(" + c + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    n = t.activeIndex,
                    s = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(n).transitionEnd((function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    }))
                }
            }
        },
        J = {
            setTranslate: function () {
                for (var e = this, t = e.width, i = e.height, s = e.slides, r = e.$wrapperEl, a = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), c = e.translate, d = l ? t / 2 - c : i / 2 - c, h = l ? o.rotate : -o.rotate, p = o.depth, f = 0, m = s.length; f < m; f += 1) {
                    var v = s.eq(f),
                        g = a[f],
                        y = (d - v[0].swiperSlideOffset - g / 2) / g * o.modifier,
                        b = l ? h * y : 0,
                        x = l ? 0 : h * y,
                        w = -p * Math.abs(y),
                        _ = l ? 0 : o.stretch * y,
                        S = l ? o.stretch * y : 0;
                    Math.abs(S) < .001 && (S = 0), Math.abs(_) < .001 && (_ = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(x) < .001 && (x = 0);
                    var T = "translate3d(" + S + "px," + _ + "px," + w + "px)  rotateX(" + x + "deg) rotateY(" + b + "deg)";
                    if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(y)), o.slideShadows) {
                        var C = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            E = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = n('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), v.append(C)), 0 === E.length && (E = n('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), v.append(E)), C.length && (C[0].style.opacity = 0 < y ? y : 0), E.length && (E[0].style.opacity = 0 < -y ? -y : 0)
                    }
                }(u.pointerEvents || u.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        Z = {
            init: function () {
                var e = this,
                    t = e.params.thumbs,
                    i = e.constructor;
                null !== document.querySelector(".product__thumbs") && (t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, d.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), d.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : d.isObject(t.swiper) && (e.thumbs.swiper = new i(d.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick))
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var i = t.clickedIndex,
                        s = t.clickedSlide;
                    if (!(s && n(s).hasClass(e.params.thumbs.slideThumbActiveClass) || null == i)) {
                        var r;
                        if (r = t.params.loop ? parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                            var a = e.activeIndex;
                            e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                            var o = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(),
                                l = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                            r = void 0 === o ? l : void 0 === l ? o : l - a < a - o ? l : o
                        }
                        e.slideTo(r)
                    }
                }
            },
            update: function (e) {
                var t = this,
                    i = t.thumbs.swiper;
                if (i) {
                    var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                    if (t.realIndex !== i.realIndex) {
                        var s, r = i.activeIndex;
                        if (i.params.loop) {
                            i.slides.eq(r).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, r = i.activeIndex);
                            var a = i.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = i.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === a ? o : void 0 === o ? a : o - r == r - a ? r : o - r < r - a ? o : a
                        } else s = t.realIndex;
                        void 0 !== i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = r < s ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : r < s && (s = s - n + 1), i.slideTo(s, e ? 0 : void 0))
                    }
                    var l = 1,
                        c = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(c), i.params.loop)
                        for (var d = 0; d < l; d += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + d) + '"]').addClass(c);
                    else
                        for (var u = 0; u < l; u += 1) i.slides.eq(t.realIndex + u).addClass(c)
                }
            }
        },
        ee = [k, $, M, P, D, N, z, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: q.enable.bind(e),
                        disable: q.disable.bind(e),
                        handle: q.handle.bind(e),
                        handleMouseEnter: q.handleMouseEnter.bind(e),
                        handleMouseLeave: q.handleMouseLeave.bind(e),
                        lastScrollTime: d.now()
                    }
                })
            },
            on: {
                init: function () {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function () {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    navigation: {
                        init: I.init.bind(e),
                        update: I.update.bind(e),
                        destroy: I.destroy.bind(e),
                        onNextClick: I.onNextClick.bind(e),
                        onPrevClick: I.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function () {
                    this.navigation.update()
                },
                fromEdge: function () {
                    this.navigation.update()
                },
                destroy: function () {
                    this.navigation.destroy()
                },
                click: function (e) {
                    var t, i = this,
                        s = i.navigation,
                        r = s.$nextEl,
                        a = s.$prevEl;
                    !i.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(r) || (r ? t = r.hasClass(i.params.navigation.hiddenClass) : a && (t = a.hasClass(i.params.navigation.hiddenClass)), !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i), r && r.toggleClass(i.params.navigation.hiddenClass), a && a.toggleClass(i.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (e) {
                        return e
                    },
                    formatFractionTotal: function (e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    pagination: {
                        init: H.init.bind(e),
                        render: H.render.bind(e),
                        update: H.update.bind(e),
                        destroy: H.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function () {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function () {
                    (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
                },
                snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function () {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function () {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function () {
                    this.pagination.destroy()
                },
                click: function (e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !n(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    scrollbar: {
                        init: j.init.bind(e),
                        destroy: j.destroy.bind(e),
                        updateSize: j.updateSize.bind(e),
                        setTranslate: j.setTranslate.bind(e),
                        setTransition: j.setTransition.bind(e),
                        enableDraggable: j.enableDraggable.bind(e),
                        disableDraggable: j.disableDraggable.bind(e),
                        setDragPosition: j.setDragPosition.bind(e),
                        onDragStart: j.onDragStart.bind(e),
                        onDragMove: j.onDragMove.bind(e),
                        onDragEnd: j.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function () {
                    this.scrollbar.updateSize()
                },
                resize: function () {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize()
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate()
                },
                setTransition: function (e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function () {
                d.extend(this, {
                    parallax: {
                        setTransform: F.setTransform.bind(this),
                        setTranslate: F.setTranslate.bind(this),
                        setTransition: F.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function () {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function () {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function (e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
                    t[i] = B[i].bind(e)
                })), d.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function () {
                        return i
                    },
                    set: function (t) {
                        if (i !== t) {
                            var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, n, s)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function () {
                    this.zoom.disable()
                },
                touchStart: function (e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function (e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function (e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                d.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: W.load.bind(this),
                        loadInSlide: W.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function () {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function () {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function () {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: R.getInterpolateFunction.bind(e),
                        setTranslate: R.setTranslate.bind(e),
                        setTransition: R.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function (e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function (e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    a11y: {
                        liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(X).forEach((function (t) {
                    e.a11y[t] = X[t].bind(e)
                }))
            },
            on: {
                init: function () {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    history: {
                        init: V.init.bind(e),
                        setHistory: V.setHistory.bind(e),
                        setHistoryPopState: V.setHistoryPopState.bind(e),
                        scrollToSlide: V.scrollToSlide.bind(e),
                        destroy: V.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function () {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: G.init.bind(e),
                        destroy: G.destroy.bind(e),
                        setHash: G.setHash.bind(e),
                        onHashCange: G.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var e = this;
                d.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Y.run.bind(e),
                        start: Y.start.bind(e),
                        stop: Y.stop.bind(e),
                        pause: Y.pause.bind(e),
                        onTransitionEnd: function (t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function (e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function () {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function () {
                d.extend(this, {
                    fadeEffect: {
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function () {
                d.extend(this, {
                    cubeEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function () {
                d.extend(this, {
                    flipEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(e.params, t), d.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function (e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function () {
                d.extend(this, {
                    coverflowEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function (e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function () {
                d.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: Z.init.bind(this),
                        update: Z.update.bind(this),
                        onThumbClick: Z.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function (e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function () {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === E.use && (E.use = E.Class.use, E.installModule = E.Class.installModule), E.use(ee), E
})),

function (e) {
    e.fn.equalHeights = function () {
        var t = e(this);

        function i() {
            t.height("initial");
            var i = t.eq(0).height();
            t.each((function () {
                i = e(this).height() > i ? e(this).height() : i
            })), t.height(i)
        }
        i(), e(window).bind("resize", (function () {
            i()
        }))
    }
}(jQuery),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], (function (t) {
        return e(t, document, window, navigator)
    })) : "object" == typeof exports ? e(require("jquery"), document, window, navigator) : e(jQuery, document, window, navigator)
}((function (e, t, i, n, s) {
    var r, a, o = 0,
        l = (r = n.userAgent, a = /msie\s\d+/i, 0 < r.search(a) && 9 > (r = (r = a.exec(r).toString()).split(" ")[1]) && (e("html").addClass("lt-ie9"), !0));
    Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this,
            i = [].slice;
        if ("function" != typeof t) throw new TypeError;
        var n = i.call(arguments, 1),
            s = function () {
                if (this instanceof s) {
                    (r = function () {}).prototype = t.prototype;
                    var r = new r,
                        a = t.apply(r, n.concat(i.call(arguments)));
                    return Object(a) === a ? a : r
                }
                return t.apply(e, n.concat(i.call(arguments)))
            };
        return s
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var i = Object(this),
            n = i.length >>> 0;
        if (0 === n) return -1;
        var s = +t || 0;
        if (1 / 0 === Math.abs(s) && (s = 0), s >= n) return -1;
        for (s = Math.max(0 <= s ? s : n - Math.abs(s), 0); s < n;) {
            if (s in i && i[s] === e) return s;
            s++
        }
        return -1
    });
    var c = function (n, r, a) {
        this.VERSION = "2.2.0", this.input = n, this.plugin_count = a, this.old_to = this.old_from = this.update_tm = this.calc_count = this.current_plugin = 0, this.raf_id = this.old_min_interval = null, this.no_diapason = this.force_redraw = this.dragging = !1, this.has_tab_index = !0, this.is_update = this.is_key = !1, this.is_start = !0, this.is_click = this.is_resize = this.is_active = this.is_finish = !1, r = r || {}, this.$cache = {
            win: e(i),
            body: e(t.body),
            input: e(n),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            edge: null,
            grid: null,
            grid_labels: []
        }, this.coords = {
            x_gap: 0,
            x_pointer: 0,
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single_fake: 0,
            p_single_real: 0,
            p_from_fake: 0,
            p_from_real: 0,
            p_to_fake: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        }, this.labels = {
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,
            p_min: 0,
            p_max: 0,
            p_from_fake: 0,
            p_from_left: 0,
            p_to_fake: 0,
            p_to_left: 0,
            p_single_fake: 0,
            p_single_left: 0
        };
        var o, l = this.$cache.input;
        for (o in n = l.prop("value"), a = {
                type: "single",
                min: 10,
                max: 100,
                from: null,
                to: null,
                step: 1,
                min_interval: 0,
                max_interval: 0,
                drag_interval: !1,
                values: [],
                p_values: [],
                from_fixed: !1,
                from_min: null,
                from_max: null,
                from_shadow: !1,
                to_fixed: !1,
                to_min: null,
                to_max: null,
                to_shadow: !1,
                prettify_enabled: !0,
                prettify_separator: " ",
                prettify: null,
                force_edges: !1,
                keyboard: !0,
                grid: !1,
                grid_margin: !0,
                grid_num: 4,
                grid_snap: !1,
                hide_min_max: !1,
                hide_from_to: !1,
                prefix: "",
                postfix: "",
                max_postfix: "",
                decorate_both: !0,
                values_separator: " ??? ",
                input_values_separator: ";",
                disable: !1,
                block: !1,
                extra_classes: "",
                scope: null,
                onStart: null,
                onChange: null,
                onFinish: null,
                onUpdate: null
            }, "INPUT" !== l[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", l[0]), (l = {
                type: l.data("type"),
                min: l.data("min"),
                max: l.data("max"),
                from: l.data("from"),
                to: l.data("to"),
                step: l.data("step"),
                min_interval: l.data("minInterval"),
                max_interval: l.data("maxInterval"),
                drag_interval: l.data("dragInterval"),
                values: l.data("values"),
                from_fixed: l.data("fromFixed"),
                from_min: l.data("fromMin"),
                from_max: l.data("fromMax"),
                from_shadow: l.data("fromShadow"),
                to_fixed: l.data("toFixed"),
                to_min: l.data("toMin"),
                to_max: l.data("toMax"),
                to_shadow: l.data("toShadow"),
                prettify_enabled: l.data("prettifyEnabled"),
                prettify_separator: l.data("prettifySeparator"),
                force_edges: l.data("forceEdges"),
                keyboard: l.data("keyboard"),
                grid: l.data("grid"),
                grid_margin: l.data("gridMargin"),
                grid_num: l.data("gridNum"),
                grid_snap: l.data("gridSnap"),
                hide_min_max: l.data("hideMinMax"),
                hide_from_to: l.data("hideFromTo"),
                prefix: l.data("prefix"),
                postfix: l.data("postfix"),
                max_postfix: l.data("maxPostfix"),
                decorate_both: l.data("decorateBoth"),
                values_separator: l.data("valuesSeparator"),
                input_values_separator: l.data("inputValuesSeparator"),
                disable: l.data("disable"),
                block: l.data("block"),
                extra_classes: l.data("extraClasses")
            }).values = l.values && l.values.split(","), l) l.hasOwnProperty(o) && (l[o] !== s && "" !== l[o] || delete l[o]);
        n !== s && "" !== n && ((n = n.split(l.input_values_separator || r.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), r && r.values && r.values.length ? (a.from = n[0] && r.values.indexOf(n[0]), a.to = n[1] && r.values.indexOf(n[1])) : (a.from = n[0] && +n[0], a.to = n[1] && +n[1])), e.extend(a, r), e.extend(a, l), this.options = a, this.update_check = {}, this.validate(), this.result = {
            input: this.$cache.input,
            slider: null,
            min: this.options.min,
            max: this.options.max,
            from: this.options.from,
            from_percent: 0,
            from_value: null,
            to: this.options.to,
            to_percent: 0,
            to_value: null
        }, this.init()
    };
    c.prototype = {
            init: function (e) {
                this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), e ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene()
            },
            append: function () {
                this.$cache.input.before('<span class="irs js-irs-' + this.plugin_count + " " + this.options.extra_classes + '"></span>'), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
            },
            setTopHandler: function () {
                var e = this.options.max,
                    t = this.options.to;
                this.options.from > this.options.min && t === e ? this.$cache.s_from.addClass("type_last") : t < e && this.$cache.s_to.addClass("type_last")
            },
            changeLevel: function (e) {
                switch (e) {
                    case "single":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                }
            },
            appendDisableMask: function () {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled")
            },
            removeDisableMask: function () {
                this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled")
            },
            remove: function () {
                this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id)
            },
            bindEvents: function () {
                this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))))
            },
            pointerFocus: function (e) {
                if (!this.target) {
                    var t = "single" === this.options.type ? this.$cache.single : this.$cache.from;
                    e = t.offset().left, e += t.width() / 2 - 1, this.pointerClick("single", {
                        preventDefault: function () {},
                        pageX: e
                    })
                }
            },
            pointerMove: function (e) {
                this.dragging && (this.coords.x_pointer = (e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX) - this.coords.x_gap, this.calc())
            },
            pointerUp: function (t) {
                this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, l && e("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (e.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1)
            },
            pointerDown: function (t, i) {
                i.preventDefault();
                var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                2 !== i.button && ("both" === t && this.setTempMinInterval(), t || (t = this.target || "from"), this.current_plugin = this.plugin_count, this.target = t, this.dragging = this.is_active = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), l && e("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
            },
            pointerClick: function (e, t) {
                t.preventDefault();
                var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                2 !== t.button && (this.current_plugin = this.plugin_count, this.target = e, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
            },
            key: function (e, t) {
                if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
                    switch (t.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            t.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            t.preventDefault(), this.moveByKey(!0)
                    }
                    return !0
                }
            },
            moveByKey: function (e) {
                var t = this.coords.p_pointer,
                    i = (this.options.max - this.options.min) / 100;
                i = this.options.step / i;
                this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * (e ? t + i : t - i)), this.is_key = !0, this.calc()
            },
            setMinMax: function () {
                if (this.options)
                    if (this.options.hide_min_max) this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none";
                    else {
                        if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                        else {
                            var e = this._prettify(this.options.min),
                                t = this._prettify(this.options.max);
                            this.result.min_pretty = e, this.result.max_pretty = t, this.$cache.min.html(this.decorate(e, this.options.min)), this.$cache.max.html(this.decorate(t, this.options.max))
                        }
                        this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                    }
            },
            setTempMinInterval: function () {
                var e = this.result.to - this.result.from;
                null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = e
            },
            restoreOriginalMinInterval: function () {
                null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null)
            },
            calc: function (e) {
                if (this.options && (this.calc_count++, (10 === this.calc_count || e) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                    switch (this.calcPointerPercent(), e = this.getHandleX(), "both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.target = this.options.drag_interval ? "both_one" : this.chooseHandle(e)), this.target) {
                        case "base":
                            var t = (this.options.max - this.options.min) / 100;
                            e = (this.result.from - this.options.min) / t, t = (this.result.to - this.options.min) / t, this.coords.p_single_real = this.toFixed(e), this.coords.p_from_real = this.toFixed(e), this.coords.p_to_real = this.toFixed(t), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                            break;
                        case "both_one":
                            if (!this.options.from_fixed && !this.options.to_fixed) {
                                var i = this.convertToRealPercent(e),
                                    n = (e = this.result.to_percent - this.result.from_percent) / 2;
                                t = i - n, i = i + n;
                                0 > t && (i = (t = 0) + e), 100 < i && (t = (i = 100) - e), this.coords.p_from_real = this.calcWithStep(t), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(i), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                            }
                    }
                    "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                }
            },
            calcPointerPercent: function () {
                this.coords.w_rs ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0
            },
            convertToRealPercent: function (e) {
                return e / (100 - this.coords.p_handle) * 100
            },
            convertToFakePercent: function (e) {
                return e / 100 * (100 - this.coords.p_handle)
            },
            getHandleX: function () {
                var e = 100 - this.coords.p_handle,
                    t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return 0 > t ? t = 0 : t > e && (t = e), t
            },
            calcHandlePercent: function () {
                this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100)
            },
            chooseHandle: function (e) {
                return "single" === this.options.type ? "single" : e >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from"
            },
            calcMinMax: function () {
                this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100)
            },
            calcLabels: function () {
                this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake))
            },
            updateScene: function () {
                this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300))
            },
            drawHandles: function () {
                this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%" : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_click = this.is_key = !1, this.callOnFinish()), this.is_finish = this.is_resize = this.is_update = !1), this.force_redraw = this.is_click = this.is_key = this.is_start = !1))
            },
            drawLabels: function () {
                if (this.options) {
                    var e = this.options.values.length,
                        t = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type) {
                            if (e) e = this.decorate(t[this.result.from]);
                            else {
                                var i = this._prettify(this.result.from);
                                e = this.decorate(i, this.result.from)
                            }
                            this.$cache.single.html(e), this.calcLabels(), this.$cache.min[0].style.visibility = this.labels.p_single_left < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                        } else {
                            e ? (this.options.decorate_both ? (e = this.decorate(t[this.result.from]), e += this.options.values_separator, e += this.decorate(t[this.result.to])) : e = this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), i = this.decorate(t[this.result.from]), t = this.decorate(t[this.result.to])) : (i = this._prettify(this.result.from), t = this._prettify(this.result.to), this.options.decorate_both ? (e = this.decorate(i, this.result.from), e += this.options.values_separator, e += this.decorate(t, this.result.to)) : e = this.decorate(i + this.options.values_separator + t, this.result.to), i = this.decorate(i, this.result.from), t = this.decorate(t, this.result.to)), this.$cache.single.html(e), this.$cache.from.html(i), this.$cache.to.html(t), this.calcLabels(), e = Math.min(this.labels.p_single_left, this.labels.p_from_left), i = this.labels.p_single_left + this.labels.p_single_fake;
                            t = this.labels.p_to_left + this.labels.p_to_fake;
                            var n = Math.max(i, t);
                            this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", n = t) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", n = Math.max(i, t))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), this.$cache.min[0].style.visibility = e < this.labels.p_min + 1 ? "hidden" : "visible", this.$cache.max[0].style.visibility = n > 100 - this.labels.p_max - 1 ? "hidden" : "visible"
                        }
                }
            },
            drawShadow: function () {
                var e = this.options,
                    t = this.$cache,
                    i = "number" == typeof e.from_min && !isNaN(e.from_min),
                    n = "number" == typeof e.from_max && !isNaN(e.from_max),
                    s = "number" == typeof e.to_min && !isNaN(e.to_min),
                    r = "number" == typeof e.to_max && !isNaN(e.to_max);
                "single" === e.type ? e.from_shadow && (i || n) ? (i = this.convertToPercent(i ? e.from_min : e.min), n = this.convertToPercent(n ? e.from_max : e.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, t.shad_single[0].style.display = "block", t.shad_single[0].style.left = i + "%", t.shad_single[0].style.width = n + "%") : t.shad_single[0].style.display = "none" : (e.from_shadow && (i || n) ? (i = this.convertToPercent(i ? e.from_min : e.min), n = this.convertToPercent(n ? e.from_max : e.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, t.shad_from[0].style.display = "block", t.shad_from[0].style.left = i + "%", t.shad_from[0].style.width = n + "%") : t.shad_from[0].style.display = "none", e.to_shadow && (s || r) ? (s = this.convertToPercent(s ? e.to_min : e.min), e = this.convertToPercent(r ? e.to_max : e.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), e = this.toFixed(e - this.coords.p_handle / 100 * e), s += this.coords.p_handle / 2, t.shad_to[0].style.display = "block", t.shad_to[0].style.left = s + "%", t.shad_to[0].style.width = e + "%") : t.shad_to[0].style.display = "none")
            },
            writeToInput: function () {
                "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to))
            },
            callOnStart: function () {
                this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result))
            },
            callOnChange: function () {
                this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result))
            },
            callOnFinish: function () {
                this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result))
            },
            callOnUpdate: function () {
                this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result))
            },
            toggleInput: function () {
                this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index
            },
            convertToPercent: function (e, t) {
                var i = this.options.max - this.options.min;
                return i ? this.toFixed((t ? e : e - this.options.min) / (i / 100)) : (this.no_diapason = !0, 0)
            },
            convertToValue: function (e) {
                var t, i, n = this.options.min,
                    s = this.options.max,
                    r = n.toString().split(".")[1],
                    a = s.toString().split(".")[1],
                    o = 0,
                    l = 0;
                return 0 === e ? this.options.min : 100 === e ? this.options.max : (r && (o = t = r.length), a && (o = i = a.length), t && i && (o = t >= i ? t : i), 0 > n && (n = +(n + (l = Math.abs(n))).toFixed(o), s = +(s + l).toFixed(o)), e = (s - n) / 100 * e + n, (n = this.options.step.toString().split(".")[1]) ? e = +e.toFixed(n.length) : (e /= this.options.step, e = +(e *= this.options.step).toFixed(0)), l && (e -= l), (l = n ? +e.toFixed(n.length) : this.toFixed(e)) < this.options.min ? l = this.options.min : l > this.options.max && (l = this.options.max), l)
            },
            calcWithStep: function (e) {
                var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
                return 100 < t && (t = 100), 100 === e && (t = 100), this.toFixed(t)
            },
            checkMinInterval: function (e, t, i) {
                var n = this.options;
                return n.min_interval ? (e = this.convertToValue(e), t = this.convertToValue(t), "from" === i ? t - e < n.min_interval && (e = t - n.min_interval) : e - t < n.min_interval && (e = t + n.min_interval), this.convertToPercent(e)) : e
            },
            checkMaxInterval: function (e, t, i) {
                var n = this.options;
                return n.max_interval ? (e = this.convertToValue(e), t = this.convertToValue(t), "from" === i ? t - e > n.max_interval && (e = t - n.max_interval) : e - t > n.max_interval && (e = t + n.max_interval), this.convertToPercent(e)) : e
            },
            checkDiapason: function (e, t, i) {
                e = this.convertToValue(e);
                var n = this.options;
                return "number" != typeof t && (t = n.min), "number" != typeof i && (i = n.max), e < t && (e = t), e > i && (e = i), this.convertToPercent(e)
            },
            toFixed: function (e) {
                return +(e = e.toFixed(20))
            },
            _prettify: function (e) {
                return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(e) : this.prettify(e) : e
            },
            prettify: function (e) {
                return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator)
            },
            checkEdges: function (e, t) {
                return this.options.force_edges ? (0 > e ? e = 0 : e > 100 - t && (e = 100 - t), this.toFixed(e)) : this.toFixed(e)
            },
            validate: function () {
                var e, t = this.options,
                    i = this.result,
                    n = t.values,
                    s = n.length;
                if ("string" == typeof t.min && (t.min = +t.min), "string" == typeof t.max && (t.max = +t.max), "string" == typeof t.from && (t.from = +t.from), "string" == typeof t.to && (t.to = +t.to), "string" == typeof t.step && (t.step = +t.step), "string" == typeof t.from_min && (t.from_min = +t.from_min), "string" == typeof t.from_max && (t.from_max = +t.from_max), "string" == typeof t.to_min && (t.to_min = +t.to_min), "string" == typeof t.to_max && (t.to_max = +t.to_max), "string" == typeof t.grid_num && (t.grid_num = +t.grid_num), t.max < t.min && (t.max = t.min), s)
                    for (t.p_values = [], t.min = 0, t.max = s - 1, t.step = 1, t.grid_num = t.max, t.grid_snap = !0, e = 0; e < s; e++) {
                        var r = +n[e];
                        isNaN(r) ? r = n[e] : (n[e] = r, r = this._prettify(r)), t.p_values.push(r)
                    }("number" != typeof t.from || isNaN(t.from)) && (t.from = t.min), ("number" != typeof t.to || isNaN(t.to)) && (t.to = t.max), "single" === t.type ? (t.from < t.min && (t.from = t.min), t.from > t.max && (t.from = t.max)) : (t.from < t.min && (t.from = t.min), t.from > t.max && (t.from = t.max), t.to < t.min && (t.to = t.min), t.to > t.max && (t.to = t.max), this.update_check.from && (this.update_check.from !== t.from && t.from > t.to && (t.from = t.to), this.update_check.to !== t.to && t.to < t.from && (t.to = t.from)), t.from > t.to && (t.from = t.to), t.to < t.from && (t.to = t.from)), ("number" != typeof t.step || isNaN(t.step) || !t.step || 0 > t.step) && (t.step = 1), "number" == typeof t.from_min && t.from < t.from_min && (t.from = t.from_min), "number" == typeof t.from_max && t.from > t.from_max && (t.from = t.from_max), "number" == typeof t.to_min && t.to < t.to_min && (t.to = t.to_min), "number" == typeof t.to_max && t.from > t.to_max && (t.to = t.to_max), i && (i.min !== t.min && (i.min = t.min), i.max !== t.max && (i.max = t.max), (i.from < i.min || i.from > i.max) && (i.from = t.from), (i.to < i.min || i.to > i.max) && (i.to = t.to)), ("number" != typeof t.min_interval || isNaN(t.min_interval) || !t.min_interval || 0 > t.min_interval) && (t.min_interval = 0), ("number" != typeof t.max_interval || isNaN(t.max_interval) || !t.max_interval || 0 > t.max_interval) && (t.max_interval = 0), t.min_interval && t.min_interval > t.max - t.min && (t.min_interval = t.max - t.min), t.max_interval && t.max_interval > t.max - t.min && (t.max_interval = t.max - t.min)
            },
            decorate: function (e, t) {
                var i = "",
                    n = this.options;
                return n.prefix && (i += n.prefix), i += e, n.max_postfix && (n.values.length && e === n.p_values[n.max] || t === n.max) && (i += n.max_postfix, n.postfix && (i += " ")), n.postfix && (i += n.postfix), i
            },
            updateFrom: function () {
                this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from])
            },
            updateTo: function () {
                this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to])
            },
            updateResult: function () {
                this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo()
            },
            appendGrid: function () {
                if (this.options.grid) {
                    var e, t = this.options,
                        i = t.max - t.min,
                        n = t.grid_num,
                        s = 4,
                        r = "";
                    if (this.calcGridMargin(), t.grid_snap)
                        if (50 < i) {
                            n = 50 / t.step;
                            var a = this.toFixed(t.step / .5)
                        } else n = i / t.step, a = this.toFixed(t.step / (i / 100));
                    else a = this.toFixed(100 / n);
                    for (4 < n && (s = 3), 7 < n && (s = 2), 14 < n && (s = 1), 28 < n && (s = 0), i = 0; i < n + 1; i++) {
                        var o = s,
                            l = this.toFixed(a * i);
                        100 < l && (l = 100), this.coords.big[i] = l;
                        var c = (l - a * (i - 1)) / (o + 1);
                        for (e = 1; e <= o && 0 !== l; e++) {
                            r += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(l - c * e) + '%"></span>'
                        }
                        r += '<span class="irs-grid-pol" style="left: ' + l + '%"></span>', e = this.convertToValue(l), r += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + l + '%">' + (e = t.values.length ? t.p_values[e] : this._prettify(e)) + "</span>"
                    }
                    this.coords.big_num = Math.ceil(n + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(r), this.cacheGridLabels()
                }
            },
            cacheGridLabels: function () {
                var e, t = this.coords.big_num;
                for (e = 0; e < t; e++) {
                    var i = this.$cache.grid.find(".js-grid-text-" + e);
                    this.$cache.grid_labels.push(i)
                }
                this.calcGridLabels()
            },
            calcGridLabels: function () {
                var e, t = [],
                    i = [],
                    n = this.coords.big_num;
                for (e = 0; e < n; e++) this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1), this.coords.big_p[e] = this.toFixed(this.coords.big_w[e] / this.coords.w_rs * 100), this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2), t[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e]), i[e] = this.toFixed(t[e] + this.coords.big_p[e]);
                for (this.options.force_edges && (t[0] < -this.coords.grid_gap && (t[0] = -this.coords.grid_gap, i[0] = this.toFixed(t[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), i[n - 1] > 100 + this.coords.grid_gap && (i[n - 1] = 100 + this.coords.grid_gap, t[n - 1] = this.toFixed(i[n - 1] - this.coords.big_p[n - 1]), this.coords.big_x[n - 1] = this.toFixed(this.coords.big_p[n - 1] - this.coords.grid_gap))), this.calcGridCollision(2, t, i), this.calcGridCollision(4, t, i), e = 0; e < n; e++) t = this.$cache.grid_labels[e][0], this.coords.big_x[e] !== Number.POSITIVE_INFINITY && (t.style.marginLeft = -this.coords.big_x[e] + "%")
            },
            calcGridCollision: function (e, t, i) {
                var n, s = this.coords.big_num;
                for (n = 0; n < s; n += e) {
                    var r = n + e / 2;
                    if (r >= s) break;
                    this.$cache.grid_labels[r][0].style.visibility = i[n] <= t[r] ? "visible" : "hidden"
                }
            },
            calcGridMargin: function () {
                this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_handle = "single" === this.options.type ? this.$cache.s_single.outerWidth(!1) : this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"))
            },
            update: function (t) {
                this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = e.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0))
            },
            reset: function () {
                this.input && (this.updateResult(), this.update())
            },
            destroy: function () {
                this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), this.options = this.input = null)
            }
        }, e.fn.ionRangeSlider = function (t) {
            return this.each((function () {
                e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new c(this, t, o++))
            }))
        },
        function () {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[t[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[t[n] + "CancelAnimationFrame"] || i[t[n] + "CancelRequestAnimationFrame"];
            i.requestAnimationFrame || (i.requestAnimationFrame = function (t, n) {
                var s = (new Date).getTime(),
                    r = Math.max(0, 16 - (s - e)),
                    a = i.setTimeout((function () {
                        t(s + r)
                    }), r);
                return e = s + r, a
            }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (e) {
                clearTimeout(e)
            })
        }()
})),
function (e) {
    e.fn.extend({
        accordion: function (t) {
            var i = e.extend({
                    accordion: "true",
                    speed: 300,
                    closedSign: "[+]",
                    openedSign: "[-]"
                }, t),
                n = e(this);
            n.find("li").each((function () {
                0 != e(this).find("ul").size() && (e(this).find("a:first").append("<span>" + i.closedSign + "</span>"), "#" == e(this).find("a:first").attr("href") && e(this).find("a:first").click((function () {
                    return !1
                })))
            })), n.find("li.active").each((function () {
                e(this).parents("ul").slideDown(i.speed), e(this).parents("ul").parent("li").find("span:first").html(i.openedSign)
            })), n.find("li a").click((function () {
                0 != e(this).parent().find("ul").size() && (i.accordion && (e(this).parent().find("ul").is(":visible") || (parents = e(this).parent().parents("ul"), visible = n.find("ul:visible"), visible.each((function (t) {
                    var n = !0;
                    parents.each((function (e) {
                        if (parents[e] == visible[t]) return n = !1, !1
                    })), n && e(this).parent().find("ul") != visible[t] && e(visible[t]).slideUp(i.speed, (function () {
                        e(this).parent("li").find("span:first").html(i.closedSign)
                    }))
                })))), e(this).parent().find("ul:first").is(":visible") ? e(this).parent().find("ul:first").slideUp(i.speed, (function () {
                    e(this).parent("li").find("span:first").delay(i.speed).html(i.closedSign)
                })) : e(this).parent().find("ul:first").slideDown(i.speed, (function () {
                    e(this).parent("li").find("span:first").delay(i.speed).html(i.openedSign)
                })))
            }))
        }
    })
}(jQuery),
function (e, t) {
    "function" == typeof define && define.amd ? define((function () {
        return t(e, e.document, void 0)
    })) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, e.document, void 0) : t(e, e.document, void 0)
}("undefined" != typeof window ? window : this, (function (e, t, i) {
    "use strict";
    var n, s, r, a, o = "object",
        l = "function",
        c = "array",
        d = "string",
        u = "boolean",
        h = "number",
        p = "null",
        f = {
            c: "class",
            s: "style",
            i: "id",
            l: "length",
            p: "prototype",
            ti: "tabindex",
            oH: "offsetHeight",
            cH: "clientHeight",
            sH: "scrollHeight",
            oW: "offsetWidth",
            cW: "clientWidth",
            sW: "scrollWidth",
            hOP: "hasOwnProperty",
            bCR: "getBoundingClientRect"
        },
        m = (n = {}, s = {}, {
            e: r = ["-webkit-", "-moz-", "-o-", "-ms-"],
            u: a = ["WebKit", "Moz", "O", "MS"],
            v: function (e) {
                var n = s[e];
                if (s[f.hOP](e)) return n;
                for (var a, o, l, c = v(e), d = t.createElement("div")[f.s], u = 0; u < r.length; u++)
                    for (l = r[u].replace(/-/g, ""), a = [e, r[u] + e, l + c, v(l) + c], o = 0; o < a[f.l]; o++)
                        if (d[a[o]] !== i) {
                            n = a[o];
                            break
                        } return s[e] = n
            },
            d: function (e, i, n) {
                var r = e + " " + i,
                    a = s[r];
                if (s[f.hOP](r)) return a;
                for (var o, l = t.createElement("div")[f.s], c = i.split(" "), d = n || "", u = 0, h = -1; u < c[f.l]; u++)
                    for (; h < m.e[f.l]; h++)
                        if (o = h < 0 ? c[u] : m.e[h] + c[u], l.cssText = e + ":" + o + d, l[f.l]) {
                            a = o;
                            break
                        } return s[r] = a
            },
            m: function (t, i, s) {
                var r = 0,
                    o = n[t];
                if (!n[f.hOP](t)) {
                    for (o = e[t]; r < a[f.l]; r++) o = o || e[(i ? a[r] : a[r].toLowerCase()) + v(t)];
                    n[t] = o
                }
                return o || s
            }
        });

    function v(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var g = {
        wW: b(y, 0, !0),
        wH: b(y, 0),
        mO: b(m.m, 0, "MutationObserver", !0),
        rO: b(m.m, 0, "ResizeObserver", !0),
        rAF: b(m.m, 0, "requestAnimationFrame", !1, (function (t) {
            return e.setTimeout(t, 1e3 / 60)
        })),
        cAF: b(m.m, 0, "cancelAnimationFrame", !1, (function (t) {
            return e.clearTimeout(t)
        })),
        now: function () {
            return Date.now && Date.now() || (new Date).getTime()
        },
        stpP: function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        },
        prvD: function (e) {
            e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1
        },
        page: function (e) {
            var n = ((e = e.originalEvent || e).target || e.srcElement || t).ownerDocument || t,
                s = n.documentElement,
                r = n.body;
            if (e.touches === i) return !e.pageX && e.clientX && null != e.clientX ? {
                x: e.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0),
                y: e.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)
            } : {
                x: e.pageX,
                y: e.pageY
            };
            var a = e.touches[0];
            return {
                x: a.pageX,
                y: a.pageY
            }
        },
        mBtn: function (e) {
            var t = e.button;
            return e.which || t === i ? e.which : 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0
        },
        inA: function (e, t) {
            for (var i = 0; i < t[f.l]; i++) try {
                if (t[i] === e) return i
            } catch (e) {}
            return -1
        },
        isA: function (e) {
            var t = Array.isArray;
            return t ? t(e) : this.type(e) == c
        },
        type: function (e) {
            return e === i || null === e ? e + "" : Object[f.p].toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        },
        bind: b
    };

    function y(i) {
        return i ? e.innerWidth || t.documentElement[f.cW] || t.body[f.cW] : e.innerHeight || t.documentElement[f.cH] || t.body[f.cH]
    }

    function b(e, t) {
        if (typeof e != l) throw "Can't bind function!";
        var i = f.p,
            n = Array[i].slice.call(arguments, 2),
            s = function () {},
            r = function () {
                return e.apply(this instanceof s ? this : t, n.concat(Array[i].slice.call(arguments)))
            };
        return e[i] && (s[i] = e[i]), r[i] = new s, r
    }
    var x, w, _, S, T, C, E, k, $ = Math,
        M = e.jQuery,
        P = (x = {
            p: $.PI,
            c: $.cos,
            s: $.sin,
            w: $.pow,
            t: $.sqrt,
            n: $.asin,
            a: $.abs,
            o: 1.70158
        }, {
            swing: function (e, t, i, n, s) {
                return .5 - x.c(e * x.p) / 2
            },
            linear: function (e, t, i, n, s) {
                return e
            },
            easeInQuad: function (e, t, i, n, s) {
                return n * (t /= s) * t + i
            },
            easeOutQuad: function (e, t, i, n, s) {
                return -n * (t /= s) * (t - 2) + i
            },
            easeInOutQuad: function (e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
            },
            easeInCubic: function (e, t, i, n, s) {
                return n * (t /= s) * t * t + i
            },
            easeOutCubic: function (e, t, i, n, s) {
                return n * ((t = t / s - 1) * t * t + 1) + i
            },
            easeInOutCubic: function (e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
            },
            easeInQuart: function (e, t, i, n, s) {
                return n * (t /= s) * t * t * t + i
            },
            easeOutQuart: function (e, t, i, n, s) {
                return -n * ((t = t / s - 1) * t * t * t - 1) + i
            },
            easeInOutQuart: function (e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
            },
            easeInQuint: function (e, t, i, n, s) {
                return n * (t /= s) * t * t * t * t + i
            },
            easeOutQuint: function (e, t, i, n, s) {
                return n * ((t = t / s - 1) * t * t * t * t + 1) + i
            },
            easeInOutQuint: function (e, t, i, n, s) {
                return (t /= s / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
            },
            easeInSine: function (e, t, i, n, s) {
                return -n * x.c(t / s * (x.p / 2)) + n + i
            },
            easeOutSine: function (e, t, i, n, s) {
                return n * x.s(t / s * (x.p / 2)) + i
            },
            easeInOutSine: function (e, t, i, n, s) {
                return -n / 2 * (x.c(x.p * t / s) - 1) + i
            },
            easeInExpo: function (e, t, i, n, s) {
                return 0 == t ? i : n * x.w(2, 10 * (t / s - 1)) + i
            },
            easeOutExpo: function (e, t, i, n, s) {
                return t == s ? i + n : n * (1 - x.w(2, -10 * t / s)) + i
            },
            easeInOutExpo: function (e, t, i, n, s) {
                return 0 == t ? i : t == s ? i + n : (t /= s / 2) < 1 ? n / 2 * x.w(2, 10 * (t - 1)) + i : n / 2 * (2 - x.w(2, -10 * --t)) + i
            },
            easeInCirc: function (e, t, i, n, s) {
                return -n * (x.t(1 - (t /= s) * t) - 1) + i
            },
            easeOutCirc: function (e, t, i, n, s) {
                return n * x.t(1 - (t = t / s - 1) * t) + i
            },
            easeInOutCirc: function (e, t, i, n, s) {
                return (t /= s / 2) < 1 ? -n / 2 * (x.t(1 - t * t) - 1) + i : n / 2 * (x.t(1 - (t -= 2) * t) + 1) + i
            },
            easeInElastic: function (e, t, i, n, s) {
                var r = x.o,
                    a = 0,
                    o = n;
                return 0 == t ? i : 1 == (t /= s) ? i + n : (a = a || .3 * s, r = o < x.a(n) ? (o = n, a / 4) : a / (2 * x.p) * x.n(n / o), -o * x.w(2, 10 * --t) * x.s((t * s - r) * (2 * x.p) / a) + i)
            },
            easeOutElastic: function (e, t, i, n, s) {
                var r = x.o,
                    a = 0,
                    o = n;
                return 0 == t ? i : 1 == (t /= s) ? i + n : (a = a || .3 * s, r = o < x.a(n) ? (o = n, a / 4) : a / (2 * x.p) * x.n(n / o), o * x.w(2, -10 * t) * x.s((t * s - r) * (2 * x.p) / a) + n + i)
            },
            easeInOutElastic: function (e, t, i, n, s) {
                var r = x.o,
                    a = 0,
                    o = n;
                return 0 == t ? i : 2 == (t /= s / 2) ? i + n : (a = a || s * (.3 * 1.5), r = o < x.a(n) ? (o = n, a / 4) : a / (2 * x.p) * x.n(n / o), t < 1 ? o * x.w(2, 10 * --t) * x.s((t * s - r) * (2 * x.p) / a) * -.5 + i : o * x.w(2, -10 * --t) * x.s((t * s - r) * (2 * x.p) / a) * .5 + n + i)
            },
            easeInBack: function (e, t, i, n, s, r) {
                return n * (t /= s) * t * (((r = r || x.o) + 1) * t - r) + i
            },
            easeOutBack: function (e, t, i, n, s, r) {
                return n * ((t = t / s - 1) * t * (((r = r || x.o) + 1) * t + r) + 1) + i
            },
            easeInOutBack: function (e, t, i, n, s, r) {
                return r = r || x.o, (t /= s / 2) < 1 ? n / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + i : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + i
            },
            easeInBounce: function (e, t, i, n, s) {
                return n - this.easeOutBounce(e, s - t, 0, n, s) + i
            },
            easeOutBounce: function (e, t, i, n, s) {
                var r = 7.5625;
                return (t /= s) < 1 / 2.75 ? n * (r * t * t) + i : t < 2 / 2.75 ? n * (r * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (r * (t -= 2.25 / 2.75) * t + .9375) + i : n * (r * (t -= 2.625 / 2.75) * t + .984375) + i
            },
            easeInOutBounce: function (e, t, i, n, s) {
                return t < s / 2 ? .5 * this.easeInBounce(e, 2 * t, 0, n, s) + i : .5 * this.easeOutBounce(e, 2 * t - s, 0, n, s) + .5 * n + i
            }
        }),
        L = (w = /[^\x20\t\r\n\f]+/g, _ = " ", S = "scrollLeft", T = "scrollTop", C = [], E = g.type, k = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, G[f.p] = {
            on: function (e, t) {
                var i, n = (e = (e || "").match(w) || [""])[f.l],
                    s = 0;
                return this.each((function () {
                    i = this;
                    try {
                        if (i.addEventListener)
                            for (; s < n; s++) i.addEventListener(e[s], t);
                        else if (i.detachEvent)
                            for (; s < n; s++) i.attachEvent("on" + e[s], t)
                    } catch (e) {}
                }))
            },
            off: function (e, t) {
                var i, n = (e = (e || "").match(w) || [""])[f.l],
                    s = 0;
                return this.each((function () {
                    i = this;
                    try {
                        if (i.removeEventListener)
                            for (; s < n; s++) i.removeEventListener(e[s], t);
                        else if (i.detachEvent)
                            for (; s < n; s++) i.detachEvent("on" + e[s], t)
                    } catch (e) {}
                }))
            },
            one: function (e, t) {
                return e = (e || "").match(w) || [""], this.each((function () {
                    var i = G(this);
                    G.each(e, (function (e, n) {
                        var s = function (e) {
                            t.call(this, e), i.off(n, s)
                        };
                        i.on(n, s)
                    }))
                }))
            },
            trigger: function (e) {
                var i, n;
                return this.each((function () {
                    i = this, t.createEvent ? ((n = t.createEvent("HTMLEvents")).initEvent(e, !0, !1), i.dispatchEvent(n)) : i.fireEvent("on" + e)
                }))
            },
            append: function (e) {
                return this.each((function () {
                    F(this, "beforeend", e)
                }))
            },
            prepend: function (e) {
                return this.each((function () {
                    F(this, "afterbegin", e)
                }))
            },
            before: function (e) {
                return this.each((function () {
                    F(this, "beforebegin", e)
                }))
            },
            after: function (e) {
                return this.each((function () {
                    F(this, "afterend", e)
                }))
            },
            remove: function () {
                return this.each((function () {
                    var e = this.parentNode;
                    null != e && e.removeChild(this)
                }))
            },
            unwrap: function () {
                var e, t, i, n = [];
                for (this.each((function () {
                        -1 === A(i = this.parentNode, n) && n.push(i)
                    })), e = 0; e < n[f.l]; e++) {
                    for (t = n[e], i = t.parentNode; t.firstChild;) i.insertBefore(t.firstChild, t);
                    i.removeChild(t)
                }
                return this
            },
            wrapAll: function (e) {
                for (var t, i = this, n = G(e)[0], s = n, r = i[0].parentNode, a = i[0].previousSibling; 0 < s.childNodes[f.l];) s = s.childNodes[0];
                for (t = 0; i[f.l] - t; s.firstChild === i[0] && t++) s.appendChild(i[t]);
                var o = a ? a.nextSibling : r.firstChild;
                return r.insertBefore(n, o), this
            },
            wrapInner: function (e) {
                return this.each((function () {
                    var t = G(this),
                        i = t.contents();
                    i[f.l] ? i.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function (e) {
                return this.each((function () {
                    G(this).wrapAll(e)
                }))
            },
            css: function (t, n) {
                var s, r, a, o = e.getComputedStyle;
                return E(t) == d ? n === i ? (s = this[0], a = o ? o(s, null) : s.currentStyle[t], o ? null != a ? a.getPropertyValue(t) : s[f.s][t] : a) : this.each((function () {
                    B(this, t, n)
                })) : this.each((function () {
                    for (r in t) B(this, r, t[r])
                }))
            },
            hasClass: function (e) {
                for (var t, i, n = 0, s = _ + e + _; t = this[n++];) {
                    if ((i = t.classList) && i.contains(e)) return !0;
                    if (1 === t.nodeType && -1 < (_ + H(t.className + "") + _).indexOf(s)) return !0
                }
                return !1
            },
            addClass: function (e) {
                var t, n, s, r, a, o, l, c, d = 0,
                    u = 0;
                if (e)
                    for (t = e.match(w) || []; n = this[d++];)
                        if (c = n.classList, l === i && (l = c !== i), l)
                            for (; a = t[u++];) c.add(a);
                        else if (r = n.className + "", s = 1 === n.nodeType && _ + H(r) + _) {
                    for (; a = t[u++];) s.indexOf(_ + a + _) < 0 && (s += a + _);
                    r !== (o = H(s)) && (n.className = o)
                }
                return this
            },
            removeClass: function (e) {
                var t, n, s, r, a, o, l, c, d = 0,
                    u = 0;
                if (e)
                    for (t = e.match(w) || []; n = this[d++];)
                        if (c = n.classList, l === i && (l = c !== i), l)
                            for (; a = t[u++];) c.remove(a);
                        else if (r = n.className + "", s = 1 === n.nodeType && _ + H(r) + _) {
                    for (; a = t[u++];)
                        for (; - 1 < s.indexOf(_ + a + _);) s = s.replace(_ + a + _, _);
                    r !== (o = H(s)) && (n.className = o)
                }
                return this
            },
            hide: function () {
                return this.each((function () {
                    this[f.s].display = "none"
                }))
            },
            show: function () {
                return this.each((function () {
                    this[f.s].display = "block"
                }))
            },
            attr: function (e, t) {
                for (var n, s = 0; n = this[s++];) {
                    if (t === i) return n.getAttribute(e);
                    n.setAttribute(e, t)
                }
                return this
            },
            removeAttr: function (e) {
                return this.each((function () {
                    this.removeAttribute(e)
                }))
            },
            offset: function () {
                var i = this[0][f.bCR](),
                    n = e.pageXOffset || t.documentElement[S],
                    s = e.pageYOffset || t.documentElement[T];
                return {
                    top: i.top + s,
                    left: i.left + n
                }
            },
            position: function () {
                var e = this[0];
                return {
                    top: e.offsetTop,
                    left: e.offsetLeft
                }
            },
            scrollLeft: function (e) {
                for (var t, n = 0; t = this[n++];) {
                    if (e === i) return t[S];
                    t[S] = e
                }
                return this
            },
            scrollTop: function (e) {
                for (var t, n = 0; t = this[n++];) {
                    if (e === i) return t[T];
                    t[T] = e
                }
                return this
            },
            val: function (e) {
                var t = this[0];
                return e ? (t.value = e, this) : t.value
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                return G(this[0 <= e ? e : this[f.l] + e])
            },
            find: function (e) {
                var t, i = [];
                return this.each((function () {
                    var n = this.querySelectorAll(e);
                    for (t = 0; t < n[f.l]; t++) i.push(n[t])
                })), G(i)
            },
            children: function (e) {
                var t, i, n, s = [];
                return this.each((function () {
                    for (i = this.children, n = 0; n < i[f.l]; n++) t = i[n], (!e || t.matches && t.matches(e) || j(t, e)) && s.push(t)
                })), G(s)
            },
            parent: function (e) {
                var t, i = [];
                return this.each((function () {
                    t = this.parentNode, e && !G(t).is(e) || i.push(t)
                })), G(i)
            },
            is: function (e) {
                var t, i;
                for (i = 0; i < this[f.l]; i++) {
                    if (t = this[i], ":visible" === e) return V(t);
                    if (":hidden" === e) return !V(t);
                    if (t.matches && t.matches(e) || j(t, e)) return !0
                }
                return !1
            },
            contents: function () {
                var e, t, i = [];
                return this.each((function () {
                    for (e = this.childNodes, t = 0; t < e[f.l]; t++) i.push(e[t])
                })), G(i)
            },
            each: function (e) {
                return q(this, e)
            },
            animate: function (e, t, i, n) {
                return this.each((function () {
                    X(this, e, t, i, n)
                }))
            },
            stop: function (e, t) {
                return this.each((function () {
                    ! function (e, t, i) {
                        for (var n, s, r, a = 0; a < C[f.l]; a++)
                            if ((n = C[a]).el === e) {
                                if (0 < n.q[f.l]) {
                                    if ((s = n.q[0]).stop = !0, g.cAF()(s.frame), n.q.splice(0, 1), i)
                                        for (r in s.props) R(e, r, s.props[r]);
                                    t ? n.q = [] : W(n, !1)
                                }
                                break
                            }
                    }(this, e, t)
                }))
            }
        }, D(G, {
            extend: D,
            inArray: A,
            isEmptyObject: O,
            isPlainObject: z,
            each: q
        }), G);

    function D() {
        var e, t, n, s, r, a, c = arguments[0] || {},
            d = 1,
            h = arguments[f.l],
            p = !1;
        for (E(c) == u && (p = c, c = arguments[1] || {}, d = 2), E(c) != o && !E(c) == l && (c = {}), h === d && (c = G, --d); d < h; d++)
            if (null != (r = arguments[d]))
                for (s in r) e = c[s], c !== (n = r[s]) && (p && n && (z(n) || (t = g.isA(n))) ? (a = t ? (t = !1, e && g.isA(e) ? e : []) : e && z(e) ? e : {}, c[s] = D(p, a, n)) : n !== i && (c[s] = n));
        return c
    }

    function A(e, t, i) {
        for (var n = i || 0; n < t[f.l]; n++)
            if (t[n] === e) return n;
        return -1
    }

    function N(e) {
        return E(e) == l
    }

    function O(e) {
        for (var t in e) return !1;
        return !0
    }

    function z(e) {
        if (!e || E(e) != o) return !1;
        var t, i = f.p,
            n = Object[i].hasOwnProperty,
            s = n.call(e, "constructor"),
            r = e.constructor && e.constructor[i] && n.call(e.constructor[i], "isPrototypeOf");
        if (e.constructor && !s && !r) return !1;
        for (t in e);
        return "undefined" == E(t) || n.call(e, t)
    }

    function q(e, t) {
        var i = 0;
        if (I(e))
            for (; i < e[f.l] && !1 !== t.call(e[i], i, e[i]); i++);
        else
            for (i in e)
                if (!1 === t.call(e[i], i, e[i])) break;
        return e
    }

    function I(e) {
        var t = !!e && [f.l] in e && e[f.l],
            i = E(e);
        return !N(i) && (i == c || 0 === t || E(t) == h && 0 < t && t - 1 in e)
    }

    function H(e) {
        return (e.match(w) || []).join(_)
    }

    function j(e, i) {
        for (var n = (e.parentNode || t).querySelectorAll(i) || [], s = n[f.l]; s--;)
            if (n[s] == e) return 1
    }

    function F(e, t, i) {
        if (g.isA(i))
            for (var n = 0; n < i[f.l]; n++) F(e, t, i[n]);
        else E(i) == d ? e.insertAdjacentHTML(t, i) : e.insertAdjacentElement(t, i.nodeType ? i : i[0])
    }

    function B(e, t, n) {
        try {
            e[f.s][t] !== i && (e[f.s][t] = function (e, t) {
                return k[e.toLowerCase()] || E(t) != h || (t += "px"), t
            }(t, n))
        } catch (e) {}
    }

    function W(e, t) {
        var i, n;
        !1 !== t && e.q.splice(0, 1), 0 < e.q[f.l] ? (n = e.q[0], X(e.el, n.props, n.duration, n.easing, n.complete, !0)) : -1 < (i = A(e, C)) && C.splice(i, 1)
    }

    function R(e, t, i) {
        t === S || t === T ? e[t] = i : B(e, t, i)
    }

    function X(e, t, n, s, r, a) {
        var o, l, c, d, u, h, p = z(n),
            m = {},
            v = {},
            y = 0;
        for (h = p ? (s = n.easing, n.start, c = n.progress, d = n.step, u = n.specialEasing, r = n.complete, n.duration) : n, u = u || {}, h = h || 400, s = s || "swing", a = a || !1; y < C[f.l]; y++)
            if (C[y].el === e) {
                l = C[y];
                break
            } for (o in l || (l = {
                el: e,
                q: []
            }, C.push(l)), t) m[o] = o === S || o === T ? e[o] : G(e).css(o);
        for (o in m) m[o] !== t[o] && t[o] !== i && (v[o] = t[o]);
        if (O(v)) a && W(l);
        else {
            var b, x, w, _, E, k, M, L, D, q = a ? 0 : A(I, l.q),
                I = {
                    props: v,
                    duration: p ? n : h,
                    easing: s,
                    complete: r
                };
            if (-1 === q && (q = l.q[f.l], l.q.push(I)), 0 === q)
                if (0 < h) M = g.now(), L = function () {
                    for (o in b = g.now(), D = b - M, x = I.stop || h <= D, w = 1 - ($.max(0, M + h - b) / h || 0), v) _ = parseFloat(m[o]), E = parseFloat(v[o]), k = (E - _) * P[u[o] || s](w, w * h, 0, 1, h) + _, R(e, o, k), N(d) && d(k, {
                        elem: e,
                        prop: o,
                        start: _,
                        now: k,
                        end: E,
                        pos: w,
                        options: {
                            easing: s,
                            speacialEasing: u,
                            duration: h,
                            complete: r,
                            step: d
                        },
                        startTime: M
                    });
                    N(c) && c({}, w, $.max(0, h - D)), x ? (W(l), N(r) && r()) : I.frame = g.rAF()(L)
                }, I.frame = g.rAF()(L);
                else {
                    for (o in v) R(e, o, v[o]);
                    W(l)
                }
        }
    }

    function V(e) {
        return !!(e[f.oW] || e[f.oH] || e.getClientRects()[f.l])
    }

    function G(i) {
        if (0 === arguments[f.l]) return this;
        var n, s, r = new G,
            a = i,
            o = 0;
        if (E(i) == d)
            for (a = [], n = "<" === i.charAt(0) ? ((s = t.createElement("div")).innerHTML = i, s.children) : t.querySelectorAll(i); o < n[f.l]; o++) a.push(n[o]);
        if (a) {
            for (E(a) == d || I(a) && a !== e && a !== a.self || (a = [a]), o = 0; o < a[f.l]; o++) r[o] = a[o];
            r[f.l] = a[f.l]
        }
        return r
    }
    var Y, U, K, Q, J, Z, ee, te, ie, ne, se, re, ae, oe, le = (Y = [], U = "__overlayScrollbars__", function (e, t) {
            var i = arguments[f.l];
            if (i < 1) return Y;
            if (t) e[U] = t, Y.push(e);
            else {
                var n = g.inA(e, Y);
                if (-1 < n) {
                    if (!(1 < i)) return Y[n][U];
                    delete e[U], Y.splice(n, 1)
                }
            }
        }),
        ce = (ae = [], Z = g.type, se = {
            className: ["os-theme-dark", [p, d]],
            resize: ["none", "n:none b:both h:horizontal v:vertical"],
            sizeAutoCapable: te = [!0, u],
            clipAlways: te,
            normalizeRTL: te,
            paddingAbsolute: ie = [!(ee = [u, h, d, c, o, l, p]), u],
            autoUpdate: [null, [p, u]],
            autoUpdateInterval: [33, h],
            updateOnLoad: [
                ["img"],
                [d, c, p]
            ],
            nativeScrollbarsOverlaid: {
                showNativeScrollbars: ie,
                initialize: te
            },
            overflowBehavior: {
                x: ["scroll", "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"],
                y: ["scroll", "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"]
            },
            scrollbars: {
                visibility: ["auto", "v:visible h:hidden a:auto"],
                autoHide: ["never", "n:never s:scroll l:leave m:move"],
                autoHideDelay: [800, h],
                dragScrolling: te,
                clickScrolling: ie,
                touchSupport: te,
                snapHandle: ie
            },
            textarea: {
                dynWidth: ie,
                dynHeight: ie,
                inheritedAttrs: [
                    ["style", "class"],
                    [d, c, p]
                ]
            },
            callbacks: {
                onInitialized: ne = [null, [p, l]],
                onInitializationWithdrawn: ne,
                onDestroyed: ne,
                onScrollStart: ne,
                onScroll: ne,
                onScrollStop: ne,
                onOverflowChanged: ne,
                onOverflowAmountChanged: ne,
                onDirectionChanged: ne,
                onContentSizeChanged: ne,
                onHostSizeChanged: ne,
                onUpdated: ne
            }
        }, oe = {
            g: (re = function (e) {
                var t = function (i) {
                    var n, s, r;
                    for (n in i) i[f.hOP](n) && (s = i[n], (r = Z(s)) == c ? i[n] = s[e ? 1 : 0] : r == o && (i[n] = t(s)));
                    return i
                };
                return t(L.extend(!0, {}, se))
            })(),
            _: re(!0),
            O: function (t, n, s, r) {
                var a = {},
                    l = {},
                    c = L.extend(!0, {}, t),
                    u = L.inArray,
                    h = L.isEmptyObject,
                    p = function (e, t, n, r, a, l) {
                        for (var c in t)
                            if (t[f.hOP](c) && e[f.hOP](c)) {
                                var m, v, y, b, x, w, _, S, T = !1,
                                    C = !1,
                                    E = t[c],
                                    k = Z(E),
                                    $ = k == o,
                                    M = g.isA(E) ? E : [E],
                                    P = n[c],
                                    D = e[c],
                                    A = Z(D),
                                    N = l ? l + "." : "",
                                    O = 'The option "' + N + c + "\" wasn't set, because",
                                    z = [],
                                    q = [];
                                if (P = P === i ? {} : P, $ && A == o) r[c] = {}, a[c] = {}, p(D, E, P, r[c], a[c], N + c), L.each([e, r, a], (function (e, t) {
                                    h(t[c]) && delete t[c]
                                }));
                                else if (!$) {
                                    for (w = 0; w < M[f.l]; w++)
                                        if (x = M[w], y = (k = Z(x)) == d && -1 === u(x, ee))
                                            for (z.push(d), m = x.split(" "), q = q.concat(m), _ = 0; _ < m[f.l]; _++) {
                                                for (b = (v = m[_].split(":"))[0], S = 0; S < v[f.l]; S++)
                                                    if (D === v[S]) {
                                                        T = !0;
                                                        break
                                                    } if (T) break
                                            } else if (z.push(x), A === x) {
                                                T = !0;
                                                break
                                            } T ? ((C = D !== P) && (r[c] = D), (y ? u(P, v) < 0 : C) && (a[c] = y ? b : D)) : s && console.warn(O + " it doesn't accept the type [ " + A.toUpperCase() + ' ] with the value of "' + D + '".\r\nAccepted types are: [ ' + z.join(", ").toUpperCase() + " ]." + (0 < q[length] ? "\r\nValid strings are: [ " + q.join(", ").split(":").join(", ") + " ]." : "")), delete e[c]
                                }
                            }
                    };
                return p(c, n, r || {}, a, l), !h(c) && s && console.warn("The following options are discarded due to invalidity:\r\n" + e.JSON.stringify(c, null, 2)), {
                    S: a,
                    z: l
                }
            }
        }, (K = e.OverlayScrollbars = function (e, t, n) {
            if (0 === arguments[f.l]) return this;
            var s, r, a = [],
                o = L.isPlainObject(t);
            return e ? (e = e[f.l] != i ? e : [e[0] || e], de(), 0 < e[f.l] && (o ? L.each(e, (function (e, r) {
                (s = r) !== i && a.push(pe(s, t, n, Q, J))
            })) : L.each(e, (function (e, n) {
                s = le(n), ("!" === t && K.valid(s) || g.type(t) == l && t(n, s) || t === i) && a.push(s)
            })), r = 1 === a[f.l] ? a[0] : a), r) : o || !t ? r : a
        }).globals = function () {
            de();
            var e = L.extend(!0, {}, Q);
            return delete e.msie, e
        }, K.defaultOptions = function (e) {
            de();
            var t = Q.defaultOptions;
            if (e === i) return L.extend(!0, {}, t);
            Q.defaultOptions = L.extend(!0, {}, t, oe.O(e, oe._, !0, t).S)
        }, K.valid = function (e) {
            return e instanceof K && !e.getState().destroyed
        }, K.extension = function (e, t, i) {
            var n = g.type(e) == d,
                s = arguments[f.l],
                r = 0;
            if (s < 1 || !n) return L.extend(!0, {
                length: ae[f.l]
            }, ae);
            if (n)
                if (g.type(t) == l) ae.push({
                    name: e,
                    extensionFactory: t,
                    defaultOptions: i
                });
                else
                    for (; r < ae[f.l]; r++)
                        if (ae[r].name === e) {
                            if (!(1 < s)) return L.extend(!0, {}, ae[r]);
                            ae.splice(r, 1)
                        }
        }, K);

    function de() {
        Q = Q || new ue(oe.g), J = J || new he(Q)
    }

    function ue(t) {
        var i = this,
            n = "overflow",
            s = L("body"),
            r = L('<div id="os-dummy-scrollbar-size"><div></div></div>'),
            a = r[0],
            o = L(r.children("div").eq(0));
        s.append(r), r.hide().show();
        var l, c, d, u, h, p, v, y, b, x = S(a),
            w = {
                x: 0 === x.x,
                y: 0 === x.y
            },
            _ = (u = "substring", h = (c = e.navigator.userAgent)[d = "indexOf"]("MSIE "), p = c[d]("Trident/"), v = c[d]("Edge/"), y = c[d]("rv:"), b = parseInt, 0 < h ? l = b(c[u](h + 5, c[d](".", h)), 10) : 0 < p ? l = b(c[u](y + 3, c[d](".", y)), 10) : 0 < v && (l = b(c[u](v + 5, c[d](".", v)), 10)), l);

        function S(e) {
            return {
                x: e[f.oH] - e[f.cH],
                y: e[f.oW] - e[f.cW]
            }
        }
        L.extend(i, {
                defaultOptions: t,
                msie: _,
                autoUpdateLoop: !1,
                autoUpdateRecommended: !g.mO(),
                nativeScrollbarSize: x,
                nativeScrollbarIsOverlaid: w,
                nativeScrollbarStyling: function () {
                    var t = !1;
                    r.addClass("os-viewport-native-scrollbars-invisible");
                    try {
                        t = "none" === r.css("scrollbar-width") && (9 < _ || !_) || "none" === e.getComputedStyle(a, "::-webkit-scrollbar").getPropertyValue("display")
                    } catch (e) {}
                    return t
                }(),
                overlayScrollbarDummySize: {
                    x: 30,
                    y: 30
                },
                cssCalc: m.d("width", "calc", "(1px)") || null,
                restrictedMeasuring: function () {
                    r.css(n, "hidden");
                    var e = a[f.sW],
                        t = a[f.sH];
                    r.css(n, "visible");
                    var i = a[f.sW],
                        s = a[f.sH];
                    return e - i != 0 || t - s != 0
                }(),
                rtlScrollBehavior: function () {
                    r.css({
                        "overflow-y": "hidden",
                        "overflow-x": "scroll",
                        direction: "rtl"
                    }).scrollLeft(0);
                    var e = r.offset(),
                        t = o.offset();
                    r.scrollLeft(-999);
                    var i = o.offset();
                    return {
                        i: e.left === t.left,
                        n: t.left !== i.left
                    }
                }(),
                supportTransform: !!m.v("transform"),
                supportTransition: !!m.v("transition"),
                supportPassiveEvents: function () {
                    var t = !1;
                    try {
                        e.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0
                            }
                        }))
                    } catch (e) {}
                    return t
                }(),
                supportResizeObserver: !!g.rO(),
                supportMutationObserver: !!g.mO()
            }), r.removeAttr(f.s).remove(),
            function () {
                if (!w.x || !w.y) {
                    var t = $.abs,
                        n = g.wW(),
                        a = g.wH(),
                        o = l();
                    L(e).on("resize", (function () {
                        if (0 < le().length) {
                            var e = g.wW(),
                                c = g.wH(),
                                d = e - n,
                                u = c - a;
                            if (0 == d && 0 == u) return;
                            var h, p = $.round(e / (n / 100)),
                                f = $.round(c / (a / 100)),
                                m = t(d),
                                v = t(u),
                                y = t(p),
                                b = t(f),
                                x = l(),
                                w = 2 < m && 2 < v,
                                _ = ! function (e, i) {
                                    var n = t(e),
                                        s = t(i);
                                    return n !== s && n + 1 !== s && n - 1 !== s
                                }(y, b),
                                T = w && _ && x !== o && 0 < o,
                                C = i.nativeScrollbarSize;
                            T && (s.append(r), h = i.nativeScrollbarSize = S(r[0]), r.remove(), C.x === h.x && C.y === h.y || L.each(le(), (function () {
                                le(this) && le(this).update("zoom")
                            }))), n = e, a = c, o = x
                        }
                    }))
                }

                function l() {
                    var t = e.screen.deviceXDPI || 0,
                        i = e.screen.logicalXDPI || 1;
                    return e.devicePixelRatio || t / i
                }
            }()
    }

    function he(e) {
        var t, n = L.inArray,
            s = g.now,
            r = f.l,
            a = [],
            o = [],
            l = !1,
            c = 33,
            d = s(),
            u = function () {
                if (0 < a[r] && l) {
                    t = g.rAF()((function () {
                        u()
                    }));
                    var e, n, h, p, f, m, v = s(),
                        y = v - d;
                    if (c < y) {
                        d = v - y % c, e = 33;
                        for (var b = 0; b < a[r]; b++)(n = a[b]) !== i && (p = (h = n.options()).autoUpdate, f = $.max(1, h.autoUpdateInterval), m = s(), (!0 === p || null === p) && m - o[b] > f && (n.update("auto"), o[b] = new Date(m += f)), e = $.max(1, $.min(e, f)));
                        c = e
                    }
                } else c = 33
            };
        this.add = function (t) {
            -1 === n(t, a) && (a.push(t), o.push(s()), 0 < a[r] && !l && (l = !0, e.autoUpdateLoop = l, u()))
        }, this.remove = function (s) {
            var c = n(s, a); - 1 < c && (o.splice(c, 1), a.splice(c, 1), 0 === a[r] && l && (l = !1, e.autoUpdateLoop = l, t !== i && (g.cAF()(t), t = -1)))
        }
    }

    function pe(n, s, r, a, p) {
        var v = g.type,
            y = L.inArray,
            b = L.each,
            x = new K,
            w = L[f.p];
        if (us(n)) {
            if (le(n)) {
                var _ = le(n);
                return _.options(s), _
            }
            var S, T, C, E, k, P, D, A, N, O, z, q, I, H, j, F, B, W, R, X, V, G, Y, U, Q, J, Z, ee, te, ie, ne, se, re, ae, ce, de, ue, he, pe, fe, me, ve, ge, ye, be, xe, we, _e, Se, Te, Ce, Ee, ke, $e, Me, Pe, Le, De, Ae, Ne, Oe, ze, qe, Ie, He, je, Fe, Be, We, Re, Xe, Ve, Ge, Ye, Ue, Ke, Qe, Je, Ze, et, tt, it, nt, st, rt, at, ot, lt, ct, dt, ut, ht, pt, ft, mt, vt, gt, yt, bt, xt, wt, _t, St, Tt, Ct, Et, kt, $t, Mt, Pt, Lt, Dt, At, Nt, Ot, zt, qt, It, Ht, jt, Ft = {},
                Bt = {},
                Wt = {},
                Rt = {},
                Xt = {},
                Vt = "-hidden",
                Gt = "margin-",
                Yt = "padding-",
                Ut = "border-",
                Kt = "top",
                Qt = "right",
                Jt = "bottom",
                Zt = "left",
                ei = "min-",
                ti = "max-",
                ii = "width",
                ni = "height",
                si = "float",
                ri = "",
                ai = "auto",
                oi = "sync",
                li = "scroll",
                ci = "100%",
                di = "x",
                ui = "y",
                hi = ".",
                pi = " ",
                fi = "scrollbar",
                mi = "-horizontal",
                vi = "-vertical",
                gi = li + "Left",
                yi = li + "Top",
                bi = "mousedown touchstart",
                xi = "mouseup touchend touchcancel",
                wi = "mousemove touchmove",
                _i = "mouseenter",
                Si = "mouseleave",
                Ti = "keydown",
                Ci = "keyup",
                Ei = "selectstart",
                ki = "transitionend webkitTransitionEnd oTransitionEnd",
                $i = "__overlayScrollbarsRO__",
                Mi = "os-html",
                Pi = "os-host",
                Li = Pi + "-foreign",
                Di = Pi + "-textarea",
                Ai = Pi + "-" + fi + mi + Vt,
                Ni = Pi + "-" + fi + vi + Vt,
                Oi = Pi + "-transition",
                zi = Pi + "-rtl",
                qi = Pi + "-resize-disabled",
                Ii = Pi + "-scrolling",
                Hi = Pi + "-overflow",
                ji = (Hi = Pi + "-overflow") + "-x",
                Fi = Hi + "-y",
                Bi = "os-textarea",
                Wi = Bi + "-cover",
                Ri = "os-padding",
                Xi = "os-viewport",
                Vi = Xi + "-native-scrollbars-invisible",
                Gi = Xi + "-native-scrollbars-overlaid",
                Yi = "os-content",
                Ui = "os-content-arrange",
                Ki = "os-content-glue",
                Qi = "os-size-auto-observer",
                Ji = "os-resize-observer",
                Zi = "os-resize-observer-item",
                en = Zi + "-final",
                tn = "os-text-inherit",
                nn = "os-" + fi,
                sn = nn + "-track",
                rn = sn + "-off",
                an = nn + "-handle",
                on = an + "-off",
                ln = nn + "-unusable",
                cn = nn + "-" + ai + Vt,
                dn = nn + "-corner",
                un = dn + "-resize",
                hn = un + "-both",
                pn = un + mi,
                fn = un + vi,
                mn = nn + mi,
                vn = nn + vi,
                gn = "os-dragging",
                yn = "os-theme-none",
                bn = [Vi, Gi, rn, on, ln, cn, un, hn, pn, fn, gn].join(pi),
                xn = [],
                wn = [f.ti],
                _n = {},
                Sn = {},
                Tn = 42,
                Cn = "load",
                En = [],
                kn = {},
                $n = ["wrap", "cols", "rows"],
                Mn = [f.i, f.c, f.s, "open"].concat(wn),
                Pn = [];
            return x.sleep = function () {
                te = !0
            }, x.update = function (e) {
                var t, n, s, r, a;
                if (!j) return v(e) == d ? e === ai ? (t = function () {
                    if (!te && !Et) {
                        var e, t, n, s = [],
                            r = [{
                                C: fe,
                                k: Mn.concat(":visible")
                            }, {
                                C: F ? pe : i,
                                k: $n
                            }];
                        return b(r, (function (i, r) {
                            (e = r.C) && b(r.k, (function (i, r) {
                                t = ":" === r.charAt(0) ? e.is(r) : e.attr(r), n = kn[r], bs(t, n) && s.push(r), kn[r] = t
                            }))
                        })), Xn(s), 0 < s[f.l]
                    }
                }(), n = function () {
                    if (te) return !1;
                    var e, t, i, n, s = fs(),
                        r = F && Re && !vt ? pe.val().length : 0,
                        a = !Et && Re && !F,
                        o = {};
                    return a && (e = be.css(si), o[si] = ee ? Qt : Zt, o[ii] = ai, be.css(o)), n = {
                        w: s[f.sW] + r,
                        h: s[f.sH] + r
                    }, a && (o[si] = e, o[ii] = ci, be.css(o)), t = Wn(), i = bs(n, at), at = n, i || t
                }(), (s = t || n) && Gn({
                    I: n,
                    T: H ? i : se
                })) : e === oi ? Et ? (r = Tt(_t.takeRecords()), a = Ct(St.takeRecords())) : r = x.update(ai) : "zoom" === e && Gn({
                    A: !0,
                    I: !0
                }) : (e = te || e, te = !1, x.update(oi) && !e || Gn({
                    H: e
                })), Yn(), s || r || a
            }, x.options = function (e, t) {
                var i, n = {};
                if (L.isEmptyObject(e) || !L.isPlainObject(e)) {
                    if (v(e) != d) return ne;
                    if (!(1 < arguments.length)) return gs(ne, e);
                    ! function (e, t, i) {
                        for (var n = t.split(hi), s = n.length, r = 0, a = {}, o = a; r < s; r++) a = a[n[r]] = r + 1 < s ? {} : i;
                        L.extend(e, o, !0)
                    }(n, e, t), i = Un(n)
                } else i = Un(e);
                L.isEmptyObject(i) || Gn({
                    T: i
                })
            }, x.destroy = function () {
                if (!j) {
                    for (var e in p.remove(x), On(), An(ve), An(me), _n) x.removeExt(e);
                    for (; 0 < Pn[f.l];) Pn.pop()();
                    Bn(!0), we && Ts(we), xe && Ts(xe), V && Ts(me), Qn(!0), rs(!0), Kn(!0);
                    for (var t = 0; t < En[f.l]; t++) L(En[t]).off(Cn, Fn);
                    En = i, te = j = !0, le(n, 0), as("onDestroyed")
                }
            }, x.scroll = function (e, t, n, s) {
                if (0 === arguments.length || e === i) {
                    var r = pt && ee && C.i,
                        a = pt && ee && C.n,
                        p = Bt.L,
                        m = Bt.R,
                        b = Bt.N;
                    return m = r ? 1 - m : m, p = r ? b - p : p, b *= a ? -1 : 1, {
                        position: {
                            x: p *= a ? -1 : 1,
                            y: Wt.L
                        },
                        ratio: {
                            x: m,
                            y: Wt.R
                        },
                        max: {
                            x: b,
                            y: Wt.N
                        },
                        handleOffset: {
                            x: Bt.W,
                            y: Wt.W
                        },
                        handleLength: {
                            x: Bt.M,
                            y: Wt.M
                        },
                        handleLengthRatio: {
                            x: Bt.D,
                            y: Wt.D
                        },
                        trackLength: {
                            x: Bt.F,
                            y: Wt.F
                        },
                        snappedHandleOffset: {
                            x: Bt.P,
                            y: Wt.P
                        },
                        isRTL: ee,
                        isRTLNormalized: pt
                    }
                }
                x.update(oi);
                var w, _, S, T, E, k, P, D, A, N = pt,
                    z = [di, Zt, "l"],
                    q = [ui, Kt, "t"],
                    I = ["+=", "-=", "*=", "/="],
                    H = v(t) == o,
                    j = H ? t.complete : s,
                    F = {},
                    B = {},
                    W = "begin",
                    R = "nearest",
                    X = "never",
                    V = "ifneeded",
                    G = f.l,
                    Y = [di, ui, "xy", "yx"],
                    U = [W, "end", "center", R],
                    K = ["always", X, V],
                    Q = e[f.hOP]("el"),
                    J = Q ? e.el : e,
                    Z = !!(J instanceof L || M) && J instanceof M,
                    te = !Z && us(J),
                    ie = function () {
                        _ && is(!0), S && is(!1)
                    },
                    ne = v(j) != l ? i : function () {
                        ie(), j()
                    };

                function se(e, t) {
                    for (w = 0; w < t[G]; w++)
                        if (e === t[w]) return 1
                }

                function re(e, t) {
                    var i = e ? z : q;
                    if (t = v(t) == d || v(t) == h ? [t, t] : t, g.isA(t)) return e ? t[0] : t[1];
                    if (v(t) == o)
                        for (w = 0; w < i[G]; w++)
                            if (i[w] in t) return t[i[w]]
                }

                function ae(e, t) {
                    var n, s, r, a, o = v(t) == d,
                        l = e ? Bt : Wt,
                        c = l.L,
                        u = l.N,
                        p = ee && e,
                        f = p && C.n && !N,
                        m = "replace",
                        g = eval;
                    if ((s = o ? (2 < t[G] && (a = t.substr(0, 2), -1 < y(a, I) && (n = a)), t = (t = n ? t.substr(2) : t)[m](/min/g, 0)[m](/</g, 0)[m](/max/g, (f ? "-" : ri) + ci)[m](/>/g, (f ? "-" : ri) + ci)[m](/px/g, ri)[m](/%/g, " * " + u * (p && C.n ? -1 : 1) / 100)[m](/vw/g, " * " + Rt.w)[m](/vh/g, " * " + Rt.h), hs(isNaN(t) ? hs(g(t), !0).toFixed() : t)) : t) !== i && !isNaN(s) && v(s) == h) {
                        var b = N && p,
                            x = c * (b && C.n ? -1 : 1),
                            w = b && C.i,
                            _ = b && C.n;
                        switch (x = w ? u - x : x, n) {
                            case "+=":
                                r = x + s;
                                break;
                            case "-=":
                                r = x - s;
                                break;
                            case "*=":
                                r = x * s;
                                break;
                            case "/=":
                                r = x / s;
                                break;
                            default:
                                r = s
                        }
                        r = w ? u - r : r, r *= _ ? -1 : 1, r = p && C.n ? $.min(0, $.max(u, r)) : $.max(0, $.min(u, r))
                    }
                    return r === c ? i : r
                }

                function oe(e, t, i, n) {
                    var s, r, a = [i, i],
                        l = v(e);
                    if (l == t) e = [e, e];
                    else if (l == c) {
                        if (2 < (s = e[G]) || s < 1) e = a;
                        else
                            for (1 === s && (e[1] = i), w = 0; w < s; w++)
                                if (r = e[w], v(r) != t || !se(r, n)) {
                                    e = a;
                                    break
                                }
                    } else e = l == o ? [e[di] || i, e[ui] || i] : a;
                    return {
                        x: e[0],
                        y: e[1]
                    }
                }

                function le(e) {
                    var t, i, n = [],
                        s = [Kt, Qt, Jt, Zt];
                    for (w = 0; w < e[G] && w !== s[G]; w++) t = e[w], (i = v(t)) == u ? n.push(t ? hs(A.css(Gt + s[w])) : 0) : n.push(i == h ? t : 0);
                    return n
                }
                if (Z || te) {
                    var ce, de = Q ? e.margin : 0,
                        ue = Q ? e.axis : 0,
                        he = Q ? e.scroll : 0,
                        pe = Q ? e.block : 0,
                        fe = [0, 0, 0, 0],
                        me = v(de);
                    if (0 < (A = Z ? J : L(J))[G]) {
                        de = me == h || me == u ? le([de, de, de, de]) : me == c ? 2 === (ce = de[G]) ? le([de[0], de[1], de[0], de[1]]) : 4 <= ce ? le(de) : fe : me == o ? le([de[Kt], de[Qt], de[Jt], de[Zt]]) : fe, E = se(ue, Y) ? ue : "xy", k = oe(he, d, "always", K), P = oe(pe, d, W, U), D = de;
                        var ve = Bt.L,
                            be = Wt.L,
                            xe = ge.offset(),
                            we = A.offset(),
                            _e = {
                                x: k.x == X || E == ui,
                                y: k.y == X || E == di
                            };
                        we[Kt] -= D[0], we[Zt] -= D[3];
                        var Se = {
                            x: $.round(we[Zt] - xe[Zt] + ve),
                            y: $.round(we[Kt] - xe[Kt] + be)
                        };
                        if (ee && (C.n || C.i || (Se.x = $.round(xe[Zt] - we[Zt] + ve)), C.n && N && (Se.x *= -1), C.i && N && (Se.x = $.round(xe[Zt] - we[Zt] + (Bt.N - ve)))), P.x != W || P.y != W || k.x == V || k.y == V || ee) {
                            var Te = A[0],
                                Ce = O ? Te[f.bCR]() : {
                                    width: Te[f.oW],
                                    height: Te[f.oH]
                                },
                                Ee = {
                                    w: Ce[ii] + D[3] + D[1],
                                    h: Ce[ni] + D[0] + D[2]
                                },
                                ke = function (e) {
                                    var t = ss(e),
                                        i = t.j,
                                        n = t.B,
                                        s = t.Q,
                                        r = P[s] == (e && ee ? W : "end"),
                                        a = "center" == P[s],
                                        o = P[s] == R,
                                        l = k[s] == X,
                                        c = k[s] == V,
                                        d = Rt[i],
                                        u = xe[n],
                                        h = Ee[i],
                                        p = we[n],
                                        f = a ? 2 : 1,
                                        m = p + h / 2,
                                        v = u + d / 2,
                                        g = h <= d && u <= p && p + h <= u + d;
                                    l ? _e[s] = !0 : _e[s] || ((o || c) && (_e[s] = c && g, r = h < d ? v < m : m < v), Se[s] -= r || a ? (d / f - h / f) * (e && ee && N ? -1 : 1) : 0)
                                };
                            ke(!0), ke(!1)
                        }
                        _e.y && delete Se.y, _e.x && delete Se.x, e = Se
                    }
                }
                F[gi] = ae(!0, re(!0, e)), F[yi] = ae(!1, re(!1, e)), _ = F[gi] !== i, S = F[yi] !== i, (_ || S) && (0 < t || H) ? H ? (t.complete = ne, ye.animate(F, t)) : (T = {
                    duration: t,
                    complete: ne
                }, g.isA(n) || L.isPlainObject(n) ? (B[gi] = n[0] || n.x, B[yi] = n[1] || n.y, T.specialEasing = B) : T.easing = n, ye.animate(F, T)) : (_ && ye[gi](F[gi]), S && ye[yi](F[yi]), ie())
            }, x.scrollStop = function (e, t, i) {
                return ye.stop(e, t, i), x
            }, x.getElements = function (e) {
                var t = {
                    target: De,
                    host: Ae,
                    padding: ze,
                    viewport: qe,
                    content: Ie,
                    scrollbarHorizontal: {
                        scrollbar: Te[0],
                        track: Ce[0],
                        handle: Ee[0]
                    },
                    scrollbarVertical: {
                        scrollbar: ke[0],
                        track: $e[0],
                        handle: Me[0]
                    },
                    scrollbarCorner: Se[0]
                };
                return v(e) == d ? gs(t, e) : t
            }, x.getState = function (e) {
                function t(e) {
                    if (!L.isPlainObject(e)) return e;
                    var t = xs({}, e),
                        i = function (e, i) {
                            t[f.hOP](e) && (t[i] = t[e], delete t[e])
                        };
                    return i("w", ii), i("h", ni), delete t.c, t
                }
                var i = {
                    destroyed: !!t(j),
                    sleeping: !!t(te),
                    autoUpdate: t(!Et),
                    widthAuto: t(Re),
                    heightAuto: t(Xe),
                    padding: t(Ge),
                    overflowAmount: t(it),
                    hideOverflow: t(We),
                    hasOverflow: t(Be),
                    contentScrollSize: t(je),
                    viewportSize: t(Rt),
                    hostSize: t(He),
                    documentMixed: t(W)
                };
                return v(e) == d ? gs(i, e) : i
            }, x.ext = function (e) {
                var t, i = "added removed on contract".split(" "),
                    n = 0;
                if (v(e) == d) {
                    if (_n[f.hOP](e))
                        for (t = xs({}, _n[e]); n < i.length; n++) delete t[i[n]]
                } else
                    for (n in t = {}, _n) t[n] = xs({}, x.ext(n));
                return t
            }, x.addExt = function (t, i) {
                var n, s, r, a, o = K.extension(t),
                    c = !0;
                if (o) {
                    if (_n[f.hOP](t)) return x.ext(t);
                    if ((n = o.extensionFactory.call(x, xs({}, o.defaultOptions), L, g)) && (r = n.contract, v(r) == l && (a = r(e), c = v(a) == u ? a : c), c)) return s = (_n[t] = n).added, v(s) == l && s(i), x.ext(t)
                } else console.warn('A extension with the name "' + t + "\" isn't registered.")
            }, x.removeExt = function (e) {
                var t, i = _n[e];
                return !!i && (delete _n[e], t = i.removed, v(t) == l && t(), !0)
            }, K.valid(function (e, n, s) {
                var r, o;
                return ie = a.defaultOptions, P = a.nativeScrollbarStyling, A = xs({}, a.nativeScrollbarSize), S = xs({}, a.nativeScrollbarIsOverlaid), T = xs({}, a.overlayScrollbarDummySize), C = xs({}, a.rtlScrollBehavior), Un(xs({}, ie, n)), D = a.cssCalc, k = a.msie, E = a.autoUpdateRecommended, N = a.supportTransition, O = a.supportTransform, z = a.supportPassiveEvents, q = a.supportResizeObserver, I = a.supportMutationObserver, a.restrictedMeasuring, de = L(e.ownerDocument), Le = de[0], ce = L(Le.defaultView || Le.parentWindow), Pe = ce[0], ue = Cs(de, "html"), he = Cs(ue, "body"), pe = L(e), De = pe[0], F = pe.is("textarea"), B = pe.is("body"), W = Le !== t, R = F ? pe.hasClass(Bi) && pe.parent().hasClass(Yi) : pe.hasClass(Pi) && pe.children(hi + Ri)[f.l], S.x && S.y && !se.nativeScrollbarsOverlaid.initialize ? (as("onInitializationWithdrawn"), R && (Kn(!0), Qn(!0), rs(!0)), te = j = !0) : (B && ((r = {}).l = $.max(pe[gi](), ue[gi](), ce[gi]()), r.t = $.max(pe[yi](), ue[yi](), ce[yi]()), o = function () {
                    ye.removeAttr(f.ti), Ln(ye, bi, o, !0, !0)
                }), Kn(), Qn(), rs(), function () {
                    var e, t, n = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144],
                        s = [],
                        r = "focus";

                    function a(t) {
                        Vn(), x.update(ai), t && E && clearInterval(e)
                    }
                    F ? (9 < k || !E ? Dn(pe, "input", a) : Dn(pe, [Ti, Ci], [function (t) {
                        var i = t.keyCode;
                        y(i, n) < 0 && (s[f.l] || (a(), e = setInterval(a, 1e3 / 60)), y(i, s) < 0 && s.push(i))
                    }, function (e) {
                        var t = e.keyCode,
                            i = y(t, s);
                        y(t, n) < 0 && (-1 < i && s.splice(i, 1), s[f.l] || a(!0))
                    }]), Dn(pe, [li, "drop", r, r + "out"], [function (e) {
                        return pe[gi](C.i && pt ? 9999999 : 0), pe[yi](0), g.prvD(e), g.stpP(e), !1
                    }, function (e) {
                        setTimeout((function () {
                            j || a()
                        }), 50)
                    }, function () {
                        kt = !0, ws(fe, r)
                    }, function () {
                        kt = !1, s = [], _s(fe, r), a(!0)
                    }])) : Dn(be, ki, (function (e) {
                        !0 !== st && function (e) {
                            if (!H) return 1;
                            var t = "flex-grow",
                                i = "flex-shrink",
                                n = "flex-basis",
                                s = [ii, ei + ii, ti + ii, Gt + Zt, Gt + Qt, Zt, Qt, "font-weight", "word-spacing", t, i, n],
                                r = [Yt + Zt, Yt + Qt, Ut + Zt + ii, Ut + Qt + ii],
                                a = [ni, ei + ni, ti + ni, Gt + Kt, Gt + Jt, Kt, Jt, "line-height", t, i, n],
                                o = [Yt + Kt, Yt + Jt, Ut + Kt + ii, Ut + Jt + ii],
                                l = "s" === tt.x || "v-s" === tt.x,
                                c = !1,
                                d = function (e, t) {
                                    for (var i = 0; i < e[f.l]; i++)
                                        if (e[i] === t) return !0;
                                    return !1
                                };
                            return ("s" === tt.y || "v-s" === tt.y) && ((c = d(a, e)) || X || (c = d(o, e))), l && !c && ((c = d(s, e)) || X || (c = d(r, e))), c
                        }((e = e.originalEvent || e).propertyName) && x.update(ai)
                    })), Dn(ye, li, (function (e) {
                        te || (t !== i ? clearTimeout(t) : ((Dt || At) && es(!0), ps() || ws(fe, Ii), as("onScrollStart", e)), zt || (is(!0), is(!1)), as("onScroll", e), t = setTimeout((function () {
                            j || (clearTimeout(t), t = i, (Dt || At) && es(!1), ps() || _s(fe, Ii), as("onScrollStop", e))
                        }), 175))
                    }), !0)
                }(), Jn(!0), Jn(!1), function () {
                    var e, t = Pe.top !== Pe,
                        n = {},
                        s = {},
                        r = {};

                    function a(e) {
                        if (l(e)) {
                            var t = c(e),
                                i = {};
                            (Ht || It) && (i[ii] = s.w + (t.x - n.x) * r.x), (jt || It) && (i[ni] = s.h + (t.y - n.y) * r.y), fe.css(i), g.stpP(e)
                        } else o(e)
                    }

                    function o(t) {
                        var n = t !== i;
                        Ln(de, [Ei, wi, xi], [jn, a, o], !0), _s(he, gn), Se.releaseCapture && Se.releaseCapture(), n && (e && Nn(), x.update(ai)), e = !1
                    }

                    function l(e) {
                        var t = (e.originalEvent || e).touches !== i;
                        return !te && !j && (1 === g.mBtn(e) || t)
                    }

                    function c(e) {
                        return k && t ? {
                            x: e.screenX,
                            y: e.screenY
                        } : g.page(e)
                    }
                    Dn(Se, bi, (function (t) {
                        l(t) && !qt && (Et && (e = !0, On()), n = c(t), s.w = Ae[f.oW] - (X ? 0 : G), s.h = Ae[f.oH] - (X ? 0 : Y), r = ds(), Ln(de, [Ei, wi, xi], [jn, a, o]), ws(he, gn), Se.setCapture && Se.setCapture(), g.prvD(t), g.stpP(t))
                    }))
                }(), function () {
                    if (I) {
                        var e, t, i, n, s, r, a, o, c, d, u = g.mO(),
                            h = g.now();
                        Ct = function (e) {
                            var t = !1;
                            return H && !te && (b(e, (function () {
                                return !(t = function (e) {
                                    var t = e.attributeName,
                                        i = e.target,
                                        n = e.type,
                                        s = "closest";
                                    if (i === Ie) return null === t;
                                    if ("attributes" === n && (t === f.c || t === f.s) && !F) {
                                        if (t === f.c && L(i).hasClass(Pi)) return Rn(e.oldValue, i.className);
                                        if (typeof i[s] != l) return !0;
                                        if (null !== i[s](hi + Ji) || null !== i[s](hi + nn) || null !== i[s](hi + dn)) return !1
                                    }
                                    return !0
                                }(this))
                            })), t && (o = g.now(), c = Xe || Re, d = function () {
                                j || (h = o, F && Vn(), c ? Gn() : x.update(ai))
                            }, clearTimeout(a), 11 < o - h || !c ? d() : a = setTimeout(d, 11))), t
                        }, _t = new u(Tt = function (a) {
                            var o, l = !1,
                                c = !1,
                                d = [];
                            return H && !te && (b(a, (function () {
                                e = (o = this).target, t = o.attributeName, i = t === f.c, n = o.oldValue, s = e.className, R && i && !c && -1 < n.indexOf(Li) && s.indexOf(Li) < 0 && (r = cs(!0), Ae.className = s.split(pi).concat(n.split(pi).filter((function (e) {
                                    return e.match(r)
                                }))).join(pi), l = c = !0), l = l || (i ? Rn(n, s) : t !== f.s || n !== e[f.s].cssText), d.push(t)
                            })), Xn(d), l && x.update(c || ai)), l
                        }), St = new u(Ct)
                    }
                }(), An(ve, zn), B && (ye[gi](r.l)[yi](r.t), t.activeElement == e && qe.focus && (ye.attr(f.ti, "-1"), qe.focus(), Ln(ye, bi, o, !1, !0))), x.update(ai), H = !0, as("onInitialized"), b(xn, (function (e, t) {
                    as(t.n, t.a)
                })), xn = [], v(s) == d && (s = [s]), g.isA(s) ? b(s, (function (e, t) {
                    x.addExt(t)
                })) : L.isPlainObject(s) && b(s, (function (e, t) {
                    x.addExt(e, t)
                })), setTimeout((function () {
                    N && !j && ws(fe, Oi)
                }), 333)), x
            }(n, s, r)) && le(n, x), x
        }

        function Ln(e, t, i, n, s) {
            var r = g.isA(t) && g.isA(i),
                a = n ? "removeEventListener" : "addEventListener",
                o = n ? "off" : "on",
                l = !r && t.split(pi),
                c = 0,
                d = L.isPlainObject(s),
                u = z && (d ? s.U || !1 : s),
                h = d && (s.V || !1),
                p = h || u,
                m = u ? {
                    passive: u,
                    capture: h
                } : h;
            if (r)
                for (; c < t[f.l]; c++) Ln(e, t[c], i[c], n, s);
            else
                for (; c < l[f.l]; c++) p ? e[0][a](l[c], i, m) : e[o](l[c], i)
        }

        function Dn(e, t, i, n) {
            Ln(e, t, i, !1, n), Pn.push(g.bind(Ln, 0, e, t, i, !0, n))
        }

        function An(e, t) {
            if (e) {
                var n = g.rO(),
                    s = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",
                    r = "childNodes",
                    l = 3333333,
                    c = function () {
                        e[yi](l)[gi](ee ? C.n ? -l : C.i ? 0 : l : l), t()
                    };
                if (t) {
                    if (q)((z = e.addClass("observed").append(ms(Ji)).contents()[0])[$i] = new n(c)).observe(z);
                    else if (9 < k || !E) {
                        e.prepend(ms(Ji, ms({
                            c: Zi,
                            dir: "ltr"
                        }, ms(Zi, ms(en)) + ms(Zi, ms({
                            c: en,
                            style: "width: 200%; height: 200%"
                        })))));
                        var d, u, h, p, m = e[0][r][0][r][0],
                            v = L(m[r][1]),
                            y = L(m[r][0]),
                            b = L(y[0][r][0]),
                            x = m[f.oW],
                            w = m[f.oH],
                            _ = a.nativeScrollbarSize,
                            S = function () {
                                y[gi](l)[yi](l), v[gi](l)[yi](l)
                            },
                            T = function () {
                                u = 0, d && (x = h, w = p, c())
                            },
                            $ = function (e) {
                                return h = m[f.oW], p = m[f.oH], d = h != x || p != w, e && d && !u ? (g.cAF()(u), u = g.rAF()(T)) : e || T(), S(), e && (g.prvD(e), g.stpP(e)), !1
                            },
                            M = {},
                            P = {};
                        os(P, ri, [-2 * (_.y + 1), -2 * _.x, -2 * _.y, -2 * (_.x + 1)]), L(m).css(P), y.on(li, $), v.on(li, $), e.on(s, (function () {
                            $(!1)
                        })), M[ii] = l, M[ni] = l, b.css(M), S()
                    } else {
                        var D = Le.attachEvent,
                            A = k !== i;
                        if (D) e.prepend(ms(Ji)), Cs(e, hi + Ji)[0].attachEvent("onresize", c);
                        else {
                            var N = Le.createElement(o);
                            N.setAttribute(f.ti, "-1"), N.setAttribute(f.c, Ji), N.onload = function () {
                                var e = this.contentDocument.defaultView;
                                e.addEventListener("resize", c), e.document.documentElement.style.display = "none"
                            }, N.type = "text/html", A && e.prepend(N), N.data = "about:blank", A || e.prepend(N), e.on(s, c)
                        }
                    }
                    if (e[0] === Oe) {
                        var O = function () {
                            var e = fe.css("direction"),
                                t = {},
                                i = 0,
                                n = !1;
                            return e !== Qe && (i = "ltr" === e ? (t[Zt] = 0, t[Qt] = ai, l) : (t[Zt] = ai, t[Qt] = 0, C.n ? -l : C.i ? 0 : l), ve.children().eq(0).css(t), ve[gi](i)[yi](l), Qe = e, n = !0), n
                        };
                        O(), Dn(e, li, (function (e) {
                            return O() && Gn(), g.prvD(e), g.stpP(e), !1
                        }))
                    }
                } else if (q) {
                    var z, I = (z = e.contents()[0])[$i];
                    I && (I.disconnect(), delete z[$i])
                } else Ts(e.children(hi + Ji).eq(0))
            }
        }

        function Nn() {
            I && !Et && (_t.observe(Ae, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: Mn
            }), St.observe(F ? De : Ie, {
                attributes: !0,
                attributeOldValue: !0,
                subtree: !F,
                childList: !F,
                characterData: !F,
                attributeFilter: F ? $n : Mn
            }), Et = !0)
        }

        function On() {
            I && Et && (_t.disconnect(), St.disconnect(), Et = !1)
        }

        function zn() {
            if (!te) {
                var e, t = {
                    w: Oe[f.sW],
                    h: Oe[f.sH]
                };
                e = bs(t, ot), ot = t, e && Gn({
                    A: !0
                })
            }
        }

        function qn() {
            Nt && es(!0)
        }

        function In() {
            Nt && !he.hasClass(gn) && es(!1)
        }

        function Hn() {
            At && (es(!0), clearTimeout(Mt), Mt = setTimeout((function () {
                At && !j && es(!1)
            }), 100))
        }

        function jn(e) {
            return g.prvD(e), !1
        }

        function Fn(e) {
            var t = L(e.target);
            ys((function (e, i) {
                t.is(i) && Gn({
                    I: !0
                })
            }))
        }

        function Bn(e) {
            e || Bn(!0), Ln(fe, wi.split(pi)[0], Hn, !At || e, !0), Ln(fe, [_i, Si], [qn, In], !Nt || e, !0), H || e || fe.one("mouseover", qn)
        }

        function Wn() {
            var e = {};
            return B && xe && (e.w = hs(xe.css(ei + ii)), e.h = hs(xe.css(ei + ni)), e.c = bs(e, wt), e.f = !0), !!(wt = e).c
        }

        function Rn(e, t) {
            var i, n, s = typeof t == d ? t.split(pi) : [],
                r = function (e, t) {
                    var i, n, s = [],
                        r = [];
                    for (i = 0; i < e.length; i++) s[e[i]] = !0;
                    for (i = 0; i < t.length; i++) s[t[i]] ? delete s[t[i]] : s[t[i]] = !0;
                    for (n in s) r.push(n);
                    return r
                }(typeof e == d ? e.split(pi) : [], s),
                a = y(yn, r);
            if (-1 < a && r.splice(a, 1), 0 < r[f.l])
                for (n = cs(!0, !0), i = 0; i < r.length; i++)
                    if (!r[i].match(n)) return !0;
            return !1
        }

        function Xn(e) {
            b(e = e || wn, (function (e, t) {
                if (-1 < g.inA(t, wn)) {
                    var i = pe.attr(t);
                    v(i) == d ? ye.attr(t, i) : ye.removeAttr(t)
                }
            }))
        }

        function Vn() {
            if (!te) {
                var e, t, i, n, s = !vt,
                    r = Rt.w,
                    a = Rt.h,
                    o = {},
                    l = Re || s;
                return o[ei + ii] = ri, o[ei + ni] = ri, o[ii] = ai, pe.css(o), e = De[f.oW], t = l ? $.max(e, De[f.sW] - 1) : 1, o[ii] = Re ? ai : ci, o[ei + ii] = ci, o[ni] = ai, pe.css(o), i = De[f.oH], n = $.max(i, De[f.sH] - 1), o[ii] = t, o[ni] = n, _e.css(o), o[ei + ii] = r, o[ei + ni] = a, pe.css(o), {
                    $: e,
                    X: i,
                    Y: t,
                    G: n
                }
            }
        }

        function Gn(e) {
            clearTimeout(ae), e = e || {}, Sn.A |= e.A, Sn.I |= e.I, Sn.H |= e.H;
            var t, n = g.now(),
                s = !!Sn.A,
                r = !!Sn.I,
                o = !!Sn.H,
                l = e.T,
                c = 0 < Tn && H && !j && !o && !l && n - re < Tn && !Xe && !Re;
            if (c && (ae = setTimeout(Gn, Tn)), !(j || c || te && !l || H && !o && (t = fe.is(":hidden")) || "inline" === fe.css("display"))) {
                re = n, Sn = {}, !P || S.x && S.y ? A = xs({}, a.nativeScrollbarSize) : (A.x = 0, A.y = 0), Xt = {
                    x: 3 * (A.x + (S.x ? 0 : 3)),
                    y: 3 * (A.y + (S.y ? 0 : 3))
                }, l = l || {};
                var d = function () {
                        return bs.apply(this, [].slice.call(arguments).concat([o]))
                    },
                    u = {
                        x: ye[gi](),
                        y: ye[yi]()
                    },
                    h = se.scrollbars,
                    v = se.textarea,
                    y = h.visibility,
                    b = d(y, lt),
                    w = h.autoHide,
                    _ = d(w, ct),
                    k = h.clickScrolling,
                    M = d(k, dt),
                    N = h.dragScrolling,
                    O = d(N, ut),
                    z = se.className,
                    q = d(z, ft),
                    I = se.resize,
                    W = d(I, ht) && !B,
                    R = se.paddingAbsolute,
                    K = d(R, Je),
                    ie = se.clipAlways,
                    ne = d(ie, Ze),
                    oe = se.sizeAutoCapable && !B,
                    le = d(oe, rt),
                    ce = se.nativeScrollbarsOverlaid.showNativeScrollbars,
                    de = d(ce, nt),
                    ue = se.autoUpdate,
                    he = d(ue, st),
                    Te = se.overflowBehavior,
                    Ce = d(Te, tt, o),
                    Ee = v.dynWidth,
                    ke = d(xt, Ee),
                    $e = v.dynHeight,
                    Me = d(bt, $e);
                if (Lt = "n" === w, Dt = "s" === w, At = "m" === w, Nt = "l" === w, Pt = h.autoHideDelay, mt = ft, qt = "n" === I, It = "b" === I, Ht = "h" === I, jt = "v" === I, pt = se.normalizeRTL, ce = ce && S.x && S.y, lt = y, ct = w, dt = k, ut = N, ft = z, ht = I, Je = R, Ze = ie, rt = oe, nt = ce, st = ue, tt = xs({}, Te), xt = Ee, bt = $e, Be = Be || {
                        x: !1,
                        y: !1
                    }, q && (_s(fe, mt + pi + yn), ws(fe, z !== i && null !== z && 0 < z.length ? z : yn)), he && (!0 === ue || null === ue && E ? (On(), p.add(x)) : (p.remove(x), Nn())), le)
                    if (oe)
                        if (we ? we.show() : (we = L(ms(Ki)), ge.before(we)), V) me.show();
                        else {
                            me = L(ms(Qi)), Ne = me[0], we.before(me);
                            var Pe = {
                                w: -1,
                                h: -1
                            };
                            An(me, (function () {
                                var e = {
                                    w: Ne[f.oW],
                                    h: Ne[f.oH]
                                };
                                bs(e, Pe) && (H && Xe && 0 < e.h || Re && 0 < e.w || H && !Xe && 0 === e.h || !Re && 0 === e.w) && Gn(), Pe = e
                            })), V = !0, null !== D && me.css(ni, D + "(100% + 1px)")
                        }
                else V && me.hide(), we && we.hide();
                o && (ve.find("*").trigger(li), V && me.find("*").trigger(li)), t = t === i ? fe.is(":hidden") : t;
                var Le, Oe = !!F && "off" !== pe.attr("wrap"),
                    Qe = d(Oe, vt),
                    at = fe.css("direction"),
                    ot = d(at, Ke),
                    _t = fe.css("box-sizing"),
                    St = d(_t, Ve),
                    Tt = ls(Yt);
                try {
                    Le = V ? Ne[f.bCR]() : null
                } catch (e) {
                    return
                }
                X = "border-box" === _t;
                var Ct = (ee = "rtl" === at) ? Zt : Qt,
                    $t = ee ? Qt : Zt,
                    Mt = !1,
                    Ot = !(!V || "none" === fe.css(si)) && 0 === $.round(Le.right - Le.left) && (!!R || 0 < Ae[f.cW] - G);
                if (oe && !Ot) {
                    var zt = Ae[f.oW],
                        Bt = we.css(ii);
                    we.css(ii, ai);
                    var Wt = Ae[f.oW];
                    we.css(ii, Bt), (Mt = zt !== Wt) || (we.css(ii, zt + 1), Wt = Ae[f.oW], we.css(ii, Bt), Mt = zt !== Wt)
                }
                var Vt = (Ot || Mt) && oe && !t,
                    oi = d(Vt, Re),
                    di = !Vt && Re,
                    ui = !(!V || !oe || t) && 0 === $.round(Le.bottom - Le.top),
                    hi = d(ui, Xe),
                    fi = !ui && Xe,
                    mi = ls(Ut, "-" + ii, !(Vt && X || !X), !(ui && X || !X)),
                    vi = ls(Gt),
                    bi = {},
                    xi = {},
                    wi = function () {
                        return {
                            w: Ae[f.cW],
                            h: Ae[f.cH]
                        }
                    },
                    _i = function () {
                        return {
                            w: ze[f.oW] + $.max(0, Ie[f.cW] - Ie[f.sW]),
                            h: ze[f.oH] + $.max(0, Ie[f.cH] - Ie[f.sH])
                        }
                    },
                    Si = G = Tt.l + Tt.r,
                    Ti = Y = Tt.t + Tt.b;
                if (Si *= R ? 1 : 0, Ti *= R ? 1 : 0, Tt.c = d(Tt, Ge), U = mi.l + mi.r, Q = mi.t + mi.b, mi.c = d(mi, Ye), J = vi.l + vi.r, Z = vi.t + vi.b, vi.c = d(vi, Ue), vt = Oe, Ke = at, Ve = _t, Re = Vt, Xe = ui, Ge = Tt, Ye = mi, Ue = vi, ot && V && me.css(si, $t), Tt.c || ot || K || oi || hi || St || le) {
                    var Ci = {},
                        Ei = {},
                        ki = [Tt.t, Tt.r, Tt.b, Tt.l];
                    os(xi, Gt, [-Tt.t, -Tt.r, -Tt.b, -Tt.l]), R ? (os(Ci, ri, ki), os(F ? Ei : bi, Yt)) : (os(Ci, ri), os(F ? Ei : bi, Yt, ki)), ge.css(Ci), pe.css(Ei)
                }
                Rt = _i();
                var $i = !!F && Vn(),
                    Mi = F && d($i, yt),
                    Pi = F && $i ? {
                        w: Ee ? $i.Y : $i.$,
                        h: $e ? $i.G : $i.X
                    } : {};
                if (yt = $i, ui && (hi || K || St || Tt.c || mi.c) ? bi[ni] = ai : (hi || K) && (bi[ni] = ci), Vt && (oi || K || St || Tt.c || mi.c || ot) ? (bi[ii] = ai, xi[ti + ii] = ci) : (oi || K) && (bi[ii] = ci, bi[si] = ri, xi[ti + ii] = ri), Vt ? (xi[ii] = ai, bi[ii] = m.d(ii, "max-content intrinsic") || ai, bi[si] = $t) : xi[ii] = ri, xi[ni] = ui ? Pi.h || Ie[f.cH] : ri, oe && we.css(xi), be.css(bi), bi = {}, xi = {}, s || r || Mi || ot || St || K || oi || Vt || hi || ui || de || Ce || ne || W || b || _ || O || M || ke || Me || Qe) {
                    var Li = "overflow",
                        Di = Li + "-x",
                        Ai = Li + "-y";
                    if (!P) {
                        var Ni = {},
                            Oi = Be.y && We.ys && !ce ? S.y ? ye.css(Ct) : -A.y : 0,
                            Bi = Be.x && We.xs && !ce ? S.x ? ye.css(Jt) : -A.x : 0;
                        os(Ni, ri), ye.css(Ni)
                    }
                    var Wi = fs(),
                        Ri = {
                            w: Pi.w || Wi[f.cW],
                            h: Pi.h || Wi[f.cH]
                        },
                        Xi = Wi[f.sW],
                        Gi = Wi[f.sH];
                    P || (Ni[Jt] = fi ? ri : Bi, Ni[Ct] = di ? ri : Oi, ye.css(Ni)), Rt = _i();
                    var Yi = wi(),
                        Ji = {
                            w: Yi.w - J - U - (X ? 0 : G),
                            h: Yi.h - Z - Q - (X ? 0 : Y)
                        },
                        Zi = {
                            w: $.max((Vt ? Ri.w : Xi) + Si, Ji.w),
                            h: $.max((ui ? Ri.h : Gi) + Ti, Ji.h)
                        };
                    if (Zi.c = d(Zi, et), et = Zi, oe) {
                        (Zi.c || ui || Vt) && (xi[ii] = Zi.w, xi[ni] = Zi.h, F || (Ri = {
                            w: Wi[f.cW],
                            h: Wi[f.cH]
                        }));
                        var en = {},
                            tn = function (e) {
                                var t = ss(e),
                                    i = t.j,
                                    n = t.K,
                                    s = e ? Vt : ui,
                                    r = e ? U : Q,
                                    a = e ? G : Y,
                                    o = e ? J : Z,
                                    l = Rt[i] - r - o - (X ? 0 : a);
                                s && (s || !mi.c) || (xi[n] = Ji[i] - 1), !(s && Ri[i] < l) || e && F && Oe || (F && (en[n] = hs(_e.css(n)) - 1), --xi[n]), 0 < Ri[i] && (xi[n] = $.max(1, xi[n]))
                            };
                        tn(!0), tn(!1), F && _e.css(en), we.css(xi)
                    }
                    Vt && (bi[ii] = ci), !Vt || X || Et || (bi[si] = "none"), be.css(bi), bi = {};
                    var nn = {
                        w: Wi[f.sW],
                        h: Wi[f.sH]
                    };
                    nn.c = r = d(nn, je), je = nn, Rt = _i(), s = d(Yi = wi(), He), He = Yi;
                    var sn = F && (0 === Rt.w || 0 === Rt.h),
                        rn = it,
                        an = {},
                        on = {},
                        ln = {},
                        cn = {},
                        dn = {},
                        mn = {},
                        vn = {},
                        gn = ze[f.bCR](),
                        bn = function (e) {
                            var t = ss(e),
                                i = ss(!e).Q,
                                n = t.Q,
                                s = t.j,
                                r = t.K,
                                a = li + t.J + "Max",
                                o = gn[r] ? $.abs(gn[r] - Rt[s]) : 0,
                                l = rn && 0 < rn[n] && 0 === qe[a];
                            an[n] = "v-s" === Te[n], on[n] = "v-h" === Te[n], ln[n] = "s" === Te[n], cn[n] = $.max(0, $.round(100 * (nn[s] - Rt[s])) / 100), cn[n] *= sn || l && 0 < o && o < 1 ? 0 : 1, dn[n] = 0 < cn[n], mn[n] = an[n] || on[n] ? dn[i] && !an[i] && !on[i] : dn[n], mn[n + "s"] = !!mn[n] && (ln[n] || an[n]), vn[n] = dn[n] && mn[n + "s"]
                        };
                    if (bn(!0), bn(!1), cn.c = d(cn, it), it = cn, dn.c = d(dn, Be), Be = dn, mn.c = d(mn, We), We = mn, S.x || S.y) {
                        var xn, wn = {},
                            _n = {},
                            Cn = o;
                        (dn.x || dn.y) && (_n.w = S.y && dn.y ? nn.w + T.y : ri, _n.h = S.x && dn.x ? nn.h + T.x : ri, Cn = d(_n, Fe), Fe = _n), (dn.c || mn.c || nn.c || ot || oi || hi || Vt || ui || de) && (bi[Gt + $t] = bi[Ut + $t] = ri, xn = function (e) {
                            var t = ss(e),
                                i = ss(!e),
                                n = t.Q,
                                s = e ? Jt : Ct,
                                r = e ? ui : Vt;
                            S[n] && dn[n] && mn[n + "s"] ? (bi[Gt + s] = !r || ce ? ri : T[n], bi[Ut + s] = e && r || ce ? ri : T[n] + "px solid transparent") : (_n[i.j] = bi[Gt + s] = bi[Ut + s] = ri, Cn = !0)
                        }, P ? Ss(ye, Vi, !ce) : (xn(!0), xn(!1))), ce && (_n.w = _n.h = ri, Cn = !0), Cn && !P && (wn[ii] = mn.y ? _n.w : ri, wn[ni] = mn.x ? _n.h : ri, xe || (xe = L(ms(Ui)), ye.prepend(xe)), xe.css(wn)), be.css(bi)
                    }
                    var En, kn = {};
                    if (Ci = {}, (s || dn.c || mn.c || nn.c || Ce || St || de || ot || ne || hi) && (kn[$t] = ri, (En = function (e) {
                            var t = ss(e),
                                i = ss(!e),
                                n = t.Q,
                                s = t.Z,
                                r = e ? Jt : Ct,
                                a = function () {
                                    kn[r] = ri, Ft[i.j] = 0
                                };
                            dn[n] && mn[n + "s"] ? (kn[Li + s] = li, ce || P ? a() : (kn[r] = -(S[n] ? T[n] : A[n]), Ft[i.j] = S[n] ? T[i.Q] : 0)) : (kn[Li + s] = ri, a())
                        })(!0), En(!1), !P && (Rt.h < Xt.x || Rt.w < Xt.y) && (dn.x && mn.x && !S.x || dn.y && mn.y && !S.y) ? (kn[Yt + Kt] = Xt.x, kn[Gt + Kt] = -Xt.x, kn[Yt + $t] = Xt.y, kn[Gt + $t] = -Xt.y) : kn[Yt + Kt] = kn[Gt + Kt] = kn[Yt + $t] = kn[Gt + $t] = ri, kn[Yt + Ct] = kn[Gt + Ct] = ri, dn.x && mn.x || dn.y && mn.y || sn ? F && sn && (Ci[Di] = Ci[Ai] = "hidden") : (!ie || on.x || an.x || on.y || an.y) && (F && (Ci[Di] = Ci[Ai] = ri), kn[Di] = kn[Ai] = "visible"), ge.css(Ci), ye.css(kn), kn = {}, (dn.c || St || oi || hi) && (!S.x || !S.y))) {
                        var $n = Ie[f.s];
                        $n.webkitTransform = "scale(1)", $n.display = "run-in", Ie[f.oH], $n.display = ri, $n.webkitTransform = ri
                    }
                    if (bi = {}, ot || oi || hi)
                        if (ee && Vt) {
                            var Mn = be.css(si),
                                Pn = $.round(be.css(si, ri).css(Zt, ri).position().left);
                            be.css(si, Mn), Pn !== $.round(be.position().left) && (bi[Zt] = Pn)
                        } else bi[Zt] = ri;
                    if (be.css(bi), F && r) {
                        var Ln = function () {
                            var e = De.selectionStart;
                            if (e !== i) {
                                var t, n, s = pe.val(),
                                    r = s[f.l],
                                    a = s.split("\n"),
                                    o = a[f.l],
                                    l = s.substr(0, e).split("\n"),
                                    c = 0,
                                    d = 0,
                                    u = l[f.l],
                                    h = l[l[f.l] - 1][f.l];
                                for (n = 0; n < a[f.l]; n++) d < (t = a[n][f.l]) && (c = n + 1, d = t);
                                return {
                                    nn: u,
                                    tn: h,
                                    rn: o,
                                    en: d,
                                    in: c,
                                    un: e,
                                    an: r
                                }
                            }
                        }();
                        if (Ln) {
                            var Dn = gt === i || Ln.rn !== gt.rn,
                                zn = Ln.nn,
                                qn = Ln.tn,
                                In = Ln.in,
                                Hn = Ln.rn,
                                jn = Ln.en,
                                Fn = Ln.un,
                                Rn = Ln.an <= Fn && kt,
                                Xn = {
                                    x: Oe || qn !== jn || zn !== In ? -1 : it.x,
                                    y: (Oe ? Rn || Dn && rn && u.y === rn.y : (Rn || Dn) && zn === Hn) ? it.y : -1
                                };
                            u.x = -1 < Xn.x ? ee && pt && C.i ? 0 : Xn.x : u.x, u.y = -1 < Xn.y ? Xn.y : u.y
                        }
                        gt = Ln
                    }
                    ee && C.i && S.y && dn.x && pt && (u.x += Ft.w || 0), Vt && fe[gi](0), ui && fe[yi](0), ye[gi](u.x)[yi](u.y);
                    var Un = "v" === y,
                        Kn = "h" === y,
                        Qn = "a" === y,
                        Jn = function (e, t) {
                            t = t === i ? e : t, Zn(!0, e, vn.x), Zn(!1, t, vn.y)
                        };
                    Ss(fe, Hi, mn.x || mn.y), Ss(fe, ji, mn.x), Ss(fe, Fi, mn.y), ot && !B && Ss(fe, zi, ee), B && ws(fe, qi), W && (Ss(fe, qi, qt), Ss(Se, un, !qt), Ss(Se, hn, It), Ss(Se, pn, Ht), Ss(Se, fn, jt)), (b || Ce || mn.c || dn.c || de) && (ce ? de && (_s(fe, Ii), ce && Jn(!1)) : Qn ? Jn(vn.x, vn.y) : Un ? Jn(!0) : Kn && Jn(!1)), (_ || de) && (Bn(!Nt && !At), es(Lt, !Lt)), (s || cn.c || hi || oi || W || St || K || de || ot) && (ts(!0), is(!0), ts(!1), is(!1)), M && ns(!0, k), O && ns(!1, N), as("onDirectionChanged", {
                        isRTL: ee,
                        dir: at
                    }, ot), as("onHostSizeChanged", {
                        width: He.w,
                        height: He.h
                    }, s), as("onContentSizeChanged", {
                        width: je.w,
                        height: je.h
                    }, r), as("onOverflowChanged", {
                        x: dn.x,
                        y: dn.y,
                        xScrollable: mn.xs,
                        yScrollable: mn.ys,
                        clipped: mn.x || mn.y
                    }, dn.c || mn.c), as("onOverflowAmountChanged", {
                        x: cn.x,
                        y: cn.y
                    }, cn.c)
                }
                B && wt && (Be.c || wt.c) && (wt.f || Wn(), S.y && Be.x && be.css(ei + ii, wt.w + T.y), S.x && Be.y && be.css(ei + ni, wt.h + T.x), wt.c = !1), H && l.updateOnLoad && Yn(), as("onUpdated", {
                    forced: o
                })
            }
        }

        function Yn() {
            F || ys((function (e, t) {
                be.find(t).each((function (e, t) {
                    g.inA(t, En) < 0 && (En.push(t), L(t).off(Cn, Fn).on(Cn, Fn))
                }))
            }))
        }

        function Un(e) {
            var t = oe.O(e, oe._, !0, ne);
            return ne = xs({}, ne, t.S), se = xs({}, se, t.z), t.z
        }

        function Kn(e) {
            var t = "parent",
                n = Bi + pi + tn,
                s = F ? pi + tn : ri,
                r = se.textarea.inheritedAttrs,
                a = {},
                o = function () {
                    var t = e ? pe : fe;
                    b(a, (function (e, i) {
                        v(i) == d && (e == f.c ? t.addClass(i) : t.attr(e, i))
                    }))
                },
                l = [Pi, Li, Di, qi, zi, Ai, Ni, Oi, Ii, Hi, ji, Fi, yn, Bi, tn, ft].join(pi),
                c = {};
            fe = fe || (F ? R ? pe[t]()[t]()[t]()[t]() : L(ms(Di)) : pe), be = be || vs(Yi + s), ye = ye || vs(Xi + s), ge = ge || vs(Ri + s), ve = ve || vs("os-resize-observer-host"), _e = _e || (F ? vs(Wi) : i), R && ws(fe, Li), e && _s(fe, l), r = v(r) == d ? r.split(pi) : r, g.isA(r) && F && b(r, (function (t, i) {
                v(i) == d && (a[i] = e ? fe.attr(i) : pe.attr(i))
            })), e ? (R && H ? (ve.children().remove(), b([ge, ye, be, _e], (function (e, t) {
                t && _s(t.removeAttr(f.s), bn)
            })), ws(fe, F ? Di : Pi)) : (Ts(ve), be.contents().unwrap().unwrap().unwrap(), F && (pe.unwrap(), Ts(fe), Ts(_e), o())), F && pe.removeAttr(f.s), B && _s(ue, Mi)) : (F && (se.sizeAutoCapable || (c[ii] = pe.css(ii), c[ni] = pe.css(ni)), R || pe.addClass(tn).wrap(fe), fe = pe[t]().css(c)), R || (ws(pe, F ? n : Pi), fe.wrapInner(be).wrapInner(ye).wrapInner(ge).prepend(ve), be = Cs(fe, hi + Yi), ye = Cs(fe, hi + Xi), ge = Cs(fe, hi + Ri), F && (be.prepend(_e), o())), P && ws(ye, Vi), S.x && S.y && ws(ye, Gi), B && ws(ue, Mi), Oe = ve[0], Ae = fe[0], ze = ge[0], qe = ye[0], Ie = be[0], Xn())
        }

        function Qn(e) {
            var t, i, n = function (t) {
                var i = vs(nn + pi + (t ? mn : vn), !0),
                    n = vs(sn, i),
                    s = vs(an, i);
                return R || e || (i.append(n), n.append(s)), {
                    cn: i,
                    sn: n,
                    ln: s
                }
            };

            function s(e) {
                var t = ss(e),
                    i = t.cn,
                    s = t.sn,
                    r = t.ln;
                R && H ? b([i, s, r], (function (e, t) {
                    _s(t.removeAttr(f.s), bn)
                })) : Ts(i || n(e).cn)
            }
            e ? (s(!0), s()) : (t = n(!0), i = n(), Te = t.cn, Ce = t.sn, Ee = t.ln, ke = i.cn, $e = i.sn, Me = i.ln, R || (ge.after(ke), ge.after(Te)))
        }

        function Jn(e) {
            var t, n, s, r, a = ss(e),
                o = a.vn,
                l = Pe.top !== Pe,
                c = a.Q,
                d = a.Z,
                u = li + a.J,
                h = "active",
                p = "snapHandle",
                m = "click",
                v = 1,
                b = [16, 17];

            function w(e) {
                return k && l ? e["screen" + d] : g.page(e)[c]
            }

            function _(e) {
                return se.scrollbars[e]
            }

            function S() {
                v = .5
            }

            function T() {
                v = 1
            }

            function E(e) {
                g.stpP(e)
            }

            function M(e) {
                -1 < y(e.keyCode, b) && S()
            }

            function P(e) {
                -1 < y(e.keyCode, b) && T()
            }

            function L(e) {
                var t = (e.originalEvent || e).touches !== i;
                return !(te || j || ps() || !ut || t && !_("touchSupport")) && (1 === g.mBtn(e) || t)
            }

            function D(t) {
                if (L(t)) {
                    var i = o.F,
                        a = o.M,
                        l = o.N * ((w(t) - s) * r / (i - a));
                    l = isFinite(l) ? l : 0, ee && e && !C.i && (l *= -1), ye[u]($.round(n + l)), zt && is(e, n + l), z || g.prvD(t)
                } else A(t)
            }

            function A(o) {
                if (o = o || o.originalEvent, Ln(de, [wi, xi, Ti, Ci, Ei], [D, A, M, P, jn], !0), g.rAF()((function () {
                        Ln(de, m, E, !0, {
                            V: !0
                        })
                    })), zt && is(e, !0), zt = !1, _s(he, gn), _s(a.ln, h), _s(a.sn, h), _s(a.cn, h), r = 1, T(), t !== (s = n = i) && (x.scrollStop(), clearTimeout(t), t = i), o) {
                    var l = Ae[f.bCR]();
                    o.clientX >= l.left && o.clientX <= l.right && o.clientY >= l.top && o.clientY <= l.bottom || In(), (Dt || At) && es(!1)
                }
            }

            function O(t) {
                n = ye[u](), n = isNaN(n) ? 0 : n, (ee && e && !C.n || !ee) && (n = n < 0 ? 0 : n), r = ds()[c], s = w(t), zt = !_(p), ws(he, gn), ws(a.ln, h), ws(a.cn, h), Ln(de, [wi, xi, Ei], [D, A, jn]), g.rAF()((function () {
                    Ln(de, m, E, !1, {
                        V: !0
                    })
                })), !k && W || g.prvD(t), g.stpP(t)
            }
            Dn(a.ln, bi, (function (e) {
                L(e) && O(e)
            })), Dn(a.sn, [bi, _i, Si], [function (n) {
                if (L(n)) {
                    var l, d = a.vn.M / Math.round($.min(1, Rt[a.j] / je[a.j]) * a.vn.F),
                        f = $.round(Rt[a.j] * d),
                        m = 270 * d,
                        y = 400 * d,
                        b = a.sn.offset()[a.B],
                        w = n.ctrlKey,
                        T = n.shiftKey,
                        E = T && w,
                        k = !0,
                        D = function (t) {
                            zt && is(e, t)
                        },
                        N = function () {
                            D(), O(n)
                        },
                        z = function () {
                            if (!j) {
                                var n = (s - b) * r,
                                    a = o.W,
                                    d = o.F,
                                    h = o.M,
                                    p = o.N,
                                    g = o.L,
                                    w = m * v,
                                    _ = k ? $.max(y, w) : w,
                                    S = p * ((n - h / 2) / (d - h)),
                                    M = ee && e && (!C.i && !C.n || pt),
                                    P = M ? a < n : n < a,
                                    L = {},
                                    A = {
                                        easing: "linear",
                                        step: function (t) {
                                            zt && (ye[u](t), is(e, t))
                                        }
                                    };
                                S = isFinite(S) ? S : 0, S = ee && e && !C.i ? p - S : S, T ? (ye[u](S), E ? (S = ye[u](), ye[u](g), S = M && C.i ? p - S : S, S = M && C.n ? -S : S, L[c] = S, x.scroll(L, xs(A, {
                                    duration: 130,
                                    complete: N
                                }))) : N()) : (l = k ? P : l, (M ? l ? n <= a + h : a <= n : l ? a <= n : n <= a + h) ? (clearTimeout(t), x.scrollStop(), t = i, D(!0)) : (t = setTimeout(z, _), L[c] = (l ? "-=" : "+=") + f, x.scroll(L, xs(A, {
                                    duration: w
                                }))), k = !1)
                            }
                        };
                    w && S(), r = ds()[c], s = g.page(n)[c], zt = !_(p), ws(he, gn), ws(a.sn, h), ws(a.cn, h), Ln(de, [xi, Ti, Ci, Ei], [A, M, P, jn]), z(), g.prvD(n), g.stpP(n)
                }
            }, function (e) {
                Ot = !0, (Dt || At) && es(!0)
            }, function (e) {
                Ot = !1, (Dt || At) && es(!1)
            }]), Dn(a.cn, bi, (function (e) {
                g.stpP(e)
            })), N && Dn(a.cn, ki, (function (t) {
                t.target === a.cn[0] && (ts(e), is(e))
            }))
        }

        function Zn(e, t, i) {
            var n = e ? Te : ke;
            Ss(fe, e ? Ai : Ni, !t), Ss(n, ln, !i)
        }

        function es(e, t) {
            if (clearTimeout($t), e) _s(Te, cn), _s(ke, cn);
            else {
                var i, n = function () {
                    Ot || j || (!(i = Ee.hasClass("active") || Me.hasClass("active")) && (Dt || At || Nt) && ws(Te, cn), !i && (Dt || At || Nt) && ws(ke, cn))
                };
                0 < Pt && !0 !== t ? $t = setTimeout(n, Pt) : n()
            }
        }

        function ts(e) {
            var t = {},
                i = ss(e),
                n = i.vn,
                s = $.min(1, Rt[i.j] / je[i.j]);
            t[i.K] = $.floor(100 * s * 1e6) / 1e6 + "%", ps() || i.ln.css(t), n.M = i.ln[0]["offset" + i.hn], n.D = s
        }

        function is(e, t) {
            var n, s, r = v(t) == u,
                a = ee && e,
                o = ss(e),
                l = o.vn,
                c = "translate(",
                d = m.v("transform"),
                h = m.v("transition"),
                p = e ? ye[gi]() : ye[yi](),
                g = t === i || r ? p : t,
                y = l.M,
                b = o.sn[0]["offset" + o.hn],
                x = b - y,
                w = {},
                _ = (qe[li + o.hn] - qe["client" + o.hn]) * (C.n && a ? -1 : 1),
                S = function (e) {
                    return isNaN(e / _) ? 0 : $.max(0, $.min(1, e / _))
                },
                T = function (e) {
                    var t = x * e;
                    return t = isNaN(t) ? 0 : t, t = a && !C.i ? b - y - t : t, $.max(0, t)
                },
                E = S(p),
                k = T(S(g)),
                M = T(E);
            l.N = _, l.L = p, l.R = E, O ? (n = a ? -(b - y - k) : k, s = e ? c + n + "px, 0)" : c + "0, " + n + "px)", w[d] = s, N && (w[h] = r && 1 < $.abs(k - l.W) ? function (e) {
                var t = m.v("transition"),
                    i = e.css(t);
                if (i) return i;
                for (var n, s, r, a = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", o = new RegExp(a), l = new RegExp("^(" + a + ")+$"), c = "property duration timing-function delay".split(" "), d = [], u = 0, h = function (e) {
                        if (n = [], !e.match(l)) return e;
                        for (; e.match(o);) n.push(RegExp.$1), e = e.replace(o, ri);
                        return n
                    }; u < c[f.l]; u++)
                    for (s = h(e.css(t + "-" + c[u])), r = 0; r < s[f.l]; r++) d[r] = (d[r] ? d[r] + pi : ri) + s[r];
                return d.join(", ")
            }(o.ln) + ", " + (d + pi + 250) + "ms" : ri)) : w[o.B] = k, ps() || (o.ln.css(w), O && N && r && o.ln.one(ki, (function () {
                j || o.ln.css(h, ri)
            }))), l.W = k, l.P = M, l.F = b
        }

        function ns(e, t) {
            var i = t ? "removeClass" : "addClass",
                n = e ? $e : Me,
                s = e ? rn : on;
            (e ? Ce : Ee)[i](s), n[i](s)
        }

        function ss(e) {
            return {
                K: e ? ii : ni,
                hn: e ? "Width" : "Height",
                B: e ? Zt : Kt,
                J: e ? "Left" : "Top",
                Q: e ? di : ui,
                Z: e ? "X" : "Y",
                j: e ? "w" : "h",
                dn: e ? "l" : "t",
                sn: e ? Ce : $e,
                ln: e ? Ee : Me,
                cn: e ? Te : ke,
                vn: e ? Bt : Wt
            }
        }

        function rs(e) {
            Se = Se || vs(dn, !0), e ? R && H ? _s(Se.removeAttr(f.s), bn) : Ts(Se) : R || fe.append(Se)
        }

        function as(e, t, i) {
            if (!1 !== i)
                if (H) {
                    var n, s = se.callbacks[e],
                        r = e;
                    "on" === r.substr(0, 2) && (r = r.substr(2, 1).toLowerCase() + r.substr(3)), v(s) == l && s.call(x, t), b(_n, (function () {
                        v((n = this).on) == l && n.on(r, t)
                    }))
                } else j || xn.push({
                    n: e,
                    a: t
                })
        }

        function os(e, t, i) {
            i = i || [ri, ri, ri, ri], e[(t = t || ri) + Kt] = i[0], e[t + Qt] = i[1], e[t + Jt] = i[2], e[t + Zt] = i[3]
        }

        function ls(e, t, i, n) {
            return t = t || ri, e = e || ri, {
                t: n ? 0 : hs(fe.css(e + Kt + t)),
                r: i ? 0 : hs(fe.css(e + Qt + t)),
                b: n ? 0 : hs(fe.css(e + Jt + t)),
                l: i ? 0 : hs(fe.css(e + Zt + t))
            }
        }

        function cs(e, t) {
            var i, n, s, r = function (e, t) {
                if (s = "", t && typeof e == d)
                    for (n = e.split(pi), i = 0; i < n[f.l]; i++) s += "|" + n[i] + "$";
                return s
            };
            return new RegExp("(^" + Pi + "([-_].+|)$)" + r(ft, e) + r(mt, t), "g")
        }

        function ds() {
            var e = ze[f.bCR]();
            return {
                x: O && 1 / ($.round(e.width) / ze[f.oW]) || 1,
                y: O && 1 / ($.round(e.height) / ze[f.oH]) || 1
            }
        }

        function us(t) {
            var i = "ownerDocument",
                n = "HTMLElement",
                s = t && t[i] && t[i].parentWindow || e;
            return typeof s[n] == o ? t instanceof s[n] : t && typeof t == o && null !== t && 1 === t.nodeType && typeof t.nodeName == d
        }

        function hs(e, t) {
            var i = t ? parseFloat(e) : parseInt(e, 10);
            return isNaN(i) ? 0 : i
        }

        function ps() {
            return nt && S.x && S.y
        }

        function fs() {
            return F ? _e[0] : Ie
        }

        function ms(e, t) {
            return "<div " + (e ? v(e) == d ? 'class="' + e + '"' : function () {
                var t, i = ri;
                if (L.isPlainObject(e))
                    for (t in e) i += ("c" === t ? "class" : t) + '="' + e[t] + '" ';
                return i
            }() : ri) + ">" + (t || ri) + "</div>"
        }

        function vs(e, t) {
            var i = v(t) == u,
                n = !i && t || fe;
            return R && !n[f.l] ? null : R ? n[i ? "children" : "find"](hi + e.replace(/\s/g, hi)).eq(0) : L(ms(e))
        }

        function gs(e, t) {
            for (var i, n = t.split(hi), s = 0; s < n.length; s++) {
                if (!e[f.hOP](n[s])) return;
                i = e[n[s]], s < n.length && v(i) == o && (e = i)
            }
            return i
        }

        function ys(e) {
            var t = se.updateOnLoad;
            t = v(t) == d ? t.split(pi) : t, g.isA(t) && !j && b(t, e)
        }

        function bs(e, t, i) {
            if (i) return i;
            if (v(e) != o || v(t) != o) return e !== t;
            for (var n in e)
                if ("c" !== n) {
                    if (!e[f.hOP](n) || !t[f.hOP](n)) return !0;
                    if (bs(e[n], t[n])) return !0
                } return !1
        }

        function xs() {
            return L.extend.apply(this, [!0].concat([].slice.call(arguments)))
        }

        function ws(e, t) {
            return w.addClass.call(e, t)
        }

        function _s(e, t) {
            return w.removeClass.call(e, t)
        }

        function Ss(e, t, i) {
            return (i ? ws : _s)(e, t)
        }

        function Ts(e) {
            return w.remove.call(e)
        }

        function Cs(e, t) {
            return w.find.call(e, t).eq(0)
        }
    }
    return M && M.fn && (M.fn.overlayScrollbars = function (e, t) {
        return M.isPlainObject(e) ? (M.each(this, (function () {
            ce(this, e, t)
        })), this) : ce(this, e)
    }), ce
})), window.addEventListener("load", (function () {
    $((function () {
        for (const e of document.querySelectorAll(".modal-desktop .sub__list--overflow")) console.log(e), OverlayScrollbars(e, {});
        jQuery((function (e) {
            e(".cat__sub").hide(), matchMedia("only screen and (min-width: 768px)").matches && e("li").click((function () {
                null === document.querySelector(".cat__sub.submenu-visible") ? e(this).children(".cat__sub").fadeIn().addClass("submenu-visible") : document.querySelector(".cat__sub.submenu-visible").parentNode !== this && "cat__subitem has-sub" !== this.className && "" !== this.className && (document.querySelector(".cat__sub.submenu-visible").style.display = "none", document.querySelector(".cat__sub.submenu-visible").className = "cat__sub", e(this).children(".cat__sub").fadeIn().addClass("submenu-visible"))
            }))
        }));
        // new Swiper(".slider .swiper-container", {
        //     loop: !0,
        //     autoplay: {
        //         delay: 6e3
        //     },
        //     effect: "fade",
        //     pagination: {
        //         el: ".swiper-pagination"
        //     }
        // });
        // if ($(".products__slider").length > 0) {
        //     var e = [];
        //     $(".products__slider .swiper-container").each((function (t, i) {
        //         var n = $(this);
        //         n.addClass("instance-" + t), n.parent().find(".swiper-button-prev").addClass("prev-" + t), n.parent().find(".swiper-button-next").addClass("next-" + t), console.log(t), console.log(e[t]), e[t] = new Swiper(".instance-" + t, {
        //             slidesPerView: 4,
        //             spaceBetween: 10,
        //             navigation: {
        //                 prevEl: ".prev-" + t,
        //                 nextEl: ".next-" + t
        //             },
        //             breakpoints: {
        //                 1366: {
        //                     slidesPerView: 3
        //                 },
        //                 991: {
        //                     slidesPerView: 2
        //                 },
        //                 414: {
        //                     slidesPerView: 1
        //                 }
        //             },
        //             pagination: {
        //                 el: ".swiper-pagination",
        //                 type: "progressbar"
        //             },
        //             nested: !0
        //         })
        //     }))
        // }
        // if ($(".products__slider-similar").length > 0) {
        //     e = [];
        //     $(".products__slider-similar .swiper-container").each((function (t, i) {
        //         var n = $(this);
        //         n.addClass("instance-" + t), n.parent().find(".swiper-button-prev-similar").addClass("prev-" + t), n.parent().find(".swiper-button-next-similar").addClass("next-" + t), e[t] = new Swiper(".instance-" + t, {
        //             slidesPerView: 4,
        //             spaceBetween: 10,
        //             navigation: {
        //                 prevEl: ".prev-" + t,
        //                 nextEl: ".next-" + t
        //             },
        //             breakpoints: {
        //                 1366: {
        //                     slidesPerView: 3
        //                 },
        //                 1030: {
        //                     navigation: {
        //                         nextEl: null,
        //                         prevEl: null
        //                     }
        //                 },
        //                 768: {
        //                     slidesPerView: 2.4
        //                 },
        //                 414: {
        //                     slidesPerView: 2.4
        //                 }
        //             },
        //             pagination: {
        //                 el: ".swiper-pagination-similar",
        //                 type: "progressbar"
        //             },
        //             nested: !0
        //         })
        //     }))
        // }
        // new Swiper(".slider__promo .swiper-container", {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     spaceBetween: 15,
        //     loop: !0,
        //     autoplay: {
        //         delay: 6e3
        //     },
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev"
        //     },
        //     breakpoints: {
        //         575: {
        //             slidesPerView: 1,
        //             slidesPerGroup: 1,
        //             spaceBetween: 0
        //         }
        //     }
        // });
        $(".products__title").equalHeights(), $(".mobile__breadcrumb").on("click", (function (e) {
            e.preventDefault(), document.querySelector(".breadcrumb__list").style.visibility = "visible", $(this).next().slideToggle(), $(this).toggleClass("rotate")
        })), $(".filter__button").on("click", (function (e) {
            e.preventDefault(), $(this).next().slideToggle(), $(this).toggleClass("rotate")
        })), $((function () {
            null !== document.querySelector(".js-range-slider") && document.querySelectorAll(".js-range-slider").forEach((function (e) {
                let t = $(e),
                    i = $(".btn-outline-secondary"),
                    n = $(".min-price"),
                    s = $(".max-price");
                $("#tovarssearch-price_from")[0], $("#tovarssearch-price_from").attr("user-value"), t.ionRangeSlider({
                    skin: "big",
                    type: "double",
                    grid: !1,
                    force_edges: !0,
                    hide_min_max: !0,
                    hide_from_to: !0,
                    onChange: function (e) {
                        document.querySelectorAll("#tovarssearch-price_from").forEach((function (t) {
                            t.value = e.from
                        })), document.querySelectorAll("#tovarssearch-price_to").forEach((function (t) {
                            t.value = e.to
                        }))
                    }
                });
                let r = t.data("ionRangeSlider");
                $(i).on("click", (function () {
                    r.update({}), this.closest("form").submit()
                })), $(n).on("input", (function () {
                    for (let e = 0; e < 10; e++) event.data !== e.toString() && null !== event.data || r.update({
                        from: event.target.value,
                        to: this.closest("form").querySelector(".max-price").value
                    })
                })), $(s).on("input", (function () {
                    for (let e = 0; e < 10; e++) event.data !== e.toString() && null !== event.data || r.update({
                        from: this.closest("form").querySelector(".min-price").value,
                        to: event.target.value
                    })
                }))
            }))
        }));

        // if (null !== document.querySelectorAll(".product__image .img-responsive"))
        //     if (document.querySelectorAll(".product__image .img-responsive").length > 1) 
        //     new Swiper(".product__images .swiper-container", {
        //         loop: !0,
        //         effect: "fade",
        //         pagination: {
        //             el: ".swiper-pagination",
        //             type: "bullets"
        //         },
        //         navigation: {
        //             nextEl: ".swiper-button-next",
        //             prevEl: ".swiper-button-prev"
        //         },
        //         thumbs: {
        //             swiper: t
        //         }
        //     });
        //     else window.innerWidth <= 575 && null !== document.querySelector(".products__nav") && (document.querySelector(".products__nav").style.display = "none");
        $(".scrollto").on("click", (function () {
            let e = $(this).attr("href");
            return 0 !== $(e).length && $("html, body").animate({
                scrollTop: $(e).offset().top
            }, 765), !1
        })), $(window).width() > 575 && ($(".tag__list").height("auto").height() <= 96 ? ($(".tag__list-more").fadeOut(0), $(".tag__list").toggleClass("tag__list--min")) : $(".tag__list").height($(".tag__list-more").data("start-height") - 10)), $(window).width() <= 575 && ($(".tag__list").height("auto").height() <= 111 ? ($(".tag__list-more").fadeOut(0), $(".tag__list").toggleClass("tag__list--min")) : $(".tag__list").height($(".tag__list-more").data("start-height") + 10)), $(".mobile__icon").on("click", (function (e) {

            document.querySelector("body").scrollTo(0, 0), null !== document.querySelector(".cat__sub.submenu-visible") && ($(".cat__sub.submenu-visible").slideToggle(6), document.querySelector(".cat__sub.submenu-visible").className = "cat__sub"), e.preventDefault(), window.outerWidth > 767 ? $(".cat__left").slideToggle(6) : ("none" === document.querySelector(".cat__left").style.display || "" === document.querySelector(".cat__left").style.display ? (document.querySelector(".page__home").style.overflowY = "hidden", window.outerWidth <= 330 && (document.querySelector(".mobile.d-sm-none.d-flex").style.margin = "30px 0 0")) : (document.querySelector(".page__home").style.overflowY = "visible", window.outerWidth <= 330 && (document.querySelector(".mobile.d-sm-none.d-flex").style.margin = "0 0 0")), $(".cat__left").animate({
                width: "toggle"
            }, 500)), $(this).toggleClass("on")
        })), $(document).ready((function () {
            ("https://boxberry.ru/market/" == location.href && window.innerWidth >= 768 || "https://devmall.ru/" == location.href && window.innerWidth >= 768 || "http://gdvdtrk.ru/market/" == location.href && window.innerWidth >= 768) && ($(".cat__left").slideToggle(600), $(this).toggleClass("on"), "mobile__icon mobile__icon--tablet" === document.querySelector(".mobile__icon").className && setTimeout((function () {

                null === document.querySelector(".slider") && document.querySelector(".cat__link").click()
            }), 100)), $(".cat__list>ul>li.has-sub>a").append('<span class="holder"></span>');
            let e = 0;
            if (null !== document.querySelector(".range-controls")) {
                let t = Number(document.querySelector("#tovarssearch-price_from").value),
                    i = Number(document.querySelector("#tovarssearch-price_to").value),
                    n = 10 * Math.ceil(Math.ceil((i - t) / 210) / 10);
                document.querySelectorAll(".range-controls").forEach((function (t) {
                    let s = t.querySelector(".toggle.max-toggle");
                    s.style.left = "195px", t.parentNode.querySelector(".scale .bar").style.width = "195px", s.ontouchstart = function (r) {
                        r.preventDefault();
                        let a = r.targetTouches[0].pageX - s.getBoundingClientRect().left;

                        function o(r) {
                            let o = r.targetTouches[0].pageX - a - t.getBoundingClientRect().left;
                            o <= 210 && (t.parentNode.querySelector("#tovarssearch-price_to").value = 1e3 * Math.round(((o - 195) * (n + 10) + i) / 1e3)), t.parentNode.querySelector(".scale .bar").style.width = o - e + "px", o < 0 && (o = 0, t.parentNode.querySelector("#tovarssearch-price_to").value = 0);
                            let l = t.offsetWidth - s.offsetWidth;
                            o > l && (o = l), s.style.left = o + "px"
                        }
                        document.addEventListener("touchmove", o), document.addEventListener("touchend", (function (e) {
                            document.removeEventListener("touchmove", o)
                        }))
                    }, s.onmousedown = function (r) {
                        r.preventDefault();
                        let a = r.clientX - s.getBoundingClientRect().left;

                        function o(r) {
                            let o = r.clientX - a - t.getBoundingClientRect().left;
                            o <= 210 && (t.parentNode.querySelector("#tovarssearch-price_to").value = (r.clientX - a - t.getBoundingClientRect().left - 195) * (n + 10) + i), t.parentNode.querySelector(".scale .bar").style.width = o - e + "px", o < 0 && (o = 0, t.parentNode.querySelector("#tovarssearch-price_to").value = 0);
                            let l = t.offsetWidth - s.offsetWidth;
                            o > l && (o = l), s.style.left = o + "px"
                        }
                        document.addEventListener("mousemove", o), document.addEventListener("mouseup", (function e() {
                            document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", o)
                        }))
                    }, s.ondragstart = function () {
                        return !1
                    }
                })), document.querySelectorAll(".range-controls").forEach((function (i) {
                    let s = i.querySelector(".toggle.min-toggle");
                    s.onmousedown = function (r) {
                        r.preventDefault();
                        let a = r.clientX - s.getBoundingClientRect().left;

                        function o(r) {
                            let o = r.clientX - a - i.getBoundingClientRect().left;
                            o >= 0 && (i.parentNode.querySelector("#tovarssearch-price_from").value = Math.round((r.clientX - a - i.getBoundingClientRect().left) * (n + 10)) + t), i.parentNode.querySelector(".scale .bar").style.marginLeft = o + "px", i.parentNode.querySelector(".scale .bar").style.width = i.parentNode.querySelector(".toggle.max-toggle").style.left.replace("px", "") - i.parentNode.querySelector(".scale .bar").style.marginLeft.replace("px", "") + "px", e = o, o < 0 && (o = 0);
                            let l = i.offsetWidth - s.offsetWidth;
                            o > l && (o = l, i.parentNode.querySelector("#tovarssearch-price_from").value = "105000"), s.style.left = o + "px"
                        }
                        document.addEventListener("mousemove", o), document.addEventListener("mouseup", (function e() {
                            document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", o)
                        }))
                    }, s.ontouchstart = function (r) {
                        r.preventDefault();
                        let a = r.targetTouches[0].pageX - s.getBoundingClientRect().left;

                        function o(r) {
                            let o = r.targetTouches[0].pageX - a - i.getBoundingClientRect().left;
                            o >= 0 && (i.parentNode.querySelector("#tovarssearch-price_from").value = 1e3 * Math.round((o * (n + 10) + t) / 1e3)), i.parentNode.querySelector(".scale .bar").style.marginLeft = o + "px", i.parentNode.querySelector(".scale .bar").style.width = i.parentNode.querySelector(".toggle.max-toggle").style.left.replace("px", "") - i.parentNode.querySelector(".scale .bar").style.marginLeft.replace("px", "") + "px", e = o, o < 0 && (o = 0);
                            let l = i.offsetWidth - s.offsetWidth;
                            o > l && (o = l, i.parentNode.querySelector("#tovarssearch-price_from").value = "105000"), s.style.left = o + "px"
                        }
                        document.addEventListener("touchmove", o), document.addEventListener("touchend", (function (e) {
                            document.removeEventListener("touchmove", o)
                        }))
                    }, s.ondragstart = function () {
                        return !1
                    }
                })), document.querySelectorAll("button[type='reset']").forEach((function (t) {
                    t.addEventListener("click", (function () {
                        event.preventDefault(), console.log("tut"), document.querySelectorAll(".toggle.min-toggle")[0].style.left = "0px", document.querySelectorAll(".toggle.min-toggle")[1].style.left = "0px", document.querySelectorAll(".toggle.max-toggle")[0].style.left = "195px", document.querySelectorAll(".toggle.max-toggle")[1].style.left = "195px", document.querySelectorAll(".scale .bar")[0].style.width = "195px", document.querySelectorAll(".scale .bar")[1].style.width = "195px", document.querySelectorAll(".scale .bar")[0].style.marginLeft = "0px", document.querySelectorAll(".scale .bar")[1].style.marginLeft = "0px", e = 0
                    }))
                }))
            }
        })), null !== document.querySelector(".mobile__filters .mobile__links:first-child") && (document.querySelector(".mobile__filters .mobile__links:first-child").onclick = function () {
            document.querySelector(".modal-overlay").classList.toggle("active"), document.querySelector(".modal").classList.toggle("active"), console.log(document.querySelector(".modal.active")), document.querySelector(".modal.active").style.height = window.innerHeight + "px"
        }, document.querySelector(".close-modal") && (document.querySelector(".close-modal").onclick = function () {
            document.querySelector(".modal-overlay").className = "modal-overlay", document.querySelector(".modal").className = "modal"
        }), document.querySelector(".modal-overlay").onclick = function () {
            "modal-overlay active" == event.target.className && (document.querySelector(".modal-overlay").className = "modal-overlay", document.querySelector(".modal").className = "modal")
        }), document.querySelectorAll("span.price__curr").forEach((function (e) {
            e.innerHTML = "&#8381;"
        }))
    }));
    document.querySelector("body").addEventListener("scroll", (function () {
        null !== document.querySelector(".mobile__links-inner") ? "block" !== document.querySelector(".mobile__links-inner").style.display && (null !== document.querySelector("a.catalog__title") ? document.querySelector("a.catalog__title").getBoundingClientRect().y - 2 * window.innerHeight <= 0 ? document.querySelector(".head__btn-up").style.display = "block" : document.querySelector(".head__btn-up").style.display = "none" : -document.querySelector(".logo").getBoundingClientRect().y >= window.innerHeight ? document.querySelector(".head__btn-up").style.display = "block" : document.querySelector(".head__btn-up").style.display = "none") : null !== document.querySelector("a.catalog__title") ? document.querySelector("a.catalog__title").getBoundingClientRect().y - 2 * window.innerHeight <= 0 ? document.querySelector(".head__btn-up").style.display = "block" : document.querySelector(".head__btn-up").style.display = "none" : -document.querySelector(".logo").getBoundingClientRect().y >= window.innerHeight ? document.querySelector(".head__btn-up").style.display = "block" : document.querySelector(".head__btn-up").style.display = "none"
    })), document.querySelector("body").addEventListener("click", (function (e) {
        if (!e.target.closest(".mobile__icon") && !e.target.closest(".cat__left") && (!document.querySelector(".cat.cat-home") || document.documentElement.clientWidth <= 1199)) {
            for (const e of document.querySelectorAll(".mobile__icon")) e.classList.remove("on");
            for (const e of document.querySelectorAll(".cat__left")) e.style.display = "none"
        }
        "col-12" === event.target.className && document.querySelector(".swiper-slide-duplicate-active .col-md-7 a") && document.documentElement.clientWidth > 575 && document.querySelector(".swiper-slide-duplicate-active .col-md-7 a").click(), null !== document.querySelector(".mobile__icon.mobile__icon--tablet.on") && null === event.target.closest(".cat__left") && null !== document.querySelector(".cat__sub.submenu-visible") && "https://boxberry.ru/market/" !== location.href && document.querySelector(".mobile__icon.mobile__icon--tablet.on").click(), null === document.querySelector(".slider") || e.target.closest(".cat__left") || ($(".cat__sub.submenu-visible").fadeOut(), document.querySelector(".cat__sub.submenu-visible") && (document.querySelector(".cat__sub.submenu-visible").className = "cat__sub"))
    })), window.innerWidth <= 1200 && null !== document.querySelector(".breadcrumb .mobile__breadcrumb.d-flex.d-sm-none") && document.querySelector(".breadcrumb__list") && (document.querySelector(".breadcrumb__list").style.display = "none"), window.innerWidth <= 767 && ($(".cat__list li.has-sub > a").on("click", (function () {
        "cat__subtitle" !== event.target.className && document.querySelectorAll(".cat__subitem.has-sub>ul").forEach((function (e) {
            e.style.display = "block"
        }));
        var e = $(this).parent("li");
        e.hasClass("open") ? (e.removeClass("open"), e.find("li").removeClass("open"), e.find("ul").slideUp()) : (e.addClass("open"), e.children("ul").slideDown(), e.siblings("li").children("ul").slideUp(), e.siblings("li").removeClass("open"), e.siblings("li").find("li").removeClass("open"), e.siblings("li").find("ul").slideUp())
    })), $(".cat__list>ul>li.has-sub>a").append('<span class="holder"></span>'));
    let e = "left";
    if (null !== document.querySelector(".swiper-wrapper") && setInterval((function () {
            "0ms" !== document.querySelector(".swiper-wrapper").style.transitionDuration && ("left" === e ? null !== document.querySelector(".slider__dots ul li.active") && (null !== document.querySelector(".slider__dots ul li.active").nextElementSibling ? (document.querySelector(".slider__dots ul li.active").nextElementSibling.className = "active", document.querySelector(".slider__dots ul li.active").className = "") : (document.querySelector(".slider__dots ul li.active").className = "", document.querySelector(".slider__dots ul li:first-child").className = "active")) : null !== document.querySelector(".slider__dots ul li.active").previousElementSibling ? (document.querySelector(".slider__dots ul li.active").previousElementSibling.className = "active", document.querySelectorAll(".slider__dots ul li.active")[1].className = "") : (document.querySelector(".slider__dots ul li.active").className = "", document.querySelector(".slider__dots ul li:last-child").className = "active"))
        }), 300), null !== document.querySelector(".slider__btn-left")) {
        let t = document.querySelector(".swiper-container").swiper;
        document.querySelector(".slider__btn-left").addEventListener("click", (function () {
            t.slideNext(), e = "left"
        })), document.querySelector(".slider__btn-right").addEventListener("click", (function () {
            t.slidePrev(), e = "right"
        }))
    }

    function t() {
        $(".baner-modal-overlay").toggleClass("baner-modal-overlay--active"), $(".baner-modal").toggleClass("baner-modal--active")
    }
    document.querySelector(".head__btn-up").addEventListener("click", (function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1e3)
    })), null !== document.querySelector(".sort-filter") && document.querySelector(".sort-filter").addEventListener("click", (function () {
        "" === document.querySelector(".mobile__links-inner").style.display || "none" === document.querySelector(".mobile__links-inner").style.display ? (document.querySelector(".mobile__links-inner").style.display = "block", "block" === document.querySelector(".head__btn-up").style.display && (document.querySelector(".head__btn-up").style.display = "none")) : (document.querySelector(".mobile__links-inner").style.display = "none", -document.querySelector(".logo").getBoundingClientRect().y >= window.innerHeight && (document.querySelector(".head__btn-up").style.display = "block"))
    })), null !== document.querySelector(".cat__subtitle") && document.querySelector(".cat__subtitle").addEventListener("click", (function () {})), null !== document.querySelector(".catalog__link") && document.querySelectorAll(".catalog__link").forEach((function (e) {
        22 !== e.offsetHeight && e.classList.toggle("height")
    })), null !== document.querySelector("#w0 .empty") && document.querySelector(".catalog__products").classList.toggle("not-found"), null !== document.querySelector(".category__item") && document.querySelectorAll(".category__item").forEach((function (e, t) {
        if (4 !== t && 8 !== t && 9 !== t && 11 !== t && 13 !== t && 14 !== t) {
            let t = 0;
            e.querySelectorAll(".category__sub").forEach((function (e) {
                0 === e.offsetHeight && 0 === t && "block" !== window.getComputedStyle(e).display && (t++, e.insertAdjacentHTML("beforebegin", '<div class="category__item-more">???????????????? ??????</div>'))
            })), e.querySelector(".category__item-more").addEventListener("click", (function () {
                e.parentNode.querySelectorAll(".category__sub").forEach((function (e) {
                    e.style.display = "block"
                })), e.parentNode.querySelectorAll(".category__subitem").forEach((function (e) {
                    e.style.display = "block"
                })), e.parentNode.querySelectorAll(".category__item-more").forEach((function (e) {
                    e.style.display = "none"
                }))
            }))
        }
    })), console.log($(".tag__list-more")), $(".tag__list-more").on("click", (function (e) {
        if (document.querySelector(".tag__list--open")) $(".tag__list").height($(".tag__list").height()).animate({
            height: parseInt($(".tag__list-more").data("start-height"))
        }, 500), $(".tag__list-more").text($(".tag__list-more").data("text-more"));
        else {
            const e = $(".tag__list"),
                t = e.height(),
                i = e.css("height", "auto").height();
            e.height(t).animate({
                height: i
            }, 500), $(".tag__list-more").text($(".tag__list-more").data("text-less"))
        }
        $(".tag__list").toggleClass("tag__list--open")
    })), $(".bottom-baner__qr").on("click", t), $(".baner-modal__close").on("click", t), $(".baner-modal-overlay").on("click", e => {
        $(e.target).hasClass("baner-modal-overlay--active") && t()
    }), $(".cat__link").on("click", () => {
        console.log(document.querySelector(".cat__sub").scrollHeight)
    })
}));