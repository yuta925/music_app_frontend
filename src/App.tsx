import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './ui/footer/footer'
import SelectLocation from './ui/selectlocation'
import MusicPlayerSlider from './ui/message/coment'
import { CreateContainer } from './components/features/bulletinBoardCreate/bulletinBoardCreateContainer'
import FireButton from './ui/firebutton/firebutton'
const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
      dark: '#333333',
    },
    secondary: {
      main: '#EA4335', // 赤色
    },
  },
})
const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <MusicPlayerSlider />
      {/* <FireButton /> */}
      {/* <InputReactHookFormTextField /> */}
      {/* <SelectLocation /> */}
    </div>
  </ThemeProvider>
)

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Home } from './pages/home'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { CsrfToken } from './types'
// import Login from './pages/login'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import Signup from './pages/signup'

// const App = () => {
//   const queryClient = new QueryClient()

//   useEffect(() => {
//     axios.defaults.withCredentials = true
//     const getCsrfToken = async () => {
//       const { data } = await axios.get<CsrfToken>(
//         `${process.env.REACT_APP_API_URL}/csrf`
//       )
//       axios.defaults.headers.common['X-CSFR-Token'] = data.csrf_token
//     }
//     getCsrfToken()
//   }, [])

//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/signin" element={<Signup />} />
//             <Route path="/home" element={<Home />} />
//           </Routes>
//         </BrowserRouter>
//       </QueryClientProvider>
//     </>
//   )
// }

// export default App
