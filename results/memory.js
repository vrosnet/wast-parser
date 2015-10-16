{
  kind: 'script',
  body: [
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '0',
        int1: '0',
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '0',
        int1: '1',
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '4,0,9,6',
        int1: '1,6,7,7,7,2,1,6',
        segment: []
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '0',
        int1: '0',
        segment: [[
          '(',
          [],
          'segment',
          [' '],
          '0',
          [' '],
          '"',
          [],
          '"',
          [],
          ')'
        ]]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1',
        int1: '1',
        segment: [[
          '(',
          [],
          'segment',
          [' '],
          '0',
          [' '],
          '"',
          ['a'],
          '"',
          [],
          ')'
        ]]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1,0,0',
        int1: '1,0,0,0',
        segment: [
          [
            '(',
            [],
            'segment',
            [' '],
            '0',
            [' '],
            '"',
            ['a'],
            '"',
            [],
            ')'
          ],
          [
            '(',
            [],
            'segment',
            [' '],
            '9,9',
            [' '],
            '"',
            ['b'],
            '"',
            [],
            ')'
          ]
        ]
      }]
    },
    {
      kind: 'module',
      body: [{
        kind: 'memory',
        int: '1,0,0',
        int1: '1,0,0,0',
        segment: [
          [
            '(',
            [],
            'segment',
            [' '],
            '0',
            [' '],
            '"',
            ['a'],
            '"',
            [],
            ')'
          ],
          [
            '(',
            [],
            'segment',
            [' '],
            '1',
            [' '],
            '"',
            ['b'],
            '"',
            [],
            ')'
          ],
          [
            '(',
            [],
            'segment',
            [' '],
            '2',
            [' '],
            '"',
            ['c'],
            '"',
            [],
            ')'
          ]
        ]
      }]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1',
          int1: '0',
          segment: []
        }]
      },
      failure: {
        kind: 'failure',
        value: 'initial memory size must be less than maximum'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '0',
          int1: '0',
          segment: [[
            '(',
            [],
            'segment',
            [' '],
            '0',
            [' '],
            '"',
            ['a'],
            '"',
            [],
            ')'
          ]]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment does not fit memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1,0,0',
          int1: '1,0,0,0',
          segment: [
            [
              '(',
              [],
              'segment',
              [' '],
              '0',
              [' '],
              '"',
              ['a'],
              '"',
              [],
              ')'
            ],
            [
              '(',
              [],
              'segment',
              [' '],
              '5,0,0',
              [' '],
              '"',
              ['b'],
              '"',
              [],
              ')'
            ]
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment does not fit memory'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1,0,0',
          int1: '1,0,0,0',
          segment: [
            [
              '(',
              [],
              'segment',
              [' '],
              '0',
              [' '],
              '"',
              [
                'a',
                'b',
                'c'
              ],
              '"',
              [],
              ')'
            ],
            [
              '(',
              [],
              'segment',
              [' '],
              '0',
              [' '],
              '"',
              [
                'd',
                'e',
                'f'
              ],
              '"',
              [],
              ')'
            ]
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1,0,0',
          int1: '1,0,0,0',
          segment: [
            [
              '(',
              [],
              'segment',
              [' '],
              '3',
              [' '],
              '"',
              [
                'a',
                'b'
              ],
              '"',
              [],
              ')'
            ],
            [
              '(',
              [],
              'segment',
              [' '],
              '0',
              [' '],
              '"',
              [
                'd',
                'e'
              ],
              '"',
              [],
              ')'
            ]
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [{
          kind: 'memory',
          int: '1,0,0',
          int1: '1,0,0,0',
          segment: [
            [
              '(',
              [],
              'segment',
              [' '],
              '0',
              [' '],
              '"',
              ['a'],
              '"',
              [],
              ')'
            ],
            [
              '(',
              [],
              'segment',
              [' '],
              '2',
              [' '],
              '"',
              ['b'],
              '"',
              [],
              ')'
            ],
            [
              '(',
              [],
              'segment',
              [' '],
              '1',
              [' '],
              '"',
              ['c'],
              '"',
              [],
              ')'
            ]
          ]
        }]
      },
      failure: {
        kind: 'failure',
        value: 'data segment not disjoint and ordered'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          name: null,
          params: [],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'i32',
            size: '8',
            sign: [
              '_',
              'u'
            ],
            align: '2',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          name: null,
          params: [],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'i32',
            size: '16',
            sign: [
              '_',
              'u'
            ],
            align: '4',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          name: null,
          params: [],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'i32',
            size: null,
            sign: null,
            align: '8',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '0',
          int1: null,
          segment: []
        },
        {
          kind: 'func',
          name: null,
          params: [],
          result: null,
          local: [],
          expr: [{
            kind: 'load',
            type: 'f32',
            size: null,
            sign: null,
            align: '8',
            expr: {
              kind: 'const',
              type: 'i32',
              init: '0'
            }
          }]
        }
      ]
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            name: null,
            params: [],
            result: null,
            local: [],
            expr: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              align: '0',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            name: null,
            params: [],
            result: null,
            local: [],
            expr: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              align: '3',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            name: null,
            params: [],
            result: null,
            local: [],
            expr: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              align: '5',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            name: null,
            params: [],
            result: null,
            local: [],
            expr: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              align: '6',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'assert_invalid',
      module: {
        kind: 'module',
        body: [
          {
            kind: 'memory',
            int: '0',
            int1: null,
            segment: []
          },
          {
            kind: 'func',
            name: null,
            params: [],
            result: null,
            local: [],
            expr: [{
              kind: 'load',
              type: 'i64',
              size: null,
              sign: null,
              align: '7',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '0'
              }
            }]
          }
        ]
      },
      failure: {
        kind: 'failure',
        value: 'non-power-of-two alignment'
      }
    },
    {
      kind: 'module',
      body: [
        {
          kind: 'memory',
          int: '1,0,2,4',
          int1: null,
          segment: [
            [
              '(',
              [],
              'segment',
              [' '],
              '0',
              [' '],
              '"',
              [
                'A',
                'B',
                'C',
                '\',
                'a',
                '7',
                'D'
              ],
              '"',
              [],
              ')'
            ],
            [
              '(',
              [],
              'segment',
              [' '],
              '2,0',
              [' '],
              '"',
              [
                'W',
                'A',
                'S',
                'M'
              ],
              '"',
              [],
              ')'
            ]
          ]
        },
        {
          kind: 'func',
          name: 'data',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [{
            kind: 'binop',
            type: 'i32',
            operator: 'and',
            left: {
              kind: 'binop',
              type: 'i32',
              operator: 'and',
              left: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '0'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '65'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '3'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '167'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '6'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '19'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                }
              }
            },
            right: {
              kind: 'binop',
              type: 'i32',
              operator: 'and',
              left: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '20'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '87'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '23'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '77'
                  }
                }
              },
              right: {
                kind: 'binop',
                type: 'i32',
                operator: 'and',
                left: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '24'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                },
                right: {
                  kind: 'relop',
                  type: 'i32',
                  operator: 'eq',
                  left: {
                    kind: 'load',
                    type: 'i32',
                    size: '8',
                    sign: [
                      '_',
                      'u'
                    ],
                    align: 0,
                    expr: {
                      kind: 'const',
                      type: 'i32',
                      init: '1023'
                    }
                  },
                  right: {
                    kind: 'const',
                    type: 'i32',
                    init: '0'
                  }
                }
              }
            }
          }]
        },
        {
          kind: 'func',
          name: 'aligned',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            body: [
              'i32',
              'i32',
              'i32'
            ]
          }],
          expr: [
            {
              kind: 'set_local',
              id: '0',
              init: {
                kind: 'const',
                type: 'i32',
                init: '10'
              }
            },
            {
              kind: 'label',
              id: null,
              body: {
                kind: 'loop',
                body: [
                  {
                    kind: 'if',
                    test: {
                      kind: 'relop',
                      type: 'i32',
                      operator: 'eq',
                      left: {
                        kind: 'get_local',
                        id: '0'
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      }
                    },
                    consequent: {
                      kind: 'break',
                      id: '0',
                      expr: null
                    },
                    alternate: null
                  },
                  {
                    kind: 'set_local',
                    id: '2',
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'mul',
                      left: {
                        kind: 'get_local',
                        id: '0'
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '4'
                      }
                    }
                  },
                  {
                    kind: 'store',
                    type: 'i32',
                    size: null,
                    align: 0,
                    expr1: {
                      kind: 'get_local',
                      id: '2'
                    },
                    expr2: {
                      kind: 'get_local',
                      id: '0'
                    }
                  },
                  {
                    kind: 'set_local',
                    id: '1',
                    init: {
                      kind: 'load',
                      type: 'i32',
                      size: null,
                      sign: null,
                      align: 0,
                      expr: {
                        kind: 'get_local',
                        id: '2'
                      }
                    }
                  },
                  {
                    kind: 'if',
                    test: {
                      kind: 'relop',
                      type: 'i32',
                      operator: 'ne',
                      left: {
                        kind: 'get_local',
                        id: '0'
                      },
                      right: {
                        kind: 'get_local',
                        id: '1'
                      }
                    },
                    consequent: {
                      kind: 'return',
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      }
                    },
                    alternate: null
                  },
                  {
                    kind: 'set_local',
                    id: '0',
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'sub',
                      left: {
                        kind: 'get_local',
                        id: '0'
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }
                  }
                ]
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'unaligned',
          params: [],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [{
            kind: 'local',
            body: [
              'i32',
              'f64',
              'f64'
            ]
          }],
          expr: [
            {
              kind: 'set_local',
              id: '0',
              init: {
                kind: 'const',
                type: 'i32',
                init: '10'
              }
            },
            {
              kind: 'label',
              id: null,
              body: {
                kind: 'loop',
                body: [
                  {
                    kind: 'if',
                    test: {
                      kind: 'relop',
                      type: 'i32',
                      operator: 'eq',
                      left: {
                        kind: 'get_local',
                        id: '0'
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      }
                    },
                    consequent: {
                      kind: 'break',
                      id: '0',
                      expr: null
                    },
                    alternate: null
                  },
                  {
                    kind: 'set_local',
                    id: '2',
                    init: {
                      kind: 'cvtop',
                      type: 'f64',
                      type1: 'i32',
                      operator: 'convert_s',
                      expr: {
                        kind: 'get_local',
                        id: '0'
                      }
                    }
                  },
                  {
                    kind: 'store',
                    type: 'f64',
                    size: null,
                    align: '1',
                    expr1: {
                      kind: 'get_local',
                      id: '0'
                    },
                    expr2: {
                      kind: 'get_local',
                      id: '2'
                    }
                  },
                  {
                    kind: 'set_local',
                    id: '1',
                    init: {
                      kind: 'load',
                      type: 'f64',
                      size: null,
                      sign: null,
                      align: '1',
                      expr: {
                        kind: 'get_local',
                        id: '0'
                      }
                    }
                  },
                  {
                    kind: 'if',
                    test: {
                      kind: 'relop',
                      type: 'f64',
                      operator: 'ne',
                      left: {
                        kind: 'get_local',
                        id: '2'
                      },
                      right: {
                        kind: 'get_local',
                        id: '1'
                      }
                    },
                    consequent: {
                      kind: 'return',
                      expr: {
                        kind: 'const',
                        type: 'i32',
                        init: '0'
                      }
                    },
                    alternate: null
                  },
                  {
                    kind: 'set_local',
                    id: '0',
                    init: {
                      kind: 'binop',
                      type: 'i32',
                      operator: 'sub',
                      left: {
                        kind: 'get_local',
                        id: '0'
                      },
                      right: {
                        kind: 'const',
                        type: 'i32',
                        init: '1'
                      }
                    }
                  }
                ]
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'const',
                type: 'i32',
                init: '1'
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'cast',
          params: [],
          result: {
            kind: 'result',
            type: 'f64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: null,
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'const',
                type: 'i64',
                init: '-12345'
              }
            },
            {
              kind: 'if',
              test: {
                kind: 'relop',
                type: 'f64',
                operator: 'eq',
                left: {
                  kind: 'load',
                  type: 'f64',
                  size: null,
                  sign: null,
                  align: 0,
                  expr: {
                    kind: 'const',
                    type: 'i32',
                    init: '8'
                  }
                },
                right: {
                  kind: 'cvtop',
                  type: 'f64',
                  type1: 'i64',
                  operator: 'reinterpret',
                  expr: {
                    kind: 'const',
                    type: 'i64',
                    init: '-12345'
                  }
                }
              },
              consequent: {
                kind: 'return',
                expr: {
                  kind: 'const',
                  type: 'f64',
                  init: '0'
                }
              },
              alternate: null
            },
            {
              kind: 'store',
              type: 'i64',
              size: null,
              align: '1',
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '9'
              },
              expr2: {
                kind: 'const',
                type: 'i64',
                init: '0'
              }
            },
            {
              kind: 'store',
              type: 'i32',
              size: '1',
              align: '1',
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '15'
              },
              expr2: {
                kind: 'const',
                type: 'i32',
                init: '16453'
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'f64',
                size: null,
                sign: null,
                align: '1',
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '9'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i32_load8_s',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i32',
                size: '8',
                sign: [
                  '_',
                  's'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i32_load8_u',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i32',
              size: '8',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i32',
                size: '8',
                sign: [
                  '_',
                  'u'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i32_load16_s',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i32',
              size: '1',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i32',
                size: '16',
                sign: [
                  '_',
                  's'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i32_load16_u',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i32'
          }],
          result: {
            kind: 'result',
            type: 'i32'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i32',
              size: '1',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i32',
                size: '16',
                sign: [
                  '_',
                  'u'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i64_load8_s',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: '8',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i64',
                size: '8',
                sign: [
                  '_',
                  's'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i64_load8_u',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: '8',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i64',
                size: '8',
                sign: [
                  '_',
                  'u'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i64_load16_s',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: '1',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i64',
                size: '16',
                sign: [
                  '_',
                  's'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i64_load16_u',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: '1',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i64',
                size: '16',
                sign: [
                  '_',
                  'u'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i64_load32_s',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: '3',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i64',
                size: '32',
                sign: [
                  '_',
                  's'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'func',
          name: 'i64_load32_u',
          params: [{
            kind: 'param',
            name: 'i',
            type: 'i64'
          }],
          result: {
            kind: 'result',
            type: 'i64'
          },
          local: [],
          expr: [
            {
              kind: 'store',
              type: 'i64',
              size: '3',
              align: 0,
              expr1: {
                kind: 'const',
                type: 'i32',
                init: '8'
              },
              expr2: {
                kind: 'get_local',
                id: {
                  kind: 'var',
                  name: 'i'
                }
              }
            },
            {
              kind: 'return',
              expr: {
                kind: 'load',
                type: 'i64',
                size: '32',
                sign: [
                  '_',
                  'u'
                ],
                align: 0,
                expr: {
                  kind: 'const',
                  type: 'i32',
                  init: '8'
                }
              }
            }
          ]
        },
        {
          kind: 'export',
          name: 'data'
        },
        {
          kind: 'export',
          name: 'aligned'
        },
        {
          kind: 'export',
          name: 'unaligned'
        },
        {
          kind: 'export',
          name: 'cast'
        },
        {
          kind: 'export',
          name: 'i32_load8_s'
        },
        {
          kind: 'export',
          name: 'i32_load8_u'
        },
        {
          kind: 'export',
          name: 'i32_load16_s'
        },
        {
          kind: 'export',
          name: 'i32_load16_u'
        },
        {
          kind: 'export',
          name: 'i64_load8_s'
        },
        {
          kind: 'export',
          name: 'i64_load8_u'
        },
        {
          kind: 'export',
          name: 'i64_load16_s'
        },
        {
          kind: 'export',
          name: 'i64_load16_u'
        },
        {
          kind: 'export',
          name: 'i64_load32_s'
        },
        {
          kind: 'export',
          name: 'i64_load32_u'
        }
      ]
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'data',
        body: []
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
        name: 'aligned',
        body: []
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
        name: 'unaligned',
        body: []
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
        name: 'cast',
        body: []
      },
      expr: {
        kind: 'const',
        type: 'f64',
        init: '42.0'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
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
        name: 'i32_load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
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
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '65535'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load8_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '200'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_s',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '20000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '20000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i32_load16_u',
        body: [{
          kind: 'const',
          type: 'i32',
          init: '40000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i32',
        init: '40000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
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
        name: 'i64_load8_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '255'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
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
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '65535'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
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
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '-1'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '4294967295'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '100'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '100'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load8_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '200'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '200'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '20000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load16_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '40000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '40000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_s',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '20000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '20000'
      }
    },
    {
      kind: 'assert_return',
      invoke: {
        kind: 'invoke',
        name: 'i64_load32_u',
        body: [{
          kind: 'const',
          type: 'i64',
          init: '40000'
        }]
      },
      expr: {
        kind: 'const',
        type: 'i64',
        init: '40000'
      }
    }
  ]
}