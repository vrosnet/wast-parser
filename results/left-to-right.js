{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: {
            kind: 'literal',
            value: 1,
            raw: '1'
          },
          int1: null,
          segment: []
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'i32_T'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'i32'
                },
                {
                  kind: 'item',
                  type: 'i32'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'i64_T'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'i64'
                },
                {
                  kind: 'item',
                  type: 'i64'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'f32_T'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'f32'
                },
                {
                  kind: 'item',
                  type: 'f32'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'f64_T'
          },
          expr: {
            kind: 'func',
            params: [{
              kind: 'param',
              items: [
                {
                  kind: 'item',
                  type: 'f64'
                },
                {
                  kind: 'item',
                  type: 'f64'
                }
              ]
            }],
            result: {
              kind: 'result',
              type: 'i32'
            },
            local: [],
            body: []
          }
        },
        {
          kind: 'table',
          items: [
            {
              kind: 'identifier',
              name: 'i32_t0'
            },
            {
              kind: 'identifier',
              name: 'i32_t1'
            },
            {
              kind: 'identifier',
              name: 'i64_t0'
            },
            {
              kind: 'identifier',
              name: 'i64_t1'
            },
            {
              kind: 'identifier',
              name: 'f32_t0'
            },
            {
              kind: 'identifier',
              name: 'f32_t1'
            },
            {
              kind: 'identifier',
              name: 'f64_t0'
            },
            {
              kind: 'identifier',
              name: 'f64_t1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_t0'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i32_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_t1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i32_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_t0'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i64_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_t1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i64_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_t0'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f32_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_t1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f32_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_t0'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f64_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_t1'
          },
          expo: null,
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f64_T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '-2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'reset'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'store',
            type: 'i32',
            size: null,
            offset: 0,
            align: 0,
            addr: {
              kind: 'const',
              type: 'i32',
              init: '8'
            },
            data: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'bump'
          },
          expo: null,
          type: null,
          params: [],
          result: null,
          local: [],
          body: [
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '11'
              },
              data: {
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '10'
                }
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '10'
              },
              data: {
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '9'
              },
              data: {
                kind: 'load',
                type: 'i32',
                size: 8,
                sign: false,
                offset: 0,
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '-3'
              }
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'get'
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
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            offset: 0,
            align: 0,
            expr: {
              kind: 'const',
              type: 'i32',
              init: '8'
            }
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_left'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_right'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_another'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_callee'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_bool'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_left'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'i64',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_right'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_another'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            },
            {
              kind: 'const',
              type: 'i64',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_callee'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_bool'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_left'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_right'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_another'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            },
            {
              kind: 'const',
              type: 'f32',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_callee'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '4'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_bool'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_left'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            },
            {
              kind: 'const',
              type: 'f64',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_right'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '2'
              }
            },
            {
              kind: 'const',
              type: 'f64',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_another'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '3'
              }
            },
            {
              kind: 'const',
              type: 'f64',
              init: '1'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_callee'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '4'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '6'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_bool'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'bump'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              data: {
                kind: 'const',
                type: 'i32',
                init: '5'
              }
            },
            {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_dummy'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i32'
              },
              {
                kind: 'item',
                type: 'i32'
              }
            ]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_dummy'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'i64'
              },
              {
                kind: 'item',
                type: 'i64'
              }
            ]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_dummy'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'f32'
              },
              {
                kind: 'item',
                type: 'f32'
              }
            ]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_dummy'
          },
          expo: null,
          type: null,
          params: [{
            kind: 'param',
            items: [
              {
                kind: 'item',
                type: 'f64'
              },
              {
                kind: 'item',
                type: 'f64'
              }
            ]
          }],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_add'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_sub'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_mul'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_div_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'div_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_div_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'div_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_rem_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'rem_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_rem_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'rem_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_and'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'and',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_or'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'or',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_xor'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'xor',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_shl'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'shl',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_shr_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'shr_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_shr_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i32',
              operator: 'shr_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_eq'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_ne'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_lt_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'lt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_le_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'le_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_lt_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'lt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_le_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'le_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_gt_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'gt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_ge_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'ge_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_gt_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'gt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_ge_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i32',
              operator: 'ge_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store8'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store16'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_call'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_dummy'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_left'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_right'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_call_indirect'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'i32_T'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_callee'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_right'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_another'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_select'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'select',
              then: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              else: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                exprs: []
              },
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_bool'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_add'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_sub'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_mul'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_div_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'div_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_div_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'div_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_rem_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'rem_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_rem_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'rem_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_and'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'and',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_or'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'or',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_xor'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'xor',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_shl'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'shl',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_shr_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'shr_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_shr_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'i64',
              operator: 'shr_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_eq'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_ne'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_lt_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'lt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_le_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'le_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_lt_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'lt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_le_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'le_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_gt_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'gt_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_ge_s'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'ge_s',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_gt_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'gt_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_ge_u'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'i64',
              operator: 'ge_u',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store8'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i64',
              size: 8,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store16'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i64',
              size: 16,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store32'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'i64',
              size: 32,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_call'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i64_dummy'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_left'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_right'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_call_indirect'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'i64_T'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_callee'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_right'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_another'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_select'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'select',
              then: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                exprs: []
              },
              else: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                exprs: []
              },
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_bool'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_add'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_sub'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_mul'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_div'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'div',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_copysign'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'copysign',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_eq'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_ne'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_lt'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'lt',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_le'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'le',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_gt'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'gt',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_ge'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f32',
              operator: 'ge',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_min'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'min',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_max'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f32',
              operator: 'max',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_store'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'f32',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_call'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f32_dummy'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_left'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_right'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_call_indirect'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'f32_T'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_callee'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_right'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_another'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_select'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'select',
              then: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                exprs: []
              },
              else: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                exprs: []
              },
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_bool'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_add'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'add',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_sub'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'sub',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_mul'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'mul',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_div'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'div',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_copysign'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'copysign',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_eq'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'eq',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_ne'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'ne',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_lt'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'lt',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_le'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'le',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_gt'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'gt',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_ge'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'relop',
              type: 'f64',
              operator: 'ge',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_min'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'min',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_max'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'binop',
              type: 'f64',
              operator: 'max',
              left: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_store'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'store',
              type: 'f64',
              size: null,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                exprs: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_call'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f64_dummy'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_left'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_right'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_call_indirect'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'f64_T'
              },
              exprs: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_callee'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_right'
                  },
                  exprs: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_another'
                  },
                  exprs: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_select'
          },
          expo: null,
          type: null,
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'reset'
              },
              exprs: []
            },
            {
              kind: 'select',
              then: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                exprs: []
              },
              else: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                exprs: []
              },
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_bool'
                },
                exprs: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              exprs: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_if'
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
            kind: 'block',
            id: null,
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'reset'
                },
                exprs: []
              },
              {
                kind: 'br_if',
                id: {
                  kind: 'literal',
                  value: 0,
                  raw: '0'
                },
                test: {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_left'
                  },
                  exprs: []
                },
                expr: {
                  kind: 'binop',
                  type: 'i32',
                  operator: 'and',
                  left: {
                    kind: 'call',
                    id: {
                      kind: 'identifier',
                      name: 'i32_right'
                    },
                    exprs: []
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                }
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'get'
                },
                exprs: []
              }
            ]
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'br_table'
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
            kind: 'block',
            id: {
              kind: 'identifier',
              name: 'a'
            },
            body: [
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'reset'
                },
                exprs: []
              },
              {
                kind: 'block',
                id: {
                  kind: 'identifier',
                  name: 'b'
                },
                body: [{
                  kind: 'br_table',
                  exprs: [
                    {
                      kind: 'call',
                      id: {
                        kind: 'identifier',
                        name: 'i32_left'
                      },
                      exprs: []
                    },
                    {
                      kind: 'call',
                      id: {
                        kind: 'identifier',
                        name: 'i32_right'
                      },
                      exprs: []
                    }
                  ],
                  body: [
                    {
                      kind: 'identifier',
                      name: 'a'
                    },
                    {
                      kind: 'identifier',
                      name: 'b'
                    }
                  ]
                }]
              },
              {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'get'
                },
                exprs: []
              }
            ]
          }]
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_add'
          },
          id: {
            kind: 'identifier',
            name: 'i32_add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_add'
          },
          id: {
            kind: 'identifier',
            name: 'i64_add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_sub'
          },
          id: {
            kind: 'identifier',
            name: 'i32_sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_sub'
          },
          id: {
            kind: 'identifier',
            name: 'i64_sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_mul'
          },
          id: {
            kind: 'identifier',
            name: 'i32_mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_mul'
          },
          id: {
            kind: 'identifier',
            name: 'i64_mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_div_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_div_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_div_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_div_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_div_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_div_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_div_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_div_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_rem_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_rem_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_rem_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_rem_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_rem_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_rem_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_rem_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_rem_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_and'
          },
          id: {
            kind: 'identifier',
            name: 'i32_and'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_and'
          },
          id: {
            kind: 'identifier',
            name: 'i64_and'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_or'
          },
          id: {
            kind: 'identifier',
            name: 'i32_or'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_or'
          },
          id: {
            kind: 'identifier',
            name: 'i64_or'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_xor'
          },
          id: {
            kind: 'identifier',
            name: 'i32_xor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_xor'
          },
          id: {
            kind: 'identifier',
            name: 'i64_xor'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_shl'
          },
          id: {
            kind: 'identifier',
            name: 'i32_shl'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_shl'
          },
          id: {
            kind: 'identifier',
            name: 'i64_shl'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_shr_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_shr_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_shr_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_shr_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_shr_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_shr_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_shr_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_shr_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_eq'
          },
          id: {
            kind: 'identifier',
            name: 'i32_eq'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_eq'
          },
          id: {
            kind: 'identifier',
            name: 'i64_eq'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_ne'
          },
          id: {
            kind: 'identifier',
            name: 'i32_ne'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_ne'
          },
          id: {
            kind: 'identifier',
            name: 'i64_ne'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_lt_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_lt_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_lt_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_lt_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_le_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_le_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_le_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_le_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_lt_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_lt_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_lt_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_lt_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_le_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_le_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_le_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_le_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_gt_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_gt_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_gt_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_gt_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_ge_s'
          },
          id: {
            kind: 'identifier',
            name: 'i32_ge_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_ge_s'
          },
          id: {
            kind: 'identifier',
            name: 'i64_ge_s'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_gt_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_gt_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_gt_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_gt_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_ge_u'
          },
          id: {
            kind: 'identifier',
            name: 'i32_ge_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_ge_u'
          },
          id: {
            kind: 'identifier',
            name: 'i64_ge_u'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_store'
          },
          id: {
            kind: 'identifier',
            name: 'i32_store'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_store'
          },
          id: {
            kind: 'identifier',
            name: 'i64_store'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_store8'
          },
          id: {
            kind: 'identifier',
            name: 'i32_store8'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_store8'
          },
          id: {
            kind: 'identifier',
            name: 'i64_store8'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_store16'
          },
          id: {
            kind: 'identifier',
            name: 'i32_store16'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_store16'
          },
          id: {
            kind: 'identifier',
            name: 'i64_store16'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_store32'
          },
          id: {
            kind: 'identifier',
            name: 'i64_store32'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_call'
          },
          id: {
            kind: 'identifier',
            name: 'i32_call'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_call'
          },
          id: {
            kind: 'identifier',
            name: 'i64_call'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_call_indirect'
          },
          id: {
            kind: 'identifier',
            name: 'i32_call_indirect'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_call_indirect'
          },
          id: {
            kind: 'identifier',
            name: 'i64_call_indirect'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i32_select'
          },
          id: {
            kind: 'identifier',
            name: 'i32_select'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'i64_select'
          },
          id: {
            kind: 'identifier',
            name: 'i64_select'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_add'
          },
          id: {
            kind: 'identifier',
            name: 'f32_add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_add'
          },
          id: {
            kind: 'identifier',
            name: 'f64_add'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f32_sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_sub'
          },
          id: {
            kind: 'identifier',
            name: 'f64_sub'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f32_mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_mul'
          },
          id: {
            kind: 'identifier',
            name: 'f64_mul'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_div'
          },
          id: {
            kind: 'identifier',
            name: 'f32_div'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_div'
          },
          id: {
            kind: 'identifier',
            name: 'f64_div'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_copysign'
          },
          id: {
            kind: 'identifier',
            name: 'f32_copysign'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_copysign'
          },
          id: {
            kind: 'identifier',
            name: 'f64_copysign'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_eq'
          },
          id: {
            kind: 'identifier',
            name: 'f32_eq'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_eq'
          },
          id: {
            kind: 'identifier',
            name: 'f64_eq'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_ne'
          },
          id: {
            kind: 'identifier',
            name: 'f32_ne'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_ne'
          },
          id: {
            kind: 'identifier',
            name: 'f64_ne'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_lt'
          },
          id: {
            kind: 'identifier',
            name: 'f32_lt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_lt'
          },
          id: {
            kind: 'identifier',
            name: 'f64_lt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_le'
          },
          id: {
            kind: 'identifier',
            name: 'f32_le'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_le'
          },
          id: {
            kind: 'identifier',
            name: 'f64_le'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_gt'
          },
          id: {
            kind: 'identifier',
            name: 'f32_gt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_gt'
          },
          id: {
            kind: 'identifier',
            name: 'f64_gt'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_ge'
          },
          id: {
            kind: 'identifier',
            name: 'f32_ge'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_ge'
          },
          id: {
            kind: 'identifier',
            name: 'f64_ge'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_min'
          },
          id: {
            kind: 'identifier',
            name: 'f32_min'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_min'
          },
          id: {
            kind: 'identifier',
            name: 'f64_min'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_max'
          },
          id: {
            kind: 'identifier',
            name: 'f32_max'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_max'
          },
          id: {
            kind: 'identifier',
            name: 'f64_max'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_store'
          },
          id: {
            kind: 'identifier',
            name: 'f32_store'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_store'
          },
          id: {
            kind: 'identifier',
            name: 'f64_store'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_call'
          },
          id: {
            kind: 'identifier',
            name: 'f32_call'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_call'
          },
          id: {
            kind: 'identifier',
            name: 'f64_call'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_call_indirect'
          },
          id: {
            kind: 'identifier',
            name: 'f32_call_indirect'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_call_indirect'
          },
          id: {
            kind: 'identifier',
            name: 'f64_call_indirect'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f32_select'
          },
          id: {
            kind: 'identifier',
            name: 'f32_select'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'f64_select'
          },
          id: {
            kind: 'identifier',
            name: 'f64_select'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_if'
          },
          id: {
            kind: 'identifier',
            name: 'br_if'
          }
        },
        {
          kind: 'export',
          name: {
            kind: 'literal',
            value: 'br_table'
          },
          id: {
            kind: 'identifier',
            name: 'br_table'
          }
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_div_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_div_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_div_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_div_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_rem_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_rem_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_rem_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_rem_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_and',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_and',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_or',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_or',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_xor',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_xor',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_shl',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_shl',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_shr_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_shr_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_shr_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_shr_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_lt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_lt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_le_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_le_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_lt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_lt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_le_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_le_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_gt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_gt_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_ge_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_ge_s',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_gt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_gt_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_ge_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_ge_u',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_store',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_store',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_store8',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_store8',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_store16',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_store16',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_store32',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_call',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_call',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_call_indirect',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x040203'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_call_indirect',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x040203'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_select',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x010205'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_select',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x010205'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_add',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_sub',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_mul',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_div',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_div',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_copysign',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_copysign',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_eq',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_ne',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_lt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_lt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_le',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_le',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_gt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_gt',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_ge',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_ge',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_min',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_min',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_max',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_max',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_store',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_store',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_call',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_call',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_call_indirect',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x040203'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_call_indirect',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x040203'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f32_select',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x010205'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'f64_select',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x010205'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_if',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'br_table',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '0x0102'
      }
    }
  ]
}
