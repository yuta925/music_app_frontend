// import { useError } from '../../../hooks/useError'
// import { useMutation } from '@tanstack/react-query'
// import axios from 'axios'

// type SignIn = {
//   icon: string
//   name: string
//   email: string
//   password: string
// }

export const SignupContainer = () => {
  //   const { switchErrorHandling } = useError()

  //   const register = useMutation<SignIn, void, unknown>(
  //     async (user) =>
  //       await axios.post(`${process.env.VITE_APP_API}/signup`, user),
  //     {
  //       onError: (err: any) => {
  //         if (err.response?.data?.message) {
  //           switchErrorHandling(err.response.data.message)
  //         } else {
  //           switchErrorHandling(err.response.data)
  //         }
  //       },
  //     }
  //   )

  return {
    /* <SigninPresenter props={register} /> */
  }
}
