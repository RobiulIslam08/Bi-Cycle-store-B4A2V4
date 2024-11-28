// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,

//   // ‍aikhne bosate hobe
//   {
//     ignores: ["node_modules", "dist"],
//     rules: {
//       "no-unused-vars": "error",
//       "no-unused-expressions": "error",
//       "prefer-const": "error" ,// jodi let use kori and ata jodi reasigned na kora hoi tahole error dibe  and bolbe const use korte . auto fix korle ata const hoye jabe.
//       "no-console":"warn",
//       "no-undef": "error", //jodi kono funciton or var undefined thake like let a => tahole error dibe

//     },
//     "globals": {
//       "process": "readonly"
//     }
//   },
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly", // এখানে `process` যোগ করা হয়েছে
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // অতিরিক্ত কনফিগারেশন
  {
    ignores: ["node_modules", "dist"],
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error", // let ব্যবহৃত হলে এবং তা reasigned না হলে const সাজেস্ট করবে।
      "no-console": "warn",
      "no-undef": "error", // undefined ভেরিয়েবলের জন্য।
      "@typescript-eslint/no-explicit-any": "warn", 
    },
  },
];
