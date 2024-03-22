import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginPresenter } from './loginPresenter'
import { useState } from 'react'

type UserLogin = {
  email: string
  password: string
}

export const LoginContainer = () => {
  // ログインのためのstate
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // ページ遷移のための関数
  const navigate = useNavigate()

  // post処理のための関数
  const login = useMutation({
    mutationFn: async (user: UserLogin) =>
      await axios.post(
        `${import.meta.env.VITE_APP_API}/auth/access-token`,
        user
      ),
    onSuccess() {
      navigate(`/home`)
    },
  })

  // ログイン処理のための関数
  const submitAuthhandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    login.mutateAsync({
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
