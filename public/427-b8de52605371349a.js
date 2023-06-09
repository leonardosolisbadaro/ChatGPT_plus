/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-this-alias */
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [427],
  {
    38558: function (e, n, t) {
      'use strict';
      t.d(n, {
        Z: function () {
          return lr;
        },
      });
      var r,
        a,
        i,
        o,
        s,
        l,
        c,
        u,
        d,
        m,
        f,
        h,
        g,
        p,
        x = t(35250),
        v = t(91530),
        b = t.n(v),
        j = t(70079),
        y = t(73925),
        k = t(12762),
        C = t(98943),
        w = t(35025),
        Z = window.localStorage,
        N = (function () {
          function e() {
            (0, w.Z)(this, e);
          }
          return (
            (e.setItem = function (e, n) {
              if (!Z) throw Error('You cannot set localStorage server-side');
              Z.setItem(e, JSON.stringify(n));
            }),
            (e.getItem = function (e) {
              if (Z) {
                var n = Z.getItem(e);
                return 'string' == typeof n ? JSON.parse(n) : n;
              }
              return null;
            }),
            (e.removeItem = function (e) {
              if (Z) return Z.removeItem(e);
            }),
            e
          );
        })(),
        P = t(66285),
        _ = 'dfw_message_feedback',
        S = 'bucketed_history',
        I = t(74516),
        T = 'oai/apps/hasSeenStatusUpdate/'.concat('2023-03-25'),
        M = function () {
          var e = (0, P.hz)().has('oneoff_status_account'),
            n = (0, j.useRef)(Boolean(N.getItem(T))),
            t = (0, k.WS)();
          return (
            (0, j.useEffect)(
              function () {
                e &&
                  !n.current &&
                  t &&
                  (t(C.s6.oneOffStatusMessageShown),
                  I.m.warning(
                    "You attempted to purchase ChatGPT Plus during an outage. We've issued a refund and apologize for the inconvenience. If you’d like to continue your subscription, please re-subscribe.",
                    {
                      duration: 0,
                      hasCloseButton: !0,
                      onRemove: function () {
                        N.setItem(T, !0), (n.current = !0);
                      },
                    },
                  ));
              },
              [n, e, t],
            ),
            (0, x.jsx)('div', {})
          );
        },
        R = t(96424),
        F = t.n(R),
        D = t(61432),
        E = t(79876),
        q = t(33861),
        A = t(31501),
        L = t(61079),
        B = t(64705),
        O = t(59268),
        U = t(13751);
      ((p = r || (r = {})).Model = 'model'),
        (p.Temperature = 'temperature'),
        (p.Context = 'context');
      var z = 'gpt-4',
        V = 'model_cap_exceeded',
        H = (0, O.ZP)(function () {
          return { threadIds: new Set() };
        }),
        $ = (0, O.ZP)()(
          (0, U.tJ)(
            function (e) {
              return {
                isoDate: '',
                setCapTimeout: function (n) {
                  e(function () {
                    return { isoDate: n };
                  });
                },
                clearCapTimeout: function () {
                  e(function () {
                    return { isoDate: '' };
                  });
                },
              };
            },
            { name: 'oai/apps/capExpiresAt' },
          ),
        );
      function W(e, n) {
        var t;
        return e
          ? n[0].id
          : (null ===
              (t = n.find(function (e) {
                var n;
                return (n = e.id).includes('text-davinci');
              })) || void 0 === t
              ? void 0
              : t.id) || n[0].id;
      }
      function G(e, n, t) {
        var a,
          i,
          o = (0, D.useRouter)(),
          s = o.query,
          l = n || decodeURIComponent(s[r.Model] || ''),
          c = (0, P.hz)(),
          u = H().threadIds,
          d = (0, j.useMemo)(
            function () {
              if (0 !== e.length) {
                var n,
                  r = u.has(t),
                  a =
                    null ===
                      (n = e.find(function (e) {
                        return e.id === l;
                      })) || void 0 === n
                      ? void 0
                      : n.id,
                  i = (!r && a) || W(c.has('priority_driven_models_list'), e);
                return e.find(function (e) {
                  return e.id === i;
                });
              }
            },
            [e, c, l, t, u],
          ),
          m = parseFloat(s[r.Temperature] || '1'),
          f = (0, j.useCallback)(
            function (e, n) {
              o.replace(
                {
                  pathname: o.basePath,
                  query: (0, L.Z)(
                    (0, A.Z)({}, s),
                    (0, q.Z)({}, e, encodeURIComponent(n)),
                  ),
                },
                void 0,
                { shallow: !0 },
              );
            },
            [s, o],
          );
        return (0, j.useMemo)(
          function () {
            return {
              temperature: m,
              modelBackend: (null == d ? void 0 : d.id) || '',
              onChangeModelSetting: f,
            };
          },
          [f, null == d ? void 0 : d.id, m],
        );
      }
      var Y = 'oai/apps/hasSeenReleaseAnnouncement',
        J = '2023-03-12';
      function Q(e) {
        var n = e.hasSeenOnboardingDate;
        e.isUserPaid;
        var t = (0, j.useState)(!1),
          r = t[0],
          a = t[1],
          i = (0, P.hz)(),
          o = (0, D.useRouter)();
        (0, j.useEffect)(
          function () {
            a(function () {
              return (
                !Boolean(N.getItem(''.concat(Y, '/').concat(J))) &&
                !!n &&
                n < new Date(J)
              );
            });
          },
          [n],
        );
        var s = (0, j.useCallback)(function () {
            N.setItem(''.concat(Y, '/').concat(J), !0), a(!1);
          }, []),
          l = (0, j.useCallback)(
            function () {
              s(), o.replace('/?model='.concat(z));
            },
            [s, o],
          ),
          c = (0, k.WS)();
        return ((0, j.useEffect)(
          function () {
            r && c(C.s6.announcementViewed, { content: J });
          },
          [r, c],
        ),
        i.has('model_preview'))
          ? (0, x.jsx)(y.ZP, {
              size: 'small',
              isOpen: r,
              onModalClose: s,
              type: 'success',
              title: '',
              theme: 'dark',
              fullBleed: !0,
              primaryButton: (0, x.jsx)(y.mH, {
                title: 'Try GPT-4',
                color: 'light',
                onClick: l,
              }),
              secondaryButton: (0, x.jsx)(y.mH, {
                title: 'Maybe later',
                color: 'dark',
                onClick: s,
                className: 'border-gray-800 hover:border-gray-700',
              }),
              className: 'sm:max-w-[480px]',
              children: (0, x.jsx)(er, {}),
            })
          : null;
      }
      var X,
        K,
        ee,
        en,
        et,
        er = function () {
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(F(), {
                src: '/images/gpt-4-motif.svg',
                alt: 'Gpt-4 announcement banner',
                width: '480',
                height: '160',
                className: 'mt-3.5',
              }),
              (0, x.jsx)('div', {
                className: 'm-4 mb-6 flex flex-col gap-6 sm:m-6',
                children: (0, x.jsxs)('div', {
                  className: 'prose prose-invert text-base',
                  children: [
                    (0, x.jsx)('h2', { children: 'Introducing GPT-4' }),
                    (0, x.jsxs)('p', {
                      children: [
                        'Our latest model,',
                        ' ',
                        (0, x.jsx)('a', {
                          href: 'https://openai.com/product/gpt-4',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'GPT-4',
                        }),
                        ', is now available to Plus subscribers.',
                      ],
                    }),
                    (0, x.jsx)('p', {
                      children: 'GPT-4 has enhanced capabilities in:',
                    }),
                    (0, x.jsxs)('ul', {
                      children: [
                        (0, x.jsx)('li', { children: 'Advanced reasoning' }),
                        (0, x.jsx)('li', { children: 'Complex instructions' }),
                        (0, x.jsx)('li', { children: 'More creativity' }),
                      ],
                    }),
                    (0, x.jsx)('p', {
                      children:
                        "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ea = t(61706),
        ei = t(89874),
        eo = t(14806),
        es = t(25769),
        el = t(45813),
        ec = t(6128),
        eu = t(19841),
        ed = t(26649),
        em = t.n(ed),
        ef = t(11253),
        eh = t.n(ef),
        eg = t(1454),
        ep = t(34303),
        ex = t(82018),
        ev = t(95182),
        eb = t.n(ev),
        ej = t(33264),
        ey = 'content_policy',
        ek = { errType: 'warning', errCode: ey },
        eC = {
          err: 'Contents may violate our content policy',
          errType: 'danger',
          errCode: ey,
        };
      ((X = a || (a = {})).Default = 'default'),
        (X.Dark = 'dark'),
        ((K = i || (i = {})).Retrieval = 'retrieval'),
        ((ee = o || (o = {})).Next = 'next'),
        (ee.Variant = 'variant'),
        (ee.Continue = 'continue'),
        ((en = s || (s = {})).Unknown = 'unknown'),
        (en.User = 'user'),
        (en.Assistant = 'assistant'),
        (en.System = 'system'),
        (en.Critic = 'critic'),
        (en.Tool = 'tool'),
        ((et = l || (l = {})).Root = 'root'),
        (et.System = 'system'),
        (et.Prompt = 'prompt'),
        (et.Completion = 'completion');
      var ew = t(27252),
        eZ = {
          id: 'chat',
          name: 'ChatGPT',
          href: '/',
          theme: { icon: 'openai', color: '#10a37f', activeColor: '#1a7f64' },
        },
        eN = t(11699),
        eP = t(33468),
        e_ = t(47775),
        eS = t(75106),
        eI = t(43905),
        eT = t(84251),
        eM = t.n(eT),
        eR = t(8844),
        eF =
          ((c = {}),
          (0, q.Z)(c, l.Root, s.Unknown),
          (0, q.Z)(c, l.Prompt, s.User),
          (0, q.Z)(c, l.Completion, s.Assistant),
          (0, q.Z)(c, l.System, s.System),
          c),
        eD =
          ((u = {}),
          (0, q.Z)(u, s.Unknown, l.Root),
          (0, q.Z)(u, s.System, l.System),
          (0, q.Z)(u, s.User, l.Prompt),
          (0, q.Z)(u, s.Assistant, l.Completion),
          (0, q.Z)(u, s.Critic, l.Completion),
          (0, q.Z)(u, s.Tool, l.Completion),
          u),
        eE = new WeakMap(),
        eq = new WeakMap(),
        eA = (function () {
          function e(n) {
            (0, w.Z)(this, e),
              (0, e_.Z)(this, eE, { writable: !0, value: void 0 }),
              (0, e_.Z)(this, eq, { writable: !0, value: void 0 }),
              (0, eS.Z)(this, eE, n || e.createTree());
            var t = Object.values((0, eP.Z)(this, eE)).find(function (e) {
              return e.type === l.Root;
            });
            (0, eS.Z)(this, eq, (null == t ? void 0 : t.id) || 'root');
          }
          var n = e.prototype;
          return (
            (n.getNode = function (e) {
              return (0, eP.Z)(this, eE)[e];
            }),
            (n.getMessage = function (e) {
              return (0, eP.Z)(this, eE)[e].message;
            }),
            (n.getMessageId = function (e) {
              return (0, eP.Z)(this, eE)[e].message.id;
            }),
            (n.getMetadata = function (e) {
              return (0, eP.Z)(this, eE)[e].metadata;
            }),
            (n.getLeafFromNode = function (e) {
              for (var n = (0, eP.Z)(this, eE)[e]; ; ) {
                if (0 === n.children.length) return n;
                n = (0, eP.Z)(this, eE)[n.children.values().next().value];
              }
            }),
            (n.getParent = function (e) {
              var n = (0, eP.Z)(this, eE)[e].parentId;
              return (0, eP.Z)(this, eE)[n];
            }),
            (n.getParentId = function (e) {
              var n;
              return (
                (null === (n = this.getParent(e)) || void 0 === n
                  ? void 0
                  : n.id) || 'root'
              );
            }),
            (n.getBranchFromLeaf = function (e) {
              for (
                var n = [], t = (0, eP.Z)(this, eE)[e];
                n.push(t), 'root' !== t.type;

              )
                t = (0, eP.Z)(this, eE)[t.parentId];
              return n.reverse();
            }),
            (n.getChildrenFromNode = function (e) {
              var n = this,
                t = (0, eP.Z)(this, eE)[e];
              return t
                ? Array.from(t.children).map(function (e) {
                    return (0, eP.Z)(n, eE)[e];
                  })
                : [];
            }),
            (n.getFirstPrompt = function () {
              for (var e, n, t = this.getNode((0, eP.Z)(this, eq)); ; ) {
                if (!t) return;
                if (
                  t.type === l.Prompt ||
                  (t.type === l.System &&
                    (null === (e = t.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return t;
                t = (0, eP.Z)(this, eE)[
                  null === (n = t.children) || void 0 === n ? void 0 : n[0]
                ];
              }
            }),
            (n.isMessageIncomplete = function (n) {
              var t = this.getMessage(n);
              return e.getIsIncompleteFromMessage(t);
            }),
            (n.addNodeToEnd = function (e, n) {
              if (!(0, eP.Z)(this, eE)[e]) return (0, q.Z)({}, n.id, n);
              (0, eS.Z)(
                this,
                eE,
                eM()(
                  (0, eP.Z)(this, eE),
                  (0, q.Z)({ $merge: (0, q.Z)({}, n.id, n) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, B.Z)(e).concat([n.id])));
                      },
                    },
                  }),
                ),
              );
            }),
            (n.appendSystemMessageToRoot = function (e) {
              var n,
                t,
                r =
                  null === (n = this.getFirstPrompt()) || void 0 === n
                    ? void 0
                    : n.parentId;
              if (r) {
                var a = this.getNode(r),
                  i = this.getNode(a.children[0]),
                  o = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, eS.Z)(
                  this,
                  eE,
                  eM()(
                    (0, eP.Z)(this, eE),
                    ((t = { $merge: (0, q.Z)({}, o.id, o) }),
                    (0, q.Z)(t, a.id, { children: { $set: [o.id] } }),
                    (0, q.Z)(t, i.id, { parentId: { $set: o.id } }),
                    t),
                  ),
                );
              }
            }),
            (n.addNode = function (e, n, t, r, a) {
              var i =
                  'string' == typeof n
                    ? {
                        id: (0, eR.Z)(),
                        author: { role: eF[r] },
                        content: { content_type: 'text', parts: [n] },
                      }
                    : n,
                o = (0, A.Z)(
                  { id: e, children: [], parentId: t, type: r, message: i },
                  a ? { metadata: a } : {},
                );
              this.addNodeToEnd(t, o);
            }),
            (n.updateNode = function (e, n) {
              (0, eS.Z)(
                this,
                eE,
                eM()((0, eP.Z)(this, eE), (0, q.Z)({}, e, n)),
              );
            }),
            (n.updateNodeMessage = function (e, n) {
              (0, eS.Z)(
                this,
                eE,
                eM()(
                  (0, eP.Z)(this, eE),
                  (0, q.Z)({}, e, { message: { $set: n } }),
                ),
              );
            }),
            (n.updateNodeText = function (e, n) {
              (0, eS.Z)(
                this,
                eE,
                eM()(
                  (0, eP.Z)(this, eE),
                  (0, q.Z)({}, e, {
                    message: { content: { parts: { $set: [n] } } },
                  }),
                ),
              );
            }),
            (n.deleteNode = function (e) {
              var n = (0, eP.Z)(this, eE),
                t = n[e],
                r = (0, ei.Z)(n, [e].map(es.Z)),
                a = t.parentId;
              (0, eS.Z)(
                this,
                eE,
                eM()(
                  r,
                  (0, q.Z)({}, a, {
                    children: {
                      $apply: function (n) {
                        return n.filter(function (n) {
                          return n !== e;
                        });
                      },
                    },
                  }),
                ),
              );
            }),
            (n.getTextFromNode = function (n) {
              return e.getTextFromMessage(this.getMessage(n));
            }),
            (n.getHasErrorFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                ((null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === 'danger' ||
                  (null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errType) === 'warning')
              );
            }),
            (n.getIsBlockedFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                (null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errCode) === ey &&
                (null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === 'danger'
              );
            }),
            (n.getTextFromThread = function (n) {
              return this.getBranchFromLeaf(n)
                .filter(function (e) {
                  return e.type !== l.Root && e.type !== l.System;
                })
                .map(function (n) {
                  return e.getTextFromMessage(n.message);
                })
                .join('\n\n');
            }),
            (n.getTextFromLastNTurns = function (n, t) {
              var r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                a = function (e) {
                  var n = e.message.content.content_type,
                    t = e.message.author.role === s.System,
                    r = e.message.author.role === s.Tool;
                  return (
                    t ||
                    (r &&
                      !(
                        'code' === n ||
                        'execution_output' === n ||
                        'system_error' === n
                      ))
                  );
                };
              return this.getConversationTurns(n, a)
                .slice(-t)
                .map(function (n) {
                  var t = n.messages
                    .map(function (n) {
                      return e.getTextFromMessage(n.message);
                    })
                    .filter(function (e) {
                      return '' !== e;
                    })
                    .join('\n');
                  return r ? '['.concat(n.role, ']\n').concat(t) : t;
                })
                .join('\n');
            }),
            (n.getConversationTurns = function (e, n) {
              var t = this,
                r = [];
              return (
                this.getBranchFromLeaf(e).forEach(function (e) {
                  var a = e.id,
                    i = e.parentId,
                    o = e.message,
                    l = e.metadata;
                  if (null == n || !n(e)) {
                    var c = r[r.length - 1];
                    (null == c ? void 0 : c.role) === o.author.role ||
                    o.author.role === s.Tool
                      ? r[r.length - 1].messages.push(
                          (0, A.Z)({ nodeId: a, parentId: i, message: o }, l),
                        )
                      : r.push({
                          role: o.author.role,
                          messages: [
                            (0, A.Z)({ nodeId: a, parentId: i, message: o }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, eP.Z)(t, eE)[i].children)
                            : [a],
                        });
                  }
                }),
                r
              );
            }),
            (n.getLastValidNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.err);

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.getParentPromptNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.message) || void 0 === n
                  ? void 0
                  : n.author.role) !== s.User;

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: 'root',
                  children: [],
                  parentId: '',
                  type: l.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: (0, eR.Z)(),
                author: { role: eF[l.Root] },
                content: { content_type: 'text', parts: [] },
              };
            }),
            (e.getIsIncompleteFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === 'max_tokens'
              );
            }),
            (e.getWasInterruptedFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === 'interrupted'
              );
            }),
            (e.getIsContinuedFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : n.message_type) === 'continue'
              );
            }),
            (e.getModelFromMessage = function (e) {
              var n;
              return null === (n = e.metadata) || void 0 === n
                ? void 0
                : n.model_slug;
            }),
            (e.getTextFromMessage = function (e) {
              switch (e.content.content_type) {
                case 'text':
                  return e.content.parts.join('');
                case 'tether_browsing_code':
                case 'code':
                case 'execution_output':
                case 'system_error':
                  return e.content.text;
                case 'system_message':
                  var n = e.content.text,
                    t = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var i,
                        o = Object.values(e.content.tools_section)[
                          Symbol.iterator
                        ]();
                      !(t = (i = o.next()).done);
                      t = !0
                    ) {
                      var s = i.value;
                      n += '\n\n'.concat(s);
                    }
                  } catch (l) {
                    (r = !0), (a = l);
                  } finally {
                    try {
                      t || null == o.return || o.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return n;
                default:
                  return '';
              }
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              var n = e.messages[e.messages.length - 1];
              return this.getIsContinuedFromMessage(n.message)
                ? n.nodeId
                : e.messages[0].nodeId;
            }),
            (e.getRecipientFromMessage = function (e) {
              return e.recipient || '';
            }),
            (0, eI.Z)(e, [
              {
                key: 'isFirstCompletion',
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var n = (0, eP.Z)(this, eE)[e.children[0]];
                    if (n && 0 === n.children.length) return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })(),
        eL = t(2827);
      function eB(e) {
        var n = e.id,
          t = e.label;
        return (0, x.jsxs)('div', {
          className: 'form-check',
          children: [
            (0, x.jsx)('input', {
              className:
                'form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none',
              type: 'checkbox',
              value: '',
              id: n,
            }),
            (0, x.jsx)('label', {
              className:
                'form-check-label inline-block text-gray-800 dark:text-gray-100',
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      var eO,
        eU = t(54655),
        ez = t(34383);
      function eV(e) {
        var n, t;
        if (e.author.role === s.Assistant) {
          if ('bing_search' === e.recipient) return d.SimpleBrowsing;
          if ('browser' === e.recipient || 'restricted_browser' === e.recipient)
            return d.Browsing;
          if (
            'code' === e.content.content_type ||
            ('python' === e.recipient && 'text' === e.content.content_type)
          )
            return d.Code;
          else if (
            null === (n = e.recipient) || void 0 === n
              ? void 0
              : n.includes('.')
          )
            return d.Plugin;
        } else if (e.author.role === s.Tool) {
          if (
            'bing_search' === e.author.name ||
            'browser' === e.author.name ||
            'restricted_browser' === e.author.name
          )
            return d.BrowseTool;
          if ('execution_output' === e.content.content_type)
            return d.CodeExecutionOutput;
          if (
            null === (t = e.author.name) || void 0 === t
              ? void 0
              : t.includes('.')
          )
            return d.PluginTool;
        } else if ('text' === e.content.content_type) return d.Text;
        return d.Unknown;
      }
      ((eO = d || (d = {}))[(eO.Text = 0)] = 'Text'),
        (eO[(eO.SimpleBrowsing = 1)] = 'SimpleBrowsing'),
        (eO[(eO.Browsing = 2)] = 'Browsing'),
        (eO[(eO.BrowseTool = 3)] = 'BrowseTool'),
        (eO[(eO.Code = 4)] = 'Code'),
        (eO[(eO.CodeExecutionOutput = 5)] = 'CodeExecutionOutput'),
        (eO[(eO.Plugin = 6)] = 'Plugin'),
        (eO[(eO.PluginTool = 7)] = 'PluginTool'),
        (eO[(eO.Unknown = 8)] = 'Unknown');
      var eH = t(13002);
      function e$(e) {
        var n = e.url,
          t = e.name,
          r = e.size,
          a = e.large;
        return (0, x.jsxs)('div', {
          className: 'relative',
          style: { width: r, height: r },
          children: [
            (0, x.jsx)('img', {
              src: n,
              alt: ''.concat(t, ' logo'),
              className: (0, eu.Z)(
                'h-full w-full bg-white',
                a ? 'rounded-[5px]' : 'rounded-sm',
              ),
            }),
            (0, x.jsx)('div', {
              className: (0, eu.Z)(
                'absolute inset-0 ring-1 ring-inset ring-black/10',
                a ? 'rounded-[5px]' : 'rounded-sm',
              ),
            }),
          ],
        });
      }
      function eW() {
        var e = (0, eo.Z)([
          'relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center',
        ]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function eG() {
        var e = (0, eo.Z)([
          '\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (eG = function () {
            return e;
          }),
          e
        );
      }
      function eY() {
        var e = (0, eo.Z)([
          'bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest',
        ]);
        return (
          (eY = function () {
            return e;
          }),
          e
        );
      }
      function eJ() {
        var e = (0, eo.Z)(['relative flex']);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      var eQ = ep.Z.div(eW()),
        eX = ep.Z.span(
          eG(),
          function (e) {
            return 'warning' === e.$type && 'bg-orange-500 text-white';
          },
          function (e) {
            return 'danger' === e.$type && 'bg-red-500 text-white';
          },
        ),
        eK = function (e) {
          var n = e.iconName,
            t = e.background,
            r = e.notice,
            a = E.nI;
          switch (n) {
            case 'globe':
              a = eg.RsK;
              break;
            case 'terminal':
              a = eg.cDN;
              break;
            case 'text':
              a = eg.RUS;
              break;
            case 'browsing':
              a = eg.jRj;
              break;
            case 'code':
              a = eH.oT$;
              break;
            case 'plugin':
              a = eg.yG;
          }
          return (0, x.jsxs)(eQ, {
            style: { backgroundColor: t },
            children: [
              (0, x.jsx)(E.ZP, { icon: a, size: 'medium' }),
              r && (0, x.jsx)(eX, { $type: r, children: '!' }),
            ],
          });
        },
        e0 = function (e) {
          var n = e.plugin,
            t = e.notice;
          return (0, x.jsxs)(eQ, {
            className: 'p-0',
            children: [
              (0, x.jsx)(e$, {
                url: n.manifest.logo_url,
                name: n.manifest.name_for_human,
                size: '100%',
              }),
              t && (0, x.jsx)(eX, { $type: t, children: '!' }),
            ],
          });
        },
        e1 = ep.Z.div(eY()),
        e2 = ep.Z.div(eJ()),
        e3 = function (e) {
          var n = e.user,
            t = e.size,
            r = void 0 === t ? 'small' : t,
            a = e.notice,
            i = a && (0, x.jsx)(eX, { $type: a, children: '!' });
          if (null == n ? void 0 : n.picture)
            return (0, x.jsxs)(e2, {
              children: [
                (0, x.jsx)(F(), {
                  src: n.picture,
                  alt: n.name,
                  width: 'small' === r ? 30 : 38,
                  height: 'small' === r ? 30 : 38,
                  className: 'rounded-sm',
                }),
                i,
              ],
            });
          var o = ((null == n ? void 0 : n.name) || '')
            .split(' ')
            .map(function (e) {
              return e[0];
            })
            .join('');
          return (0, x.jsxs)(e1, {
            className: (0, eu.Z)(
              'small' === r ? 'h-8 w-8 text-xs' : 'h-10 w-10 text-lg',
            ),
            children: [
              o || (0, x.jsx)(E.ZP, { icon: eg.fzv, size: 'medium' }),
              i,
            ],
          });
        },
        e4 = function () {
          var e = (0, j.useRef)(!1);
          return (
            (0, j.useEffect)(function () {
              return (
                (e.current = !0),
                function () {
                  e.current = !1;
                }
              );
            }, []),
            (0, j.useCallback)(function () {
              return e.current;
            }, [])
          );
        };
      function e5() {
        var e = (0, eo.Z)(['flex ml-auto gap-2']);
        return (
          (e5 = function () {
            return e;
          }),
          e
        );
      }
      function e6(e) {
        var n = e.buttonText,
          t = e.onCopy,
          r = e.className,
          a = (0, j.useState)(!1),
          i = a[0],
          o = a[1],
          s = e4(),
          l = (0, j.useCallback)(
            function () {
              t(),
                o(!0),
                setTimeout(function () {
                  s() && o(!1);
                }, 2e3);
            },
            [s, t],
          );
        return (0, x.jsxs)(x.Fragment, {
          children: [
            !i &&
              (0, x.jsxs)(e8, {
                onClick: l,
                className: r,
                children: [(0, x.jsx)(E.ZP, { icon: eg.j4u }), n],
              }),
            i &&
              (0, x.jsxs)(e8, {
                className: r,
                children: [(0, x.jsx)(E.ZP, { icon: eg.UgA }), n && 'Copied!'],
              }),
          ],
        });
      }
      var e8 = ep.Z.button(e5());
      function e7() {
        var e = (0, eo.Z)(['text-xs flex items-center justify-center gap-1']);
        return (
          (e7 = function () {
            return e;
          }),
          e
        );
      }
      function e9() {
        var e = (0, eo.Z)([
          'dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400',
        ]);
        return (
          (e9 = function () {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = (0, eo.Z)(['flex-grow flex-shrink-0']);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      function nn(e) {
        var n = e.currentPage,
          t = e.onChangeIndex,
          r = e.length,
          a = e.className,
          i = function (e) {
            t(eb()(n + e, 0, r - 1));
          };
        return (0, x.jsxs)(nt, {
          className: a,
          children: [
            (0, x.jsx)(nr, {
              onClick: function () {
                return i(-1);
              },
              disabled: 0 === n,
              children: (0, x.jsx)(E.ZP, { size: 'xsmall', icon: eg.YFh }),
            }),
            (0, x.jsx)(na, { children: ''.concat(n + 1, ' / ').concat(r) }),
            (0, x.jsx)(nr, {
              onClick: function () {
                return i(1);
              },
              disabled: n === r - 1,
              children: (0, x.jsx)(E.ZP, { size: 'xsmall', icon: eg.Tfp }),
            }),
          ],
        });
      }
      var nt = ep.Z.div(e7()),
        nr = ep.Z.button(e9()),
        na = ep.Z.span(ne());
      function ni(e) {
        var n,
          t = e.url,
          r = e.size,
          a = void 0 === r ? 16 : r,
          i = e.className;
        try {
          n = new URL(t);
        } catch (o) {
          return console.error(o), null;
        }
        return (0, x.jsx)('img', {
          src: 'https://icons.duckduckgo.com/ip3/'.concat(n.hostname, '.ico'),
          alt: 'Favicon',
          width: a,
          height: a,
          className: i,
        });
      }
      var no = t(77064),
        ns = '&#8203;',
        nl = 'oaicite:';
      function nc(e) {
        var n,
          t = e.displayInfo;
        return (0, x.jsx)(no.$, {
          label: (0, x.jsx)(nu, {
            pageInfo: t.metadata,
            invalidReason: t.invalid_reason,
          }),
          placement: 'top',
          offset: [0, 3],
          leaveDelay: 150,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, x.jsx)('a', {
            href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
            target: '_blank',
            rel: 'noreferrer',
            className: 'text-green-600 !no-underline',
            children: (0, x.jsx)('sup', { children: t.index + 1 }),
          }),
        });
      }
      function nu(e) {
        var n = e.pageInfo,
          t = e.invalidReason;
        return (0, x.jsx)('a', {
          href: null == n ? void 0 : n.url,
          target: '_blank',
          rel: 'noreferrer',
          className: '!no-underline',
          children: (0, x.jsx)(no.u, {
            children: n
              ? (0, x.jsxs)('div', {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, x.jsx)('div', {
                      className: 'flex shrink-0 items-center justify-center',
                      children: (0, x.jsx)(ni, {
                        url: n.url,
                        className: 'my-0',
                      }),
                    }),
                    (0, x.jsx)('div', {
                      className: 'max-w-xs truncate text-xs',
                      children: n.title,
                    }),
                    (0, x.jsx)('div', {
                      className: 'shrink-0',
                      children: (0, x.jsx)(E.ZP, {
                        icon: eg.AlO,
                        size: 'xsmall',
                      }),
                    }),
                  ],
                })
              : (0, x.jsx)('div', {
                  className: 'text-red-500',
                  children: t || 'Invalid citation',
                }),
          }),
        });
      }
      var nd = t(1744);
      function nm() {
        var e = (0, eo.Z)(['flex flex-col items-start']);
        return (
          (nm = function () {
            return e;
          }),
          e
        );
      }
      function nf() {
        var e = (0, eo.Z)([
          'flex items-center text-sm bg-green-100 rounded p-3 text-gray-900 ',
          '',
        ]);
        return (
          (nf = function () {
            return e;
          }),
          e
        );
      }
      function nh() {
        var e = (0, eo.Z)([
          'max-w-full overflow-x-auto mt-3 flex flex-col gap-2 rounded bg-gray-100 p-3 text-sm text-gray-800',
        ]);
        return (
          (nh = function () {
            return e;
          }),
          e
        );
      }
      var ng = j.memo(function (e) {
          var n = e.children,
            t = e.isComplete,
            r = e.expanderClosedLabel,
            a = e.expanderOpenLabel,
            i = e.resultsPreview,
            o = e.results,
            s = e.initialExpanded,
            l = e.onExpand,
            c = (0, j.useState)(void 0 !== s && s),
            u = c[0],
            d = c[1],
            m = (0, j.useCallback)(
              function () {
                d(function (e) {
                  return !e;
                }),
                  null == l || l();
              },
              [l],
            );
          return (0,
          x.jsxs)(np, { children: [(0, x.jsxs)(nx, { $complete: t, children: [(0, x.jsx)('div', { children: n }), !t && (0, x.jsx)(nd.Z, { className: o ? 'ml-1' : 'ml-12' }), o && (0, x.jsxs)('div', { className: 'ml-12 flex items-center gap-2', role: 'button', onClick: m, children: [a && r && (0, x.jsx)('div', { className: 'text-xs text-gray-600', children: u ? a : r }), !u && i, (0, x.jsx)(E.ZP, { icon: u ? eg.rH8 : eg.bTu })] })] }), u && o] });
        }),
        np = ep.Z.div(nm()),
        nx = ep.Z.div(nf(), function (e) {
          return e.$complete && 'bg-gray-100';
        }),
        nv = ep.Z.div(nh()),
        nb = j.memo(function (e) {
          var n = e.messages,
            t = e.isComplete,
            r = n.filter(function (e) {
              return e.message.author.role === s.Tool;
            }),
            a = (0, x.jsx)(nj, { messages: r, isComplete: t });
          return (0,
          x.jsx)(ng, { isComplete: t, results: a, children: t ? 'Finished browsing' : 'Browsing the web...' });
        });
      function nj(e) {
        var n = e.messages,
          t = e.isComplete,
          r = n.map(function (e, n) {
            var t = e.message.metadata;
            if (!t) return null;
            var r = t.command,
              a = t.status;
            if (!r) return null;
            if ('system_error' === e.message.content.content_type)
              return (0, x.jsx)(nP, { command: r }, n);
            switch (r) {
              case 'search':
                var i,
                  o = null === (i = t.args) || void 0 === i ? void 0 : i[0];
                if (!o) return null;
                return (0,
                x.jsx)(nk, { searchQuery: o, isComplete: 'finished' === a }, n);
              case 'click':
              case 'open_url':
                var s,
                  l =
                    null === (s = t._cite_metadata) || void 0 === s
                      ? void 0
                      : s.metadata_list[0];
                return (0, x.jsx)(nC, { pageInfo: l }, n);
              case 'quote':
              case 'quote_full':
                return (0, x.jsx)(nw, {}, n);
              case 'back':
                return (0, x.jsx)(nZ, {}, n);
              case 'scroll':
                return (0, x.jsx)(nN, {}, n);
              default:
                return null;
            }
          });
        return (
          t &&
            r.push(
              (0, x.jsx)(
                ny,
                { icon: eg._rq, children: 'Finished browsing' },
                'finished',
              ),
            ),
          r.length > 0
            ? (0, x.jsx)(nv, { className: 'text-xs', children: r })
            : null
        );
      }
      function ny(e) {
        var n = e.children,
          t = e.icon;
        return (0, x.jsxs)('div', {
          className: 'flex min-h-[24px] items-center gap-2',
          children: [
            (0, x.jsx)(E.ZP, { icon: t, className: 'shrink-0' }),
            (0, x.jsx)('div', { children: n }),
          ],
        });
      }
      function nk(e) {
        var n = e.searchQuery,
          t = e.isComplete;
        return (0, x.jsx)(ny, {
          icon: eg.jRj,
          children: t
            ? (0, x.jsxs)(x.Fragment, {
                children: [
                  'Searched: ',
                  (0, x.jsxs)('b', { children: ['“', n, '”'] }),
                ],
              })
            : (0, x.jsxs)(x.Fragment, {
                children: [
                  'Searching: ',
                  (0, x.jsxs)('b', { children: ['“', n, '”'] }),
                ],
              }),
        });
      }
      function nC(e) {
        var n = e.pageInfo;
        return (0, x.jsx)(ny, {
          icon: eg.PS6,
          children: n
            ? (0, x.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  'Clicked on:',
                  ' ',
                  (0, x.jsx)('div', {
                    className: 'rounded border border-black/10 bg-white',
                    children: (0, x.jsx)(nu, { pageInfo: n }),
                  }),
                ],
              })
            : 'Clicking on a link...',
        });
      }
      function nw() {
        return (0, x.jsx)(ny, { icon: eg.SnF, children: 'Reading content' });
      }
      function nZ() {
        return (0, x.jsx)(ny, {
          icon: eg.cww,
          children: 'Going back to last page',
        });
      }
      function nN() {
        return (0, x.jsx)(ny, { icon: eg.nlg, children: 'Scrolling down' });
      }
      function nP(e) {
        var n,
          t = e.command;
        switch (t) {
          case 'search':
            n = 'Search';
            break;
          case 'click':
          case 'open_url':
            n = 'Click';
            break;
          case 'quote':
          case 'quote_full':
            n = 'Reading content';
            break;
          case 'back':
            n = 'Going back';
            break;
          case 'scroll':
            n = 'Scroll';
            break;
          default:
            return null;
        }
        return (0, x.jsxs)(ny, { icon: eg.bcx, children: [n, ' failed'] });
      }
      var n_ = j.memo(function (e) {
        var n,
          t = e.message,
          r = e.isCollapsed,
          a =
            null === (n = t.message.metadata) || void 0 === n
              ? void 0
              : n.aggregate_result;
        if (!a)
          return console.error('Corrupt code execution result message'), null;
        var i = a.messages.filter(nT),
          o = r && i.length > 0,
          s = r && null != a.final_expression_output,
          l = r && null != a.in_kernel_exception,
          c = !r && a.messages.filter(nI).length > 0;
        return (0, x.jsxs)(x.Fragment, {
          children: [
            o &&
              (0, x.jsx)(nS, {
                label: 'STDOUT/STDERR',
                output: i.map(function (e, n) {
                  return (0,
                  x.jsx)('span', { className: 'stderr' === e.stream_name ? 'text-red-500' : '', children: e.text }, ''.concat(n));
                }),
              }),
            s &&
              (0, x.jsx)(nS, {
                label: 'RESULT',
                output: a.final_expression_output,
              }),
            l &&
              (0, x.jsx)('div', {
                className:
                  'overflow-auto rounded border-t border-gray-500 bg-black text-white',
                children: (0, x.jsx)('div', {
                  className: 'border-l-4 border-red-500 p-2 text-xs',
                  children: (0, x.jsx)('div', {
                    className:
                      'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse',
                    children: (0, x.jsx)('pre', {
                      className: 'shrink-0',
                      children: a.in_kernel_exception.traceback.join(''),
                    }),
                  }),
                }),
              }),
            c &&
              a.messages.filter(nI).map(function (e, n) {
                return (0,
                x.jsx)('div', { children: (0, x.jsx)('img', { src: 'data:image/png;base64,'.concat(e.image_payload) }) }, ''.concat(n));
              }),
          ],
        });
      });
      function nS(e) {
        var n = e.label,
          t = e.output;
        return (0, x.jsxs)('div', {
          className: 'rounded-md bg-black p-4 text-xs',
          children: [
            (0, x.jsx)('div', { className: 'mb-1 text-gray-400', children: n }),
            (0, x.jsx)('div', {
              className:
                'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 prose flex max-h-64 flex-col-reverse overflow-auto text-white',
              children: (0, x.jsx)('pre', {
                className: 'shrink-0',
                children: t,
              }),
            }),
          ],
        });
      }
      function nI(e) {
        return 'image' === e.message_type;
      }
      function nT(e) {
        return 'stream' === e.message_type;
      }
      var nM = t(15762),
        nR = t(45306),
        nF = t(93949),
        nD = t(61110),
        nE = t(55975),
        nq = t(46050),
        nA = t(29874),
        nL = t(8449),
        nB = t(15472);
      function nO(e, n, t) {}
      function nU(e, n) {}
      let nz = {
          tokenize: function (e, n, t) {
            let r = this,
              a = this.events[this.events.length - 1],
              i =
                a && a[1].type === nB.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = [];
            return function (n) {
              return (
                n !== nE.q.backslash && nO('expected `\\`', n),
                e.enter('mathFlow'),
                e.enter('mathFlowFence'),
                e.enter('mathFlowFenceSequence'),
                (function n(r) {
                  return (nO('sequenceOpen', r),
                  r === nE.q.backslash ||
                    (r === nE.q.leftSquareBracket && o[0] === nE.q.backslash))
                    ? (e.consume(r), o.push(r), n)
                    : (e.exit('mathFlowFenceSequence'),
                      o.length < 2
                        ? t(r)
                        : (0, nq.f)(e, s, nB.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return (nO('metaOpen', n), n === nE.q.eof || (0, nA.Ch)(n))
                ? l(n)
                : (e.enter('mathFlowFenceMeta'),
                  e.enter(nB.V.chunkString, {
                    contentType: nL._.contentTypeString,
                  }),
                  (function n(r) {
                    return (nO('meta', r), r === nE.q.eof || (0, nA.Ch)(r))
                      ? (e.exit(nB.V.chunkString),
                        e.exit('mathFlowFenceMeta'),
                        l(r))
                      : r === nE.q.rightSquareBracket
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                nO('openAfter', t),
                e.exit('mathFlowFence'),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return (nO('contentStart', t), t === nE.q.eof)
                        ? c(t)
                        : (0, nA.Ch)(t)
                        ? e.attempt(
                            nV,
                            e.attempt(
                              { tokenize: u, partial: !0 },
                              c,
                              i ? (0, nq.f)(e, n, nB.V.linePrefix, i + 1) : n,
                            ),
                            c,
                          )(t)
                        : (e.enter('mathFlowValue'),
                          (function t(r) {
                            return (nO('contentContinue', r),
                            r === nE.q.eof || (0, nA.Ch)(r))
                              ? (e.exit('mathFlowValue'), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function c(t) {
              return nO('after', t), e.exit('mathFlow'), n(t);
            }
            function u(e, n, t) {
              let r = [];
              return (0, nq.f)(
                e,
                function (n) {
                  return (
                    nO('closingPrefixAfter', n),
                    e.enter('mathFlowFence'),
                    e.enter('mathFlowFenceSequence'),
                    (function n(i) {
                      return (nO('closingSequence', i),
                      (i === nE.q.backslash && 0 === r.length) ||
                        (i === nE.q.rightSquareBracket &&
                          r[0] === nE.q.backslash))
                        ? (e.consume(i), r.push(i), n)
                        : r < o
                        ? t(i)
                        : (e.exit('mathFlowFenceSequence'),
                          (0, nq.f)(e, a, nB.V.whitespace)(i));
                    })(n)
                  );
                },
                nB.V.linePrefix,
                nL._.tabSize,
              );
              function a(r) {
                return (nO('closingSequenceEnd', r),
                r === nE.q.eof || (0, nA.Ch)(r))
                  ? (e.exit('mathFlowFence'), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        nV = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                e.enter(nB.V.lineEnding),
                e.consume(n),
                e.exit(nB.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        nH = {
          tokenize: function (e, n, t) {
            let r = this,
              a = r.events[r.events.length - 1],
              i =
                a && a[1].type === nB.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              o = 0;
            return function (n) {
              return (
                n !== nE.q.dollarSign && nO('expected `$`', n),
                e.enter('mathFlow'),
                e.enter('mathFlowFence'),
                e.enter('mathFlowFenceSequence'),
                (function n(r) {
                  return (nO('sequenceOpen', r), r === nE.q.dollarSign)
                    ? (e.consume(r), o++, n)
                    : (e.exit('mathFlowFenceSequence'),
                      o < 2 ? t(r) : (0, nq.f)(e, s, nB.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return (nO('metaOpen', n), n === nE.q.eof || (0, nA.Ch)(n))
                ? l(n)
                : (e.enter('mathFlowFenceMeta'),
                  e.enter(nB.V.chunkString, {
                    contentType: nL._.contentTypeString,
                  }),
                  (function n(r) {
                    return (nO('meta', r), r === nE.q.eof || (0, nA.Ch)(r))
                      ? (e.exit(nB.V.chunkString),
                        e.exit('mathFlowFenceMeta'),
                        l(r))
                      : r === nE.q.dollarSign
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                nO('openAfter', t),
                e.exit('mathFlowFence'),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return (nO('contentStart', t), t === nE.q.eof)
                        ? c(t)
                        : (0, nA.Ch)(t)
                        ? e.attempt(
                            n$,
                            e.attempt(
                              { tokenize: u, partial: !0 },
                              c,
                              i ? (0, nq.f)(e, n, nB.V.linePrefix, i + 1) : n,
                            ),
                            c,
                          )(t)
                        : (e.enter('mathFlowValue'),
                          (function t(r) {
                            return (nO('contentContinue', r),
                            r === nE.q.eof || (0, nA.Ch)(r))
                              ? (e.exit('mathFlowValue'), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function c(t) {
              return nO('after', t), e.exit('mathFlow'), n(t);
            }
            function u(e, n, t) {
              let r = 0;
              return (0, nq.f)(
                e,
                function (n) {
                  return (
                    nO('closingPrefixAfter', n),
                    e.enter('mathFlowFence'),
                    e.enter('mathFlowFenceSequence'),
                    (function n(i) {
                      return (nO('closingSequence', i), i === nE.q.dollarSign)
                        ? (e.consume(i), r++, n)
                        : r < o
                        ? t(i)
                        : (e.exit('mathFlowFenceSequence'),
                          (0, nq.f)(e, a, nB.V.whitespace)(i));
                    })(n)
                  );
                },
                nB.V.linePrefix,
                nL._.tabSize,
              );
              function a(r) {
                return (nO('closingSequenceEnd', r),
                r === nE.q.eof || (0, nA.Ch)(r))
                  ? (e.exit('mathFlowFence'), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        n$ = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                (0, nA.Ch)(n) && nO('expected eol', n),
                e.enter(nB.V.lineEnding),
                e.consume(n),
                e.exit(nB.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      function nW(e) {
        let n = e.length - 4,
          t = 3,
          r,
          a;
        if (
          (e[t][1].type === nB.V.lineEnding || 'space' === e[t][1].type) &&
          (e[n][1].type === nB.V.lineEnding || 'space' === e[n][1].type)
        ) {
          for (r = t; ++r < n; )
            if ('mathTextData' === e[r][1].type) {
              (e[n][1].type = 'mathTextPadding'),
                (e[t][1].type = 'mathTextPadding'),
                (t += 2),
                (n -= 2);
              break;
            }
        }
        for (r = t - 1, n++; ++r <= n; )
          void 0 === a
            ? r !== n && e[r][1].type !== nB.V.lineEnding && (a = r)
            : (r === n || e[r][1].type === nB.V.lineEnding) &&
              ((e[a][1].type = 'mathTextData'),
              r !== a + 2 &&
                ((e[a][1].end = e[r - 1][1].end),
                e.splice(a + 2, r - a - 2),
                (n -= r - a - 2),
                (r = a + 2)),
              (a = void 0));
        return e;
      }
      function nG(e) {
        return (
          e !== nE.q.backslash ||
          this.events[this.events.length - 1][1].type === nB.V.characterEscape
        );
      }
      function nY(e) {
        let n = e.length - 4,
          t = 3,
          r,
          a;
        if (
          (e[t][1].type === nB.V.lineEnding || 'space' === e[t][1].type) &&
          (e[n][1].type === nB.V.lineEnding || 'space' === e[n][1].type)
        ) {
          for (r = t; ++r < n; )
            if ('mathTextData' === e[r][1].type) {
              (e[n][1].type = 'mathTextPadding'),
                (e[t][1].type = 'mathTextPadding'),
                (t += 2),
                (n -= 2);
              break;
            }
        }
        for (r = t - 1, n++; ++r <= n; )
          void 0 === a
            ? r !== n && e[r][1].type !== nB.V.lineEnding && (a = r)
            : (r === n || e[r][1].type === nB.V.lineEnding) &&
              ((e[a][1].type = 'mathTextData'),
              r !== a + 2 &&
                ((e[a][1].end = e[r - 1][1].end),
                e.splice(a + 2, r - a - 2),
                (n -= r - a - 2),
                (r = a + 2)),
              (a = void 0));
        return e;
      }
      function nJ(e) {
        return (
          e !== nE.q.dollarSign ||
          this.events[this.events.length - 1][1].type === nB.V.characterEscape
        );
      }
      function nQ(e) {
        let n = e.length - 4,
          t = 3,
          r,
          a;
        if (
          (e[t][1].type === nB.V.lineEnding || 'space' === e[t][1].type) &&
          (e[n][1].type === nB.V.lineEnding || 'space' === e[n][1].type)
        ) {
          for (r = t; ++r < n; )
            if ('mathTextData' === e[r][1].type) {
              (e[n][1].type = 'mathTextPadding'),
                (e[t][1].type = 'mathTextPadding'),
                (t += 2),
                (n -= 2);
              break;
            }
        }
        for (r = t - 1, n++; ++r <= n; )
          void 0 === a
            ? r !== n && e[r][1].type !== nB.V.lineEnding && (a = r)
            : (r === n || e[r][1].type === nB.V.lineEnding) &&
              ((e[a][1].type = 'mathTextData'),
              r !== a + 2 &&
                ((e[a][1].end = e[r - 1][1].end),
                e.splice(a + 2, r - a - 2),
                (n -= r - a - 2),
                (r = a + 2)),
              (a = void 0));
        return e;
      }
      function nX(e) {
        return (
          e !== nE.q.backslash ||
          this.events[this.events.length - 1][1].type === nB.V.characterEscape
        );
      }
      var nK = t(67726),
        n0 = t(9871),
        n1 = t(93362),
        n2 = t(45369),
        n3 = t(42426),
        n4 = t(65028),
        n5 = t(88366);
      function n6() {
        var e = (0, eo.Z)(['bg-black rounded-md']);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      function n8() {
        var e = (0, eo.Z)([
          'flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md',
        ]);
        return (
          (n8 = function () {
            return e;
          }),
          e
        );
      }
      function n7() {
        var e = (0, eo.Z)(['p-4 overflow-y-auto']);
        return (
          (n7 = function () {
            return e;
          }),
          e
        );
      }
      function n9() {
        var e = (0, eo.Z)(['', '']);
        return (
          (n9 = function () {
            return e;
          }),
          e
        );
      }
      var te = ep.Z.div(n6()),
        tn = ep.Z.div(n8()),
        tt = ep.Z.div(n7()),
        tr = ep.Z.code(n9(), function (e) {
          return e.$shouldWrap ? '!whitespace-pre-wrap' : '!whitespace-pre';
        });
      function ta(e) {
        var n = e.children,
          t = e.className,
          r = e.language,
          a = e.content,
          i = (0, j.useCallback)(
            function () {
              navigator.clipboard.writeText(a);
            },
            [a],
          );
        return (0, x.jsx)(ti, {
          title: r,
          headerDecoration: (0, x.jsx)(e6, {
            buttonText: 'Copy code',
            onCopy: i,
          }),
          className: 'mb-4',
          codeClassName: t,
          children: n,
        });
      }
      function ti(e) {
        var n = e.children,
          t = e.title,
          r = e.headerDecoration,
          a = e.shouldWrapCode,
          i = e.className,
          o = e.codeClassName;
        return (0, x.jsxs)(te, {
          className: i,
          children: [
            (0, x.jsxs)(tn, {
              children: [t && (0, x.jsx)('span', { children: t }), r],
            }),
            (0, x.jsx)(tt, {
              children: (0, x.jsx)(tr, {
                $shouldWrap: void 0 !== a && a,
                className: o,
                children: n,
              }),
            }),
          ],
        });
      }
      var to = function (e) {
          return e.startsWith(nF.SANDBOX_LINK_PREFIX) ? e : (0, n0.A)(e);
        },
        ts = [
          n4.Z,
          [
            function () {
              let e = this.data();
              function n(n, t) {
                let r = e[n] ? e[n] : (e[n] = []);
                r.push(t);
              }
              n('micromarkExtensions', {
                flow: { [nE.q.dollarSign]: nH, [nE.q.backslash]: nz },
                text: {
                  [nE.q.dollarSign]: {
                    tokenize: function (e, n, t) {
                      let r = 0,
                        a,
                        i;
                      return function (n) {
                        return (
                          e.enter('mathText'),
                          e.enter('mathTextSequence'),
                          (function n(a) {
                            return a === nE.q.dollarSign
                              ? (e.consume(a), r++, n)
                              : r < 2
                              ? t(a)
                              : (e.exit('mathTextSequence'), o(a));
                          })(n)
                        );
                      };
                      function o(l) {
                        return l === nE.q.eof
                          ? t(l)
                          : l === nE.q.dollarSign
                          ? ((i = e.enter('mathTextSequence')),
                            (a = 0),
                            (function t(o) {
                              return o === nE.q.dollarSign
                                ? (e.consume(o), a++, t)
                                : a === r
                                ? (e.exit('mathTextSequence'),
                                  e.exit('mathText'),
                                  n(o))
                                : ((i.type = 'mathTextData'), s(o));
                            })(l))
                          : l === nE.q.space
                          ? (e.enter('space'), e.consume(l), e.exit('space'), o)
                          : (0, nA.Ch)(l)
                          ? (e.enter(nB.V.lineEnding),
                            e.consume(l),
                            e.exit(nB.V.lineEnding),
                            o)
                          : (e.enter('mathTextData'), s(l));
                      }
                      function s(n) {
                        return n === nE.q.eof ||
                          n === nE.q.space ||
                          n === nE.q.dollarSign ||
                          (0, nA.Ch)(n)
                          ? (e.exit('mathTextData'), o(n))
                          : (e.consume(n), s);
                      }
                    },
                    resolve: nY,
                    previous: nJ,
                  },
                  [nE.q.backslash]: [
                    {
                      tokenize: function (e, n, t) {
                        let r = [],
                          a = [],
                          i,
                          o = this;
                        return function (n) {
                          return (
                            nO('start', n),
                            n !== nE.q.backslash && nU('expected `\\`', n),
                            nG.call(o, o.previous) &&
                              nU('expected correct previous', o.previous),
                            e.enter('mathText'),
                            e.enter('mathTextSequence'),
                            (function n(a) {
                              return (nO('openingSequence', a, r.join(',')),
                              (a === nE.q.backslash && 0 === r.length) ||
                                (a === nE.q.leftParenthesis && 1 === r.length))
                                ? (e.consume(a), r.push(a), n)
                                : r.length < 2
                                ? t(a)
                                : (e.exit('mathTextSequence'), s(a));
                            })(n)
                          );
                        };
                        function s(o) {
                          return (nO('gap', o), o === nE.q.eof)
                            ? t(o)
                            : o === nE.q.backslash
                            ? ((i = e.enter('mathTextSequence')),
                              (a = []),
                              (function t(o) {
                                return (nO('closingSequence', o, r.join(',')),
                                (o === nE.q.backslash && 0 === a.length) ||
                                  (o === nE.q.rightParenthesis &&
                                    1 === a.length))
                                  ? (e.consume(o), a.push(o), t)
                                  : a.length === r.length
                                  ? (e.exit('mathTextSequence'),
                                    e.exit('mathText'),
                                    n(o))
                                  : ((i.type = 'mathTextData'), l(o));
                              })(o))
                            : o === nE.q.space
                            ? (e.enter('space'),
                              e.consume(o),
                              e.exit('space'),
                              s)
                            : (0, nA.Ch)(o)
                            ? (e.enter(nB.V.lineEnding),
                              e.consume(o),
                              e.exit(nB.V.lineEnding),
                              s)
                            : (e.enter('mathTextData'), l(o));
                        }
                        function l(n) {
                          return (nO('data', n),
                          n === nE.q.eof ||
                            n === nE.q.space ||
                            n === nE.q.backslash ||
                            (0, nA.Ch)(n))
                            ? (e.exit('mathTextData'), s(n))
                            : (e.consume(n), l);
                        }
                      },
                      resolve: nW,
                      previous: nG,
                    },
                    {
                      tokenize: function (e, n, t) {
                        let r = [],
                          a = [],
                          i,
                          o = this;
                        return function (n) {
                          return (
                            nO('start', n),
                            n !== nE.q.backslash && nU('expected `\\`', n),
                            nX.call(o, o.previous) &&
                              nU('expected correct previous', o.previous),
                            e.enter('mathText'),
                            e.enter('mathTextSequence'),
                            (function n(a) {
                              return (nO('openingSequence', a, r.join(',')),
                              (a === nE.q.backslash && 0 === r.length) ||
                                (a === nE.q.leftSquareBracket &&
                                  1 === r.length))
                                ? (e.consume(a), r.push(a), n)
                                : r.length < 2
                                ? t(a)
                                : (e.exit('mathTextSequence'), s(a));
                            })(n)
                          );
                        };
                        function s(o) {
                          return (nO('gap', o), o === nE.q.eof)
                            ? t(o)
                            : o === nE.q.backslash
                            ? ((i = e.enter('mathTextSequence')),
                              (a = []),
                              (function t(o) {
                                return (nO('closingSequence', o, r.join(',')),
                                (o === nE.q.backslash && 0 === a.length) ||
                                  (o === nE.q.rightSquareBracket &&
                                    1 === a.length))
                                  ? (e.consume(o), a.push(o), t)
                                  : a.length === r.length
                                  ? (e.exit('mathTextSequence'),
                                    e.exit('mathText'),
                                    n(o))
                                  : ((i.type = 'mathTextData'), l(o));
                              })(o))
                            : o === nE.q.space
                            ? (e.enter('space'),
                              e.consume(o),
                              e.exit('space'),
                              s)
                            : (0, nA.Ch)(o)
                            ? (e.enter(nB.V.lineEnding),
                              e.consume(o),
                              e.exit(nB.V.lineEnding),
                              s)
                            : (e.enter('mathTextData'), l(o));
                        }
                        function l(n) {
                          return (nO('data', n),
                          n === nE.q.eof ||
                            n === nE.q.space ||
                            n === nE.q.backslash ||
                            (0, nA.Ch)(n))
                            ? (e.exit('mathTextData'), s(n))
                            : (e.consume(n), l);
                        }
                      },
                      resolve: nQ,
                      previous: nX,
                    },
                  ],
                },
              }),
                n('fromMarkdownExtensions', (0, nD.N)()),
                n('toMarkdownExtensions', (0, nD.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        tl = [
          [
            n1.Z,
            {
              languages: { mathematica: nK.Z },
              detect: !0,
              subset: [
                'arduino',
                'bash',
                'c',
                'cpp',
                'csharp',
                'css',
                'diff',
                'go',
                'graphql',
                'java',
                'javascript',
                'json',
                'kotlin',
                'latex',
                'less',
                'lua',
                'makefile',
                'makefile',
                'markdown',
                'matlab',
                'mathematica',
                'nginx',
                'objectivec',
                'perl',
                'pgsql',
                'php-template',
                'php',
                'plaintext',
                'python-repl',
                'python',
                'r',
                'ruby',
                'rust',
                'scss',
                'shell',
                'sql',
                'swift',
                'typescript',
                'vbnet',
                'wasm',
                'xml',
                'yaml',
              ],
              ignoreMissing: !0,
              aliases: { mathematica: 'wolfram' },
            },
          ],
          n2.Z,
          [n3.Z, { newlines: !0 }],
        ],
        tc = {
          code: function (e) {
            var n = e.inline,
              t = e.node,
              r = e.className,
              a = e.children,
              i = (0, ei.Z)(e, ['inline', 'node', 'className', 'children']);
            if (n) {
              var o = (function (e) {
                if (!e.startsWith(nl)) return null;
                try {
                  return JSON.parse(e.slice(nl.length));
                } catch (n) {
                  return { index: -1 };
                }
              })((0, n5.B)(t));
              return o
                ? (0, x.jsx)(nc, { displayInfo: o })
                : (0, x.jsx)(
                    'code',
                    (0, L.Z)((0, A.Z)({ className: r }, i), { children: a }),
                  );
            }
            var s,
              l =
                null ===
                  (s =
                    null == r
                      ? void 0
                      : r.split(' ').filter(function (e) {
                          return e.startsWith('language-');
                        })) || void 0 === s
                  ? void 0
                  : s[0],
              c = l ? l.split('-')[1] : '';
            return (0, x.jsx)(ta, {
              language: c,
              className: r,
              content: (0, n5.B)(t),
              children: a,
            });
          },
        };
      function tu(e) {
        var n = e.size,
          t = e.children,
          r = e.className,
          a = e.onSandboxLinkClick,
          i = (0, nM.F)().theme,
          o = (0, P.hz)().has('tools2'),
          s = (0, j.useMemo)(
            function () {
              return (0, L.Z)((0, A.Z)({}, tc), {
                a: function (e) {
                  var n = e.node,
                    t = (0, ei.Z)(e, ['node']),
                    r = n.properties.href;
                  return a && o && r.startsWith(nF.SANDBOX_LINK_PREFIX)
                    ? (0, x.jsx)('a', (0, L.Z)((0, A.Z)({}, t), { onClick: a }))
                    : (0, x.jsx)('a', (0, A.Z)({}, t));
                },
                img: function (e) {
                  var n = e.node,
                    t = (0, ei.Z)(e, ['node']),
                    r = n.properties.src;
                  return r.startsWith('sandbox:') || r.startsWith('attachment:')
                    ? null
                    : (0, x.jsx)('img', (0, A.Z)({}, t));
                },
              });
            },
            [a, o],
          );
        return (0, x.jsx)(nR.D, {
          rehypePlugins: tl,
          remarkPlugins: ts,
          linkTarget: '_new',
          className: (0, eu.Z)(
            r,
            'markdown prose w-full break-words dark:prose-invert',
            'dark' === i ? 'dark' : 'light',
            'small' === (void 0 === n ? 'medium' : n) && 'prose-xs',
          ),
          transformLinkUri: to,
          components: s,
          children: t,
        });
      }
      var td = {},
        tm = {};
      function tf(e) {
        var n,
          t = e.message,
          r = e.outputMessage,
          a = (0, nM.F)().theme,
          i = (0, k.WS)(),
          o =
            null === (n = null == r ? void 0 : r.message.metadata) ||
            void 0 === n
              ? void 0
              : n.aggregate_result,
          s =
            (null == o ? void 0 : o.status) !== void 0 &&
            (null == o ? void 0 : o.status) !== 'running';
        (0, j.useEffect)(
          function () {
            td[t.message.id] ||
              (i(C.s6.renderTool2Message, {
                id: t.message.id,
                finishedExecuting: s,
              }),
              (td[t.message.id] = !0));
          },
          [i, t, s],
        );
        var l = (0, j.useCallback)(
            function () {
              tm[t.message.id] ||
                (i(C.s6.expandTool2Message, {
                  id: t.message.id,
                  finishedExecuting: s,
                }),
                (tm[t.message.id] = !0));
            },
            [i, t, s],
          ),
          c = (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)('div', {
                className: 'mt-3 self-stretch',
                children: (0, x.jsx)(tu, {
                  className: (0, eu.Z)(
                    'markdown prose w-full break-words dark:prose-invert',
                    'dark' === a ? 'dark' : 'light',
                  ),
                  children: (function (e) {
                    var n = function (e, n) {
                      return '```'.concat(n, '\n').concat(e, '\n```');
                    };
                    if ('code' === e.message.content.content_type)
                      return n(e.message.content.text, 'python');
                    if ('python' === e.message.recipient) {
                      if ('text' !== e.message.content.content_type)
                        throw Error('Unexpected content type for code message');
                      var t = e.message.content.parts;
                      if (1 !== t.length || 'string' != typeof t[0])
                        throw Error('Unexpected parts for code message');
                      return n(t[0], 'python');
                    }
                    throw Error('Unexpected code message format');
                  })(t),
                }),
              }),
              r &&
                (0, x.jsx)('div', {
                  className: 'self-stretch',
                  children: (0, x.jsx)(n_, { message: r, isCollapsed: !0 }),
                }),
            ],
          });
        return (0, x.jsx)(ng, {
          expanderClosedLabel: 'Show work',
          expanderOpenLabel: 'Hide work',
          isComplete: s,
          results: c,
          onExpand: l,
          children: s ? 'Finished working' : 'Working...',
        });
      }
      var th = t(39690);
      function tg() {
        var e = (0, eo.Z)(['text-center mt-2 flex justify-center']);
        return (
          (tg = function () {
            return e;
          }),
          e
        );
      }
      var tp = ep.Z.div(tg());
      function tx(e) {
        var n = e.initialText,
          t = e.role,
          r = e.threadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          l = e.onChangeItemInView,
          c = e.onExitEdit,
          u = e.onDeleteNode,
          d = e.onRequestCompletion,
          m = e.onCreateEditNode,
          f = e.disabled,
          h = (0, k.WS)(),
          g = (0, j.useId)(),
          p = ''.concat(a, '-').concat(g),
          v = (0, j.useState)(n || ''),
          b = v[0],
          y = v[1],
          w = (0, j.useRef)(null);
        (0, j.useEffect)(function () {
          m(a, p);
        }, []);
        var Z = (0, j.useCallback)(function (e) {
            y(e.currentTarget.value);
          }, []),
          N = (0, j.useCallback)(
            function () {
              i(p, b), l(p), d(o.Next, p, { eventSource: 'mouse' }, !0), c();
            },
            [i, p, b, l, d, c],
          ),
          P = (0, j.useCallback)(
            function () {
              u(p),
                l(a),
                c(),
                h(
                  t === s.User
                    ? C.s6.cancelEditPrompt
                    : C.s6.cancelEditCompletion,
                  { threadId: r },
                );
            },
            [p, a, h, l, u, c, t, r],
          );
        return (
          (0, j.useEffect)(
            function () {
              var e = w.current,
                n = function (e) {
                  'Enter' === e.key && e.metaKey
                    ? N()
                    : 'Escape' === e.key && P();
                };
              return (
                e && e.addEventListener('keydown', n),
                function () {
                  e && e.removeEventListener('keydown', n);
                }
              );
            },
            [P, N],
          ),
          (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(eL.ZP, {
                ref: w,
                value: b,
                onChange: Z,
                className:
                  'm-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0',
              }),
              (0, x.jsxs)(tp, {
                children: [
                  (0, x.jsx)(th.z, {
                    as: 'button',
                    onClick: N,
                    className: 'mr-2',
                    disabled: f,
                    children: 'Save & Submit',
                  }),
                  (0, x.jsx)(th.z, {
                    as: 'button',
                    color: 'neutral',
                    onClick: P,
                    children: 'Cancel',
                  }),
                ],
              }),
            ],
          })
        );
      }
      var tv = t(77434),
        tb = t(47635);
      function tj() {
        var e = (0, eo.Z)(['text-xs text-black\n', '']);
        return (
          (tj = function () {
            return e;
          }),
          e
        );
      }
      function ty() {
        var e = (0, eo.Z)(['relative w-full overflow-hidden pt-[67%]']);
        return (
          (ty = function () {
            return e;
          }),
          e
        );
      }
      function tk(e) {
        var n,
          t = e.title,
          r = e.url,
          a = e.imageUrl,
          i = e.logoUrl,
          o = e.className,
          s = e.mini,
          l = Boolean(a),
          c = (0, k.WS)(),
          u = (0, j.useCallback)(
            function () {
              c(C.s6.carouselCardClick, { content: r });
            },
            [c, r],
          );
        try {
          n = tb.get(new URL(r).hostname);
        } catch (d) {
          return console.error('Invalid card url: ', d), null;
        }
        return (0, x.jsxs)(r ? 'a' : 'div', {
          className: (0, eu.Z)(
            'flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]',
            o,
          ),
          href: r,
          target: r ? '_blank' : '',
          onClick: u,
          children: [
            l &&
              (0, x.jsx)(tw, {
                children: (0, x.jsx)('div', {
                  className: 'absolute inset-0',
                  children: (0, x.jsx)('img', {
                    src: a,
                    alt: 'image of '.concat(t),
                    className:
                      'h-full w-full border-b border-black/10 object-cover',
                  }),
                }),
              }),
            (0, x.jsxs)('div', {
              className: 'flex flex-1 flex-col justify-between gap-1.5 p-3',
              children: [
                (0, x.jsx)(tC, {
                  $clamp: (void 0 !== s && s) || l,
                  children: t,
                }),
                (0, x.jsxs)('div', {
                  className: 'flex items-center gap-1',
                  children: [
                    i
                      ? (0, x.jsx)(e$, { url: i, name: n, size: 13 })
                      : (0, x.jsx)(ni, { url: r, size: 13 }),
                    (0, x.jsx)('div', {
                      className:
                        'text-[10px] leading-3 text-gray-500 line-clamp-1',
                      children: n,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var tC = ep.Z.div(tj(), function (e) {
          return e.$clamp && 'line-clamp-2';
        }),
        tw = ep.Z.div(ty()),
        tZ = t(36025),
        tN = t(41135);
      function tP(e) {
        var n = e.disabled,
          t = e.onClick,
          r = e.left,
          a = e.children;
        return (0, x.jsx)('button', {
          disabled: n,
          onClick: t,
          'aria-disabled': n,
          className: (0, eu.Z)(
            'flex h-6 w-[30px] items-center justify-center rounded-full',
            'bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white',
            'transition-opacity disabled:opacity-20',
            'cursor-pointer disabled:cursor-auto',
            'absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2',
            void 0 !== r && r
              ? 'left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full'
              : 'left-1/2 translate-x-1 lg:left-auto lg:-right-3 lg:translate-x-full',
            n && 'lg:hidden',
          ),
          children: a,
        });
      }
      var t_ = t(794),
        tS = function (e) {
          var n = e.x,
            t = e.children,
            r = e.className;
          return (0, x.jsx)(t_.E.div, {
            className: (0, eu.Z)(
              'mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]',
              r,
            ),
            style: { x: n },
            children: t,
          });
        },
        tI = { type: 'spring', bounce: 0 },
        tT = (0, j.forwardRef)(function (e, n) {
          return (0,
          x.jsx)('div', { ref: n, className: (0, eu.Z)('relative flex h-full w-full overflow-hidden', e.className), children: e.children });
        });
      tT.displayName = 'CarouselContainer';
      var tM =
        ((m = {}),
        (0, q.Z)(m, eN._G.Small, 1),
        (0, q.Z)(m, eN._G.Medium, 2),
        (0, q.Z)(m, eN._G.Large, 2),
        (0, q.Z)(m, eN._G.XLarge, 3),
        (0, q.Z)(m, eN._G.Full, 3),
        m);
      function tR(e) {
        var n = e.children,
          t = e.loop,
          r = void 0 === t || t,
          a = e.className,
          i = (0, tZ.c)(0),
          o = (0, j.useRef)(null),
          s = (0, j.useState)(0),
          l = s[0],
          c = s[1],
          u = tM[(0, eN.dQ)()] || 1,
          d = j.Children.count(n) > u,
          m = j.Children.toArray(n),
          f = (0, j.useCallback)(
            function () {
              var e,
                n =
                  null === (e = o.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return n ? -Math.floor(l / u) * (n + 12) : 0;
            },
            [u, l],
          ),
          h = (0, j.useCallback)(
            function (e) {
              var n = u * e;
              r
                ? c(function (e) {
                    return ((e + n) % m.length) - 1;
                  })
                : c(function (e) {
                    return eb()(e + n, 0, m.length - 1);
                  });
            },
            [m.length, r, u],
          ),
          g = (0, j.useCallback)(
            function () {
              h(1);
            },
            [h],
          ),
          p = (0, j.useCallback)(
            function () {
              h(-1);
            },
            [h],
          ),
          v = (0, j.useMemo)(
            function () {
              if (r) return [!0, !0];
              var e = l < m.length - u;
              return [l > 0, e];
            },
            [m.length, l, r, u],
          ),
          b = v[0],
          y = v[1];
        return (
          (0, j.useEffect)(
            function () {
              return (0, tN.j)(i, f(), tI).stop;
            },
            [f, l, i],
          ),
          (0, x.jsxs)('div', {
            className: (0, eu.Z)(
              'relative h-full w-full',
              a,
              d && 'mb-12 lg:mb-0',
            ),
            children: [
              (0, x.jsx)(tT, {
                ref: o,
                children: m.map(function (e, n) {
                  return (0, x.jsx)(tS, { x: i, children: e }, n);
                }),
              }),
              d &&
                (0, x.jsxs)(x.Fragment, {
                  children: [
                    (0, x.jsx)(tP, {
                      onClick: p,
                      left: !0,
                      disabled: !b,
                      children: (0, x.jsx)(E.ZP, { icon: eg.YFh }),
                    }),
                    (0, x.jsx)(tP, {
                      onClick: g,
                      disabled: !y,
                      children: (0, x.jsx)(E.ZP, { icon: eg.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var tF = t(500),
        tD = t(87762);
      function tE() {
        var e = (0, ex.kP)().session,
          n = (0, P.hz)(),
          t = (0, tD.a)(
            ['installedAip'],
            function () {
              return ej.ZP.getPlugins({
                offset: 0,
                limit: 20,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled:
                n.has('tools3') && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            },
          ),
          r = t.data,
          a = t.isLoading;
        return (0, j.useMemo)(
          function () {
            return { installedPlugins: r ? r.items : [], isLoading: a };
          },
          [r, a],
        );
      }
      function tq() {
        var e = (0, j.useContext)(tF.A),
          n = tE().installedPlugins;
        return (0, j.useMemo)(
          function () {
            return n.filter(function (n) {
              return e.has(n.id);
            });
          },
          [e, n],
        );
      }
      var tA = new Set([
          'og:site_name',
          'og:title',
          'og:description',
          'og:image',
          'og:url',
        ]),
        tL = {
          'og:site_name': 'metadataTitle',
          'og:title': 'title',
          'og:description': 'description',
          'og:image': 'imageUrl',
          'og:url': 'url',
        },
        tB =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        tO = j.memo(function (e) {
          var n,
            t,
            r,
            a,
            i = e.urls,
            o = tq(),
            s =
              ((n = { urls: i }),
              (t = n.urls),
              (r = (0, ex.kP)().session),
              (a = (0, tv.h)({
                queries: t.map(function (e) {
                  return {
                    queryKey: ['opengraph', e],
                    queryFn: (0, ea.Z)(function () {
                      return (0, el.__generator)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, ej.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, n.sent()];
                        }
                      });
                    }),
                    enabled: Boolean(e && (null == r ? void 0 : r.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, j.useMemo)(
                function () {
                  return a
                    .map(function (e, n) {
                      var r = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        o = t[n];
                      if (a || i) return null;
                      var s = r.tags.reduce(function (e, n) {
                        return tA.has(n.type) && (e[tL[n.type]] = n.value), e;
                      }, {});
                      try {
                        var l,
                          c = o.split(/[#?]/)[0],
                          u =
                            null === (l = s.url) || void 0 === l
                              ? void 0
                              : l.endsWith('/login'),
                          d = s.url && '/' === new URL(s.url || '').pathname;
                        if (c !== s.url && (u || d)) return null;
                      } catch (m) {
                        return null;
                      }
                      return (s.url = o), s;
                    })
                    .filter(Boolean);
                },
                [a, t],
              )),
            l = (0, j.useMemo)(
              function () {
                return !s.some(function (e) {
                  return Boolean(null == e ? void 0 : e.imageUrl);
                });
              },
              [s],
            ),
            c = (0, j.useMemo)(
              function () {
                return o.reduce(function (e, n) {
                  return (e[tb.get(n.domain)] = n.manifest.logo_url), e;
                }, {});
              },
              [o],
            ),
            u = (0, j.useMemo)(
              function () {
                return s.map(function (e) {
                  var n, t;
                  if (!e) return null;
                  try {
                    n = tb.get(new URL(e.url).hostname);
                  } catch (r) {
                    return console.error('Invalid card url: ', r), null;
                  }
                  return (
                    n in c && (t = c[n]),
                    (0, x.jsx)(
                      tk,
                      {
                        title: e.title || '',
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: t,
                        mini: l,
                      },
                      e.url,
                    )
                  );
                });
              },
              [s, l, c],
            );
          return 0 === s.length
            ? null
            : (0, x.jsx)(tR, { loop: !1, children: u });
        });
      function tU() {
        var e = (0, eo.Z)([
          '\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n',
          '\n',
          '\n',
          '\n',
        ]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      var tz = j.memo(function (e) {
        var n,
          t = e.message,
          r = e.isEditing,
          a = e.format,
          i = e.isCompletionInProgress,
          o = e.className,
          s = e.onSandboxLinkClick,
          l = e.isCompletion,
          c = e.isResponseToPluginMessage,
          u = (0, ei.Z)(e, [
            'message',
            'isEditing',
            'format',
            'isCompletionInProgress',
            'className',
            'onSandboxLinkClick',
            'isCompletion',
            'isResponseToPluginMessage',
          ]);
        return r
          ? (0, x.jsx)(
              tx,
              (0, A.Z)(
                {
                  currentLeaf: t.nodeId,
                  initialText: eA.getTextFromMessage(t.message),
                  role: t.message.author.role,
                },
                u,
              ),
            )
          : (0, x.jsx)(tV, {
              text: eA.getTextFromMessage(t.message),
              errCode: t.errCode,
              err: t.err,
              flag: t.errType,
              isCompletionInProgress: i,
              format: a,
              className: o,
              citations:
                null === (n = t.message.metadata) || void 0 === n
                  ? void 0
                  : n.citations,
              isCompletion: l,
              onSandboxLinkClick: s,
              id: t.nodeId,
              onRequestMoreCompletions: u.onRequestMoreCompletions,
              threadId: u.threadId,
              showExtractedLinkCards: c,
            });
      });
      function tV(e) {
        var n,
          t,
          r,
          a = e.citations,
          i = e.className,
          o = e.err,
          s = e.errCode,
          l = e.flag,
          c = e.format,
          u = e.isCompletionInProgress,
          d = e.size,
          m = e.text,
          f = e.onSandboxLinkClick,
          h = e.isCompletion,
          g = e.id,
          p = e.onRequestMoreCompletions,
          v = e.threadId,
          b = e.showExtractedLinkCards,
          y = s === ey,
          k = (0, P.hz)(),
          C =
            ((t = (n = { text: m, isCompletionInProgress: u }).text),
            (r = n.isCompletionInProgress),
            (0, j.useMemo)(
              function () {
                if (r) return [];
                var e = t.match(tB);
                return Array.from(new Set(e));
              },
              [r, t],
            )),
          w = (0, j.useMemo)(
            function () {
              switch (s) {
                case ey:
                  return (0, x.jsx)(tG, {
                    $flag: l,
                    children: (0, x.jsx)(tW, {}),
                  });
                case V:
                  if (k.has('model_preview'))
                    return (0, x.jsx)(t$, {
                      id: g,
                      onRequestMoreCompletions: p,
                      flag: l,
                      threadId: v,
                    });
                  return (0, x.jsx)(tG, { $flag: l, children: o });
                default:
                  return (0, x.jsx)(tG, { $flag: l, children: o });
              }
            },
            [o, s, k, l, g, p, v],
          );
        return (0, x.jsxs)('div', {
          className: (0, eu.Z)(
            i,
            'flex flex-col items-start gap-4 whitespace-pre-wrap',
            'danger' === l && 'flex flex-row gap-2 text-red-500',
            'warning' === l && 'text-orange-500',
          ),
          children: [
            (o && !m) || y || !c
              ? 'danger' === l && y
                ? null
                : m
              : (0, x.jsx)(tu, {
                  size: void 0 === d ? 'medium' : d,
                  className: (0, eu.Z)(
                    'danger' !== l && u && 'result-streaming',
                    'danger' === l && 'text-red-500',
                    'warning' === l && 'text-orange-500',
                  ),
                  onSandboxLinkClick: f,
                  children:
                    '' === m
                      ? '&#8203;'
                      : (function (e, n) {
                          if (!n) return e;
                          for (var t = n.length - 1; t >= 0; t--) {
                            var r = n[t],
                              a = r.start_ix,
                              i = r.end_ix,
                              o = r.metadata,
                              s = r.invalid_reason,
                              l = { index: t };
                            o ? (l.metadata = o) : s && (l.invalid_reason = s),
                              (e =
                                e.slice(0, a) +
                                ''
                                  .concat(ns, '`')
                                  .concat(nl)
                                  .concat(JSON.stringify(l), '`')
                                  .concat(ns) +
                                e.slice(i));
                          }
                          return e;
                        })(m, a),
                }),
            h && b && C.length > 0 && (0, x.jsx)(tO, { urls: C }),
            l && w,
          ],
        });
      }
      function tH(e) {
        var n = e && new Date(e),
          t = n && new Date(n);
        return t
          ? 'after '
              .concat(t.getHours() % 12 || 12, ':')
              .concat(10 > t.getMinutes() ? '0' : '')
              .concat(t.getMinutes(), ' ')
              .concat(t.getHours() >= 12 ? 'PM' : 'AM')
          : 'later';
      }
      function t$(e) {
        var n = e.id,
          t = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.threadId,
          i = (0, D.useRouter)(),
          o = $(function (e) {
            return e.isoDate;
          }),
          s = tH(o),
          l = (0, j.useCallback)(
            function () {
              t(n, { eventSource: 'mouse' }, !0, 'none', !1);
            },
            [n, t],
          ),
          c = (0, j.useCallback)(
            function () {
              if (a) {
                var e;
                H.setState(function (e) {
                  return {
                    threadIds: new Set((0, B.Z)(e.threadIds).concat([a])),
                  };
                });
              } else i.replace('/', void 0, { shallow: !0 });
              t(n, { eventSource: 'mouse' }, !0, 'none', !0);
            },
            [n, t, i, a],
          ),
          u = o
            ? (0, x.jsxs)('span', {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    s,
                    '.',
                  ),
                  ' ',
                  (0, x.jsx)('a', {
                    href: 'https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30',
                    target: '_blank',
                    rel: 'noreferrer',
                    className: 'underline',
                    children: 'Learn more',
                  }),
                ],
              })
            : 'You previously reached your usage cap for GPT-4, but you can now try sending your message again';
        return (0, x.jsx)(tG, {
          $flag: Boolean(o) && r,
          children: (0, x.jsxs)('div', {
            className: 'flex items-center gap-6',
            children: [
              u,
              !o &&
                (0, x.jsx)(th.z, {
                  color: 'light',
                  className: 'flex-shrink-0 bg-white',
                  onClick: l,
                  children: 'Try again',
                }),
              o &&
                (0, x.jsx)(th.z, {
                  color: 'light',
                  className: 'flex-shrink-0 bg-white',
                  onClick: c,
                  children: 'Use default model',
                }),
            ],
          }),
        });
      }
      function tW() {
        return (0, x.jsxs)(x.Fragment, {
          children: [
            'This content may violate our',
            ' ',
            (0, x.jsx)('a', {
              target: '_blank',
              href: 'https://platform.openai.com/docs/usage-policies/content-policy',
              rel: 'noreferrer',
              className: 'bold underline',
              children: 'content policy',
            }),
            '. If you believe this to be in error, please',
            ' ',
            (0, x.jsx)('a', {
              target: '_blank',
              href: 'https://forms.gle/3gyAMj5r5rTEcgbs5',
              rel: 'noreferrer',
              className: 'bold underline',
              children: 'submit your feedback',
            }),
            ' ',
            '— your input will aid our research in this area.',
          ],
        });
      }
      var tG = ep.Z.div(
        tU(),
        function (e) {
          return 'warning' === e.$flag && 'border-orange-500 bg-orange-500/10';
        },
        function (e) {
          return 'danger' === e.$flag && 'border-red-500 bg-red-500/10';
        },
        function (e) {
          return !e.$flag && 'border-green-500 bg-green-500/10';
        },
      );
      function tY(e) {
        var n = e.messages,
          t = e.isCompletionInProgress,
          r = e.isCompletion,
          a = e.onRequestMoreCompletions,
          i = n.reduce(function (e, n) {
            return n.err ? e : e + eA.getTextFromMessage(n.message);
          }, '');
        return (0, x.jsx)(tV, {
          text: i,
          format: !0,
          isCompletion: r,
          isCompletionInProgress: t,
          id: '',
          threadId: '',
          onRequestMoreCompletions: a,
        });
      }
      var tJ = t(42928),
        tQ = t(22121);
      function tX() {
        return (tX = (0, ea.Z)(function (e) {
          var n, t;
          return (0, el.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  t.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (e) {
                      return tK.apply(this, arguments);
                    })(e),
                  ]
                );
              case 1:
                return [2, t.sent()];
              case 2:
                return (
                  (n = t.sent()),
                  console.error('Error making localhost plugin HTTP call', n),
                  [
                    2,
                    [
                      {
                        id: (0, eR.Z)(),
                        author: { role: s.Tool, name: 'plugin_service' },
                        content: {
                          content_type: 'text',
                          parts: [
                            'Error making localhost plugin HTTP call: '.concat(
                              n,
                            ),
                          ],
                        },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
                        recipient: 'all',
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function tK() {
        return (tK = (0, ea.Z)(function (e) {
          var n, t, r, a, i, o;
          function l(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, el.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                var o, c;
                if (
                  ((n = { 'content-type': 'application/json' }),
                  (c = (o = [l(e.headers), l(n)]).flat()),
                  new Set(c).size !== c.length)
                )
                  throw Error(
                    'Refusing to make localhost plugin HTTP call with duplicate header keys',
                  );
                return (
                  (t = e.url),
                  e.qs_params.length > 0 &&
                    (t = t + '?' + new URLSearchParams(e.qs_params)),
                  (r = void 0),
                  null !== e.body && (r = JSON.stringify(e.body)),
                  [
                    4,
                    fetch(t, {
                      method: e.method,
                      headers: (0, A.Z)({}, n, e.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, a.sent().text()];
              case 2:
                if (((i = a.sent()), 'chat' === e.api_function_type))
                  return [2, [JSON.parse(i)]];
                if ('kwargs' === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, eR.Z)(),
                        author: {
                          role: s.Tool,
                          name: ''
                            .concat(e.namespace, '.')
                            .concat(e.function_name),
                        },
                        content: { content_type: 'text', parts: [i] },
                        metadata: {
                          parent_message_id: e.parent_message_id,
                          is_complete: !0,
                        },
                        recipient: 'all',
                      },
                    ],
                  ];
                throw Error('Not implemented');
            }
          });
        })).apply(this, arguments);
      }
      function t0(e) {
        return Boolean(t1(e.domain));
      }
      function t1(e) {
        return /^localhost:\d+$/.test(e)
          ? 'http://'.concat(e)
          : /^https?:\/\/localhost:\d+$/.test(e)
          ? e
          : null;
      }
      function t2(e) {
        return t3.apply(this, arguments);
      }
      function t3() {
        return (t3 = (0, ea.Z)(function (e) {
          var n, t, r, a, i;
          return (0, el.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                return [
                  4,
                  fetch(e + '/.well-known/ai-plugin.json')
                    .then(function (e) {
                      return e.json();
                    })
                    .catch(function (e) {
                      throw Error(
                        'Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled.',
                      );
                    }),
                ];
              case 1:
                if (
                  !(r =
                    null == (t = o.sent())
                      ? void 0
                      : null === (n = t.api) || void 0 === n
                      ? void 0
                      : n.url)
                )
                  throw Error(
                    'Localhost manifest is missing OpenAPI spec URL.',
                  );
                if (
                  'pathname' ===
                  (a = (function (e) {
                    try {
                      return new URL(e), 'full url';
                    } catch (n) {
                      if (e.startsWith('/')) return 'pathname';
                      return 'neither';
                    }
                  })(r))
                )
                  r = e + r;
                else if ('neither' === a)
                  throw Error(
                    'Localhost manifest OpenAPI spec URL is not a valid URL or path.',
                  );
                return [
                  4,
                  fetch(r)
                    .then(function (e) {
                      return e.text();
                    })
                    .catch(function (e) {
                      throw Error('Failed to fetch localhost OpenAPI spec.');
                    })
                    .then(function (e) {
                      try {
                        return tQ.ZP.parse(e);
                      } catch (n) {}
                      try {
                        return JSON.parse(e);
                      } catch (t) {}
                      throw Error(
                        'Failed to parse localhost OpenAPI spec as JSON or YAML.',
                      );
                    }),
                ];
              case 2:
                (i = o.sent()), (o.label = 3);
              case 3:
                return (
                  o.trys.push([3, 5, , 6]),
                  [
                    4,
                    ej.ZP.createOrUpdateLocalhostPlugin({
                      localhost: e,
                      manifest: t,
                      openapiSpec: i,
                    }),
                  ]
                );
              case 4:
                return [2, o.sent()];
              case 5:
                return (
                  o.sent(),
                  I.m.danger(
                    'Failed to create or update localhost plugin at '.concat(e),
                  ),
                  [3, 6]
                );
              case 6:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function t4() {
        var e = (0, eo.Z)([
          'flex items-center gap-1 rounded-[5px] bg-red-200 py-0.5 px-1.5 text-xs font-semibold uppercase text-red-800',
        ]);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      var t5 = j.memo(function (e) {
        var n,
          t = e.messages,
          r = (0, tJ.Z)(t, 2),
          a = r[0],
          i = r[1],
          o = tq(),
          s =
            null === (n = a.message.recipient) || void 0 === n
              ? void 0
              : n.split('.')[0],
          l = o.find(function (e) {
            return e.namespace === s;
          }),
          c = null == l ? void 0 : l.manifest.name_for_human;
        if (!c)
          return (0, x.jsx)('div', {
            className: 'result-streaming prose dark:prose-invert',
            children: (0, x.jsx)('span', { children: '​' }),
          });
        var u = i
            ? (0, x.jsxs)('div', {
                children: ['Used ', (0, x.jsx)('b', { children: c })],
              })
            : (0, x.jsxs)('div', {
                children: ['Using ', (0, x.jsx)('b', { children: c }), '...'],
              }),
          d = t0(l)
            ? (0, x.jsx)(t8, {})
            : 'approved' !== l.status
            ? (0, x.jsx)(t6, {})
            : void 0;
        return (0,
        x.jsx)(ng, { isComplete: Boolean(i), results: (0, x.jsx)(t9, { pluginName: c, pluginMessage: a, toolMessage: i }), children: (0, x.jsxs)('div', { className: 'flex items-center gap-3', children: [u, d] }) });
      });
      function t6() {
        return (0, x.jsxs)(t7, {
          children: [
            (0, x.jsx)(E.ZP, {
              icon: eg.OH,
              className: 'h-3 w-3',
              strokeWidth: 2.5,
            }),
            (0, x.jsx)('div', { children: 'Unverified' }),
          ],
        });
      }
      function t8() {
        return (0, x.jsxs)(t7, {
          children: [
            (0, x.jsx)(E.ZP, { icon: eg.V7f, className: 'h-3 w-3' }),
            (0, x.jsx)('div', { children: 'Localhost' }),
          ],
        });
      }
      var t7 = ep.Z.div(t4());
      function t9(e) {
        var n = e.pluginName,
          t = e.pluginMessage,
          r = e.toolMessage,
          a = eA.getTextFromMessage(t.message),
          i = r ? eA.getTextFromMessage(r.message) : null;
        try {
          (a = JSON.stringify(JSON.parse(a), null, 2)),
            i && (i = JSON.stringify(JSON.parse(i), null, 2));
        } catch (o) {}
        var s =
          (null == r ? void 0 : r.message.author.name) === 'plugin_service';
        return (0, x.jsxs)('div', {
          className: 'my-3 flex max-w-full flex-col gap-3',
          children: [
            (0, x.jsx)(re, {
              title: 'Request to '.concat(n),
              infoTooltip: t.message.recipient,
              children: a,
            }),
            i &&
              (0, x.jsx)(re, {
                title: s ? 'Error' : 'Response from '.concat(n),
                infoTooltip: t.message.recipient,
                children: (0, x.jsx)('span', {
                  className: (0, eu.Z)(s && 'text-red-500'),
                  children: i,
                }),
              }),
          ],
        });
      }
      function re(e) {
        var n = e.title,
          t = e.infoTooltip,
          r = e.children;
        return (0, x.jsx)(ti, {
          title: (0, x.jsx)('span', { className: 'uppercase', children: n }),
          headerDecoration:
            void 0 !== t
              ? (0, x.jsx)(no.$, {
                  label: (0, x.jsx)(no.u, { text: t }),
                  children: (0, x.jsx)(E.ZP, {
                    icon: eg.H33,
                    className: 'text-white/50',
                  }),
                })
              : void 0,
          shouldWrapCode: !0,
          className: 'w-full text-xs text-white/80',
          children: r,
        });
      }
      var rn = j.memo(function (e) {
        var n = e.messages,
          t = (0, tJ.Z)(n, 2),
          r = t[0],
          a = t[1],
          i = eA
            .getTextFromMessage(r.message)
            .match(/^search\(["'](.+)["'].*\)$/),
          o = i ? i[1] : null;
        return o
          ? (0, x.jsx)(ng, {
              isComplete: Boolean(a),
              children: a
                ? (0, x.jsxs)(x.Fragment, {
                    children: [
                      'Searched: ',
                      (0, x.jsxs)('b', { children: ['“', o, '”'] }),
                    ],
                  })
                : (0, x.jsxs)(x.Fragment, {
                    children: [
                      'Searching the web: ',
                      (0, x.jsxs)('b', { children: ['“', o, '”'] }),
                    ],
                  }),
            })
          : (0, x.jsx)('div', {
              className: 'result-streaming prose dark:prose-invert',
              children: (0, x.jsx)('span', { children: '​' }),
            });
      });
      function rt() {
        var e = (0, eo.Z)(['']);
        return (
          (rt = function () {
            return e;
          }),
          e
        );
      }
      function rr() {
        var e = (0, eo.Z)(['flex flex-grow flex-col gap-3']);
        return (
          (rr = function () {
            return e;
          }),
          e
        );
      }
      function ra() {
        var e = (0, eo.Z)([
          'text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0',
        ]);
        return (
          (ra = function () {
            return e;
          }),
          e
        );
      }
      function ri() {
        var e = (0, eo.Z)(['w-[30px] flex flex-col relative items-end']);
        return (
          (ri = function () {
            return e;
          }),
          e
        );
      }
      function ro() {
        var e = (0, eo.Z)([
          'p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2',
        ]);
        return (
          (ro = function () {
            return e;
          }),
          e
        );
      }
      function rs() {
        var e = (0, eo.Z)([
          'p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400',
        ]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      function rl() {
        var e = (0, eo.Z)([
          'text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n',
          '',
        ]);
        return (
          (rl = function () {
            return e;
          }),
          e
        );
      }
      function rc() {
        var e = (0, eo.Z)([
          'text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs',
        ]);
        return (
          (rc = function () {
            return e;
          }),
          e
        );
      }
      function ru() {
        var e = (0, eo.Z)([
          'flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm',
        ]);
        return (
          (ru = function () {
            return e;
          }),
          e
        );
      }
      ((ov = f || (f = {}))[(ov.Text = 0)] = 'Text'),
        (ov[(ov.MultiText = 1)] = 'MultiText'),
        (ov[(ov.SimpleBrowsing = 2)] = 'SimpleBrowsing'),
        (ov[(ov.Browsing = 3)] = 'Browsing'),
        (ov[(ov.Code = 4)] = 'Code'),
        (ov[(ov.CodeExecutionOutput = 5)] = 'CodeExecutionOutput'),
        (ov[(ov.Plugin = 6)] = 'Plugin');
      var rd = j.memo(function (e) {
          var n,
            t,
            r = e.turn,
            a = e.isFinalTurn,
            i = e.threadId,
            o = e.treeRef,
            c = e.onChangeItemInView,
            u = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            h = e.onDeleteNode,
            g = e.onRequestCompletion,
            p = e.onUpdateNode,
            v = e.onSandboxLinkClick,
            b = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            y = e.activeRequests,
            w = e.inlineFeedbackDisplay,
            Z = void 0 !== w && w,
            N = e.modelBackend,
            _ = r.role,
            S = r.messages,
            I = r.variantIds,
            T = (0, j.useState)(S),
            M = T[0],
            R = T[1],
            F = eZ.theme,
            D = F.color,
            q = F.icon,
            B = F.activeColor,
            O = (0, ex.kP)().session,
            U = (0, eN.Ui)(),
            V = (0, k.WS)(),
            H = (0, j.useState)(!1),
            $ = H[0],
            W = H[1],
            G = (0, j.useMemo)(
              function () {
                return I.findIndex(function (e) {
                  return e === M[0].nodeId;
                });
              },
              [I, M],
            ),
            Y = _ !== s.User,
            J = M[M.length - 1],
            Q = (0, j.useState)(J.rating),
            X = Q[0],
            K = Q[1],
            ee = (0, P.hz)(),
            en = tq(),
            et = (0, j.useMemo)(
              function () {
                return (
                  (Y &&
                    (null == M ? void 0 : M[0]) &&
                    eA.getModelFromMessage(
                      null == M ? void 0 : M[0].message,
                    )) ||
                  N
                );
              },
              [Y, M, N],
            ),
            er = (0, j.useCallback)(
              function () {
                1 === M.length &&
                  (V(_ === s.User ? C.s6.editPrompt : C.s6.editCompletion, {
                    id: M[0].message.id,
                    threadId: i,
                  }),
                  W(!0));
              },
              [M, V, _, i],
            ),
            ea = (0, j.useCallback)(function () {
              W(!1);
            }, []),
            ei = (0, j.useCallback)(
              function () {
                var e = M.reduce(function (e, n) {
                  return n.err ||
                    n.message.author.role !== s.Assistant ||
                    'all' !== n.message.recipient
                    ? e
                    : e + (e ? '\n\n' : '') + eA.getTextFromMessage(n.message);
                }, '');
                navigator.clipboard.writeText(e),
                  V(C.s6.copyToClipboard, {
                    threadId: i,
                    id: M[0].message.id,
                    eventSource: 'mouse',
                    model: et,
                  }),
                  ez.m.logEvent('chatgpt_copy_to_clipboard');
              },
              [et, V, M, i],
            ),
            eo = (0, j.useCallback)(
              function (e) {
                u(J.nodeId, J.message.id, e), K(e);
              },
              [J, u],
            ),
            es = (0, j.useState)(J.inlineComparisonRating),
            el = es[0],
            ec = es[1];
          (0, j.useEffect)(
            function () {
              var e = S[S.length - 1];
              R(S), K(e.rating), ec(e.inlineComparisonRating);
            },
            [S],
          );
          var ed = (0, j.useMemo)(
              function () {
                return eA.getRequestIdFromConversationTurn(r);
              },
              [r],
            ),
            em = 'CompletionUpdated:'.concat(M[M.length - 1].nodeId),
            ef = (0, j.useCallback)(
              function (e, n) {
                var t = n.nodeId;
                R(function (e) {
                  var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                  try {
                    for (
                      var s, l = e[Symbol.iterator]();
                      !(r = (s = l.next()).done);
                      r = !0
                    ) {
                      var c = s.value;
                      if (c.nodeId === t) {
                        var u = o.current.getNode(t);
                        n.push(
                          (0, A.Z)(
                            {
                              nodeId: t,
                              parentId: u.parentId,
                              message: u.message,
                            },
                            u.metadata,
                          ),
                        );
                      } else n.push(c);
                    }
                  } catch (d) {
                    (a = !0), (i = d);
                  } finally {
                    try {
                      r || null == l.return || l.return();
                    } finally {
                      if (a) throw i;
                    }
                  }
                  return n;
                });
              },
              [o],
            );
          (0, j.useEffect)(
            function () {
              var e = eh().subscribe(em, ef);
              return function () {
                eh().unsubscribe(e);
              };
            },
            [ef, em],
          );
          var ep = (0, j.useMemo)(
              function () {
                return y.has(ed);
              },
              [y, ed],
            ),
            ev = (0, j.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = M[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var i = r.value;
                    if (i.errType) return i.errType;
                  }
                } catch (o) {
                  (n = !0), (t = o);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [M],
            ),
            eb = (0, j.useMemo)(
              function () {
                if (Y) {
                  var e,
                    n,
                    t =
                      null ===
                        (e = o.current.getParentPromptNode(M[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    r =
                      t &&
                      (null === (n = o.current.getNode(t).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug);
                  if (et && r && et !== r)
                    return "The previous model used in this conversation is unavailable. We've switched you to the latest default model";
                }
                return null;
              },
              [et, Y, M, o],
            ),
            ej = (0, j.useMemo)(
              function () {
                if (!ee.has('tools') && !ee.has('tools2') && !ee.has('tools3'))
                  return { avatarIcon: q, avatarColor: D };
                if (ep && M.length > 0) {
                  var e = M[M.length - 1],
                    n = eV(e.message);
                  switch (n) {
                    case d.Text:
                      if (
                        eA.getTextFromMessage(e.message).length > 0 ||
                        M.length > 1
                      )
                        return { avatarIcon: 'text', avatarColor: B };
                      break;
                    case d.SimpleBrowsing:
                    case d.Browsing:
                    case d.BrowseTool:
                      return { avatarIcon: 'browsing', avatarColor: B };
                    case d.Code:
                    case d.CodeExecutionOutput:
                      return { avatarIcon: 'code', avatarColor: B };
                    case d.Plugin:
                    case d.PluginTool:
                      var t =
                          n === d.Plugin
                            ? e.message.recipient
                            : e.message.author.name,
                        r = null == t ? void 0 : t.split('.')[0],
                        a = en.find(function (e) {
                          return e.namespace === r;
                        });
                      if (a) return { avatarPlugin: a };
                      return { avatarIcon: 'plugin', avatarColor: B };
                  }
                }
                return { avatarIcon: q, avatarColor: D };
              },
              [ee, ep, M, q, D, B, en],
            ),
            ey = ej.avatarIcon,
            ek = ej.avatarColor,
            eC = ej.avatarPlugin,
            ew = (0, j.useCallback)(
              function (e, n) {
                var t = o.current.getParentId(e);
                o.current.addNode(n, '', t, l.Prompt);
              },
              [o],
            ),
            eP = (0, j.useMemo)(
              function () {
                var e = [];
                return (
                  M.forEach(function (n, t) {
                    var r = eV(n.message),
                      a = null == M ? void 0 : M[t - 1],
                      i =
                        a &&
                        (eA.getIsIncompleteFromMessage(a.message) ||
                          eA.getIsContinuedFromMessage(a.message)),
                      o = eA.getIsContinuedFromMessage(n.message),
                      s = r === d.Text && eA.getTextFromMessage(n.message);
                    if (i && o && s) {
                      var l = e.pop();
                      (null == l ? void 0 : l.type) === f.MultiText
                        ? (l.messages.push(n), e.push(l))
                        : (null == l ? void 0 : l.type) === f.Text &&
                          e.push({
                            type: f.MultiText,
                            messages: [l.message, n],
                          });
                    } else if (
                      r === d.SimpleBrowsing ||
                      r === d.Browsing ||
                      r === d.BrowseTool
                    ) {
                      var c = e[e.length - 1];
                      (null == c ? void 0 : c.type) === f.SimpleBrowsing ||
                      (null == c ? void 0 : c.type) === f.Browsing
                        ? c.messages.push(n)
                        : e.push({
                            type:
                              r === d.SimpleBrowsing
                                ? f.SimpleBrowsing
                                : f.Browsing,
                            messages: [n],
                          });
                    } else if (r === d.Plugin || r === d.PluginTool) {
                      var u = e[e.length - 1];
                      r === d.PluginTool &&
                      (null == u ? void 0 : u.type) === f.Plugin
                        ? u.messages.push(n)
                        : e.push({ type: f.Plugin, messages: [n] });
                    } else {
                      var m = f.Text;
                      r === d.Code
                        ? (m = f.Code)
                        : r === d.CodeExecutionOutput &&
                          (m = f.CodeExecutionOutput),
                        e.push({ type: m, message: n });
                    }
                  }),
                  e.map(function (n, t) {
                    var r,
                      a = t === e.length - 1;
                    switch (n.type) {
                      case f.Text:
                        return (0,
                        x.jsx)(tz, { className: 'min-h-[20px]', message: n.message, isEditing: $, format: Y, isCompletionInProgress: a && ep, onCreateEditNode: ew, threadId: i, onUpdateNode: p, onDeleteNode: h, onChangeItemInView: c, onRequestCompletion: g, onExitEdit: ea, disabled: 0 !== y.size, onSandboxLinkClick: v, isCompletion: Y, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.type) === f.Plugin }, n.message.nodeId);
                      case f.MultiText:
                        return (0,
                        x.jsx)(tY, { messages: n.messages, isCompletionInProgress: a && ep, isCompletion: Y, onRequestMoreCompletions: m }, t);
                      case f.SimpleBrowsing:
                        if (!ee.has('tools')) return null;
                        return (0,
                        x.jsx)(rn, { messages: n.messages }, n.messages[0].nodeId);
                      case f.Browsing:
                        if (!ee.has('tools')) return null;
                        return (0,
                        x.jsx)(nb, { messages: n.messages, isComplete: !a }, n.messages[0].nodeId);
                      case f.Code:
                        if (!ee.has('tools2')) return null;
                        var o = e[t + 1],
                          s =
                            o && o.type === f.CodeExecutionOutput
                              ? o.message
                              : void 0;
                        return (0,
                        x.jsx)(tf, { message: n.message, outputMessage: s }, n.message.nodeId);
                      case f.CodeExecutionOutput:
                        if (!ee.has('tools2')) return null;
                        return (0,
                        x.jsx)(n_, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case f.Plugin:
                        if (!ee.has('tools3')) return null;
                        return (0,
                        x.jsx)(t5, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [M, $, Y, ep, ew, i, p, h, c, g, ea, y.size, v, m, ee],
            ),
            e_ =
              !U &&
              Y &&
              !Z &&
              !$ &&
              1 === G &&
              a &&
              !el &&
              !X &&
              2 === I.length &&
              Date.now() -
                (null !== (n = J.message.create_time) && void 0 !== n ? n : 0) *
                  1e3 <
                6e5 &&
              !ep &&
              ee.has('dfw_inline_message_regen_comparison'),
            eS = (0, j.useRef)(Date.now()),
            eI = (0, j.useRef)(
              (null !== (t = J.message.create_time) && void 0 !== t
                ? t
                : Date.now()) * 1e3,
            ),
            eT = (0, j.useRef)(Date.now());
          (0, j.useEffect)(
            function () {
              ep || (eT.current = Date.now());
            },
            [ep],
          );
          var eM = (0, j.useCallback)(
              function (e) {
                if (e_) {
                  var n,
                    t,
                    r,
                    a,
                    i = I[0] || '',
                    s =
                      (null === (n = o.current) || void 0 === n
                        ? void 0
                        : n.getConversationTurns(i)) || [],
                    l = s[s.length - 1],
                    c = (null == l ? void 0 : l.messages) || [],
                    u = c[c.length - 1],
                    d =
                      (null == u
                        ? void 0
                        : null === (t = u.message) || void 0 === t
                        ? void 0
                        : t.id) || '',
                    m = I[1] || '',
                    f =
                      (null === (r = o.current) || void 0 === r
                        ? void 0
                        : r.getConversationTurns(m)) || [],
                    h = f[f.length - 1],
                    g = (null == h ? void 0 : h.messages) || [],
                    p = g[g.length - 1];
                  b(
                    d,
                    (null == p
                      ? void 0
                      : null === (a = p.message) || void 0 === a
                      ? void 0
                      : a.id) || '',
                    e,
                    eS.current,
                    eS.current,
                    eI.current,
                    eT.current,
                  ),
                    o.current.updateNode(J.nodeId, {
                      metadata: {
                        $set: (0, L.Z)(
                          (0, A.Z)({}, o.current.getMetadata(J.nodeId)),
                          { inlineComparisonRating: e },
                        ),
                      },
                    }),
                    ec(e),
                    o.current.updateNode(u.nodeId, {
                      metadata: {
                        $set: (0, L.Z)(
                          (0, A.Z)({}, o.current.getMetadata(u.nodeId)),
                          { inlineComparisonRating: 'baseline' },
                        ),
                      },
                    });
                }
              },
              [e_, J.nodeId, b, o, I],
            ),
            eR = (0, j.useCallback)(
              function () {
                o.current.updateNode(J.nodeId, {
                  metadata: {
                    $set: (0, L.Z)(
                      (0, A.Z)({}, o.current.getMetadata(J.nodeId)),
                      { inlineComparisonRating: 'skip' },
                    ),
                  },
                }),
                  ec('skip');
              },
              [J.nodeId, o],
            ),
            eF = Y && !Z,
            eD = !Z,
            eE = !Y && !Z && 1 === M.length && !$;
          return (0, x.jsxs)(rm, {
            className: (0, eu.Z)(
              'group',
              'w-full text-gray-800 dark:text-gray-100',
              Z ? '' : 'border-b border-black/10 dark:border-gray-900/50',
              Y ? 'bg-gray-50 dark:bg-[#444654]' : 'dark:bg-gray-800',
            ),
            children: [
              eb && (0, x.jsx)(rb, { children: eb }),
              (0, x.jsxs)(rh, {
                className: (0, eu.Z)(Z ? '' : 'm-auto'),
                children: [
                  (0, x.jsxs)(rg, {
                    children: [
                      Y
                        ? eC
                          ? (0, x.jsx)(e0, { plugin: eC, notice: ev || void 0 })
                          : (0, x.jsx)(eK, {
                              background:
                                ee.has('model_preview') && et === z
                                  ? 'black'
                                  : ek || '',
                              iconName: ey,
                              notice: ev || void 0,
                            })
                        : (0, x.jsx)(e3, {
                            user: null == O ? void 0 : O.user,
                            notice: ev || void 0,
                          }),
                      eD &&
                        !U &&
                        (0, x.jsx)(nn, {
                          currentPage: G,
                          onChangeIndex: function (e) {
                            return c(I[e]);
                          },
                          length: I.length,
                          className: (0, eu.Z)(
                            'invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible',
                            I.length > 1 ? 'visible' : '!invisible',
                          ),
                        }),
                    ],
                  }),
                  (0, x.jsxs)('div', {
                    className:
                      'relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]',
                    children: [
                      (0, x.jsx)(rf, { children: eP }),
                      eE &&
                        !U &&
                        (0, x.jsx)(rv, {
                          $hidden: 0 !== y.size,
                          children: (0, x.jsx)(rx, {
                            onClick: er,
                            className: 'md:invisible md:group-hover:visible',
                            children: (0, x.jsx)(E.ZP, { icon: eg.vPQ }),
                          }),
                        }),
                      (eF || eD) &&
                        (0, x.jsxs)('div', {
                          className: 'flex justify-between lg:block',
                          children: [
                            eD &&
                              U &&
                              (0, x.jsx)(nn, {
                                currentPage: G,
                                onChangeIndex: function (e) {
                                  return c(I[e]);
                                },
                                length: I.length,
                                className: (0, eu.Z)(
                                  'self-center pt-2',
                                  I.length > 1 ? 'visible' : '!invisible',
                                ),
                              }),
                            eE &&
                              U &&
                              (0, x.jsx)(rv, {
                                $hidden: ep,
                                children: (0, x.jsx)(rx, {
                                  onClick: er,
                                  children: (0, x.jsx)(E.ZP, { icon: eg.vPQ }),
                                }),
                              }),
                            eF &&
                              (0, x.jsxs)(rv, {
                                $hidden: ep,
                                children: [
                                  ee.has('copy_to_clipboard') &&
                                    (0, x.jsx)(e6, {
                                      onCopy: ei,
                                      className:
                                        'h-full w-full rounded-md p-1 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400',
                                    }),
                                  'thumbsDown' !== X &&
                                    (0, x.jsx)(
                                      rx,
                                      {
                                        onClick: function () {
                                          return eo('thumbsUp');
                                        },
                                        disabled: 'thumbsUp' === X,
                                        className: (0, eu.Z)(
                                          'thumbsUp' === X &&
                                            '!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700',
                                        ),
                                        children: (0, x.jsx)(E.ZP, {
                                          icon: eg.fmn,
                                        }),
                                      },
                                      'thumbsUp:'.concat(J.nodeId),
                                    ),
                                  'thumbsUp' !== X &&
                                    (0, x.jsx)(
                                      rx,
                                      {
                                        onClick: function () {
                                          return eo('thumbsDown');
                                        },
                                        disabled: 'thumbsDown' === X,
                                        className: (0, eu.Z)(
                                          'thumbsDown' === X &&
                                            '!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700',
                                        ),
                                        children: (0, x.jsx)(E.ZP, {
                                          icon: eg.oLd,
                                        }),
                                      },
                                      'thumbsDown:'.concat(J.nodeId),
                                    ),
                                ],
                              }),
                            e_ &&
                              (0, x.jsxs)(rj, {
                                children: [
                                  (0, x.jsx)('div', {
                                    className: (0, eu.Z)('mr-4'),
                                    children:
                                      'Was this response better or worse?',
                                  }),
                                  (0, x.jsxs)(rp, {
                                    onClick: function () {
                                      return eM('new');
                                    },
                                    title:
                                      'This response was better than the previous response',
                                    children: [
                                      (0, x.jsx)(E.ZP, {
                                        icon: eg.fmn,
                                        className: (0, eu.Z)('mr-1'),
                                      }),
                                      'Better',
                                    ],
                                  }),
                                  (0, x.jsxs)(rp, {
                                    onClick: function () {
                                      return eM('original');
                                    },
                                    title:
                                      'This response was worse than the previous response',
                                    children: [
                                      (0, x.jsx)(E.ZP, {
                                        icon: eg.oLd,
                                        className: (0, eu.Z)('mr-1'),
                                      }),
                                      'Worse',
                                    ],
                                  }),
                                  (0, x.jsxs)(rp, {
                                    onClick: function () {
                                      return eM('same');
                                    },
                                    title:
                                      'This response was the same in quality',
                                    children: [
                                      (0, x.jsx)(E.ZP, {
                                        icon: eU.Ny3,
                                        className: (0, eu.Z)(
                                          'mr-1 rounded-full border border-gray-400 dark:border-gray-300',
                                        ),
                                      }),
                                      'Same',
                                    ],
                                  }),
                                  (0, x.jsx)(rp, {
                                    onClick: eR,
                                    title: 'Skip this comparison',
                                    children: (0, x.jsx)(E.ZP, {
                                      icon: eg.q5L,
                                      size: 'medium',
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        rm = ep.Z.div(rt()),
        rf = ep.Z.div(rr()),
        rh = ep.Z.div(ra()),
        rg = ep.Z.div(ri()),
        rp = ep.Z.button(ro()),
        rx = ep.Z.button(rs()),
        rv = ep.Z.div(rl(), function (e) {
          return e.$hidden ? 'invisible' : 'visible';
        }),
        rb = ep.Z.div(rc()),
        rj = ep.Z.div(ru());
      function ry() {
        var e = (0, eo.Z)(['mb-2 mt-auto ml-auto mr-auto']);
        return (
          (ry = function () {
            return e;
          }),
          e
        );
      }
      function rk() {
        var e = (0, eo.Z)([
          'relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden',
        ]);
        return (
          (rk = function () {
            return e;
          }),
          e
        );
      }
      function rC() {
        var e = (0, eo.Z)([
          'mb-5 rounded-md border dark:bg-gray-800 overflow-hidden',
        ]);
        return (
          (rC = function () {
            return e;
          }),
          e
        );
      }
      function rw() {
        var e = (0, eo.Z)(['ml-5']);
        return (
          (rw = function () {
            return e;
          }),
          e
        );
      }
      function rZ() {
        var e = (0, eo.Z)(['ml-5']);
        return (
          (rZ = function () {
            return e;
          }),
          e
        );
      }
      function rN(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
                return 'error' in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              eA.getTextFromMessage(null == e ? void 0 : e.messages[0].message)
                .length < 20
            ))
        );
      }
      function rP(e) {
        var n,
          t,
          r,
          a,
          i,
          o = e.treeRef,
          s = e.ratingModalNodeId,
          l = e.ratingModalOpen,
          c = e.setRatingModalOpen,
          u = e.handleSubmitFeedback,
          d = e.onHandleChangeFeedbackComparisonRating,
          m = e.setCurrentLeafId,
          f = e.feedbackTextareaRef,
          h = e.threadIdRef,
          g = e.activeRequests,
          p = e.modelBackend,
          v = e.onChangeItemInView,
          w = e.onRequestMoreCompletions,
          Z = e.onDeleteNode,
          N = e.onRequestCompletion,
          S = e.onUpdateNode,
          I = e.onSandboxLinkClick,
          T = (0, j.useRef)(0.5 > Math.random() ? 'left' : 'right'),
          M =
            null === (n = o.current) || void 0 === n
              ? void 0
              : n.getConversationTurns(s || 'root'),
          R = M[M.length - 1],
          F = (0, j.useState)('critique'),
          D = F[0],
          E = F[1],
          q = (0, eN.lj)(),
          O = (0, P.hz)().has(_) && rN(R, !0) && !q,
          U = (0, k.WS)(),
          z = (0, j.useMemo)(
            function () {
              return {
                id: s || 'root',
                threadId: h.current || 'root',
                rating: l,
                model: p,
              };
            },
            [s, h, l, p],
          ),
          V =
            null == M
              ? void 0
              : M[(null == M ? void 0 : M.length) - 1].variantIds,
          H = null == V ? void 0 : V[(null == V ? void 0 : V.length) - 1],
          $ = (a = (r =
            null === (t = o.current) || void 0 === t
              ? void 0
              : t.getConversationTurns(H))[r.length - 1]).messages[
            a.messages.length - 1
          ].nodeId,
          W =
            null === (i = o.current) || void 0 === i
              ? void 0
              : i.getConversationTurns($),
          G = (0, j.useMemo)(
            function () {
              var e =
                null == W ? void 0 : W[(null == W ? void 0 : W.length) - 1];
              return 'thumbsDown' === l && O && rN(e) && rN(R);
            },
            [l, O, W, R],
          ),
          Y = (0, j.useRef)(Date.now()),
          J = (0, j.useRef)(-1),
          Q = (0, j.useRef)(Date.now()),
          X = (0, j.useRef)(Date.now());
        (0, j.useEffect)(
          function () {
            'compare' === D
              ? ((J.current = Date.now()), U(C.s6.displayedComparisonUIV0, z))
              : 'critique' === D &&
                'thumbsDown' === l &&
                U(C.s6.displayedThumbsDownFeedbackForm, z);
          },
          [D],
        );
        var K = M[M.length - 2],
          ee = W[W.length - 1],
          en = (0, j.useMemo)(
            function () {
              return ee && eA.getRequestIdFromConversationTurn(ee);
            },
            [ee],
          ),
          et = (0, j.useMemo)(
            function () {
              return g.has(en);
            },
            [g, en],
          );
        (0, j.useMemo)(
          function () {
            et || (X.current = Date.now());
          },
          [et],
        );
        var er = R.messages,
          ea = er[er.length - 1],
          ei = ea.message.id,
          eo = ea.nodeId,
          es = o.current.getLeafFromNode(eo),
          el = ee.messages,
          ec = el[el.length - 1],
          ed = ec.message.id,
          em = ec.nodeId,
          ef = o.current.getLeafFromNode(em),
          eh = (0, j.useRef)([]),
          ep = (0, j.useRef)(''),
          ex = (0, j.useCallback)(
            function () {
              var e,
                n =
                  null === (e = f.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (eh.current = (0, B.Z)(n || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace('feedback-', '');
                })),
                (ep.current =
                  (null == n ? void 0 : n['feedback-other'].value) || ''),
                u(ep.current, eh.current),
                'thumbsDown' === l && U(C.s6.submitThumbsDownFeedbackForm, z),
                G ? E('compare') : c(void 0);
            },
            [G, U, z, f, u, l, c],
          ),
          ev =
            'critique' === D
              ? (0, x.jsx)(y.mH, { title: 'Submit feedback', onClick: ex })
              : null,
          eb = 'left' === T.current ? ee : R,
          ej = 'left' === T.current ? R : ee,
          ey = 'left' === T.current ? 'new' : 'original',
          ek = 'left' === T.current ? 'original' : 'new',
          eC = 'left' === T.current ? 'New Answer' : 'Original Answer',
          ew = 'left' === T.current ? 'Original Answer' : 'New Answer',
          eZ =
            'left' === T.current
              ? 'New answer is better'
              : 'Original answer is better',
          eP =
            'left' === T.current
              ? 'Original answer is better'
              : 'New answer is better',
          e_ = (0, j.useCallback)(
            function (e) {
              var n = 'left' === e ? ey : 'right' === e ? ek : 'same';
              if (
                (U(
                  C.s6.submittedComparisonUIV0,
                  Object.assign({}, z, { choice: n }),
                ),
                l)
              ) {
                var t = o.current.getMetadata(eo);
                o.current.updateNode(eo, {
                  metadata: {
                    $set: (0, L.Z)((0, A.Z)({}, t), {
                      inlineComparisonRating: 'baseline',
                    }),
                  },
                });
                var r = o.current.getMetadata(em);
                o.current.updateNode(em, {
                  metadata: {
                    $set: (0, L.Z)((0, A.Z)({}, r), {
                      inlineComparisonRating: n,
                    }),
                  },
                }),
                  d(
                    ei,
                    ed,
                    l,
                    n,
                    T.current,
                    Y.current,
                    J.current,
                    Q.current,
                    X.current,
                    ep.current,
                    eh.current,
                  );
              }
              m(e === T.current ? ef.id : es.id), c(void 0);
            },
            [ey, ek, U, z, l, m, ef.id, es.id, c, o, eo, em, d, ei, ed],
          ),
          eS = !et && null != X.current && G,
          eI = (0, j.useCallback)(
            function () {
              c(void 0),
                'critique' === D
                  ? U(C.s6.skippedThumbsDownFeedbackForm, Object.assign({}, z))
                  : 'compare' === D &&
                    U(C.s6.skippedComparisonUIV0, Object.assign({}, z));
            },
            [c, U, z, D],
          );
        return (0, x.jsxs)(
          y.ZP,
          {
            isOpen: !0,
            onModalClose: eI,
            closeButton: (0, x.jsx)(y.ol, { onClose: eI }),
            type:
              'critique' === D
                ? 'thumbsUp' === l
                  ? 'success'
                  : 'danger'
                : 'success',
            icon:
              'critique' === D ? ('thumbsUp' === l ? eg.fmn : eg.oLd) : void 0,
            title:
              'critique' === D
                ? 'Provide additional feedback'
                : 'Pick the best answer to improve the model',
            primaryButton: ev,
            size: 'larger',
            children: [
              'critique' === D &&
                (0, x.jsxs)('form', {
                  ref: f,
                  children: [
                    (0, x.jsx)(eL.ZP, {
                      id: 'feedback-other',
                      placeholder:
                        'thumbsUp' === l
                          ? 'What do you like about the response?'
                          : 'What was the issue with the response? How could it be improved?',
                      rows: 3,
                      className:
                        'mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white',
                    }),
                    'thumbsDown' === l &&
                      (0, x.jsxs)('div', {
                        className: 'mb-4',
                        children: [
                          (0, x.jsx)(eB, {
                            id: 'feedback-harmful',
                            label: 'This is harmful / unsafe',
                          }),
                          (0, x.jsx)(eB, {
                            id: 'feedback-false',
                            label: "This isn't true",
                          }),
                          (0, x.jsx)(eB, {
                            id: 'feedback-not-helpful',
                            label: "This isn't helpful",
                          }),
                        ],
                      }),
                  ],
                }),
              'compare' === D &&
                W &&
                h.current &&
                (0, x.jsxs)('div', {
                  className: (0, eu.Z)('w-full'),
                  children: [
                    (0, x.jsx)('p', {
                      className: (0, eu.Z)('mt-3 mb-7'),
                      children:
                        'The conversation will continue with the answer you choose.',
                    }),
                    (0, x.jsx)(rI, {
                      children: (0, x.jsx)(rM, {
                        children: (0, x.jsx)(rd, {
                          modelBackend: p,
                          turn: K,
                          isFinalTurn: !1,
                          threadId: h.current,
                          treeRef: o,
                          onChangeItemInView: v,
                          onChangeRating: b(),
                          onRequestMoreCompletions: w,
                          onDeleteNode: Z,
                          onRequestCompletion: N,
                          onUpdateNode: S,
                          onSandboxLinkClick: I,
                          activeRequests: g,
                          inlineFeedbackDisplay: !0,
                          onHandleChangeVariantFeedbackInlineComparisonRating:
                            b(),
                        }),
                      }),
                    }),
                    (0, x.jsxs)('div', {
                      className: (0, eu.Z)(),
                      children: [
                        (0, x.jsxs)('div', {
                          className: (0, eu.Z)(
                            'mb-2 grid w-full grid-cols-2 gap-5',
                          ),
                          children: [
                            (0, x.jsx)('div', {
                              children: (0, x.jsx)('p', {
                                className: (0, eu.Z)('font-semibold'),
                                children: eC,
                              }),
                            }),
                            (0, x.jsx)('div', {
                              children: (0, x.jsx)('p', {
                                className: (0, eu.Z)('font-semibold'),
                                children: ew,
                              }),
                            }),
                          ],
                        }),
                        (0, x.jsxs)('div', {
                          className: (0, eu.Z)(
                            'mb-5 grid w-full grid-cols-2 gap-5',
                          ),
                          children: [
                            (0, x.jsxs)(rS, {
                              children: [
                                (0, x.jsx)(rT, {
                                  children: (0, x.jsx)(rd, {
                                    modelBackend: p,
                                    turn: eb,
                                    isFinalTurn: !0,
                                    threadId: h.current,
                                    treeRef: o,
                                    onChangeItemInView: v,
                                    onChangeRating: b(),
                                    onDeleteNode: Z,
                                    onRequestMoreCompletions: w,
                                    onRequestCompletion: N,
                                    onUpdateNode: S,
                                    onSandboxLinkClick: I,
                                    activeRequests: g,
                                    inlineFeedbackDisplay: !0,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      b(),
                                  }),
                                }),
                                (0, x.jsx)(r_, {
                                  children: (0, x.jsx)(y.mH, {
                                    disabled: !eS,
                                    title: eZ,
                                    onClick: function () {
                                      return e_('left');
                                    },
                                    color: 'dark',
                                  }),
                                }),
                              ],
                            }),
                            (0, x.jsxs)(rS, {
                              children: [
                                (0, x.jsx)(rT, {
                                  children: (0, x.jsx)(rd, {
                                    modelBackend: p,
                                    turn: ej,
                                    isFinalTurn: !0,
                                    threadId: h.current,
                                    treeRef: o,
                                    onChangeItemInView: v,
                                    onChangeRating: b(),
                                    onDeleteNode: Z,
                                    onRequestMoreCompletions: w,
                                    onRequestCompletion: N,
                                    onUpdateNode: S,
                                    onSandboxLinkClick: I,
                                    activeRequests: g,
                                    inlineFeedbackDisplay: !0,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      b(),
                                  }),
                                }),
                                (0, x.jsx)(r_, {
                                  children: (0, x.jsx)(y.mH, {
                                    disabled: !eS,
                                    title: eP,
                                    onClick: function () {
                                      return e_('right');
                                    },
                                    color: 'dark',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, x.jsx)('div', {
                          className: (0, eu.Z)('grid w-full'),
                          children: (0, x.jsxs)('div', {
                            className: (0, eu.Z)('mb-2 text-right'),
                            children: [
                              (0, x.jsx)(y.mH, {
                                disabled: !eS,
                                title: 'Neither answer is better',
                                color: 'primary',
                                onClick: function () {
                                  return e_('same');
                                },
                                className: (0, eu.Z)('mr-2'),
                              }),
                              (0, x.jsx)(y.mH, {
                                title: 'Skip this step',
                                onClick: function () {
                                  return c(void 0);
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          },
          'RatingModal-'.concat(s),
        );
      }
      var r_ = ep.Z.div(ry()),
        rS = ep.Z.div(rk()),
        rI = ep.Z.div(rC()),
        rT = ep.Z.div(rw()),
        rM = ep.Z.div(rZ()),
        rR = t(72201),
        rF = t(57443),
        rD = t(44043),
        rE = t(82187),
        rq = t(69262);
      function rA(e) {
        var n = e.text,
          t = e.onDone,
          r = e4(),
          a = (0, j.useState)(!0),
          i = a[0],
          o = a[1],
          s = (0, j.useState)(0),
          l = s[0],
          c = s[1],
          u = (0, j.useMemo)(
            function () {
              return new rL().humanTypingDelaysQuertyDistance(n);
            },
            [n],
          );
        return (
          (0, j.useEffect)(
            function () {
              n &&
                i &&
                (o(!0),
                u.forEach(function (e, n) {
                  setTimeout(function () {
                    r() &&
                      (c(n), n === u.length - 1 && (o(!1), null == t || t()));
                  }, e);
                }));
            },
            [u, r, i, t, n],
          ),
          (0, x.jsxs)(x.Fragment, {
            children: [n.substring(0, l + 1), i && '▋'],
          })
        );
      }
      var rL = (function () {
        function e() {
          (0, w.Z)(this, e);
        }
        var n = e.prototype;
        return (
          (n.qwertyDistance = function (e, n) {
            var t,
              r,
              a,
              i = {
                q: [0, 0],
                w: [1, 0],
                e: [2, 0],
                r: [3, 0],
                t: [4, 0],
                y: [5, 0],
                u: [6, 0],
                i: [7, 0],
                o: [8, 0],
                p: [9, 0],
                a: [0, 1],
                s: [1, 1],
                d: [2, 1],
                f: [3, 1],
                g: [4, 1],
                h: [5, 1],
                j: [6, 1],
                k: [7, 1],
                l: [8, 1],
                z: [0, 2],
                x: [1, 2],
                c: [2, 2],
                v: [3, 2],
                b: [4, 2],
                n: [5, 2],
                m: [6, 2],
              },
              o = (0, tJ.Z)(
                null !== (t = i[e.toLowerCase()]) && void 0 !== t ? t : [0, 0],
                2,
              ),
              s = o[0],
              l = o[1],
              c = (0, tJ.Z)(
                null !== (r = i[n.toLowerCase()]) && void 0 !== r ? r : [0, 0],
                2,
              );
            return Math.abs(s - c[0]) + Math.abs(l - c[1]);
          }),
          (n.humanTypingDelaysQuertyDistance = function (e) {
            for (
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 10,
                t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 100,
                r = 0,
                a = [],
                i = 0;
              i < e.length;
              ++i
            ) {
              var o = void 0;
              if (i > 0) {
                var s = this.qwertyDistance(e[i - 1], e[i]);
                o =
                  0 === s
                    ? this.getRandomInt(n, Math.floor(t / 2))
                    : 1 === s
                    ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                    : this.getRandomInt(n, t);
              } else o = this.getRandomInt(n, t);
              a.push(o + r), (r += o);
            }
            return a;
          }),
          (n.getRandomInt = function (e, n) {
            return Math.floor(Math.random() * (n - e + 1)) + e;
          }),
          e
        );
      })();
      function rB() {
        var e = (0, eo.Z)([
          'flex flex-col gap-2 pb-2 text-gray-100 text-sm\n',
          '',
        ]);
        return (
          (rB = function () {
            return e;
          }),
          e
        );
      }
      function rO() {
        var e = (0, eo.Z)([
          'flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n',
          '\n',
        ]);
        return (
          (rO = function () {
            return e;
          }),
          e
        );
      }
      function rU() {
        var e = (0, eo.Z)([
          'flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n',
          '\n',
        ]);
        return (
          (rU = function () {
            return e;
          }),
          e
        );
      }
      function rz() {
        var e = (0, eo.Z)([
          'text-sm border-none bg-transparent p-0 m-0 w-full',
        ]);
        return (
          (rz = function () {
            return e;
          }),
          e
        );
      }
      function rV() {
        var e = (0, eo.Z)([
          'flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative ',
        ]);
        return (
          (rV = function () {
            return e;
          }),
          e
        );
      }
      function rH() {
        var e = (0, eo.Z)([
          'sticky top-0 z-[15] pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all bg-gray-900',
        ]);
        return (
          (rH = function () {
            return e;
          }),
          e
        );
      }
      function r$() {
        var e = (0, eo.Z)([
          'absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n',
          '',
        ]);
        return (
          (r$ = function () {
            return e;
          }),
          e
        );
      }
      function rW() {
        var e = (0, eo.Z)(['absolute flex right-1 z-10 text-gray-300\n', '']);
        return (
          (rW = function () {
            return e;
          }),
          e
        );
      }
      function rG() {
        var e = (0, eo.Z)(['p-1 hover:text-white']);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      var rY = {
          today: 'Today',
          yesterday: 'Yesterday',
          lastSeven: 'Last 7 Days',
          lastThirty: 'Last 30 Days',
        },
        rJ = eZ.href;
      function rQ(e) {
        var n = e.items,
          t = e.activeId,
          r = e.onNextPage,
          a = e.hasNextPage,
          i = e.onNewThread,
          o = e.onRefetchHistory,
          s = e.onUpdateUserModifiedTitle,
          l = e.userModifiedTitle,
          c = e.newChatName,
          u = e.isLoading,
          d = e.isError,
          m = (0, P.hz)(),
          f = (0, j.useRef)(null),
          h = (0, j.useState)(!1),
          g = h[0],
          p = h[1],
          v = (0, j.useCallback)(
            function () {
              p(!0), o();
            },
            [o],
          ),
          b = 0 === n.length;
        (0, j.useEffect)(function () {
          f.current && f.current.scrollIntoView();
        }, []);
        var y = (0, j.useMemo)(
          function () {
            return n.reduce(
              function (e, n) {
                var t,
                  r,
                  a = new Date(
                    null !==
                      (r =
                        null !== (t = n.update_time) && void 0 !== t
                          ? t
                          : n.create_time) && void 0 !== r
                      ? r
                      : 0,
                  ),
                  i = (0, rR.Z)(new Date(), a);
                if (0 === i) e.recent.today.items.push(n);
                else if (i <= 1) e.recent.yesterday.items.push(n);
                else if (i <= 7) e.recent.lastSeven.items.push(n);
                else if (i <= 30) e.recent.lastThirty.items.push(n);
                else if ((0, rq.Z)(a)) {
                  var o = (0, rE.Z)(a),
                    s = (0, rD.Z)(a),
                    l = ''.concat(o, '-').concat(s);
                  e.dynamicMonths[l]
                    ? e.dynamicMonths[l].items.push(n)
                    : (e.dynamicMonths[l] = {
                        label: (0, rF.Z)(a, 'MMMM'),
                        items: [n],
                      });
                } else {
                  var c = (0, rE.Z)(a),
                    u = ''.concat(c, '-');
                  e.dynamicYears[u]
                    ? e.dynamicYears[u].items.push(n)
                    : (e.dynamicYears[u] = { label: ''.concat(c), items: [n] });
                }
                return e;
              },
              {
                recent: {
                  today: { label: rY.today, items: [] },
                  yesterday: { label: rY.yesterday, items: [] },
                  lastSeven: { label: rY.lastSeven, items: [] },
                  lastThirty: { label: rY.lastThirty, items: [] },
                },
                dynamicMonths: {},
                dynamicYears: {},
              },
            );
          },
          [n],
        );
        return (0, x.jsxs)(rX, {
          $centered: u || (d && b),
          children: [
            b && u && (0, x.jsx)(nd.Z, { className: 'm-auto' }),
            b &&
              d &&
              (0, x.jsxs)('div', {
                className: 'p-3 text-center italic text-gray-500',
                children: [
                  'Unable to load history',
                  !g &&
                    (0, x.jsx)('div', {
                      className: 'mt-1',
                      children: (0, x.jsx)(th.z, {
                        as: 'button',
                        color: 'dark',
                        size: 'small',
                        className: 'm-auto mt-2',
                        onClick: v,
                        children: 'Retry',
                      }),
                    }),
                ],
              }),
            m.has(S)
              ? [y.recent, y.dynamicMonths, y.dynamicYears].flatMap(function (
                  e,
                ) {
                  return Object.entries(e).map(function (e) {
                    var n = (0, tJ.Z)(e, 2),
                      r = n[0],
                      a = n[1],
                      u = a.items,
                      d = a.label;
                    return u.length
                      ? (0, x.jsxs)(
                          'div',
                          {
                            children: [
                              (0, x.jsx)(r4, { children: d }),
                              u.map(function (e) {
                                var n = t === e.id;
                                return (0,
                                x.jsx)(rK, { id: e.id, title: e.title, newChatName: n ? c : void 0, userModifiedTitle: n ? l : '', onUpdateUserModifiedTitle: s, active: n, forwardRef: n ? f : void 0, onNewThread: i, onRefetchHistory: o }, e.id);
                              }),
                            ],
                          },
                          r,
                        )
                      : null;
                  });
                })
              : n.map(function (e) {
                  var n = t === e.id;
                  return (0,
                  x.jsx)(rK, { id: e.id, title: e.title, newChatName: n ? c : void 0, userModifiedTitle: n ? l : '', onUpdateUserModifiedTitle: s, active: n, forwardRef: n ? f : void 0, onNewThread: i, onRefetchHistory: o }, e.id);
                }),
            a &&
              (0, x.jsx)(th.z, {
                as: 'button',
                onClick: r,
                color: 'dark',
                className: 'm-auto mb-2',
                size: 'small',
                children: 'Show more',
              }),
          ],
        });
      }
      var rX = ep.Z.div(rB(), function (e) {
        return e.$centered && 'h-full justify-center items-center';
      });
      function rK(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          i = e.onRefetchHistory,
          o = e.onUpdateUserModifiedTitle,
          s = e.newChatName,
          l = e.userModifiedTitle,
          c = e.forwardRef,
          u = (0, eN.lj)(),
          d = (0, k.WS)(),
          m = (0, D.useRouter)(),
          f = (0, j.useState)(!1),
          h = f[0],
          g = f[1],
          p = (0, j.useRef)(null),
          v = (0, j.useState)(!1),
          y = v[0],
          w = v[1],
          Z = (0, j.useState)(),
          N = Z[0],
          P = Z[1],
          _ = (0, j.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                g(!1),
                (null === (r = p.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = p.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var s = p.current.value;
                ej.ZP.patchConversation(n, { title: s }),
                  o(s),
                  d(C.s6.renameThread, { threadId: n, content: s }),
                  i();
              }
            },
            [d, n, i, o, t],
          ),
          S = (0, j.useCallback)(
            function (e) {
              'Enter' === e.key && _();
            },
            [_],
          ),
          I = (0, j.useCallback)(
            function () {
              ej.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                i();
              }),
                m.asPath === rJ ? a() : m.replace({ pathname: rJ });
            },
            [n, a, i, m],
          ),
          T = (0, j.useCallback)(
            function (e) {
              e.preventDefault(),
                d(C.s6.loadThread, { threadId: n }),
                m.push('/c/'.concat(n), void 0, { shallow: !0 });
            },
            [d, n, m],
          ),
          M = l || (r && s) || t;
        if (
          ((0, j.useEffect)(
            function () {
              r && s && s !== N && P(s);
            },
            [r, s, M, N, l],
          ),
          h)
        )
          return (0, x.jsxs)(r1, {
            $active: r,
            children: [
              (0, x.jsx)(E.ZP, { icon: eg.IC0, className: 'flex-shrink-0' }),
              (0, x.jsx)(r2, {
                ref: p,
                type: 'text',
                defaultValue: M,
                autoFocus: !0,
                onKeyDown: S,
                className: 'mr-0',
                onBlur: _,
              }),
              (0, x.jsxs)(r6, {
                $active: !0,
                children: [
                  (0, x.jsx)(r8, {
                    onClick: _,
                    children: (0, x.jsx)(E.ZP, { icon: eg.UgA }),
                  }),
                  (0, x.jsx)(r8, {
                    onClick: function (e) {
                      e.preventDefault(), g(!1);
                    },
                    children: (0, x.jsx)(E.ZP, { icon: eg.q5L }),
                  }),
                ],
              }),
            ],
          });
        var R = N && r && !u && !l,
          F = 'Delete "'.concat(M, '"?');
        return (0, x.jsxs)(r0, {
          onClick: r ? b() : T,
          $active: r,
          className: (0, eu.Z)('group', R && 'animate-flash'),
          ref: c,
          children: [
            (0, x.jsx)(E.ZP, { icon: y ? eg.Ybf : eg.IC0 }),
            (0, x.jsxs)(r3, {
              children: [
                R ? (0, x.jsx)(rA, { text: M, onDone: i }) : y ? F : M,
                (!N || !r) && (0, x.jsx)(r5, { $active: r }),
              ],
            }),
            y &&
              (0, x.jsxs)(r6, {
                $active: !0,
                children: [
                  (0, x.jsx)(r8, {
                    onClick: I,
                    children: (0, x.jsx)(E.ZP, { icon: eg.UgA }),
                  }),
                  (0, x.jsx)(r8, {
                    onClick: function () {
                      w(!1);
                    },
                    children: (0, x.jsx)(E.ZP, { icon: eg.q5L }),
                  }),
                ],
              }),
            r &&
              !y &&
              (0, x.jsxs)(r6, {
                $active: r,
                children: [
                  (0, x.jsx)(r8, {
                    onClick: function (e) {
                      e.preventDefault(), g(!0);
                    },
                    children: (0, x.jsx)(E.ZP, { icon: eg.Nte }),
                  }),
                  (0, x.jsx)(r8, {
                    onClick: function () {
                      return w(!0);
                    },
                    children: (0, x.jsx)(E.ZP, { icon: eg.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var r0 = ep.Z.a(rO(), function (e) {
          return e.$active
            ? 'pr-14 bg-gray-800 hover:bg-gray-800'
            : 'hover:pr-4';
        }),
        r1 = ep.Z.div(rU(), function (e) {
          return e.$active && 'pr-14 bg-gray-800 hover:bg-gray-800';
        }),
        r2 = ep.Z.input(rz()),
        r3 = ep.Z.div(rV()),
        r4 = ep.Z.div(rH()),
        r5 = ep.Z.div(r$(), function (e) {
          return e.$active
            ? 'from-gray-800'
            : 'from-gray-900 group-hover:from-[#2A2B32]';
        }),
        r6 = ep.Z.div(rW(), function (e) {
          return e.$active ? 'visible' : 'invisible group-hover:visible';
        }),
        r8 = ep.Z.button(rG()),
        r7 = t(40638),
        r9 = t(39031),
        ae = t(54721),
        an = t.n(ae);
      function at() {
        var e = (0, eo.Z)(['absolute right-0 top-1/2 -translate-y-1/2']);
        return (
          (at = function () {
            return e;
          }),
          e
        );
      }
      var ar = j.forwardRef(function (e, n) {
          var t = e.name,
            r = e.placeholder,
            a = e.type,
            i = e.displayName,
            o = e.onChange,
            s = e.onBlur,
            l = e.value,
            c = e.saveOnBlur,
            u = e.icon,
            d = e.onInputIconClick,
            m = e.className,
            f = e.autoComplete,
            h = e.autoFocus,
            g = e.onPressEnter,
            p = (0, j.useState)(l),
            v = p[0],
            b = p[1],
            y = (0, j.useCallback)(
              function (e) {
                null == s || s(e), c && b(e.target.value);
              },
              [s, c],
            ),
            k = (0, j.useCallback)(
              function (e) {
                null == o || o(e), c && b(e.target.value);
              },
              [o, c],
            ),
            C = (0, j.useCallback)(
              function (e) {
                'Enter' === e.key && g && (e.preventDefault(), g());
              },
              [g],
            );
          (0, j.useEffect)(
            function () {
              b(l);
            },
            [l],
          );
          var w = (0, A.Z)({}, c ? {} : { value: l }, c ? { value: v } : {});
          return (0,
          x.jsxs)('div', { className: (0, eu.Z)('rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700', m), children: [(0, x.jsx)('label', { htmlFor: t, className: 'block text-xs font-medium text-gray-900', children: i }), (0, x.jsxs)('div', { className: (0, eu.Z)(i && 'mt-1', 'relative'), children: [(0, x.jsx)('input', (0, A.Z)({ ref: n, type: a, name: t, id: t, className: (0, eu.Z)('block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm', u && 'pr-6'), placeholder: r, onBlur: y, onChange: k, onKeyDown: C, autoComplete: f, autoFocus: h }, w)), u && (0, x.jsx)(aa, { onClick: d, children: (0, x.jsx)(E.ZP, { icon: u }) })] })] });
        }),
        aa = ep.Z.button(at()),
        ai = t(6004);
      function ao(e) {
        var n = e.onChange,
          t = e.enabled,
          r = e.size,
          a = e.Icon,
          i = (0, j.useCallback)(
            function () {
              n(!t);
            },
            [t, n],
          ),
          o = !t && 'translate-x-0';
        return (0, x.jsxs)(ai.r, {
          checked: t,
          onChange: i,
          className: (0, eu.Z)(
            t ? 'bg-green-600' : 'bg-gray-200',
            'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0',
            'large' === r ? 'h-6 w-11' : 'h-4 w-8',
          ),
          children: [
            (0, x.jsx)('span', {
              className: 'sr-only',
              children: 'Use setting',
            }),
            (0, x.jsxs)('span', {
              className: (0, eu.Z)(
                'pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                t && 'large' === r ? 'translate-x-5' : o,
                t && 'small' === r ? 'translate-x-4' : o,
                'large' === r ? 'h-5 w-5' : 'h-3 w-3',
              ),
              children: [
                (0, x.jsx)('span', {
                  className: (0, eu.Z)(
                    t
                      ? 'opacity-0 duration-100 ease-out'
                      : 'opacity-100 duration-200 ease-in',
                    'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                  ),
                  'aria-hidden': 'true',
                }),
                (0, x.jsx)('span', {
                  className: (0, eu.Z)(
                    t
                      ? 'opacity-100 duration-200 ease-in'
                      : 'opacity-0 duration-100 ease-out',
                    'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
                  ),
                  'aria-hidden': 'true',
                  children:
                    a &&
                    (0, x.jsx)(a, { className: 'h-3 w-3 text-indigo-600' }),
                }),
              ],
            }),
          ],
        });
      }
      var as = t(62906),
        al = t(27863);
      function ac(e) {
        var n = e.children,
          t = e.sidebarOpen,
          r = e.onClose;
        return (0, x.jsx)(r7.u.Root, {
          show: t,
          as: j.Fragment,
          children: (0, x.jsxs)(r9.V, {
            as: 'div',
            className: 'relative z-10',
            onClose: r,
            children: [
              (0, x.jsx)('div', { className: 'fixed inset-0' }),
              (0, x.jsx)('div', {
                className: 'fixed inset-0 overflow-hidden',
                children: (0, x.jsx)('div', {
                  className: 'absolute inset-0 overflow-hidden',
                  children: (0, x.jsx)('div', {
                    className:
                      'pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10',
                    children: (0, x.jsx)(r7.u.Child, {
                      as: j.Fragment,
                      enter:
                        'transform transition ease-in-out duration-100 sm:duration-300',
                      enterFrom: 'translate-x-full',
                      enterTo: 'translate-x-0',
                      leave:
                        'transform transition ease-in-out duration-300 sm:duration-500',
                      leaveFrom: 'translate-x-0',
                      leaveTo: 'translate-x-full',
                      children: (0, x.jsx)(r9.V.Panel, {
                        className:
                          'pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700',
                        children: (0, x.jsx)('div', {
                          className:
                            'h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800',
                          children: n,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function au() {
        var e = (0, eo.Z)([
          'overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700',
        ]);
        return (
          (au = function () {
            return e;
          }),
          e
        );
      }
      function ad() {
        var e = (0, eo.Z)(['whitespace-pre-wrap text-sm']);
        return (
          (ad = function () {
            return e;
          }),
          e
        );
      }
      function am() {
        var e = (0, eo.Z)([
          'px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200',
        ]);
        return (
          (am = function () {
            return e;
          }),
          e
        );
      }
      function af(e) {
        var n = e.children,
          t = e.title,
          r = e.icon,
          a = e.isOpen,
          i = e.slideOver,
          o = e.onClose,
          s = (0, x.jsxs)(ax, {
            children: [
              (0, x.jsxs)('div', {
                className: 'flex items-start justify-between',
                children: [
                  (0, x.jsxs)('div', {
                    className:
                      'flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white',
                    children: [(0, x.jsx)(E.ZP, { icon: r }), t],
                  }),
                  (0, x.jsx)('div', {
                    className: 'mr-2 mt-2 flex h-7 items-center',
                    children: (0, x.jsxs)('button', {
                      type: 'button',
                      className:
                        'rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                      onClick: o,
                      children: [
                        (0, x.jsx)('span', {
                          className: 'sr-only',
                          children: 'Close sidebar',
                        }),
                        (0, x.jsx)(E.ZP, {
                          icon: eg.q5L,
                          size: 'medium',
                          'aria-hidden': 'true',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              n,
            ],
          });
        return i
          ? (0, x.jsx)(ac, { sidebarOpen: a, onClose: o, children: s })
          : a
          ? s
          : null;
      }
      function ah(e) {
        var n = e.threadId,
          t = e.treeRef,
          r = e.currentLeafId,
          a = e.isOpen,
          i = e.slideOver,
          o = e.onClose,
          s = (0, j.useState)(ap(t, r)),
          l = s[0],
          c = s[1],
          u = (0, j.useState)(),
          d = u[0],
          m = u[1],
          f = (0, P.hz)();
        (0, al.Z)(function () {
          a && c(ap(t, r));
        }, 500);
        var h = (0, j.useCallback)(function () {
            m(void 0);
          }, []),
          g = (0, j.useCallback)(
            function () {
              navigator.clipboard.writeText(t.current.getTextFromThread(r));
            },
            [t, r],
          );
        if (!f.has('debug')) return null;
        var p = l.map(function (e, n) {
          var t = e.author,
            r = t.role,
            a = t.name;
          return (0, x.jsxs)(
            ab,
            {
              role: 'button',
              onClick: function () {
                return m(n);
              },
              children: [
                (0, x.jsxs)('div', {
                  className: 'text-xs font-medium uppercase text-gray-400',
                  children: [
                    r,
                    a && a !== r && ' ('.concat(a, ')'),
                    ' -> ',
                    eA.getRecipientFromMessage(e),
                  ],
                }),
                (0, x.jsx)('div', { children: eA.getTextFromMessage(e) }),
              ],
            },
            e.id,
          );
        });
        return (0, x.jsxs)(af, {
          icon: eg.cDN,
          title: 'Debug',
          isOpen: a,
          slideOver: i,
          onClose: o,
          children: [
            (0, x.jsxs)('div', {
              className:
                'flex items-center justify-between border-y bg-gray-100 py-1 px-4 text-xs font-medium uppercase text-gray-700',
              children: [
                'Conversation messages',
                (0, x.jsxs)('div', {
                  className: 'flex gap-2',
                  children: [
                    (0, x.jsx)(no.$, {
                      label: (0, x.jsx)(no.u, {
                        text: 'Copy conversation text to clipboard',
                      }),
                      children: (0, x.jsx)(e6, { onCopy: g }),
                    }),
                    (0, x.jsx)(no.$, {
                      label: (0, x.jsx)(no.u, {
                        text: 'Download raw conversation',
                      }),
                      children: (0, x.jsx)(ag, { threadId: n, messages: l }),
                    }),
                  ],
                }),
              ],
            }),
            (0, x.jsx)(av, { children: p }),
            void 0 !== d &&
              (0, x.jsx)(
                y.ZP,
                {
                  isOpen: !0,
                  onModalClose: h,
                  type: 'success',
                  children: (0, x.jsx)('pre', {
                    className:
                      'max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs',
                    children: JSON.stringify(l[d], null, 2),
                  }),
                },
                'DebugMessageModal-'.concat(d),
              ),
          ],
        });
      }
      function ag(e) {
        var n = e.threadId,
          t = e.messages,
          r = (0, j.useCallback)(
            function () {
              var e = JSON.stringify(t) + '\n',
                r = new Blob([e], { type: 'application/json' }),
                a = URL.createObjectURL(r),
                i = document.createElement('a');
              (i.href = a),
                (i.download = 'messages-'.concat(n, '.jsonl')),
                i.click(),
                URL.revokeObjectURL(a);
            },
            [n, t],
          );
        return (0, x.jsx)('button', {
          onClick: r,
          children: (0, x.jsx)(E.ZP, { icon: eg._hL }),
        });
      }
      function ap(e, n) {
        return e.current
          .getBranchFromLeaf(n)
          .filter(function (e) {
            return e.type !== l.Root;
          })
          .map(function (e) {
            return e.message;
          });
      }
      var ax = ep.Z.div(au()),
        av = ep.Z.pre(ad()),
        ab = ep.Z.div(am());
      function aj(e) {
        var n = e.plugin,
          t = n.manifest.name_for_human;
        return (0, x.jsxs)('div', {
          className:
            'flex flex-col gap-1 self-start rounded border border-gray-100 py-2 px-4',
          children: [
            (0, x.jsxs)('div', {
              className: 'flex items-center gap-1 font-medium',
              children: [
                (0, x.jsx)(e$, { url: n.manifest.logo_url, name: t, size: 16 }),
                (0, x.jsx)('div', { children: t }),
              ],
            }),
            (0, x.jsx)('div', {
              className: 'text-sm',
              children: n.manifest.description_for_human,
            }),
          ],
        });
      }
      function ay(e) {
        var n = e.manifestValidationInfo,
          t = (0, ei.Z)(e, ['manifestValidationInfo']),
          r = n.manifest_dict,
          a = n.warnings,
          i = n.errors;
        return (0, x.jsx)(
          aw,
          (0, A.Z)({ name: 'manifest', content: r, warnings: a, errors: i }, t),
        );
      }
      function ak(e) {
        var n = e.apiValidationInfo,
          t = (0, ei.Z)(e, ['apiValidationInfo']),
          r = n.openapi_spec_dict,
          a = n.warnings,
          i = n.errors;
        return (0, x.jsx)(
          aw,
          (0, A.Z)(
            { name: 'OpenAPI spec', content: r, warnings: a, errors: i },
            t,
          ),
        );
      }
      function aC(e) {
        var n = e.apiValidationInfo,
          t = (0, ei.Z)(e, ['apiValidationInfo']),
          r = n.api_typescript;
        return r
          ? (0, x.jsx)(
              aZ,
              (0, A.Z)({ text: 'Prompt for ChatGPT', content: r }, t),
            )
          : null;
      }
      function aw(e) {
        var n = e.name,
          t = e.content,
          r = e.warnings,
          a = e.errors,
          i = (0, ei.Z)(e, ['name', 'content', 'warnings', 'errors']),
          o = r && r.length > 0,
          s = a && a.length > 0,
          l = 'Validated '.concat(n),
          c = (0, x.jsx)(E.ZP, { icon: eg.UgA, className: 'text-green-500' });
        return (
          s
            ? ((l = 'Errors in '.concat(n)),
              (c = (0, x.jsx)(E.ZP, {
                icon: eg.q5L,
                className: 'text-red-500',
              })))
            : o &&
              ((l = 'Warnings in '.concat(n)),
              (c = (0, x.jsx)(E.ZP, {
                icon: eg.bcx,
                className: 'text-yellow-500',
              }))),
          (0, x.jsx)(
            aZ,
            (0, A.Z)(
              { icon: c, text: l, content: t, warnings: r, errors: a },
              i,
            ),
          )
        );
      }
      function aZ(e) {
        var n = e.icon,
          t = e.text,
          r = e.content,
          a = e.warnings,
          i = e.errors,
          o = e.expanded,
          s = e.onChangeExpanded,
          l = (0, j.useState)(!1),
          c = l[0],
          u = l[1],
          d = null != o ? o : c,
          m = (0, j.useCallback)(
            function () {
              s
                ? s(!d)
                : u(function (e) {
                    return !e;
                  });
            },
            [d, s],
          );
        return (0, x.jsxs)('div', {
          className: 'flex flex-col gap-2 text-sm',
          children: [
            (0, x.jsxs)('div', {
              className: 'flex items-center gap-1',
              children: [
                n && (0, x.jsx)('div', { children: n }),
                (0, x.jsx)('div', { children: t }),
                (0, x.jsx)('div', {
                  role: 'button',
                  className: 'cursor-pointer text-gray-500 hover:text-gray-700',
                  onClick: m,
                  children: (0, x.jsx)(E.ZP, { icon: d ? eg.rH8 : eg.bTu }),
                }),
              ],
            }),
            d &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsxs)('div', {
                    className: 'flex flex-col gap-2 font-semibold',
                    children: [
                      i &&
                        i.map(function (e, n) {
                          return (0,
                          x.jsx)('div', { className: 'text-red-500', children: e }, n);
                        }),
                      a &&
                        a.map(function (e, n) {
                          return (0,
                          x.jsx)('div', { className: 'text-yellow-500', children: e }, n);
                        }),
                    ],
                  }),
                  r &&
                    (0, x.jsx)('pre', {
                      className: 'overflow-auto whitespace-pre-wrap text-xs',
                      children:
                        'string' == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
      var aN = t(14303);
      function aP(e) {
        var n = e.onSuccess,
          t = e.onError,
          r = e.onSettled,
          a = (0, as.NL)(),
          i = (0, aN.D)(ej.ZP.updatePluginUserSettings.bind(ej.ZP), {
            onSuccess: function (e) {
              a_(e, a, ['installedAip']), aS(e, a, ['approvedAip']), n(e);
            },
            onError: t,
            onSettled: r,
          }).mutate;
        return (0, j.useCallback)(
          function (e) {
            i({ pluginId: e, isInstalled: !0 });
          },
          [i],
        );
      }
      function a_(e, n, t) {
        n.setQueryData(t, function (n) {
          var t = (0, B.Z)((null == n ? void 0 : n.items) || []),
            r = t.findIndex(function (n) {
              return n.id === e.id;
            });
          return (
            -1 !== r ? (t[r] = e) : t.push(e), { count: t.length, items: t }
          );
        });
      }
      function aS(e, n, t) {
        n.setQueryData(t, function (n) {
          var t = (0, B.Z)((null == n ? void 0 : n.items) || []),
            r = t.findIndex(function (n) {
              return n.id === e.id;
            });
          return -1 !== r && (t[r] = e), { count: t.length, items: t };
        });
      }
      function aI(e) {
        var n = e.manifest.auth;
        if ('oauth' !== n.type || !e.oauth_client_id) return null;
        var t = new URLSearchParams({
          response_type: 'code',
          client_id: e.oauth_client_id,
          redirect_uri: ''
            .concat(window.location.origin, '/aip/')
            .concat(e.id, '/oauth/callback'),
          scope: n.scope,
        });
        return (
          n.client_url.includes('slack.com') &&
            (t.delete('scope'), t.append('user_scope', n.scope)),
          ''.concat(n.client_url, '?').concat(t)
        );
      }
      var aT = [
          ['www.klarna.com', 'server.shop.app'],
          ['apim.expedia.com', 'kayak.com'],
        ],
        aM = 'oai/enabledPluginIds',
        aR = (0, O.ZP)(function () {
          var e = Array.from(new Set(N.getItem(aM)));
          return { enabledPluginIds: new Set(e.splice(0, 3)) };
        });
      function aF() {
        var e = tE().installedPlugins,
          n = aR().enabledPluginIds;
        return (0, j.useMemo)(
          function () {
            return e.filter(function (e) {
              return n.has(e.id);
            });
          },
          [n, e],
        );
      }
      function aD(e) {
        aR.setState(function (n) {
          if (n.enabledPluginIds.size >= 3) return n;
          var t = (0, B.Z)(n.enabledPluginIds).concat([e]);
          return N.setItem(aM, t), { enabledPluginIds: new Set(t) };
        });
      }
      var aE = (0, O.ZP)(function () {
        return { isOpen: !1 };
      });
      function aq() {
        aE.setState(function () {
          return { isOpen: !1 };
        });
      }
      function aA(e) {
        var n = e.slideOver,
          t = (0, j.useState)(),
          r = t[0],
          a = t[1],
          i = (0, j.useState)(!1),
          o = i[0],
          s = i[1],
          l = (0, j.useState)(!1),
          c = l[0],
          u = l[1],
          d = (0, j.useState)(!1),
          m = d[0],
          f = d[1],
          h = (0, P.hz)(),
          g = (0, as.NL)(),
          p = aE().isOpen,
          v = aF(),
          b = (0, j.useMemo)(
            function () {
              return v.find(t0);
            },
            [v],
          ),
          y = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e, n, t, r;
              return (0, el.__generator)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!b) return [3, 2];
                    return a(void 0), [4, t2(b.domain)];
                  case 1:
                    if (void 0 === (e = r.sent())) return [2];
                    (n = e.plugin),
                      a({
                        manifestValidationInfo: (t =
                          e.manifest_validation_info),
                        apiValidationInfo: e.api_validation_info,
                      }),
                      n && aS(n, g, ['installedAip']),
                      (r.label = 2);
                  case 2:
                    return [2];
                }
              });
            }),
            [b, g],
          );
        return ((0, j.useEffect)(
          function () {
            y();
          },
          [y],
        ),
        h.has('tools3_dev'))
          ? (0, x.jsx)(af, {
              icon: eg.V7f,
              title: 'Plugin devtools',
              isOpen: p,
              slideOver: n,
              onClose: aq,
              children: (0, x.jsx)('div', {
                className:
                  'border-t border-gray-100 p-2 text-sm dark:border-gray-700',
                children: b
                  ? (0, x.jsxs)('div', {
                      className: 'flex flex-col gap-2',
                      children: [
                        (0, x.jsx)('div', {
                          children: (0, x.jsx)(th.z, {
                            size: 'small',
                            color: 'neutral',
                            onClick: y,
                            children: 'Refresh plugin',
                          }),
                        }),
                        r
                          ? (0, x.jsxs)(x.Fragment, {
                              children: [
                                (0, x.jsx)(aj, { plugin: b }),
                                (0, x.jsx)(ay, {
                                  manifestValidationInfo:
                                    r.manifestValidationInfo,
                                  expanded: o,
                                  onChangeExpanded: s,
                                }),
                                (0, x.jsx)(ak, {
                                  apiValidationInfo: r.apiValidationInfo,
                                  expanded: c,
                                  onChangeExpanded: u,
                                }),
                                (0, x.jsx)(aC, {
                                  apiValidationInfo: r.apiValidationInfo,
                                  expanded: m,
                                  onChangeExpanded: f,
                                }),
                              ],
                            })
                          : (0, x.jsx)('div', {
                              className: 'self-center',
                              children: (0, x.jsx)(nd.Z, {}),
                            }),
                      ],
                    })
                  : (0, x.jsx)('div', {
                      className: 'mt-4 text-center',
                      children:
                        'Please enable a localhost plugin to use devtools.',
                    }),
              }),
            })
          : null;
      }
      function aL() {
        var e = (0, eo.Z)(['block text-sm font-medium mb-1']);
        return (
          (aL = function () {
            return e;
          }),
          e
        );
      }
      function aB(e) {
        var n = e.onClose,
          t = (0, j.useState)(!1),
          r = t[0],
          a = t[1],
          i = (0, j.useState)(!1),
          o = i[0],
          s = i[1],
          l = aE().isOpen,
          c = (0, nM.F)(),
          u = c.theme,
          d = c.setTheme,
          m = (0, P.hz)(),
          f = m.has('data_export_enabled'),
          h = m.has('data_deletion_enabled'),
          g = (0, j.useCallback)(function () {
            a(!1);
          }, []),
          p = (0, j.useCallback)(function () {
            s(!1);
          }, []),
          v = (0, j.useCallback)(
            function (e) {
              d(e ? 'dark' : 'light');
            },
            [d],
          ),
          b = (0, j.useCallback)(function (e) {
            e
              ? aE.setState(function () {
                  return { isOpen: !0 };
                })
              : aq();
          }, []),
          k = (0, j.useCallback)(function () {
            a(!0);
          }, []),
          C = (0, j.useCallback)(function () {
            s(!0);
          }, []);
        return r
          ? (0, x.jsx)(aU, { onClose: g })
          : o
          ? (0, x.jsx)(az, { onClose: p })
          : (0, x.jsx)(y.ZP, {
              isOpen: !0,
              onModalClose: n,
              size: 'xxs',
              type: 'success',
              title: 'Settings',
              closeButton: (0, x.jsx)(y.ol, { onClose: n }),
              children: (0, x.jsxs)('div', {
                className:
                  'mt-4 flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300',
                children: [
                  (0, x.jsx)(aO, {
                    label: 'Dark mode',
                    enabled: 'dark' === u,
                    onChange: v,
                  }),
                  m.has('tools3_dev') &&
                    (0, x.jsx)(aO, {
                      label: 'Open plugin devtools',
                      enabled: l,
                      onChange: b,
                    }),
                  (0, x.jsxs)('div', {
                    className: 'mt-2 flex gap-2',
                    children: [
                      f &&
                        (0, x.jsx)('div', {
                          role: 'button',
                          className: 'underline',
                          onClick: k,
                          children: 'Export data',
                        }),
                      f &&
                        h &&
                        (0, x.jsx)('div', {
                          className:
                            'border-l border-black/30 dark:border-white/30',
                        }),
                      h &&
                        (0, x.jsx)('div', {
                          role: 'button',
                          className: 'underline',
                          onClick: C,
                          children: 'Delete account',
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      function aO(e) {
        var n = e.label,
          t = e.enabled,
          r = e.onChange;
        return (0, x.jsxs)('div', {
          className: 'flex items-center justify-between',
          children: [
            (0, x.jsx)('div', { children: n }),
            (0, x.jsx)(ao, { size: 'large', enabled: t, onChange: r }),
          ],
        });
      }
      function aU(e) {
        var n = e.onClose,
          t = (0, ex.kP)().session,
          r = null == t ? void 0 : t.accessToken,
          a = (0, j.useCallback)(
            function () {
              try {
                ej.ZP.submitDataExport(r).then(function () {
                  I.m.success(
                    'Successfully exported data. You should receive an email shortly with your data.',
                  ),
                    n();
                });
              } catch (e) {
                I.m.warning(
                  'We were unable to process your export at this time. Please try again later.',
                  { hasCloseButton: !0 },
                );
              }
            },
            [r, n],
          );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: 'success',
          title: 'Request data export - are you sure?',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Confirm export',
            color: 'primary',
            onClick: a,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: 'Cancel',
            color: 'neutral',
            onClick: n,
          }),
          children: (0, x.jsxs)('div', {
            className: 'text-sm',
            children: [
              (0, x.jsxs)('ul', {
                className: 'my-3 flex list-disc flex-col gap-1 pl-3',
                children: [
                  (0, x.jsx)('li', {
                    children:
                      'Your account details and conversations will be included in the export.',
                  }),
                  (0, x.jsx)('li', {
                    children:
                      'The data will be sent to your registered email in a downloadable file.',
                  }),
                  (0, x.jsx)('li', {
                    children:
                      "Processing may take some time. You'll be notified when it's ready.",
                  }),
                ],
              }),
              (0, x.jsx)('div', {
                children: 'To proceed, click "Confirm export" below.',
              }),
            ],
          }),
        });
      }
      function az(e) {
        var n,
          t = e.onClose,
          r = (0, ex.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i =
            null == r
              ? void 0
              : null === (n = r.user) || void 0 === n
              ? void 0
              : n.email,
          o = (0, j.useState)(''),
          s = o[0],
          l = o[1],
          c = (0, j.useState)(''),
          u = c[0],
          d = c[1],
          m = (0, j.useCallback)(
            function () {
              try {
                ej.ZP.deactivateAccount(a).then(function () {
                  (0, ex.w7)();
                });
              } catch (e) {
                I.m.warning(
                  'There was an error with your account deletion. Please try again. If the problem continues, please visit us at help.openai.com',
                  { hasCloseButton: !0 },
                );
              }
            },
            [a],
          ),
          f = 'DELETE' === u && (void 0 === i || s === i);
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          size: 'xs',
          onModalClose: t,
          type: 'success',
          title: 'Delete account - are you sure?',
          closeButton: (0, x.jsx)(y.ol, { onClose: t }),
          children: (0, x.jsxs)('div', {
            className: 'text-sm',
            children: [
              (0, x.jsxs)('ul', {
                className: 'mt-4 mb-6 flex list-disc flex-col gap-1 pl-3',
                children: [
                  (0, x.jsx)('li', {
                    children:
                      'Deleting your account is permanent and cannot be undone.',
                  }),
                  (0, x.jsx)('li', {
                    children:
                      'For security reasons, you cannot reuse the same email or phone number for a new account.',
                  }),
                  (0, x.jsx)('li', {
                    children:
                      'All your data, including profile, conversations, and API usage, will be removed.',
                  }),
                  (0, x.jsx)('li', {
                    children:
                      "If you've been using ChatGPT with the API, this access will also be deleted.",
                  }),
                ],
              }),
              void 0 !== i
                ? (0, x.jsxs)('div', {
                    className: 'mb-4',
                    children: [
                      (0, x.jsx)(aV, {
                        children: 'Please type your account email.',
                      }),
                      (0, x.jsx)(ar, {
                        value: s,
                        placeholder: i,
                        name: 'email',
                        onChange: function (e) {
                          l(e.target.value);
                        },
                      }),
                    ],
                  })
                : null,
              (0, x.jsxs)('div', {
                className: 'mb-4',
                children: [
                  (0, x.jsx)(aV, {
                    children:
                      'To proceed, type "DELETE" in the input field below.',
                  }),
                  (0, x.jsx)(ar, {
                    value: u,
                    onChange: function (e) {
                      d(e.target.value);
                    },
                    name: 'delete',
                    className: 'mb-4',
                  }),
                ],
              }),
              (0, x.jsx)(th.z, {
                color: f ? 'danger' : 'disabled',
                onClick: m,
                disabled: !f,
                className: 'w-full',
                children: f
                  ? (0, x.jsxs)(x.Fragment, {
                      children: [
                        (0, x.jsx)(E.ZP, { icon: eg.BJv }),
                        ' Permanently delete my account',
                      ],
                    })
                  : (0, x.jsxs)(x.Fragment, {
                      children: [(0, x.jsx)(E.ZP, { icon: eg.UIZ }), ' Locked'],
                    }),
              }),
            ],
          }),
        });
      }
      var aV = ep.Z.label(aL());
      function aH() {
        var e = (0, eo.Z)([
          'flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm',
        ]);
        return (
          (aH = function () {
            return e;
          }),
          e
        );
      }
      function a$() {
        var e = (0, eo.Z)([
          'flex-col flex-1 overflow-y-auto border-b border-white/20\n',
          '',
        ]);
        return (
          (a$ = function () {
            return e;
          }),
          e
        );
      }
      var aW = ep.Z.a(aH()),
        aG = ep.Z.div(a$(), function (e) {
          return e.$offsetScrollbar && '-mr-2';
        }),
        aY = eZ.href;
      function aJ(e) {
        var n = e.onClickAccountPayment,
          t = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          i = e.onDeleteHistory,
          o = e.showDeleteHistory,
          s = e.onNewThread,
          l = e.toggleDebugSidebar,
          c = e.children,
          u = (0, k.WS)(),
          d = (0, P.hz)(),
          m = (0, D.useRouter)(),
          f = (0, j.useRef)(null),
          h = (0, j.useState)(!1),
          g = h[0],
          p = h[1],
          v = (0, j.useState)(!1),
          b = v[0],
          y = v[1],
          w = (0, j.useState)(!1),
          Z = w[0],
          N = w[1],
          _ = (0, j.useMemo)(
            function () {
              return m.query.chatId
                ? (0, x.jsx)(
                    an(),
                    {
                      href: aY,
                      children: (0, x.jsxs)(aW, {
                        className: 'mb-1 flex-shrink-0 border border-white/20',
                        children: [
                          (0, x.jsx)(E.ZP, { icon: eg.OvN }),
                          'New chat',
                        ],
                      }),
                    },
                    'Page-reset',
                  )
                : (0, x.jsxs)(aW, {
                    onClick: s,
                    className: 'mb-1 flex-shrink-0 border border-white/20',
                    children: [(0, x.jsx)(E.ZP, { icon: eg.OvN }), 'New chat'],
                  });
            },
            [s, m.query.chatId],
          ),
          S = (0, j.useCallback)(
            function () {
              u(C.s6.clickFaqLink);
            },
            [u],
          );
        (0, j.useEffect)(
          function () {
            if (f.current) {
              var e;
              p(
                (e = f.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth,
              );
            }
          },
          [c],
        );
        var I =
            (0, ew.g)(function (e) {
              return e.flags.highlightPlusUpgrade;
            }) && !d.has('disable_upgrade_ui'),
          T = (0, j.useCallback)(
            function () {
              y(!1), i();
            },
            [i],
          ),
          M = (0, j.useCallback)(function () {
            N(!0);
          }, []),
          R = (0, j.useCallback)(function () {
            N(!1);
          }, []);
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)('div', {
              className:
                'scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20',
              children: (0, x.jsxs)('nav', {
                className: 'flex h-full flex-1 flex-col space-y-1 p-2',
                children: [
                  _,
                  (0, x.jsx)(aG, { ref: f, $offsetScrollbar: g, children: c }),
                  o &&
                    (0, x.jsxs)(aW, {
                      onClick: function () {
                        return b ? T() : y(!0);
                      },
                      children: [
                        (0, x.jsx)(E.ZP, { icon: b ? eg.UgA : eg.Ybf }),
                        b
                          ? 'Confirm clear conversations'
                          : 'Clear conversations',
                      ],
                    }),
                  d.has('debug') &&
                    (0, x.jsxs)(aW, {
                      onClick: l,
                      children: [(0, x.jsx)(E.ZP, { icon: eg.cDN }), 'Debug'],
                    }),
                  t &&
                    n &&
                    (0, x.jsx)(aW, {
                      onClick: n,
                      children: (0, x.jsxs)('span', {
                        className: 'flex w-full flex-row justify-between',
                        children: [
                          (0, x.jsxs)('span', {
                            className:
                              'gold-new-button flex items-center gap-3',
                            children: [
                              (0, x.jsx)(E.ZP, { icon: eg.fzv }),
                              'Upgrade to Plus',
                            ],
                          }),
                          I &&
                            (0, x.jsx)('span', {
                              className:
                                'rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800',
                              children: 'NEW',
                            }),
                        ],
                      }),
                    }),
                  a &&
                    r &&
                    (0, x.jsxs)(aW, {
                      onClick: r,
                      children: [(0, x.jsx)(E.ZP, { icon: eg.fzv }), 'My plan'],
                    }),
                  (0, x.jsxs)(aW, {
                    onClick: M,
                    children: [(0, x.jsx)(E.ZP, { icon: eg.nbt }), 'Settings'],
                  }),
                  (0, x.jsxs)(aW, {
                    href: 'https://help.openai.com/en/collections/3742473-chatgpt',
                    target: '_blank',
                    onClick: S,
                    children: [(0, x.jsx)(E.ZP, { icon: eg.AlO }), 'Get help'],
                  }),
                  (0, x.jsxs)(aW, {
                    onClick: function () {
                      u(C.s6.clickLogOut, { eventSource: 'mouse' }),
                        (0, ex.w7)();
                    },
                    children: [(0, x.jsx)(E.ZP, { icon: eg.xqh }), 'Log out'],
                  }),
                ],
              }),
            }),
            Z && (0, x.jsx)(aB, { onClose: R }),
          ],
        });
      }
      var aQ = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            o = e.showDeleteHistory,
            s = e.onNewThread,
            l = e.toggleDebugSidebar,
            c = e.children;
          return (0, x.jsx)('div', {
            className:
              'dark hidden bg-gray-900 md:flex md:w-[260px] md:flex-col',
            children: (0, x.jsx)('div', {
              className: 'flex h-full min-h-0 flex-col ',
              children: (0, x.jsx)(aJ, {
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: t,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: i,
                showDeleteHistory: o,
                onNewThread: s,
                toggleDebugSidebar: l,
                children: c,
              }),
            }),
          });
        },
        aX = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            i = e.onDeleteHistory,
            o = e.onClose,
            s = e.sidebarOpen,
            l = e.showDeleteHistory,
            c = e.onNewThread,
            u = e.toggleDebugSidebar,
            d = e.children;
          return (0, x.jsx)(r7.u.Root, {
            show: s,
            as: j.Fragment,
            children: (0, x.jsxs)(r9.V, {
              as: 'div',
              className: 'relative z-40',
              onClose: o,
              children: [
                (0, x.jsx)(r7.u.Child, {
                  as: j.Fragment,
                  enter: 'transition-opacity ease-linear duration-300',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'transition-opacity ease-linear duration-300',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, x.jsx)('div', {
                    className: 'fixed inset-0 bg-gray-600 bg-opacity-75',
                  }),
                }),
                (0, x.jsxs)('div', {
                  className: 'fixed inset-0 z-40 flex',
                  children: [
                    (0, x.jsx)(r7.u.Child, {
                      as: j.Fragment,
                      enter: 'transition ease-in-out duration-300 transform',
                      enterFrom: '-translate-x-full',
                      enterTo: 'translate-x-0',
                      leave: 'transition ease-in-out duration-300 transform',
                      leaveFrom: 'translate-x-0',
                      leaveTo: '-translate-x-full',
                      children: (0, x.jsxs)(r9.V.Panel, {
                        className:
                          'relative flex w-full max-w-xs flex-1 flex-col bg-gray-900',
                        children: [
                          (0, x.jsx)(r7.u.Child, {
                            as: j.Fragment,
                            enter: 'ease-in-out duration-300',
                            enterFrom: 'opacity-0',
                            enterTo: 'opacity-100',
                            leave: 'ease-in-out duration-300',
                            leaveFrom: 'opacity-100',
                            leaveTo: 'opacity-0',
                            children: (0, x.jsx)('div', {
                              className: 'absolute top-0 right-0 -mr-12 pt-2',
                              children: (0, x.jsxs)('button', {
                                type: 'button',
                                className:
                                  'ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
                                onClick: o,
                                children: [
                                  (0, x.jsx)('span', {
                                    className: 'sr-only',
                                    children: 'Close sidebar',
                                  }),
                                  (0, x.jsx)(E.ZP, {
                                    icon: eg.q5L,
                                    size: 'medium',
                                    className: 'text-white',
                                    'aria-hidden': 'true',
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, x.jsx)(aJ, {
                            onClickAccountPayment: n,
                            showAccountPaymentMenuItem: t,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: i,
                            showDeleteHistory: l,
                            onNewThread: c,
                            toggleDebugSidebar: u,
                            children: d,
                          }),
                        ],
                      }),
                    }),
                    (0, x.jsx)('div', { className: 'w-14 flex-shrink-0' }),
                  ],
                }),
              ],
            }),
          });
        },
        aK = function (e) {
          var n = e.onClickOpenSidebar,
            t = e.onNewThread,
            r = e.title,
            a = e.newChatName,
            i = (0, j.useState)(),
            o = i[0],
            s = i[1],
            l = (0, D.useRouter)(),
            c = (0, j.useMemo)(
              function () {
                return l.query.chatId
                  ? (0, x.jsx)(
                      an(),
                      {
                        href: aY,
                        children: (0, x.jsx)('button', {
                          type: 'button',
                          className: 'px-3',
                          children: (0, x.jsx)(E.ZP, {
                            icon: eg.OvN,
                            size: 'medium',
                          }),
                        }),
                      },
                      'Page-reset',
                    )
                  : (0, x.jsx)('button', {
                      type: 'button',
                      className: 'px-3',
                      onClick: t,
                      children: (0, x.jsx)(E.ZP, {
                        icon: eg.OvN,
                        size: 'medium',
                      }),
                    });
              },
              [t, l.query.chatId],
            );
          return (
            (0, j.useEffect)(
              function () {
                a !== o && s(a);
              },
              [a, o],
            ),
            (0, x.jsxs)('div', {
              className:
                'sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden',
              children: [
                (0, x.jsxs)('button', {
                  type: 'button',
                  className:
                    '-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white',
                  onClick: n,
                  children: [
                    (0, x.jsx)('span', {
                      className: 'sr-only',
                      children: 'Open sidebar',
                    }),
                    (0, x.jsx)(E.ZP, {
                      icon: eg.cur,
                      'aria-hidden': 'true',
                      size: 'medium',
                    }),
                  ],
                }),
                (0, x.jsx)('h1', {
                  className: 'flex-1 text-center text-base font-normal',
                  children:
                    o && a ? (0, x.jsx)(rA, { text: a }) : r || 'New chat',
                }),
                c,
              ],
            })
          );
        },
        a0 = t(97374),
        a1 = t.n(a0);
      function a2() {
        var e = (0, eo.Z)(['flex flex-row gap-2 mb-4']);
        return (
          (a2 = function () {
            return e;
          }),
          e
        );
      }
      function a3() {
        var e = (0, eo.Z)([
          'bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1',
        ]);
        return (
          (a3 = function () {
            return e;
          }),
          e
        );
      }
      function a4() {
        var e = (0, eo.Z)(['flex items-center gap-1']);
        return (
          (a4 = function () {
            return e;
          }),
          e
        );
      }
      function a5() {
        var e = (0, eo.Z)(['']);
        return (
          (a5 = function () {
            return e;
          }),
          e
        );
      }
      var a6 = function (e) {
          var n = e.urls,
            t = e.onRemoveUrl,
            r = e.clickable,
            a = e.className;
          return 0 === n.size
            ? null
            : (0, x.jsx)(a8, {
                className: a,
                children: Array.from(n).map(function (e) {
                  return (0, x.jsxs)(
                    a7,
                    {
                      children: [
                        (0, x.jsx)(eg.XKb, {}),
                        (0, x.jsxs)(
                          a9,
                          (0, L.Z)(
                            (0, A.Z)(
                              {},
                              r
                                ? { href: e, target: '_blank', disabled: !1 }
                                : { disabled: !0 },
                            ),
                            {
                              children: [
                                new URL(e).hostname,
                                r && (0, x.jsx)(eg.AlO, {}),
                              ],
                            },
                          ),
                        ),
                        t &&
                          (0, x.jsx)(ie, {
                            onClick: function () {
                              return t(e);
                            },
                            children: (0, x.jsx)(eg.q5L, {}),
                          }),
                      ],
                    },
                    e,
                  );
                }),
              });
        },
        a8 = ep.Z.div(a2()),
        a7 = ep.Z.div(a3()),
        a9 = ep.Z.a(a4()),
        ie = ep.Z.button(a5()),
        it = j.memo(a6);
      function ir() {
        var e = (0, eo.Z)([
          '\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n',
          '\n',
        ]);
        return (
          (ir = function () {
            return e;
          }),
          e
        );
      }
      function ia() {
        var e = (0, eo.Z)([
          '\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n',
          ' ',
          '',
        ]);
        return (
          (ia = function () {
            return e;
          }),
          e
        );
      }
      function ii() {
        var e = (0, eo.Z)([
          'flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center',
        ]);
        return (
          (ii = function () {
            return e;
          }),
          e
        );
      }
      var io = a1()(Promise.resolve().then(t.bind(t, 93949)), {
        loadableGenerated: {
          webpack: function () {
            return [93949];
          },
        },
        ssr: !1,
      });
      function is(e) {
        var n,
          t = e.onAbortCompletion,
          r = e.onCreateNewCompletion,
          a = e.onUpdateArtifactStatus,
          i = e.onRequestMoreCompletions,
          o = e.onContinueGenerating,
          s = e.onFileUpload,
          l = e.canUpload,
          c = e.artifact,
          u = e.currentLeafId,
          d = e.currentRequestId,
          m = e.modelBackend,
          f = e.threadId,
          h = e.isCompletionInProgress,
          g = e.className,
          p = e.placeholder,
          v = e.currentPrompt,
          b = e.onChangeCurrentPrompt,
          y = e.treeRef,
          w = e.clearOnSubmit,
          Z = void 0 === w || w,
          N = e.disabled,
          P = void 0 !== N && N,
          _ = e.shouldRetry,
          S = e.canPause,
          I = void 0 !== S && S,
          T = e.canContinue,
          M = void 0 !== T && T,
          R = 'root' === u,
          F = (0, eN.lj)(),
          D = (0, k.WS)(),
          q = (0, j.useContext)(tF.g).serviceStatus,
          B = (0, j.useMemo)(function () {
            return new Set([]);
          }, []),
          O = (0, j.useRef)(null),
          U = (0, j.useState)(''),
          z = U[0],
          V = U[1],
          H = (0, j.useCallback)(
            function (e) {
              a({ state: 'pasted', url: e, id: e, contents: '' }), V('');
            },
            [a],
          ),
          $ = (0, j.useCallback)(
            function (e) {
              b(e.currentTarget.value);
            },
            [b],
          ),
          W = (0, j.useCallback)(
            function (e) {
              if ((null == e || e.preventDefault(), !P)) {
                var n,
                  t,
                  i =
                    null === (n = O.current) || void 0 === n ? void 0 : n.value,
                  o = ''.concat(
                    null === (t = O.current) || void 0 === t
                      ? void 0
                      : t.dataset.id,
                    '-nextPrompt',
                  );
                if (i || (null == c ? void 0 : c.url)) {
                  var s = (null == c ? void 0 : c.url) || '';
                  (null == c ? void 0 : c.state) === 'pasted' &&
                    a(function (e) {
                      return (0, L.Z)((0, A.Z)({}, e), { state: 'static' });
                    });
                  var l =
                    (null == c ? void 0 : c.state) === 'pasted'
                      ? { artifacts: [null == c ? void 0 : c.url] }
                      : {};
                  r(
                    o,
                    (0, A.Z)({ value: i || '' }, l),
                    { eventSource: e ? 'mouse' : 'keyboard' },
                    s,
                  ),
                    Z && b(''),
                    V(''),
                    (0, eL.SI)(1, O.current);
                }
              }
            },
            [
              null == c ? void 0 : c.state,
              null == c ? void 0 : c.url,
              Z,
              P,
              r,
              a,
              b,
            ],
          ),
          G = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e, n, t, r;
              return (0, el.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (!B.has('link') || 'root' !== u) return [2];
                    return [4, navigator.clipboard.readText()];
                  case 1:
                    return (
                      (n = a.sent()),
                      (t = /^https?:\/\/[^\s]+/g),
                      (r =
                        null === (e = n.match(t)) || void 0 === e
                          ? void 0
                          : e[0]) && V(r),
                      [2]
                    );
                }
              });
            }),
            [B, u],
          ),
          Y = (0, j.useCallback)(
            function () {
              a(null);
            },
            [a],
          ),
          J = (0, j.useCallback)(
            function () {
              t('', d), i(u, { eventSource: 'mouse' });
            },
            [u, d, t, i],
          ),
          Q = (0, j.useCallback)(
            function () {
              t('', d),
                D(C.s6.pauseCompletion, { threadId: f, eventSource: 'mouse' });
            },
            [d, f, D, t],
          ),
          X = (0, j.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return !P;
                  },
                  handler: function (e) {
                    (!e.metaKey &&
                      (F || e.shiftKey || e.nativeEvent.isComposing)) ||
                      (e.preventDefault(), h || W());
                  },
                },
                Escape: {
                  validator: function () {
                    return I && h;
                  },
                  handler: function () {
                    t('', d),
                      D(C.s6.pauseCompletion, {
                        threadId: f,
                        eventSource: 'keyboard',
                      });
                  },
                },
              };
            },
            [P, F, h, W, I, t, d, D, f],
          ),
          K = (0, j.useCallback)(
            function (e) {
              var n;
              (null === (n = X[e.key]) || void 0 === n
                ? void 0
                : n.validator(e)) && X[e.key].handler(e);
            },
            [X],
          );
        (0, j.useEffect)(
          function () {
            var e = O.current,
              n = function (n) {
                !(null == e ? void 0 : e.value) &&
                  z &&
                  R &&
                  (n.preventDefault(), H(z));
              };
            return (
              B.has('link') && e && R && e.addEventListener('paste', n),
              function () {
                e && e.removeEventListener('paste', n);
              }
            );
          },
          [H, u, R, a, z, B],
        ),
          (0, j.useEffect)(
            function () {
              return (
                window.addEventListener('focus', G),
                function () {
                  window.removeEventListener('focus', G);
                }
              );
            },
            [G],
          ),
          (0, j.useEffect)(function () {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
          }, []);
        var ee = !R && !h && !(null == q ? void 0 : q.oof),
          en = null === (n = O.current) || void 0 === n ? void 0 : n.value,
          et = (0, j.useCallback)(
            function () {
              o(u);
            },
            [u, o],
          ),
          er = (0, j.useMemo)(
            function () {
              return (0, x.jsxs)(id, {
                className: (0, eu.Z)(_ && 'm-auto flex-col items-center'),
                children: [
                  _ &&
                    (0, x.jsx)('span', {
                      className: 'mb-3 block text-xs md:mb-auto',
                      children: 'There was an error generating a response',
                    }),
                  ee &&
                    (0, x.jsxs)(th.z, {
                      as: 'button',
                      color: _ ? 'primary' : 'neutral',
                      onClick: J,
                      className: (0, eu.Z)(_ ? 'm-auto' : 'border-0 md:border'),
                      children: [
                        (0, x.jsx)(E.ZP, {
                          icon: eg.Qxo,
                          size: F ? 'small' : 'xsmall',
                        }),
                        (!F || _) && 'Regenerate response',
                      ],
                    }),
                  M &&
                    (0, x.jsxs)(th.z, {
                      as: 'button',
                      color: 'neutral',
                      onClick: et,
                      className: 'border-0 md:border',
                      children: [
                        (0, x.jsx)(E.ZP, {
                          icon: eg.lV_,
                          className: '-rotate-180',
                          size: F ? 'small' : 'xsmall',
                        }),
                        !F && 'Continue generating',
                      ],
                    }),
                  I &&
                    h &&
                    (0, x.jsxs)(th.z, {
                      as: 'button',
                      color: 'neutral',
                      onClick: Q,
                      className: 'border-0 md:border',
                      children: [
                        (0, x.jsx)(E.ZP, {
                          icon: eg.jxP,
                          size: F ? 'small' : 'xsmall',
                        }),
                        !F && 'Stop generating',
                      ],
                    }),
                ],
              });
            },
            [M, I, ee, Q, J, et, h, F, _],
          );
        return (0, x.jsx)('form', {
          className: g,
          onSubmit: W,
          children: (0, x.jsxs)('div', {
            className: 'relative flex h-full flex-1 md:flex-col',
            children: [
              !F && er,
              !_ &&
                (0, x.jsxs)(ic, {
                  $disabled: _,
                  children: [
                    (null == c ? void 0 : c.state) === 'pasted' &&
                      (0, x.jsx)(it, {
                        urls: new Set([c.url]),
                        onRemoveUrl: Y,
                        className: 'ml-2',
                      }),
                    (0, x.jsx)(eL.ZP, {
                      tabIndex: 0,
                      onFocus: G,
                      value: v,
                      'data-id': u,
                      ref: O,
                      style: { maxHeight: '200px' },
                      rows: 1,
                      onKeyDown: K,
                      onChange: $,
                      placeholder: p || 'Send a message...',
                      className: (0, eu.Z)(
                        'm-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent',
                        l ? 'pl-7 md:pl-4' : 'pl-2 md:pl-0',
                      ),
                      disabled: _,
                    }),
                    l &&
                      (0, x.jsx)(io, {
                        threadId: f,
                        onFileUpload: s,
                        currentLeafId: u,
                        modelBackend: m,
                        disabled: h,
                        treeRef: y,
                        children: function (e) {
                          return (0, x.jsx)(iu, {
                            disabled: h || e,
                            $onRightSide: !1,
                            children: e
                              ? (0, x.jsx)(nd.Z, {})
                              : (0, x.jsx)(E.ZP, {
                                  icon: eg.Cje,
                                  size: 'small',
                                }),
                          });
                        },
                      }),
                    (0, x.jsx)(iu, {
                      disabled: h || _ || !en || P,
                      $onRightSide: !0,
                      $nudgeBottom: h,
                      className: h ? '' : 'disabled:opacity-40',
                      children: h
                        ? (0, x.jsx)('div', {
                            className: 'text-2xl',
                            children: (0, x.jsx)(il, {}),
                          })
                        : (0, x.jsx)(E.ZP, {
                            icon: eg.LbG,
                            size: 'small',
                            className: 'mr-1',
                          }),
                    }),
                  ],
                }),
              F && er,
            ],
          }),
        });
      }
      function il() {
        var e = (0, j.useState)(0),
          n = e[0],
          t = e[1];
        (0, j.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, x.jsx)(
              'span',
              { className: a <= n ? '' : 'invisible', children: '\xb7' },
              a,
            ),
          );
        return (0, x.jsx)(x.Fragment, { children: r });
      }
      var ic = ep.Z.div(ir(), function (e) {
          return e.$disabled && 'bg-gray-100';
        }),
        iu = ep.Z.button(
          ia(),
          function (e) {
            return e.$nudgeBottom && 'disabled:bottom-0.5 md:disabled:bottom-1';
          },
          function (e) {
            return e.$onRightSide ? 'right-1 md:right-2' : 'left-1 md:left-2';
          },
        ),
        id = ep.Z.div(ii()),
        im = t(1215);
      function ih() {
        var e = (0, eo.Z)([
          'bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase',
        ]);
        return (
          (ih = function () {
            return e;
          }),
          e
        );
      }
      var ig = ep.Z.span(ih()),
        ip = t(35888),
        ix = t(57526),
        iv = t(99581),
        ib = t(30892),
        ij = t.n(ib),
        iy = t(7361),
        ik = t.n(iy);
      function iC(e) {
        var n = e.values,
          t = e.className,
          r = Object.keys(n),
          a = Object.values(n);
        return (0, x.jsxs)('div', {
          className: (0, eu.Z)('flex w-full items-stretch gap-2', t),
          children: [
            (0, x.jsx)('div', {
              className:
                'flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300',
              children: r.map(function (e, n) {
                return (0, x.jsx)('span', { children: ij()(e) }, n);
              }),
            }),
            (0, x.jsx)('div', {
              className: 'my-1.5 flex flex-1 flex-col justify-between gap-2',
              children: a.map(function (e, n) {
                var t = (0, tJ.Z)(e, 2),
                  r = t[0],
                  a = t[1];
                return (0, x.jsx)(iw, { num: r, max: a }, n);
              }),
            }),
          ],
        });
      }
      function iw(e) {
        var n = e.num,
          t = e.max,
          r = (0, j.useMemo)(
            function () {
              var e = ik()(Array(t), !1);
              return ik()(e, !0, 0, n);
            },
            [t, n],
          );
        return (0, x.jsx)('div', {
          className: 'flex w-full gap-1',
          children: r.map(function (e, n) {
            return (0,
            x.jsx)('div', { className: (0, eu.Z)('h-2 w-full rounded-lg', e ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-600'), children: e }, n);
          }),
        });
      }
      function iZ() {
        var e = (0, eo.Z)([
          'rounded bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20',
        ]);
        return (
          (iZ = function () {
            return e;
          }),
          e
        );
      }
      function iN() {
        var e = (0, eo.Z)([
          'absolute z-[17] mt-2 flex max-h-60 w-full flex-col overflow-hidden text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]',
        ]);
        return (
          (iN = function () {
            return e;
          }),
          e
        );
      }
      function iP() {
        var e = (0, eo.Z)([
          'absolute z-[17] -ml-[1px] flex flex-col gap-2 p-3 sm:p-4',
        ]);
        return (
          (iP = function () {
            return e;
          }),
          e
        );
      }
      function i_() {
        var e = (0, eo.Z)(['flex items-center gap-1.5 truncate']);
        return (
          (i_ = function () {
            return e;
          }),
          e
        );
      }
      function iS() {
        var e = (0, eo.Z)(['h-6 w-6 shrink-0']);
        return (
          (iS = function () {
            return e;
          }),
          e
        );
      }
      function iI() {
        var e = (0, eo.Z)([
          'absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100',
        ]);
        return (
          (iI = function () {
            return e;
          }),
          e
        );
      }
      var iT = ['confidential', 'alpha', 'plus'];
      function iM(e) {
        var n = e.selectedOption,
          t = e.onChange,
          r = e.onAction,
          a = e.dropdownRef,
          i = (0, ei.Z)(e, [
            'selectedOption',
            'onChange',
            'onAction',
            'dropdownRef',
          ]),
          o = (0, j.useCallback)(
            function (e) {
              'string' == typeof e ? null == r || r(e) : t(e);
            },
            [t, r],
          );
        return (0, x.jsx)(ip.R, {
          value: n.value,
          onChange: o,
          children: function (e) {
            var t = e.open;
            return (0, x.jsx)(
              iF,
              (0, A.Z)(
                {
                  ref: a,
                  selectedLabel: (0, x.jsxs)(x.Fragment, {
                    children: [
                      n.title,
                      n.tags.map(function (e) {
                        return iB(e);
                      }),
                      n.customTags,
                    ],
                  }),
                  open: t,
                },
                i,
              ),
            );
          },
        });
      }
      function iR(e) {
        var n = e.selectedOptions,
          t = e.selectedLabel,
          r = e.onChange,
          a = e.onAction,
          i = e.dropdownRef,
          o = (0, ei.Z)(e, [
            'selectedOptions',
            'selectedLabel',
            'onChange',
            'onAction',
            'dropdownRef',
          ]),
          s = (0, j.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return 'string' == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return 'string' == typeof e;
                });
                null == a || a(n);
              } else r(e);
            },
            [r, a],
          );
        return (0, x.jsx)(ip.R, {
          value: n.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: s,
          children: function (e) {
            var r = e.open;
            return (0, x.jsx)(
              iF,
              (0, A.Z)(
                {
                  ref: i,
                  selectedLabel: t || ''.concat(n.length, ' selected'),
                  open: r,
                  multiple: !0,
                },
                o,
              ),
            );
          },
        });
      }
      var iF = (0, j.forwardRef)(function (e, n) {
        var t = e.name,
          r = e.selectedLabel,
          a = e.open,
          i = e.options,
          o = e.actions,
          s = e.multiple,
          l = e.isLoading,
          c = e.loadingState,
          u = e.header,
          d = (0, j.useRef)(null),
          m = (0, j.useRef)(null),
          f = (0, eN.dD)();
        (0, j.useImperativeHandle)(
          n,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = d.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = d.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a],
        );
        var h = l
          ? c ||
            (0, x.jsx)('div', {
              className: 'flex h-[42px] items-center justify-center',
              children: (0, x.jsx)(nd.Z, {}),
            })
          : (0, x.jsxs)(x.Fragment, {
              children: [
                u,
                (0, x.jsxs)(ip.R.Options, {
                  className: 'overflow-auto',
                  children: [
                    i.map(function (e, n) {
                      return (0, x.jsx)(
                        iD,
                        {
                          value: e.value,
                          disabled: e.disabled,
                          children: function (n) {
                            var t = n.selected,
                              r = n.active;
                            return (0, x.jsxs)(x.Fragment, {
                              children: [
                                (0, x.jsxs)(iH, {
                                  children: [
                                    e.imageUrl &&
                                      (0, x.jsx)(i$, {
                                        children: (0, x.jsx)(e$, {
                                          url: e.imageUrl,
                                          name: e.title,
                                          size: '100%',
                                        }),
                                      }),
                                    (0, x.jsxs)('span', {
                                      className: (0, eu.Z)(
                                        t && !s && 'font-semibold',
                                        'flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100',
                                      ),
                                      children: [
                                        e.title,
                                        e.tags.map(function (e) {
                                          return iB(e);
                                        }),
                                        e.customTags,
                                      ],
                                    }),
                                  ],
                                }),
                                s && !e.disabled
                                  ? (0, x.jsx)(iq, { selected: t })
                                  : t && (0, x.jsx)(iE, { icon: eg.UgA }),
                                e.disabled &&
                                  (0, x.jsx)(iE, {
                                    icon: ix.Z,
                                    className: 'text-red-700 dark:text-red-500',
                                  }),
                                r &&
                                  !f &&
                                  (0, iv.createPortal)(
                                    (0, x.jsx)(iL, {
                                      option: e,
                                      dropdownRef: m,
                                    }),
                                    document.body,
                                  ),
                              ],
                            });
                          },
                        },
                        n,
                      );
                    }),
                    null == o
                      ? void 0
                      : o.map(function (e, n) {
                          return (0, x.jsx)(
                            iD,
                            {
                              value: e.id,
                              children: function () {
                                return (0, x.jsxs)(x.Fragment, {
                                  children: [
                                    (0, x.jsx)('div', {
                                      className:
                                        'text-gray-800 dark:text-gray-100',
                                      children: e.label,
                                    }),
                                    (0, x.jsx)(iE, { icon: e.icon }),
                                  ],
                                });
                              },
                            },
                            n,
                          );
                        }),
                  ],
                }),
              ],
            });
        return (0,
        x.jsxs)('div', { className: 'relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4', children: [(0, x.jsxs)(ip.R.Button, { ref: d, className: 'relative flex w-full cursor-default flex-col rounded-md border border-black/10 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm', children: [(0, x.jsx)(ip.R.Label, { className: 'block text-xs text-gray-700 dark:text-gray-500', children: t }), (0, x.jsx)('span', { className: 'inline-flex w-full truncate', children: (0, x.jsx)('span', { className: 'flex h-6 items-center gap-1 truncate', children: r }) }), (0, x.jsx)('span', { className: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2', children: (0, x.jsx)(E.ZP, { icon: eg.bTu, className: ' text-gray-400', 'aria-hidden': 'true' }) })] }), (0, x.jsx)(r7.u, { show: a, as: j.Fragment, leave: 'transition ease-in duration-100', leaveFrom: 'opacity-100', leaveTo: 'opacity-0', children: (0, x.jsx)(iU, { ref: m, children: h }) })] });
      });
      function iD(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children;
        return (0, x.jsx)(ip.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, eu.Z)(
              iV,
              n && !t ? 'bg-gray-100 dark:bg-gray-700' : 'text-gray-900',
              t &&
                'cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100',
            );
          },
          value: n,
          children: r,
        });
      }
      function iE(e) {
        var n = e.icon,
          t = e.className;
        return (0, x.jsx)(iW, {
          children: (0, x.jsx)(E.ZP, {
            icon: n,
            className: (0, eu.Z)('h-5 w-5', t),
            'aria-hidden': 'true',
          }),
        });
      }
      function iq(e) {
        var n = e.selected,
          t = e.disabled;
        return (0, x.jsx)(iW, {
          children: (0, x.jsx)('div', {
            className: (0, eu.Z)(
              'flex h-6 w-6 items-center justify-center rounded-full border transition-colors',
              n
                ? 'border-transparent bg-green-600 text-white'
                : 'border-black/5 dark:border-white/20',
            ),
            'aria-hidden': 'true',
            children: (0, x.jsx)(E.ZP, {
              icon: eg.UgA,
              className: (0, eu.Z)(
                'h-3 w-3 transition-opacity',
                n && 'opacity-100',
                !n && 'opacity-0',
                !n && !t && 'group-hover:opacity-50',
              ),
              strokeWidth: n ? 2.5 : 2,
            }),
          }),
        });
      }
      function iA(e) {
        var n = e.showCheckbox;
        return (0, x.jsxs)('div', {
          className: (0, eu.Z)(iV, 'cursor-auto'),
          children: [
            (0, x.jsxs)(iH, {
              children: [
                (0, x.jsx)(i$, {
                  children: (0, x.jsx)('div', {
                    className: 'h-full w-full rounded-sm bg-gray-200',
                  }),
                }),
                (0, x.jsx)('div', {
                  className: 'h-[12px] w-[88px] rounded-sm bg-gray-100',
                }),
              ],
            }),
            n && (0, x.jsx)(iq, { selected: !1, disabled: !0 }),
          ],
        });
      }
      function iL(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, j.useState)(),
          a = r[0],
          i = r[1];
        (0, j.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e,
                  n = t.current.getBoundingClientRect(),
                  r = n.top;
                i({ top: r, left: n.left - 260, minHeight: n.height });
              }
            };
            return (
              e(),
              window.addEventListener('resize', e),
              function () {
                return window.removeEventListener('resize', e);
              }
            );
          },
          [t],
        );
        var o = n.value.properties,
          s = (0, j.useMemo)(
            function () {
              return o
                ? (0, x.jsx)(iC, { values: o, className: 'mt-auto' })
                : null;
            },
            [o],
          );
        return a
          ? (0, x.jsxs)(iz, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                n.disabled &&
                  (0, x.jsx)(E.ZP, {
                    icon: ix.Z,
                    size: 'medium',
                    className: 'text-red-700 dark:text-red-500',
                  }),
                n.imageUrl &&
                  (0, x.jsx)(e$, { url: n.imageUrl, name: n.title, size: 70 }),
                (0, x.jsxs)('div', {
                  className: 'flex items-center gap-1',
                  children: [
                    n.title,
                    ' ',
                    n.tags.map(function (e) {
                      return iB(e);
                    }),
                    ' ',
                    n.customTags,
                  ],
                }),
                (0, x.jsx)('div', {
                  className: 'whitespace-pre-line text-xs',
                  children: n.description,
                }),
                !n.disabled && s,
              ],
            })
          : null;
      }
      var iB = function (e) {
          return (
            iT.includes(e) &&
            (0, x.jsx)(
              'span',
              {
                className: (0, eu.Z)(
                  'py-0.25 rounded px-1 text-[10px] font-semibold uppercase',
                  'confidential' === e && 'bg-red-200 text-red-800',
                  'alpha' === e && 'bg-blue-200 text-[#4559A4]',
                  'plus' === e && 'bg-yellow-200 text-yellow-900',
                ),
                children: e,
              },
              e,
            )
          );
        },
        iO = ep.Z.div(iZ()),
        iU = (0, ep.Z)(iO)(iN()),
        iz = (0, ep.Z)(iO)(iP()),
        iV =
          'group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20',
        iH = ep.Z.span(i_()),
        i$ = ep.Z.span(iS()),
        iW = ep.Z.span(iI()),
        iG = t(99502);
      function iY() {
        var e = (0, eo.Z)(['mt-4 flex flex-col gap-4']);
        return (
          (iY = function () {
            return e;
          }),
          e
        );
      }
      function iJ() {
        var e = (0, eo.Z)(['text-sm text-red-500']);
        return (
          (iJ = function () {
            return e;
          }),
          e
        );
      }
      var iQ = ep.Z.div(iY()),
        iX = ep.Z.div(iJ());
      function iK(e) {
        var n = e.onClickInstall,
          t = e.onInstallLocalhost,
          r = e.onClose,
          a = (0, j.useState)(),
          i = a[0],
          o = a[1],
          s = (0, j.useState)(),
          l = s[0],
          c = s[1],
          u = (0, j.useState)(!1),
          d = u[0],
          m = u[1],
          f = (0, j.useCallback)(function (e) {
            o(e);
          }, []),
          h = (0, j.useCallback)(function () {
            m(!0);
          }, []);
        return d && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, x.jsx)(i4, {
              plugin: null == i ? void 0 : i.scrapeManifestResponse.plugin,
              onClickInstall: n,
              onClose: r,
            })
          : l && (null == i ? void 0 : i.scrapeManifestResponse.plugin)
          ? (0, x.jsx)(i3, {
              plugin: i.scrapeManifestResponse.plugin,
              manifestAccessToken: i.manifestAccessToken,
              verificationTokens: l,
              onReadyToInstall: h,
              onClose: r,
            })
          : i
          ? (0, x.jsx)(i2, {
              loadManifestResult: i,
              onRefetch: f,
              onSubmitAuthInfo: c,
              onReadyToInstall: h,
              onInstallLocalhost: t,
              onClose: r,
            })
          : (0, x.jsx)(i0, { onFetch: f, onClose: r });
      }
      function i0(e) {
        var n = e.onFetch,
          t = e.onClose,
          r = (0, j.useState)(!1),
          a = r[0],
          i = r[1],
          o = (0, j.useState)('bearer'),
          s = o[0],
          l = o[1],
          c = (0, j.useState)(),
          u = c[0],
          d = c[1],
          m = (0, j.useRef)(null),
          f = (0, j.useRef)(null),
          h = i5(),
          g = h.fetchManifestAndSpec,
          p = h.isLoading,
          v = (0, P.hz)();
        (0, j.useEffect)(function () {
          var e;
          null === (e = m.current) || void 0 === e || e.focus();
        }, []);
        var b = (0, j.useCallback)(function () {
            i(function (e) {
              return !e;
            });
          }, []),
          k = (0, j.useCallback)(function (e) {
            l(e.target.value);
          }, []),
          C = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e, t, r, i;
              return (0, el.__generator)(this, function (o) {
                return (r =
                  null === (e = m.current) || void 0 === e ? void 0 : e.value)
                  ? ((i = a
                      ? {
                          authorization_type: s,
                          token:
                            (null === (t = f.current) || void 0 === t
                              ? void 0
                              : t.value) || '',
                        }
                      : void 0),
                    g({
                      domain: r,
                      manifestAccessToken: i,
                      onSuccess: n,
                      onError: function (e) {
                        return d(
                          (null == e ? void 0 : e.message) ||
                            "Couldn't find manifest.",
                        );
                      },
                    }),
                    [2])
                  : (d('Please provide a domain.'), [2]);
              });
            }),
            [g, n, s, a],
          );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: 'success',
          title: 'Enter your website domain',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Find manifest file',
            color: 'primary',
            onClick: C,
            loading: p,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: 'Cancel',
            color: 'neutral',
            onClick: t,
          }),
          children: (0, x.jsxs)(iQ, {
            children: [
              (0, x.jsxs)('div', {
                children: [
                  'To create a plugin, host',
                  ' ',
                  (0, x.jsx)('a', {
                    target: '_blank',
                    rel: 'noreferrer',
                    className: 'text-green-600',
                    href: 'https://platform.openai.com/docs/plugins/getting-started',
                    children: 'a manifest file',
                  }),
                  ' ',
                  'on your website at',
                  ' ',
                  (0, x.jsx)('code', {
                    className: 'text-sm',
                    children: '/.well-known/ai-plugin.json',
                  }),
                  '. Then enter your website domain below.',
                  ' ',
                  (0, x.jsx)('a', {
                    href: 'https://platform.openai.com/docs/plugins/getting-started',
                    target: '_blank',
                    rel: 'noreferrer',
                    className: 'text-green-600',
                    children: 'Visit our documentation to learn more.',
                  }),
                ],
              }),
              (0, x.jsx)(ar, {
                ref: m,
                name: 'url',
                displayName: 'Domain',
                placeholder: 'ex: openai.com or localhost:3000',
                onPressEnter: C,
                autoFocus: !0,
              }),
              v.has('tools3_admin') &&
                (0, x.jsxs)(x.Fragment, {
                  children: [
                    (0, x.jsxs)('div', {
                      role: 'button',
                      className:
                        'flex cursor-pointer items-center gap-1 text-sm text-black/60 hover:text-black/70',
                      onClick: b,
                      children: [
                        (0, x.jsx)('div', {
                          children: 'My file requires authentication',
                        }),
                        (0, x.jsx)(E.ZP, { icon: a ? eg.rH8 : eg.bTu }),
                      ],
                    }),
                    a &&
                      (0, x.jsxs)(x.Fragment, {
                        children: [
                          (0, x.jsxs)('div', {
                            className: 'flex flex-col gap-2 text-sm',
                            children: [
                              (0, x.jsx)('div', {
                                children: 'Authentication type',
                              }),
                              (0, x.jsxs)('div', {
                                className: 'flex gap-6',
                                children: [
                                  (0, x.jsx)(i1, {
                                    label: 'Bearer',
                                    value: 'bearer',
                                    checked: 'bearer' === s,
                                    onChange: k,
                                  }),
                                  (0, x.jsx)(i1, {
                                    label: 'Basic',
                                    value: 'basic',
                                    checked: 'basic' === s,
                                    onChange: k,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, x.jsxs)('div', {
                            className: 'flex flex-col gap-2 text-sm',
                            children: [
                              (0, x.jsx)('div', { children: 'Access token' }),
                              (0, x.jsx)(ar, {
                                ref: f,
                                name: 'manifestToken',
                                onPressEnter: C,
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              u && (0, x.jsx)(iX, { children: u }),
            ],
          }),
        });
      }
      function i1(e) {
        var n = e.label,
          t = e.value,
          r = e.checked,
          a = e.onChange;
        return (0, x.jsxs)('label', {
          className: 'flex items-center gap-2',
          children: [
            (0, x.jsx)('input', {
              name: 'manifestAuthType',
              type: 'radio',
              value: t,
              checked: r,
              onChange: a,
              className: 'text-green-600 focus:ring-green-600',
            }),
            n,
          ],
        });
      }
      function i2(e) {
        var n = e.loadManifestResult,
          t = e.onRefetch,
          r = e.onSubmitAuthInfo,
          a = e.onReadyToInstall,
          i = e.onInstallLocalhost,
          o = e.onClose,
          s = n.domain,
          l = n.manifestAccessToken,
          c = n.scrapeManifestResponse,
          u = n.apiValidationInfo,
          d = c.plugin,
          m = c.manifest_validation_info,
          f = (0, j.useState)(),
          h = f[0],
          g = f[1],
          p = (0, j.useState)(!1),
          v = p[0],
          b = p[1],
          k = (0, j.useRef)(null),
          C = (0, j.useRef)(null),
          w = (0, j.useRef)(null),
          Z = i5(),
          N = Z.fetchManifestAndSpec,
          P = Z.isLoading,
          _ = (0, as.NL)(),
          S = d && t0(d),
          I = (null == d ? void 0 : d.manifest.auth.type) === 'service_http',
          T = (null == d ? void 0 : d.manifest.auth.type) === 'oauth',
          M =
            (m.errors && m.errors.length > 0) ||
            ((null == u ? void 0 : u.errors) &&
              (null == u ? void 0 : u.errors.length) > 0),
          R = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e, n, c, u, m, f, h, p;
              return (0, el.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!M) return [3, 1];
                    return (
                      N({
                        domain: s,
                        manifestAccessToken: l,
                        onSuccess: t,
                        onError: function (e) {
                          return g(
                            (null == e ? void 0 : e.message) ||
                              "Couldn't find manifest.",
                          );
                        },
                      }),
                      [3, 15]
                    );
                  case 1:
                    if (!S) return [3, 2];
                    return a_(d, _, ['installedAip']), i(d), [3, 15];
                  case 2:
                    if (!I) return [3, 8];
                    if (
                      !(null === (e = k.current) || void 0 === e
                        ? void 0
                        : e.value)
                    )
                      return (
                        g('Please provide your service access token.'), [2]
                      );
                    n.label = 3;
                  case 3:
                    return (
                      n.trys.push([3, 5, 6, 7]),
                      b(!0),
                      [
                        4,
                        ej.ZP.setPluginServiceHttpToken({
                          id: d.id,
                          serviceAccessToken: k.current.value,
                        }),
                      ]
                    );
                  case 4:
                    return r(n.sent().verification_tokens), [3, 7];
                  case 5:
                    return n.sent(), g('Error setting access token.'), [3, 7];
                  case 6:
                    return b(!1), [7];
                  case 7:
                    return [3, 15];
                  case 8:
                    if (!T) return [3, 14];
                    if (
                      ((f =
                        null === (u = C.current) || void 0 === u
                          ? void 0
                          : u.value),
                      (h =
                        null === (m = w.current) || void 0 === m
                          ? void 0
                          : m.value),
                      !f || !h)
                    )
                      return g('Please provide your OAuth credentials.'), [2];
                    n.label = 9;
                  case 9:
                    return (
                      n.trys.push([9, 11, 12, 13]),
                      [
                        4,
                        ej.ZP.setPluginOAuthClientCredentials({
                          id: d.id,
                          clientId: C.current.value,
                          clientSecret: w.current.value,
                        }),
                      ]
                    );
                  case 10:
                    return r(n.sent().verification_tokens), [3, 13];
                  case 11:
                    return (
                      n.sent(), g('Error setting OAuth credentials.'), [3, 13]
                    );
                  case 12:
                    return b(!1), [7];
                  case 13:
                    return [3, 15];
                  case 14:
                    d ? a(d) : o(), (n.label = 15);
                  case 15:
                    return [2];
                }
              });
            }),
            [I, T, d, s, l, M, S, _, N, t, r, a, i, o],
          );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: o,
          type: 'success',
          title: 'Found plugin',
          primaryButton: (0, x.jsx)(y.mH, {
            title: M
              ? 'Refetch manifest'
              : S
              ? 'Install localhost plugin'
              : 'Next',
            color: 'primary',
            onClick: R,
            loading: v || P,
          }),
          secondaryButton:
            (M || I || T) &&
            (0, x.jsx)(y.mH, { title: 'Cancel', color: 'neutral', onClick: o }),
          children: (0, x.jsxs)(iQ, {
            children: [
              (0, x.jsx)(ay, { manifestValidationInfo: m }),
              u && (0, x.jsx)(ak, { apiValidationInfo: u }),
              d && (0, x.jsx)(aj, { plugin: d }),
              I &&
                !M &&
                (0, x.jsxs)('div', {
                  children: [
                    (0, x.jsx)('div', {
                      className: 'text-sm',
                      children: 'Enter your service access token:',
                    }),
                    (0, x.jsx)('div', {
                      className: 'mt-2',
                      children: (0, x.jsx)(ar, {
                        ref: k,
                        name: 'serviceToken',
                        placeholder: 'Service access token',
                        autoComplete: 'off',
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                  ],
                }),
              T &&
                !M &&
                (0, x.jsxs)('div', {
                  children: [
                    (0, x.jsx)('div', {
                      className: 'text-sm',
                      children: 'Enter your OAuth credentials:',
                    }),
                    (0, x.jsx)('div', {
                      className: 'mt-2',
                      children: (0, x.jsx)(ar, {
                        ref: C,
                        name: 'clientId',
                        placeholder: 'Client ID',
                        autoComplete: 'off',
                        onPressEnter: R,
                        autoFocus: !0,
                      }),
                    }),
                    (0, x.jsx)('div', {
                      className: 'mt-2',
                      children: (0, x.jsx)(ar, {
                        ref: w,
                        type: 'password',
                        name: 'clientSecret',
                        placeholder: 'Client secret',
                        autoComplete: 'off',
                        onPressEnter: R,
                      }),
                    }),
                  ],
                }),
              h && (0, x.jsx)(iX, { children: h }),
            ],
          }),
        });
      }
      function i3(e) {
        var n = e.plugin,
          t = e.manifestAccessToken,
          r = e.verificationTokens,
          a = e.onReadyToInstall,
          i = e.onClose,
          o = (0, j.useState)(),
          s = o[0],
          l = o[1],
          c = (0, j.useState)(!1),
          u = c[0],
          d = c[1],
          m = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e, i, o;
              return (0, el.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      e.trys.push([0, 2, 3, 4]),
                      d(!0),
                      [
                        4,
                        ej.ZP.scrapePluginManifest({
                          domain: n.domain,
                          manifestAccessToken: t,
                        }),
                      ]
                    );
                  case 1:
                    if ((i = e.sent().plugin)) {
                      for (var s in ((o =
                        'service_http' === i.manifest.auth.type ||
                        'oauth' === i.manifest.auth.type
                          ? i.manifest.auth.verification_tokens
                          : {}),
                      r))
                        if (r[s] !== o[s])
                          return (
                            l(
                              'Please add the "'.concat(
                                s,
                                '" token to your manifest file.',
                              ),
                            ),
                            [2]
                          );
                      a(i);
                    } else l('Error creating plugin.');
                    return [3, 4];
                  case 2:
                    return e.sent(), l('Error creating plugin.'), [3, 4];
                  case 3:
                    return d(!1), [7];
                  case 4:
                    return [2];
                }
              });
            }),
            [n, t, r, a],
          );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: i,
          type: 'success',
          title: 'Add verification token',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Verify tokens',
            color: 'primary',
            onClick: m,
            loading: u,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: "I'll add the tokens later",
            color: 'neutral',
            onClick: i,
          }),
          children: (0, x.jsxs)(iQ, {
            children: [
              (0, x.jsx)(aj, { plugin: n }),
              (0, x.jsx)('div', {
                className: 'text-sm',
                children:
                  'Add the following verification tokens to your manifest file:',
              }),
              (0, x.jsx)('pre', {
                className: 'text-sm',
                children: JSON.stringify(r, null),
              }),
              s && (0, x.jsx)(iX, { children: s }),
            ],
          }),
        });
      }
      function i4(e) {
        var n = e.plugin,
          t = e.onClickInstall,
          r = e.onClose,
          a = (0, j.useCallback)(
            function () {
              t(n);
            },
            [n, t],
          );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: 'success',
          title: 'Ready to install',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Install for me',
            color: 'primary',
            onClick: a,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: 'Install later',
            color: 'neutral',
            onClick: r,
          }),
          children: (0, x.jsx)(iQ, {
            children: (0, x.jsxs)('div', {
              className: 'text-sm',
              children: [
                'Your plugin can now be installed! Up to 15 developers will be able install your plugin until it is verified by OpenAI. To learn more,',
                ' ',
                (0, x.jsx)('a', {
                  href: 'https://platform.openai.com/docs/plugins/production/can-i-invite-people-to-try-my-plugin',
                  target: '_blank',
                  rel: 'noreferrer',
                  className: 'text-green-600',
                  children: 'see our FAQ',
                }),
                '.',
              ],
            }),
          }),
        });
      }
      function i5() {
        var e,
          n = (0, j.useState)(!1),
          t = n[0],
          r = n[1];
        return {
          fetchManifestAndSpec: (0, j.useCallback)(
            ((e = (0, ea.Z)(function (e) {
              var n, t, a, i, o, s, l, c, u, d, m, f, h;
              return (0, el.__generator)(this, function (u) {
                switch (u.label) {
                  case 0:
                    (n = e.domain),
                      (t = e.manifestAccessToken),
                      (a = e.onSuccess),
                      (i = e.onError),
                      (o = t1(n)),
                      (u.label = 1);
                  case 1:
                    if ((u.trys.push([1, 10, 11, 12]), r(!0), !o))
                      return [3, 3];
                    return [4, t2(o)];
                  case 2:
                    if (void 0 === (s = u.sent())) return [2];
                    return (
                      (l = s.plugin),
                      a({
                        domain: o,
                        scrapeManifestResponse: {
                          plugin: l,
                          manifest_validation_info: (c =
                            s.manifest_validation_info),
                        },
                        apiValidationInfo: s.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      ej.ZP.scrapePluginManifest({
                        domain: n,
                        manifestAccessToken: t,
                      }),
                    ];
                  case 4:
                    if (!(d = u.sent()).plugin) return [3, 8];
                    u.label = 5;
                  case 5:
                    return (
                      u.trys.push([5, 7, , 8]),
                      [4, ej.ZP.getPluginApi({ id: d.plugin.id })]
                    );
                  case 6:
                    return (m = u.sent().api_validation_info), [3, 8];
                  case 7:
                    return u.sent(), [3, 8];
                  case 8:
                    a({
                      domain: n,
                      scrapeManifestResponse: d,
                      apiValidationInfo: m,
                      manifestAccessToken: t,
                    }),
                      (u.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (h = u.sent()), i(o ? h : void 0), [3, 12];
                  case 11:
                    return r(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (n) {
              return e.apply(this, arguments);
            }),
            [],
          ),
          isLoading: t,
        };
      }
      function i6() {
        var e = (0, eo.Z)([
          'flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]',
        ]);
        return (
          (i6 = function () {
            return e;
          }),
          e
        );
      }
      function i8() {
        var e = (0, eo.Z)(['w-10 text-2xl text-center']);
        return (
          (i8 = function () {
            return e;
          }),
          e
        );
      }
      function i7() {
        var e = (0, eo.Z)(['flex-1 leading-5']);
        return (
          (i7 = function () {
            return e;
          }),
          e
        );
      }
      function i9() {
        var e = (0, eo.Z)(['flex gap-4 flex-col text-sm']);
        return (
          (i9 = function () {
            return e;
          }),
          e
        );
      }
      function oe(e) {
        var n = e.icon,
          t = e.children;
        return (0, x.jsxs)(on, {
          children: [
            (0, x.jsx)(ot, { children: n }),
            (0, x.jsx)(or, { children: t }),
          ],
        });
      }
      var on = ep.Z.div(i6()),
        ot = ep.Z.div(i8()),
        or = ep.Z.div(i7()),
        oa = ep.Z.div(i9());
      function oi(e) {
        var n = e.onConfirm,
          t = e.onClose;
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: 'success',
          title: 'Unverified plugin',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Continue',
            color: 'primary',
            onClick: n,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: 'Cancel',
            color: 'neutral',
            onClick: t,
          }),
          children: (0, x.jsx)(iQ, {
            children: (0, x.jsx)(oa, {
              children: (0, x.jsx)(oe, {
                icon: '\uD83D\uDEA8',
                children:
                  "OpenAI hasn't vetted this plugin. This plugin may pose risks to your information. Be sure you trust this plugin before proceeding.",
              }),
            }),
          }),
        });
      }
      function oo(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, j.useState)(!1),
          i = a[0],
          o = a[1],
          s = (0, j.useState)(n),
          l = s[0],
          c = s[1],
          u = (0, j.useCallback)(function () {
            o(!0);
          }, []);
        return l
          ? i
            ? (0, x.jsx)(ol, { plugin: l, onInstall: t, onClose: r })
            : (0, x.jsx)(oi, { onConfirm: u, onClose: r })
          : (0, x.jsx)(os, { onLoad: c, onClose: r });
      }
      function os(e) {
        var n = e.onLoad,
          t = e.onClose,
          r = (0, j.useRef)(null),
          a = (0, j.useState)(!1),
          i = a[0],
          o = a[1],
          s = (0, j.useState)(),
          l = s[0],
          c = s[1];
        (0, j.useEffect)(function () {
          setTimeout(function () {
            var e;
            null === (e = r.current) || void 0 === e || e.focus();
          }, 50);
        }, []);
        var u = (0, j.useCallback)(
          (0, ea.Z)(function () {
            var e, t, a;
            return (0, el.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (
                    !(t =
                      null === (e = r.current) || void 0 === e
                        ? void 0
                        : e.value)
                  )
                    return c('Please provide a URL.'), [2];
                  if (t1(t))
                    return (
                      c(
                        'To add a localhost plugin, please go to "Develop your own plugin."',
                      ),
                      [2]
                    );
                  i.label = 1;
                case 1:
                  return (
                    i.trys.push([1, 3, 4, 5]),
                    o(!0),
                    [4, ej.ZP.getPluginByDomain({ domain: t })]
                  );
                case 2:
                  return (
                    (a = i.sent()) ? n(a) : c("That plugin doesn't exist."),
                    [3, 5]
                  );
                case 3:
                  return i.sent(), c("Couldn't find plugin."), [3, 5];
                case 4:
                  return o(!1), [7];
                case 5:
                  return [2];
              }
            });
          }),
          [n, o, c],
        );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: t,
          type: 'success',
          title: 'Install an unverified plugin',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Find plugin',
            color: 'primary',
            onClick: u,
            loading: i,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: 'Cancel',
            color: 'neutral',
            onClick: t,
          }),
          children: (0, x.jsxs)(iQ, {
            children: [
              (0, x.jsx)('div', {
                children:
                  "Please provide the website domain of the unverified plugin you'd like to install.",
              }),
              (0, x.jsx)(ar, {
                ref: r,
                name: 'url',
                placeholder: 'openai.com',
                onPressEnter: u,
              }),
              l && (0, x.jsx)(iX, { children: l }),
            ],
          }),
        });
      }
      function ol(e) {
        var n = e.plugin,
          t = e.onInstall,
          r = e.onClose,
          a = (0, j.useState)(),
          i = a[0],
          o = a[1],
          s = (0, j.useState)(!1),
          l = s[0],
          c = s[1],
          u = (0, j.useRef)(null),
          d = aP({
            onSuccess: function (e) {
              t(e), r();
            },
            onError: function (e) {
              o("Couldn't install plugin.");
            },
          }),
          m = n.manifest.name_for_human,
          f = 'user_http' === n.manifest.auth.type,
          h = 'oauth' === n.manifest.auth.type,
          g = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e, t, r;
              return (0, el.__generator)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!h) return [3, 1];
                    return (
                      (e = aI(n))
                        ? (window.location.href = e)
                        : o('Missing plugin configuration for '.concat(m, '.')),
                      [3, 8]
                    );
                  case 1:
                    if (!f) return [3, 7];
                    if (
                      !(null === (t = u.current) || void 0 === t
                        ? void 0
                        : t.value)
                    )
                      return o('Please provide your credentials.'), [2];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, 5, 6]),
                      c(!0),
                      [
                        4,
                        ej.ZP.setPluginUserHttpToken({
                          id: n.id,
                          userAccessToken: u.current.value,
                        }),
                      ]
                    );
                  case 3:
                    return r.sent(), d(n.id), [3, 6];
                  case 4:
                    return r.sent(), o("Couldn't install plugin."), [3, 6];
                  case 5:
                    return c(!1), [7];
                  case 6:
                    return [3, 8];
                  case 7:
                    try {
                      c(!0), d(n.id);
                    } catch (a) {
                      o("Couldn't install plugin.");
                    } finally {
                      c(!1);
                    }
                    r.label = 8;
                  case 8:
                    return [2];
                }
              });
            }),
            [n, m, h, f, d],
          );
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: 'success',
          title: 'Unverified plugin',
          primaryButton: (0, x.jsx)(y.mH, {
            title: h ? 'Log in with '.concat(m) : 'Install plugin',
            color: 'primary',
            onClick: g,
            loading: l,
          }),
          secondaryButton: (0, x.jsx)(y.mH, {
            title: 'Cancel',
            color: 'neutral',
            onClick: r,
          }),
          children: (0, x.jsxs)(iQ, {
            children: [
              (0, x.jsx)(aj, { plugin: n }),
              f &&
                (0, x.jsxs)('div', {
                  children: [
                    (0, x.jsx)('div', {
                      className: 'text-sm',
                      children:
                        n.manifest.auth.instructions ||
                        'Enter your HTTP access token below:',
                    }),
                    (0, x.jsx)('div', {
                      className: 'mt-2',
                      children: (0, x.jsx)(ar, {
                        ref: u,
                        type: 'password',
                        name: 'token',
                        placeholder: 'Enter your credentials',
                        autoComplete: 'off',
                        onPressEnter: g,
                      }),
                    }),
                  ],
                }),
              h &&
                (0, x.jsxs)('div', {
                  children: [
                    'You will be redirected to',
                    ' ',
                    (0, x.jsx)('span', {
                      className: 'font-medium',
                      children: m,
                    }),
                    ' to log in.',
                  ],
                }),
              i && (0, x.jsx)(iX, { children: i }),
            ],
          }),
        });
      }
      function oc() {
        var e = (0, eo.Z)(['flex items-center gap-2 text-xs']);
        return (
          (oc = function () {
            return e;
          }),
          e
        );
      }
      function ou(e) {
        var n = e.onClose,
          t = (0, P.hz)(),
          r = tE().installedPlugins;
        if (!t.has('tools3_admin')) return null;
        var a = r.map(function (e) {
          return (0, x.jsx)(od, { plugin: e }, e.id);
        });
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: n,
          type: 'success',
          title: 'Plugins admin',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'Done',
            color: 'primary',
            onClick: n,
          }),
          children: (0, x.jsx)(iQ, { children: a }),
        });
      }
      function od(e) {
        var n = e.plugin,
          t = (0, j.useState)(!1),
          r = t[0],
          a = t[1],
          i = (0, as.NL)(),
          o = (0, aN.D)(ej.ZP.scrapePluginManifest.bind(ej.ZP), {
            onSuccess: function (e) {
              var n = e.plugin,
                t = e.manifest_validation_info;
              if (!n) {
                console.log('Error refreshing manifest:', t),
                  alert(
                    'Failed to refresh manifest. See console for detailed errors.',
                  );
                return;
              }
              i.setQueryData(['allAip'], function (e) {
                var t = (0, B.Z)((null == e ? void 0 : e.items) || []),
                  r = t.findIndex(function (e) {
                    return e.id === n.id;
                  });
                return -1 !== r && (t[r] = n), { count: t.length, items: t };
              });
            },
            onError: function (e) {
              console.error(e);
            },
          }).mutate,
          s = (0, aN.D)(ej.ZP.deletePlugin.bind(ej.ZP), {
            onSuccess: function () {
              i.setQueryData(['allAip'], function (e) {
                var t = (0, B.Z)((null == e ? void 0 : e.items) || []),
                  r = t.findIndex(function (e) {
                    return e.id === n.id;
                  });
                return (
                  -1 !== r && t.splice(r, 1), { count: t.length, items: t }
                );
              });
            },
            onError: function (e) {
              console.error(e);
            },
          }).mutate,
          l = (0, j.useCallback)(
            function () {
              a(!r);
            },
            [r],
          ),
          c = (0, j.useCallback)(
            function () {
              window.confirm(
                'Are you sure you want to refresh '.concat(
                  n.manifest.name_for_human,
                  "'s manifest?",
                ),
              ) && o({ domain: n.domain });
            },
            [n, o],
          ),
          u = (0, j.useCallback)(
            function () {
              window.confirm(
                'Are you sure you want to delete the '.concat(
                  n.manifest.name_for_human,
                  ' plugin?',
                ),
              ) && s({ id: n.id });
            },
            [n, s],
          );
        return (0, x.jsxs)('div', {
          children: [
            (0, x.jsxs)('div', {
              className: 'flex items-center justify-between',
              children: [
                (0, x.jsxs)(of, {
                  children: [
                    (0, x.jsx)('div', {
                      children: (0, x.jsx)(e$, {
                        url: n.manifest.logo_url,
                        name: n.manifest.name_for_human,
                        size: 24,
                      }),
                    }),
                    (0, x.jsxs)('div', {
                      children: [
                        (0, x.jsx)('div', {
                          children: n.manifest.name_for_human,
                        }),
                        (0, x.jsx)('div', {
                          className: 'text-gray-500',
                          children: n.domain,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)(of, {
                  children: [
                    (0, x.jsx)(om, { icon: eg.Qxo, onClick: c }),
                    (0, x.jsx)(om, { icon: eg.Ybf, onClick: u }),
                    (0, x.jsx)(om, { icon: r ? eg.rH8 : eg.bTu, onClick: l }),
                  ],
                }),
              ],
            }),
            r &&
              (0, x.jsx)('pre', {
                className: 'mt-1 overflow-x-auto text-[10px]',
                children: JSON.stringify(n, null, 2),
              }),
          ],
        });
      }
      function om(e) {
        var n = e.icon,
          t = e.onClick;
        return (0, x.jsx)('div', {
          role: 'button',
          className: 'cursor-pointer text-gray-500 hover:text-gray-700',
          onClick: t,
          children: (0, x.jsx)(E.ZP, { icon: n }),
        });
      }
      var of = ep.Z.div(oc()),
        oh = t(95552),
        og = t.n(oh);
      function op() {
        var e = (0, eo.Z)(['text-sm text-black/70 dark:text-white/70 ', '']);
        return (
          (op = function () {
            return e;
          }),
          e
        );
      }
      function ox() {
        var e = (0, eo.Z)([
          'hidden h-4 border-l border-black/30 dark:border-white/30 sm:block',
        ]);
        return (
          (ox = function () {
            return e;
          }),
          e
        );
      }
      var ov,
        ob,
        oj =
          ((h = {}),
          (0, q.Z)(h, eN._G.Small, 8),
          (0, q.Z)(h, eN._G.Medium, 4),
          (0, q.Z)(h, eN._G.Large, 4),
          (0, q.Z)(h, eN._G.XLarge, 6),
          (0, q.Z)(h, eN._G.Full, 8),
          h);
      function oy(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s,
          l,
          c,
          u,
          d,
          m,
          f,
          h,
          p,
          v,
          b = e.onInstallWithAuthRequired,
          k = e.onClickInstallDeveloper,
          C = e.onClickDevelop,
          w = e.onClickManage,
          Z = e.onClickAbout,
          N = e.onClose,
          _ = (0, ex.kP)().session,
          S = (0, j.useState)(g.Featured),
          I = S[0],
          T = S[1],
          M =
            ((t = (0, ex.kP)().session),
            (r = (0, P.hz)()),
            (i = (a = (0, tD.a)(
              ['approvedAip'],
              function () {
                return ej.ZP.getPlugins({
                  offset: 0,
                  limit: 20,
                  statuses: ['approved'],
                  accessToken: null == t ? void 0 : t.accessToken,
                });
              },
              {
                enabled:
                  r.has('tools3') && !!(null == t ? void 0 : t.accessToken),
                onError: function (e) {
                  console.error(e);
                },
              },
            )).data),
            (o = a.isLoading),
            (0, j.useMemo)(
              function () {
                return { approvedPlugins: i ? i.items : [], isLoading: o };
              },
              [i, o],
            )),
          R = M.approvedPlugins,
          F = M.isLoading,
          D = (function (e, n) {
            for (
              var t = (0, B.Z)(e), r = og()(n), a = t.length - 1;
              a > 0;
              a--
            ) {
              var i,
                o = Math.floor(r() * (a + 1));
              (i = [t[o], t[a]]), (t[a] = i[0]), (t[o] = i[1]);
            }
            return t;
          })(
            ok(R),
            (null == _
              ? void 0
              : null === (n = _.user) || void 0 === n
              ? void 0
              : n.id) || '',
          ),
          E = tE(),
          q = E.installedPlugins,
          A = E.isLoading,
          L = (0, j.useMemo)(
            function () {
              return q.filter(function (e) {
                return 'approved' !== e.status;
              });
            },
            [q],
          ),
          O = ok(L),
          U = (0, P.hz)(),
          z = oj[(0, eN.dQ)()],
          V = [],
          H = !1;
        I === g.Featured
          ? ((V = D), (H = F))
          : I === g.Developer && ((V = O), (H = A));
        var $ =
            ((l = { items: V, numItemsPerPage: z }),
            (c = l.items),
            (u = l.numItemsPerPage),
            (d = (0, j.useState)(0)),
            (m = d[0]),
            (f = d[1]),
            (h = Math.ceil(c.length / u)),
            (p = m * u),
            {
              page: m,
              numPages: h,
              pageItems: c.slice(p, p + u),
              goToPage: (0, j.useCallback)(function (e) {
                f(e);
              }, []),
            }),
          W = $.page,
          G = $.numPages,
          Y = $.pageItems,
          J = $.goToPage,
          Q = (0, j.useCallback)(
            function () {
              T(g.Featured), J(0);
            },
            [J],
          ),
          X = (0, j.useCallback)(
            function () {
              T(g.Developer), J(0);
            },
            [J],
          );
        return (
          (0, j.useEffect)(
            function () {
              I === g.Developer && 0 === L.length && (T(g.Featured), J(0));
            },
            [I, L, J],
          ),
          (0, x.jsx)(y.ZP, {
            isOpen: !0,
            onModalClose: N,
            type: 'success',
            title: 'Plugin store',
            className:
              'bg-gray-50 sm:mx-7 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl',
            closeButton: (0, x.jsx)(y.ol, { onClose: N }),
            children: (0, x.jsxs)(iQ, {
              children: [
                L.length > 0 &&
                  (0, x.jsxs)('div', {
                    className: 'flex gap-3',
                    children: [
                      (0, x.jsx)(oC, {
                        selected: I === g.Featured,
                        onClick: Q,
                        children: 'Featured plugins',
                      }),
                      (0, x.jsx)(oC, {
                        selected: I === g.Developer,
                        onClick: X,
                        children: 'Unverified plugins',
                      }),
                    ],
                  }),
                (0, x.jsx)(ow, {
                  plugins: Y,
                  numSkeletons: z,
                  isLoading: H,
                  onInstallWithAuthRequired: b,
                }),
                (0, x.jsxs)('div', {
                  className:
                    'flex flex-col items-center gap-2 sm:flex-row sm:justify-between',
                  children: [
                    (0, x.jsx)('div', {
                      children:
                        G > 1 &&
                        (0, x.jsx)(oS, { page: W, numPages: G, goToPage: J }),
                    }),
                    (0, x.jsxs)('div', {
                      className: 'flex flex-col items-center gap-2 sm:flex-row',
                      children: [
                        U.has('tools3_dev') &&
                          (0, x.jsxs)(x.Fragment, {
                            children: [
                              (0, x.jsx)(oI, {
                                role: 'button',
                                onClick: k,
                                children: 'Install an unverified plugin',
                              }),
                              (0, x.jsx)(oT, {}),
                              (0, x.jsx)(oI, {
                                role: 'button',
                                onClick: C,
                                children: 'Develop your own plugin',
                              }),
                              U.has('tools3_admin') &&
                                (0, x.jsxs)(x.Fragment, {
                                  children: [
                                    (0, x.jsx)(oT, {}),
                                    (0, x.jsx)(oI, {
                                      role: 'button',
                                      onClick: w,
                                      children: 'Plugins admin',
                                    }),
                                  ],
                                }),
                              (0, x.jsx)(oT, {}),
                            ],
                          }),
                        (0, x.jsx)(oI, {
                          role: 'button',
                          onClick: Z,
                          children: 'About plugins',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function ok(e) {
        return (0, j.useMemo)(
          function () {
            return e.sort(function (e, n) {
              return e.manifest.name_for_human.localeCompare(
                n.manifest.name_for_human,
              );
            });
          },
          [e],
        );
      }
      function oC(e) {
        var n = e.selected,
          t = e.onClick,
          r = e.children;
        return (0, x.jsx)(th.z, {
          color: n ? 'light' : 'neutral',
          className: (0, eu.Z)(
            'focus:ring-0',
            n && 'hover:bg-gray-200',
            !n && 'text-black/50',
          ),
          onClick: t,
          children: r,
        });
      }
      function ow(e) {
        var n = e.plugins,
          t = e.numSkeletons,
          r = e.isLoading,
          a = e.onInstallWithAuthRequired,
          i = r
            ? Array(t)
                .fill(0)
                .map(function (e, n) {
                  return (0, x.jsx)(oN, {}, n);
                })
            : n.map(function (e) {
                return (0,
                x.jsx)(oZ, { plugin: e, onInstallWithAuthRequired: a }, e.id);
              });
        return (0, x.jsx)('div', {
          className:
            'grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 xl:grid-cols-4',
          children: i,
        });
      }
      function oZ(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s,
          l = e.plugin,
          c = e.onInstallWithAuthRequired,
          u = (0, j.useState)(!1),
          d = u[0],
          m = u[1],
          f = (0, j.useState)(!1),
          h = f[0],
          g = f[1],
          p = aP({
            onSuccess: function (e) {
              aD(e.id);
            },
            onError: function (e) {
              console.error(e),
                I.m.danger(
                  'Error installing '.concat(l.manifest.name_for_human, '.'),
                );
            },
            onSettled: function () {
              m(!1);
            },
          }),
          v =
            ((r = (t = {
              onSuccess: function () {},
              onError: function (e) {
                console.error(e),
                  I.m.danger(
                    'Error uninstalling '.concat(
                      l.manifest.name_for_human,
                      '.',
                    ),
                  );
              },
              onSettled: function () {
                g(!1);
              },
            }).onSuccess),
            (a = t.onError),
            (i = t.onSettled),
            (o = (0, as.NL)()),
            (s = (0, aN.D)(ej.ZP.updatePluginUserSettings.bind(ej.ZP), {
              onSuccess: function (e) {
                (function (e, n, t) {
                  n.setQueryData(t, function (n) {
                    var t = (0, B.Z)((null == n ? void 0 : n.items) || []),
                      r = t.findIndex(function (n) {
                        return n.id === e.id;
                      });
                    return (
                      -1 !== r && t.splice(r, 1), { count: t.length, items: t }
                    );
                  });
                })(e, o, ['installedAip']),
                  aS(e, o, ['approvedAip']),
                  r(e);
              },
              onError: a,
              onSettled: i,
            }).mutate),
            (0, j.useCallback)(
              function (e) {
                s({ pluginId: e, isInstalled: !1 });
              },
              [s],
            )),
          b = (0, j.useCallback)(
            function () {
              if ('oauth' === l.manifest.auth.type) {
                var e = aI(l);
                e
                  ? (window.location.href = e)
                  : I.m.danger(
                      'Missing plugin configuration for '.concat(
                        l.manifest.name_for_human,
                        '.',
                      ),
                    );
              } else
                'user_http' === l.manifest.auth.type ? c(l) : (m(!0), p(l.id));
            },
            [l, p, c],
          ),
          y = (0, j.useCallback)(
            function () {
              g(!0), v(l.id);
            },
            [l, v],
          );
        return (
          (n =
            d || h
              ? (0, x.jsxs)(th.z, {
                  color: 'light',
                  className: 'bg-green-100 hover:bg-green-100',
                  children: [
                    d ? 'Installing' : 'Uninstalling',
                    (0, x.jsx)(nd.Z, {}),
                  ],
                })
              : l.user_settings.is_installed
              ? (0, x.jsxs)(th.z, {
                  color: 'light',
                  className: 'hover:bg-gray-200',
                  onClick: y,
                  children: ['Uninstall', (0, x.jsx)(E.ZP, { icon: eg.$Rx })],
                })
              : (0, x.jsxs)(th.z, {
                  onClick: b,
                  children: ['Install', (0, x.jsx)(E.ZP, { icon: eg.wzc })],
                })),
          (0, x.jsx)(oP, {
            logo: (0, x.jsx)(e$, {
              url: l.manifest.logo_url,
              name: l.manifest.name_for_human,
              size: '100%',
              large: !0,
            }),
            tag: t0(l) && (0, x.jsx)(o_, {}),
            title: (0, x.jsx)('div', {
              className: 'max-w-full text-lg leading-5 line-clamp-1',
              children: l.manifest.name_for_human,
            }),
            button: n,
            description: l.manifest.description_for_human,
          })
        );
      }
      function oN() {
        return (0, x.jsx)(oP, {
          logo: (0, x.jsx)('div', {
            className: 'h-full w-full rounded-[5px] bg-gray-300',
          }),
          title: (0, x.jsx)('div', {
            className: 'h-[19px] w-[103px] rounded-[5px] bg-gray-100',
          }),
          button: (0, x.jsx)('div', {
            className: 'h-[36px] w-[103px] rounded-[5px] bg-gray-200',
          }),
          description: (0, x.jsxs)('div', {
            className: 'flex flex-col gap-1.5',
            children: [
              (0, x.jsx)('div', {
                className: 'h-[14px] w-[209px] rounded-[5px] bg-gray-100',
              }),
              (0, x.jsx)('div', {
                className: 'h-[14px] w-[218px] rounded-[5px] bg-gray-100',
              }),
              (0, x.jsx)('div', {
                className: 'h-[14px] w-[184px] rounded-[5px] bg-gray-100',
              }),
            ],
          }),
        });
      }
      function oP(e) {
        var n = e.logo,
          t = e.tag,
          r = e.title,
          a = e.button,
          i = e.description;
        return (0, x.jsxs)('div', {
          className:
            'flex flex-col gap-4 rounded border border-black/10 bg-white p-6 dark:border-white/20 dark:bg-gray-900',
          children: [
            (0, x.jsxs)('div', {
              className: 'flex gap-4',
              children: [
                (0, x.jsx)('div', {
                  className: 'h-[70px] w-[70px] shrink-0',
                  children: n,
                }),
                (0, x.jsxs)('div', {
                  className:
                    'flex min-w-0 flex-col items-start justify-between',
                  children: [
                    t
                      ? (0, x.jsxs)('div', {
                          className: 'flex items-center gap-1.5',
                          children: [t, r],
                        })
                      : r,
                    a,
                  ],
                }),
              ],
            }),
            (0, x.jsx)('div', {
              className:
                'h-[60px] text-sm text-black/70 line-clamp-3 dark:text-white/70',
              children: i,
            }),
          ],
        });
      }
      function o_() {
        return (0, x.jsx)('div', {
          className:
            'flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800',
          children: (0, x.jsx)(E.ZP, { icon: eg.V7f, className: 'h-3 w-3' }),
        });
      }
      function oS(e) {
        for (
          var n = function (e) {
              c.push(
                (0, x.jsx)(
                  oI,
                  {
                    role: 'button',
                    className: (0, eu.Z)(
                      'flex h-5 w-5 items-center justify-center',
                      e === t &&
                        'text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600',
                    ),
                    onClick: function () {
                      return a(e);
                    },
                    children: e + 1,
                  },
                  e,
                ),
              );
            },
            t = e.page,
            r = e.numPages,
            a = e.goToPage,
            i = t > 0,
            o = t < r - 1,
            s = (0, j.useCallback)(
              function () {
                a(Math.max(t - 1, 0));
              },
              [t, a],
            ),
            l = (0, j.useCallback)(
              function () {
                a(Math.min(t + 1, r - 1));
              },
              [t, r, a],
            ),
            c = [],
            u = 0;
          u < r;
          u++
        )
          n(u);
        return (0, x.jsxs)('div', {
          className: 'flex gap-2 text-sm text-black/60 dark:text-white/70',
          children: [
            (0, x.jsxs)(oI, {
              role: 'button',
              className: (0, eu.Z)('flex items-center', !i && 'opacity-50'),
              onClick: s,
              $disabled: !i,
              children: [(0, x.jsx)(E.ZP, { icon: eg.YFh }), 'Prev'],
            }),
            c,
            (0, x.jsxs)(oI, {
              role: 'button',
              className: (0, eu.Z)('flex items-center', !o && 'opacity-50'),
              onClick: l,
              $disabled: !o,
              children: ['Next', (0, x.jsx)(E.ZP, { icon: eg.Tfp })],
            }),
          ],
        });
      }
      ((ob = g || (g = {}))[(ob.Featured = 0)] = 'Featured'),
        (ob[(ob.Developer = 1)] = 'Developer');
      var oI = ep.Z.div(op(), function (e) {
          return e.$disabled
            ? 'opacity-50 cursor-default'
            : 'hover:text-black/50 dark:hover:text-white/50';
        }),
        oT = ep.Z.div(ox());
      function oM(e) {
        var n = e.allowClose,
          t = e.onConfirm,
          r = e.onClose;
        return (0, x.jsx)(y.ZP, {
          isOpen: !0,
          onModalClose: r,
          type: 'success',
          title: 'About plugins',
          primaryButton: (0, x.jsx)(y.mH, {
            title: 'OK',
            color: 'primary',
            onClick: t,
          }),
          secondaryButton:
            n &&
            (0, x.jsx)(y.mH, { title: 'Cancel', color: 'neutral', onClick: r }),
          children: (0, x.jsx)(iQ, {
            children: (0, x.jsxs)(oa, {
              children: [
                (0, x.jsx)(oe, {
                  icon: '\uD83D\uDEA8',
                  children:
                    'Plugins are powered by third party applications that are not controlled by OpenAI. Be sure you trust a plugin before installation.',
                }),
                (0, x.jsx)(oe, {
                  icon: '\uD83C\uDF10',
                  children:
                    "Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.",
                }),
                (0, x.jsx)(oe, {
                  icon: '\uD83E\uDDE0',
                  children:
                    "ChatGPT automatically chooses when to use plugins during a conversation, depending on the plugins you've enabled.",
                }),
              ],
            }),
          }),
        });
      }
      var oR = 'oai/apps/hasSeenPluginsDisclaimer';
      function oF(e) {
        var n = e.onInstall,
          t = e.onClose,
          r = (0, j.useState)(Boolean(N.getItem(oR))),
          a = r[0],
          i = r[1],
          o = (0, j.useState)(!1),
          s = o[0],
          l = o[1],
          c = (0, j.useState)(!1),
          u = c[0],
          d = c[1],
          m = (0, j.useState)(),
          f = m[0],
          h = m[1],
          g = (0, j.useState)(!1),
          p = g[0],
          v = g[1],
          b = (0, j.useState)(!1),
          y = b[0],
          k = b[1],
          C = (0, j.useCallback)(function () {
            i(!0), l(!1), N.setItem(oR, !0);
          }, []),
          w = (0, j.useCallback)(function (e) {
            h(e), d(!0);
          }, []),
          Z = (0, j.useCallback)(function () {
            d(!0);
          }, []),
          P = (0, j.useCallback)(function () {
            v(!0);
          }, []),
          _ = (0, j.useCallback)(function () {
            k(!0);
          }, []),
          S = (0, j.useCallback)(function () {
            l(!0);
          }, []),
          I = (0, j.useCallback)(
            function (e) {
              aD(e.id), t(), n(e);
            },
            [n, t],
          ),
          T = (0, j.useCallback)(
            function () {
              h(void 0), d(!1), t();
            },
            [t],
          ),
          M = (0, j.useCallback)(
            function () {
              v(!1), t();
            },
            [t],
          ),
          R = (0, j.useCallback)(
            function () {
              k(!1), t();
            },
            [t],
          );
        return !a || s
          ? (0, x.jsx)(oM, { allowClose: !a, onConfirm: C, onClose: t })
          : u
          ? (0, x.jsx)(oo, { plugin: f, onInstall: I, onClose: T })
          : p
          ? (0, x.jsx)(iK, {
              onClickInstall: w,
              onInstallLocalhost: I,
              onClose: M,
            })
          : y
          ? (0, x.jsx)(ou, { onClose: R })
          : (0, x.jsx)(oy, {
              onInstallWithAuthRequired: w,
              onClickInstallDeveloper: Z,
              onClickDevelop: P,
              onClickManage: _,
              onClickAbout: S,
              onClose: t,
            });
      }
      function oD() {
        var e = (0, eo.Z)([
          'flex h-8 flex-shrink-0 items-center justify-center border-b border-black/10 bg-gray-50 text-xs text-gray-800 dark:border-white/20 dark:bg-[#272832] dark:text-white',
        ]);
        return (
          (oD = function () {
            return e;
          }),
          e
        );
      }
      function oE() {
        var e = (0, eo.Z)([
          'flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-red-200 text-red-800',
        ]);
        return (
          (oE = function () {
            return e;
          }),
          e
        );
      }
      function oq() {
        var e,
          n = (0, j.useState)(!1),
          t = n[0],
          r = n[1],
          a = (0, j.useState)(!1),
          i = a[0],
          o = a[1],
          s = (0, D.useRouter)(),
          l = tE(),
          c = l.installedPlugins,
          u = l.isLoading,
          d = aF(),
          m = (0, j.useRef)(null);
        (0, j.useEffect)(
          function () {
            if (!u) {
              var e = s.query,
                n = e.loginAip,
                t = e.loginSuccess,
                r = (0, ei.Z)(e, ['loginAip', 'loginSuccess']);
              if (n) {
                var a,
                  i = c.find(function (e) {
                    return e.id === n;
                  });
                i && 'true' === t
                  ? (aD(s.query.loginAip),
                    null === (a = m.current) || void 0 === a || a.open())
                  : I.m.warning(
                      "Couldn't log in with ".concat(
                        (null == i ? void 0 : i.manifest.name_for_human) ||
                          'plugin',
                        '.',
                      ),
                    ),
                  s.replace({ pathname: s.pathname, query: r });
              }
            }
          },
          [s, c, u],
        );
        var f = (0, j.useCallback)(function () {
            var e;
            null === (e = m.current) || void 0 === e || e.open();
          }, []),
          h = (0, j.useCallback)(function () {
            r(!1);
          }, []),
          g = (0, j.useCallback)(
            function (e) {
              if (e.length > 3)
                o(!0),
                  setTimeout(function () {
                    o(!1);
                  }, 600);
              else {
                var n,
                  t = e.filter(function (e) {
                    return !d.find(function (n) {
                      return n.id === e.id;
                    });
                  }),
                  r = !0,
                  a = !1,
                  i = void 0;
                try {
                  for (
                    var s, l = aT[Symbol.iterator]();
                    !(r = (s = l.next()).done);
                    r = !0
                  ) {
                    var c = (function () {
                      var e = s.value,
                        n = d.find(function (n) {
                          return e.includes(n.domain);
                        });
                      if (n) {
                        var r = e.find(function (e) {
                            return e !== n.domain;
                          }),
                          a = t.find(function (e) {
                            return e.domain === r;
                          });
                        if (a)
                          return (
                            I.m.warning(
                              "You can't enable "
                                .concat(a.manifest.name_for_human, ' while ')
                                .concat(
                                  n.manifest.name_for_human,
                                  ' is enabled.',
                                ),
                            ),
                            { v: void 0 }
                          );
                      }
                    })();
                    if ('object' === (0, iG.Z)(c)) return c.v;
                  }
                } catch (u) {
                  (a = !0), (i = u);
                } finally {
                  try {
                    r || null == l.return || l.return();
                  } finally {
                    if (a) throw i;
                  }
                }
                (n = e.map(function (e) {
                  return e.id;
                })),
                  n.length > 3 ||
                    aR.setState(function () {
                      return N.setItem(aM, n), { enabledPluginIds: new Set(n) };
                    });
              }
            },
            [d],
          ),
          p = (0, j.useCallback)(function (e) {
            var n;
            null === (n = m.current) || void 0 === n || n.close(),
              'store' === e && r(!0);
          }, []),
          v = c.map(function (e) {
            return {
              value: e,
              title: e.manifest.name_for_human,
              description: e.manifest.description_for_human,
              tags: [],
              customTags: t0(e)
                ? (0, x.jsx)(oL, {})
                : 'approved' !== e.status
                ? (0, x.jsx)(oA, {})
                : void 0,
              imageUrl: e.manifest.logo_url,
            };
          }),
          b = v.filter(function (e) {
            return d.find(function (n) {
              return n.id === e.value.id;
            });
          }),
          y = ''.concat(0 === d.length ? 'No' : d.length, ' plugins enabled');
        if (d.length > 0 && d.length < 6) {
          var k = d.map(function (e, n) {
            return (0,
            x.jsx)(e$, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
          });
          y = (0, x.jsx)('div', { className: 'flex gap-1', children: k });
        }
        var C = [{ id: 'store', label: 'Plugin store', icon: eg.Rgz }];
        c.length > 3 &&
          (e = (0, x.jsxs)(oB, {
            className: (0, eu.Z)(
              'transition-colors duration-300',
              i && 'bg-red-200 text-red-800 dark:bg-red-200 dark:text-red-800',
            ),
            children: [d.length, '/', 3, ' Enabled'],
          }));
        var w = (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)(oB, { children: 'Loading...' }),
            (0, x.jsx)(iA, { showCheckbox: !0 }),
            (0, x.jsx)(iA, { showCheckbox: !0 }),
            (0, x.jsx)(iA, { showCheckbox: !0 }),
            (0, x.jsx)(iA, { showCheckbox: !0 }),
            (0, x.jsx)(iA, { showCheckbox: !0 }),
          ],
        });
        return (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)(iR, {
              name: 'Plugins',
              selectedOptions: b,
              selectedLabel: y,
              options: v,
              actions: C,
              onChange: g,
              onAction: p,
              dropdownRef: m,
              isLoading: u,
              loadingState: w,
              header: e,
            }),
            t && (0, x.jsx)(oF, { onInstall: f, onClose: h }),
          ],
        });
      }
      function oA() {
        return (0, x.jsx)(oO, {
          children: (0, x.jsx)(E.ZP, {
            icon: eg.OH,
            className: 'h-3 w-3',
            strokeWidth: 2.5,
          }),
        });
      }
      function oL() {
        return (0, x.jsx)(oO, {
          children: (0, x.jsx)(E.ZP, { icon: eg.V7f, className: 'h-3 w-3' }),
        });
      }
      var oB = ep.Z.div(oD()),
        oO = ep.Z.div(oE()),
        oU = { textarea: '', 'model-switcher': '' };
      function oz() {
        var e = (0, P.hz)(),
          n = $(function (e) {
            return e.isoDate;
          }),
          t = tH(n),
          r = (0, tD.a)(
            ['modelMessageCap'],
            function () {
              return ej.ZP.getModelMessageCap();
            },
            { enabled: e.has('model_preview') },
          ),
          a = r.data;
        return (
          r.isSuccess,
          r.isLoading,
          (0, j.useMemo)(
            function () {
              var e = (null == a ? void 0 : a.message_cap) || 0,
                n = (null == a ? void 0 : a.message_cap_window) || 1,
                r = (function (e) {
                  if (e < 60)
                    return e < 2 ? 'minute' : ''.concat(e, ' minutes');
                  var n = Math.floor(e / 60);
                  if (n < 24) return n < 2 ? 'hour' : ''.concat(n, ' hours');
                  var t = Math.floor(n / 24);
                  if (t < 7) return t < 2 ? 'day' : ''.concat(t, ' days');
                })(n),
                i = (null == a ? void 0 : a.message_disclaimer) || oU;
              return r
                ? a && n && e
                  ? {
                      textareaDisclaimer: i.textarea
                        .replaceAll('%FORMATTED_TIME%', t)
                        .replaceAll('%NUMERATOR%', ''.concat(e))
                        .replaceAll('%DENOMINATOR%', r),
                      modelSwitcherDisclaimer: i['model-switcher']
                        .replaceAll('%FORMATTED_TIME%', t)
                        .replaceAll('%NUMERATOR%', ''.concat(e))
                        .replaceAll('%DENOMINATOR%', r),
                    }
                  : {
                      textareaDisclaimer: oU.textarea,
                      modelSwitcherDisclaimer: oU['model-switcher'],
                    }
                : {
                    textareaDisclaimer: i.textarea,
                    modelSwitcherDisclaimer: i['model-switcher'],
                  };
            },
            [a, t],
          )
        );
      }
      function oV(e) {
        var n,
          t = e.onChangeModelSetting,
          r = e.availableModels,
          a = e.modelBackend,
          i = (0, P.hz)(),
          o = (0, j.useMemo)(
            function () {
              return r.find(function (e) {
                return e.id === a;
              });
            },
            [r, a],
          );
        return (0, x.jsxs)('div', {
          className: 'flex items-center justify-center gap-2',
          children: [
            (0, x.jsx)(oH, {
              onChangeModelSetting: t,
              availableModels: r,
              modelBackend: a,
            }),
            i.has('tools3') &&
              (null == o
                ? void 0
                : null === (n = o.enabledTools) || void 0 === n
                ? void 0
                : n.includes('tools3')) &&
              (0, x.jsx)(oq, {}),
          ],
        });
      }
      function oH(e) {
        var n,
          t,
          a,
          i,
          o = e.onChangeModelSetting,
          s = e.availableModels,
          l = e.modelBackend,
          c =
            ((n = $(function (e) {
              return e.isoDate;
            })),
            (t = $(function (e) {
              return e.clearCapTimeout;
            })),
            (a = Date.now()),
            (i = n && new Date(n).getTime()),
            n && i && i <= a ? (t(), null) : n ? z : null),
          u = (0, k.WS)(),
          d = oz(),
          m = (0, j.useCallback)(
            function (e) {
              e.id !== c &&
                (o(r.Model, e.id), u(C.s6.toggleModel, { model: e.id }));
            },
            [c, u, o],
          ),
          f = ''.concat(d.modelSwitcherDisclaimer),
          h = s.map(function (e) {
            return {
              value: e,
              title: e.title,
              description: e.id === c ? f : e.description,
              tags: e.tags,
              disabled: e.id === c,
            };
          }),
          g =
            h.find(function (e) {
              return e.value.id === l;
            }) || h[0];
        return (0, x.jsx)(iM, {
          name: 'Model',
          selectedOption: g,
          options: h,
          onChange: m,
        });
      }
      var o$ = function (e) {
          var n,
            t = e.modelBackend,
            r = e.availableModels,
            a =
              r.find(function (e) {
                return e.id === t;
              }) || r[0],
            i = a.tags
              .filter(function (e) {
                return iT.includes(e);
              })
              .map(function (e) {
                return iB(e);
              }),
            o = tq();
          if (o.length > 0) {
            var s = o.map(function (e, n) {
              return (0,
              x.jsx)(e$, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
            });
            n = (0, x.jsxs)(x.Fragment, {
              children: [
                (0, x.jsx)('div', { children: 'Enabled plugins:' }),
                s,
              ],
            });
          }
          return (0, x.jsxs)('div', {
            className:
              'flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300',
            children: [
              'Model: ',
              a.title,
              i,
              n
                ? (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)('span', { className: 'px-1', children: '•' }),
                      n,
                    ],
                  })
                : null,
            ],
          });
        },
        oW = t(75318);
      function oG() {
        var e = (0, eo.Z)([
          'text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100',
        ]);
        return (
          (oG = function () {
            return e;
          }),
          e
        );
      }
      function oY() {
        var e = (0, eo.Z)([
          'text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center',
        ]);
        return (
          (oY = function () {
            return e;
          }),
          e
        );
      }
      function oJ() {
        var e = (0, eo.Z)(['md:flex items-start text-center gap-3.5']);
        return (
          (oJ = function () {
            return e;
          }),
          e
        );
      }
      function oQ() {
        var e = (0, eo.Z)(['flex flex-col mb-8 md:mb-auto gap-3.5 flex-1']);
        return (
          (oQ = function () {
            return e;
          }),
          e
        );
      }
      function oX() {
        var e = (0, eo.Z)([
          'flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2',
        ]);
        return (
          (oX = function () {
            return e;
          }),
          e
        );
      }
      function oK() {
        var e = (0, eo.Z)(['flex flex-col gap-3.5 w-full sm:max-w-md m-auto']);
        return (
          (oK = function () {
            return e;
          }),
          e
        );
      }
      function o0() {
        var e = (0, eo.Z)(['w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md']);
        return (
          (o0 = function () {
            return e;
          }),
          e
        );
      }
      function o1() {
        var e = (0, eo.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (o1 = function () {
            return e;
          }),
          e
        );
      }
      function o2() {
        var e = (0, eo.Z)([
          'w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900',
        ]);
        return (
          (o2 = function () {
            return e;
          }),
          e
        );
      }
      var o3 = ep.Z.div(oG()),
        o4 = ep.Z.h1(oY()),
        o5 = ep.Z.div(oJ()),
        o6 = ep.Z.div(oQ()),
        o8 = ep.Z.h2(oX()),
        o7 = ep.Z.ul(oK()),
        o9 = ep.Z.li(o0());
      ep.Z.li(o1());
      var se = ep.Z.button(o2());
      function sn(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, j.useCallback)(
            function () {
              t(n);
            },
            [n, t],
          );
        return (0, x.jsxs)(se, { onClick: r, children: ['"', n, '" →'] });
      }
      function st(e) {
        var n = e.onChangeCurrentPrompt,
          t = (0, P.nR)();
        return (0, x.jsxs)(o3, {
          children: [
            (0, x.jsxs)(o4, {
              children: ['ChatGPT', t && (0, x.jsx)(ig, { children: 'Plus' })],
            }),
            (0, x.jsxs)(o5, {
              children: [
                (0, x.jsxs)(o6, {
                  children: [
                    (0, x.jsxs)(o8, {
                      children: [
                        (0, x.jsx)(E.ZP, { icon: eg.kXG, size: 'medium' }),
                        'Examples',
                      ],
                    }),
                    (0, x.jsxs)(o7, {
                      children: [
                        (0, x.jsx)(sn, {
                          text: 'Explain quantum computing in simple terms',
                          onChangeCurrentPrompt: n,
                        }),
                        (0, x.jsx)(sn, {
                          text: 'Got any creative ideas for a 10 year old’s birthday?',
                          onChangeCurrentPrompt: n,
                        }),
                        (0, x.jsx)(sn, {
                          text: 'How do I make an HTTP request in Javascript?',
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)(o6, {
                  children: [
                    (0, x.jsxs)(o8, {
                      children: [
                        (0, x.jsx)(E.ZP, { icon: oW.Z, size: 'medium' }),
                        'Capabilities',
                      ],
                    }),
                    (0, x.jsxs)(o7, {
                      children: [
                        (0, x.jsx)(o9, {
                          children:
                            'Remembers what user said earlier in the conversation',
                        }),
                        (0, x.jsx)(o9, {
                          children:
                            'Allows user to provide follow-up corrections',
                        }),
                        (0, x.jsx)(o9, {
                          children: 'Trained to decline inappropriate requests',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)(o6, {
                  children: [
                    (0, x.jsxs)(o8, {
                      children: [
                        (0, x.jsx)(E.ZP, { icon: eg.BJv, size: 'medium' }),
                        'Limitations',
                      ],
                    }),
                    (0, x.jsxs)(o7, {
                      children: [
                        (0, x.jsx)(o9, {
                          children:
                            'May occasionally generate incorrect information',
                        }),
                        (0, x.jsx)(o9, {
                          children:
                            'May occasionally produce harmful instructions or biased content',
                        }),
                        (0, x.jsx)(o9, {
                          children:
                            'Limited knowledge of world and events after 2021',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function sr() {
        var e = (0, eo.Z)([
          'flex flex-col items-center text-sm  dark:bg-gray-800',
        ]);
        return (
          (sr = function () {
            return e;
          }),
          e
        );
      }
      function sa() {
        var e = (0, eo.Z)(['w-full h-32 md:h-48 flex-shrink-0']);
        return (
          (sa = function () {
            return e;
          }),
          e
        );
      }
      function si() {
        var e = (0, eo.Z)([
          'cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200',
        ]);
        return (
          (si = function () {
            return e;
          }),
          e
        );
      }
      function so() {
        var e = (0, eo.Z)(['px-2 py-10 relative w-full flex flex-col h-full']);
        return (
          (so = function () {
            return e;
          }),
          e
        );
      }
      function ss() {
        var e = (0, eo.Z)([
          'text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow',
        ]);
        return (
          (ss = function () {
            return e;
          }),
          e
        );
      }
      function sl(e) {
        var n = e.conversationTurns,
          t = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          i = e.onChangeRating,
          o = e.onDeleteNode,
          l = e.onRequestCompletion,
          c = e.onChangeCurrentPrompt,
          u = e.onSandboxLinkClick,
          d = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          m = e.threadId,
          f = e.treeRef,
          h = e.activeRequests,
          g = e.isProcessingArtifact,
          p = e.isLoading,
          v = e.onChangeModelSetting,
          b = e.availableModels,
          y = e.currentThreadModel,
          k = e.canShowThreadSettings,
          C = (0, im.useScrollToBottom)(),
          w = (0, tJ.Z)((0, im.useSticky)(), 1)[0],
          Z = e4(),
          N = n.length < 2,
          _ = k && N && !p,
          S = (0, P.nR)(),
          I = (0, j.useState)(!1),
          T = I[0],
          M = I[1],
          R = G(b, y, m).modelBackend;
        return (
          (0, j.useEffect)(
            function () {
              p
                ? setTimeout(function () {
                    Z() && M(!0);
                  }, 1e3)
                : M(!1);
            },
            [p, Z],
          ),
          (0, x.jsxs)(x.Fragment, {
            children: [
              _ &&
                (0, x.jsxs)(sm, {
                  children: [
                    (0, x.jsx)(oV, {
                      onChangeModelSetting: v,
                      availableModels: b,
                      modelBackend: R,
                    }),
                    (0, x.jsxs)(sf, {
                      children: [
                        'ChatGPT',
                        S && (0, x.jsx)(ig, { children: 'Plus' }),
                      ],
                    }),
                  ],
                }),
              (0, x.jsxs)(sc, {
                children: [
                  N && !p && !k && (0, x.jsx)(st, { onChangeCurrentPrompt: c }),
                  T && p && (0, x.jsx)(nd.Z, { className: 'mx-auto mt-4' }),
                  !N &&
                    !p &&
                    k &&
                    (0, x.jsx)(o$, { availableModels: b, modelBackend: R }),
                  n.map(function (e, c) {
                    return e.role === s.Unknown || e.role === s.System
                      ? null
                      : (0, x.jsx)(
                          rd,
                          {
                            turn: e,
                            isFinalTurn: c === n.length - 1,
                            threadId: m,
                            treeRef: f,
                            onChangeItemInView: t,
                            onChangeRating: i,
                            onRequestMoreCompletions: r,
                            onDeleteNode: o,
                            onRequestCompletion: l,
                            onUpdateNode: a,
                            onSandboxLinkClick: u,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              d,
                            activeRequests: h,
                            modelBackend: R,
                          },
                          c,
                        );
                  }),
                  !_ && (0, x.jsx)(su, {}),
                ],
              }),
              g && (0, x.jsx)(nd.Z, { className: 'mx-auto mt-4' }),
              !w &&
                (0, x.jsx)(sd, {
                  onClick: C,
                  children: (0, x.jsx)(E.ZP, {
                    icon: eg.tv1,
                    className: 'm-1',
                  }),
                }),
            ],
          })
        );
      }
      var sc = ep.Z.div(sr()),
        su = ep.Z.div(sa()),
        sd = ep.Z.button(si()),
        sm = ep.Z.div(so()),
        sf = ep.Z.h1(ss()),
        sh = a1()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          },
        );
      function sg(e) {
        var n = e.children;
        return (0, x.jsx)(sh, {
          className: (0, eu.Z)('h-full dark:bg-gray-800'),
          followButtonClassName: 'scroll-convo',
          initialScrollBehavior: 'auto',
          children: n,
        });
      }
      function sp() {
        var e = (0, eo.Z)(['flex gap-4 mt-6']);
        return (
          (sp = function () {
            return e;
          }),
          e
        );
      }
      function sx(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, x.jsxs)(sv, {
          children: [
            n &&
              (0, x.jsx)(th.z, {
                as: 'button',
                color: 'neutral',
                onClick: n,
                children: 'Back',
              }),
            t &&
              (0, x.jsx)(th.z, {
                as: 'button',
                onClick: t,
                color: 'neutral',
                className: 'ml-auto',
                children: 'Next',
              }),
            r &&
              (0, x.jsx)(th.z, {
                as: 'button',
                onClick: r,
                color: 'primary',
                className: 'ml-auto',
                children: 'Done',
              }),
          ],
        });
      }
      var sv = ep.Z.div(sp());
      function sb() {
        var e = (0, eo.Z)(['prose dark:prose-invert']);
        return (
          (sb = function () {
            return e;
          }),
          e
        );
      }
      function sj() {
        var e = (0, eo.Z)(['!mt-4 font-normal !mb-2']);
        return (
          (sj = function () {
            return e;
          }),
          e
        );
      }
      function sy() {
        var e = (0, eo.Z)(['mb-4']);
        return (
          (sy = function () {
            return e;
          }),
          e
        );
      }
      function sk() {
        var e = (0, eo.Z)(['w-full h-[1px] bg-gray-300 opacity-20']);
        return (
          (sk = function () {
            return e;
          }),
          e
        );
      }
      var sC = 'oai/apps/hasSeenOnboarding',
        sw = eZ.id,
        sZ = eZ.name,
        sN = function () {
          var e = (0, j.useCallback)(function () {
              N.setItem(
                ''.concat(sC, '/').concat(sw),
                new Date().toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }),
              );
            }, []),
            n = (0, j.useState)(null),
            t = n[0],
            r = n[1];
          (0, j.useEffect)(
            function () {
              r(N.getItem(''.concat(sC, '/').concat(sw)));
            },
            [r],
          );
          var a = (0, j.useCallback)(
            function () {
              return t ? new Date(!0 === t ? '2022-12-14' : t) : t;
            },
            [t],
          );
          return (0, j.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: a };
            },
            [a, e],
          );
        };
      function sP(e) {
        var n = e.onClose,
          t = sN().setHasSeenOnboarding,
          r = (0, j.useState)(0),
          a = r[0],
          i = r[1],
          o = (0, j.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t],
          );
        return (0, x.jsxs)(sM, {
          children: [
            0 === a && (0, x.jsx)(sS, { onChangePage: i }),
            1 === a && (0, x.jsx)(sI, { onChangePage: i }),
            2 === a && (0, x.jsx)(sT, { onChangePage: i, onSubmit: o }),
          ],
        });
      }
      var s_ = function () {
          return 'chat' === sw
            ? (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)('div', {
                    className: 'mb-5',
                    children: (0, x.jsx)(sR, {
                      children: (0, x.jsx)('b', { children: sZ }),
                    }),
                  }),
                  (0, x.jsx)(sD, {}),
                ],
              })
            : (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsxs)(sR, {
                    children: [
                      'Welcome to ',
                      (0, x.jsx)('b', { children: sZ }),
                    ],
                  }),
                  (0, x.jsx)('p', {
                    children:
                      'Here are a few things to keep in mind before we get started:',
                  }),
                  (0, x.jsx)(sD, {}),
                ],
              });
        },
        sS = function (e) {
          var n = e.onChangePage;
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(s_, {}),
              (0, x.jsx)(sF, { children: 'This is a free research preview.' }),
              (0, x.jsxs)(oa, {
                children: [
                  (0, x.jsx)(oe, {
                    icon: '\uD83D\uDD2C',
                    children:
                      'Our goal is to get external feedback in order to improve our systems and make them safer.',
                  }),
                  (0, x.jsx)(oe, {
                    icon: '\uD83D\uDEA8',
                    children:
                      'While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.',
                  }),
                ],
              }),
              (0, x.jsx)(sx, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        sI = function (e) {
          var n = e.onChangePage;
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(s_, {}),
              (0, x.jsx)(sF, { children: 'How we collect data' }),
              (0, x.jsxs)(oa, {
                children: [
                  (0, x.jsx)(oe, {
                    icon: '\uD83E\uDDBE',
                    children:
                      'Conversations may be reviewed by our AI trainers to improve our systems.',
                  }),
                  (0, x.jsx)(oe, {
                    icon: '\uD83D\uDD10',
                    children:
                      "Please don't share any sensitive information in your conversations.",
                  }),
                ],
              }),
              (0, x.jsx)(sx, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        sT = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, j.useRef)(null);
          return (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(s_, {}),
              (0, x.jsx)(sF, { children: "We'd love your feedback!" }),
              (0, x.jsxs)(oa, {
                children: [
                  (0, x.jsx)(oe, {
                    icon: '\uD83D\uDC4D',
                    children:
                      'This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.',
                  }),
                  (0, x.jsxs)(oe, {
                    icon: '\uD83D\uDCAC',
                    children: [
                      'Share your feedback in our',
                      ' ',
                      (0, x.jsx)('a', {
                        href: 'https://discord.gg/openai',
                        target: '_blank',
                        rel: 'noreferrer',
                        children: 'Discord server',
                      }),
                      '.',
                    ],
                  }),
                ],
              }),
              (0, x.jsx)(sx, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        sM = ep.Z.div(sb()),
        sR = ep.Z.h2(sj()),
        sF = ep.Z.h4(sy()),
        sD = ep.Z.div(sk()),
        sE = t(35e3),
        sq = t(69858),
        sA = t(21345),
        sL = t(77507);
      function sB(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, j.useRef)(null),
          a = (0, k.WS)(),
          i = (0, j.useState)(!1),
          o = i[0],
          s = i[1],
          l = (0, D.useRouter)(),
          c = (0, j.useCallback)(
            function () {
              a(C.s6.closeAccountPaymentModal), t();
            },
            [t, a],
          ),
          u = (0, j.useCallback)(
            (0, ea.Z)(function () {
              var e;
              return (0, el.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    s(!0), a(C.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, ej.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), l.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      I.m.warning(
                        'The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.',
                        { hasCloseButton: !0 },
                      ),
                      [3, 5]
                    );
                  case 4:
                    return s(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [l, a, s],
          ),
          d = (0, j.useCallback)(
            function () {
              a(C.s6.clickAccountPaymentGetHelp);
            },
            [a],
          );
        return (0, x.jsxs)(sE.x, {
          isOpen: n,
          onClose: t,
          focusRef: r,
          children: [
            (0, x.jsxs)('div', {
              className:
                'flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700',
              children: [
                (0, x.jsx)('span', {
                  className: 'text-base font-semibold sm:text-base',
                  children: 'Your plan',
                }),
                (0, x.jsx)('button', {
                  className:
                    'text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white',
                  onClick: c,
                  children: (0, x.jsx)(eg.q5L, { className: 'h-6 w-6' }),
                }),
              ],
            }),
            (0, x.jsx)('div', {
              className: 'grid',
              children: (0, x.jsx)('div', {
                className: 'relative order-1 col-span-1 sm:order-2',
                children: (0, x.jsx)(sq.Oi, {
                  rowElements: [
                    (0, x.jsx)(
                      sq.Cu,
                      {
                        text: sL.S.plus.name,
                        children: (0, x.jsx)('span', {
                          className: 'font-semibold text-gray-500',
                          children: sL.S.plus.costInDollars,
                        }),
                      },
                      'row-plus-plan-name',
                    ),
                    (0, x.jsx)(
                      sq.hi,
                      {
                        disabled: !0,
                        variant: 'primary-disabled',
                        ref: r,
                        text: sL.S.plus.callToAction.active,
                      },
                      'row-plus-plan-button',
                    ),
                    (0, x.jsx)(
                      sq.G,
                      { text: sL.S.plus.demandAccess },
                      'row-plus-plan-demand',
                    ),
                    (0, x.jsx)(
                      sq.G,
                      { text: sL.S.plus.responseSpeed },
                      'row-plus-plan-speed',
                    ),
                    (0, x.jsx)(
                      sq.G,
                      { className: 'sm:pb-1', text: sL.S.plus.modelFeatures },
                      'row-plus-plan-feathers',
                    ),
                    (0, x.jsx)(
                      sq.nR,
                      {
                        className: 'sm:pb-1',
                        isLoading: o,
                        text: sL.S.manageSubscription.callToAction,
                        onClick: u,
                      },
                      'row-plus-plan-manage',
                    ),
                    (0, x.jsx)(
                      an(),
                      {
                        href: sA.L,
                        target: '_blank',
                        passHref: !0,
                        children: (0, x.jsx)(
                          sq.nR,
                          {
                            className: 'sm:pb-1',
                            isLoading: !1,
                            text: sL.S.getHelp.callToAction,
                            onClick: d,
                          },
                          'row-plus-plan-help',
                        ),
                      },
                      'row-plus-plan-help-link',
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var sO = t(86885),
        sU = { showAccountPaymentModal: !1 },
        sz = (0, O.ZP)()(function (e) {
          return (0, L.Z)((0, A.Z)({}, sU), {
            setShowAccountPaymentModal: function (n) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b();
              e({ showAccountPaymentModal: n }), t && t();
            },
          });
        }),
        sV = t(85087),
        sH = t(30331);
      function s$() {
        var e = (0, ex.kP)(),
          n = e.session,
          t = e.loading,
          r = (0, tD.a)(
            ['models'],
            function () {
              return ej.ZP.getModels(n.accessToken);
            },
            {
              enabled: Boolean(!t && (null == n ? void 0 : n.accessToken)),
              placeholderData: {
                models: [
                  {
                    slug: 'text-davinci-002-render',
                    max_tokens: 4097,
                    title: 'Default',
                    description: '',
                    tags: [],
                  },
                ],
              },
              onError: function (e) {
                try {
                  sH.Tb(e);
                } catch (n) {}
              },
            },
          ).data;
        return (0, j.useMemo)(
          function () {
            var e;
            return {
              availableModels: r
                ? (e = r.models).map(function (e) {
                    return {
                      id: e.slug,
                      maxTokens: e.max_tokens,
                      title: e.title,
                      description: e.description,
                      tags: e.tags,
                      enabledTools: e.enabled_tools,
                      properties: e.qualitative_properties,
                    };
                  })
                : [],
            };
          },
          [r],
        );
      }
      var sW = t(89678),
        sG = t.n(sW),
        sY = t(34388),
        sJ = t(39400),
        sQ = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return function (t) {
            var r = t.pageParam;
            return ej.ZP.getConversations(r || 0, 20, e, n);
          };
        },
        sX = 'oai/apps/hasSeenHistoryFilteredDisclosure/'.concat('2023-03-21'),
        sK = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function s0() {
        var e = (0, eo.Z)(['overflow-hidden w-full h-full relative flex']);
        return (
          (s0 = function () {
            return e;
          }),
          e
        );
      }
      function s1() {
        var e = (0, eo.Z)([
          'relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch',
        ]);
        return (
          (s1 = function () {
            return e;
          }),
          e
        );
      }
      function s2() {
        var e = (0, eo.Z)(['grow flex-1 overflow-hidden']);
        return (
          (s2 = function () {
            return e;
          }),
          e
        );
      }
      function s3() {
        var e = (0, eo.Z)([
          'absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2',
        ]);
        return (
          (s3 = function () {
            return e;
          }),
          e
        );
      }
      var s4 = 'oai/apps/hasSeenHistoryRestored',
        s5 = eZ.href,
        s6 = function (e) {
          var n,
            r,
            a,
            i,
            c,
            u,
            d,
            m,
            f,
            h,
            g,
            p,
            v,
            w,
            Z,
            T,
            M,
            R,
            F,
            E,
            O,
            U,
            H,
            Y,
            J,
            Q,
            X,
            K,
            ee,
            en,
            et,
            er,
            eo,
            ed,
            ef,
            ep,
            ev,
            eZ,
            eP,
            e_,
            eS,
            eI,
            eT = e.initialData,
            eM = e.isLoading,
            eR = (0, P.hz)(),
            eF = (0, D.useRouter)(),
            eD = (0, eN.lj)(),
            eE = (0, k.WS)(),
            eq = eR.has('disable_history'),
            eL = eR.has(_) && !eD,
            eB = (0, j.useState)(),
            eO = eB[0],
            eU = eB[1],
            ez = (0, j.useState)(),
            eV = ez[0],
            eH = ez[1],
            e$ = (0, j.useState)(),
            eW = e$[0],
            eG = e$[1],
            eY = (0, j.useRef)(null),
            eJ = (0, j.useRef)(eT.threadId || ''),
            eQ = (0, sV.Z)(),
            eX = eQ.accountStatusResponse,
            eK = eQ.isLoading,
            e0 = (0, P.nR)(),
            e1 = (0, ew.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            e2 = (0, ex.kP)().session,
            e3 = null == e2 ? void 0 : e2.accessToken,
            e4 =
              ((i = (a = {
                enabled: !eq && Boolean(e3) && !eK,
                accessToken: e3,
              }).enabled),
              (c = a.accessToken),
              (u = (0, j.useRef)(Boolean(N.getItem(sX)))),
              (d = (0, P.hz)()),
              (f = (m = (0, sJ.N)({
                queryKey: ['conversations'],
                queryFn: sQ(c, d.has(S)),
                getNextPageParam: function (e) {
                  var n = e.offset + e.limit;
                  return n < e.total ? n : void 0;
                },
                enabled: i,
              })).data),
              (h = m.fetchNextPage),
              (g = m.hasNextPage),
              (p = m.refetch),
              (v = m.isInitialLoading),
              (w = m.isError),
              (0, j.useEffect)(
                function () {
                  var e, n;
                  !w &&
                    (null == f
                      ? void 0
                      : null === (e = f.pages) || void 0 === e
                      ? void 0
                      : null === (n = e[0]) || void 0 === n
                      ? void 0
                      : n.has_missing_conversations) &&
                    !u.current &&
                    I.m.warning(
                      "We've restored conversation history for all ChatGPT users and resolved the underlying issue, which was caused by a significant bug in an open-source library.\n\nIn order to ensure that this issue does not reoccur, users will not be able to retrieve their chat history from the morning of March 20th. We apologize to our users for any difficulties this may cause.",
                      {
                        duration: 0,
                        hasCloseButton: !0,
                        onRemove: function () {
                          N.setItem(sX, !0), (u.current = !0);
                        },
                      },
                    );
                },
                [null == f ? void 0 : f.pages, u, w],
              ),
              (0, j.useMemo)(
                function () {
                  return {
                    conversations:
                      null == f
                        ? void 0
                        : f.pages.reduce(function (e, n) {
                            if (n) {
                              var t = n.items;
                              e.push.apply(e, (0, B.Z)(void 0 === t ? [] : t));
                            }
                            return e;
                          }, []),
                    hasNextPage: g,
                    fetchNextPage: h,
                    refetch: function () {
                      return i && p();
                    },
                    isLoading: v,
                    isError: i && w,
                  };
                },
                [null == f ? void 0 : f.pages, i, h, g, w, v, p],
              )),
            e5 = e4.conversations,
            e6 = e4.hasNextPage,
            e8 = e4.fetchNextPage,
            e7 = e4.refetch,
            e9 = e4.isLoading,
            ne = e4.isError,
            nn = (0, j.useState)(!1),
            nt = nn[0],
            nr = nn[1],
            na =
              ((T = (Z = {
                exempt: !1,
                onRestrictedTermFound: (0, j.useCallback)(
                  function (e) {
                    nr(!0),
                      eE(C.s6.promptUsedRestrictedWords, {
                        threadId: eJ.current,
                        content: e,
                      });
                  },
                  [eE],
                ),
              }).exempt),
              (M = Z.onRestrictedTermFound),
              (F = (R = (0, j.useState)(!1))[0]),
              (E = R[1]),
              {
                hasRestrictedTerms: F,
                checkRestrictedTerms: (0, j.useCallback)(
                  function (e) {
                    var n;
                    return (sK.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !T && n)
                      ? (E(!0), null == M || M(n), !0)
                      : (E(!1), !1);
                  },
                  [T, M],
                ),
              }),
            ni = na.hasRestrictedTerms,
            no = na.checkRestrictedTerms,
            ns = (0, j.useState)(!0),
            nl = ns[0],
            nc = ns[1],
            nu = (0, j.useState)(!1),
            nd = nu[0],
            nm = nu[1],
            nf = (0, j.useState)(!1),
            nh = nf[0],
            ng = nf[1],
            np = (0, j.useState)(!1),
            nx = np[0],
            nv = np[1],
            nb = s$().availableModels,
            nj = aF(),
            ny = G(nb, eT.lastModelUsed, eJ.current),
            nk = ny.modelBackend,
            nC = ny.onChangeModelSetting,
            nw = (0, j.useMemo)(
              function () {
                return nb.find(function (e) {
                  return e.id === nk;
                });
              },
              [nb, nk],
            ),
            nZ = (0, j.useRef)(new eA(eT.thread)),
            nN = (0, j.useState)(eT.currentLeafId),
            nP = nN[0],
            n_ = nN[1],
            nS = (0, j.useState)(!1),
            nI = nS[0],
            nT = nS[1],
            nM = (0, j.useState)(null),
            nR = nM[0],
            nF = nM[1],
            nD = (0, j.useState)({}),
            nE = nD[0],
            nq = nD[1],
            nA = (0, j.useState)(new Set()),
            nL = nA[0],
            nB = nA[1],
            nO = (0, j.useCallback)(function (e) {
              nq(function (n) {
                return n[e], (0, ei.Z)(n, [e].map(es.Z));
              });
            }, []),
            nU = (0, j.useCallback)(
              function () {
                e7(), nH(''), nT(!1), eE(C.s6.newThread);
              },
              [eE, e7],
            ),
            nz = (0, j.useState)(''),
            nV = nz[0],
            nH = nz[1],
            n$ = (0, j.useState)(''),
            nW = n$[0],
            nG = n$[1],
            nY = nW || nV || eT.title,
            nJ = (0, j.useCallback)(
              function (e) {
                ej.ZP.generateTitle(eJ.current, e, nk)
                  .then(function (e) {
                    var n = e.title;
                    nH(n),
                      eE(C.s6.renameThread, {
                        threadId: eJ.current,
                        content: n,
                        model: nk,
                      });
                  })
                  .catch(function (e) {
                    console.error(e);
                  });
              },
              [eE, nk],
            ),
            nQ =
              ((O = eJ),
              (K =
                eR.has('tools3') &&
                (null == nw
                  ? void 0
                  : null === (n = nw.enabledTools) || void 0 === n
                  ? void 0
                  : n.includes('tools3'))
                  ? nj.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (ee = (0, P.hz)()),
              (en = (0, j.useId)()),
              (et = (0, k.WS)()),
              (er = $(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (eo = $(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (ed = (0, j.useRef)(0)),
              (ef = (0, j.useRef)({})),
              (ep = (0, j.useCallback)(
                function (e, n, t, r) {
                  var a,
                    i = r.eventSource,
                    c = function () {
                      setTimeout(function () {
                        nO(t),
                          nB(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete ef.current[t];
                      }, 0);
                    },
                    u = nZ.current,
                    d = t,
                    m = u.getParentId(d),
                    f = 'CompletionUpdated:'.concat(t),
                    h = 'CompletionUpdated:'.concat(m),
                    g = n === o.Continue,
                    p = !0,
                    x = !1,
                    v = u.getMessage(d),
                    b = u.getIsBlockedFromNode(m),
                    j = !1,
                    y = !1,
                    k = sG()(
                      function () {
                        b ||
                          j ||
                          (u.updateNodeMessage(d, v),
                          eh().publish(f, { nodeId: d }));
                      },
                      50,
                      { leading: !0, maxWait: 50 },
                    );
                  function w(e, n, t) {
                    return Z.apply(this, arguments);
                  }
                  function Z() {
                    return (Z = (0, ea.Z)(function (e, n, t) {
                      var r,
                        a,
                        i,
                        o,
                        s,
                        l = arguments;
                      return (0, el.__generator)(this, function (c) {
                        switch (c.label) {
                          case 0:
                            (r = l.length > 3 && void 0 !== l[3] && l[3]),
                              (c.label = 1);
                          case 1:
                            return (
                              c.trys.push([1, 3, , 4]),
                              [
                                4,
                                (function (e) {
                                  var n =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1] &&
                                      arguments[1],
                                    t =
                                      arguments.length > 2
                                        ? arguments[2]
                                        : void 0,
                                    r =
                                      arguments.length > 3
                                        ? arguments[3]
                                        : void 0,
                                    a = eb()(e.length, 0, 4e3),
                                    i = eb()(e.length - a, 0, e.length - 1),
                                    o = n ? e.substring(i, e.length) : e;
                                  return o
                                    ? ej.ZP.runModerationApi(o, t, r)
                                        .then(function (e) {
                                          var n, t;
                                          return {
                                            isBlocked: Boolean(e.blocked),
                                            isFlagged: Boolean(e.flagged),
                                          };
                                        })
                                        .catch(function (e) {
                                          return (
                                            console.error(e),
                                            {
                                              isBlocked: !1,
                                              isFlagged: !1,
                                              error: e,
                                            }
                                          );
                                        })
                                    : Promise.resolve({
                                        isBlocked: !1,
                                        isFlagged: !1,
                                      });
                                })(t, !1, O.current, u.getMessageId(n)),
                              ]
                            );
                          case 2:
                            return (
                              (i = (a = c.sent()).isBlocked),
                              (o = a.isFlagged),
                              (i || o) && (y = !0),
                              i
                                ? ((j = !0),
                                  r || (b = !0),
                                  u.updateNode(n, {
                                    message: {
                                      content: { parts: { $set: [''] } },
                                    },
                                    metadata: {
                                      $set: (0, L.Z)((0, A.Z)({}, eC), {
                                        completionSampleFinishTime: Date.now(),
                                      }),
                                    },
                                  }),
                                  eh().publish(r ? f : h, { nodeId: n }),
                                  et(
                                    r
                                      ? C.s6.completionBlockedByModeration
                                      : C.s6.promptBlockedByModeration,
                                    { threadId: e, id: n },
                                  ))
                                : o
                                ? (u.updateNode(n, { metadata: { $set: ek } }),
                                  eh().publish(r ? f : h, { nodeId: n }),
                                  et(
                                    r
                                      ? C.s6.completionFlaggedByModeration
                                      : C.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n },
                                  ))
                                : r &&
                                  b &&
                                  (u.updateNodeMessage(n, v),
                                  eh().publish(f, { nodeId: n })),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (s = c.sent()),
                              (j = !0),
                              u.updateNode(n, {
                                metadata: {
                                  $set: {
                                    err: 'An error occured',
                                    errType: 'danger',
                                    completionSampleFinishTime: Date.now(),
                                  },
                                },
                              }),
                              et(C.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(s || ''),
                              }),
                              eh().publish(r ? f : h, { nodeId: n }),
                              eh().publish('UnrecoverableError'),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, ea.Z)(function (r) {
                      var a, h, Z, N, P, _, S, I, T, M, R, F, D, E, q, B;
                      return (0, el.__generator)(this, function (U) {
                        switch (U.label) {
                          case 0:
                            if (
                              ((a = r.err),
                              (h = r.finish_reason),
                              (Z = r.message),
                              (N = r.threadId),
                              (a || !Z) && !h)
                            )
                              return (
                                a && console.error(a),
                                (P =
                                  (null == a ? void 0 : a.message) ||
                                  'Something went wrong'),
                                u.updateNode(d, {
                                  message: { $set: v },
                                  metadata: {
                                    $set: {
                                      err: P,
                                      errType: 'danger',
                                      errCode: ((0, sY.T)(a) && a.code) || '',
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                }),
                                eh().publish(f, { nodeId: d }),
                                c(),
                                (0, sY.T)(a) &&
                                  (null == a ? void 0 : a.code) === V &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (er(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn,
                                    ).toISOString(),
                                  ),
                                  setTimeout(function () {
                                    eo();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (p && u.isFirstCompletion) {
                              if (
                                (null == Z ? void 0 : Z.author.role) ===
                                s.System
                              )
                                return u.appendSystemMessageToRoot(Z), [2];
                              if (
                                (null == Z ? void 0 : Z.author.role) === s.User
                              )
                                return [2];
                            }
                            if (
                              (p
                                ? ((p = !1),
                                  (x = u.isFirstCompletion),
                                  N && (O.current = N),
                                  u.updateNodeMessage(d, Z),
                                  x && nU(),
                                  g ||
                                    w(
                                      O.current,
                                      m,
                                      u.getTextFromLastNTurns(m, 1),
                                      !1,
                                    ),
                                  et(C.s6.generateCompletion, {
                                    id: t,
                                    threadId: N,
                                    completionType: n,
                                    eventSource: i,
                                    model: e,
                                  }),
                                  eh().publish('PublishAborter', {
                                    id: t,
                                    aborter: ef.current[t],
                                  }))
                                : Z &&
                                  !g &&
                                  Z.id !== u.getMessageId(d) &&
                                  (k.flush(),
                                  u.addNode(Z.id, Z, d, l.Completion),
                                  n_((d = Z.id)),
                                  (f = 'CompletionUpdated:'.concat(d))),
                              Z && (v = Z),
                              k(),
                              'stop' !== h ||
                                (b ||
                                  j ||
                                  (k.flush(), !y && x && nJ(u.getMessageId(d))),
                                (_ = eA.getTextFromMessage(v)),
                                (S =
                                  u.getTextFromLastNTurns(m, 2) + '\n\n' + _),
                                w(O.current, d, S, !0),
                                j || eh().publish(f, { nodeId: d }),
                                u.updateNode(d, {
                                  metadata: {
                                    $set: (0, L.Z)(
                                      (0, A.Z)({}, u.getMetadata(d)),
                                      {
                                        completionSampleFinishTime: Date.now(),
                                      },
                                    ),
                                  },
                                }),
                                c(),
                                !ee.has('tools3_dev') ||
                                  !(I = (function (e) {
                                    var n,
                                      t,
                                      r,
                                      a =
                                        (null === (n = e.metadata) ||
                                        void 0 === n
                                          ? void 0
                                          : null === (t = n.invoked_plugin) ||
                                            void 0 === t
                                          ? void 0
                                          : t.http_api_call_data) ||
                                        (null === (r = e.metadata) ||
                                        void 0 === r
                                          ? void 0
                                          : r.http_api_call_data);
                                    if (void 0 !== a) {
                                      if (e.author.role !== s.Assistant) {
                                        console.error(
                                          'Refusing to make localhost plugin HTTP call from non-assistant message',
                                          e,
                                        );
                                        return;
                                      }
                                      if (
                                        'object' != typeof a ||
                                        'string' != typeof a.namespace ||
                                        0 === a.namespace.length ||
                                        'string' != typeof a.function_name ||
                                        0 === a.function_name.length ||
                                        'string' !=
                                          typeof a.parent_message_id ||
                                        0 === a.parent_message_id.length ||
                                        'string' != typeof a.url ||
                                        0 === a.url.length ||
                                        'string' != typeof a.method ||
                                        ![
                                          'get',
                                          'post',
                                          'put',
                                          'delete',
                                          'patch',
                                        ].includes(a.method) ||
                                        !Array.isArray(a.qs_params) ||
                                        a.qs_params.some(function (e) {
                                          return (
                                            !Array.isArray(e) ||
                                            2 !== e.length ||
                                            'string' != typeof e[0] ||
                                            'string' != typeof e[1]
                                          );
                                        }) ||
                                        'object' != typeof a.headers ||
                                        Object.keys(a.headers).some(function (
                                          e,
                                        ) {
                                          return 'string' != typeof e;
                                        }) ||
                                        Object.values(a.headers).some(function (
                                          e,
                                        ) {
                                          return 'string' != typeof e;
                                        }) ||
                                        !(
                                          null === a.body ||
                                          ('object' == typeof a.body &&
                                            Object.keys(a.body).every(function (
                                              e,
                                            ) {
                                              return 'string' == typeof e;
                                            }))
                                        ) ||
                                        'string' !=
                                          typeof a.api_function_type ||
                                        !['kwargs', 'chat'].includes(
                                          a.api_function_type,
                                        )
                                      ) {
                                        console.error(
                                          'Refusing to make localhost plugin HTTP call with invalid metadata',
                                          e,
                                        );
                                        return;
                                      }
                                      if (
                                        !/^https?:\/\/localhost:/.test(a.url)
                                      ) {
                                        console.error(
                                          'Refusing to make localhost plugin HTTP call with non-localhost URL',
                                          e,
                                        );
                                        return;
                                      }
                                      return a;
                                    }
                                  })(v))))
                            )
                              return [3, 2];
                            return [
                              4,
                              (function (e) {
                                return tX.apply(this, arguments);
                              })(I),
                            ];
                          case 1:
                            (T = U.sent()),
                              (M = d),
                              (R = !0),
                              (F = !1),
                              (D = void 0);
                            try {
                              for (
                                E = T[Symbol.iterator]();
                                !(R = (q = E.next()).done);
                                R = !0
                              )
                                (B = q.value),
                                  u.addNode(B.id, B, M, l.Completion, {
                                    completionSampleFinishTime: Date.now(),
                                  }),
                                  (M = B.id);
                            } catch (z) {
                              (F = !0), (D = z);
                            } finally {
                              try {
                                R || null == E.return || E.return();
                              } finally {
                                if (F) throw D;
                              }
                            }
                            n_(M), eZ(e, o.Next, M, {}), (U.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [et, nU, nJ, nO, nB, n_, O, nZ],
              )),
              (eZ = (0, j.useCallback)(
                ((ev = (0, ea.Z)(function (e, n, t, r) {
                  var a,
                    i,
                    s,
                    c,
                    u,
                    d,
                    m,
                    f,
                    h,
                    g,
                    p = arguments;
                  return (0, el.__generator)(this, function (x) {
                    switch (x.label) {
                      case 0:
                        return (
                          (a = !(p.length > 4) || void 0 === p[4] || p[4]),
                          (i = p.length > 5 ? p[5] : void 0),
                          (s = nZ.current),
                          (c = 'request-'.concat(en, '-').concat(ed.current++)),
                          nB(function (e) {
                            var n = new Set(e);
                            return n.add(c), n;
                          }),
                          s.addNode(c, '', t, l.Completion),
                          a && n_(c),
                          (d = []),
                          (m = s.getNode(t)),
                          n === o.Next || n === o.Variant
                            ? ((u =
                                (null ===
                                  (f = (h = s.getNode(m.parentId)).message) ||
                                void 0 === f
                                  ? void 0
                                  : f.id) || h.id),
                              d.push(m.message))
                            : (u = m.message.id),
                          [
                            4,
                            ej.ZP.publicApiCompletionStream(
                              {
                                model: e,
                                completionType: n,
                                threadId: O.current || void 0,
                                parentMessageId: u,
                                messages: d,
                                enabledPluginIds: K,
                                variantPurpose: i,
                              },
                              ep(e, n, c, r),
                            ),
                          ]
                        );
                      case 1:
                        return (g = x.sent()), (ef.current[c] = g), [2];
                    }
                  });
                })),
                function (e, n, t, r) {
                  return ev.apply(this, arguments);
                }),
                [nZ, en, nB, n_, O, K, ep],
              ))),
            nX = (0, j.useCallback)(
              function () {
                if (nP) {
                  var e = nZ.current.getBranchFromLeaf(nP);
                  nq(function (n) {
                    var t = (0, A.Z)({}, n);
                    return (
                      e.forEach(function (e) {
                        e.id in t && (t[e.id].abort(), delete t[e.id]);
                      }),
                      t
                    );
                  }),
                    nB(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [nP],
            ),
            nK = (0, j.useCallback)(
              ((eP = (0, ea.Z)(function (e, n, t, r) {
                var a,
                  i,
                  s,
                  l = arguments;
                return (0, el.__generator)(this, function (c) {
                  return (
                    (a = !(l.length > 4) || void 0 === l[4] || l[4]),
                    (i = l.length > 5 ? l[5] : void 0),
                    (s = l.length > 6 && void 0 !== l[6] ? l[6] : 'none'),
                    r && nX(),
                    (e !== o.Continue && no(nZ.current.getTextFromNode(n))) ||
                      nQ(
                        i ? W(eR.has('priority_driven_models_list'), nb) : nk,
                        e,
                        n,
                        t,
                        a,
                        s,
                      ),
                    [2]
                  );
                });
              })),
              function (e, n, t, r) {
                return eP.apply(this, arguments);
              }),
              [no, nQ, eR, nb, nk, nX],
            ),
            n0 = (0, j.useCallback)(function (e, n, t, r) {
              nZ.current.addNode(e, r, n, l.Prompt);
            }, []),
            n1 = (0, j.useCallback)(
              function (e, n, t) {
                var r = n.value;
                n0(e, nP, l.Prompt, r), nK(o.Next, e, t, !0);
              },
              [nP, n0, nK],
            ),
            n2 = (0, j.useMemo)(
              function () {
                var e,
                  n,
                  t = nZ.current.getNode(nP),
                  r = t.type === l.Prompt,
                  a =
                    (null === (e = t.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = t.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== ey;
                return Boolean(r || a) && 0 === nL.size;
              },
              [nL.size, nP],
            ),
            n3 = $(function (e) {
              return e.isoDate;
            }),
            n4 = (0, j.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nZ.current.getNode(nP).metadata) ||
                    void 0 === e
                      ? void 0
                      : e.errCode) === V;
                return n2 && n && n3;
              },
              [nP, n2, n3],
            ),
            n5 = (0, j.useCallback)(
              function (e, n) {
                var t,
                  r =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 'none',
                  i = arguments.length > 4 ? arguments[4] : void 0;
                (t = n2
                  ? nZ.current.getLastValidNode(e).id
                  : nZ.current.getParentPromptNode(e).id),
                  nK(o.Variant, t, n, !1, r, i, a);
              },
              [nK, n2],
            ),
            n6 = (0, j.useCallback)(
              function (e) {
                nK(o.Continue, e, { eventSource: 'mouse' }, !1);
              },
              [nK],
            ),
            n8 = (0, j.useCallback)(
              function (e) {
                var n = nP,
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var i, s = e[Symbol.iterator]();
                    !(t = (i = s.next()).done);
                    t = !0
                  ) {
                    var c = i.value;
                    nZ.current.addNode(
                      c.message.id,
                      c.message,
                      n,
                      l.Completion,
                    ),
                      c.conversation_id && (eJ.current = c.conversation_id),
                      (n = c.message.id);
                  }
                } catch (u) {
                  (r = !0), (a = u);
                } finally {
                  try {
                    t || null == s.return || s.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                n_(n), nK(o.Next, n, {}, !0);
              },
              [nK, nP, n_, eJ],
            ),
            n7 = !!(
              eR.has('tools2') &&
              (null == nw
                ? void 0
                : null === (r = nw.enabledTools) || void 0 === r
                ? void 0
                : r.includes('tools2'))
            ),
            n9 = (0, j.useCallback)(
              ((e_ = (0, ea.Z)(function (e) {
                var n;
                return (0, el.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!n7) return [3, 3];
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        (n = e.currentTarget.href),
                        [4, Promise.resolve().then(t.bind(t, 93949))]
                      );
                    case 1:
                      return [
                        4,
                        r.sent().handleSandboxLinkClick(eR, nw, eJ)(n),
                      ];
                    case 2:
                      r.sent(), (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              })),
              function (e) {
                return e_.apply(this, arguments);
              }),
              [eR, nw, eJ, n7],
            ),
            te = (0, j.useCallback)(
              function (e) {
                n_(nZ.current.getLeafFromNode(e).id), eE(C.s6.changeNode);
              },
              [eE, n_],
            ),
            tn = (0, j.useCallback)(function (e, n) {
              nZ.current.updateNodeText(e, n);
            }, []),
            tt = (0, j.useCallback)(
              function (e, n, t) {
                eE(C.s6.thumbRating, {
                  id: n,
                  threadId: eJ.current,
                  rating: t,
                  model: nk,
                }),
                  eJ.current &&
                    ej.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: eJ.current,
                      rating: t,
                    }),
                  eH(e),
                  eG(n),
                  eU(t);
                var r = nZ.current.getMetadata(e);
                if (
                  (nZ.current.updateNode(e, {
                    metadata: {
                      $set: (0, L.Z)((0, A.Z)({}, r), { rating: t }),
                    },
                  }),
                  'thumbsDown' === t && eL)
                ) {
                  var a,
                    i =
                      null === (a = nZ.current) || void 0 === a
                        ? void 0
                        : a.getConversationTurns(e || 'root');
                  rN(i[i.length - 1]) &&
                    n5(
                      e,
                      { eventSource: 'mouse', intent: 'comparison' },
                      !1,
                      'comparison',
                    );
                }
              },
              [eE, nk, n5, eL],
            ),
            tr = (0, j.useCallback)(
              function (e, n) {
                eO &&
                  eV &&
                  (e || n.length > 0) &&
                  (eE(C.s6.reportResult, {
                    id: eW,
                    threadId: eJ.current,
                    content: e,
                    model: nk,
                    rating: eO,
                    tags: n,
                  }),
                  eJ.current &&
                    eW &&
                    ej.ZP.submitMessageFeedback({
                      message_id: eW,
                      conversation_id: eJ.current,
                      rating: eO,
                      text: e,
                      tags: n,
                    }));
              },
              [eE, nk, eV, eW, eO],
            ),
            ta = (0, j.useCallback)(
              ((eS = (0, ea.Z)(function (e, n, t, r, a, i, o, s, l, c, u) {
                return (0, el.__generator)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        ej.ZP.submitMessageComparisonFeedback({
                          feedback_version: 'comparison_feedback_modal:a:1.0',
                          original_message_id: e,
                          new_message_id: n,
                          rating: t,
                          conversation_id: eJ.current,
                          text: c,
                          tags: u.map(function (e) {
                            return e.replace('feedback-', '');
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: i,
                          compare_step_start_time: o,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o, s, l, c, u) {
                return eS.apply(this, arguments);
              }),
              [],
            ),
            ti = (0, j.useCallback)(
              ((eI = (0, ea.Z)(function (e, n, t, r, a, i, o) {
                return (0, el.__generator)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        ej.ZP.submitMessageComparisonFeedback({
                          feedback_version: 'inline_regen_feedback:a:1.0',
                          original_message_id: e,
                          new_message_id: n,
                          rating: 'none',
                          conversation_id: eJ.current,
                          text: '',
                          tags: [],
                          completion_comparison_rating: t,
                          new_completion_placement: 'not-applicable',
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: i,
                          new_completion_load_end_time: o,
                          frontend_submission_time: Date.now(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, i, o) {
                return eI.apply(this, arguments);
              }),
              [],
            ),
            to = (0, j.useCallback)(
              function (e, n) {
                var t = nZ.current.getConversationTurns(e),
                  r =
                    null == t
                      ? void 0
                      : t[(null == t ? void 0 : t.length) - 1].variantIds,
                  a = (null == r ? void 0 : r.length) === 1;
                n5(
                  e,
                  a
                    ? (0, L.Z)((0, A.Z)({}, n), {
                        intent: 'comparison_implicit',
                      })
                    : n,
                  !0,
                  a ? 'comparison_implicit' : 'none',
                );
              },
              [n5],
            ),
            ts = (0, j.useCallback)(function (e) {
              nZ.current.deleteNode(e);
            }, []),
            tl = (0, j.useCallback)(
              function (e) {
                switch (null == e ? void 0 : e.state) {
                  case 'pending':
                    n0('artifact', 'root', l.Prompt, e.url),
                      n0(
                        'artifact-summary',
                        'artifact',
                        l.Completion,
                        'loading...',
                      ),
                      n_('artifact'),
                      nF(e);
                    break;
                  case 'success':
                    tn('artifact-summary', e.contents),
                      n_('artifact-summary'),
                      nF(e);
                    break;
                  default:
                    nF(e);
                }
              },
              [n0, tn, n_],
            ),
            tc = (0, j.useCallback)(function () {
              nv(function (e) {
                return 'navigation' !== e && 'navigation';
              });
            }, []),
            tu = (0, j.useCallback)(function () {
              nv(function (e) {
                return 'debug' !== e && 'debug';
              });
            }, []),
            td = (0, j.useCallback)(
              function () {
                eE(C.s6.clickSidebarAccountPortalMenuItem), ng(!0);
              },
              [eE, ng],
            ),
            tm = (0, j.useCallback)(
              function () {
                ng(!1);
              },
              [ng],
            ),
            tf = sz(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            th = tf.showAccountPaymentModal,
            tg = tf.setShowAccountPaymentModal,
            tp = (0, j.useCallback)(
              function () {
                tg(!0, function () {
                  eE(C.s6.clickSidebarAccountPaymentMenuItem);
                });
              },
              [eE, tg],
            ),
            tx = (0, j.useCallback)(
              function () {
                tg(!1);
              },
              [tg],
            ),
            tv = (0, j.useCallback)(
              function (e, n) {
                if (nZ.current.isFirstCompletion) {
                  var t,
                    r = nZ.current.getParent(n);
                  (null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errCode) !== ey &&
                    setTimeout(function () {
                      nJ(r.message.id);
                    }, 500);
                }
                nq(function (e) {
                  var t = e[n],
                    r = (0, ei.Z)(e, [n].map(es.Z));
                  return null == t || t.abort(), r;
                }),
                  nB(function (e) {
                    var t = new Set(e);
                    return t.delete(n), t;
                  });
              },
              [nJ],
            ),
            tb = (0, j.useCallback)(function (e, n) {
              var t = n.id,
                r = n.aborter;
              r &&
                nq(function (e) {
                  return (0, L.Z)((0, A.Z)({}, e), (0, q.Z)({}, t, r));
                });
            }, []),
            tj = (0, j.useCallback)(
              function () {
                nq(function (e) {
                  return (
                    Object.values(e).forEach(function (e) {
                      return e.abort();
                    }),
                    {}
                  );
                }),
                  nB(new Set()),
                  n_('root'),
                  nF(null),
                  (nZ.current = new eA()),
                  (eJ.current = ''),
                  nT(!0),
                  e7(),
                  nk === z && eF.replace('/', void 0, { shallow: !0 });
              },
              [nk, e7, eF],
            ),
            ty = (0, j.useCallback)(
              function () {
                ej.ZP.deleteConversations().then(function () {
                  e7();
                }),
                  eF.asPath !== s5 ? eF.replace({ pathname: s5 }) : tj();
              },
              [tj, e7, eF],
            ),
            tk = (0, j.useCallback)(function () {
              nm(!0);
            }, []);
          (0, j.useEffect)(
            function () {
              var e = eh().subscribe('AbortCompletion', tv),
                n = eh().subscribe('PublishAborter', tb),
                t = eh().subscribe('UnrecoverableError', tk);
              return function () {
                eh().unsubscribe(e), eh().unsubscribe(n), eh().unsubscribe(t);
              };
            },
            [tv, tb, tk],
          );
          var tC = (0, j.useMemo)(
              function () {
                return nZ.current.getConversationTurns(nP || 'root');
              },
              [nP],
            ),
            tw = (0, j.useMemo)(
              function () {
                return 0 === tC.length
                  ? nP
                  : eA.getRequestIdFromConversationTurn(tC[tC.length - 1]);
              },
              [tC, nP],
            ),
            tZ = (0, j.useState)(''),
            tN = tZ[0],
            tP = tZ[1],
            t_ = (0, j.useCallback)(function () {
              nc(!0), N.setItem('oai/librarian/hasSeenWarning', 'true');
            }, []),
            tS = (0, j.useCallback)(function () {
              nr(!1);
            }, []),
            tI = (0, j.useMemo)(
              function () {
                if (!eR.has('can_continue')) return !1;
                if (!nE[nP]) {
                  var e = nZ.current.getHasErrorFromNode(nP),
                    n = nZ.current.isMessageIncomplete(nP);
                  return !e && n;
                }
                return !1;
              },
              [nE, nP, eR],
            ),
            tT = void 0 !== e0 && e0,
            tM = (0, sN().getHasSeenOnboardingDate)(),
            tR = tM && new Date('2023-01-11') > tM && !localStorage.getItem(s4);
          (0, j.useEffect)(
            function () {
              tR &&
                (I.m.success(
                  'Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.',
                  { hasCloseButton: !0, duration: 0 },
                ),
                localStorage.setItem(s4, 'true'));
            },
            [tR],
          );
          var tF = (0, j.useMemo)(
              function () {
                return (0, x.jsx)(rQ, {
                  items: e5 || [],
                  activeId: nI ? '' : eJ.current,
                  hasNextPage: Boolean(e6),
                  onNextPage: e8,
                  onNewThread: tj,
                  onRefetchHistory: e7,
                  onUpdateUserModifiedTitle: nG,
                  userModifiedTitle: nW,
                  newChatName: nV,
                  isLoading: e9,
                  isError: ne,
                });
              },
              [e5, nI, e6, e8, tj, e7, nW, nV, e9, ne],
            ),
            tD = tC.length < 2,
            tE = oz();
          return (0, x.jsxs)(s8, {
            children: [
              (0, x.jsx)(em(), {
                children: (0, x.jsx)('title', { children: nY }),
              }),
              !nl &&
                (0, x.jsx)(
                  y.ZP,
                  {
                    isOpen: !0,
                    onModalClose: t_,
                    icon: ec.Z,
                    title:
                      'Do not share sensitive materials with this application',
                    primaryButton: (0, x.jsx)(y.mH, {
                      onClick: t_,
                      title: 'Acknowledge',
                    }),
                    type: 'danger',
                  },
                  'OnboardingModal',
                ),
              ni &&
                nt &&
                (0, x.jsx)(
                  y.ZP,
                  {
                    isOpen: !0,
                    onModalClose: tS,
                    icon: eg.U0j,
                    title: 'This prompt may violate our content policy.',
                    primaryButton: (0, x.jsx)(y.mH, {
                      onClick: tS,
                      title: 'Acknowledge',
                    }),
                    type: 'danger',
                  },
                  'RestrictedTerms',
                ),
              Boolean(eO) &&
                (0, x.jsx)(rP, {
                  treeRef: nZ,
                  ratingModalNodeId: eV,
                  ratingModalOpen: eO,
                  setRatingModalOpen: eU,
                  handleSubmitFeedback: tr,
                  setCurrentLeafId: n_,
                  onHandleChangeFeedbackComparisonRating: ta,
                  modelBackend: nk,
                  feedbackTextareaRef: eY,
                  threadIdRef: eJ,
                  activeRequests: nL,
                  onChangeItemInView: te,
                  onRequestMoreCompletions: n5,
                  onUpdateNode: tn,
                  onChangeRating: tt,
                  onDeleteNode: ts,
                  onRequestCompletion: nK,
                  onSandboxLinkClick: n9,
                }),
              eD
                ? (0, x.jsx)(aX, {
                    onClose: tc,
                    sidebarOpen: 'navigation' === nx,
                    onClickAccountPayment: tp,
                    showAccountPaymentMenuItem: !tT && e1,
                    onClickCustomerPortal: td,
                    showCustomerPortalMenuItem: tT,
                    onDeleteHistory: ty,
                    showDeleteHistory: Boolean(null == e5 ? void 0 : e5.length),
                    onNewThread: tj,
                    toggleDebugSidebar: tu,
                    children: tF,
                  })
                : (0, x.jsx)(aQ, {
                    onClickAccountPayment: tp,
                    showAccountPaymentMenuItem: !tT && e1,
                    onClickCustomerPortal: td,
                    showCustomerPortalMenuItem: tT,
                    onDeleteHistory: ty,
                    showDeleteHistory: Boolean(null == e5 ? void 0 : e5.length),
                    onNewThread: tj,
                    toggleDebugSidebar: tu,
                    children: tF,
                  }),
              (0, x.jsxs)('div', {
                className: 'flex h-full max-w-full flex-1 flex-col',
                children: [
                  eD &&
                    (0, x.jsx)(aK, {
                      onNewThread: tj,
                      onClickOpenSidebar: tc,
                      title: eT.title,
                      newChatName: nV,
                    }),
                  (0, x.jsxs)(s7, {
                    className: 'flex-1 ',
                    children: [
                      (0, x.jsx)(s9, {
                        children: (0, x.jsx)(sg, {
                          children: (0, x.jsx)(sl, {
                            isLoading: eM || (eK && !eX),
                            onChangeItemInView: te,
                            onRequestMoreCompletions: n5,
                            onUpdateNode: tn,
                            onChangeRating: tt,
                            onDeleteNode: ts,
                            onRequestCompletion: nK,
                            onChangeCurrentPrompt: tP,
                            onSandboxLinkClick: n9,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              ti,
                            threadId: eJ.current,
                            treeRef: nZ,
                            conversationTurns: tC,
                            activeRequests: nL,
                            isProcessingArtifact:
                              (null == nR ? void 0 : nR.state) === 'pending',
                            onChangeModelSetting: nC,
                            availableModels: nb,
                            currentThreadModel: eT.lastModelUsed,
                            canShowThreadSettings:
                              eR.has('model_switcher') && nb.length > 1,
                          }),
                        }),
                      }),
                      (0, x.jsxs)(le, {
                        children: [
                          eR.has('model_preview') &&
                            tD &&
                            nk === z &&
                            (0, x.jsx)('div', {
                              className:
                                'stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl',
                              children: tE.textareaDisclaimer,
                            }),
                          !n4 &&
                            (0, x.jsx)(is, {
                              currentLeafId: nP,
                              currentRequestId: tw,
                              threadId: eJ.current,
                              currentPrompt: tN,
                              onChangeCurrentPrompt: tP,
                              onRequestMoreCompletions: to,
                              onCreateNewCompletion: n1,
                              onAbortCompletion: tv,
                              onContinueGenerating: n6,
                              onFileUpload: n8,
                              modelBackend: nk,
                              canUpload: n7,
                              isCompletionInProgress: nL.has(tw),
                              onUpdateArtifactStatus: tl,
                              treeRef: nZ,
                              artifact: nR,
                              className: (0, eu.Z)(
                                'stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl',
                              ),
                              shouldRetry: n2,
                              canContinue: tI,
                              disabled: !nb.length,
                              canPause: Boolean(nE[tw]),
                            }),
                          (0, x.jsx)('div', {
                            className:
                              'px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6',
                            children: e0
                              ? (0, x.jsxs)('span', {
                                  children: [
                                    (0, x.jsx)('a', {
                                      href: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
                                      target: '_blank',
                                      rel: 'noreferrer',
                                      className: 'underline',
                                      children: 'ChatGPT Mar 23 Version',
                                    }),
                                    '. ChatGPT may produce inaccurate information about people, places, or facts.',
                                  ],
                                })
                              : (0, x.jsxs)('span', {
                                  children: [
                                    (0, x.jsx)('a', {
                                      href: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes',
                                      target: '_blank',
                                      rel: 'noreferrer',
                                      className: 'underline',
                                      children: 'ChatGPT Mar 23 Version',
                                    }),
                                    '. Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.',
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              eR.has('debug') &&
                (0, x.jsx)(ah, {
                  threadId: eJ.current,
                  treeRef: nZ,
                  currentLeafId: nP,
                  isOpen: 'debug' === nx,
                  slideOver: eD,
                  onClose: tc,
                }),
              eR.has('tools3_dev') && (0, x.jsx)(aA, { slideOver: eD }),
              e1 && (0, x.jsx)(sO.Z, { isOpen: th, onClose: tx }),
              tT && (0, x.jsx)(sB, { isOpen: nh, onClose: tm }),
              nd &&
                (0, x.jsx)(
                  y.ZP,
                  {
                    onModalClose: b(),
                    isOpen: !0,
                    icon: ec.Z,
                    title: 'Something went wrong',
                    description:
                      "We're sorry, but something went wrong. Please try again later.",
                    primaryButton: (0, x.jsx)(y.mH, {
                      onClick: function () {
                        tj(), nm(!1);
                      },
                      title: 'Reset thread',
                    }),
                    type: 'danger',
                  },
                  'UnrecoverableErrorModal',
                ),
            ],
          });
        },
        s8 = ep.Z.div(s0()),
        s7 = ep.Z.main(s1()),
        s9 = ep.Z.div(s2()),
        le = ep.Z.div(s3());
      t(49674);
      var ln = t(44675);
      ''.concat(ln.env.INTERNAL_API_URL, '/api');
      var lt = t(49690);
      function lr(e) {
        var n,
          t,
          r,
          a,
          i,
          o,
          s,
          l,
          c,
          u,
          d,
          m,
          f,
          h,
          g = e.threadId,
          p = void 0 === g ? '' : g,
          v = e.user,
          w = e.isUserInCanPayGroup,
          Z = e.serviceStatus,
          N = e.serviceAnnouncement,
          _ = (0, j.useState)(!1),
          S = _[0],
          T = _[1],
          R = sN().getHasSeenOnboardingDate,
          F = (0, P.nR)(),
          E =
            ((r = (t = { threadId: p }).threadId),
            (a = (0, D.useRouter)()),
            (i = (0, ex.kP)().session),
            (o = s$().availableModels),
            (s = aF()),
            (l = G(o, null, r).modelBackend),
            (c = (0, j.useMemo)(
              function () {
                return o.find(function (e) {
                  return e.id === l;
                });
              },
              [o, l],
            )),
            (d = (u = (0, tD.a)(
              ['conversation', r],
              function () {
                return ej.ZP.getConversation(
                  r,
                  null == i ? void 0 : i.accessToken,
                );
              },
              {
                enabled: Boolean(r && (null == i ? void 0 : i.accessToken)),
                onError: function () {
                  a.replace('/'),
                    I.m.danger('Unable to load conversation '.concat(r));
                },
              },
            )).data),
            (m = u.isLoading),
            (f = (0, j.useMemo)(
              function () {
                if (d) {
                  var e,
                    n,
                    t = (function (e) {
                      var n,
                        t =
                          null ===
                            (n = Object.values(e.mapping).find(function (e) {
                              return null === e.parent;
                            })) || void 0 === n
                            ? void 0
                            : n.id,
                        r = new Set(),
                        a = new Set();
                      (e.moderation_results || []).forEach(function (e) {
                        e.blocked
                          ? a.add(e.message_id)
                          : e.flagged && r.add(e.message_id);
                      });
                      var i = Object.keys(e.mapping).reduce(function (n, t) {
                        var i,
                          o = e.mapping[t],
                          s = o.parent,
                          l = o.children,
                          c = (0, ei.Z)(o, ['parent', 'children']),
                          u = e.mapping[t].message || eA.createRootMessage();
                        return (
                          a.has(u.id) ? (i = eC) : r.has(u.id) && (i = ek),
                          (n[t] = (0, A.Z)(
                            (0, L.Z)((0, A.Z)({}, c), {
                              message: u,
                              children: l || [],
                              parentId: s || '',
                              type: eD[u.author.role],
                            }),
                            i && { metadata: i },
                          )),
                          n
                        );
                      }, {});
                      return {
                        rootId: t,
                        mapping: i,
                        currentLeafId: e.current_node,
                      };
                    })(d);
                  return {
                    thread: t.mapping || eA.createTree(),
                    currentLeafId: t.currentLeafId || t.rootId || 'root',
                    threadId: a.query.chatId,
                    title: d.title || null,
                    lastModelUsed: (function e(n, t) {
                      var r,
                        a,
                        i = n[t];
                      return (
                        null == i
                          ? void 0
                          : null === (r = i.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? i.message.metadata.model_slug
                        : (null == i ? void 0 : i.parentId)
                        ? e(n, i.parentId)
                        : (console.log('No model found in conversation tree'),
                          null);
                    })(t.mapping, t.currentLeafId),
                    pluginIds: d.plugin_ids || [],
                  };
                }
                return (
                  (n = (
                    null == c
                      ? void 0
                      : null === (e = c.enabledTools) || void 0 === e
                      ? void 0
                      : e.includes('tools3')
                  )
                    ? s.map(function (e) {
                        return e.id;
                      })
                    : []),
                  {
                    thread: eA.createTree(),
                    currentLeafId: 'root',
                    threadId: null,
                    title: 'New chat',
                    lastModelUsed: null,
                    pluginIds: n || [],
                  }
                );
              },
              [d, c, s, a.query.chatId],
            )),
            (0, j.useMemo)(
              function () {
                return { threadData: f, isLoading: Boolean(r && m) };
              },
              [m, f, r],
            )),
          q = E.threadData,
          B = E.isLoading,
          O = (0, sV.Z)(),
          U = O.accountStatusResponse,
          z = O.isLoading,
          V =
            ((h = (0, as.NL)()),
            (0, j.useCallback)(
              function (e) {
                h.removeQueries(['conversation', e]);
              },
              [h],
            )),
          H = (0, ew.g)(function (e) {
            return e.updateFlagValue;
          });
        (0, j.useEffect)(
          function () {
            return function () {
              return V(p);
            };
          },
          [p],
        ),
          (0, j.useEffect)(
            function () {
              void 0 !== w && H('isUserInCanPayGroup', w);
            },
            [H, w],
          ),
          (0, j.useEffect)(
            function () {
              (null == Z ? void 0 : Z.type) &&
                void 0 !== F &&
                !F &&
                I.m.warning(Z.message, { hasCloseButton: !0, duration: 5 });
            },
            [F, null == Z ? void 0 : Z.message, null == Z ? void 0 : Z.type],
          );
        var $ = (0, j.useMemo)(function () {
            return { app: C.VY, origin: 'chat' };
          }, []),
          W = (0, P.mA)(function (e) {
            return {
              accountPlan: e.accountPlan,
              updateAccountPlanWithResponse: e.updateAccountPlanWithResponse,
            };
          }),
          Y = W.accountPlan,
          J = W.updateAccountPlanWithResponse;
        (0, lt.Z)('ChatGPT', v, $, null == U ? void 0 : U.account_plan, {}, !z),
          (0, j.useEffect)(
            function () {
              if (!z && U) {
                var e;
                (null == Y ? void 0 : Y.hasPaidSubscription) !==
                  (null === (e = U.account_plan) || void 0 === e
                    ? void 0
                    : e.is_paid_subscription_active) &&
                  U &&
                  J(U);
              }
            },
            [z, J, U, Y],
          ),
          (0, j.useEffect)(
            function () {
              T(!R());
            },
            [R],
          );
        var X = (0, j.useMemo)(
            function () {
              return new Set((null == q ? void 0 : q.pluginIds) || []);
            },
            [null == q ? void 0 : q.pluginIds],
          ),
          K = (0, j.useRef)(!1);
        return (
          (0, j.useEffect)(
            function () {
              if (!z && U) {
                var e,
                  n = (
                    null === (e = U.account_plan) || void 0 === e
                      ? void 0
                      : e.is_paid_subscription_active
                  )
                    ? N.paid
                    : N.public;
                if (
                  (null == n ? void 0 : n.type) &&
                  (null == n ? void 0 : n.message) &&
                  !K.current
                ) {
                  K.current = !0;
                  var t = n.message,
                    r = { hasCloseButton: !0, duration: 15 };
                  switch (n.type) {
                    case 'danger':
                      I.m.danger(t, r);
                      break;
                    case 'info':
                      I.m.info(t, r);
                      break;
                    case 'warning':
                      I.m.warning(t, r);
                  }
                }
              }
            },
            [N, z, U],
          ),
          (0, x.jsx)(k.Af.Provider, {
            value: $,
            children: (0, x.jsxs)(tF.A.Provider, {
              value: X,
              children: [
                (0, x.jsx)(y.ZP, {
                  isOpen: S,
                  onModalClose: b(),
                  type: 'success',
                  title: '',
                  primaryButton: void 0,
                  children: (0, x.jsx)(sP, {
                    onClose: function () {
                      return T(!1);
                    },
                  }),
                }),
                !z &&
                  U &&
                  (0, x.jsx)(Q, {
                    isUserPaid:
                      null === (n = U.account_plan) || void 0 === n
                        ? void 0
                        : n.is_paid_subscription_active,
                    hasSeenOnboardingDate: R(),
                  }),
                (0, x.jsx)(M, {}),
                (0, x.jsx)(
                  s6,
                  { initialData: q, isLoading: B },
                  q.threadId || 'new',
                ),
              ],
            }),
          })
        );
      }
    },
    93949: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          SANDBOX_LINK_PREFIX: function () {
            return u;
          },
          default: function () {
            return m;
          },
          handleSandboxLinkClick: function () {
            return d;
          },
        });
      var r = t(61706),
        a = t(45813),
        i = t(35250),
        o = t(70079),
        s = t(33264);
      function l(e) {
        var n = e.accept,
          t = e.children,
          r = e.onFilePicked,
          a = (0, o.useRef)(null),
          s = (0, o.useCallback)(function () {
            var e;
            null === (e = a.current) || void 0 === e || e.click();
          }, []),
          l = (0, o.useCallback)(
            function (e) {
              var n,
                t =
                  null === (n = e.target.files) || void 0 === n ? void 0 : n[0];
              t && (r(t), (e.target.value = ''));
            },
            [r],
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            'function' == typeof t
              ? t({ onClick: s })
              : (0, i.jsx)('span', { role: 'button', onClick: s, children: t }),
            (0, i.jsx)('input', {
              type: 'file',
              accept: n,
              ref: a,
              className: 'hidden',
              onChange: l,
            }),
          ],
        });
      }
      var c = t(74516),
        u = 'sandbox:';
      function d(e, n, t) {
        var i;
        return (
          (i = (0, r.Z)(function (r) {
            var i, o, l, u, d, m, f, h, g, p;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (
                    !(
                      e.has('tools2') &&
                      (null == n
                        ? void 0
                        : null === (i = n.enabledTools) || void 0 === i
                        ? void 0
                        : i.includes('tools2'))
                    )
                  )
                    return [2];
                  return (
                    (o = r.substring(8)), [4, s.ZP.checkFile(t.current, o)]
                  );
                case 1:
                  if ((l = a.sent()).exists) return [3, 2];
                  return c.m.warning('File does not exist: '.concat(o)), [3, 6];
                case 2:
                  if (!l.too_large) return [3, 3];
                  return (
                    (u = (l.size / 1024 / 1024).toFixed(0)),
                    (d = '100'),
                    c.m.warning(
                      'File is larger than download limit: '
                        .concat(u, ' MB vs ')
                        .concat(d, ' MB'),
                    ),
                    [3, 6]
                  );
                case 3:
                  return [4, s.ZP.fetchFileForDownload(t.current, o)];
                case 4:
                  return [4, a.sent().blob()];
                case 5:
                  (f = a.sent()),
                    (h = window.URL.createObjectURL(f)),
                    ((g = document.createElement('a')).href = h),
                    (p = o.split('/').pop()),
                    (g.download = p),
                    g.click(),
                    (a.label = 6);
                case 6:
                  return [2];
              }
            });
          })),
          function (e) {
            return i.apply(this, arguments);
          }
        );
      }
      function m(e) {
        var n,
          t = e.onFileUpload,
          u = e.threadId,
          d = e.currentLeafId,
          m = e.modelBackend,
          f = e.disabled,
          h = e.children,
          g = e.treeRef,
          p = (0, o.useState)(!1),
          x = p[0],
          v = p[1],
          b = (0, o.useCallback)(
            ((n = (0, r.Z)(function (e) {
              var n, r, i, o, l, f;
              return (0, a.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    v(!0), (a.label = 1);
                  case 1:
                    if ((a.trys.push([1, , 3, 4]), e.size > 104857600))
                      return (
                        (r = (e.size / 1024 / 1024).toFixed(0)),
                        (i = '100'),
                        c.m.warning(
                          'File is larger than upload limit: '
                            .concat(r, ' MB vs ')
                            .concat(i, ' MB'),
                          { hasCloseButton: !0, duration: 15 },
                        ),
                        [2]
                      );
                    return (
                      (l =
                        (null === (n = (o = g.current.getNode(d)).message) ||
                        void 0 === n
                          ? void 0
                          : n.id) || o.id),
                      [4, s.ZP.upload(l, u, m, e)]
                    );
                  case 2:
                    return t(a.sent()), [3, 4];
                  case 3:
                    return v(!1), [7];
                  case 4:
                    return [2];
                }
              });
            })),
            function (e) {
              return n.apply(this, arguments);
            }),
            [t, u, d, m, g],
          );
        return f || x
          ? h(x)
          : (0, i.jsx)(l, { onFilePicked: b, children: h(x) });
      }
    },
    11699: function (e, n, t) {
      'use strict';
      t.d(n, {
        Ui: function () {
          return m;
        },
        _G: function () {
          return r;
        },
        dD: function () {
          return u;
        },
        dQ: function () {
          return f;
        },
        lj: function () {
          return d;
        },
      });
      var r,
        a,
        i,
        o = t(33861),
        s = t(70079);
      ((i = r || (r = {})).Small = 'small'),
        (i.Medium = 'medium'),
        (i.Large = 'large'),
        (i.XLarge = 'xlarge'),
        (i.Full = 'full');
      var l =
        ((a = {}),
        (0, o.Z)(a, r.Small, 640),
        (0, o.Z)(a, r.Medium, 768),
        (0, o.Z)(a, r.Large, 1024),
        (0, o.Z)(a, r.XLarge, 1280),
        (0, o.Z)(a, r.Full, 1536),
        a);
      function c(e) {
        var n = function () {
            i(t(e));
          },
          t = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, s.useState)(t(e)),
          a = r[0],
          i = r[1];
        return (
          (0, s.useEffect)(
            function () {
              var t = window.matchMedia(e);
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener('change', n),
                function () {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener('change', n);
                }
              );
            },
            [e],
          ),
          a
        );
      }
      function u() {
        return c('(max-width: '.concat(l[r.Small], 'px)'));
      }
      function d() {
        return c('(max-width: '.concat(l[r.Medium], 'px)'));
      }
      function m() {
        return c('(max-width: '.concat(l[r.Large], 'px)'));
      }
      function f() {
        var e = u(),
          n = d(),
          t = m(),
          a = c('(max-width: '.concat(l[r.XLarge], 'px)'));
        return e ? r.Small : n ? r.Medium : t ? r.Large : a ? r.XLarge : r.Full;
      }
    },
    41402: function () {},
  },
]);
