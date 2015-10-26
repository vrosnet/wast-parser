{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: null
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'S'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: null
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: null
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: null
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'U'
          }
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 0,
              raw: '0'
            }
          },
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'S'
            }
          },
          params: [],
          result: null,
          local: [],
          body: []
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'one'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 4,
              raw: '4'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '13'
          }]
        },
        {
          kind: 'export',
          name: 'one'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'two'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'add',
            left: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '1'
            }
          }]
        },
        {
          kind: 'export',
          name: 'two'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'three'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'T'
            }
          },
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'a'
            },
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'binop',
            type: 'i32',
            operator: 'sub',
            left: {
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            },
            right: {
              kind: 'const',
              type: 'i32',
              init: '2'
            }
          }]
        },
        {
          kind: 'export',
          name: 'three'
        },
        {
          kind: 'import',
          id: {
            kind: 'identifier',
            name: 'print'
          },
          name1: 'stdio',
          name2: 'print',
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 6,
              raw: '6'
            }
          },
          params: [],
          result: null
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'four'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'U'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'call_import',
            id: {
              kind: 'identifier',
              id: 'print'
            },
            expr: [{
              kind: 'get_local',
              id: {
                kind: 'literal',
                value: 0,
                raw: '0'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: 'four'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'one',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '13'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'two',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '14'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'three',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '13'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '11'
      }
    },
    {
      kind: 'invoke',
      name: 'four',
      body: [{
        kind: 'const',
        type: 'i32',
        init: '83'
      }]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'func',
          id: {
            kind: 'identifier',
            name: null
          },
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 42,
              raw: '42'
            }
          },
          params: [],
          result: null,
          local: [],
          body: []
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unknown function type 42'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'import',
          id: null,
          name1: 'stdio',
          name2: 'print',
          type: {
            kind: 'type',
            id: {
              kind: 'literal',
              value: 43,
              raw: '43'
            }
          },
          params: [],
          result: null
        }]
      },
      failure: {
        kind: 'failure',
        value: 'unknown function type 43'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'T'
          }
        },
        {
          kind: 'type',
          id: {
            kind: 'identifier',
            name: 'U'
          }
        },
        [
          'table',
          [
            [
              [' '],
              {
                kind: 'identifier',
                id: 't1'
              }
            ],
            [
              [' '],
              {
                kind: 'identifier',
                id: 't2'
              }
            ],
            [
              [' '],
              {
                kind: 'identifier',
                id: 't3'
              }
            ],
            [
              [' '],
              {
                kind: 'identifier',
                id: 'u1'
              }
            ],
            [
              [' '],
              {
                kind: 'identifier',
                id: 'u2'
              }
            ],
            [
              [' '],
              {
                kind: 'identifier',
                id: 't1'
              }
            ],
            [
              [' '],
              {
                kind: 'identifier',
                id: 't3'
              }
            ]
          ]
        ],
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't1'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '1'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't2'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '2'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 't3'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'T'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '3'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'u1'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'U'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '4'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'u2'
          },
          type: {
            kind: 'type',
            id: {
              kind: 'identifier',
              id: 'U'
            }
          },
          params: [],
          result: null,
          local: [],
          body: [{
            kind: 'const',
            type: 'i32',
            init: '5'
          }]
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'callt'
          },
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              id: 'T'
            },
            expr: [{
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: 'callt'
        },
        {
          kind: 'func',
          id: {
            kind: 'identifier',
            name: 'callu'
          },
          type: null,
          params: [{
            kind: 'param',
            id: {
              kind: 'identifier',
              name: 'i'
            },
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          body: [{
            kind: 'call_indirect',
            id: {
              kind: 'identifier',
              id: 'U'
            },
            expr: [{
              kind: 'get_local',
              id: {
                kind: 'identifier',
                id: 'i'
              }
            }]
          }]
        },
        {
          kind: 'export',
          name: 'callu'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '2'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '1'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '3'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: undefined table element 7'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '100'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: undefined table element 100'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callt',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: undefined table element -1'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '0'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '2'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '3'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '4'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '4'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '5'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '5'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '6'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: indirect call signature mismatch'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '7'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: undefined table element 7'
      }
    },
    {
      kind: 'assert_trap',
      invoke: {
        kind: 'invoke',
        name: 'callu',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      failure: {
        kind: 'failure',
        value: 'runtime: undefined table element -1'
      }
    }
  ]
}