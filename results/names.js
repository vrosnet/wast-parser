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
          type: null,
          param: [],
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
          id: {
            kind: 'identifier',
            id: 'foo'
          },
          name: 'foo'
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
          type: null,
          param: [],
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
          id: {
            kind: 'identifier',
            id: 'foo'
          },
          name: 'foo'
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
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 0,
            raw: '0'
          },
          name: ''
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'malloc'
          },
          type: null,
          param: [],
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
          id: {
            kind: 'identifier',
            id: 'malloc'
          },
          name: 'malloc'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: '_malloc'
          },
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          id: {
            kind: 'identifier',
            id: '_malloc'
          },
          name: '_malloc'
        },
        {
          kind: 'export',
          id: {
            kind: 'identifier',
            id: '__malloc'
          },
          name: '__malloc'
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 5,
            raw: '5'
          },
          name: '~!@#$%^&*()_+\`-={}|[]\\:\";\'<>?,./ '
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 6,
            raw: '6'
          },
          name: '0'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: '_'
          },
          type: null,
          param: [],
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
          id: {
            kind: 'identifier',
            id: '_'
          },
          name: '_'
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 8,
            raw: '8'
          },
          name: '$'
        },
        {
          kind: 'func',
          id: null,
          type: null,
          param: [],
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
          id: {
            kind: 'literal',
            value: 9,
            raw: '9'
          },
          name: '@'
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
    }
  ]
}
