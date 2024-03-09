import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupPresenter } from './signupPresenter'

type SignIn = {
  icon: string
  name: string
  email: string
  password: string
}

export const SignupContainer = () => {
  const [icon, setIcon] = useState('src/assets/images/default.png')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const register = useMutation({
    mutationFn: async (user: SignIn) =>
      await axios.post(`${import.meta.env.VITE_APP_API}/users`, user),
    onSuccess: () => {
      navigate('/home')
    },
  })

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    // React.ChangeEvent<HTMLInputElement>よりファイルを取得
    const fileObject = e.target.files[0]
    // オブジェクトURLを生成し、useState()を更新
    setIcon(window.URL.createObjectURL(fileObject))
  }

  const submitAuthhandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    await register
      .mutateAsync({
        icon: icon,
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        navigate('/home')
      })
  }
  return (
    <SignupPresenter
      icon={icon}
      name={name}
      email={email}
      password={password}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      navigate={() => navigate('/')}
      submitAuthhandler={submitAuthhandler}
      onFileInputChange={onFileInputChange}
    />
  )
}
