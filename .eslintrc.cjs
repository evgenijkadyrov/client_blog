module.exports = {
  root: true,
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",

        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],

  plugins: [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "import",
    "prettier",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react-refresh/only-export-components": "off",
    "react/button-has-type": "off",
    "react/jsx-props-no-spreading": "warn",
    "react-hooks/exhaustive-deps": "off",
    "no-floating-promise/no-floating-promise": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "dot-notation": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          ["^(@|components)(/.*|$)"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.?(css)$"],
        ],
      },
    ],
    "jsx-a11y/label-has-associated-control": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false,
      },
    ],
  },
};
