// import { useError } from '../../../hooks/useError'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type SignIn = {
  icon: string
  name: string
  email: string
  password: string
}

export const SignupContainer = () => {
  // const { switchErrorHandling } = useError()

  const register = useMutation({
    mutationFn: async (user: SignIn) =>
      await axios.post(`${process.env.VITE_APP_API}/signup`, user),
  })

  return {
    // /* <SigninPresenter props={register} />
  }
}
