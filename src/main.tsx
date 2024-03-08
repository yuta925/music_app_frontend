import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { Login } from '@mui/icons-material'
import Login from './components/features/login/loginPresenter.tsx'
import Signin from './components/features/signin/signinPresenter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
    <Signin />
  </React.StrictMode>,
)
