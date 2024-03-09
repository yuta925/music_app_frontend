import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BulletinBoardPresenter from './components/features/bulletinBoard/bulletinBoardPresenter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TitlebarBelowImageList /> */}
    <BulletinBoardPresenter />
  </React.StrictMode>
)