;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    144: function(t, e, r) {
      'use strict'
      r.r(e)
      var n = {
          props: {
            title: { type: String, required: !0 },
            icon: { type: String, required: !0 }
          }
        },
        c = r(22),
        l = {
          name: 'HomePage',
          components: {
            Card: Object(c.a)(
              n,
              function() {
                var t = this.$createElement,
                  e = this._self._c || t
                return e('div', { staticClass: 'column' }, [
                  e('div', { staticClass: 'card' }, [
                    e('header', { staticClass: 'card-header' }, [
                      e(
                        'p',
                        { staticClass: 'card-header-title has-text-grey' },
                        [
                          this._v(
                            '\n        ' + this._s(this.title) + '\n      '
                          )
                        ]
                      )
                    ]),
                    this._v(' '),
                    e('div', { staticClass: 'card-content' }, [
                      e(
                        'div',
                        { staticClass: 'content has-text-centered' },
                        [
                          e('b-icon', {
                            attrs: {
                              icon: this.icon,
                              size: 'is-large',
                              type: 'is-primary'
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    this._v(' '),
                    e('footer', { staticClass: 'card-footer' }, [
                      e('div', { staticClass: 'card-footer-item' }, [
                        e('span', [this._t('default')], 2)
                      ])
                    ])
                  ])
                ])
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          }
        },
        o = Object(c.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r('section', { staticClass: 'section' }, [
              r(
                'div',
                { staticClass: 'columns is-mobile' },
                [
                  r(
                    'card',
                    { attrs: { title: 'Free', icon: 'github-circle' } },
                    [
                      t._v('\n      Open source on '),
                      r(
                        'a',
                        { attrs: { href: 'https://github.com/buefy/buefy' } },
                        [t._v(' GitHub')]
                      )
                    ]
                  ),
                  t._v(' '),
                  r(
                    'card',
                    { attrs: { title: 'Responsive', icon: 'cellphone-link' } },
                    [
                      r('b', { staticClass: 'has-text-grey' }, [t._v('Every')]),
                      t._v(' component is responsive\n    ')
                    ]
                  ),
                  t._v(' '),
                  r(
                    'card',
                    { attrs: { title: 'Modern', icon: 'alert-decagram' } },
                    [
                      t._v('\n      Built with '),
                      r('a', { attrs: { href: 'https://vuejs.org/' } }, [
                        t._v('Vue.js')
                      ]),
                      t._v(' and\n      '),
                      r('a', { attrs: { href: 'http://bulma.io/' } }, [
                        t._v('Bulma')
                      ])
                    ]
                  ),
                  t._v(' '),
                  r(
                    'card',
                    {
                      attrs: {
                        title: 'Lightweight',
                        icon: 'arrange-bring-to-front'
                      }
                    },
                    [t._v('\n      No other internal dependency\n    ')]
                  )
                ],
                1
              )
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = o.exports
    }
  }
])
