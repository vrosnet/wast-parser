{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'foo'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '0'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'foo'
          },
          id: {
            kind: 'identifier',
            name: 'foo'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'foo',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'foo'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'foo'
          },
          id: {
            kind: 'identifier',
            name: 'foo'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'foo',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.91p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: ''
          },
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'malloc'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.92p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'malloc'
          },
          id: {
            kind: 'identifier',
            name: 'malloc'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: '_malloc'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.93p+2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: '__malloc'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.94p+2'
          }]
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.95p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '_malloc'
          },
          id: {
            kind: 'identifier',
            name: '_malloc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '__malloc'
          },
          id: {
            kind: 'identifier',
            name: '__malloc'
          }
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.96p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '~!@#$%^&*()_+\`-={}|[]\\:\";\'<>?,./ '
          },
          id: {
            kind: 'literal',
            value: 5,
            raw: '5'
          }
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.97p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '0'
          },
          id: {
            kind: 'literal',
            value: 6,
            raw: '6'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: '_'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.98p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '_'
          },
          id: {
            kind: 'identifier',
            name: '_'
          }
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x1.99p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '$'
          },
          id: {
            kind: 'literal',
            value: 8,
            raw: '8'
          }
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x2.00p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: '@'
          },
          id: {
            kind: 'literal',
            value: 9,
            raw: '9'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'NaN'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x2.01p+2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'Infinity'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x2.02p+2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'if'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'const',
            type: 'f32',
            init: '0x2.03p+2'
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'NaN'
          },
          id: {
            kind: 'identifier',
            name: 'NaN'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'Infinity'
          },
          id: {
            kind: 'identifier',
            name: 'Infinity'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'if'
          },
          id: {
            kind: 'identifier',
            name: 'if'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.91p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'malloc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.92p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '_malloc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.93p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '__malloc',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.94p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '~!@#$%^&*()_+\`-={}|[]\\:\";\'<>?,./ ',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.96p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '0',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.97p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '_',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.98p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '$',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x1.99p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: '@',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x2.00p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'NaN',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x2.01p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'Infinity',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x2.02p+2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '0x2.03p+2'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'import',
          id: null,
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null
        },
        {
          kind: 'import',
          id: null,
          modName: {
            kind: 'literal',
            value: 'spectest'
          },
          funcName: {
            kind: 'literal',
            value: 'print'
          },
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              type: 'i32'
            }]
          }],
          result: null
        },
        {
          kind: 'func',
          id: null,
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                type: 'i32'
              }]
            }
          ],
          result: null,
          local: [],
          body: [
            {
              kind: 'call_import',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              },
              exprs: [{
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                }
              }]
            },
            {
              kind: 'call_import',
              id: {
                kind: 'literal',
                value: 1,
                raw: '1'
              },
              exprs: [{
                kind: 'get_local',
                id: {
                  kind: 'literal',
                  value: 1,
                  raw: '1'
                }
              }]
            }
          ]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'print32'
          },
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          }
        }
      ]
    },
    {
      kind: 'invoke',
      name: 'print32',
      body: [
        {
          kind: 'const',
          type: 'i32',
          init: '42'
        },
        {
          kind: 'const',
          type: 'i32',
          init: '123'
        }
      ]
    }
  ]
}
