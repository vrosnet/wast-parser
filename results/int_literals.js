{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          name: 'i32.test',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0x0bAdD00D'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.umax',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0xffffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.smax',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0x7fffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.neg_smax',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '-0x7fffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.smin',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '-0x80000000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.alt_smin',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0x80000000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.inc_smin',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'const',
                type: 'i32',
                init: '-0x80000000'
              },
              right: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'i32.neg_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '-0x0'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.test',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0x0CABBA6E0ba66a6e'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.umax',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0xffffffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.smax',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0x7fffffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.neg_smax',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '-0x7fffffffffffffff'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.smin',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '-0x8000000000000000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.alt_smin',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '0x8000000000000000'
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.inc_smin',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'const',
                type: 'i64',
                init: '-0x8000000000000000'
              },
              right: {
                kind: 'const',
                type: 'i64',
                init: '1'
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'i64.neg_zero',
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [{
            kind: 'return',
            expr: {
              kind: 'const',
              type: 'i64',
              init: '-0x0'
            }
          }]
        },
        {
          kind: 'export',
          name: 'i32.test'
        },
        {
          kind: 'export',
          name: 'i32.umax'
        },
        {
          kind: 'export',
          name: 'i32.smax'
        },
        {
          kind: 'export',
          name: 'i32.neg_smax'
        },
        {
          kind: 'export',
          name: 'i32.smin'
        },
        {
          kind: 'export',
          name: 'i32.alt_smin'
        },
        {
          kind: 'export',
          name: 'i32.inc_smin'
        },
        {
          kind: 'export',
          name: 'i32.neg_zero'
        },
        {
          kind: 'export',
          name: 'i64.test'
        },
        {
          kind: 'export',
          name: 'i64.umax'
        },
        {
          kind: 'export',
          name: 'i64.smax'
        },
        {
          kind: 'export',
          name: 'i64.neg_smax'
        },
        {
          kind: 'export',
          name: 'i64.smin'
        },
        {
          kind: 'export',
          name: 'i64.alt_smin'
        },
        {
          kind: 'export',
          name: 'i64.inc_smin'
        },
        {
          kind: 'export',
          name: 'i64.neg_zero'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.test',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '195940365'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.umax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.neg_smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.alt_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483648'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.inc_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '-2147483647'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32.neg_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.test',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '913028331277281902'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.umax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.neg_smax',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.alt_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775808'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.inc_smin',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '-9223372036854775807'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64.neg_zero',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '0'
      }
    }
  ]
}