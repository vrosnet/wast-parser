{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1',
          int1: null,
          segment: []
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'i32_T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'i64_T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'f32_T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'f64_T'
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i32_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i32_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i64_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'i64_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f32_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f32_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f64_T'
            }
          },
          param: [],
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
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              name: 'f64_T'
            }
          },
          param: [],
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
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          type: null,
          param: [],
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [],
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
              expr: []
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
          type: null,
          param: [{
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
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_sub'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_mul'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_div_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_div_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_rem_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_rem_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_and'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_or'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_xor'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_shl'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_shr_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_shr_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_eq'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_ne'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_lt_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_le_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_lt_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_le_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_gt_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_ge_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_gt_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_ge_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store8'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_store16'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'store',
              type: 'i32',
              size: 1,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_call'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i32_dummy'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_left'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_right'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_call_indirect'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'i32_T'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_callee'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_right'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i32_another'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i32_select'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'select',
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                expr: []
              },
              consequent: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_right'
                },
                expr: []
              },
              alternate: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_bool'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_add'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_sub'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_mul'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_div_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_div_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_rem_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_rem_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_and'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_or'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_xor'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_shl'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_shr_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_shr_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_eq'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_ne'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_lt_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_le_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_lt_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_le_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_gt_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_ge_s'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_gt_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_ge_u'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store8'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store16'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'store',
              type: 'i64',
              size: 1,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_store32'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'store',
              type: 'i64',
              size: 3,
              offset: 0,
              align: 0,
              addr: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i32_left'
                },
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_call'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'i64_dummy'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_left'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_right'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_call_indirect'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'i64_T'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_callee'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_right'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'i64_another'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'i64_select'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'select',
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_left'
                },
                expr: []
              },
              consequent: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_right'
                },
                expr: []
              },
              alternate: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'i64_bool'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_add'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_sub'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_mul'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_div'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_copysign'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_eq'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_ne'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_lt'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_le'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_gt'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_ge'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_min'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_max'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_store'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_call'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f32_dummy'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_left'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_right'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_call_indirect'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'f32_T'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_callee'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_right'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f32_another'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f32_select'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'select',
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_left'
                },
                expr: []
              },
              consequent: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_right'
                },
                expr: []
              },
              alternate: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f32_bool'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_add'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_sub'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_mul'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_div'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_copysign'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_eq'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_ne'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_lt'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_le'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_gt'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_ge'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_min'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_max'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              right: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_store'
          },
          type: null,
          param: [],
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
              expr: []
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
                expr: []
              },
              data: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_call'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'f64_dummy'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_left'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_right'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_call_indirect'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'call_indirect',
              id: {
                kind: 'identifier',
                name: 'f64_T'
              },
              expr: [
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_callee'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_right'
                  },
                  expr: []
                },
                {
                  kind: 'call',
                  id: {
                    kind: 'identifier',
                    name: 'f64_another'
                  },
                  expr: []
                }
              ]
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'f64_select'
          },
          type: null,
          param: [],
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
              expr: []
            },
            {
              kind: 'select',
              test: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_left'
                },
                expr: []
              },
              consequent: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_right'
                },
                expr: []
              },
              alternate: {
                kind: 'call',
                id: {
                  kind: 'identifier',
                  name: 'f64_bool'
                },
                expr: []
              }
            },
            {
              kind: 'call',
              id: {
                kind: 'identifier',
                name: 'get'
              },
              expr: []
            }
          ]
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
    }
  ]
}
