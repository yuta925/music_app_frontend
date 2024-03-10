import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './ui/header/header'
import Footer from './ui/footer/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Footer />
  </React.StrictMode>
)