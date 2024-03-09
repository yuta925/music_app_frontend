import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputReactHookFormTextField } from './bulletinBoardCreatePresenter'

type SignIn = {
  icon: string
  title: string
}

export const CreateContainer = () => {
  const [icon, setIcon] = useState('src/assets/images/default.png')
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const register = useMutation({
    mutationFn: async (user: SignIn) =>
      await axios.post(`${process.env.VITE_APP_API}/signup`, user),
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
    await register.mutateAsync({
      icon: icon,
      title: title,
    })
  }
  return (
    <InputReactHookFormTextField
      icon={icon}
      title={title}
      setTitle={setTitle}
      navigate={() => navigate('/')}
      submitAuthhandler={submitAuthhandler}
      onFileInputChange={onFileInputChange}
    />
  )
}
