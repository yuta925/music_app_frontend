import { useNavigate } from 'react-router-dom'
import axios from 'axios'

type CsrfToken = {
  csrf_token: string
}

export const useError = () => {
  const navigate = useNavigate()
  const getCsrfToken = async () => {
    const { data } = await axios.get<CsrfToken>(
      `${process.env.VITE_APP_API}/csrf-token`
    )
    axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrf_token
  }
  const switchErrorHandling = (message: string) => {
    switch (message) {
      case 'invalid csrf token':
        getCsrfToken()
        alert(`CSRFトークンは無効です。再度ログインしてください。`)
        break
      case 'invalid or expired jwt':
        navigate('/login')
        alert(`セッションが切れました。再度ログインしてください。`)
        break
      default:
        alert(message)
    }
  }

  return { switchErrorHandling }
}
