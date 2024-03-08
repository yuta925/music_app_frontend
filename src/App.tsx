import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login'
import { Singnup } from './pages/singnup'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singnup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
