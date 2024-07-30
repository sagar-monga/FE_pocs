import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ! here is a non null assertion
// Basically, like we have ?. (Optional Chaining), where we go further only if property is present
// Here, we instruct react that the value will be present, it will not be null or undefined
// TIP: Remove ! & check the error.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
