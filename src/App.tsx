import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { CsrfToken } from './types'
import Login from './pages/login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Signup from './pages/signup'

const App = () => {
  const queryClient = new QueryClient()

  // useEffect(() => {
  //   axios.defaults.withCredentials = true
  //   const getCsrfToken = async () => {
  //     const { data } = await axios.get<CsrfToken>(
  //       `${process.env.REACT_APP_API_URL}/csrf`
  //     )
  //     axios.defaults.headers.common['X-CSFR-Token'] = data.csrf_token
  //   }
  //   getCsrfToken()
  // }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
