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
doesn't satisfy the type signature, we can only use <b>Evaluated Expressions</b>