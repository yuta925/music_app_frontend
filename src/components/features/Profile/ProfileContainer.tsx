import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { ProfilePresenter } from './ProfilePresenter'
import { useNavigate } from 'react-router-dom'

type UserProfile = {
  user_icon: string
  user_name: string
}

export const ProfileContainer = () => {
  const navigate = useNavigate()
  const [userIcon, setUserIcon] = useState('')
  const [userName, setUserName] = useState('')
  const getUserProfile = async () => {
    const { data } = await axios.get<UserProfile>(
      `${import.meta.env.VITE_APP_API}/user/profile`
    )
    return data
  }

  return <ProfilePresenter />
}
