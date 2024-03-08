import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type UserLogin = {
  email: string
  password: string
}

export const LoginContainer = () => {
  const navigate = useNavigate()
  const login = useMutation({
    mutationFn: async (user: UserLogin) =>
      await axios.post(`${process.env.VITE_APP_API}/login`, user),
    onSuccess: () => {
      navigate('/home')
    },
  })
  return { login }
}
