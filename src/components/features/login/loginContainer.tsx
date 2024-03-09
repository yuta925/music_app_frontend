import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginPresenter from './loginPresenter'
import { useState } from 'react'

type UserLogin = {
  email: string
  password: string
}

export const LoginContainer = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useMutation({
    mutationFn: async (user: UserLogin) =>
      await axios.post(`${process.env.VITE_APP_API}/login`, user),
    onSuccess: () => {
      navigate('/home')
    },
  })

  const submitAuthhandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    login.mutate({
      email: email,
      password: password,
    })
  }
  return (
    <LoginPresenter
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      navigate={() => navigate('/signin')}
      submitAuthhandler={submitAuthhandler}
    />
  )
}
