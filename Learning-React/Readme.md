# FE_Pocs

## React Pitfalls

### Evaluated Expressions
We can render dynamic values in react like this- 
```
function App() {
    const value = 8;
  return (
    <div>Value is {value}</div>
  )
}
```

Here when we use `{value}`, why it cannot be a function or directly some JS code? Why do we call it as an evaluated expression?

ANS
Because is react, the render method expects the keys like type, props, children and then variables (In this case,`value`). Since it expects this format, and JS like
```
if(condition)
```
doesn't satisfy the type signature, we can only use **Evaluated Expressions**

## Linting your commit messages
1. Install
npm install @commitlint/cli @commitlint/config-conventional --save-dev
2. Add config to commitlint.config.js
module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
}
3. Install husky to run commitlint as a pre-commit hook
npm install husky --save-dev
4. enable husky hooks
npx husky install
5. Enable husky hooks upon installation
npm set-script prepare "husky install"
if doesnt worjk, use
npm pkg set scripts.prepare="husky install"
6. Add a pre commit hook
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
7. Done

### Virtual DOM
- Important but **NOT USED in REACT NOW**
- createRoot creates a DOM-like structure called the Virtual DOM. Compares this DOM with the main DOM and updates the things which have changed. The browser DOM "repaints" (Destroys & reconstructs) the tree.
- https://youtu.be/MPCVGFvgVEQ?si=dIc7jIeaG5HvYXc0