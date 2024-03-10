import axios from 'axios'
import { ProfilePresenter } from './ProfilePresenter'
import { useState, useEffect } from 'react'

type UserProfile = {
  userIcon: string
  name: string
}

export const ProfileContainer = () => {
  const [userIcon, setUserIcon] = useState('src/assets/images/default.png')
  const [name, setName] = useState('yuta')
  useEffect(() => {
    const getProufile = async () => {
      const response = await axios.get<UserProfile>(
        `${import.meta.env.VITE_APP_API}/users/me`
      )
      return response.data
    }

    const fetchProfile = async () => {
      const userInfo = await getProufile()
      setUserIcon(userInfo.userIcon)
      setName(userInfo.name)
    }

    fetchProfile()
  }, [])

  return <ProfilePresenter />
}
