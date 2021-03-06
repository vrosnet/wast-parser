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
            name: 'add'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'sub'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'mul'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'div'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'sqrt'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'sqrt',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'min'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'min',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'max'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'max',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'ceil'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'floor'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'trunc'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'nearest'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'abs'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'abs',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'neg'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f32',
            operator: 'neg',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'copysign'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f32'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f32'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f32',
            operator: 'copysign',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'add'
          },
          id: {
            kind: 'identifier',
            name: 'add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'sub'
          },
          id: {
            kind: 'identifier',
            name: 'sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'mul'
          },
          id: {
            kind: 'identifier',
            name: 'mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'div'
          },
          id: {
            kind: 'identifier',
            name: 'div'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'sqrt'
          },
          id: {
            kind: 'identifier',
            name: 'sqrt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'min'
          },
          id: {
            kind: 'identifier',
            name: 'min'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'max'
          },
          id: {
            kind: 'identifier',
            name: 'max'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'ceil'
          },
          id: {
            kind: 'identifier',
            name: 'ceil'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'floor'
          },
          id: {
            kind: 'identifier',
            name: 'floor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'trunc'
          },
          id: {
            kind: 'identifier',
            name: 'trunc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'nearest'
          },
          id: {
            kind: 'identifier',
            name: 'nearest'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'abs'
          },
          id: {
            kind: 'identifier',
            name: 'abs'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'neg'
          },
          id: {
            kind: 'identifier',
            name: 'neg'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'copysign'
          },
          id: {
            kind: 'identifier',
            name: 'copysign'
          }
        }
      ]
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0x1p0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nearest',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0x40f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f32',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f32',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f32',
            init: '-0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: '-0xf1e2'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'add'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'sub'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'mul'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'mul',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'div'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'div',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'sqrt'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'sqrt',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'min'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'min',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'max'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'max',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'ceil'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'ceil',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'floor'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'floor',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'trunc'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'trunc',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'nearest'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'nearest',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'abs'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'abs',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'neg'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'unop',
            type: 'f64',
            operator: 'neg',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'copysign'
          },
          expo: null,
          type: null,
          params: [
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'x',
                type: 'f64'
              }]
            },
            {
              kind: 'param',
              items: [{
                kind: 'item',
                name: 'y',
                type: 'f64'
              }]
            }
          ],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'f64',
            operator: 'copysign',
            left: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            },
            right: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'y'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'add'
          },
          id: {
            kind: 'identifier',
            name: 'add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'sub'
          },
          id: {
            kind: 'identifier',
            name: 'sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'mul'
          },
          id: {
            kind: 'identifier',
            name: 'mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'div'
          },
          id: {
            kind: 'identifier',
            name: 'div'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'sqrt'
          },
          id: {
            kind: 'identifier',
            name: 'sqrt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'min'
          },
          id: {
            kind: 'identifier',
            name: 'min'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'max'
          },
          id: {
            kind: 'identifier',
            name: 'max'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'ceil'
          },
          id: {
            kind: 'identifier',
            name: 'ceil'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'floor'
          },
          id: {
            kind: 'identifier',
            name: 'floor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'trunc'
          },
          id: {
            kind: 'identifier',
            name: 'trunc'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'nearest'
          },
          id: {
            kind: 'identifier',
            name: 'nearest'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'abs'
          },
          id: {
            kind: 'identifier',
            name: 'abs'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'neg'
          },
          id: {
            kind: 'identifier',
            name: 'neg'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'copysign'
          },
          id: {
            kind: 'identifier',
            name: 'copysign'
          }
        }
      ]
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'add',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sub',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'infinity'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'mul',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0'
          }
        ]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'div',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return_nan',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0x1p0'
        }]
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'sqrt',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'min',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'max',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'ceil',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'floor',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'trunc',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'nearest',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0x800000000f1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'abs',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'neg',
        body: [{
          kind: 'const',
          type: 'f64',
          init: '-0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: 'n0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0xf1e2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'copysign',
        body: [
          {
            kind: 'const',
            type: 'f64',
            init: '-0xf1e2'
          },
          {
            kind: 'const',
            type: 'f64',
            init: '-0x1p0'
          }
        ]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '-0xf1e2'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.promote_f32'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'f32',
            operator: 'promote',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.promote_f32'
          },
          id: {
            kind: 'identifier',
            name: 'f64.promote_f32'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.demote_f64'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'f64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'f64',
            operator: 'demote',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.demote_f64'
          },
          id: {
            kind: 'identifier',
            name: 'f32.demote_f64'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32.reinterpret_i32'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i32'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f32',
            type1: 'i32',
            operator: 'reinterpret',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32.reinterpret_i32'
          },
          id: {
            kind: 'identifier',
            name: 'f32.reinterpret_i32'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64.reinterpret_i64'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [{
              kind: 'item',
              name: 'x',
              type: 'i64'
            }]
          }],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [{
            kind: 'cvtop',
            type: 'f64',
            type1: 'i64',
            operator: 'reinterpret',
            expr: {
              kind: 'get_local',
              id: {
                kind: 'identifier',
                name: 'x'
              }
            }
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64.reinterpret_i64'
          },
          id: {
            kind: 'identifier',
            name: 'f64.reinterpret_i64'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.promote_f32',
        body: [{
          kind: 'const',
          type: 'f32',
          init: 'n0xf1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x81e3c40000000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.demote_f64',
        body: [{
          kind: 'const',
          type: 'f64',
          init: 'n0xf1e2f1e2f1e2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x478f17'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32.reinterpret_i32',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0x7f876543'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f32',
        init: 'n0x76543'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64.reinterpret_i64',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '0x7ff0123456789abc'
        }]
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: 'n0x0123456789abc'
      }
    }
  ]
}
