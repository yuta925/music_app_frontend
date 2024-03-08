import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login'
import { Singnup } from './pages/singnup'
import { Home } from './pages/home'
import { useEffect } from 'react'
import axios from 'axios'
import { CsrfToken } from './types'

const App = () => {
  useEffect(()=> {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const {data} =  await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrf`
      )
      axios.defaults.headers.common['X-CSFR-Token'] = data.csrf_token
    }
    getCsrfToken()
  },[])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singnup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;