const rules = {
  complexity: ['error', 5],
  'no-mixed-requires': ['error', { allowCall: true, grouping: true }],
  'no-duplicate-imports': 'error',
  'id-length': ['error', { exceptions: ['_'] }],
  'max-depth': ['error', 4],
  'max-lines': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': ['error', { max: 15, skipBlankLines: true, skipComments: true }],
  'max-nested-callbacks': ['error', 4],
  'max-params': ['error', 4],
  'max-statements': 'error',
  'max-statements-per-line': 'error',
  'max-classes-per-file': ['error', 2],
  'padding-line-between-statements': ['error',
    { blankLine: "always", prev: ["const", "let"], next: "*"},
    { blankLine: "always", prev: "*", next: "return" },
    { blankLine: "any", prev: ["const", "let"], next: ["const", "let"]},
  ],
  'sort-keys': ['warn', 'asc', { caseSensitive: false, natural: true }],
  'class-methods-use-this': 'off',
  'require-await': 'warn',
};

module.exports = rules;