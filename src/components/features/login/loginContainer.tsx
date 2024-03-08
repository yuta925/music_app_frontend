import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { useError } from '../../../hooks/useError'

type UserLogin = {
  email: string
  password: string
}

export const LoginContainer = () => {
  const navigate = useNavigate()
  //   const { switchErrorHandling } = useError()
  const login = useMutation({
    mutationFn: async (user: UserLogin) =>
      await axios.post(`${process.env.VITE_APP_API}/login`, user),
    onSuccess: () => {
      navigate('/home')
    },
    // onError: (err: any) => {
    //   if (err.response.data.message) {
    //     switchErrorHandling(err.response.data.message)
    //   } else {
    //     switchErrorHandling(err.response.data)
    //   }
    // },
  })

  return {
    /*<LoginPresenter prop={loginMutation}/>*/
  }
}
