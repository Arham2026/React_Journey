import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  // Purpose: This line of code initializes your React application and tells React where in the HTML to insert your app.
  //  It links your React components to a specific part of your HTML and begins rendering your app, making it interactive and dynamic.
  // the purpose of the above purpose to tell about the purpose of this area

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
